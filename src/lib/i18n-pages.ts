/* ============================================================
   SENDSerene, page copy localisation
   ------------------------------------------------------------
   The headline block for every page: the home hero, and the
   eyebrow / title / body that each sub-page passes to PageHeader.

   Scope note. The six languages named in the brief (English,
   Somali, Urdu, Punjabi, Bengali, Polish) are translated in full.
   The ten additional languages carry the short strings, eyebrows,
   titles and calls to action, and fall back to English for the
   longer body prose.

   Deliberately NOT machine translated: the statutory timescale
   table, the glossary definitions, the decoder output and the
   security and compliance prose. Those carry legal meaning for
   families making decisions about their child's case, and per
   the brief the wording is supplied and validated by Zifankrah
   Ltd. Getting a deadline or a right of appeal wrong in
   translation would do real harm, so it waits for a native
   speaker with the legal content in front of them.
   ============================================================ */

import type { LocaleCode } from "./i18n";

export type PageKey =
  | "hero.eyebrow" | "hero.title" | "hero.lede" | "hero.cta1" | "hero.cta2"
  | "page.voice.eyebrow" | "page.voice.title" | "page.voice.body"
  | "page.decoder.eyebrow" | "page.decoder.title" | "page.decoder.body"
  | "page.evidence.eyebrow" | "page.evidence.title" | "page.evidence.body"
  | "page.dashboard.eyebrow" | "page.dashboard.title" | "page.dashboard.body"
  | "page.glossary.eyebrow" | "page.glossary.title" | "page.glossary.body"
  | "page.timescales.eyebrow" | "page.timescales.title" | "page.timescales.body"
  | "page.ehcp.eyebrow" | "page.ehcp.title" | "page.ehcp.body"
  | "page.pricing.eyebrow" | "page.pricing.title" | "page.pricing.body"
  | "page.security.eyebrow" | "page.security.title" | "page.security.body"
  | "page.faq.eyebrow" | "page.faq.title" | "page.faq.body";

type PageDict = Partial<Record<PageKey, string>>;

const en: Record<PageKey, string> = {
  "hero.eyebrow": "For UK parents navigating SEND",
  "hero.title": "Speak your language. We'll handle theirs.",
  "hero.lede":
    "Say what happened out loud, in any of sixteen languages. SENDSerene writes it down, dates it, and files it. Then, when the council writes back in language designed to be difficult, it tells you what they actually mean and what you have to do by when.",
  "hero.cta1": "Start a free account",
  "hero.cta2": "See an evidence pack",

  "page.voice.eyebrow": "Voice logging",
  "page.voice.title": "Say it out loud while it's fresh. We'll do the rest.",
  "page.voice.body":
    "You don't have time to write a diary. But you do have five minutes in the car after pickup, or standing in the kitchen waiting for the kettle. Hit record. Tell it like it happened. SENDSerene turns that into a dated, categorised, searchable entry.",

  "page.decoder.eyebrow": "Jargon decoder",
  "page.decoder.title": "Council letters, decoded. Deadlines, surfaced.",
  "page.decoder.body":
    "Most parents don't speak the language these letters are written in. SENDSerene does. Paste the text or upload the PDF, and you get a plain-English summary, a glossary of the jargon used, and any deadline pulled out with the exact passage it came from.",

  "page.evidence.eyebrow": "Evidence pack",
  "page.evidence.title": "When the meeting lands, your case is already made.",
  "page.evidence.body":
    "A year of voice logs and decoded letters, filtered to what matters for this review, compiled into a paginated PDF. Each entry numbered so you can cite it. Tags muted so the pack reads as organised record-keeping, not a complaint.",

  "page.dashboard.eyebrow": "Pattern dashboard",
  "page.dashboard.title": "The patterns you're too tired to see. Surfaced.",
  "page.dashboard.body":
    "When you're living it day to day, patterns are invisible. Is sleep getting worse? Is the reading homework taking longer? SENDSerene surfaces trends across your logged observations by category and over time, so you walk into a review already knowing what the record says.",

  "page.glossary.eyebrow": "SEND glossary",
  "page.glossary.title": "The words that keep parents out. Defined.",
  "page.glossary.body":
    "This is a sample of the glossary that powers the jargon decoder. The full version covers hundreds of terms across all sixteen languages, validated by Zifankrah Ltd. Here are the ones parents see most often.",

  "page.timescales.eyebrow": "Statutory timescales",
  "page.timescales.title": "The legal clock. Every week, on the record.",
  "page.timescales.body":
    "The SEND system runs on statutory deadlines. Most parents don't know they exist until one has passed. This is the full timescale table that powers SENDSerene's deadline calculator, validated by Zifankrah Ltd.",

  "page.ehcp.eyebrow": "Inside an EHCP",
  "page.ehcp.title": "Eleven sections. Here's what each one is for.",
  "page.ehcp.body":
    "An Education, Health and Care Plan isn't one document, it's eleven. Each section covers a different part of your child's needs or the support they should get. Knowing which section says what is the difference between accepting a plan and holding the council to it.",

  "page.pricing.eyebrow": "Pricing",
  "page.pricing.title": "Free to start. £5 a month when it matters.",
  "page.pricing.body":
    "Every account starts free: three jargon decodes, thirty voice logs, one collaborator. Upgrade when you need full history, filtering, and the evidence pack export. Per-child pricing, because most families have one child with SEND, some have more.",

  "page.security.eyebrow": "Security & privacy",
  "page.security.title": "Special category data, treated like it.",
  "page.security.body":
    "Your child's health and disability information is the most protected class of personal data under UK law. SENDSerene is built accordingly.",

  "page.faq.eyebrow": "FAQ & more",
  "page.faq.title": "The questions parents actually ask.",
  "page.faq.body":
    "Short answers, honest scope, and the full picture of who built this and how it works.",
};

/* ---------- The six languages named in the brief, in full ---------- */

