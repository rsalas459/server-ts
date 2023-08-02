import { Request, Response } from "express";
import {
    createManagerService,
    getManagersService,
    getManagerService,
    updateManagerService,
    deleteManagerService
} from "../services/manager";
import { handleHttp } from "../utils/error.handle"

const getManagers = async (req: Request, res: Response) => {
    try {
        const responseManagers = await getManagersService();
        res.send(responseManagers);

    } catch (e) {
        handleHttp(res, 'Error getting managers');
    }
}

const getManager = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const responseManager = await getManagerService(id);
        const data = responseManager ? responseManager : { "message": "Manager not found" };
        res.send(data);
    } catch (e) {
        handleHttp(res, 'Error getting manager');
    }
}

const updateManager = async ({ params, body }: Request, res: Response) => {

    try {
        const { id } = params;
        const responseManager = await updateManagerService(id, body);

        const data = responseManager ? responseManager : { "message": "Manager not found" };
        res.send(data);
    } catch (e) {
        handleHttp(res, 'Error updating managers');
    }
}

const deleteManager = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const responseManager = await deleteManagerService(id);
        res.send(responseManager);
    } catch (e) {
        handleHttp(res, 'Error deleting managers');
    }
}

const postManager = async ({ body }: Request, res: Response) => {
    try {
        const responseManager = await createManagerService(body);
        res.send(responseManager);
    } catch (e) {
        handleHttp(res, 'Error creating managers', e);
    }
}

export { getManagers, getManager, updateManager, deleteManager, postManager }
