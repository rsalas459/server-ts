
import { connect } from "mongoose";

const MONGO_DB = 'server-ts';

const url = `mongodb+srv://rsalas459:M4Rl3t_459@cluster0.jwiu8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

async function db(): Promise<void> {
    const DB_URI = <string>url;
    await connect(DB_URI);
}

export { db, MONGO_DB };