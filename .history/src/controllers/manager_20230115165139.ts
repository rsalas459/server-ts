import { Request, Response } from "express";
import {
    createPlanService,
    getPlansService,
    getPlanService,
    updatePlanService,
    deletePlanService
} from "../services/plan";
import { handleHttp } from "../utils/error.handle"

const getPlans = async (req: Request, res: Response) => {
    try {
        const responsePlans = await getPlansService();
        res.send(responsePlans);

    } catch (e) {
        handleHttp(res, 'Error getting plans');
    }
}

const getPlan = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const responsePlan = await getPlanService(id);
        const data = responsePlan ? responsePlan : { "message": "Plan not found" };
        res.send(data);
    } catch (e) {
        handleHttp(res, 'Error getting plan');
    }
}

const updatePlan = async ({ params, body }: Request, res: Response) => {

    try {
        const { id } = params;
        const responsePlan = await updatePlanService(id, body);

        const data = responsePlan ? responsePlan : { "message": "Plan not found" };
        res.send(data);
    } catch (e) {
        handleHttp(res, 'Error updating plans');
    }
}

const deletePlan = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const responsePlan = await deletePlanService(id);
        res.send(responsePlan);
    } catch (e) {
        handleHttp(res, 'Error deleting plans');
    }
}

const postPlan = async ({ body }: Request, res: Response) => {
    try {
        const responsePlan = await createPlanService(body);
        res.send(responsePlan);
    } catch (e) {
        handleHttp(res, 'Error creating plans', e);
    }
}

export { getPlans, getPlan, updatePlan, deletePlan, postPlan }
