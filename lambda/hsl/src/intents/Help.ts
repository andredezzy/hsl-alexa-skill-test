import { RequestHandler, HandlerInput } from 'ask-sdk-core';

import { isIntent } from '../utilities/helpers';
import { IntentTypes } from '../utilities/constants';
import { t } from '../i18n';

export const Help: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return isIntent(handlerInput, IntentTypes.Help);
  },
  handle(handlerInput: HandlerInput) {
    const speechText = t('HELP_MSG');

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard(t('SKILL_NAME'), speechText)
      .getResponse();
  },
};
