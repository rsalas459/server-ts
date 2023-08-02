"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHttp = void 0;
const handleHttp = (res, error, errorRaw) => {
    console.log("res: ", res);
    console.log({ error, errorRaw });
    res.status(500);
    res.send({ error: error });
};
exports.handleHttp = handleHttp;
