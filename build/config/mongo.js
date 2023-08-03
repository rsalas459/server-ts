"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGO_DB = exports.db = void 0;
const mongoose_1 = require("mongoose");
const MONGO_DB = 'server-ts';
exports.MONGO_DB = MONGO_DB;
const url = `mongodb+srv://rsalas459:M4Rl3t_459@cluster0.jwiu8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
function db() {
    return __awaiter(this, void 0, void 0, function* () {
        const DB_URI = url;
        yield (0, mongoose_1.connect)(DB_URI);
    });
}
exports.db = db;
