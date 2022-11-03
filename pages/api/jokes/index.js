import db from "../../../db.json";

function handler(request, response) {
  console.log(request.method);
  if (request.method === "GET") {
    response.status(200).json(db);
  } else {
    response
      .status(405)
      .setHeader("Allow", ["GET"])
      .send("Hier gibts den endpoint nicht mit der methode.");
  }
}

export default handler;
