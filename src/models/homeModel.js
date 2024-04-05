const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
  titulo: { type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  }
});
  
mongoose.model('Home', HomeSchema);
  
const HomeModel = mongoose.model('Home');

module.exports = HomeModel;

