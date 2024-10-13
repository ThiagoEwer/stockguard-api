module.exports = (supabase) => {
    const express = require('express');
    const router = express.Router();

    // Rota para obter todos os usuários
    router.get('/usuari', async (req, res) => {
        const { data, error } = await supabase
            .from('usuari')
            .select('*');

        if (error) return res.status(500).json({ error: error.message });
        res.json(data);
    });

    // Rota para adicionar um novo usuário
    router.post('/usuari', async (req, res) => {
        const { USU_NOME, USU_EMAIL } = req.body;

        const { data, error } = await supabase
            .from('usuari')
            .insert([{ USU_NOME, USU_EMAIL }]);

        if (error) return res.status(500).json({ error: error.message });
        res.status(201).json(data);
    });

    // Rota para atualizar um usuário
    router.patch('/usuari/:id', async (req, res) => {
        const { id } = req.params;

        const { data, error } = await supabase
            .from('usuari')
            .update(req.body)
            .match({ USU_ID: id });

        if (error) return res.status(500).json({ error: error.message });
        res.json(data);
    });

    // Rota para excluir um usuário
    router.delete('/usuari/:id', async (req, res) => {
        const { id } = req.params;

        const { error } = await supabase
            .from('usuari')
            .delete()
            .match({ USU_ID: id });

        if (error) return res.status(500).json({ error: error.message });
        res.status(204).send();
    });

    return router;
};