const so: PageDict = {
  "hero.eyebrow": "Waalidiinta UK ee la tacaalaya SEND",
  "hero.title": "Ku hadal luqaddaada. Annaga ayaa u qaban doonna tooda.",
  "hero.lede":
    "Cod dheer ku sheeg waxa dhacay, mid ka mid ah lix iyo toban luqadood. SENDSerene way qortaa, taariikh u dhigtaa, wayna kaydisaa. Markaas, marka golaha degmadu kugu soo qoro luqad si ula kac ah u adag, waxay kuu sheegaysaa waxa ay dhab ahaan ula jeedaan iyo waxa aad samayn karto iyo goorta.",
  "hero.cta1": "Furo akoon bilaash ah",
  "hero.cta2": "Arag xirmada caddaynta",

  "page.voice.eyebrow": "Diiwaangelinta codka",
  "page.voice.title": "Ku sheeg cod dheer inta ay cusub tahay. Inta kale annagaa qabanayna.",
  "page.voice.body":
    "Waqti aad xusuus-qor ku qorto ma haysid. Laakiin waxaad haysataa shan daqiiqo oo gaariga ku jirta kadib qaadista, ama jikada adigoo sugaya kettle-ka. Riix duubista. U sheeg sida ay u dhacday. SENDSerene waxay u beddeshaa qoraal taariikhaysan, la kala saaray, oo la raadin karo.",

  "page.decoder.eyebrow": "Furaha erayada",
  "page.decoder.title": "Warqadaha golaha, la fasiray. Waqtiyada, la muujiyay.",
  "page.decoder.body":
    "Waalidiin badan kuma hadlaan luqadda warqadahan lagu qoray. SENDSerene way ku hadashaa. Ku dheji qoraalka ama soo geli PDF-ka, waxaadna helaysaa soo koobid Ingiriis fudud ah, qaamuus erayada adag, iyo waqti kasta oo muhiim ah oo lala soo baxay meesha uu ka yimid.",

  "page.evidence.eyebrow": "Xirmada caddaynta",
  "page.evidence.title": "Marka kulanku yimaado, kiiskaagu horeba wuu u diyaar yahay.",
  "page.evidence.body":
    "Sannad oo diiwaan cod ah iyo warqado la fasiray, la shaandheeyay waxa dib-u-eegistan muhiimka u ah, lagu soo ururiyay PDF bogag leh. Gal kasta waa la tiriyay si aad u soo xigato. Calaamadaha waa la dejiyay si xirmadu u ekaato diiwaan hagaagsan, ee aan ahayn cabasho.",

  "page.dashboard.eyebrow": "Muuqaalka qaababka",
  "page.dashboard.title": "Qaababka aad u daallan tahay inaad aragto. La muujiyay.",
  "page.dashboard.body":
    "Marka aad maalin kasta ku noolaato, qaababku waa qarsoon yihiin. Hurdadu ma sii xumaanaysaa? Shaqada guriga ee akhriska ma sii dheeraanaysaa? SENDSerene waxay muujisaa isbeddellada diiwaannadaada oo dhan, si aad dib-u-eegista ugu timaado adigoo hore u og waxa diiwaanku sheegayo.",

  "page.glossary.eyebrow": "Qaamuuska SEND",
  "page.glossary.title": "Ereyada waalidiinta ka celiya. La qeexay.",
  "page.glossary.body":
    "Kani waa tusaale qaamuuska shaqaaleeya furaha erayada. Nooca buuxa wuxuu daboolayaa boqollaal eray oo ku jira dhammaan lix iyo tobanka luqadood, oo ay ansixisay Zifankrah Ltd. Kuwan waa kuwa waalidiintu ugu badan arkaan.",

  "page.timescales.eyebrow": "Waqtiyada sharciga",
  "page.timescales.title": "Saacadda sharciga. Toddobaad kasta, diiwaanka ku jira.",
  "page.timescales.body":
    "Nidaamka SEND wuxuu ku shaqeeyaa waqtiyo sharci ah. Waalidiin badan ma oga inay jiraan ilaa mid dhaafo. Kanu waa shaxda waqtiyada buuxda ee shaqaaleeya xisaabiyaha waqtiyada SENDSerene, oo ay ansixisay Zifankrah Ltd.",

  "page.ehcp.eyebrow": "Gudaha EHCP",
  "page.ehcp.title": "Kow iyo toban qaybood. Waa kuwan waxa mid kastaa u yahay.",
  "page.ehcp.body":
    "Qorshaha Waxbarashada, Caafimaadka iyo Daryeelka maaha hal dukumeenti, waa kow iyo toban. Qayb kastaa waxay daboolaysaa qayb ka duwan baahiyaha ilmahaaga ama taageerada uu heli lahaa. Ogaanshaha qaybta waxa ay sheegayso ayaa ah farqiga u dhexeeya aqbalaadda qorshaha iyo in golaha lagu qabto.",

  "page.pricing.eyebrow": "Qiimaha",
  "page.pricing.title": "Bilaash ku bilow. £5 bishii marka ay muhiim tahay.",
  "page.pricing.body":
    "Akoon kastaa wuxuu ku bilaabmaa bilaash: saddex furitaan eray, soddon diiwaan cod, hal la-shaqeeye. Kor u qaad marka aad u baahato taariikh buuxa, shaandhayn, iyo dhoofinta xirmada caddaynta. Qiimaha ilmo kasta, sababtoo ah qoysas badan hal ilmo ayay leeyihiin, qaarna wax ka badan.",

  "page.security.eyebrow": "Amniga & asturnaanta",
  "page.security.title": "Xog nooca gaarka ah, sidii loo qabo.",
  "page.security.body":
    "Macluumaadka caafimaadka iyo naafanimada ilmahaaga waa nooca ugu ilaalsan ee xogta shakhsiga ah ee sharciga UK. SENDSerene sidaas ayaa loo dhisay.",

  "page.faq.eyebrow": "Su'aalaha & wax dheeraad ah",
  "page.faq.title": "Su'aalaha waalidiintu dhab ahaan weydiiyaan.",
  "page.faq.body":
    "Jawaabo gaagaaban, baaxad daacad ah, iyo sawirka buuxa ee cida dhistay iyo sida ay u shaqeyso.",
};

const ur: PageDict = {
  "hero.eyebrow": "SEND کے سفر میں برطانوی والدین کے لیے",
  "hero.title": "آپ اپنی زبان بولیں۔ ان کی زبان ہم سنبھال لیں گے۔",
  "hero.lede":
    "جو ہوا وہ بول کر بتا دیں، سولہ زبانوں میں سے کسی ایک میں۔ SENDSerene اسے لکھ لیتا ہے، تاریخ ڈالتا ہے اور محفوظ کر دیتا ہے۔ پھر جب کونسل جان بوجھ کر مشکل زبان میں جواب دے، یہ آپ کو بتاتا ہے کہ اصل میں ان کا مطلب کیا ہے اور آپ کو کب تک کیا کرنا ہے۔",
  "hero.cta1": "مفت اکاؤنٹ شروع کریں",
  "hero.cta2": "شواہد کا مجموعہ دیکھیں",

  "page.voice.eyebrow": "آواز سے ریکارڈنگ",
  "page.voice.title": "تازہ ہو تو بول کر بتا دیں۔ باقی ہم سنبھال لیں گے۔",
  "page.voice.body":
    "آپ کے پاس ڈائری لکھنے کا وقت نہیں۔ لیکن اسکول سے واپسی پر گاڑی میں پانچ منٹ ضرور ہوتے ہیں۔ ریکارڈ دبائیں اور جیسے ہوا ویسے بتا دیں۔ SENDSerene اسے تاریخ شدہ، درجہ بند اور قابلِ تلاش اندراج بنا دیتا ہے۔",

  "page.decoder.eyebrow": "اصطلاحات کی وضاحت",
  "page.decoder.title": "کونسل کے خطوط، آسان زبان میں۔ آخری تاریخیں، سامنے۔",
  "page.decoder.body":
    "زیادہ تر والدین وہ زبان نہیں جانتے جس میں یہ خطوط لکھے جاتے ہیں۔ SENDSerene جانتا ہے۔ متن چسپاں کریں یا PDF اپ لوڈ کریں، آپ کو سادہ انگریزی خلاصہ، اصطلاحات کی فہرست، اور ہر آخری تاریخ اُس عبارت کے ساتھ ملے گی جہاں سے وہ لی گئی۔",

  "page.evidence.eyebrow": "شواہد کا مجموعہ",
  "page.evidence.title": "جب میٹنگ آئے، آپ کا مقدمہ پہلے سے تیار ہو۔",
  "page.evidence.body":
    "ایک سال کے آواز ریکارڈ اور سمجھائے گئے خطوط، اس جائزے کے لیے اہم چیزوں پر چھانٹ کر، صفحہ نمبروں والی PDF میں۔ ہر اندراج نمبر شدہ تاکہ آپ حوالہ دے سکیں۔ رنگ ہلکے، تاکہ یہ شکایت نہیں بلکہ منظم ریکارڈ لگے۔",

  "page.dashboard.eyebrow": "پیٹرن ڈیش بورڈ",
  "page.dashboard.title": "وہ پیٹرن جو تھکن میں نظر نہیں آتے۔ سامنے لائے گئے۔",
  "page.dashboard.body":
    "روزمرہ میں رہتے ہوئے پیٹرن دکھائی نہیں دیتے۔ کیا نیند بگڑ رہی ہے؟ کیا پڑھائی کا کام لمبا ہو رہا ہے؟ SENDSerene آپ کے اندراجات میں رجحانات کو زمرے اور وقت کے حساب سے سامنے لاتا ہے، تاکہ آپ جائزے میں پہلے سے جانتے ہوئے جائیں۔",

  "page.glossary.eyebrow": "SEND لغت",
  "page.glossary.title": "وہ الفاظ جو والدین کو باہر رکھتے ہیں۔ واضح کیے گئے۔",
  "page.glossary.body":
    "یہ اُس لغت کا نمونہ ہے جو اصطلاحات کی وضاحت چلاتی ہے۔ مکمل نسخہ سولہ زبانوں میں سینکڑوں اصطلاحات پر مشتمل ہے، جس کی توثیق Zifankrah Ltd کرتی ہے۔ یہ وہ ہیں جو والدین سب سے زیادہ دیکھتے ہیں۔",

  "page.timescales.eyebrow": "قانونی مدت",
  "page.timescales.title": "قانونی گھڑی۔ ہر ہفتہ، ریکارڈ پر۔",
  "page.timescales.body":
    "SEND کا نظام قانونی آخری تاریخوں پر چلتا ہے۔ زیادہ تر والدین کو ان کا علم تب ہوتا ہے جب ایک گزر چکی ہو۔ یہ وہ مکمل جدول ہے جو SENDSerene کا کیلکولیٹر چلاتا ہے، جس کی توثیق Zifankrah Ltd کرتی ہے۔",

  "page.ehcp.eyebrow": "EHCP کے اندر",
  "page.ehcp.title": "گیارہ حصے۔ ہر ایک کس کام کا ہے۔",
  "page.ehcp.body":
    "تعلیم، صحت اور نگہداشت کا منصوبہ ایک دستاویز نہیں، گیارہ ہے۔ ہر حصہ آپ کے بچے کی ضروریات یا ملنے والی مدد کا الگ پہلو بیان کرتا ہے۔ کون سا حصہ کیا کہتا ہے، یہ جاننا ہی منصوبہ قبول کرنے اور کونسل کو پابند کرنے میں فرق ہے۔",

  "page.pricing.eyebrow": "قیمتیں",
  "page.pricing.title": "شروع مفت۔ ضرورت پڑے تو £5 ماہانہ۔",
  "page.pricing.body":
    "ہر اکاؤنٹ مفت شروع ہوتا ہے: تین اصطلاحی وضاحتیں، تیس آواز ریکارڈ، ایک ساتھی۔ جب مکمل تاریخ، چھانٹ اور شواہد کا مجموعہ درکار ہو تو اپ گریڈ کریں۔ فی بچہ قیمت، کیونکہ زیادہ تر خاندانوں کا ایک بچہ ہوتا ہے، کچھ کے زیادہ۔",

  "page.security.eyebrow": "سیکیورٹی اور رازداری",
  "page.security.title": "خصوصی زمرے کا ڈیٹا، ویسا ہی سلوک۔",
  "page.security.body":
    "آپ کے بچے کی صحت اور معذوری کی معلومات برطانوی قانون میں ذاتی ڈیٹا کا سب سے محفوظ درجہ ہے۔ SENDSerene اسی کے مطابق بنایا گیا ہے۔",

  "page.faq.eyebrow": "عام سوالات اور مزید",
  "page.faq.title": "وہ سوال جو والدین واقعی پوچھتے ہیں۔",
  "page.faq.body":
    "مختصر جواب، ایماندار دائرہ کار، اور یہ پوری تصویر کہ اسے کس نے بنایا اور یہ کیسے کام کرتا ہے۔",
};

