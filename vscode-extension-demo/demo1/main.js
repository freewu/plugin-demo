const vscode = require('vscode')

// 插件被激活时调用
exports.activate = function() {
    vscode.window.showInformationMessage('hello, vscode plugin demo1');
}

// 插件被禁用时调用
exports.deactivate = function() {
    vscode.window.showInformationMessage('hello, vscode plugin demo1 deactivate');
}