import db from "../../../db.json";
import { getAllJokes } from "../../../helpers/db";

async function handler(request, response) {
  console.log(request.method);
  if (request.method === "GET") {
    const jokes = await getAllJokes();
    response.status(200).json(jokes);
  } else {
    response
      .status(405)
      .setHeader("Allow", ["GET"])
      .send("Hier gibts den endpoint nicht mit der methode.");
  }
}

export default handler;
