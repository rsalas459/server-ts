import "dotenv/config";
import { connect } from "mongoose";
const MONGO_USERNAME = 'rsalas';
const MONGO_PASSWORD = '27538459';
const MONGO_HOSTNAME = '192.168.100.70';
const MONGO_PORT = '27017';
const MONGO_DB = 'carozzi';

const url = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;
console.log("url: ", url);
async function dbConnect(): Promise<void> {
    const DB_URI = <string>url;
    await connect(DB_URI);
}

export default dbConnect;