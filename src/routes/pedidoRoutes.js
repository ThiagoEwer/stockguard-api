const express = require('express');
const router = express.Router();
const PedidoController = require('../controllers/pedidoController');

/**
 * @swagger
 * tags:
 *   name: Pedidos
 *   description: Gerenciamento de pedidos
 */

/**
 * @swagger
 * /api/pedido:
 *   get:
 *     summary: Retorna todos os pedidos
 *     tags: [Pedidos]
 *     responses:
 *       200:
 *         description: Lista de pedidos
 *       500:
 *         description: Erro ao buscar pedidos
 */
router.get('/', PedidoController.getAllOrders);

/**
 * @swagger
 * /api/pedido/{id}:
 *   get:
 *     summary: Retorna um pedido pelo ID
 *     tags: [Pedidos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do pedido
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pedido encontrado
 *       404:
 *         description: Pedido não encontrado
 *       500:
 *         description: Erro ao buscar pedido
 */
router.get('/:id', PedidoController.getOrderById);

/**
 * @swagger
 * /api/pedido:
 *   post:
 *     summary: Cria um novo pedido
 *     tags: [Pedidos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ped_codped:
 *                 type: string
 *               ped_cliid:
 *                 type: integer
 *               ped_forid:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro ao criar pedido
 */
router.post('/', PedidoController.createOrder);

/**
 * @swagger
 * /api/pedido/{id}:
 *   put:
 *     summary: Atualiza um pedido pelo ID
 *     tags: [Pedidos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do pedido
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ped_codped:
 *                 type: string
 *     responses:
 *       200:
 *         description: Pedido atualizado com sucesso
 *       404:
 *         description: Pedido não encontrado
 *       500:
 *         description: Erro ao atualizar pedido
 */
router.put('/:id', PedidoController.updateOrder);

/**
 * @swagger
 * /api/pedido/{id}:
 *   delete:
 *     summary: Soft delete um pedido pelo ID
 *     tags: [Pedidos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do pedido
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Pedido deletado com sucesso
 *       404:
 *         description: Pedido não encontrado
 *       500:
 *         description: Erro ao deletar pedido
 */
router.delete('/:id', PedidoController.softDeleteOrder);

/**
 * @swagger
 * /api/pedido/hard/{id}:
 *   delete:
 *     summary: Hard delete um pedido pelo ID
 *     tags: [Pedidos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do pedido
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Pedido deletado com sucesso
 *       404:
 *         description: Pedido não encontrado
 *       500:
 *         description: Erro ao deletar pedido
 */
router.delete('/hard/:id', PedidoController.hardDeleteOrder);
module.exports = router;