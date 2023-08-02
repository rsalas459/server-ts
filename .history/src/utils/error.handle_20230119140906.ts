import { Response } from "express";

const handleHttp = (res: Response, error: string, errorRaw?: any) => {
    console.log("res: ", res);
    console.log({ error, errorRaw });
    res.status(500);
    res.send({ error: error });


}

export {handleHttp}