import { NextRequest, NextResponse } from "next/server";
import ZAI from "z-ai-web-dev-sdk";

export const runtime = "nodejs";
export const maxDuration = 40;

interface DecodeResult {
  summary: string;
  jargon: { term: string; meaning: string }[];
  deadlines: { label: string; date: string; note: string }[];
  flags: { type: string; text: string }[];
}

const SYSTEM_PROMPT = `You are the SENDSerene jargon decoder. A UK parent has uploaded or pasted text from a letter, email or document about their child's special educational needs and disabilities (SEND) provision.

Your job: decode it into plain English a tired parent can understand.

Return STRICT JSON only, no markdown fences, matching this shape:
{
  "summary": "2-4 sentences in plain English. Direct, human, no jargon. Explain what the document means and what (if anything) it commits anyone to.",
  "jargon": [{"term":"the exact phrase from the text","meaning":"plain-English definition, 1-2 sentences, specific to the UK SEND context"}],
  "deadlines": [{"label":"what the deadline is for","date":"a date in DD Month YYYY format if derivable, or an empty string","note":"one short line of context"}],
  "flags": [{"type":"vague","text":"flag vague or unenforceable wording like 'access to support as needed' vs specific hours; explain why it's weak"}]
}

Rules:
- Never invent dates. If no date can be derived from the text, return an empty deadlines array.
- Quote jargon terms exactly as they appear.
- Be direct, not reassuring. If wording is weak, say so plainly in a flag.
- Do not give legal advice. Do not speculate beyond the text.
- If the text is not a SEND-related document, return {"summary":"This doesn't look like a SEND letter or document. Try pasting text from a council letter, school report, or EHCP-related email.","jargon":[],"deadlines":[],"flags":[]}`;

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();
    if (!text || typeof text !== "string" || text.trim().length < 12) {
      return NextResponse.json(
        { error: "Please paste at least a sentence of text to decode." },
        { status: 400 }
      );
    }
    if (text.length > 4000) {
      return NextResponse.json(
        { error: "That's quite long. Paste up to around 4,000 characters." },
        { status: 400 }
      );
    }

    const zai = await ZAI.create();
    const completion = await zai.chat.completions.create({
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: text },
      ],
      thinking: { type: "disabled" },
    });

    const raw = completion.choices[0]?.message?.content ?? "";

    let parsed: DecodeResult;
    try {
      const clean = raw.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();
      parsed = JSON.parse(clean);
    } catch {
      parsed = {
        summary: raw.slice(0, 600),
        jargon: [],
        deadlines: [],
        flags: [],
      };
    }

    return NextResponse.json({ ok: true, result: parsed });
  } catch (err) {
    console.error("[/api/decode] error", err);
    return NextResponse.json(
      { error: "The decoder hit a problem. Try again in a moment." },
      { status: 500 }
    );
  }
}
