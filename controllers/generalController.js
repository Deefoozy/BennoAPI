export class GeneralController {
    static Greeting(request, response) {
        response.send({
            message: "Hello Bier",
        });
    }
}