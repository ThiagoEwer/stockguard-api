// src/controllers/usuariController.js
const supabase = require('../config/supabase');

class UsuariController {
  //-----------------------------------------------------------------------------------------------//
  // GET: Buscar todos os usuários (somente os que não estão deletados)
  static async getAllUsers(_req, res) {
    const { data, error } = await supabase.from('usuari').select('*').eq('deletd', 'N');
    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json(data);
  }
  //-----------------------------------------------------------------------------------------------//
  // GET: Buscar um usuário pelo ID (somente se não estiver deletado)
  static async getUserById(req, res) {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('usuari')
      .select('*')
      .eq('usu_id', id)
      .eq('deletd', 'N') // Verificar se não está deletado
      .single();

    if (!data) return res.status(404).json({ message: 'Usuário não encontrado ou deletado' });


    res.status(200).json(data);
  }
  //-----------------------------------------------------------------------------------------------//
  // POST: Criar um novo usuário
  static async createUser(req, res) {
    const { usu_nome, usu_email } = req.body;
    if (!usu_nome || !usu_email) {
      return res.status(400).json({ message: 'Nome e Email são obrigatórios' });
    }

    const { data, error } = await supabase.from('usuari').insert([{ usu_nome, usu_email }]);
    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json({ message: 'Usuário criado com sucesso' });
  }
  //-----------------------------------------------------------------------------------------------//
  // PUT: Atualizar um usuário pelo ID
  static async updateUser(req, res) {
    const { id } = req.params; // Capturar o ID passado na URL
    const { usu_nome, usu_email, usu_senha, usu_perfil } = req.body;

    // Verificar se o usuário existe e não está excluído
    const { data: userData, error: userError } = await supabase
      .from('usuari')
      .select('*')
      .eq('usu_id', id)
      .eq('deletd', 'N') // Verifica se o usuário não está excluído
      .single(); // Pega um único registro

    if (userError || !userData) {
      return res.status(404).json({ message: 'Usuário não encontrado ou está excluído' });
    }

    // Criar um objeto para atualizar apenas os campos recebidos
    const updateData = {};
    if (usu_nome) updateData.usu_nome = usu_nome;
    if (usu_email) updateData.usu_email = usu_email;
    if (usu_senha) updateData.usu_senha = usu_senha;
    if (usu_perfil) updateData.usu_perfil = usu_perfil;

    // Query para atualizar os dados no banco de dados
    const { data, error } = await supabase
      .from('usuari')
      .update(updateData)
      .eq('usu_id', id);

    // Se ocorreu um erro, retornar erro
    if (error) return res.status(500).json({ error: error.message });

    // Retornar sucesso sem validações adicionais
    res.status(200).json({ message: 'Usuário atualizado com sucesso' });
  }

  //-----------------------------------------------------------------------------------------------//
  // DELETE: Soft delete (atualiza o campo deletd para 'S')
  static async deleteUser(req, res) {
    const { id } = req.params;

    // Verificar se o usuário existe
    const { data: user, error: fetchError } = await supabase
      .from('usuari')
      .select('*')
      .eq('usu_id', id)
      .single();

    // Se o usuário não foi encontrado, retornar mensagem apropriada
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    // Atualizar o campo DELETD para 'S' (soft delete)
    const { error } = await supabase
      .from('usuari')
      .update({ deletd: 'S' }) // Marcar como excluído
      .eq('usu_id', id);

    // Se ocorreu um erro, retornar erro
    if (error) return res.status(500).json({ error: error.message });

    res.status(200).json({ message: 'Usuário removido com sucesso (soft delete)' });
  }

  //-----------------------------------------------------------------------------------------------//
  // DELETE: Exclusão física de um usuário (hard delete)
  static async hardDeleteUser(req, res) {
    const { id } = req.params;

    const { data, error } = await supabase.from('usuari').delete().eq('usu_id', id);

    if (error) return res.status(500).json({ error: error.message });
    if (data.length === 0) return res.status(404).json({ message: 'Usuário não encontrado' });

    res.status(200).json({ message: 'Usuário excluído permanentemente' });
  }
}

module.exports = UsuariController;