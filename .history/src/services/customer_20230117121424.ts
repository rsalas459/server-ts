import { Account } from "../interfaces/account.interface";

import AccountModel from "../models/account";

const createAccountService = async (account: Account) => {
    const newAccount = await AccountModel.create(account);
    return newAccount;
}


const getAccountsService = async () => {

    const accounts = await AccountModel.find({});
    return accounts;
}
const getAccountService = async (id: string) => {


    const account = await AccountModel.findOne({ _id: id }).populate("plan");
    console.log("account: ", account);
    return account;
}

const updateAccountService = async (id: string, account: Account) => {
    const updatedAccount = await AccountModel.findOneAndUpdate({ _id: id }, account, { new: true });
    if (!updatedAccount) {
        return "Account no Exists"
    }
    const status = 'success';

    return { status, data: updatedAccount };
}


const deleteAccountService = async (id: string) => {
    const deletedAccount = await AccountModel.remove({ _id: id });
    const status = 'success';
    return { status, id, data: deletedAccount };
}


export {
    createAccountService,
    getAccountsService,
    getAccountService,
    updateAccountService,
    deleteAccountService
};