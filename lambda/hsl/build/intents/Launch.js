"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Launch = void 0;
const constants_1 = require("../utilities/constants");
const helpers_1 = require("../utilities/helpers");
const i18n_1 = require("../i18n");
exports.Launch = {
    canHandle(handlerInput) {
        return helpers_1.isType(handlerInput, constants_1.RequestTypes.Launch);
    },
    handle(handlerInput) {
        const speechText = i18n_1.t('WELCOME_MSG');
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard(i18n_1.t('SKILL_NAME'), speechText)
            .getResponse();
    },
};
//# sourceMappingURL=Launch.js.map