import { Response } from "express";

const handleHttp = (res: Response, error: string, errorRaw?: any) => {
    console.log({ error, errorRaw });
    res.status(200);
    res.send({ error: error });


}

export {handleHttp}