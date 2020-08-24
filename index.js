var activities = ['developing new projects', 'programming', 'analyzing data', 'rock climbing']

var changeActivity = setInterval(changeNum, 3000);

function changeNum() {
    document.getElementById('activityBox').innerHTML = activities[Math.floor(Math.random() * activities.length)]
}