// src/controllers/produtController.js
const supabase = require('../config/supabase');

class ProdutController {
  //-----------------------------------------------------------------------------------------------//
  // GET: Buscar todos os produtos (somente os que não estão deletados)
  static async getAllProducts(req, res) {
    const { data, error } = await supabase.from('produt').select('*').eq('deletd', 'N');
    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json(data);
  }
  //-----------------------------------------------------------------------------------------------//
  // GET: Buscar um produto pelo ID (somente se não estiver deletado)
  static async getProductById(req, res) {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('produt')
      .select('*')
      .eq('pro_id', id)
      .eq('deletd', 'N')
      .single();

    if (!data) return res.status(404).json({ message: 'Produto não encontrado ou deletado' });

    res.status(200).json(data);
  }
  //-----------------------------------------------------------------------------------------------//
  // POST: Criar um novo produto
  static async createProduct(req, res) {
    const { pro_codpro, pro_nome, pro_desc, pro_cat, pro_peso, pro_alt, pro_larg, pro_comp } = req.body;
    if (!pro_codpro || !pro_nome) {
      return res.status(400).json({ message: 'Código e Nome são obrigatórios' });
    }

    const { data, error } = await supabase.from('produt').insert([{ pro_codpro, pro_nome, pro_desc, pro_cat, pro_peso, pro_alt, pro_larg, pro_comp }]);
    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json({ message: 'Produto criado com sucesso' });
  }
  //-----------------------------------------------------------------------------------------------//
  // PUT: Atualizar um produto pelo ID
  static async updateProduct(req, res) {
    const { id } = req.params; 
    const { pro_codpro, pro_nome, pro_desc, pro_cat, pro_peso, pro_alt, pro_larg, pro_comp } = req.body;

    const { data: productData, error: productError } = await supabase
      .from('produt')
      .select('*')
      .eq('pro_id', id)
      .eq('deletd', 'N')
      .single();

    if (productError || !productData) {
      return res.status(404).json({ message: 'Produto não encontrado ou está excluído' });
    }

    const updateData = {};
    if (pro_codpro) updateData.pro_codpro = pro_codpro;
    if (pro_nome) updateData.pro_nome = pro_nome;
    if (pro_desc) updateData.pro_desc = pro_desc;
    if (pro_cat) updateData.pro_cat = pro_cat;
    if (pro_peso) updateData.pro_peso = pro_peso;
    if (pro_alt) updateData.pro_alt = pro_alt;
    if (pro_larg) updateData.pro_larg = pro_larg;
    if (pro_comp) updateData.pro_comp = pro_comp;

    const { error } = await supabase
      .from('produt')
      .update(updateData)
      .eq('pro_id', id);

    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json({ message: 'Produto atualizado com sucesso' });
  }
  //-----------------------------------------------------------------------------------------------//
  // DELETE: Soft delete (atualiza o campo deletd para 'S')
  static async deleteProduct(req, res) {
    const { id } = req.params;

    const { data: product, error: fetchError } = await supabase
      .from('produt')
      .select('*')
      .eq('pro_id', id)
      .single();

    if (!product) return res.status(404).json({ message: 'Produto não encontrado' });

    const { error } = await supabase
      .from('produt')
      .update({ deletd: 'S' })
      .eq('pro_id', id);

    if (error) return res.status(500).json({ error: error.message });

    res.status(200).json({ message: 'Produto removido com sucesso (soft delete)' });
  }
  //-----------------------------------------------------------------------------------------------//
  // DELETE: Exclusão física de um produto (hard delete)
  static async hardDeleteProduct(req, res) {
    const { id } = req.params;

    const { data, error } = await supabase.from('produt').delete().eq('pro_id', id);

    if (error) return res.status(500).json({ error: error.message });
    if (data.length === 0) return res.status(404).json({ message: 'Produto não encontrado' });

    res.status(200).json({ message: 'Produto excluído permanentemente' });
  }
}

module.exports = ProdutController;
