(function showtime() {
    let now = new Date();
    let mon = now.getMonth();
    let d = now.getDate();
    let wd = now.getDay();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    let month = new Array(12)
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";

    let weekday = new Array(7)
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    const date = weekday[wd] + ", " + month[mon] + " " + d;
    const time = h + ":" + m + ":" + s;
    document.getElementById("Clock").innerHTML = time;
    document.getElementById("Date").innerHTML = date;
    setTimeout(showtime, 1000);
})();

(function bgimage() {
    let now = new Date()
    let h = now.getHours();
    function timebg(h) {
        let timebet;
        if (h < 4) {
            timebet = "midnight";
        }
        else if (h < 8) {
            timebet = "dawn";
        }
        else if (h < 12) {
            timebet = "morning"
        }
        else if (h < 16) {
            timebet = "afternoon"
        }
        else if (h < 20) {
            timebet = "evening"
        }
        else {
            timebet = "night";
        }
        return timebet;
    }

    let db = document.body;
    switch (timebg(h)) {
        case "dawn":
            db.style.background = "url('img/dawn.jpg') no-repeat center";
            db.style.backgroundSize = "cover";
            break;
        case "morning":
            db.style.background = "url('img/morning.jpg') no-repeat center";
            db.style.backgroundSize = "cover";
            break;
        case "afternoon":
            db.style.background = "url('img/afternoon.jpg') no-repeat center";
            db.style.backgroundSize = "cover";
            break;
        case "evening":
            db.style.background = "url('img/evening.jpg') no-repeat center";
            db.style.backgroundSize = "cover";
            break;
        case "night":
            db.style.background = "url('img/night.jpg') no-repeat center";
            db.style.backgroundSize = "cover";
            break;
        case "midnight":
            db.style.background = "url('img/midnight.jpg') no-repeat center";
            db.style.backgroundSize = "cover";
            break;
    }
})();

