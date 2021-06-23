import { RequestHandler, HandlerInput } from 'ask-sdk-core';

import { RequestTypes } from '../utilities/constants';
import { isType } from '../utilities/helpers';
import { t } from '../i18n';

export const Launch: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return isType(handlerInput, RequestTypes.Launch);
  },
  handle(handlerInput: HandlerInput) {
    const speechText = t('WELCOME_MSG');

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard(t('SKILL_NAME'), speechText)
      .getResponse();
  },
};
