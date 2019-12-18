module.exports = function(mongoose){
    return new mongoose.Schema({
      // _id: "",
      // email: { type: String, unique: true, required: true },
      // password: { type: String, required: true },
      // nickname: { type: String, required: true },
      // birth: { type: String, required: true },
      // gender: { type: String, required: true },
      // isAdmin: { type: Boolean, default: false },
      // c_date: { type: Date, default: Date.now }
      email: String,
      pwd: String,
      c_date: { type: Date, default: Date.now }
    });
  };