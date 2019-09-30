function isPow2(v) {
  return !(v & (v - 1)) && (!!v);
}

module.exports = { isPow2 };