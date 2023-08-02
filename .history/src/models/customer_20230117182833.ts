import { Schema, model, Types, Model } from 'mongoose';
import { Customer } from '../interfaces/customer.interface';
import ManagerModel from './manager';
const CustomerSchema = new Schema<Customer>(
    {
        business_name: {
            type: String,
            required: true,
            unique: true
        },
        document_number: {
            type: String,
            required: true,
            unique: true,
        },
        comercial_activity: {
            type: String,
            required: true,
        },
        billing_address: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true,
        },
        e_rut: {
            type: String,
            required: true,
        },
        manager: {
            type: Schema.Types.ObjectId,
            ref: ManagerModel
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }

);

const CustomerModel: Model<Customer> = model('customers', CustomerSchema);

export default CustomerModel;