import { MeubelRoutes } from "./meubelRoutes.js"
import { UserRoutes } from "./userRoutes.js"

export class IndexRoutes {
    static options = {
        prefix: "/v1"
    }
    
    static RegisterRoutes(app, _, done) {
        app.register(MeubelRoutes.RegisterRoutes, MeubelRoutes.options);
        app.register(UserRoutes.RegisterRoutes, UserRoutes.options);

        done();
    }
}