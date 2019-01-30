"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
function authenticate(options, proxy) {
    return new Promise(function (resolve, reject) {
        axios_1.default({
            method: 'post',
            url: 'http://authserver.mojang.com/authenticate',
            proxy: proxy,
            data: options
        }).then(function (response) { return response.data; }).then(resolve).catch(reject);
    });
}
exports.authenticate = authenticate;
function validate(options, proxy) {
    return new Promise(function (resolve, reject) {
        axios_1.default({
            method: 'post',
            url: 'http://authserver.mojang.com/validate',
            proxy: proxy,
            data: options
        }).then(function () { return resolve(true); }).catch(function () { return resolve(false); });
    });
}
exports.validate = validate;
