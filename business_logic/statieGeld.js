import { pg } from "../server.js";

export class StatieGeldLogic {
    static async GetStatieGeld() {
        // Yes, can be faster. No, I don't care.
        return {
            statieFles: await pg('statie_geld').where('name', 'flessie').first(),
            statieKrat: await pg('statie_geld').where('name', 'krat').first(),
        }
    }
}
