import { RequestHandler, HandlerInput } from 'ask-sdk-core';

import { IntentTypes } from '../utilities/constants';
import { isIntent } from '../utilities/helpers';
import { t } from '../i18n';

export const Stop: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return isIntent(handlerInput, IntentTypes.Stop, IntentTypes.Cancel);
  },
  handle(handlerInput: HandlerInput) {
    const speechText = t('GOODBYE_MSG');

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard(t('SKILL_NAME'), speechText)
      .getResponse();
  },
};
