
    window.getTimeRemaining = function(endtime) {
  var t = Date.parse(endtime) - (new Date()).getTime();
  console.log(t);
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60);
  var hours = Math.floor( (t/(1000*60*60)) % 24);
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

window.initializeClock = function(clockId, dateId) {
    var clock = document.getElementById(clockId);
    var deadline = document.getElementById(dateId).value;
    var timeinterval = setInterval(function(){
      var t = getTimeRemaining(deadline);
      clock.innerHTML = 'Days: ' + t.days + '<br>' + 'Hours: ' + t.hours + '<br>' + 'Minutes: ' + t.minutes + '<br>' + 'Seconds: ' + t.seconds;
      if(t.total<=0){
        clearInterval(timeinterval);
      }
    }, 1000);
}
