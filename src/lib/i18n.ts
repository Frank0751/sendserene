/* ============================================================
   SENDSerene, interface localisation
   ------------------------------------------------------------
   Per the project brief (KB-2026-007), KoomBei builds the toggle
   and the framework; Zifankrah Ltd supplies and signs off the
   translated wording. This file is that framework.

   To add or correct wording, edit the dictionary for a locale
   below. Any key a locale does not define falls back to English,
   so a partial translation is always safe to ship, the interface
   simply shows English for whatever is still missing.

   IMPORTANT: the non-English strings below are a working starting
   point and must be reviewed by a native speaker before launch.
   Coverage is reported by localeCoverage() and surfaced in the
   language menu so nobody mistakes a draft for a sign-off.
   ============================================================ */

export type LocaleCode = "en" | "so" | "ur" | "pa" | "bn" | "pl" | "ru";

/**
 * Right-to-left scripts only.
 * Note Punjabi here is Gurmukhi (ਪੰਜਾਬੀ) and Bengali is বাংলা, both
 * left-to-right. Only Arabic, Urdu and Persian run right-to-left.
 */
export const RTL_LOCALES: LocaleCode[] = ["ur"];

export function isRtl(locale: LocaleCode): boolean {
  return RTL_LOCALES.includes(locale);
}

/** The interface strings that are translated. */
export type TranslationKey =
  | "nav.problem" | "nav.compare" | "nav.voiceLog" | "nav.decoder"
  | "nav.evidence" | "nav.glossary" | "nav.pricing" | "nav.faq"
  | "nav.resources" | "nav.timescales" | "nav.ehcp" | "nav.expertHelp"
  | "nav.howItWorks" | "nav.security" | "nav.languages"
  | "header.startFree" | "header.accessibility" | "header.language"
  | "header.chooseLanguage" | "header.menu" | "header.languages"
  | "footer.product" | "footer.getHelp" | "footer.company"
  | "common.backToHome" | "common.partialNotice";

type Dictionary = Partial<Record<TranslationKey, string>>;

/** English is the source of truth and the fallback for every other locale. */
const en: Record<TranslationKey, string> = {
  "nav.problem": "The problem",
  "nav.compare": "How we compare",
  "nav.voiceLog": "Voice log",
  "nav.decoder": "Decoder",
  "nav.evidence": "Evidence pack",
  "nav.glossary": "Glossary",
  "nav.pricing": "Pricing",
  "nav.faq": "FAQ",
  "nav.resources": "Resources",
  "nav.timescales": "Timescales",
  "nav.ehcp": "EHCP sections",
  "nav.expertHelp": "Expert help",
  "nav.howItWorks": "How it works",
  "nav.security": "Security",
  "nav.languages": "Languages",
  "header.startFree": "Get started",
  "header.accessibility": "Accessibility settings",
  "header.language": "Language",
  "header.chooseLanguage": "Choose your language",
  "header.menu": "Toggle menu",
  "header.languages": "Languages",
  "footer.product": "Product",
  "footer.getHelp": "Get help",
  "footer.company": "Company",
  "common.backToHome": "Back to home",
  "common.partialNotice":
    "Some of this page is still in English while translation is completed.",
};

const so: Dictionary = {
  "nav.problem": "Dhibaatada",
  "nav.compare": "Isbarbardhig",
  "nav.voiceLog": "Diiwaanka codka",
  "nav.decoder": "Furaha erayada",
  "nav.evidence": "Xirmada caddaynta",
  "nav.glossary": "Qaamuuska",
  "nav.pricing": "Qiimaha",
  "nav.faq": "Su'aalaha",
  "nav.resources": "Kheyraadka",
  "nav.timescales": "Waqtiyada sharciga",
  "nav.ehcp": "Qaybaha EHCP",
  "nav.expertHelp": "Caawimaad khabiir",
  "header.startFree": "Bilow bilaash",
  "header.accessibility": "Dejinta helitaanka",
  "header.language": "Luqadda",
  "header.chooseLanguage": "Dooro luqaddaada",
  "header.menu": "Fur liiska",
  "header.languages": "Luqadaha",
  "footer.product": "Alaabta",
  "footer.getHelp": "Caawimaad hel",
  "footer.company": "Shirkadda",
  "common.backToHome": "Ku noqo bogga hore",
  "common.partialNotice":
    "Qayb ka mid ah boggan weli waa Ingiriisi inta turjumaadda la dhammaystirayo.",
};

