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

export type LocaleCode =
  | "en" | "so" | "ur" | "pa" | "bn" | "pl"
  | "ar" | "fr" | "pt" | "tr" | "ro" | "zh"
  | "es" | "fa" | "tg" | "vi";

/**
 * Right-to-left scripts only.
 * Note Punjabi here is Gurmukhi (ਪੰਜਾਬੀ) and Bengali is বাংলা, both
 * left-to-right. Only Arabic, Urdu and Persian run right-to-left.
 */
export const RTL_LOCALES: LocaleCode[] = ["ar", "ur", "fa"];

export function isRtl(locale: LocaleCode): boolean {
  return RTL_LOCALES.includes(locale);
}

/** The interface strings that are translated. */
export type TranslationKey =
  | "nav.problem" | "nav.compare" | "nav.voiceLog" | "nav.decoder"
  | "nav.evidence" | "nav.glossary" | "nav.pricing" | "nav.faq"
  | "nav.resources" | "nav.timescales" | "nav.ehcp" | "nav.expertHelp"
  | "header.startFree" | "header.accessibility" | "header.language"
  | "header.chooseLanguage" | "header.menu" | "header.languages"
  | "footer.product" | "footer.getHelp" | "footer.company"
  | "common.backToHome" | "common.partialNotice";

type Dictionary = Partial<Record<TranslationKey, string>>;

