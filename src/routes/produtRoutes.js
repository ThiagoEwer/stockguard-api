// src/routes/produtRoutes.js
const express = require('express');
const router = express.Router();
const produtController = require('../controllers/produtController');

/**
 * @swagger
 * tags:
 *   name: Produtos
 *   description: Gerenciamento de produtos
 */

/**
 * @swagger
 * /api/produt:
 *   get:
 *     summary: Retorna todos os produtos
 *     tags: [Produtos]
 *     responses:
 *       200:
 *         description: Lista de produtos
 *       500:
 *         description: Erro ao buscar produtos
 */
router.get('/', produtController.getAllProducts);

/**
 * @swagger
 * /api/produt/{id}:
 *   get:
 *     summary: Retorna um produto pelo ID
 *     tags: [Produtos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do produto
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Produto encontrado
 *       404:
 *         description: Produto não encontrado
 *       500:
 *         description: Erro ao buscar produto
 */
router.get('/:id', produtController.getProductById);

/**
 * @swagger
 * /api/produt:
 *   post:
 *     summary: Cria um novo produto
 *     tags: [Produtos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               pro_codpro:
 *                 type: string
 *               pro_nome:
 *                 type: string
 *               pro_desc:
 *                 type: string
 *               pro_cat:
 *                 type: string
 *               pro_peso:
 *                 type: number
 *               pro_alt:
 *                 type: number
 *               pro_larg:
 *                 type: number
 *               pro_comp:
 *                 type: number
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro ao criar produto
 */
router.post('/', produtController.createProduct);

/**
 * @swagger
 * /api/produt/{id}:
 *   put:
 *     summary: Atualiza um produto pelo ID
 *     tags: [Produtos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do produto
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               pro_nome:
 *                 type: string
 *               pro_desc:
 *                 type: string
 *     responses:
 *       200:
 *         description: Produto atualizado com sucesso
 *       404:
 *         description: Produto não encontrado
 *       500:
 *         description: Erro ao atualizar produto
 */
router.put('/:id', produtController.updateProduct);

/**
 * @swagger
 * /api/produt/{id}:
 *   delete:
 *     summary: Soft delete um produto pelo ID
 *     tags: [Produtos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do produto
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Produto deletado com sucesso
 *       404:
 *         description: Produto não encontrado
 *       500:
 *         description: Erro ao deletar produto
 */
router.delete('/:id', produtController.deleteProduct);

/**
 * @swagger
 * /api/produt/hard/{id}:
 *   delete:
 *     summary: Hard delete um produto pelo ID
 *     tags: [Produtos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do produto
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Produto deletado com sucesso
 *       404:
 *         description: Produto não encontrado
 *       500:
 *         description: Erro ao deletar produto
 */
router.delete('/hard/:id', produtController.hardDeleteProduct);

module.exports = router;
