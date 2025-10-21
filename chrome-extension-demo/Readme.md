# Chrome 扩展开发

<img src="./book cover.png" />

## 教程

* [***第一个 Hello World***](./demo1/Readme.md)   
* [***右上角 popup 展示 (chrome.action)***](./demo2/Readme.md)   
* [***右键菜单 展示 (chrome.contextMenus)***](./demo3/Readme.md)   
* [***开发者工具 展示 (chrome.devtools.*)***](./demo4/Readme.md)   
* [侧边栏 展示 (chrome.sidePanel)](./demo5/Readme.md)   
* [替换 Chrome 网页](./demo6/Readme.md)   
* [***通知 展示 (chrome.notifications)***](./demo7/Readme.md)   
* [闹钟 展示 (chrome.alarms)](./demo8/Readme.md)   
* [系统信息 展示 (chrome.system.*)](./demo9/Readme.md)   
* [***标签页 展示 (chrome.tabs)***](./demo10/Readme.md)   
* [***数据存储 展示 (chrome.storage)***](./demo11/Readme.md)   
* [电源管理 展示 (chrome.power)](./demo12/Readme.md)   
* [搜索 展示 (chrome.search)](./demo13/Readme.md)   
* [***键盘快捷键 展示 (chrome.commands)***](./demo14/Readme.md)   
* [获取访问次数最多的网站 展示 (chrome.topSites)](./demo15/Readme.md)   
* [查询和恢复浏览会话中的标签页和窗口 展示 (chrome.sessions)](./demo16/Readme.md)   
* [***在不同上下文中执行脚本 展示 (chrome.scripting)***](./demo17/Readme.md)   
* [阅读清单 展示 (chrome.readingList)](./demo18/Readme.md)   
* [***窗口 展示 (chrome.windows)***](./demo19/Readme.md)   
* [***查询和修改 Cookie 展示 (chrome.cookies)***](./demo20/Readme.md)   
* [从用户的本地个人资料中移除浏览数据 展示 (chrome.browsingData)](./demo21/Readme.md)   
* [使用模式来指定每项内容设置所影响的网站 展示 (chrome.contentSettings)](./demo22/Readme.md)   
* [获屏幕、单个窗口或单个标签页的内容 展示 (chrome.desktopCapture)](./demo23/Readme.md)   
* [将标签页另存为 MHTML 展示 (chrome.pageCapture)](./demo24/Readme.md)   
* [创建和管理屏幕外文档 展示 (chrome.offscreen)](./demo25/Readme.md)    
* [***向地址栏注册关键字 展示 (chrome.omnibox)***](./demo26/Readme.md)    
* [用户隐私管理 展示 (chrome.privacy)](./demo27/Readme.md)    
* [书签管理 展示 (chrome.bookmarks)](./demo28/Readme.md)    
* [浏览器历史记录管理 展示 (chrome.history)](./demo29/Readme.md)    
* [***国际化 展示 (chrome.i18n)***](./demo30/Readme.md)    
* [可选的权限 展示 (chrome.permissions)](./demo31/Readme.md)    
* [获取网站图标 展示 (chrome.favicon)](./demo32/Readme.md)    
* [***检索服务工作线程、返回清单的相关详细信息，以及监听和响应扩展程序生命周期中的事件 展示 (chrome.runtime)***](./demo33/Readme.md)    
* [观察和分析流量，并拦截、屏蔽或修改正在处理的请求 展示 (chrome.webRequest)](./demo34/Readme.md)    
* [接收有关正在处理的导航请求的状态的通知 展示 (chrome.webNavigation)](./demo35/Readme.md)    


## 计划

> 和 https://developer.chrome.google.cn/docs/extensions/reference/api/ 左边栏的 API 对应

