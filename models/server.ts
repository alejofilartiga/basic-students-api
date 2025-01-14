import express ,{ Express } from "express";
import { conectarDB } from "../database/config";
import studentsRoutes from '../routes/Students'

export class Server {
    app: Express;

    constructor () {
        this.app=express();
        this.conexionDB()
        this.middlewares()
        this.routes()
    }

    async conexionDB():Promise<void>{
        await conectarDB()
    }

    middlewares():void{
        this.app.use(express.json())
    }

    routes():void{
        this.app.use("/students",studentsRoutes)
    }

    listen():void{
        this.app.listen(8080,() => {
          console.log("Servidor iniciado en el puerto 8080")
        })
    }
}