import { GeneralController } from "../controllers/generalController.js"

export class BankRoutes {
    static options = {
        prefix: "/bank"
    }
    
    static RegisterRoutes(app, _, done) {
        app.get('/', GeneralController.Greeting)

        done();
    }
}