const pa: PageDict = {
  "hero.eyebrow": "SEND ਨਾਲ ਜੂਝ ਰਹੇ ਯੂਕੇ ਦੇ ਮਾਪਿਆਂ ਲਈ",
  "hero.title": "ਤੁਸੀਂ ਆਪਣੀ ਭਾਸ਼ਾ ਬੋਲੋ। ਉਹਨਾਂ ਦੀ ਅਸੀਂ ਸੰਭਾਲਾਂਗੇ।",
  "hero.lede":
    "ਜੋ ਹੋਇਆ ਉਹ ਬੋਲ ਕੇ ਦੱਸੋ, ਸੋਲਾਂ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚੋਂ ਕਿਸੇ ਇੱਕ ਵਿੱਚ। SENDSerene ਉਸਨੂੰ ਲਿਖ ਲੈਂਦਾ ਹੈ, ਤਾਰੀਖ਼ ਪਾਉਂਦਾ ਹੈ ਤੇ ਸੰਭਾਲ ਲੈਂਦਾ ਹੈ। ਫਿਰ ਜਦੋਂ ਕੌਂਸਲ ਜਾਣ-ਬੁੱਝ ਕੇ ਔਖੀ ਭਾਸ਼ਾ ਵਿੱਚ ਜਵਾਬ ਦੇਵੇ, ਇਹ ਦੱਸਦਾ ਹੈ ਕਿ ਅਸਲ ਵਿੱਚ ਮਤਲਬ ਕੀ ਹੈ ਤੇ ਤੁਹਾਨੂੰ ਕਦੋਂ ਤੱਕ ਕੀ ਕਰਨਾ ਹੈ।",
  "hero.cta1": "ਮੁਫ਼ਤ ਖਾਤਾ ਸ਼ੁਰੂ ਕਰੋ",
  "hero.cta2": "ਸਬੂਤ ਪੈਕ ਵੇਖੋ",

  "page.voice.eyebrow": "ਆਵਾਜ਼ ਰਿਕਾਰਡਿੰਗ",
  "page.voice.title": "ਤਾਜ਼ਾ ਹੋਵੇ ਤਾਂ ਬੋਲ ਕੇ ਦੱਸੋ। ਬਾਕੀ ਅਸੀਂ ਸੰਭਾਲਾਂਗੇ।",
  "page.voice.body":
    "ਤੁਹਾਡੇ ਕੋਲ ਡਾਇਰੀ ਲਿਖਣ ਦਾ ਸਮਾਂ ਨਹੀਂ। ਪਰ ਸਕੂਲ ਤੋਂ ਲਿਆਉਣ ਮਗਰੋਂ ਗੱਡੀ ਵਿੱਚ ਪੰਜ ਮਿੰਟ ਜ਼ਰੂਰ ਹੁੰਦੇ ਹਨ। ਰਿਕਾਰਡ ਦਬਾਓ ਤੇ ਜਿਵੇਂ ਹੋਇਆ ਦੱਸ ਦਿਓ। SENDSerene ਇਸਨੂੰ ਤਾਰੀਖ਼ ਵਾਲੀ, ਸ਼੍ਰੇਣੀਬੱਧ ਤੇ ਖੋਜਣਯੋਗ ਐਂਟਰੀ ਬਣਾ ਦਿੰਦਾ ਹੈ।",

  "page.decoder.eyebrow": "ਸ਼ਬਦ ਸਮਝਾਊ",
  "page.decoder.title": "ਕੌਂਸਲ ਦੀਆਂ ਚਿੱਠੀਆਂ, ਸੌਖੀ ਭਾਸ਼ਾ ਵਿੱਚ। ਤਾਰੀਖ਼ਾਂ, ਸਾਹਮਣੇ।",
  "page.decoder.body":
    "ਬਹੁਤੇ ਮਾਪੇ ਉਹ ਭਾਸ਼ਾ ਨਹੀਂ ਜਾਣਦੇ ਜਿਸ ਵਿੱਚ ਇਹ ਚਿੱਠੀਆਂ ਲਿਖੀਆਂ ਹੁੰਦੀਆਂ ਹਨ। SENDSerene ਜਾਣਦਾ ਹੈ। ਲਿਖਤ ਪੇਸਟ ਕਰੋ ਜਾਂ PDF ਅੱਪਲੋਡ ਕਰੋ, ਤੁਹਾਨੂੰ ਸਾਦਾ ਸਾਰ, ਔਖੇ ਸ਼ਬਦਾਂ ਦੀ ਸੂਚੀ, ਤੇ ਹਰ ਤਾਰੀਖ਼ ਉਸ ਹਿੱਸੇ ਸਮੇਤ ਮਿਲੇਗੀ ਜਿੱਥੋਂ ਉਹ ਆਈ।",

  "page.evidence.eyebrow": "ਸਬੂਤ ਪੈਕ",
  "page.evidence.title": "ਜਦੋਂ ਮੀਟਿੰਗ ਆਵੇ, ਤੁਹਾਡਾ ਕੇਸ ਪਹਿਲਾਂ ਹੀ ਤਿਆਰ ਹੋਵੇ।",
  "page.evidence.body":
    "ਸਾਲ ਭਰ ਦੀਆਂ ਆਵਾਜ਼ ਐਂਟਰੀਆਂ ਤੇ ਸਮਝਾਈਆਂ ਚਿੱਠੀਆਂ, ਇਸ ਸਮੀਖਿਆ ਲਈ ਜ਼ਰੂਰੀ ਗੱਲਾਂ ਤੱਕ ਛਾਣ ਕੇ, ਪੰਨਾ ਨੰਬਰਾਂ ਵਾਲੀ PDF ਵਿੱਚ। ਹਰ ਐਂਟਰੀ ਨੰਬਰਦਾਰ ਤਾਂ ਜੋ ਤੁਸੀਂ ਹਵਾਲਾ ਦੇ ਸਕੋ।",

  "page.dashboard.eyebrow": "ਪੈਟਰਨ ਡੈਸ਼ਬੋਰਡ",
  "page.dashboard.title": "ਉਹ ਪੈਟਰਨ ਜੋ ਥਕਾਵਟ ਵਿੱਚ ਨਹੀਂ ਦਿਸਦੇ। ਸਾਹਮਣੇ ਲਿਆਂਦੇ।",
  "page.dashboard.body":
    "ਰੋਜ਼ ਦੀ ਜ਼ਿੰਦਗੀ ਵਿੱਚ ਪੈਟਰਨ ਦਿਖਾਈ ਨਹੀਂ ਦਿੰਦੇ। ਕੀ ਨੀਂਦ ਵਿਗੜ ਰਹੀ ਹੈ? ਕੀ ਪੜ੍ਹਾਈ ਦਾ ਕੰਮ ਲੰਮਾ ਹੋ ਰਿਹਾ ਹੈ? SENDSerene ਤੁਹਾਡੀਆਂ ਐਂਟਰੀਆਂ ਵਿੱਚੋਂ ਰੁਝਾਨ ਸਾਹਮਣੇ ਲਿਆਉਂਦਾ ਹੈ।",

  "page.glossary.eyebrow": "SEND ਸ਼ਬਦਕੋਸ਼",
  "page.glossary.title": "ਉਹ ਸ਼ਬਦ ਜੋ ਮਾਪਿਆਂ ਨੂੰ ਬਾਹਰ ਰੱਖਦੇ ਹਨ। ਸਮਝਾਏ ਗਏ।",
  "page.glossary.body":
    "ਇਹ ਉਸ ਸ਼ਬਦਕੋਸ਼ ਦਾ ਨਮੂਨਾ ਹੈ ਜੋ ਸ਼ਬਦ ਸਮਝਾਊ ਚਲਾਉਂਦਾ ਹੈ। ਪੂਰਾ ਰੂਪ ਸੋਲਾਂ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਸੈਂਕੜੇ ਸ਼ਬਦ ਸ਼ਾਮਲ ਕਰਦਾ ਹੈ, ਜਿਸਦੀ ਪੁਸ਼ਟੀ Zifankrah Ltd ਕਰਦੀ ਹੈ।",

  "page.timescales.eyebrow": "ਕਾਨੂੰਨੀ ਸਮਾਂ",
  "page.timescales.title": "ਕਾਨੂੰਨੀ ਘੜੀ। ਹਰ ਹਫ਼ਤਾ, ਰਿਕਾਰਡ ਉੱਤੇ।",
  "page.timescales.body":
    "SEND ਪ੍ਰਣਾਲੀ ਕਾਨੂੰਨੀ ਸਮਾਂ-ਸੀਮਾਵਾਂ ਉੱਤੇ ਚੱਲਦੀ ਹੈ। ਬਹੁਤੇ ਮਾਪਿਆਂ ਨੂੰ ਤਾਂ ਪਤਾ ਲੱਗਦਾ ਹੈ ਜਦੋਂ ਇੱਕ ਲੰਘ ਚੁੱਕੀ ਹੁੰਦੀ ਹੈ। ਇਹ ਉਹ ਪੂਰੀ ਸਾਰਣੀ ਹੈ ਜੋ SENDSerene ਦਾ ਕੈਲਕੁਲੇਟਰ ਚਲਾਉਂਦੀ ਹੈ।",

  "page.ehcp.eyebrow": "EHCP ਦੇ ਅੰਦਰ",
  "page.ehcp.title": "ਗਿਆਰਾਂ ਭਾਗ। ਹਰ ਇੱਕ ਕਿਸ ਲਈ ਹੈ।",
  "page.ehcp.body":
    "ਸਿੱਖਿਆ, ਸਿਹਤ ਅਤੇ ਦੇਖਭਾਲ ਯੋਜਨਾ ਇੱਕ ਦਸਤਾਵੇਜ਼ ਨਹੀਂ, ਗਿਆਰਾਂ ਹਨ। ਹਰ ਭਾਗ ਤੁਹਾਡੇ ਬੱਚੇ ਦੀਆਂ ਲੋੜਾਂ ਜਾਂ ਮਦਦ ਦਾ ਵੱਖਰਾ ਹਿੱਸਾ ਦੱਸਦਾ ਹੈ।",

  "page.pricing.eyebrow": "ਕੀਮਤ",
  "page.pricing.title": "ਸ਼ੁਰੂ ਮੁਫ਼ਤ। ਲੋੜ ਪਵੇ ਤਾਂ £5 ਮਹੀਨਾ।",
  "page.pricing.body":
    "ਹਰ ਖਾਤਾ ਮੁਫ਼ਤ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ: ਤਿੰਨ ਸ਼ਬਦ-ਵਿਆਖਿਆਵਾਂ, ਤੀਹ ਆਵਾਜ਼ ਐਂਟਰੀਆਂ, ਇੱਕ ਸਹਿਯੋਗੀ। ਜਦੋਂ ਪੂਰਾ ਇਤਿਹਾਸ ਤੇ ਸਬੂਤ ਪੈਕ ਚਾਹੀਦਾ ਹੋਵੇ ਤਾਂ ਅੱਪਗ੍ਰੇਡ ਕਰੋ।",

  "page.security.eyebrow": "ਸੁਰੱਖਿਆ ਤੇ ਨਿੱਜਤਾ",
  "page.security.title": "ਖ਼ਾਸ ਸ਼੍ਰੇਣੀ ਦਾ ਡਾਟਾ, ਉਸੇ ਤਰ੍ਹਾਂ ਸੰਭਾਲਿਆ।",
  "page.security.body":
    "ਤੁਹਾਡੇ ਬੱਚੇ ਦੀ ਸਿਹਤ ਤੇ ਅਪੰਗਤਾ ਦੀ ਜਾਣਕਾਰੀ ਯੂਕੇ ਕਾਨੂੰਨ ਵਿੱਚ ਸਭ ਤੋਂ ਸੁਰੱਖਿਅਤ ਸ਼੍ਰੇਣੀ ਹੈ। SENDSerene ਉਸੇ ਮੁਤਾਬਕ ਬਣਾਇਆ ਗਿਆ ਹੈ।",

  "page.faq.eyebrow": "ਆਮ ਸਵਾਲ ਤੇ ਹੋਰ",
  "page.faq.title": "ਉਹ ਸਵਾਲ ਜੋ ਮਾਪੇ ਸੱਚਮੁੱਚ ਪੁੱਛਦੇ ਹਨ।",
  "page.faq.body":
    "ਛੋਟੇ ਜਵਾਬ, ਇਮਾਨਦਾਰ ਦਾਇਰਾ, ਅਤੇ ਪੂਰੀ ਤਸਵੀਰ ਕਿ ਇਸਨੂੰ ਕਿਸਨੇ ਬਣਾਇਆ।",
};

