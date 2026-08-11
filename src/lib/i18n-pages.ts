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
  "hero.title": "Speak in your own words. We'll turn it into evidence.",
  "hero.lede":
    "Say what happened out loud, in any of seven languages. SENDSerene writes it down, dates it, and files it. Then, when the council writes back in language designed to be difficult, it tells you what they actually mean and what you have to do by when.",
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
    "This is a sample of the glossary that powers the jargon decoder. The full version covers hundreds of terms across all seven launch languages, validated by Zifankrah Ltd. Here are the ones parents see most often.",

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
    "Every account starts free: four jargon decodes, sixty voice logs, up to two children. Upgrade when you need full history, filtering, and the formatted evidence pack. Both tiers cover two children as standard — a small add-on applies for each additional child beyond two.",

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

const ru: PageDict = {
  "hero.eyebrow": "Для родителей в Великобритании, работающих с системой SEND",
  "hero.title": "Говорите своими словами. Мы превратим это в доказательства.",
  "hero.cta1": "Создать бесплатный аккаунт",
  "hero.cta2": "Посмотреть пакет доказательств",
  "page.voice.eyebrow": "Голосовой журнал",
  "page.voice.title": "Скажите вслух, пока свежо. Остальное — наша работа.",
  "page.decoder.eyebrow": "Декодер терминов",
  "page.decoder.title": "Письма совета — расшифрованы. Сроки — на виду.",
  "page.evidence.eyebrow": "Пакет доказательств",
  "page.evidence.title": "Когда встреча назначена, ваше дело уже готово.",
  "page.dashboard.eyebrow": "Анализ закономерностей",
  "page.dashboard.title": "Закономерности, которые вы слишком устали замечать. Теперь видны.",
  "page.glossary.eyebrow": "Глоссарий SEND",
  "page.glossary.title": "Слова, закрывающие двери для родителей. Объяснены.",
  "page.timescales.eyebrow": "Законные сроки",
  "page.timescales.title": "Юридический отсчёт. Каждая неделя — на учёте.",
  "page.ehcp.eyebrow": "Внутри EHCP",
  "page.ehcp.title": "Одиннадцать разделов. Вот для чего каждый из них.",
  "page.pricing.eyebrow": "Цены",
  "page.pricing.title": "Бесплатный старт. £5 в месяц, когда нужно.",
  "page.security.eyebrow": "Безопасность и конфиденциальность",
  "page.security.title": "Данные особой категории — защищены соответственно.",
  "page.faq.eyebrow": "Вопросы и ответы",
  "page.faq.title": "Вопросы, которые родители задают на самом деле.",
};

export const PAGE_DICTIONARIES: Record<LocaleCode, PageDict> = {
  en, so, ur, pa, bn, pl, ru,
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
