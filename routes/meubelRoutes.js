import { MeubelController } from "../controllers/meubelController.js"

export class MeubelRoutes {
    static options = {
        prefix: "/meubels"
    }
    
    static RegisterRoutes(app, _, done) {
        app.get('/', MeubelController.GetMeubelList)

        done();
    }
}
