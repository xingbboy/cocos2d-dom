const RenderComponent = require('./CCRenderComponent');
const domHelper = require('../DOMHelper');

let _proto = cc.Sprite.prototype;

_proto.getDomElement = function (parentNode) {
    if (this._domElement == null) {
        //创建DOM Element
        let element = domHelper.createDomElement('DIV', this, parentNode);
        if (element != null) {
            this._domElement = element;
        }
    }
    return this._domElement;
};

_proto.getFilterElement = function () {
    if (this._filterElement == null) {
        //svg滤镜
        let svgElement = domHelper.createSvgElement('svg', this.node.getDomElement());
        if (svgElement != null) {
            let filterElement = domHelper.createSvgElement('filter', svgElement);
            if (filterElement != null) {
                filterElement.setAttribute('id',this.uuid);

                this._filterElement = filterElement;
            }
        }
    }
    return this._filterElement;
};

_proto.getColorMatrixElement = function () {
    if (this._colorMatrixElement == null) {
        //svg滤镜 feColorMatrix(变色) Element
        let filterElement = this.getFilterElement();
        let element = domHelper.createSvgElement('feColorMatrix', filterElement);
        if (element != null) {
            this._colorMatrixElement = element;
        }
    }
    return this._colorMatrixElement;
};

_proto.setDomProps = function (element) {
    let frame = this.spriteFrame;
    if (frame != null) {
        let texture = frame._texture;
        
        let node = this.node;
        
        let style = element.style;
        style.width = '100%';
        style.height = '100%';
        
        //计算9宫格边框
        let minh = Math.min(frame.insetTop, frame.insetBottom);
        let minw = Math.min(frame.insetLeft, frame.insetRight);
        let minx = Math.min(minw, minh);

        //因为带边框，修正大小
        let width = node.width - minx * 2;
        let height = node.height - minx * 2;

        let color = node.color;
        //透明度
        style.opacity = color.a / 255;

        if ((color.r !== 255) || (color.g !== 255) || (color.b !== 255)) {
            //色彩转换
            let colorMatrixElement = this.getColorMatrixElement(this.node);
            colorMatrixElement.setAttribute('in', 'SourceGraphic');
            colorMatrixElement.setAttribute('type', 'matrix');
            colorMatrixElement.setAttribute('values', `${color.r/255} 0 0 0 0 0 ${color.g/255} 0 0 0 0 0 ${color.b/255} 0 0 0 0 0 1 0`);

            style.filter = `url(#${this.uuid})`;
        }
        
        //设置边框，9宫格
        style.border = `${minx}px solid rgba(255,255,255,0)`;
        style.borderImageSource = `url(${texture.url})`;
        style.borderImageSlice = `${frame.insetTop} ${frame.insetRight} ${frame.insetBottom} ${frame.insetLeft} fill`;

        //设置背景
        style.background = `url(${texture.url}) center/${node.width}px ${node.height}px no-repeat border-box`;
    }
};

_proto.updateRenderData = function () {
    //需要更新属性
    //this._assembler.updateRenderData(this);
    let element = this.getDomElement();
    this.setDomProps(element);
};

module.exports = cc.Sprite;