import express, { Response, Request } from "express";
const routes = express();

routes.get('/', (req: Request, res: Response) => {
    return res.json({
        message: "Hello World"
    })
})

export default routes