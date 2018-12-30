const mongoose =require ('mongoose');
const Schema = mongoose.Schema;

const CarsSChema = new Schema({
  name: String
});

const Car = mongoose.model('Cars', CarsSChema);
module.exports= Car