const ur: Dictionary = {
  "nav.problem": "مسئلہ",
  "nav.compare": "موازنہ",
  "nav.voiceLog": "آواز کا ریکارڈ",
  "nav.decoder": "اصطلاحات کی وضاحت",
  "nav.evidence": "شواہد کا مجموعہ",
  "nav.glossary": "لغت",
  "nav.pricing": "قیمتیں",
  "nav.faq": "عام سوالات",
  "nav.resources": "وسائل",
  "nav.timescales": "قانونی مدت",
  "nav.ehcp": "EHCP کے حصے",
  "nav.expertHelp": "ماہرانہ مدد",
  "header.startFree": "مفت شروع کریں",
  "header.accessibility": "رسائی کی ترتیبات",
  "header.language": "زبان",
  "header.chooseLanguage": "اپنی زبان منتخب کریں",
  "header.menu": "مینو کھولیں",
  "header.languages": "زبانیں",
  "footer.product": "پروڈکٹ",
  "footer.getHelp": "مدد حاصل کریں",
  "footer.company": "کمپنی",
  "common.backToHome": "ہوم پیج پر واپس",
  "common.partialNotice":
    "ترجمہ مکمل ہونے تک اس صفحے کا کچھ حصہ انگریزی میں ہے۔",
};

const pa: Dictionary = {
  "nav.problem": "ਸਮੱਸਿਆ",
  "nav.compare": "ਤੁਲਨਾ",
  "nav.voiceLog": "ਆਵਾਜ਼ ਰਿਕਾਰਡ",
  "nav.decoder": "ਸ਼ਬਦ ਸਮਝਾਊ",
  "nav.evidence": "ਸਬੂਤ ਪੈਕ",
  "nav.glossary": "ਸ਼ਬਦਕੋਸ਼",
  "nav.pricing": "ਕੀਮਤ",
  "nav.faq": "ਆਮ ਸਵਾਲ",
  "nav.resources": "ਸਰੋਤ",
  "nav.timescales": "ਕਾਨੂੰਨੀ ਸਮਾਂ",
  "nav.ehcp": "EHCP ਭਾਗ",
  "nav.expertHelp": "ਮਾਹਰ ਮਦਦ",
  "header.startFree": "ਮੁਫ਼ਤ ਸ਼ੁਰੂ ਕਰੋ",
  "header.accessibility": "ਪਹੁੰਚ ਸੈਟਿੰਗਾਂ",
  "header.language": "ਭਾਸ਼ਾ",
  "header.chooseLanguage": "ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ",
  "header.menu": "ਮੀਨੂ ਖੋਲ੍ਹੋ",
  "header.languages": "ਭਾਸ਼ਾਵਾਂ",
  "footer.product": "ਉਤਪਾਦ",
  "footer.getHelp": "ਮਦਦ ਲਵੋ",
  "footer.company": "ਕੰਪਨੀ",
  "common.backToHome": "ਮੁੱਖ ਪੰਨੇ ਤੇ ਵਾਪਸ",
  "common.partialNotice":
    "ਅਨੁਵਾਦ ਪੂਰਾ ਹੋਣ ਤੱਕ ਇਸ ਪੰਨੇ ਦਾ ਕੁਝ ਹਿੱਸਾ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਹੈ।",
};

