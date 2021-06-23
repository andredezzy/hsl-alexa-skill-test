import { RequestInterceptor } from 'ask-sdk-core';
import i18n from 'i18next';
import * as sprintf from 'i18next-sprintf-postprocessor';

import { ptBR } from '../i18n/locales/pt-BR';

export const LocalizationRequestInterceptor: RequestInterceptor = {
  process(handlerInput) {
    i18n
      .use(sprintf)
      .init({
        resources: {
          ...ptBR,
        },
        lng: handlerInput.requestEnvelope.request.locale,
        overloadTranslationOptionHandler: sprintf.overloadTranslationOptionHandler,
        returnObjects: true,
      });
  },
};
