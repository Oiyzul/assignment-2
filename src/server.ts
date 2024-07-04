import mongoose from "mongoose";
import env from "./app/config";
import app from "./app";

async function main() {
  try {
    mongoose.connect(env.database_url as string);

    app.listen(env.port, () => {
      console.log("http://localhost:" + env.port + "/api");
    });
  } catch (err) {
    console.log(err);
  }
}

main();
