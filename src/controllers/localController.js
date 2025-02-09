const supabase = require('../config/supabase');

class LocalController {
  static async getAllLocations(req, res) {
    const { data, error } = await supabase.from('locali').select('*').eq('deletd', 'N');
    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json(data);
  }

  static async getLocationById(req, res) {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('locali')
      .select('*')
      .eq('loc_id', id)
      .eq('deletd', 'N')
      .single();

    if (!data) return res.status(404).json({ message: 'Localização não encontrada ou deletada' });
    res.status(200).json(data);
  }

  static async createLocation(req, res) {
    const { loc_codloc, loc_desc, loc_cap, loc_stat } = req.body;
    if (!loc_codloc || !loc_desc) {
      return res.status(400).json({ message: 'Código e Descrição são obrigatórios' });
    }

    const { data, error } = await supabase.from('locali').insert([{ loc_codloc, loc_desc, loc_cap, loc_stat }]);
    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json({ message: 'Localização criada com sucesso' });
  }

  static async updateLocation(req, res) {
    const { id } = req.params;
    const { loc_codloc, loc_desc, loc_cap, loc_stat } = req.body;

    const { data, error } = await supabase
      .from('locali')
      .update({ loc_codloc, loc_desc, loc_cap, loc_stat })
      .eq('loc_id', id);
    
    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json({ message: 'Localização atualizada com sucesso' });
  }

  static async softDeleteLocation(req, res) {
    const { id } = req.params;
    const { error } = await supabase
      .from('locali')
      .update({ deletd: 'Y' })
      .eq('loc_id', id);
    
    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json({ message: 'Localização Excluida com sucesso' });
  }

  static async hardDeleteLocation(req, res) {
    const { id } = req.params;
    const { error } = await supabase
      .from('locali')
      .delete()
      .eq('loc_id', id);
    
    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json({ message: 'Localização excluída com sucesso' });
  }
}

module.exports = LocalController;