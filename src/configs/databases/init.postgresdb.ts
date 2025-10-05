import pgPromise from "pg-promise";
import monitor from "pg-monitor";

const pgp = pgPromise({});

monitor.attach(pgp);

export const newPostgresConnection = (uri: string) => {
  const db = pgp(uri);

  //Test Connection:
  db.connect()
    .then((obj) => {
      console.log(`Postgres:: connected to ${obj.client.database}`);
      obj.done();
    })
    .catch((err) => {
      console.error(`Postgres:: connection err  ${err.message}`);
    });

  pgp.events.on("query", (e: any) => {
    console.log(
      `Postgres Debug:: ${e.query} ${e.params ? JSON.stringify(e.params) : ""}`
    );
  });

  return db;
};
