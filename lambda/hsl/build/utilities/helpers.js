"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isType = exports.isIntent = void 0;
const constants_1 = require("./constants");
/**
 * Checks if the request matches any of the given intents.
 *
 * @param handlerInput
 * @param intents
 */
function isIntent(handlerInput, ...intents) {
    if (handlerInput.requestEnvelope.request.type === constants_1.RequestTypes.Intent) {
        for (let i = 0; i < intents.length; i++) {
            if (handlerInput.requestEnvelope.request.intent.name === intents[i]) {
                return true;
            }
        }
    }
    return false;
}
exports.isIntent = isIntent;
/**
 * Checks if the request matches any of the given types.
 *
 * @param handlerInput
 * @param types
 */
function isType(handlerInput, ...types) {
    for (let i = 0; i < types.length; i++) {
        if (handlerInput.requestEnvelope.request.type === types[i]) {
            return true;
        }
    }
    return false;
}
exports.isType = isType;
//# sourceMappingURL=helpers.js.map