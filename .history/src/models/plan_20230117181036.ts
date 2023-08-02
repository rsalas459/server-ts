import { Schema, model, Types, Model } from 'mongoose';
import { Plan } from '../interfaces/manager.interface';

const PlanSchema = new Schema<Plan>(
    {
        name: {
            type: String,
            required: true,
        },
        active: {
            type: Boolean,
            required: true,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }

);

const PlanModel=model('plans', PlanSchema);

export default PlanModel;