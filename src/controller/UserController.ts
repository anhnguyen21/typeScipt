import { Request, Response } from "express";
import { User, UserModel } from '../database/models/user';
import { CreateUser } from '../service/user';

export class UserController {

    constructor(
        private createUser: CreateUser,
      ) {}
    
    async get(request: Request, response: Response) {
        response.send((await this.createUser.getName()));  
    }
    async getUser(request: Request, response: Response) {
        response.send(await this.createUser.getFindUser(request.params.id));
    }
    async addUser(request: Request, response: Response) {
        const user = new UserModel(request.body.name, request.body.password);
        await this.createUser.addUser(user);
        response.send(request.body.name + request.body.password);
    }
    async editUser(request: Request, response: Response) {
        response.send('hello' + request.body.name + request.body.email + request.params.id);
    }
    async deleteUser(request: Request, response: Response) {
        await this.createUser.deleteUser(request.params.id);
        response.status(200).send("success");
    }
}