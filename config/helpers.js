var path = require('path');

var _root = path.resolve(__dirname, '..');

// console.log("__dirname", __dirname);
// console.log("_root", _root);
// __dirname D:\code\github\webpack\config
// _root D:\code\github\webpack

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}

exports.root = root;