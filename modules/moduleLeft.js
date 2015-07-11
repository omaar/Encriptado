var exports = module.exports = {};

exports.encryptLeft = function (key, str, a){
  var arr = str.toLowerCase().split('');
  return arr.map(function(num){
    return ((a.indexOf(num) - key) < 0)?
    a[a.length - (-1 * (a.indexOf(num) - key))]
    :a[(a.indexOf(num) - key)];
  }).reduce(function(array ,index) {
  return array += index;
});
};

 exports.reverseLeft = function (key, str, a){
  var arr = str.toLowerCase().split('');
  return arr.map(function(num){
    return ((a.indexOf(num) + key) < 26)?
    a[(a.indexOf(num) + key)]
    :a[((a.indexOf(num) + key)) - a.length] ;
  }).reduce(function(array ,index) {
  return array += index;
});
};
