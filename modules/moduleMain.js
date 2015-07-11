var exports = module.exports = {};

var moduleRigth = require('./moduleRigth.js');
var moduleLeft = require('./moduleLeft.js');

exports.getEncryptLeft = function (key, a, input, output){
  console.log("Encriptado a la Izquierda");//Izquierda
  console.log("Input: " + input);
  console.log("Output Left: " + moduleLeft.encryptLeft(key, input, a));
  console.log("Original: " + moduleLeft.reverseLeft(key, output, a) +"\n\n"); //onqehqhn
};

exports.getEncryptRigth = function (key, a, input, output){
  console.log("Encriptado a la Derecha");//Derecha
  console.log("Input: " + input);
  console.log("Output Rigth: " + moduleRigth.encryptRigth(key, input, a));
  console.log("Original: " + moduleRigth.reverseRigth(key, output, a) + "\n"); //qpsgjsjp
};
