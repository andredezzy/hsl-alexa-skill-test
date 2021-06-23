"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionEnded = void 0;
const helpers_1 = require("../utilities/helpers");
const constants_1 = require("../utilities/constants");
const i18n_1 = require("../i18n");
exports.SessionEnded = {
    canHandle(handlerInput) {
        return helpers_1.isType(handlerInput, constants_1.RequestTypes.SessionEnded);
    },
    handle(handlerInput) {
        const speechText = i18n_1.t('GOODBYE_MSG');
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard(i18n_1.t('SKILL_NAME'), speechText)
            .getResponse();
    },
};
//# sourceMappingURL=SessionEnded.js.map