import { User } from '../database/models/user';

export class CreateUser {
    async getName() {
        return 'Nguyen The Anh'; 
    }
    async getFindUser(id) {
        return await User.query().findById(id); 
    }
    async deleteUser(id) {
        await User.query().deleteById(id);
    }
    async addUser(data) {
        await User.query().insert(data);
    }
}