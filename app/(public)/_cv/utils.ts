export function fmtDate(monthStr: string): string {
  if (!monthStr) return "Present";
  const parts = monthStr.split("-");
  if (parts.length < 2) return monthStr;
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${months[parseInt(parts[1]) - 1]} ${parts[0]}`;
}

export function genId(): string {
  return Math.random().toString(36).slice(2, 9);
}

export const ROLE_OPTIONS = [
  "Executive Chef","Head Chef","Executive Sous","Sous Chef","Chef de parties",
  "Demi Chef","Commis Chef","Trainee","Pizzaolo","Sushi Chef","Breakfast Chef",
];

export const SALARY_OPTIONS = [
  "€2.100 - €2.400","€2.500 - €2.700","€2.800 - €3.000",
  "€3.100 - €3.400","€3.500 - €3.800","€3.900 - €4.100",
  "€4.200 - €4.500","€4.500 - €4.900","€5.000+",
];

export const LANG_LEVELS = [
  "Beginner","Elementary","Intermediate","Upper-Intermediate","Fluent","Native/Bilingual",
];

export const COMPANY_TYPES = [
  "Restaurant","Hotel","Catering & Events","Lunchrooms","Bar/Café",
  "Beachclub","Canteen & Corporate","Open to all",
];

export const NIVEAU_OPTIONS = [
  "Fast/Casual","Casual Dining","Fine Dining","Bib Gourmand","Michelin","Open to all",
];

export const STYLE_OPTIONS = [
  "Modern","Classic","Fusion","French","Asian","Mediterranean",
  "Italian","Spanish","Carribean","Open to all",
];

export const CUISINE_OPTIONS = [
  "À la carte","Fixed menu","Buffet","Events/Groups","Room Service","Open to all",
];