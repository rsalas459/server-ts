import { Plan } from "../interfaces/manager.interface";

import PlanModel from "../models/plan";

const createPlanService = async (plan: Plan) => {
    const newPlan = await PlanModel.create(plan);
    return newPlan;
}


const getPlansService = async () => {

    const plans = await PlanModel.find({});
    return plans;
}
const getPlanService = async (id: string) => {

    const plan = await PlanModel.findOne({ _id: id });
    return plan;
}

const updatePlanService = async (id: string, plan: Plan) => {
    const updatedPlan = await PlanModel.findOneAndUpdate({ _id: id }, plan, { new: true });
    if (!updatedPlan) {
        return "Plan no Exists"
    }
    const status = 'success';

    return { status, data: updatedPlan };
}


const deletePlanService = async (id: string) => {
    const deletedPlan = await PlanModel.remove({ _id: id });
    const status = 'success';
    return { status, id, data: deletedPlan };
}


export {
    createPlanService,
    getPlansService,
    getPlanService,
    updatePlanService,
    deletePlanService
};