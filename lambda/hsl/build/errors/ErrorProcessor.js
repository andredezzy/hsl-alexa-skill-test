"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorProcessor = void 0;
const i18n_1 = require("../i18n");
/**
 * Handles ErrorTypes.Unexpected errors which should be thrown when something
 * unexpected happens.
 */
exports.ErrorProcessor = {
    canHandle(handlerInput, error) {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`Error handled: ${error.message}`);
        return handlerInput.responseBuilder
            .speak(i18n_1.t('ERROR_MSG'))
            .getResponse();
    },
};
//# sourceMappingURL=ErrorProcessor.js.map