import { UserController } from "../controllers/userController.js";

export class UserRoutes {
    static options = {
        prefix: "/user"
    }
    
    static RegisterRoutes(app, _, done) {
        app.get('/', UserController.GetUserList)
        app.get('/:uuid', UserController.GetUser)
        app.get('/:uuid/meubels', UserController.GetUserMeubels)

        done();
    }
}
