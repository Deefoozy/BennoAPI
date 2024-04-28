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

    static async GetUserMeubels(request, response) {
        if (!validator.isUUID(request.params.uuid)) {
            response.statusCode = 400;
            response.send({
                message: "Bruh, use a uuid"
            })
        }

        const result = await pg('user_bier_meubels')
            .select(
                'meubel.*'
            )
            .leftJoin(
                pg('bier_meubels')
                    .as('meubel'),
                'meubel.id',
                'user_bier_meubels.bier_meubel_id'
            )
            .where('user_bier_meubels.user_id', request.params.uuid)


        response.send({
            message: "Gotem",
            data:  result,
        });
    }
}
