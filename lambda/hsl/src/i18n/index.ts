import i18n from 'i18next';

export enum Locale {
  ptBR = 'pt-BR',
}

interface TranslationMessage {
  SKILL_NAME: string;
  WELCOME_MSG: string;
  HELP_MSG: string;
  ERROR_MSG: string;
  ERROR_UNEXPECTED_MSG: string;
  GOODBYE_MSG: string;

  emergency: {
    TRIGGERING_DOCTOR_MSG: string;
  };
}

export type Translation = {
  [key in Locale]: {
    translation: TranslationMessage;
  };
};

export type TranslationMessagePath = Paths<TranslationMessage>;

export function t(key: TranslationMessagePath): string {
  return i18n.t(key);
}
