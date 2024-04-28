import { BankRoutes } from "./bankRoutes.js"

export class IndexRoutes {
    static options = {
        prefix: "/v1"
    }
    
    static RegisterRoutes(app, _, done) {
        app.register(BankRoutes.RegisterRoutes, BankRoutes.options);

        done();
    }
}