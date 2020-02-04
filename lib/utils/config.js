"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __importDefault(require("../../tokenlon-jssdk/lib"));
exports.jssdkClient = lib_1.default({
    address: '0x74352cCbEdA66517386F04b7827616a06C69b0F6',
    privateKey: 'e0abe062428d46d8bef339b21bf05c8b9449a6328be180e618b36691b88b5829',
    providerUrl: 'https://mainnet.infura.io',
});
