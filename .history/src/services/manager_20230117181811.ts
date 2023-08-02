import { Manager } from "../interfaces/manager.interface";

import ManagerModel from "../models/manager";

const createManagerService = async (manager: Manager) => {
    const newManager = await ManagerModel.create(manager);
    return newManager;
}


const getManagersService = async () => {

    const managers = await ManagerModel.find({});
    return managers;
}
const getManagerService = async (id: string) => {

    const manager = await ManagerModel.findOne({ _id: id });
    return manager;
}

const updateManagerService = async (id: string, manager: Manager) => {
    const updatedManager = await ManagerModel.findOneAndUpdate({ _id: id }, manager, { new: true });
    if (!updatedManager) {
        return "Manager no Exists"
    }
    const status = 'success';

    return { status, data: updatedManager };
}


const deleteManagerService = async (id: string) => {
    const deletedManager = await ManagerModel.remove({ _id: id });
    const status = 'success';
    return { status, id, data: deletedManager };
}


export {
    createManagerService,
    getManagersService,
    getManagerService,
    updateManagerService,
    deleteManagerService
};