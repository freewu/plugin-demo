// 因为badge空间有限，所以只支持4个以下的字符（英文4个，中文2个）。
// badge无法通过配置文件来指定，必须通过代码实现，
// 设置 badge 文字和颜色可以分别使用 setBadgeText() 和 setBadgeBackgroundColor()
chrome.action.setBadgeText({text: "新"});
chrome.action.setBadgeBackgroundColor({color: "#FF0000"});