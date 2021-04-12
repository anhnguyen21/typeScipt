import { Router } from "express";
import { useController } from '../controller';

const router = Router()

router.get('/', function (req, res) {
   return useController.get(req, res);
})

router.get('/user/:id', function (req, res) {
    return useController.getUser(req, res);
})

router.post('/user', function (req, res) {
    return useController.addUser(req, res);
})

router.put('/user/:id', function (req, res) {
    return useController.editUser(req, res);
})

router.delete('/user/:id', function (req, res) {
    return useController.deleteUser(req, res);
})

export { router }