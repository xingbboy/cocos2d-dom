const domHelper = require('./DOMHelper');

let _proto = cc.Node.prototype;

_proto.getDomElement = function (parentNode) {
    if (this._domElement == null) {
        let element = domHelper.createDomElement('DIV', this, parentNode);
        if (element != null) {
            this._domElement = element;
            let renderComponent = this._renderComponent;
            if (renderComponent != null) {
                //创建渲染Element
                let childElement = renderComponent.getDomElement(this);
                if (renderComponent.setDomProps != null) {
                    renderComponent.setDomProps(childElement);
                }
            }
            //设置属性
            this.setDomProps(element);

            //设置其他类型属性
            for (let i in this._components) {
                let component = this._components[i];
                if ((component!=renderComponent) && (component.setDomProps != null)) {
                    component.setDomProps(element);
                }
            }
        }
    }
    return this._domElement;
};

_proto.setDomProps = function (element) {
    //
    //element.setAttribute('class', 'node');
    let style = element.style;
    style.position = 'absolute';
    style.pointerEvents = 'none';
};

_proto._cleanup = _proto.cleanup;
_proto.cleanup = function () {
    this._cleanup();
    //清除node时删除Element
    if (this._domElement != null) {
        this._domElement.remove();
    }
}

module.exports = cc.Node;