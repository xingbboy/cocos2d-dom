将Cocos Creator创建的界面用DOM渲染

1.为什么要用DOM渲染：
    用DOM渲染目的主要是为了省电。其次用户对文本的操作体验。
    用Canvas或opengl渲染需要每一帧都重绘，dom是针对次问题的优化。DOM只在控件发生变化时重绘此控件，当有动画时保持60帧渲染，没有动画时将降到30帧。

2.什么环境适合：
    手机APP，静态页面比较多，不需要每帧都渲染动画的时候可以选择DOM模式。

3.说明
    此工程用的是Cocos Creator 2.1.2，以插件的形式安装到cocos引擎
    安装方法：
        将dom目录拷贝到cocos引擎下
        在index.js文件里面的require('./extends');下面加入require('./dom')
        运行cmd命令
        cd “引擎目录”
        npm install gulp
        gulp build
        编译完成会在bin目录里出现cocos引擎文件，替换到项目目录里即可

4.本工程修改了cocos引擎部分源码支持vscode调试
    由于cocosy引擎源码不支持vscode调试，所以当前工程是改了部分cocos引擎源码(import,export部分,去掉了3D,物理,粒子)以支持vscode调试
    需要用到chrome和electron
    在工程目录安装electron模块(npm install electron)
    选择"Electron: All"进行调试，第一次启动不会断点，需要在调试工具选择"Electron: Renderer"然后点击重启调试。