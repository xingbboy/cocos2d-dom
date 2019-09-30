// import {
//   enums,
//   attrTypeBytes,
//   glFilter,
//   glTextureFmt,
// } from './enums';
const _enums = require('./enums');
const enums = _enums.enums;
const attrTypeBytes = _enums.attrTypeBytes;
const glFilter = _enums.glFilter;
const glTextureFmt = _enums.glTextureFmt;

// import VertexFormat from './vertex-format';
// import IndexBuffer from './index-buffer';
// import VertexBuffer from './vertex-buffer';
// import Program from './program';
// import Texture from './texture';
// import Texture2D from './texture-2d';
// import TextureCube from './texture-cube';
// import RenderBuffer from './render-buffer';
// import FrameBuffer from './frame-buffer';
// import Device from './device';
const VertexFormat = require('./vertex-format');
const IndexBuffer = require('./index-buffer');
const VertexBuffer = require('./vertex-buffer');
const Program = require('./program');
const Texture = require('./texture');
const Texture2D = require('./texture-2d');
const TextureCube = require('./texture-cube');
const RenderBuffer = require('./render-buffer');
const FrameBuffer = require('./frame-buffer');
const Device = require('./device');

let gfx = {
  // classes
  VertexFormat,
  IndexBuffer,
  VertexBuffer,
  Program,
  Texture,
  Texture2D,
  TextureCube,
  RenderBuffer,
  FrameBuffer,
  Device,

  // functions
  attrTypeBytes,
  glFilter,
  glTextureFmt,
};
Object.assign(gfx, enums);

// export default gfx;
cc.gfx = gfx;
module.exports = gfx;