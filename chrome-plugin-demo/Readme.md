# Chrome 扩展开发

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

## 计划

> 和 https://developer.chrome.google.cn/docs/extensions/reference/api/ 左边栏的 API 对应

| Chrome API                         | 教程目录   |  完成     | 备注                 |
| ---------------------------------- | --------- | -------- | -------------------- |
| accessibilityFeatures              |           | 未开始    |                      |
| action                             | demo2     | ✅️       | 右上角popup展示       |
| alarms                             | demo8     | ✅️       | 闹钟展示              |
| audio                              |           | ❌️       | 仅限 ChromeOS        |
| bookmarks                          |           | 未开始    |                      |
| browsingData                       |           | 未开始    |                      |
| certificateProvider                |           | ❌️       | 仅限 ChromeOS        |
| commands                           | demo14    | ✅️       | 键盘快捷键            |
| contentSettings                    |           | 未开始    |                      |
| contextMenus                       | demo3     | ✅️       | 右键菜单展示           |
| cookies                            |           | 未开始    |                      |
| debugger                           |           | 未开始    |                      |
| declarativeContent                 |           | 未开始    |                      |
| declarativeNetRequest              |           | 未开始    |                      |
| desktopCapture                     |           | 未开始    |                      |
| devtools.inspectedWindow           |           | 未开始    |                      |
| devtools.network                   |           | 未开始    |                      |
| devtools.panels                    | demo4     | ✅️       | 开发者工具展示         |
| devtools.performance               |           | 未开始    |                      |
| devtools.recorder                  |           | 未开始    |                      |
| dns                                |           | 未开始    |                      |
| documentScan                       |           | ❌️       | 仅限 ChromeOS        |
| dom                                |           | 未开始    |                      |
| downloads                          |           | 未开始    |                      |
| enterprise.deviceAttributes        |           | ❌️       | 仅限 ChromeOS        |
| enterprise.hardwarePlatform        |           | 未开始    |                      |
| enterprise.login                   |           | ❌️       | 仅限 ChromeOS         |
| enterprise.networkingAttributes    |           | ❌️       | 仅限 ChromeOS         |
| enterprise.platformKeys            |           | ❌️       | 仅限 ChromeOS        |
| events                             |           | 未开始    |                      |
| extension                          |           | 未开始    |                      |
| extensionTypes                     |           | 未开始    |                      |
| fileBrowserHandler                 |           | ❌️       | 仅限 ChromeOS         |
| fileSystemProvider                 |           | ❌️       | 仅限 ChromeOS         |
| fontSettings                       |           | 未开始    |                      |
| gcm                                |           | 未开始    |                      |
| history                            |           | 未开始    |                      |
| i18n                               |           | 未开始    |                      |
| identity                           |           | 未开始    |                      |
| idle                               |           | 未开始    |                      |
| input.ime                          |           | ❌️       | 仅限 ChromeOS        |
| instanceID                         |           | 未开始    |                      |
| loginState                         |           | ❌️       | 仅限 ChromeOS        |
| management                         |           | 未开始    |                      |
| notifications                      | demo7     | ✅️       | 通知展示              |
| offscreen                          |           | 未开始    |                      |
| omnibox                            |           | 未开始    |                      |
| pageCapture                        |           | 未开始    |                      |
| permissions                        |           | 未开始    |                      |
| platformKeys                       |           | ❌️       | 仅限 ChromeOS        |
| power                              | demo12    | ✅️      | 电源管理              |
| printerProvider                    |           | 未开始    |                      |
| printing                           |           | ❌️       | 仅限 ChromeOS         |
| printingMetrics                    |           | ❌️       | 仅限 ChromeOS        |
| privacy                            |           | 未开始    |                      |
| processes                          |           | 未开始    |                      |
| proxy                              |           | 未开始    |                      |
| readingList                        |           | 未开始    |                      |
| runtime                            |           | 未开始    |                      |
| scripting                          |           | 未开始    |                      |
| search                             | demo13    | ✅️       | 通过默认提供程序进行搜索 |
| sessions                           |           | 未开始    |                      |
| sidePanel                          | demo5     | ✅️       | 侧边栏展示             |
| storage                            | demo11    | ✅️       | 数据存储              |
| system.cpu                         | demo9     | ✅️       | 查询 CPU 元数据       |
| system.display                     | demo9     | ✅️       | 查询内存元数据         |
| system.memory                      | demo9     | ✅️       | 查询存储元数据         |
| system.storage                     | demo9     | ✅️       | 查询显示元数据         |
| systemLog                          |           | ❌️       | 仅限 ChromeOS        |
| tabCapture                         | demo10    | ✅️       | 与标签页媒体流进行互动  |
| tabGroups                          | demo10    | ✅️       | 标签页分组系统进行交互  |
| tabs                               | demo10    | ✅️       | 与标签页系统进行交互    |
| topSites                           |           | 未开始    |                      |
| tts                                |           | 未开始    |                      |
| ttsEngine                          |           | 未开始    |                      |
| types                              |           | 未开始    |                      |
| userScripts                        |           | 未开始    |                      |
| vpnProvider                        |           | ❌️       | 仅限 ChromeOS        |
| wallpaper                          |           | ❌️       | 仅限 ChromeOS         |
| webAuthenticationProxy             |           | 未开始    |                      |
| webNavigation                      |           | 未开始    |                      |
| webRequest                         |           | 未开始    |                      |
| windows                            |           | 未开始    |                      |


## 参考资料
```
https://github.com/sxei/chrome-plugin-demo
https://developer.chrome.com/docs/extensions?hl=zh-cn
https://developer.chrome.com/docs/extensions/samples?hl=zh-cn
```