| Chrome API                         | 教程目录   |  完成     | 备注                                                                  |
| ---------------------------------- | --------- | -------- | --------------------------------------------------------------------- |
| accessibilityFeatures              |           | ❌️       | 仅限 ChromeOS                                                         |
| action                             | demo2     | ✅️       | 右上角popup展示                                                        |
| alarms                             | demo8     | ✅️       | 闹钟展示                                                               |
| audio                              |           | ❌️       | 仅限 ChromeOS                                                         |
| bookmarks                          | demo28    | ✅️       | 创建、整理和以其他方式操作书签                                            |
| browsingData                       | demo21    | ✅️       | 从用户的本地个人资料中移除浏览数据                                         |
| certificateProvider                |           | ❌️       | 仅限 ChromeOS                                                         |
| commands                           | demo14    | ✅️       | 键盘快捷键                                                             |
| contentSettings                    | demo22    | ✅️       | 使用模式来指定每项内容设置所影响的网站                                      |
| contextMenus                       | demo3     | ✅️       | 右键菜单展示                                                           |
| cookies                            | demo20    | ✅️       | 查询和修改 Cookie                                                      |
| debugger                           |           | 未开始    | 作为 Chrome 远程调试协议的替代传输方式                                     |
| declarativeContent                 |           | 未开始    | 根据网页内容执行操作，而无需读取网页内容的权限                               |
| declarativeNetRequest              |           | 未开始    | 通过指定声明性规则来屏蔽或修改网络请求                                      |
| desktopCapture                     | demo23    | ✅️       | 获屏幕、单个窗口或单个标签页的内容                                         |
| devtools.inspectedWindow           | demo4     | 未开始    | 与当前选中的标签页进行交互，例如执行 JavaScript 代码或获取 DOM 元素           |
| devtools.network                   | demo4     | 未开始    | 监控和分析网络请求，例如查看请求头、响应体和网络延迟等信息                      |
| devtools.panels                    | demo4     | ✅️       | 开发者工具展示                                                          |
| devtools.performance               | demo4     | 未开始    | 分析和优化网页性能，例如测量页面加载时间、渲染时间和资源使用情况等信息            |
| devtools.recorder                  | demo4     | 未开始    | 记录用户在浏览器中的操作，例如点击、滚动和输入文本等事件，以便后续分析和回放       |
| dns                                |           | ❌️       | 仅在 Chrome Dev 中可用。目前没有将此 API 从开发渠道移至 Chrome 稳定版的计划   |
| documentScan                       |           | ❌️       | 仅限 ChromeOS                                                         |
| dom                                |           | 未开始    | 与 DOM 交互，例如修改页面元素、监听事件等                                   | 
| downloads                          |           | 未开始    | 管理用户的下载操作，例如暂停、恢复、取消下载等                                |  
| enterprise.deviceAttributes        |           | ❌️       | 仅限 ChromeOS                                                         |
| enterprise.hardwarePlatform        |           | ❌️      | 管理企业设备的硬件平台信息，适用于由企业政策安装的扩展程序。                    |
| enterprise.login                   |           | ❌️       | 仅限 ChromeOS                                                         |
| enterprise.networkingAttributes    |           | ❌️       | 仅限 ChromeOS                                                         |
| enterprise.platformKeys            |           | ❌️       | 仅限 ChromeOS                                                         |
| events                             | demo35    | ✅️       | 监听和响应 Chrome 扩展程序的事件，例如用户交互、系统事件等。                   |
| extension                          |           | 未开始    | 管理 Chrome 扩展程序的生命周期，例如安装、更新、删除等操作。                   |
| extensionTypes                     | demo35    | ✅️       | 定义 Chrome 扩展程序的类型，例如后台脚本、内容脚本、弹出窗口等。                |
| favicon                            | demo32    | ✅️       | 获取网站图标                                                            |
| fileBrowserHandler                 |           | ❌️       | 仅限 ChromeOS                                                         |
| fileSystemProvider                 |           | ❌️       | 仅限 ChromeOS                                                         |
| fontSettings                       |           | 未开始    | 管理 Chrome 的字体设置                                                   |
| gcm                                |           | 未开始    | 与 Google Cloud Messaging (GCM) 进行通信，用于发送和接收消息。              |
| history                            | demo29    | ✅️       | 管理用户的浏览器历史记录                                                   |
| i18n                               | demo30    | ✅️       | 国际化                                                                  |
| identity                           |           | 未开始    | 与用户身份验证和授权相关的 API，例如登录、注销和获取用户信息等。                 |
| idle                               |           | 未开始    | 检测用户是否空闲，以及在用户空闲时执行操作。                                  |    
| input.ime                          |           | ❌️       | 仅限 ChromeOS                                                          |
| instanceID                         |           | 未开始    |                                                                        |
| loginState                         |           | ❌️       | 仅限 ChromeOS                                                          |
| management                         |           | 未开始    | 管理 Chrome 扩展程序的生命周期，例如安装、更新、删除等操作。                   |
| notifications                      | demo7     | ✅️       | 通知展示                                                                |
| offscreen                          | demo25    | ✅️       | 创建和管理屏幕外文档                                                      |
| omnibox                            | demo26    | ✅️       | 向 Google Chrome 的地址栏注册关键字                                       |
| pageCapture                        | demo24    | ✅️       | 将标签页另存为 MHTML                                                     |
| permissions                        | demo31    | ✅️       | 可选的权限                                                              |
| platformKeys                       |           | ❌️       | 仅限 ChromeOS                                                          |
| power                              | demo12    | ✅️       | 电源管理                                                                |
| printerProvider                    |           | ❌️       | 查询由扩展程序控制的打印机、查询其功能以及向这些打印机提交打印作业的事件。          |
| printing                           |           | ❌️       | 仅限 ChromeOS                                                          |
| printingMetrics                    |           | ❌️       | 仅限 ChromeOS                                                          |
| privacy                            | demo27    | ✅️       | 控制 Chrome 中可能会影响用户隐私的功能的使用情况                             |
| processes                          |           | ❌️       | 仅在 Chrome Dev 中可用。 与浏览器的进程进行交互                             |
| proxy                              |           | 未开始    |                                                                        |
| readingList                        | demo18    | ✅️       | 读取和修改阅读清单中的内容                                                 |
| runtime                            | demo33    | ✅️       | 检索服务工作线程、返回清单的相关详细信息，以及监听和响应扩展程序生命周期中的事件    |
| scripting                          | demo17    | ✅️       | 在不同上下文中执行脚本                                                     |  
| search                             | demo13    | ✅️       | 通过默认提供程序进行搜索                                                   |
| sessions                           | demo16    | ✅️       | 查询和恢复浏览会话中的标签页和窗口                                           |
| sidePanel                          | demo5     | ✅️       | 侧边栏展示                                                               |
| storage                            | demo11    | ✅️       | 数据存储                                                                |
| system.cpu                         | demo9     | ✅️       | 查询 CPU 元数据                                                          |
| system.display                     | demo9     | ✅️       | 查询内存元数据                                                           |
| system.memory                      | demo9     | ✅️       | 查询存储元数据                                                           |
| system.storage                     | demo9     | ✅️       | 查询显示元数据                                                           |
| systemLog                          |           | ❌️       | 仅限 ChromeOS                                                          |
| tabCapture                         | demo10    | ✅️       | 与标签页媒体流进行互动                                                    |
| tabGroups                          | demo10    | ✅️       | 标签页分组系统进行交互                                                    |
| tabs                               | demo10    | ✅️       | 与标签页系统进行交互                                                      |     
| topSites                           | demo15    | ✅️       | 获取访问次数最多的网站                                                    |
| tts                                |           | 未开始    |                      |
| ttsEngine                          |           | 未开始    |                      |
| types                              |           | 未开始    |                      |
| userScripts                        |           | 未开始    |                      |
| vpnProvider                        |           | ❌️       | 仅限 ChromeOS        |
| wallpaper                          |           | ❌️       | 仅限 ChromeOS         |
| webAuthenticationProxy             |           | 未开始    | 拦截 Web 身份验证 API (WebAuthn) 请求，以便在本地客户端上处理这些请求         |
| webNavigation                      | demo35    | ✅️       | 接收有关正在处理的导航请求的状态的通知                                      |
| webRequest                         | demo34    | ✅️       | 观察和分析流量，并拦截、屏蔽或修改正在处理的请求                              |
| windows                            | demo19    | ✅️       | 在浏览器中创建、修改和重新排列窗口                                          |


## 参考资料
```
https://github.com/sxei/chrome-plugin-demo
https://developer.chrome.com/docs/extensions?hl=zh-cn
https://developer.chrome.com/docs/extensions/samples?hl=zh-cn
```