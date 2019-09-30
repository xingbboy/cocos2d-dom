const domHelper = require('../DOMHelper');
let _proto = cc.Mask.prototype;

_proto.getDomElement = function (parentNode) {
    if (this._domElement == null) {
        let element = domHelper.createDomElement('DIV', this, parentNode);
        if (element != null) {
            this._domElement = element;
        }
    }
    return this._domElement;
};

_proto.setDomProps = function (element) {
    let attrib = this.node || this;
    //设置超出隐藏
    let style = attrib.getDomElement().style;
    style.overflow = "hidden";
};

_proto.updateRenderData = function () {
};

module.exports = cc.Mask;