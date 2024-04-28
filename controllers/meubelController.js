import { pg } from "../server.js";

export class MeubelController {
    static async GetMeubelList(request, response) {
        response.send({
            message: "De meubels",
            data: await pg('bier_meubels'),
        });
    }
}
