// src/controllers/usuariController.js
const supabase = require('../config/supabase');

class UsuariController {

  // GET: Buscar todos os usuários (apenas os não deletados)
  static async getAllUsers(_req, res) {
    const { data, error } = await supabase.from('usuari').select('*').eq('deletd', 'N');
    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json(data);
  }

  // GET: Buscar um usuário pelo ID (apenas se não deletado)
  static async getUserById(req, res) {
    const { id } = req.params;
    const { data, error } = await supabase.from('usuari').select('*').eq('usu_id', id).eq('deletd', 'N').single();

    if (error) {
      if (error.message.includes("multiple")) {
        return res.status(500).json({ message: 'Erro inesperado: múltiplas entradas encontradas.' });
      }
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    res.status(200).json(data);
  }

  // POST: Criar um novo usuário
  static async createUser(req, res) {
    const { usu_nome, usu_email, usu_senha, usu_perfil } = req.body;
    if (!usu_nome || !usu_email || !usu_senha || !usu_perfil) {
      return res.status(400).json({ message: 'Nome, Email, Senha e Perfil são obrigatórios' });
    }

    const { data, error } = await supabase.from('usuari').insert([{
      usu_nome,
      usu_email,
      usu_senha,
      usu_perfil,
      deletd: 'N' // Define como não deletado
    }]);
    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json({ message: 'Usuário criado com sucesso'});
  }

  // PUT: Atualizar um usuário pelo ID
  static async updateUser(req, res) {
    const { id } = req.params;
    const { usu_nome, usu_email, usu_senha, usu_perfil } = req.body;

    const updateData = {};
    if (usu_nome) updateData.usu_nome = usu_nome;
    if (usu_email) updateData.usu_email = usu_email;
    if (usu_senha) updateData.usu_senha = usu_senha;
    if (usu_perfil) updateData.usu_perfil = usu_perfil;

    const { data, error } = await supabase.from('usuari').update(updateData).eq('usu_id', id).eq('deletd', 'N');
    if (error) return res.status(500).json({ error: error.message });
    if (data.length === 0) return res.status(404).json({ message: 'Usuário não encontrado ou já deletado' });

    res.status(200).json({ message: 'Usuário atualizado com sucesso', data });
  }

  // DELETE: Remover um usuário pelo ID (atualiza o campo deletd para 'S')
  static async deleteUser(req, res) {
    const { id } = req.params;
    const { data, error } = await supabase.from('usuari').update({ deletd: 'S' }).eq('usu_id', id).eq('deletd', 'N');
    
    if (error) return res.status(500).json({ error: error.message });
    if (data.length === 0) return res.status(404).json({ message: 'Usuário não encontrado ou já deletado' });

    res.status(200).json({ message: 'Usuário removido com sucesso (soft delete)' });
  }

  // (Opcional) DELETE: Exclusão física de um usuário, se necessário
  static async hardDeleteUser(req, res) {
    const { id } = req.params;
    const { data, error } = await supabase.from('usuari').delete().eq('usu_id', id).eq('deletd', 'S');
    
    if (error) return res.status(500).json({ error: error.message });
    if (data.length === 0) return res.status(404).json({ message: 'Usuário não encontrado ou não pode ser excluído' });

    res.status(200).json({ message: 'Usuário excluído permanentemente' });
  }
}

module.exports = UsuariController;
