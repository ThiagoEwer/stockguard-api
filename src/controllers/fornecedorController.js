const supabase = require('../config/supabase');

class FornecedorController {
  static async getAllSuppliers(req, res) {
    const { data, error } = await supabase.from('fornec').select('*').eq('deletd', 'N');
    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json(data);
  }

  static async getSupplierById(req, res) {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('fornec')
      .select('*')
      .eq('for_id', id)
      .eq('deletd', 'N')
      .single();

    if (!data) return res.status(404).json({ message: 'Fornecedor não encontrado ou deletado' });
    res.status(200).json(data);
  }

  static async createSupplier(req, res) {
    const { for_nome, for_email, for_tel, for_end } = req.body;
    const { data, error } = await supabase.from('fornec').insert([{ for_nome, for_email, for_tel, for_end }]);
    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json({ message: 'Fornecedor criado com sucesso' });
  }

  static async updateSupplier(req, res) {
    const { id } = req.params;
    const { for_nome, for_email, for_tel, for_end } = req.body;

    const { data, error } = await supabase
      .from('fornec')
      .update({ for_nome, for_email, for_tel, for_end })
      .eq('for_id', id);

    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json({ message: 'Fornecedor atualizado com sucesso' });
  }

  static async softDeleteSupplier(req, res) {
    const { id } = req.params;
    const { error } = await supabase
      .from('fornec')
      .update({ deletd: 'Y' })
      .eq('for_id', id);

    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json({ message: 'Fornecedor Excluido com sucesso' });
  }

  static async hardDeleteSupplier(req, res) {
    const { id } = req.params;
    const { error } = await supabase
      .from('fornec')
      .delete()
      .eq('for_id', id);

    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json({ message: 'Fornecedor Excluido com sucesso permanentemente' });
  }
}

module.exports = FornecedorController;
