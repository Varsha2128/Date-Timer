document.addEventListener('DOMContentLoaded', function () {
    updateTime();

    function updateTime() {
        var datetimeElement = document.getElementById('datetime');
        var now = new Date();
        var formattedDateTime = now.toLocaleString();
        datetimeElement.innerText = formattedDateTime;
    }

    // Update time every second
    setInterval(updateTime, 1000);
});
