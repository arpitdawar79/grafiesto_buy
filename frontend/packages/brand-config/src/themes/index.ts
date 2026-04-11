import type { BrandSlug, BrandTheme } from "../types"
import { themeMiramme } from "./miramme"
import { rebracielTheme } from "./rebraciel"
import { scrabeoTheme } from "./scrabeo"
import { aamrahTheme } from "./aamrah"
import { reboChemicalsTheme } from "./rebo-chemicals"

export const THEMES: Record<BrandSlug, BrandTheme> = {
  miramme: themeMiramme,
  rebraciel: rebracielTheme,
  scrabeo: scrabeoTheme,
  aamrah: aamrahTheme,
  "rebo-chemicals": reboChemicalsTheme,
}

export {
  themeMiramme,
  rebracielTheme,
  scrabeoTheme,
  aamrahTheme,
  reboChemicalsTheme,
}
