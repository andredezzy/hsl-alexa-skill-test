import { RequestHandler, HandlerInput } from 'ask-sdk-core';

import { isIntent } from '../utilities/helpers';
import { IntentTypes } from '../utilities/constants';
import { t } from '../i18n';

export const Emergency: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return isIntent(handlerInput, IntentTypes.HelloWorld);
  },
  handle(handlerInput: HandlerInput) {
    const speechText = t('emergency.TRIGGERING_DOCTOR_MSG');

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard(t('SKILL_NAME'), speechText)
      .getResponse();
  },
};
