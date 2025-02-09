const supabase = require('../config/supabase');

class ClienteController {
  static async getAllClients(req, res) {
    const { data, error } = await supabase.from('client').select('*').eq('deletd', 'N');
    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json(data);
  }

  static async getClientById(req, res) {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('client')
      .select('*')
      .eq('cli_id', id)
      .eq('deletd', 'N')
      .single();

    if (!data) return res.status(404).json({ message: 'Cliente não encontrado ou deletado' });
    res.status(200).json(data);
  }

  static async createClient(req, res) {
    const { cli_nome, cli_email, cli_tel, cli_end } = req.body;
    const { data, error } = await supabase.from('client').insert([{ cli_nome, cli_email, cli_tel, cli_end }]);
    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json({ message: 'Cliente criado com sucesso' });
  }

  static async updateClient(req, res) {
    const { id } = req.params;
    const { cli_nome, cli_email, cli_tel, cli_end } = req.body;

    const { data, error } = await supabase
      .from('client')
      .update({ cli_nome, cli_email, cli_tel, cli_end })
      .eq('cli_id', id);
    
    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json({ message: 'Cliente atualizado com sucesso' });
  }

  static async softDeleteClient(req, res) {
    const { id } = req.params;
    const { error } = await supabase
      .from('client')
      .update({ deletd: 'Y' })
      .eq('cli_id', id);
    
    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json({ message: 'Cliente removido com sucesso (soft delete)' });
  }

  static async hardDeleteClient(req, res) {
    const { id } = req.params;
    const { error } = await supabase
      .from('client')
      .delete()
      .eq('cli_id', id);
    
    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json({ message: 'Cliente excluído permanentemente' });
  }
}

module.exports = ClienteController;