const bn: Dictionary = {
  "nav.problem": "সমস্যা",
  "nav.compare": "তুলনা",
  "nav.voiceLog": "ভয়েস রেকর্ড",
  "nav.decoder": "পরিভাষা ব্যাখ্যা",
  "nav.evidence": "প্রমাণ প্যাক",
  "nav.glossary": "শব্দকোষ",
  "nav.pricing": "মূল্য",
  "nav.faq": "সাধারণ প্রশ্ন",
  "nav.resources": "সহায়িকা",
  "nav.timescales": "আইনি সময়সীমা",
  "nav.ehcp": "EHCP অংশ",
  "nav.expertHelp": "বিশেষজ্ঞ সহায়তা",
  "header.startFree": "বিনামূল্যে শুরু করুন",
  "header.accessibility": "অ্যাক্সেসিবিলিটি সেটিংস",
  "header.language": "ভাষা",
  "header.chooseLanguage": "আপনার ভাষা বেছে নিন",
  "header.menu": "মেনু খুলুন",
  "header.languages": "ভাষাসমূহ",
  "footer.product": "পণ্য",
  "footer.getHelp": "সহায়তা নিন",
  "footer.company": "কোম্পানি",
  "common.backToHome": "হোম পেজে ফিরুন",
  "common.partialNotice":
    "অনুবাদ সম্পূর্ণ না হওয়া পর্যন্ত এই পাতার কিছু অংশ ইংরেজিতে রয়েছে।",
};

const pl: Dictionary = {
  "nav.problem": "Problem",
  "nav.compare": "Porównanie",
  "nav.voiceLog": "Dziennik głosowy",
  "nav.decoder": "Dekoder pojęć",
  "nav.evidence": "Pakiet dowodów",
  "nav.glossary": "Słowniczek",
  "nav.pricing": "Cennik",
  "nav.faq": "FAQ",
  "nav.resources": "Materiały",
  "nav.timescales": "Terminy ustawowe",
  "nav.ehcp": "Sekcje EHCP",
  "nav.expertHelp": "Pomoc ekspercka",
  "header.startFree": "Zacznij za darmo",
  "header.accessibility": "Ustawienia dostępności",
  "header.language": "Język",
  "header.chooseLanguage": "Wybierz swój język",
  "header.menu": "Otwórz menu",
  "header.languages": "Języki",
  "footer.product": "Produkt",
  "footer.getHelp": "Uzyskaj pomoc",
  "footer.company": "Firma",
  "common.backToHome": "Powrót do strony głównej",
  "common.partialNotice":
    "Część tej strony jest nadal po angielsku, tłumaczenie jest w toku.",
};

const ru: Dictionary = {
  "nav.problem": "Суть проблемы",
  "nav.compare": "Сравнение",
  "nav.voiceLog": "Голосовой журнал",
  "nav.decoder": "Декодер терминов",
  "nav.evidence": "Пакет доказательств",
  "nav.glossary": "Глоссарий",
  "nav.pricing": "Цены",
  "nav.faq": "Вопросы и ответы",
  "nav.resources": "Ресурсы",
  "nav.timescales": "Законные сроки",
  "nav.ehcp": "Разделы EHCP",
  "nav.expertHelp": "Помощь эксперта",
  "header.startFree": "Начать бесплатно",
  "header.accessibility": "Настройки доступности",
  "header.language": "Язык",
  "header.chooseLanguage": "Выберите язык",
  "header.menu": "Открыть меню",
  "header.languages": "Языки",
  "footer.product": "Продукт",
  "footer.getHelp": "Получить помощь",
  "footer.company": "Компания",
  "common.backToHome": "На главную",
  "common.partialNotice":
    "Часть этой страницы пока на английском — перевод в процессе.",
};

export const DICTIONARIES: Record<LocaleCode, Dictionary> = {
  en, so, ur, pa, bn, pl, ru,
};

const TOTAL_KEYS = Object.keys(en).length;

/** How much of the interface a locale currently covers, 0 to 1. */
export function localeCoverage(locale: LocaleCode): number {
  if (locale === "en") return 1;
  const dict = DICTIONARIES[locale];
  if (!dict) return 0;
  const done = (Object.keys(dict) as TranslationKey[]).filter(
    (k) => typeof dict[k] === "string" && dict[k]!.length > 0
  ).length;
  return done / TOTAL_KEYS;
}

/**
 * Look up a string, falling back to English when a locale has not
 * translated that key yet.
 */
export function translate(locale: LocaleCode, key: TranslationKey): string {
  return DICTIONARIES[locale]?.[key] ?? en[key];
}
