
var curTime, dt, dy, mn, yr, hr, min, sc, hp;
const days = new Array (
	"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
);/*
const bgs = new Array (
	"url('res/time.jpg')", "url('res/morning.jpg')", "url('res/lateEvening.jpg')", "url('res/earlyEvening.jpg')", "url('res/afterMorning.jpg')", "url('res/afternoon.jpg')", "url('res/evening.jpg')"
);*/

const bgs = new Array (
	"url('res/0.jpg')", 
	"url('res/1.jpg')", 
	"url('res/2.jpg')", 
	"url('res/3.jpg')", 
	"url('res/4.jpg')", 
	"url('res/5.jpg')", 
	"url('res/6.jpg')", 
	"url('res/7.jpg')", 
	"url('res/8.jpg')"
);
function add0(t) {
	if(t < 10){
		t = '0' + t;
	}else{
		t = t;
	}
	return t;
}
function mkDate() {
	dt = curTime.getDate();
	dy = curTime.getDay();
	mn = curTime.getMonth() + 1;
	yr = curTime.getFullYear();
	dispDate(dy, mn, dt, yr);
}
function dispDate(dy, mn, dt, yr) {
	let hp, date;
	hp = ".";
	dy = days[dy];
	date = mn + hp + dt + hp + yr;
	document.getElementById('date').innerHTML = date;
	document.getElementById('day').innerHTML = dy;
}
function mkTime() {
	hr = curTime.getHours();
	min = curTime.getMinutes();
	sc = curTime.getSeconds();
	dispTime(hr, min, sc);
	displaySaying(hr)
}
function dispTime(hr, min, sc) {
	let hp, time;
	hp = ":";
	hr = add0(hr);
	min = add0(min);
	sc = add0(sc);
	time = hr + hp + min + hp + sc;
	document.getElementById('time').innerHTML = time;
}
function displaySaying(hr) {
	let pSay = document.getElementById('saying');
	if (hr > 4 && hr < 12){
		pSay.innerHTML = 'Good Morning';
	}
	else if (hr > 11 && hr < 17){
		pSay.innerHTML = 'Good Afternoon';
	}
	else if (hr > 16 && hr < 24) {
		pSay.innerHTML = 'Good Evening';
	}
	else if (hr >= 00 && hr < 5) {
		pSay.innerHTML = 'Good Night';
	}
	else {
		pSay.innerHTML = 'Hello';
	}
}
function dispImage() {
	hr = new Date().getHours()
	let bg = document.getElementById('body').style
	let cl = document.getElementById('saying').style
	let cl2 = document.getElementById('clock').style
	let cl3 = document.getElementById('quote').style
	if (hr >= 0 && hr < 4) {
		bg.backgroundImage = bgs[0];
	}
	else if (hr > 3 && hr < 6) {
		bg.backgroundImage = bgs[1];
	}
	else if (hr > 5 && hr < 8) {
		bg.backgroundImage = bgs[2];
	}
	else if (hr > 7 && hr < 12) {
		bg.backgroundImage = bgs[3];
	}
	else if (hr > 11 && hr < 17) {
		bg.backgroundImage = bgs[4];
	}
	else if (hr > 16 && hr < 20) {
		bg.backgroundImage = bgs[5];
	}
	else if (hr > 19 && hr < 22) {
		bg.backgroundImage = bgs[6];
	}
	else if (hr > 21 && hr < 24) {
		bg.backgroundImage = bgs[7];
	}
	else {
		bg.backgroundImage = bgs[8];
	}
}

function startUp() {
	curTime = new Date();
	mkTime();
	mkDate();
	dispImage()
}
function startUp2() {
	
}
//dispImage();
setInterval(startUp, 500);
//setInterval(startUp2, 10000);

