// 点击检索整个书签层次结构
document.getElementById('get-tree-btn').addEventListener('click', () => {
    chrome.bookmarks.getTree((bookmarkTreeNodes) => {
        console.log('bookmarkTreeNodes', bookmarkTreeNodes);
        document.getElementById('result-container').value = JSON.stringify(bookmarkTreeNodes, null, 2);
    });
});

// 点击检索最近添加N个书签
document.getElementById('get-recent-btn').addEventListener('click', () => {
    const val = document.getElementById('recent-count-select').value;
    let num = parseInt(val);
    num = (num > 10) ? num : 10;
    chrome.bookmarks.getRecent(num, (bookmarkNodes) => {
        console.log('bookmarkNodes', bookmarkNodes);
        document.getElementById('result-container').value = JSON.stringify(bookmarkNodes, null, 2);
    });
});

// 搜索与给定查询匹配的 BookmarkTreeNodes。使用对象指定的查询会生成与所有指定属性匹配的 BookmarkTreeNodes。
document.getElementById('search-btn').addEventListener('click', () => {
    const keyword = document.getElementById('search-keyword-input').value;
    if (!keyword) {
        document.getElementById('result-container').value = '请输入关键词';
        return;
    }
    // let query = {
    //     query: keyword, // 包含要与书签网址和标题进行匹配的字词和带引号的短语 模糊查询
    //     title: keyword, // 书签的标题；要求完全匹配
    //     url: keyword, // 书签的网址；完全匹配。请注意，文件夹没有网址
    // };
    let query = keyword;
    // 查询对象可以是 字符串 | 对象
    chrome.bookmarks.search(query, (bookmarkNodes) => {
        console.log('bookmarkNodes', bookmarkNodes);
        document.getElementById('result-container').value = JSON.stringify(bookmarkNodes, null, 2);
    });
});

// 点击检索指定书签
document.getElementById('get-bookmark-btn').addEventListener('click', () => {
    const val = document.getElementById('bookmark-ids-input').value;
    if (!val) {
        document.getElementById('result-container').value = '请输入书签ID';
        return;
    }
    let ids = val.split(',');
    chrome.bookmarks.get(ids, (bookmarkNodes) => {
        console.log('bookmarkNodes', bookmarkNodes);
        document.getElementById('result-container').value = JSON.stringify(bookmarkNodes, null, 2);
    });
});

// 点击检索书签层次结构的一部分
document.getElementById('get-subtree-btn').addEventListener('click', () => {
    const val = document.getElementById('subtree-id-input').value;
    if (!val) {
        document.getElementById('result-container').value = '请输入文件夹ID';
        return;
    }
    chrome.bookmarks.getSubTree(val, (bookmarkTreeNodes) => {
        console.log('bookmarkTreeNodes', bookmarkTreeNodes);
        document.getElementById('result-container').value = JSON.stringify(bookmarkTreeNodes, null, 2);
    });
});

// 点击检索指定文件夹的子级
document.getElementById('get-children-btn').addEventListener('click', () => {
    const val = document.getElementById('subtree-id-input').value;
    if (!val) {
        document.getElementById('result-container').value = '请输入文件夹ID';
        return;
    }
    chrome.bookmarks.getChildren(val, (bookmarkTreeNodes) => {
        console.log('bookmarkTreeNodes', bookmarkTreeNodes);
        document.getElementById('result-container').value = JSON.stringify(bookmarkTreeNodes, null, 2);
    });
});

// 点击创建书签
document.getElementById('create-btn').addEventListener('click', () => {
    let obj = {};
    const index = document.getElementById('create-index-input').value;
    if (index) {
        obj.index = parseInt(index);
    }
    const parentId = document.getElementById('create-parentId-input').value;
    if (parentId) {
        obj.parentId = parentId;
    }
    const title = document.getElementById('create-title-input').value;
    if (title) {
        obj.title = title;
    }
    const url = document.getElementById('create-url-input').value;
    if (url) {
        obj.url = url;
    }
    if (!title) {
        document.getElementById('result-container').value = '请输入书签标题';
        return;
    }
    console.log('点击创建书签:', obj);
    chrome.bookmarks.create(obj, (bookmarkNode) => {
        console.log('bookmarkNode', bookmarkNode);
        document.getElementById('result-container').value = JSON.stringify(bookmarkNode, null, 2);
    });
});

// 点击更新书签
document.getElementById('update-btn').addEventListener('click', () => {
    let obj = {};
    const id = document.getElementById('update-id-input').value;
    if (!id) {
        document.getElementById('result-container').value = '请输入书签ID';
        return;
    }
    const title = document.getElementById('update-title-input').value;
    if (title) {
        obj.title = title;
    } else {
        document.getElementById('result-container').value = '请输入书签标题';
        return;
    }
    const url = document.getElementById('update-url-input').value;
    if (url) {
        obj.url = url;
    }
    console.log('点击更新书签:', obj);
    chrome.bookmarks.update(id, obj, (bookmarkNode) => {
        console.log('bookmarkNode', bookmarkNode);
        document.getElementById('result-container').value = JSON.stringify(bookmarkNode, null, 2);
    });
});

// 移除书签或空书签文件夹
document.getElementById('remove-btn').addEventListener('click', () => {
    const id = document.getElementById('remove-id-input').value;
    if (!id) {
        document.getElementById('result-container').value = '请输入书签ID';
        return;
    }
    chrome.bookmarks.remove(id, () => {
        console.log('移除书签或空书签文件夹:', id);
        document.getElementById('result-container').value = `成功移除书签或空书签文件夹: ${id}`;
    });
});

// 将指定的 BookmarkTreeNode 移动到提供的位置
document.getElementById('move-btn').addEventListener('click', () => {
    const id = document.getElementById('move-id-input').value;
    if (!id) {
        document.getElementById('result-container').value = '请输入要移动的书签或空书签文件夹ID';
        return;
    }
    let obj = {};
    const index = document.getElementById('move-index-input').value;
    if (index !== '') {
        obj.index = parseInt(index);
    }
    const parentId = document.getElementById('move-parentId-input').value;
    if (!parentId) {
        document.getElementById('result-container').value = '请输入要移动的书签或空书签文件夹ID';
        return;
    }
    obj.parentId = parentId;
    console.log('点击移动书签:', obj);
    chrome.bookmarks.move(id, obj, (bookmarkNode) => {
        console.log('bookmarkNode', bookmarkNode);
        document.getElementById('result-container').value = JSON.stringify(bookmarkNode, null, 2);
    });
});