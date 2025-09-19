import mongoose from "mongoose";

const newConnection = (uri: string) => {
  const db = mongoose.createConnection(uri, {
    autoIndex: true,
  });

  db.on("error", err => {
    db.close().catch(() => {
      console.log(`MongoDB:: failed to close connnection ${db.name} ${JSON.stringify(err)}`)
    })
  })

  db.on("disconntected", (err) => {
    db.close().catch(() => {
      console.log(
        `MongoDB:: disconntected ${db.name} ${JSON.stringify(
          err
        )}`
      );
    });
  });

  db.on("connected", () => {
    mongoose.set("debug", (col,method, query, doc) => {
      console.log(`MongoDB Debug:: ${db.name}::${col}.${method}(${JSON.stringify(query)},${doc})}`)
    })
    console.log(`MongoDB:: connected ${db.name}`);
  });

  return db;
}