import { Schema, model, Types, Model } from 'mongoose';
import { Account } from '../interfaces/account.interface';
import  PlanModel from './manager';
const AccountSchema = new Schema<Account>(
    {
        name: {
            type: String,
            required: true,
            unique:true
        },
        active: {
            type: Boolean,
            required: true,
            default: true,
        },
        plan: {
            type: Schema.Types.ObjectId,
            ref: PlanModel
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }

);

const AccountModel: Model<Account> = model('accounts', AccountSchema);

export default AccountModel;