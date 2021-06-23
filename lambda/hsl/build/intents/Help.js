"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Help = void 0;
const helpers_1 = require("../utilities/helpers");
const constants_1 = require("../utilities/constants");
const i18n_1 = require("../i18n");
exports.Help = {
    canHandle(handlerInput) {
        return helpers_1.isIntent(handlerInput, constants_1.IntentTypes.Help);
    },
    handle(handlerInput) {
        const speechText = i18n_1.t('HELP_MSG');
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard(i18n_1.t('SKILL_NAME'), speechText)
            .getResponse();
    },
};
//# sourceMappingURL=Help.js.map