import { RequestHandler, HandlerInput } from 'ask-sdk-core';

import { isIntent } from '../utilities/helpers';
import { IntentTypes } from '../utilities/constants';
import { t } from '../i18n';

export const Fallback: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return isIntent(handlerInput, IntentTypes.Fallback);
  },
  handle(handlerInput: HandlerInput) {
    const speechText = t('ERROR_MSG');

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(t('HELP_MSG'))
      .getResponse();
  },
};
