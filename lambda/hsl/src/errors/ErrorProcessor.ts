import { ErrorHandler, HandlerInput } from 'ask-sdk-core';

import { t } from '../i18n';

/**
 * Handles ErrorTypes.Unexpected errors which should be thrown when something
 * unexpected happens.
 */
export const ErrorProcessor: ErrorHandler = {
  canHandle(handlerInput: HandlerInput, error: Error) {
    return true;
  },
  handle(handlerInput: HandlerInput, error: Error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak(t('ERROR_MSG'))
      .getResponse();
  },
};
