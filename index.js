var activities = ['developing new projects', 'programming', 'building a website', 'analyzing data', 'rock climbing', 'jumping off a cliff']

var changeActivity = setInterval(changeNum, 3000);

function changeNum() {
    document.getElementById('activityBox').innerHTML = activities[Math.floor(Math.random() * activities.length)]
}