import { RequestHandler, HandlerInput } from 'ask-sdk-core';

import { isType } from '../utilities/helpers';
import { RequestTypes } from '../utilities/constants';
import { t } from '../i18n';

export const SessionEnded: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return isType(handlerInput, RequestTypes.SessionEnded);
  },
  handle(handlerInput: HandlerInput) {
    const speechText = t('GOODBYE_MSG');

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard(t('SKILL_NAME'), speechText)
      .getResponse();
  },
};