const bn: PageDict = {
  "hero.eyebrow": "SEND নিয়ে পথ চলা যুক্তরাজ্যের অভিভাবকদের জন্য",
  "hero.title": "আপনি নিজের ভাষায় বলুন। ওদের ভাষা আমরা সামলাব।",
  "hero.lede":
    "যা ঘটেছে মুখে বলুন, ষোলোটি ভাষার যেকোনো একটিতে। SENDSerene তা লিখে নেয়, তারিখ দেয় এবং গুছিয়ে রাখে। তারপর কাউন্সিল যখন ইচ্ছে করেই কঠিন ভাষায় উত্তর দেয়, এটি আপনাকে বলে দেয় ওরা আসলে কী বোঝাতে চাইছে এবং আপনাকে কবের মধ্যে কী করতে হবে।",
  "hero.cta1": "বিনামূল্যে অ্যাকাউন্ট খুলুন",
  "hero.cta2": "প্রমাণ প্যাক দেখুন",

  "page.voice.eyebrow": "ভয়েস রেকর্ডিং",
  "page.voice.title": "টাটকা থাকতেই বলে ফেলুন। বাকিটা আমরা করব।",
  "page.voice.body":
    "ডায়েরি লেখার সময় আপনার নেই। কিন্তু স্কুল থেকে ফেরার পথে গাড়িতে পাঁচ মিনিট আছে। রেকর্ড চাপুন, যেমন ঘটেছে তেমন বলুন। SENDSerene সেটিকে তারিখযুক্ত, শ্রেণিবদ্ধ ও খুঁজে পাওয়ার মতো এন্ট্রিতে পরিণত করে।",

  "page.decoder.eyebrow": "পরিভাষা ব্যাখ্যা",
  "page.decoder.title": "কাউন্সিলের চিঠি, সহজ ভাষায়। সময়সীমা, সামনে।",
  "page.decoder.body":
    "বেশিরভাগ অভিভাবক এই চিঠির ভাষা জানেন না। SENDSerene জানে। লেখা পেস্ট করুন বা PDF আপলোড করুন, পাবেন সহজ সারসংক্ষেপ, কঠিন শব্দের তালিকা, এবং প্রতিটি সময়সীমা ঠিক যে অংশ থেকে এসেছে তা সহ।",

  "page.evidence.eyebrow": "প্রমাণ প্যাক",
  "page.evidence.title": "মিটিং এলে আপনার যুক্তি আগেই তৈরি।",
  "page.evidence.body":
    "এক বছরের ভয়েস এন্ট্রি ও ব্যাখ্যা করা চিঠি, এই রিভিউয়ের জন্য যা দরকার তাতে ছেঁকে, পৃষ্ঠা নম্বরসহ PDF-এ। প্রতিটি এন্ট্রি নম্বর করা যাতে আপনি উল্লেখ করতে পারেন।",

  "page.dashboard.eyebrow": "প্যাটার্ন ড্যাশবোর্ড",
  "page.dashboard.title": "ক্লান্তিতে যে ধরনগুলো চোখে পড়ে না। সামনে আনা।",
  "page.dashboard.body":
    "প্রতিদিনের মধ্যে থাকলে ধরনগুলো অদৃশ্য থাকে। ঘুম কি খারাপ হচ্ছে? পড়ার কাজ কি দীর্ঘ হচ্ছে? SENDSerene আপনার এন্ট্রিগুলোর প্রবণতা শ্রেণি ও সময় ধরে সামনে আনে।",

  "page.glossary.eyebrow": "SEND শব্দকোষ",
  "page.glossary.title": "যে শব্দগুলো অভিভাবকদের দূরে রাখে। ব্যাখ্যা করা।",
  "page.glossary.body":
    "এটি সেই শব্দকোষের নমুনা যা পরিভাষা ব্যাখ্যা চালায়। পূর্ণ সংস্করণে ষোলোটি ভাষায় শত শত শব্দ আছে, যা Zifankrah Ltd যাচাই করে।",

  "page.timescales.eyebrow": "আইনি সময়সীমা",
  "page.timescales.title": "আইনি ঘড়ি। প্রতি সপ্তাহ, নথিভুক্ত।",
  "page.timescales.body":
    "SEND ব্যবস্থা আইনি সময়সীমায় চলে। বেশিরভাগ অভিভাবক জানেন তখনই, যখন একটি পেরিয়ে গেছে। এটিই সেই পূর্ণ তালিকা যা SENDSerene-এর ক্যালকুলেটর চালায়।",

  "page.ehcp.eyebrow": "EHCP-এর ভিতরে",
  "page.ehcp.title": "এগারোটি অংশ। প্রতিটি কীসের জন্য।",
  "page.ehcp.body":
    "শিক্ষা, স্বাস্থ্য ও যত্ন পরিকল্পনা একটি নথি নয়, এগারোটি। প্রতিটি অংশ আপনার সন্তানের চাহিদা বা প্রাপ্য সহায়তার আলাদা দিক বলে।",

  "page.pricing.eyebrow": "মূল্য",
  "page.pricing.title": "শুরু বিনামূল্যে। দরকার হলে মাসে £5।",
  "page.pricing.body":
    "প্রতিটি অ্যাকাউন্ট বিনামূল্যে শুরু হয়: তিনটি ব্যাখ্যা, ত্রিশটি ভয়েস এন্ট্রি, একজন সহযোগী। পূর্ণ ইতিহাস ও প্রমাণ প্যাক দরকার হলে আপগ্রেড করুন।",

  "page.security.eyebrow": "নিরাপত্তা ও গোপনীয়তা",
  "page.security.title": "বিশেষ শ্রেণির তথ্য, সেভাবেই রক্ষিত।",
  "page.security.body":
    "আপনার সন্তানের স্বাস্থ্য ও প্রতিবন্ধকতার তথ্য যুক্তরাজ্যের আইনে সবচেয়ে সুরক্ষিত শ্রেণির ব্যক্তিগত তথ্য। SENDSerene সেভাবেই তৈরি।",

  "page.faq.eyebrow": "সাধারণ প্রশ্ন ও আরও",
  "page.faq.title": "অভিভাবকেরা আসলে যে প্রশ্নগুলো করেন।",
  "page.faq.body":
    "সংক্ষিপ্ত উত্তর, সৎ পরিধি, এবং কে এটি বানিয়েছে ও কীভাবে কাজ করে তার পূর্ণ ছবি।",
};

