import { S3 } from "@aws-sdk/client-s3";
import sql from "better-sqlite3";

const db = sql("meals.db");

const s3 = new S3({
	region: "us-east-1"
})

export { db, s3 }; 