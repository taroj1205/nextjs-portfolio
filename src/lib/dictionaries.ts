import type { Translation } from "locales/en/translation"
import { translations as translationsEN } from "locales/en/translation"
import { translations as translationsJA } from "locales/ja/translation"

export const getDictionary = (locale: string): Translation => {
  return locale === "ja" ? translationsJA : translationsEN
}