const pl: PageDict = {
  "hero.eyebrow": "Dla rodziców w Wielkiej Brytanii mierzących się z SEND",
  "hero.title": "Mów swoim językiem. Ich językiem zajmiemy się my.",
  "hero.lede":
    "Powiedz na głos, co się stało, w jednym z szesnastu języków. SENDSerene zapisze to, opatrzy datą i zarchiwizuje. A gdy rada odpisze językiem celowo trudnym, wyjaśni, co naprawdę mają na myśli i co masz zrobić oraz do kiedy.",
  "hero.cta1": "Załóż darmowe konto",
  "hero.cta2": "Zobacz pakiet dowodów",

  "page.voice.eyebrow": "Nagrywanie głosem",
  "page.voice.title": "Powiedz to na głos, póki świeże. Resztę zrobimy my.",
  "page.voice.body":
    "Nie masz czasu na pisanie dziennika. Ale masz pięć minut w samochodzie po odbiorze dziecka. Naciśnij nagrywanie i opowiedz, jak było. SENDSerene zamieni to we wpis z datą, kategorią i możliwością wyszukania.",

  "page.decoder.eyebrow": "Dekoder pojęć",
  "page.decoder.title": "Pisma z rady, rozszyfrowane. Terminy, na wierzchu.",
  "page.decoder.body":
    "Większość rodziców nie zna języka, w którym pisane są te listy. SENDSerene zna. Wklej tekst albo wgraj PDF, a dostaniesz proste streszczenie, słowniczek żargonu i każdy termin wraz z fragmentem, z którego pochodzi.",

  "page.evidence.eyebrow": "Pakiet dowodów",
  "page.evidence.title": "Gdy przyjdzie spotkanie, Twoja sprawa jest już gotowa.",
  "page.evidence.body":
    "Rok nagrań i rozszyfrowanych pism, przefiltrowanych pod kątem tego przeglądu, zebranych w PDF z numeracją stron. Każdy wpis ponumerowany, żebyś mogła się na niego powołać.",

  "page.dashboard.eyebrow": "Panel wzorców",
  "page.dashboard.title": "Wzorce, na które jesteś zbyt zmęczona. Wydobyte.",
  "page.dashboard.body":
    "Gdy żyje się tym na co dzień, wzorce są niewidoczne. Czy sen się pogarsza? Czy czytanie zajmuje coraz więcej czasu? SENDSerene pokazuje trendy w Twoich wpisach według kategorii i w czasie.",

  "page.glossary.eyebrow": "Słowniczek SEND",
  "page.glossary.title": "Słowa, które trzymają rodziców na dystans. Wyjaśnione.",
  "page.glossary.body":
    "To próbka słownika, który napędza dekoder pojęć. Pełna wersja obejmuje setki terminów w szesnastu językach, zatwierdzonych przez Zifankrah Ltd.",

  "page.timescales.eyebrow": "Terminy ustawowe",
  "page.timescales.title": "Zegar prawny. Każdy tydzień, na papierze.",
  "page.timescales.body":
    "System SEND działa na ustawowych terminach. Większość rodziców dowiaduje się o nich dopiero, gdy jeden minął. To pełna tabela, która napędza kalkulator terminów SENDSerene.",

  "page.ehcp.eyebrow": "Wewnątrz EHCP",
  "page.ehcp.title": "Jedenaście sekcji. Oto do czego służy każda.",
  "page.ehcp.body":
    "Plan Edukacji, Zdrowia i Opieki to nie jeden dokument, lecz jedenaście. Każda sekcja opisuje inną część potrzeb dziecka lub należnego wsparcia.",

  "page.pricing.eyebrow": "Cennik",
  "page.pricing.title": "Start za darmo. £5 miesięcznie, gdy to ważne.",
  "page.pricing.body":
    "Każde konto zaczyna się za darmo: trzy dekodowania, trzydzieści nagrań, jeden współpracownik. Przejdź na wyższy plan, gdy potrzebujesz pełnej historii i eksportu pakietu dowodów.",

  "page.security.eyebrow": "Bezpieczeństwo i prywatność",
  "page.security.title": "Dane szczególnej kategorii, traktowane jak należy.",
  "page.security.body":
    "Informacje o zdrowiu i niepełnosprawności Twojego dziecka to najlepiej chroniona kategoria danych osobowych w prawie brytyjskim. SENDSerene jest zbudowany zgodnie z tym.",

  "page.faq.eyebrow": "FAQ i więcej",
  "page.faq.title": "Pytania, które rodzice naprawdę zadają.",
  "page.faq.body":
    "Krótkie odpowiedzi, uczciwy zakres i pełny obraz tego, kto to zbudował i jak to działa.",
};

