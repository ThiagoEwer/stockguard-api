const express = require('express');
const router = express.Router();
const FornecedorController = require('../controllers/fornecedorController');

/**
 * @swagger
 * tags:
 *   name: Fornecedores
 *   description: Gerenciamento de fornecedores
 */

/**
 * @swagger
 * /api/fornec:
 *   get:
 *     summary: Retorna todos os fornecedores
 *     tags: [Fornecedores]
 *     responses:
 *       200:
 *         description: Lista de fornecedores
 *       500:
 *         description: Erro ao buscar fornecedores
 */
router.get('/', FornecedorController.getAllSuppliers);

/**
 * @swagger
 * /api/fornec/{id}:
 *   get:
 *     summary: Retorna um fornecedor pelo ID
 *     tags: [Fornecedores]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do fornecedor
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Fornecedor encontrado
 *       404:
 *         description: Fornecedor não encontrado
 *       500:
 *         description: Erro ao buscar fornecedor
 */
router.get('/:id', FornecedorController.getSupplierById);

/**
 * @swagger
 * /api/fornec:
 *   post:
 *     summary: Cria um novo fornecedor
 *     tags: [Fornecedores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               for_nome:
 *                 type: string
 *               for_email:
 *                 type: string
 *               for_tel:
 *                 type: string
 *               for_end:
 *                 type: string
 *     responses:
 *       201:
 *         description: Fornecedor criado com sucesso
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro ao criar fornecedor
 */
router.post('/', FornecedorController.createSupplier);

/**
 * @swagger
 * /api/fornec/{id}:
 *   put:
 *     summary: Atualiza um fornecedor pelo ID
 *     tags: [Fornecedores]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do fornecedor
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               for_nome:
 *                 type: string
 *     responses:
 *       200:
 *         description: Fornecedor atualizado com sucesso
 *       404:
 *         description: Fornecedor não encontrado
 *       500:
 *         description: Erro ao atualizar fornecedor
 */
router.put('/:id', FornecedorController.updateSupplier);

/**
 * @swagger
 * /api/fornec/{id}:
 *   delete:
 *     summary: Soft delete um fornecedor pelo ID
 *     tags: [Fornecedores]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do fornecedor
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Fornecedor deletado com sucesso
 *       404:
 *         description: Fornecedor não encontrado
 *       500:
 *         description: Erro ao deletar fornecedor
 */
router.delete('/:id', FornecedorController.softDeleteSupplier);

/**
 * @swagger
 * /api/fornec/hard/{id}:
 *   delete:
 *     summary: Hard delete um fornecedor pelo ID
 *     tags: [Fornecedores]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do fornecedor
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Fornecedor deletado com sucesso
 *       404:
 *         description: Fornecedor não encontrado
 *       500:
 *         description: Erro ao deletar fornecedor
 */
router.delete('/hard/:id', FornecedorController.hardDeleteSupplier);

module.exports = router;