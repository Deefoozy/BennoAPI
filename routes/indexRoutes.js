import { BankRoutes } from "./bankRoutes.js"
import { UserRoutes } from "./userRoutes.js"

export class IndexRoutes {
    static options = {
        prefix: "/v1"
    }
    
    static RegisterRoutes(app, _, done) {
        app.register(BankRoutes.RegisterRoutes, BankRoutes.options);
        app.register(UserRoutes.RegisterRoutes, UserRoutes.options);

        done();
    }
}