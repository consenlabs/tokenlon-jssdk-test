"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __importDefault(require("../../tokenlon-jssdk/lib"));
exports.jssdkClient = lib_1.default({
    address: '0x865eADB12Bf29CD141A0De88FD29716e2c169a86',
    privateKey: 'd1451880ed758be8e82c60c2cd4f77228064c3bbad3cb4825b55b226780d189d',
    providerUrl: 'https://mainnet.infura.io',
});
