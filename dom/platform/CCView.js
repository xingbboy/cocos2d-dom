cc.view._enableAntiAlias = cc.view.enableAntiAlias;
cc.view.enableAntiAlias = function (enabled) {
}

cc.view._setDesignResolutionSize = cc.view.setDesignResolutionSize;
cc.view.setDesignResolutionSize = function (width, height, resolutionPolicy) {
    // Defensive code
    if (!(width > 0 || height > 0)) {
        cc.logID(2200);
        return;
    }
    //原先函数
    this._setDesignResolutionSize(width, height, resolutionPolicy);

    //修正_devicePixelRatio缩放比例
    let scene = cc.director._scene;
    if (scene != null) {
        let element = scene.getDomElement();
        let style = element.style;
        
        style.transformOrigin = '100% 100%';
        style.transform = `scale(${this._scaleX / this._devicePixelRatio},${this._scaleY / this._devicePixelRatio})`;
    }
    
};