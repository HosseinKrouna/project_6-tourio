import { getAllAttractions } from "../../../helpers/db";

export default async function handler(request, response) {
  switch (request.method) {
    case "GET": {
      const attraction = await getAllAttractions();
      response.status(200).json(attraction);
      break;
    }

    default: {
      response
        .status(405)
        .setHeader("Allow", "GET")
        .json({
          message: `Request method ${request.method} is not allowed on ${request.url}`,
        });
    }
  }
}
