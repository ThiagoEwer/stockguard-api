const supabase = require('../config/supabase');

class MovimentacaoController {
  static async getAllMovements(req, res) {
    const { data, error } = await supabase.from('movime').select('*').eq('deletd', 'N');
    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json(data);
  }

  static async getMovementById(req, res) {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('movime')
      .select('*')
      .eq('mov_id', id)
      .eq('deletd', 'N')
      .single();

    if (!data) return res.status(404).json({ message: 'Movimentação não encontrada ou deletada' });
    res.status(200).json(data);
  }

  static async createMovement(req, res) {
    const { mov_proid, mov_qtde, mov_tipo, mov_locor, mov_locde } = req.body;
    const { data, error } = await supabase.from('movime').insert([{ mov_proid, mov_qtde, mov_tipo, mov_locor, mov_locde }]);
    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json({ message: 'Movimentação criada com sucesso' });
  }

  static async updateMovement(req, res) {
    const { id } = req.params;
    const { mov_proid, mov_qtde, mov_tipo, mov_locor, mov_locde } = req.body;

    const { data, error } = await supabase
      .from('movime')
      .update({ mov_proid, mov_qtde, mov_tipo, mov_locor, mov_locde })
      .eq('mov_id', id);

    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json({ message: 'Movimentação atualizada com sucesso' });
  }

  static async softDeleteMovement(req, res) {
    const { id } = req.params;
    const { error } = await supabase
      .from('movime')
      .update({ deletd: 'Y' })
      .eq('mov_id', id);

    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json({ message: 'Movimentação deletada com sucesso' });
  }

  static async hardDeleteMovement(req, res) {
    const { id } = req.params;
    const { error } = await supabase
      .from('movime')
      .delete()
      .eq('mov_id', id);

    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json({ message: 'Movimentação deletada permanentemente' });
  }
}

module.exports = MovimentacaoController;