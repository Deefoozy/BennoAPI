import { pg } from "../server.js";
import validator from "validator";

export class UserController {
    static async GetUserList(request, response) {
        response.send({
            message: "De zuipers",
            data: await pg('users'),
        });
    }

    static async GetUser(request, response) {
        if (!validator.isUUID(request.params.uuid)) {
            response.statusCode = 400;
            response.send({
                message: "Bruh, use a uuid"
            })
        }

        response.send({
            message: "Gotem",
            data:  await pg('users').where('id', request.params.uuid),
        });
    }
}