/* ---------- Additional languages: short strings only ----------
   Titles, eyebrows and calls to action. Longer body prose falls
   back to English until Zifankrah supplies signed-off wording. */

const ar: PageDict = {
  "hero.eyebrow": "لأولياء الأمور في بريطانيا في مسار SEND",
  "hero.title": "تحدث بلغتك. ولغتهم نتكفل بها نحن.",
  "hero.cta1": "ابدأ حسابًا مجانيًا",
  "hero.cta2": "شاهد ملف الأدلة",
  "page.voice.eyebrow": "التسجيل الصوتي",
  "page.voice.title": "قُلها بصوتك وهي طازجة. نحن نتكفل بالباقي.",
  "page.decoder.eyebrow": "مفسّر المصطلحات",
  "page.decoder.title": "رسائل البلدية، مفسّرة. المواعيد، ظاهرة.",
  "page.evidence.eyebrow": "ملف الأدلة",
  "page.evidence.title": "عند موعد الاجتماع، تكون قضيتك جاهزة.",
  "page.dashboard.eyebrow": "لوحة الأنماط",
  "page.dashboard.title": "الأنماط التي يخفيها التعب. مكشوفة.",
  "page.glossary.eyebrow": "معجم SEND",
  "page.glossary.title": "الكلمات التي تُقصي الأهل. مشروحة.",
  "page.timescales.eyebrow": "المواعيد القانونية",
  "page.timescales.title": "الساعة القانونية. كل أسبوع، موثّق.",
  "page.ehcp.eyebrow": "داخل خطة EHCP",
  "page.ehcp.title": "إحدى عشرة قسمًا. وهذا دور كل منها.",
  "page.pricing.eyebrow": "الأسعار",
  "page.pricing.title": "ابدأ مجانًا. £5 شهريًا عند الحاجة.",
  "page.security.eyebrow": "الأمان والخصوصية",
  "page.security.title": "بيانات من فئة خاصة، تُعامل كذلك.",
  "page.faq.eyebrow": "الأسئلة الشائعة",
  "page.faq.title": "الأسئلة التي يطرحها الأهل فعلاً.",
};

const fr: PageDict = {
  "hero.eyebrow": "Pour les parents britanniques face au SEND",
  "hero.title": "Parlez votre langue. La leur, c'est notre affaire.",
  "hero.cta1": "Créer un compte gratuit",
  "hero.cta2": "Voir un dossier de preuves",
  "page.voice.eyebrow": "Journal vocal",
  "page.voice.title": "Dites-le à voix haute tant que c'est frais. On s'occupe du reste.",
  "page.decoder.eyebrow": "Décodeur de jargon",
  "page.decoder.title": "Courriers de la mairie, décodés. Échéances, mises en avant.",
  "page.evidence.eyebrow": "Dossier de preuves",
  "page.evidence.title": "Le jour de la réunion, votre dossier est déjà prêt.",
  "page.dashboard.eyebrow": "Tableau des tendances",
  "page.dashboard.title": "Les tendances que la fatigue vous cache. Révélées.",
  "page.glossary.eyebrow": "Glossaire SEND",
  "page.glossary.title": "Les mots qui écartent les parents. Expliqués.",
  "page.timescales.eyebrow": "Délais légaux",
  "page.timescales.title": "L'horloge légale. Chaque semaine, consignée.",
  "page.ehcp.eyebrow": "À l'intérieur d'un EHCP",
  "page.ehcp.title": "Onze sections. Voici à quoi sert chacune.",
  "page.pricing.eyebrow": "Tarifs",
  "page.pricing.title": "Gratuit au départ. £5 par mois quand ça compte.",
  "page.security.eyebrow": "Sécurité et confidentialité",
  "page.security.title": "Données sensibles, traitées comme telles.",
  "page.faq.eyebrow": "FAQ",
  "page.faq.title": "Les questions que les parents posent vraiment.",
};

