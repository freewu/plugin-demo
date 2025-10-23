// 因为badge空间有限，所以只支持4个以下的字符（英文4个，中文2个）。
// badge无法通过配置文件来指定，必须通过代码实现，
// 设置 badge 文字和颜色可以分别使用 setBadgeText() 和 setBadgeBackgroundColor()
chrome.action.setBadgeText({text: "新"});
chrome.action.setBadgeBackgroundColor({color: "#FF0000"});

// 在用户点击操作图标时触发。如果操作具有弹出式窗口，则不会触发此事件。
chrome.action.onClicked.addListener(function(tab) {
    console.log("用户点击了操作图标:",tab);
});

// 在与扩展程序操作相关的用户指定设置发生更改时触发。
// 例如，用户在扩展程序的选项页面中更改了某些设置。
chrome.action.onUserSettingsChanged.addListener(function(change) {
    console.log("用户更改了扩展程序操作的设置:",change);
    console.log(change.isOnToolbar); // 扩展程序的 action 图标是否显示在浏览器窗口的顶级工具栏上（即，用户是否已“固定”该扩展程序）
});