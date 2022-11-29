import {Router} from 'express'
import { getClientes,getCliente,postClientes,putClientes,patchClientes,deleteClientes } from '../controllers/clientes.controller.js'

const router = Router()

//aqui se puede crear todos los metodos http que usa strapi
router.get('/clientes',getClientes)
router.get('/clientes/:id',getCliente)
router.post('/clientes',postClientes)
router.put('/clientes/:id',putClientes)
router.patch('/clientes/:id',patchClientes)
router.delete('/clientes/:id',deleteClientes)
export default router