const pt: PageDict = {
  "hero.eyebrow": "Para pais no Reino Unido a lidar com SEND",
  "hero.title": "Fale a sua língua. Da deles tratamos nós.",
  "hero.cta1": "Criar conta gratuita",
  "hero.cta2": "Ver um dossiê de provas",
  "page.voice.eyebrow": "Registo de voz",
  "page.voice.title": "Diga em voz alta enquanto está fresco. Nós tratamos do resto.",
  "page.decoder.eyebrow": "Descodificador de jargão",
  "page.decoder.title": "Cartas da câmara, descodificadas. Prazos, à vista.",
  "page.evidence.eyebrow": "Dossiê de provas",
  "page.evidence.title": "Quando chega a reunião, o seu caso já está feito.",
  "page.dashboard.eyebrow": "Painel de padrões",
  "page.dashboard.title": "Os padrões que o cansaço esconde. Revelados.",
  "page.glossary.eyebrow": "Glossário SEND",
  "page.glossary.title": "As palavras que afastam os pais. Explicadas.",
  "page.timescales.eyebrow": "Prazos legais",
  "page.timescales.title": "O relógio legal. Cada semana, registada.",
  "page.ehcp.eyebrow": "Dentro de um EHCP",
  "page.ehcp.title": "Onze secções. Eis para que serve cada uma.",
  "page.pricing.eyebrow": "Preços",
  "page.pricing.title": "Começar grátis. £5 por mês quando importa.",
  "page.security.eyebrow": "Segurança e privacidade",
  "page.security.title": "Dados de categoria especial, tratados como tal.",
  "page.faq.eyebrow": "Perguntas frequentes",
  "page.faq.title": "As perguntas que os pais realmente fazem.",
};

const tr: PageDict = {
  "hero.eyebrow": "SEND sürecindeki İngiltere'deki ebeveynler için",
  "hero.title": "Siz kendi dilinizde konuşun. Onlarınkini biz hallederiz.",
  "hero.cta1": "Ücretsiz hesap açın",
  "hero.cta2": "Kanıt dosyasını görün",
  "page.voice.eyebrow": "Sesli kayıt",
  "page.voice.title": "Tazeyken sesli anlatın. Gerisini biz hallederiz.",
  "page.decoder.eyebrow": "Terim çözücü",
  "page.decoder.title": "Belediye yazıları, çözüldü. Süreler, ortaya çıktı.",
  "page.evidence.eyebrow": "Kanıt dosyası",
  "page.evidence.title": "Toplantı geldiğinde dosyanız çoktan hazır.",
  "page.dashboard.eyebrow": "Örüntü paneli",
  "page.dashboard.title": "Yorgunluktan göremediğiniz örüntüler. Görünür kılındı.",
  "page.glossary.eyebrow": "SEND sözlüğü",
  "page.glossary.title": "Ebeveynleri dışarıda bırakan kelimeler. Tanımlandı.",
  "page.timescales.eyebrow": "Yasal süreler",
  "page.timescales.title": "Yasal saat. Her hafta, kayıt altında.",
  "page.ehcp.eyebrow": "EHCP'nin içi",
  "page.ehcp.title": "On bir bölüm. Her biri ne işe yarıyor.",
  "page.pricing.eyebrow": "Fiyatlandırma",
  "page.pricing.title": "Ücretsiz başlayın. Gerektiğinde ayda £5.",
  "page.security.eyebrow": "Güvenlik ve gizlilik",
  "page.security.title": "Özel nitelikli veri, öyle muamele görür.",
  "page.faq.eyebrow": "SSS",
  "page.faq.title": "Ebeveynlerin gerçekten sorduğu sorular.",
};

const ro: PageDict = {
  "hero.eyebrow": "Pentru părinții din Marea Britanie care trec prin SEND",
  "hero.title": "Vorbiți în limba dumneavoastră. De a lor ne ocupăm noi.",
  "hero.cta1": "Creați un cont gratuit",
  "hero.cta2": "Vedeți un dosar de dovezi",
  "page.voice.eyebrow": "Jurnal vocal",
  "page.voice.title": "Spuneți cu voce tare cât e proaspăt. De rest ne ocupăm noi.",
  "page.decoder.eyebrow": "Decodor de termeni",
  "page.decoder.title": "Scrisorile primăriei, decodate. Termenele, la vedere.",
  "page.evidence.eyebrow": "Dosar de dovezi",
  "page.evidence.title": "Când vine ședința, cazul dumneavoastră e deja pregătit.",
  "page.dashboard.eyebrow": "Panou de tipare",
  "page.dashboard.title": "Tiparele pe care oboseala le ascunde. Scoase la iveală.",
  "page.glossary.eyebrow": "Glosar SEND",
  "page.glossary.title": "Cuvintele care țin părinții deoparte. Explicate.",
  "page.timescales.eyebrow": "Termene legale",
  "page.timescales.title": "Ceasul legal. Fiecare săptămână, consemnată.",
  "page.ehcp.eyebrow": "În interiorul unui EHCP",
  "page.ehcp.title": "Unsprezece secțiuni. Iată la ce servește fiecare.",
  "page.pricing.eyebrow": "Prețuri",
  "page.pricing.title": "Gratuit la început. £5 pe lună când contează.",
  "page.security.eyebrow": "Securitate și confidențialitate",
  "page.security.title": "Date din categorii speciale, tratate ca atare.",
  "page.faq.eyebrow": "Întrebări frecvente",
  "page.faq.title": "Întrebările pe care părinții chiar le pun.",
};

const zh: PageDict = {
  "hero.eyebrow": "写给正在应对 SEND 的英国家长",
  "hero.title": "您说您的语言，他们的交给我们。",
  "hero.cta1": "免费创建账户",
  "hero.cta2": "查看证据包",
  "page.voice.eyebrow": "语音记录",
  "page.voice.title": "趁记忆还新，说出来。其余交给我们。",
  "page.decoder.eyebrow": "术语解读",
  "page.decoder.title": "议会来信，逐句解读。截止日期，一目了然。",
  "page.evidence.eyebrow": "证据包",
  "page.evidence.title": "会议来临时，您的材料早已备妥。",
  "page.dashboard.eyebrow": "规律面板",
  "page.dashboard.title": "疲惫中看不见的规律，为您呈现。",
  "page.glossary.eyebrow": "SEND 术语表",
  "page.glossary.title": "把家长挡在门外的词，逐一解释。",
  "page.timescales.eyebrow": "法定时限",
  "page.timescales.title": "法律时钟。每一周，都有记录。",
  "page.ehcp.eyebrow": "EHCP 内部",
  "page.ehcp.title": "十一个部分，各自的作用。",
  "page.pricing.eyebrow": "价格",
  "page.pricing.title": "免费开始。需要时每月 £5。",
  "page.security.eyebrow": "安全与隐私",
  "page.security.title": "特殊类别数据，按其规格对待。",
  "page.faq.eyebrow": "常见问题",
  "page.faq.title": "家长真正会问的问题。",
};

const es: PageDict = {
  "hero.eyebrow": "Para madres y padres en el Reino Unido con SEND",
  "hero.title": "Hable su idioma. Del suyo nos encargamos nosotros.",
  "hero.cta1": "Crear una cuenta gratuita",
  "hero.cta2": "Ver un expediente de pruebas",
  "page.voice.eyebrow": "Registro de voz",
  "page.voice.title": "Dígalo en voz alta mientras está fresco. Del resto nos ocupamos.",
  "page.decoder.eyebrow": "Descodificador de jerga",
  "page.decoder.title": "Cartas del ayuntamiento, descifradas. Plazos, a la vista.",
  "page.evidence.eyebrow": "Expediente de pruebas",
  "page.evidence.title": "Cuando llega la reunión, su caso ya está preparado.",
  "page.dashboard.eyebrow": "Panel de patrones",
  "page.dashboard.title": "Los patrones que el cansancio esconde. A la vista.",
  "page.glossary.eyebrow": "Glosario SEND",
  "page.glossary.title": "Las palabras que dejan fuera a las familias. Definidas.",
  "page.timescales.eyebrow": "Plazos legales",
  "page.timescales.title": "El reloj legal. Cada semana, registrada.",
  "page.ehcp.eyebrow": "Dentro de un EHCP",
  "page.ehcp.title": "Once secciones. Para qué sirve cada una.",
  "page.pricing.eyebrow": "Precios",
  "page.pricing.title": "Empiece gratis. £5 al mes cuando importa.",
  "page.security.eyebrow": "Seguridad y privacidad",
  "page.security.title": "Datos de categoría especial, tratados como tales.",
  "page.faq.eyebrow": "Preguntas frecuentes",
  "page.faq.title": "Las preguntas que de verdad hacen las familias.",
};

