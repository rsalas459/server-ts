import { Schema, model, Types, Model } from 'mongoose';
import { Manager } from '../interfaces/manager.interface';

const ManagerSchema = new Schema<Manager>(
    {
        name: {
            type: String,
            required: true,
        },
        document_number: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }

);

const ManagerModel=model('managers', ManagerSchema);

export default ManagerModel;