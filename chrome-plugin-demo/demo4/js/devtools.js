// Devtools 主面板
chrome.devtools.panels.create(
    "bluefrog tab",  "images/icon.png", "pages/devtools-panel.html",
    function(panel) { 
        panel.onShown.addListener(function(window) {
            // 当面板显示时执行的代码
            console.log("bluefrog tab 面板显示");
            console.log(window);
        });
    }
);

// Devtools 侧边面板
chrome.devtools.panels.elements.createSidebarPane("Bluefrog Sidebar",
    function(sidebar) {
        console.log("Bluefrog Sidebar 面板显示");
        console.log(sidebar);
        // 在边栏窗格中显示内容：
        //     HTML 内容：调用 setPage() 可指定要在窗格中显示的 HTML 页面。
        //     JSON 数据：将 JSON 对象传递给 setObject()。
        //     JavaScript 表达式：将表达式传递给 setExpression()。开发者工具会在被检查网页的上下文中评估表达式，然后显示返回值。
        //sidebar.setObject({ some_data: "Some data to show", "author": "bluefrog" }); // JSON 数据
        //sidebar.setExpression("document.title"); // JavaScript 表达式
        sidebar.setPage("pages/devtools-sidebar.html"); // HTML 内容
});