const fa: PageDict = {
  "hero.eyebrow": "برای والدین در بریتانیا در مسیر SEND",
  "hero.title": "شما به زبان خودتان بگویید. زبان آن‌ها با ما.",
  "hero.cta1": "ایجاد حساب رایگان",
  "hero.cta2": "دیدن بسته مدارک",
  "page.voice.eyebrow": "ثبت صوتی",
  "page.voice.title": "تا تازه است بلند بگویید. بقیه با ما.",
  "page.decoder.eyebrow": "رمزگشای اصطلاحات",
  "page.decoder.title": "نامه‌های شهرداری، رمزگشایی‌شده. مهلت‌ها، آشکار.",
  "page.evidence.eyebrow": "بسته مدارک",
  "page.evidence.title": "وقتی جلسه می‌رسد، پرونده‌تان آماده است.",
  "page.dashboard.eyebrow": "داشبورد الگوها",
  "page.dashboard.title": "الگوهایی که خستگی پنهان می‌کند. آشکار شده.",
  "page.glossary.eyebrow": "واژه‌نامه SEND",
  "page.glossary.title": "کلماتی که والدین را بیرون نگه می‌دارد. تعریف‌شده.",
  "page.timescales.eyebrow": "مهلت‌های قانونی",
  "page.timescales.title": "ساعت قانونی. هر هفته، ثبت‌شده.",
  "page.ehcp.eyebrow": "درون یک EHCP",
  "page.ehcp.title": "یازده بخش. هر کدام برای چیست.",
  "page.pricing.eyebrow": "قیمت‌ها",
  "page.pricing.title": "شروع رایگان. ماهی £5 وقتی اهمیت دارد.",
  "page.security.eyebrow": "امنیت و حریم خصوصی",
  "page.security.title": "داده‌های دسته ویژه، همان‌گونه که باید.",
  "page.faq.eyebrow": "پرسش‌های متداول",
  "page.faq.title": "پرسش‌هایی که والدین واقعاً می‌پرسند.",
};

const tg: PageDict = {
  "hero.eyebrow": "Para sa mga magulang sa UK na dumaraan sa SEND",
  "hero.title": "Magsalita sa sarili mong wika. Kami na ang bahala sa kanila.",
  "hero.cta1": "Magsimula ng libreng account",
  "hero.cta2": "Tingnan ang pakete ng ebidensya",
  "page.voice.eyebrow": "Pagtatala sa boses",
  "page.voice.title": "Sabihin habang sariwa pa. Kami na ang bahala sa iba.",
  "page.decoder.eyebrow": "Tagapaliwanag ng termino",
  "page.decoder.title": "Mga sulat ng konseho, naipaliwanag. Mga takdang petsa, nakalantad.",
  "page.evidence.eyebrow": "Pakete ng ebidensya",
  "page.evidence.title": "Pagdating ng pulong, handa na ang iyong kaso.",
  "page.dashboard.eyebrow": "Dashboard ng mga padron",
  "page.dashboard.title": "Ang mga padron na hindi mo nakikita sa pagod. Inilabas.",
  "page.glossary.eyebrow": "Talasalitaan ng SEND",
  "page.glossary.title": "Ang mga salitang nagbubukod sa magulang. Ipinaliwanag.",
  "page.timescales.eyebrow": "Legal na takdang panahon",
  "page.timescales.title": "Ang legal na orasan. Bawat linggo, nakatala.",
  "page.ehcp.eyebrow": "Sa loob ng EHCP",
  "page.ehcp.title": "Labing-isang bahagi. Ito ang silbi ng bawat isa.",
  "page.pricing.eyebrow": "Presyo",
  "page.pricing.title": "Libreng simula. £5 kada buwan kung kailangan.",
  "page.security.eyebrow": "Seguridad at privacy",
  "page.security.title": "Espesyal na uri ng datos, tinatrato nang ganoon.",
  "page.faq.eyebrow": "Mga karaniwang tanong",
  "page.faq.title": "Ang mga tanong na talagang itinatanong ng magulang.",
};

const vi: PageDict = {
  "hero.eyebrow": "Dành cho phụ huynh tại Anh đang đi qua SEND",
  "hero.title": "Bạn cứ nói tiếng của mình. Tiếng của họ để chúng tôi lo.",
  "hero.cta1": "Tạo tài khoản miễn phí",
  "hero.cta2": "Xem hồ sơ bằng chứng",
  "page.voice.eyebrow": "Ghi âm nhật ký",
  "page.voice.title": "Nói ra khi còn tươi mới. Phần còn lại để chúng tôi lo.",
  "page.decoder.eyebrow": "Giải nghĩa thuật ngữ",
  "page.decoder.title": "Thư của hội đồng, được giải nghĩa. Thời hạn, hiện rõ.",
  "page.evidence.eyebrow": "Hồ sơ bằng chứng",
  "page.evidence.title": "Khi cuộc họp đến, hồ sơ của bạn đã sẵn sàng.",
  "page.dashboard.eyebrow": "Bảng xu hướng",
  "page.dashboard.title": "Những quy luật mệt mỏi che khuất. Được đưa ra ánh sáng.",
  "page.glossary.eyebrow": "Thuật ngữ SEND",
  "page.glossary.title": "Những từ ngữ đẩy phụ huynh ra ngoài. Được giải thích.",
  "page.timescales.eyebrow": "Thời hạn pháp lý",
  "page.timescales.title": "Chiếc đồng hồ pháp lý. Mỗi tuần, đều được ghi nhận.",
  "page.ehcp.eyebrow": "Bên trong một EHCP",
  "page.ehcp.title": "Mười một phần. Mỗi phần dùng để làm gì.",
  "page.pricing.eyebrow": "Giá",
  "page.pricing.title": "Bắt đầu miễn phí. £5 mỗi tháng khi cần.",
  "page.security.eyebrow": "Bảo mật và quyền riêng tư",
  "page.security.title": "Dữ liệu thuộc nhóm đặc biệt, được đối xử đúng như vậy.",
  "page.faq.eyebrow": "Câu hỏi thường gặp",
  "page.faq.title": "Những câu hỏi phụ huynh thực sự đặt ra.",
};

export const PAGE_DICTIONARIES: Record<LocaleCode, PageDict> = {
  en, so, ur, pa, bn, pl, ar, fr, pt, tr, ro, zh, es, fa, tg, vi,
};

export const PAGE_KEY_COUNT = Object.keys(en).length;

/** Look up page copy, falling back to English for anything untranslated. */
export function translatePage(locale: LocaleCode, key: PageKey): string {
  return PAGE_DICTIONARIES[locale]?.[key] ?? en[key];
}

/** How much of the page copy a locale covers, 0 to 1. */
export function pageCoverage(locale: LocaleCode): number {
  if (locale === "en") return 1;
  const dict = PAGE_DICTIONARIES[locale];
  if (!dict) return 0;
  const done = (Object.keys(dict) as PageKey[]).filter(
    (k) => typeof dict[k] === "string" && dict[k]!.length > 0
  ).length;
  return done / PAGE_KEY_COUNT;
}
