"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop = void 0;
const constants_1 = require("../utilities/constants");
const helpers_1 = require("../utilities/helpers");
const i18n_1 = require("../i18n");
exports.Stop = {
    canHandle(handlerInput) {
        return helpers_1.isIntent(handlerInput, constants_1.IntentTypes.Stop, constants_1.IntentTypes.Cancel);
    },
    handle(handlerInput) {
        const speechText = i18n_1.t('GOODBYE_MSG');
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard(i18n_1.t('SKILL_NAME'), speechText)
            .getResponse();
    },
};
//# sourceMappingURL=Stop.js.map