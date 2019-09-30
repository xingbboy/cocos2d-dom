const ComponentScheduler = require('../cocos2d/core/component-scheduler');

let _proto = ComponentScheduler.prototype;

_proto._enableComp = _proto.enableComp;
_proto.enableComp = function (comp, invoker) {
    this._enableComp(comp, invoker);

    //当控件启用时设置dom显示
    if (comp._domElement != null) {
        let style = comp._domElement.style;
        style.visibility = "";
    }
    
};

_proto._disableComp = _proto.disableComp;
_proto.disableComp = function (comp) {
    this._disableComp(comp);

    //当控件禁用时设置dom隐藏
    if (comp._domElement != null) {
        let style = comp._domElement.style;
        style.visibility = "hidden";
    }
};