/** English is the source of truth and the fallback for every other locale. */
const en: Record<TranslationKey, string> = {
  "nav.problem": "The problem",
  "nav.compare": "Compare",
  "nav.voiceLog": "Voice log",
  "nav.decoder": "Decoder",
  "nav.evidence": "Evidence",
  "nav.glossary": "Glossary",
  "nav.pricing": "Pricing",
  "nav.faq": "FAQ",
  "nav.resources": "Resources",
  "nav.timescales": "Timescales",
  "nav.ehcp": "EHCP sections",
  "nav.expertHelp": "Expert help",
  "header.startFree": "Start free",
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
  "nav.evidence": "Caddaynta",
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
  "nav.evidence": "شواہد",
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
  "nav.evidence": "ਸਬੂਤ",
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
  "nav.evidence": "প্রমাণ",
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
  "nav.evidence": "Dowody",
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

const ar: Dictionary = {
  "nav.problem": "المشكلة",
  "nav.compare": "مقارنة",
  "nav.voiceLog": "سجل صوتي",
  "nav.decoder": "مفسّر المصطلحات",
  "nav.evidence": "الأدلة",
  "nav.glossary": "المعجم",
  "nav.pricing": "الأسعار",
  "nav.faq": "الأسئلة الشائعة",
  "nav.resources": "الموارد",
  "nav.timescales": "المواعيد القانونية",
  "nav.ehcp": "أقسام EHCP",
  "nav.expertHelp": "مساعدة متخصصة",
  "header.startFree": "ابدأ مجانًا",
  "header.accessibility": "إعدادات الوصول",
  "header.language": "اللغة",
  "header.chooseLanguage": "اختر لغتك",
  "header.menu": "فتح القائمة",
  "header.languages": "اللغات",
  "footer.product": "المنتج",
  "footer.getHelp": "احصل على مساعدة",
  "footer.company": "الشركة",
  "common.backToHome": "العودة إلى الصفحة الرئيسية",
  "common.partialNotice":
    "بعض أجزاء هذه الصفحة لا تزال بالإنجليزية ريثما تكتمل الترجمة.",
};

const fr: Dictionary = {
  "nav.problem": "Le problème",
  "nav.compare": "Comparer",
  "nav.voiceLog": "Journal vocal",
  "nav.decoder": "Décodeur",
  "nav.evidence": "Preuves",
  "nav.glossary": "Glossaire",
  "nav.pricing": "Tarifs",
  "nav.faq": "FAQ",
  "nav.resources": "Ressources",
  "nav.timescales": "Délais légaux",
  "nav.ehcp": "Sections EHCP",
  "nav.expertHelp": "Aide spécialisée",
  "header.startFree": "Commencer gratuitement",
  "header.accessibility": "Paramètres d'accessibilité",
  "header.language": "Langue",
  "header.chooseLanguage": "Choisissez votre langue",
  "header.menu": "Ouvrir le menu",
  "header.languages": "Langues",
  "footer.product": "Produit",
  "footer.getHelp": "Obtenir de l'aide",
  "footer.company": "Entreprise",
  "common.backToHome": "Retour à l'accueil",
  "common.partialNotice":
    "Une partie de cette page reste en anglais le temps que la traduction soit terminée.",
};

const pt: Dictionary = {
  "nav.problem": "O problema",
  "nav.compare": "Comparar",
  "nav.voiceLog": "Registo de voz",
  "nav.decoder": "Descodificador",
  "nav.evidence": "Provas",
  "nav.glossary": "Glossário",
  "nav.pricing": "Preços",
  "nav.faq": "Perguntas frequentes",
  "nav.resources": "Recursos",
  "nav.timescales": "Prazos legais",
  "nav.ehcp": "Secções do EHCP",
  "nav.expertHelp": "Ajuda especializada",
  "header.startFree": "Começar grátis",
  "header.accessibility": "Definições de acessibilidade",
  "header.language": "Idioma",
  "header.chooseLanguage": "Escolha o seu idioma",
  "header.menu": "Abrir menu",
  "header.languages": "Idiomas",
  "footer.product": "Produto",
  "footer.getHelp": "Obter ajuda",
  "footer.company": "Empresa",
  "common.backToHome": "Voltar ao início",
  "common.partialNotice":
    "Parte desta página continua em inglês enquanto a tradução é concluída.",
};

const tr: Dictionary = {
  "nav.problem": "Sorun",
  "nav.compare": "Karşılaştır",
  "nav.voiceLog": "Sesli kayıt",
  "nav.decoder": "Terim çözücü",
  "nav.evidence": "Kanıtlar",
  "nav.glossary": "Sözlük",
  "nav.pricing": "Fiyatlandırma",
  "nav.faq": "SSS",
  "nav.resources": "Kaynaklar",
  "nav.timescales": "Yasal süreler",
  "nav.ehcp": "EHCP bölümleri",
  "nav.expertHelp": "Uzman desteği",
  "header.startFree": "Ücretsiz başla",
  "header.accessibility": "Erişilebilirlik ayarları",
  "header.language": "Dil",
  "header.chooseLanguage": "Dilinizi seçin",
  "header.menu": "Menüyü aç",
  "header.languages": "Diller",
  "footer.product": "Ürün",
  "footer.getHelp": "Yardım al",
  "footer.company": "Şirket",
  "common.backToHome": "Ana sayfaya dön",
  "common.partialNotice":
    "Çeviri tamamlanana kadar bu sayfanın bir kısmı İngilizce kalacaktır.",
};

const ro: Dictionary = {
  "nav.problem": "Problema",
  "nav.compare": "Comparație",
  "nav.voiceLog": "Jurnal vocal",
  "nav.decoder": "Decodor de termeni",
  "nav.evidence": "Dovezi",
  "nav.glossary": "Glosar",
  "nav.pricing": "Prețuri",
  "nav.faq": "Întrebări frecvente",
  "nav.resources": "Resurse",
  "nav.timescales": "Termene legale",
  "nav.ehcp": "Secțiuni EHCP",
  "nav.expertHelp": "Ajutor de specialitate",
  "header.startFree": "Începe gratuit",
  "header.accessibility": "Setări de accesibilitate",
  "header.language": "Limbă",
  "header.chooseLanguage": "Alege-ți limba",
  "header.menu": "Deschide meniul",
  "header.languages": "Limbi",
  "footer.product": "Produs",
  "footer.getHelp": "Obține ajutor",
  "footer.company": "Companie",
  "common.backToHome": "Înapoi la pagina principală",
  "common.partialNotice":
    "O parte din această pagină este încă în engleză până la finalizarea traducerii.",
};

const zh: Dictionary = {
  "nav.problem": "问题所在",
  "nav.compare": "对比",
  "nav.voiceLog": "语音记录",
  "nav.decoder": "术语解读",
  "nav.evidence": "证据",
  "nav.glossary": "术语表",
  "nav.pricing": "价格",
  "nav.faq": "常见问题",
  "nav.resources": "资源",
  "nav.timescales": "法定时限",
  "nav.ehcp": "EHCP 各部分",
  "nav.expertHelp": "专业帮助",
  "header.startFree": "免费开始",
  "header.accessibility": "无障碍设置",
  "header.language": "语言",
  "header.chooseLanguage": "选择您的语言",
  "header.menu": "打开菜单",
  "header.languages": "语言",
  "footer.product": "产品",
  "footer.getHelp": "获取帮助",
  "footer.company": "公司",
  "common.backToHome": "返回首页",
  "common.partialNotice": "翻译完成前，本页部分内容仍为英文。",
};

const es: Dictionary = {
  "nav.problem": "El problema",
  "nav.compare": "Comparar",
  "nav.voiceLog": "Registro de voz",
  "nav.decoder": "Descodificador",
  "nav.evidence": "Pruebas",
  "nav.glossary": "Glosario",
  "nav.pricing": "Precios",
  "nav.faq": "Preguntas frecuentes",
  "nav.resources": "Recursos",
  "nav.timescales": "Plazos legales",
  "nav.ehcp": "Secciones del EHCP",
  "nav.expertHelp": "Ayuda experta",
  "header.startFree": "Empezar gratis",
  "header.accessibility": "Ajustes de accesibilidad",
  "header.language": "Idioma",
  "header.chooseLanguage": "Elige tu idioma",
  "header.menu": "Abrir menú",
  "header.languages": "Idiomas",
  "footer.product": "Producto",
  "footer.getHelp": "Obtener ayuda",
  "footer.company": "Empresa",
  "common.backToHome": "Volver al inicio",
  "common.partialNotice":
    "Parte de esta página sigue en inglés mientras se completa la traducción.",
};

const fa: Dictionary = {
  "nav.problem": "مشکل",
  "nav.compare": "مقایسه",
  "nav.voiceLog": "دفترچه صوتی",
  "nav.decoder": "رمزگشای اصطلاحات",
  "nav.evidence": "مدارک",
  "nav.glossary": "واژه‌نامه",
  "nav.pricing": "قیمت‌ها",
  "nav.faq": "پرسش‌های متداول",
  "nav.resources": "منابع",
  "nav.timescales": "مهلت‌های قانونی",
  "nav.ehcp": "بخش‌های EHCP",
  "nav.expertHelp": "کمک تخصصی",
  "header.startFree": "شروع رایگان",
  "header.accessibility": "تنظیمات دسترسی‌پذیری",
  "header.language": "زبان",
  "header.chooseLanguage": "زبان خود را انتخاب کنید",
  "header.menu": "باز کردن منو",
  "header.languages": "زبان‌ها",
  "footer.product": "محصول",
  "footer.getHelp": "دریافت کمک",
  "footer.company": "شرکت",
  "common.backToHome": "بازگشت به صفحه اصلی",
  "common.partialNotice":
    "تا تکمیل ترجمه، بخشی از این صفحه به انگلیسی باقی می‌ماند.",
};

const tg: Dictionary = {
  "nav.problem": "Ang problema",
  "nav.compare": "Paghambingin",
  "nav.voiceLog": "Talaan ng boses",
  "nav.decoder": "Tagapaliwanag ng termino",
  "nav.evidence": "Ebidensya",
  "nav.glossary": "Talasalitaan",
  "nav.pricing": "Presyo",
  "nav.faq": "Mga karaniwang tanong",
  "nav.resources": "Mga sanggunian",
  "nav.timescales": "Legal na takdang panahon",
  "nav.ehcp": "Mga bahagi ng EHCP",
  "nav.expertHelp": "Tulong ng eksperto",
  "header.startFree": "Magsimula nang libre",
  "header.accessibility": "Mga setting ng accessibility",
  "header.language": "Wika",
  "header.chooseLanguage": "Piliin ang iyong wika",
  "header.menu": "Buksan ang menu",
  "header.languages": "Mga wika",
  "footer.product": "Produkto",
  "footer.getHelp": "Humingi ng tulong",
  "footer.company": "Kompanya",
  "common.backToHome": "Bumalik sa home",
  "common.partialNotice":
    "Bahagi ng pahinang ito ay nasa Ingles pa habang tinatapos ang pagsasalin.",
};

const vi: Dictionary = {
  "nav.problem": "Vấn đề",
  "nav.compare": "So sánh",
  "nav.voiceLog": "Nhật ký giọng nói",
  "nav.decoder": "Giải nghĩa thuật ngữ",
  "nav.evidence": "Bằng chứng",
  "nav.glossary": "Thuật ngữ",
  "nav.pricing": "Giá",
  "nav.faq": "Câu hỏi thường gặp",
  "nav.resources": "Tài nguyên",
  "nav.timescales": "Thời hạn pháp lý",
  "nav.ehcp": "Các phần của EHCP",
  "nav.expertHelp": "Trợ giúp chuyên môn",
  "header.startFree": "Bắt đầu miễn phí",
  "header.accessibility": "Cài đặt trợ năng",
  "header.language": "Ngôn ngữ",
  "header.chooseLanguage": "Chọn ngôn ngữ của bạn",
  "header.menu": "Mở menu",
  "header.languages": "Ngôn ngữ",
  "footer.product": "Sản phẩm",
  "footer.getHelp": "Nhận trợ giúp",
  "footer.company": "Công ty",
  "common.backToHome": "Về trang chủ",
  "common.partialNotice":
    "Một phần trang này vẫn bằng tiếng Anh trong khi bản dịch đang được hoàn thiện.",
};

export const DICTIONARIES: Record<LocaleCode, Dictionary> = {
  en, so, ur, pa, bn, pl, ar, fr, pt, tr, ro, zh, es, fa, tg, vi,
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
