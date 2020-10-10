const { Transform } = require("stream");

module.exports = class CaesarTransform extends Transform {
  constructor(func, action, shift) {
    super();
    this.func = func;
    this.shift = this._combine(action, shift);
  }
  _combine(action, shift) {
    return action === "encode" ? +shift : -shift;
  }
  _transform(data, encoding, callback) {
    this.push(this.func(data.toString(), this.shift));
    callback();
  }
};

