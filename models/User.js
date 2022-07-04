const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
// const userSchema = new Schema(
//   {
//     username: {
//       type: String,
//       unique: true,
//       required: true,
//       firstName: String,
//       lastName: String,
//       birthday: Date,
//       sex: { type: String, enum: ['male', 'female', 'other'] },
//       email: String,
//       phoneNumber: Number,
//     },
//     password: String,
//   },
//   {
//     timestamps: true,
//   }
// );

const userSchema = new Schema({
  email: { type: String, unique: true },
  firstName: String,
  lastName: String,
  birthday: { type: Date },
  gender: { type: String, enum: ['male', 'female', 'other'] },
  phoneNumber: Number,
  password: String,
});



const User = model("User", userSchema);

module.exports = User;



