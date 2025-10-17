
function parseMilliseconds(timeframe) {
    let now = new Date().getTime();
    let milliseconds = {
        hour: 60 * 60 * 1000,
        day: 24 * 60 * 60 * 1000,
        week: 7 * 24 * 60 * 60 * 1000,
        '4weeks': 4 * 7 * 24 * 60 * 60 * 1000
    };
    if (milliseconds[timeframe]) return now - milliseconds[timeframe];
    if (timeframe === 'forever') return 0;
    return null;
}

function buttonClicked(event) {
    event.preventDefault();
    const option = document.getElementById('timeframe');
    let selectedTimeframe = option.value;
    let removal_start = parseMilliseconds(selectedTimeframe);
    if (removal_start == undefined) {
        return null;
    }
    chrome.browsingData.remove(
        { since: removal_start },
        {
            appcache: true,
            cache: true,
            cacheStorage: true,
            cookies: true,
            downloads: true,
            fileSystems: true,
            formData: true,
            history: true,
            indexedDB: true,
            localStorage: true,
            serverBoundCertificates: true,
            serviceWorkers: true,
            pluginData: true,
            passwords: true,
            webSQL: true
        }
    );
    const success = document.createElement('div');
    success.classList.add('overlay');
    success.setAttribute('role', 'alert');
    success.textContent = 'Data has been cleared.';
    document.body.appendChild(success);

    setTimeout(function () {
        success.classList.add('visible');
    }, 10);
    setTimeout(function () {
        if (close === false) success.classList.remove('visible');
        else window.close();
    }, 4000);
}

window.addEventListener('DOMContentLoaded', function () {
    document.getElementById('clear-all-btn').addEventListener('click', buttonClicked);
});