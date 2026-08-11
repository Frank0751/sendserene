"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { languagesFeature, languages } from "@/lib/site-content";
import { Languages, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function LanguagesSection() {
  const { ref, visible } = useReveal();
  const [active, setActive] = useState(0);
  const lang = languages[active];

  return (
    <section id="languages" className="border-y border-paper-3 bg-paper-2/30 paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
            {/* Left copy */}
            <div>
              <p className="eyebrow">{languagesFeature.eyebrow}</p>
              <h2 className="display mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
                The system wasn't built for families who don't think in English.{" "}
                <em className="accent">We are.</em>
              </h2>
              <p className="mt-5 font-serif text-[1.05rem] leading-[1.7] text-ink-mid">
                {languagesFeature.body}
              </p>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-2">
                {languages.map((l, i) => (
                  <button
                    key={l.code}
                    onClick={() => setActive(i)}
                    className={cn(
                      "p-3 rounded-lg border text-left transition-all",
                      active === i
                        ? "border-teal bg-teal-pale/50"
                        : "border-paper-3 bg-paper-card hover:border-ink-light/40"
                    )}
                    aria-pressed={active === i}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-ink-light">{l.code}</span>
                      {active === i && <Check className="h-3 w-3 text-teal" />}
                    </div>
                    <p className="font-display text-[14px] font-medium text-ink mt-1" dir={["ur"].includes(l.code) ? "rtl" : "ltr"}>
                      {l.native}
                    </p>
                    <p className="font-mono text-[9.5px] text-ink-light mt-0.5">{l.label}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Right, live demo card */}
            <div className="relative">
              <div
                className="absolute -inset-2 rounded-2xl opacity-90 -rotate-1"
                style={{ background: "linear-gradient(135deg, var(--clay-pale), var(--teal-pale))" }}
                aria-hidden
              />
              <div className="relative card-paper p-7 lg:p-9">
                <div className="flex items-center justify-between mb-6">
                  <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-light">
                    <Languages className="h-3.5 w-3.5" /> Interface sample
                  </span>
                  <span className="tag tag-cat" style={{ fontSize: "9px" }}>{lang.label}</span>
                </div>

                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-teal mb-2">
                  Home screen headline
                </p>
                <p
                  className="font-display text-[1.6rem] sm:text-[1.85rem] font-semibold leading-[1.2] text-ink min-h-[2.4em]"
                  dir={["ur", "pa", "bn", "ar", "fa"].includes(lang.code) ? "rtl" : "ltr"}
                  style={{ fontFamily: ["ur", "pa", "bn", "ar", "fa"].includes(lang.code) ? undefined : "var(--font-display)" }}
                >
                  {lang.sample}
                </p>

                <div className="mt-6 pt-6 border-t border-paper-3 space-y-3">
                  {[
                    { en: "Record a voice log", native: languagesNative[active].record },
                    { en: "Decode a letter", native: languagesNative[active].decode },
                    { en: "Build evidence pack", native: languagesNative[active].pack },
                  ].map((item) => (
                    <div key={item.en} className="flex items-center justify-between gap-4">
                      <span className="font-serif text-[13.5px] text-ink-mid">{item.en}</span>
                      <span
                        className="font-display text-[13.5px] font-medium text-ink text-right"
                        dir={["ur", "pa", "bn", "ar", "fa"].includes(lang.code) ? "rtl" : "ltr"}
                      >
                        {item.native}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-6 font-mono text-[9px] uppercase tracking-[0.12em] text-ink-light leading-relaxed">
                  Toggle and framework built by KoomBei. Translated wording supplied and validated by Zifankrah Ltd.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sample translations for the three UI labels across all sixteen languages.
const languagesNative = [
  { record: "Record a voice log", decode: "Decode a letter", pack: "Build evidence pack" },
  { record: "Ku diiwaangeli cod", decode: "Fur warqadda", pack: "Dhigi cadayn" },
  { record: "آواز لاگ کریں", decode: "خط ڈی کوڈ کریں", pack: "ثبتی پیکیج بنائیں" },
  { record: "ਵੌਇਸ ਲਾਗ ਰਿਕਾਰਡ ਕਰੋ", decode: "ਖਤ ਡੀਕੋਡ ਕਰੋ", pack: "ਸਬੂਤ ਪੈਕ ਬਣਾਓ" },
  { record: "ভয়েস লগ রেকর্ড করুন", decode: "চিঠি ডিকোড করুন", pack: "প্রমাণ প্যাক তৈরি করুন" },
  { record: "Nagraj notatkę głosową", decode: "Zdekoduj list", pack: "Stwórz pakiet dowodów" },
  { record: "سجل ملاحظة صوتية", decode: "فك تشفير رسالة", pack: "أنشئ حزمة أدلة" },
  { record: "Enregistrer une note vocale", decode: "Décoder une lettre", pack: "Créer un dossier de preuves" },
  { record: "Gravar nota de voz", decode: "Decodificar carta", pack: "Criar pacote de provas" },
  { record: "Sesli not kaydet", decode: "Mektubu çöz", pack: "Kanıt paketi oluştur" },
  { record: "Înregistrează notă vocală", decode: "Decodifică scrisoarea", pack: "Creează pachet de dovezi" },
  { record: "录制语音笔记", decode: "解码信件", pack: "创建证据包" },
  { record: "Grabar nota de voz", decode: "Decodificar carta", pack: "Crear paquete de pruebas" },
  { record: "ثبت یادداشت صوتی", decode: "رمزگشایی نامه", pack: "ایجاد بسته شواهد" },
  { record: "Itala ang voice note", decode: "I-decode ang sulat", pack: "Gumawa ng evidence pack" },
  { record: "Ghi âm ghi chú", decode: "Giải mã thư", pack: "Tạo gói bằng chứng" },
];
