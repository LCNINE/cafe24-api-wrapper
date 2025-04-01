"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeMemberToken = exports.Cafe24API = void 0;
var Cafe24API_1 = require("./Cafe24API");
Object.defineProperty(exports, "Cafe24API", { enumerable: true, get: function () { return Cafe24API_1.Cafe24API; } });
__exportStar(require("./webhooks"), exports);
var decodeMemberToken_1 = require("./auth/decodeMemberToken");
Object.defineProperty(exports, "decodeMemberToken", { enumerable: true, get: function () { return decodeMemberToken_1.decodeMemberToken; } });
