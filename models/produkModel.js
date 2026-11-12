const mongoose = require('mongoose');

const spesifikasiSchema = new mongoose.Schema({
  daya: String,
  warna: String,
}, { _id: false });

const produkSchema = new mongoose.Schema({
  sku: { type: String, required: [true, 'sku wajib diisi'], unique: true, trim: true },
  nama: { type: String, required: [true, 'nama wajib diisi'], trim: true },
  harga: { type: Number, required: [true, 'harga wajib diisi'], min: [0, 'harga tidak boleh negatif'] },
  garansi: { type: String, required: [true, 'garansi wajib diisi'], trim: true },
  
  spesifikasi: spesifikasiSchema,
  kategoriId: { type: mongoose.Schema.Types.ObjectId, ref: 'Kategori' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Produk', produkSchema);