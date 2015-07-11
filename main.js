//Modules
var moduleRigth = require('./modules/moduleRigth.js');
var moduleLeft = require('./modules/moduleLeft.js');
var moduleMain = require('./modules/moduleMain.js');


var a = "abcdefghijklmnopqrstuvwxyz";
var input = "porfirio";
var key =23;

var outputLeft = "omar";//moduleLeft.encryptLeft(key, input, a);
var outputRigth = moduleRigth.encryptRigth(key, input, a);

moduleMain.getEncryptLeft(key, a, input, outputLeft); //key, a, input, output
moduleMain.getEncryptRigth(key, a, input, outputRigth); //key, a, input, output
