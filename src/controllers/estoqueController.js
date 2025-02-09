const supabase = require('../config/supabase');

class EstoqueController {
  static async getAllStock(req, res) {
    const { data, error } = await supabase.from('estoq').select('*').eq('deletd', 'N');
    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json(data);
  }

  static async getStockById(req, res) {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('estoq')
      .select('*')
      .eq('est_id', id)
      .eq('deletd', 'N')
      .single();

    if (!data) return res.status(404).json({ message: 'Estoque não encontrado ou deletado' });
    res.status(200).json(data);
  }

  static async createStock(req, res) {
    const { est_proid, est_locid, est_qtde } = req.body;
    const { data, error } = await supabase.from('estoq').insert([{ est_proid, est_locid, est_qtde }]);
    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json({ message: 'Estoque criado com sucesso' });
  }

  static async updateStock(req, res) {
    const { id } = req.params;
    const { est_proid, est_locid, est_qtde } = req.body;

    const { data, error } = await supabase
      .from('estoq')
      .update({ est_proid, est_locid, est_qtde })
      .eq('est_id', id);

    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json({ message: 'Estoque atualizado com sucesso' });
  }

  static async softDeleteStock(req, res) {
    const { id } = req.params;
    const { error } = await supabase
      .from('estoq')
      .update({ deletd: 'Y' })
      .eq('est_id', id);

    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json({ message: 'Estoque Excluido com sucesso' });
  }

  static async hardDeleteStock(req, res) {
    const { id } = req.params;
    const { error } = await supabase
      .from('estoq')
      .delete()
      .eq('est_id', id);

    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json({ message: 'Estoque Excluido com sucesso permanentemente' });
  }
}

module.exports = EstoqueController;