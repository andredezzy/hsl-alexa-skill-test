"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.t = exports.Locale = void 0;
const i18next_1 = __importDefault(require("i18next"));
var Locale;
(function (Locale) {
    Locale["ptBR"] = "pt-BR";
})(Locale = exports.Locale || (exports.Locale = {}));
function t(key) {
    return i18next_1.default.t(key);
}
exports.t = t;
//# sourceMappingURL=index.js.map