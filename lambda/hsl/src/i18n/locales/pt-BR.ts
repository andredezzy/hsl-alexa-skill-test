import { Locale, Translation } from '..';

export const ptBR: Translation = {
  [Locale.ptBR]: {
    translation: {
      SKILL_NAME: 'Hospital Sírio Libanês',
      WELCOME_MSG: 'Bem-vindo ao Hospital Sírio Libanês',
      GOODBYE_MSG: 'Até mais!',
      HELP_MSG:
        'Você pode me falar que está passando mal e acionaremos um médico para você.',
      ERROR_MSG: 'Ops, não consegui entender você. Tente novamente.',
      ERROR_UNEXPECTED_MSG:
        'Desculpa, ocorreu um erro inesperado. Por favor, tente novamente mais tarde.',

      emergency: {
        TRIGGERING_DOCTOR_MSG: 'Acionando um médico urgentemente.',
      },
    },
  },
};
