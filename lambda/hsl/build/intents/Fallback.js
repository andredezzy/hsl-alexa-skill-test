"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fallback = void 0;
const helpers_1 = require("../utilities/helpers");
const constants_1 = require("../utilities/constants");
const i18n_1 = require("../i18n");
exports.Fallback = {
    canHandle(handlerInput) {
        return helpers_1.isIntent(handlerInput, constants_1.IntentTypes.Fallback);
    },
    handle(handlerInput) {
        const speechText = i18n_1.t('ERROR_MSG');
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(i18n_1.t('HELP_MSG'))
            .getResponse();
    },
};
//# sourceMappingURL=Fallback.js.map