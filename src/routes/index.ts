import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;

const router = Router();

const cleanFileName = (fileName: string) => {
    const file = fileName.split(".").shift();
    return file;
};

readdirSync(PATH_ROUTER).filter((file) => {
    const cleanName = cleanFileName(file);
    if (cleanName !== "index") {
        import(`./${cleanName}`).then((moduleRouter) => {
            router.use(`/${cleanName}`, moduleRouter.router);
        });
    }
})
export { router };
