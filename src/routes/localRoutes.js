const express = require('express');
const router = express.Router();
const LocalController = require('../controllers/localController');

/**
 * @swagger
 * tags:
 *   name: Localizações
 *   description: Gerenciamento de localizações
 */

/**
 * @swagger
 * /api/locali:
 *   get:
 *     summary: Retorna todas as localizações
 *     tags: [Localizações]
 *     responses:
 *       200:
 *         description: Lista de localizações
 *       500:
 *         description: Erro ao buscar localizações
 */
router.get('/', LocalController.getAllLocations);

/**
 * @swagger
 * /api/locali/{id}:
 *   get:
 *     summary: Retorna uma localização pelo ID
 *     tags: [Localizações]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da localização
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Localização encontrada
 *       404:
 *         description: Localização não encontrada
 *       500:
 *         description: Erro ao buscar localização
 */
router.get('/:id', LocalController.getLocationById);

/**
 * @swagger
 * /api/locali:
 *   post:
 *     summary: Cria uma nova localização
 *     tags: [Localizações]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               loc_codloc:
 *                 type: string
 *               loc_desc:
 *                 type: string
 *               loc_cap:
 *                 type: integer
 *               loc_stat:
 *                 type: string
 *     responses:
 *       201:
 *         description: Localização criada com sucesso
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro ao criar localização
 */
router.post('/', LocalController.createLocation);

/**
 * @swagger
 * /api/locali/{id}:
 *   put:
 *     summary: Atualiza uma localização pelo ID
 *     tags: [Localizações]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da localização
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               loc_desc:
 *                 type: string
 *               loc_cap:
 *                 type: integer
 *               loc_stat:
 *                 type: string
 *     responses:
 *       200:
 *         description: Localização atualizada com sucesso
 *       404:
 *         description: Localização não encontrada
 *       500:
 *         description: Erro ao atualizar localização
 */
router.put('/:id', LocalController.updateLocation);

/**
 * @swagger
 * /api/locali/{id}:
 *   delete:
 *     summary: Soft delete uma localização pelo ID
 *     tags: [Localizações]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da localização
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Localização deletada com sucesso
 *       404:
 *         description: Localização não encontrada
 *       500:
 *         description: Erro ao deletar localização
 */
router.delete('/:id', LocalController.softDeleteLocation);

/**
 * @swagger
 * /api/locali/hard/{id}:
 *   delete:
 *     summary: Hard delete uma localização pelo ID
 *     tags: [Localizações]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da localização
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Localização deletada com sucesso
 *       404:
 *         description: Localização não encontrada
 *       500:
 *         description: Erro ao deletar localização
 */
router.delete('/hard/:id', LocalController.hardDeleteLocation);

module.exports = router;