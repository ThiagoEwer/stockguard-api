const supabase = require('../config/supabase');

class PedidoController {
  static async getAllOrders(req, res) {
    const { data, error } = await supabase.from('pedido').select('*').eq('deletd', 'N');
    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json(data);
  }

  static async getOrderById(req, res) {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('pedido')
      .select('*')
      .eq('ped_id', id)
      .eq('deletd', 'N')
      .single();

    if (!data) return res.status(404).json({ message: 'Pedido não encontrado ou deletado' });
    res.status(200).json(data);
  }

  static async createOrder(req, res) {
    const { ped_codped, ped_cliid, ped_forid } = req.body;
    const { data, error } = await supabase.from('pedido').insert([{ ped_codped, ped_cliid, ped_forid }]);
    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json({ message: 'Pedido criado com sucesso' });
  }

  static async updateOrder(req, res) {
    const { id } = req.params;
    const { ped_codped, ped_cliid, ped_forid } = req.body;

    const { data, error } = await supabase
      .from('pedido')
      .update({ ped_codped, ped_cliid, ped_forid })
      .eq('ped_id', id);
    
    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json({ message: 'Pedido atualizado com sucesso' });
  }

  static async softDeleteOrder(req, res) {
    const { id } = req.params;
    const { error } = await supabase
      .from('pedido')
      .update({ deletd: 'Y' })
      .eq('ped_id', id);
    
    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json({ message: 'Pedido Deletado com sucesso' });
  }

  static async hardDeleteOrder(req, res) {
    const { id } = req.params;
    const { error } = await supabase
      .from('pedido')
      .delete()
      .eq('ped_id', id);
    
    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json({ message: 'Pedido Deletado com sucesso permanentemente' });
  }
}

module.exports = PedidoController;