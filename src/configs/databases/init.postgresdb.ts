import pgPromise from "pg-promise";
import monitor from "pg-monitor";

const pgp = pgPromise();
const connections: Record<string, string> = {
  user:
    process.env.POSTGRESQL_USER ||
    "postgres://postgres:sa@localhost:5432/users",
};

export const createPostgresConnection = (databaseName: string) => {

};
