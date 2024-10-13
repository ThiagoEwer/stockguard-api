// src/controllers/usuariController.js
const supabase = require('../config/supabase');

class UsuariController {
  
  // GET: Buscar todos os usuários
  static async getAllUsers(_req, res) {
    const { data, error } = await supabase.from('usuari').select('*');
    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json(data);
  }

  // GET: Buscar um usuário pelo ID
  static async getUserById(req, res) {
    const { id } = req.params;
    const { data, error } = await supabase.from('usuari').select('*').eq('usu_id', id).single();
    if (error) return res.status(500).json({ error: error.message });
    if (!data) return res.status(404).json({ message: 'Usuário não encontrado' });
    res.status(200).json(data);
  }

  // POST: Criar um novo usuário
  static async createUser(req, res) {
    const { USU_NOME, USU_EMAIL } = req.body;
    if (!USU_NOME || !USU_EMAIL) {
      return res.status(400).json({ message: 'Nome e Email são obrigatórios' });
    }

    const { data, error } = await supabase.from('usuari').insert([{ USU_NOME, USU_EMAIL }]);
    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json({ message: 'Usuário criado com sucesso', data });
  }

  // PUT: Atualizar um usuário pelo ID
  static async updateUser(req, res) {
    const { id } = req.params;
    const { USU_NOME, USU_EMAIL } = req.body;

    const { data, error } = await supabase.from('usuari').update({ USU_NOME, USU_EMAIL }).eq('usu_id', id);
    if (error) return res.status(500).json({ error: error.message });
    if (data.length === 0) return res.status(404).json({ message: 'Usuário não encontrado' });

    res.status(200).json({ message: 'Usuário atualizado com sucesso', data });
  }

  // DELETE: Remover um usuário pelo ID (soft delete)
  static async deleteUser(req, res) {
    const { id } = req.params;
    const { data, error } = await supabase.from('usuari').update({ DELETD: '*' }).eq('usu_id', id);
    if (error) return res.status(500).json({ error: error.message });
    if (data.length === 0) return res.status(404).json({ message: 'Usuário não encontrado' });

    res.status(200).json({ message: 'Usuário removido com sucesso (soft delete)' });
  }

  // DELETE: Exclusão física de um usuário
  static async hardDeleteUser(req, res) {
    const { id } = req.params;
    const { data, error } = await supabase.from('usuari').delete().eq('usu_id', id);
    if (error) return res.status(500).json({ error: error.message });
    if (data.length === 0) return res.status(404).json({ message: 'Usuário não encontrado' });

    res.status(200).json({ message: 'Usuário excluído permanentemente' });
  }
}

module.exports = UsuariController;
