import { Response } from "express";

const handleHttp = (res: Response, error: string, errorRaw?: any) => {
    console.log({ error, errorRaw });
    res.status(500);
    res.render('error', { error: error });


}

export {handleHttp}