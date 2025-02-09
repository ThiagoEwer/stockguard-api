const express = require('express');
const router = express.Router();
const MovimentacaoController = require('../controllers/movimentacaoController');

/**
 * @swagger
 * tags:
 *   name: Movimentação
 *   description: Gerenciamento de movimentações
 */

/**
 * @swagger
 * /api/movime:
 *   get:
 *     summary: Retorna todos os movimentos
 *     tags: [Movimentação]
 *     responses:
 *       200:
 *         description: Lista de movimentações
 *       500:
 *         description: Erro ao buscar movimentações
 */
router.get('/', MovimentacaoController.getAllMovements);

/**
 * @swagger
 * /api/movime/{id}:
 *   get:
 *     summary: Retorna um movimento pelo ID
 *     tags: [Movimentação]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da movimentação
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Movimentação encontrada
 *       404:
 *         description: Movimentação não encontrada
 *       500:
 *         description: Erro ao buscar movimentação
 */
router.get('/:id', MovimentacaoController.getMovementById);

/**
 * @swagger
 * /api/movime:
 *   post:
 *     summary: Cria um novo movimento
 *     tags: [Movimentação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mov_proid:
 *                 type: integer
 *               mov_qtde:
 *                 type: integer
 *               mov_tipo:
 *                 type: string
 *               mov_locor:
 *                 type: integer
 *               mov_locde:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Movimentação criada com sucesso
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro ao criar movimentação
 */
router.post('/', MovimentacaoController.createMovement);

/**
 * @swagger
 * /api/movime/{id}:
 *   put:
 *     summary: Atualiza uma movimentação pelo ID
 *     tags: [Movimentação]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da movimentação
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mov_proid:
 *                 type: integer
 *               mov_qtde:
 *                 type: integer
 *               mov_tipo:
 *                 type: string
 *               mov_locor:
 *                 type: integer
 *               mov_locde:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Movimentação atualizada com sucesso
 *       404:
 *         description: Movimentação não encontrada
 *       500:
 *         description: Erro ao atualizar movimentação
 */
router.put('/:id', MovimentacaoController.updateMovement);

/**
 * @swagger
 * /api/movime/{id}:
 *   delete:
 *     summary: Soft delete de uma movimentação pelo ID
 *     tags: [Movimentação]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da movimentação
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Movimentação deletada com sucesso
 *       404:
 *         description: Movimentação não encontrada
 *       500:
 *         description: Erro ao deletar movimentação
 */
router.delete('/:id', MovimentacaoController.softDeleteMovement);

/**
 * @swagger
 * /api/movime/hard/{id}:
 *   delete:
 *     summary: Hard delete de uma movimentação pelo ID
 *     tags: [Movimentação]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da movimentação
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Movimentação removida permanentemente com sucesso
 *       404:
 *         description: Movimentação não encontrada
 *       500:
 *         description: Erro ao remover movimentação
 */
router.delete('/hard/:id', MovimentacaoController.hardDeleteMovement);

module.exports = router;