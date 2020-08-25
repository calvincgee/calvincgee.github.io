var activities = ['developing new projects', 'programming', 'building a website', 'analyzing data', 'rock climbing', 'jumping off a cliff']

var changeActivity = setInterval(changeNum, 2000);
var index = 0;
function changeNum() {
    document.getElementById('activityBox').innerHTML = activities[index % activities.length]
}