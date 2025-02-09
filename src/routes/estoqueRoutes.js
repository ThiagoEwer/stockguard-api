const express = require('express');
const router = express.Router();
const EstoqueController = require('../controllers/estoqueController');

/**
 * @swagger
 * tags:
 *   name: Estoque
 *   description: Gerenciamento de estoque
 */

/**
 * @swagger
 * /api/estoq:
 *   get:
 *     summary: Retorna todos os estoques
 *     tags: [Estoque]
 *     responses:
 *       200:
 *         description: Lista de estoques
 *       500:
 *         description: Erro ao buscar estoques
 */
router.get('/', EstoqueController.getAllStock);

/**
 * @swagger
 * /api/estoq/{id}:
 *   get:
 *     summary: Retorna um estoque pelo ID
 *     tags: [Estoque]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do estoque
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Estoque encontrado
 *       404:
 *         description: Estoque não encontrado
 *       500:
 *         description: Erro ao buscar estoque
 */
router.get('/:id', EstoqueController.getStockById);

/**
 * @swagger
 * /api/estoq:
 *   post:
 *     summary: Cria um novo estoque
 *     tags: [Estoque]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               est_proid:
 *                 type: integer
 *               est_locid:
 *                 type: integer
 *               est_qtde:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Estoque criado com sucesso
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro ao criar estoque
 */
router.post('/', EstoqueController.createStock);

/**
 * @swagger
 * /api/estoq/{id}:
 *   put:
 *     summary: Atualiza um estoque pelo ID
 *     tags: [Estoque]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do estoque
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               est_qtde:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Estoque atualizado com sucesso
 *       404:
 *         description: Estoque não encontrado
 *       500:
 *         description: Erro ao atualizar estoque
 */
router.put('/:id', EstoqueController.updateStock);

/**
 * @swagger
 * /api/estoq/{id}:
 *   delete:
 *     summary: Soft delete um estoque pelo ID
 *     tags: [Estoque]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do estoque
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Estoque deletado com sucesso
 *       404:
 *         description: Estoque não encontrado
 *       500:
 *         description: Erro ao deletar estoque
 */
router.delete('/:id', EstoqueController.softDeleteStock);

/**
 * @swagger
 * /api/estoq/hard/{id}:
 *   delete:
 *     summary: Hard delete um estoque pelo ID
 *     tags: [Estoque]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do estoque
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Estoque deletado com sucesso
 *       404:
 *         description: Estoque não encontrado
 *       500:
 *         description: Erro ao deletar estoque
 */
router.delete('/hard/:id', EstoqueController.hardDeleteStock);
/**
 * @swagger
 * tags:
 *   name: Estoque
 *   description: Gerenciamento de estoque
 */

/**
 * @swagger
 * /api/estoq:
 *   get:
 *     summary: Retorna todos os estoques
 *     tags: [Estoque]
 *     responses:
 *       200:
 *         description: Lista de estoques
 *       500:
 *         description: Erro ao buscar estoques
 */
router.get('/', EstoqueController.getAllStock);

/**
 * @swagger
 * /api/estoq/{id}:
 *   get:
 *     summary: Retorna um estoque pelo ID
 *     tags: [Estoque]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do estoque
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Estoque encontrado
 *       404:
 *         description: Estoque não encontrado
 *       500:
 *         description: Erro ao buscar estoque
 */
router.get('/:id', EstoqueController.getStockById);

/**
 * @swagger
 * /api/estoq:
 *   post:
 *     summary: Cria um novo estoque
 *     tags: [Estoque]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               est_proid:
 *                 type: integer
 *               est_locid:
 *                 type: integer
 *               est_qtde:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Estoque criado com sucesso
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro ao criar estoque
 */
router.post('/', EstoqueController.createStock);

/**
 * @swagger
 * /api/estoq/{id}:
 *   put:
 *     summary: Atualiza um estoque pelo ID
 *     tags: [Estoque]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do estoque
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               est_qtde:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Estoque atualizado com sucesso
 *       404:
 *         description: Estoque não encontrado
 *       500:
 *         description: Erro ao atualizar estoque
 */
router.put('/:id', EstoqueController.updateStock);

/**
 * @swagger
 * /api/estoq/{id}:
 *   delete:
 *     summary: Soft delete um estoque pelo ID
 *     tags: [Estoque]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do estoque
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Estoque deletado com sucesso
 *       404:
 *         description: Estoque não encontrado
 *       500:
 *         description: Erro ao deletar estoque
 */
router.delete('/:id', EstoqueController.softDeleteStock);

/**
 * @swagger
 * /api/estoq/hard/{id}:
 *   delete:
 *     summary: Hard delete um estoque pelo ID
 *     tags: [Estoque]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do estoque
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Estoque deletado com sucesso
 *       404:
 *         description: Estoque não encontrado
 *       500:
 *         description: Erro ao deletar estoque
 */
router.delete('/hard/:id', EstoqueController.hardDeleteStock);

module.exports = router;