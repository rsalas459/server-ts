import { Request, Response } from "express";
import {
    createAccountService,
    getAccountsService,
    getAccountService,
    updateAccountService,
    deleteAccountService
} from "../services/account";
import { handleHttp } from "../utils/error.handle"

const getAccounts = async (req: Request, res: Response) => {
    try {
        const responseAccounts = await getAccountsService();
        res.send(responseAccounts);

    } catch (e) {
        handleHttp(res, 'Error getting accounts');
    }
}

const getAccount = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const responseAccount = await getAccountService(id);
        const data = responseAccount ? responseAccount : { "message": "Account not found" };
        res.send(data);
    } catch (e) {
        handleHttp(res, 'Error getting account');
    }
}

const updateAccount = async ({ params, body }: Request, res: Response) => {

    try {
        const { id } = params;
        const responseAccount = await updateAccountService(id, body);

        const data = responseAccount ? responseAccount : { "message": "Account not found" };
        res.send(data);
    } catch (e) {
        handleHttp(res, 'Error updating accounts');
    }
}

const deleteAccount = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const responseAccount = await deleteAccountService(id);
        res.send(responseAccount);
    } catch (e) {
        handleHttp(res, 'Error deleting accounts');
    }
}

const postAccount = async ({ body }: Request, res: Response) => {
    try {
        const responseAccount = await createAccountService(body);
        res.send(responseAccount);
    } catch (e) {
        handleHttp(res, 'Error creating accounts', e);
    }
}

export { getAccounts, getAccount, updateAccount, deleteAccount, postAccount }
