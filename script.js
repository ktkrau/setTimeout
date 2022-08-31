function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}
function getSecondHandAngle(s) {
    s %= 60; // seconds in a minute
    return ((6 * s) + 180) % 360;
}
const seconds = document.getElementById("seconds");
setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    // your code here
    let s = getSecondsSinceStartOfDay();
    seconds.style.transform = `rotate(${getSecondHandAngle(s)}deg)`
}, 1000);

