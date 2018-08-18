window.onload=function() {
  upTime('May,01,2018,00:00:00');
}
function upTime(countTo) {
  now = new Date();
  countTo = new Date(countTo);
  difference = (now-countTo);

  days=Math.floor(difference/(60*60*1000*24)*1);

  document.getElementById('days').firstChild.nodeValue = days;

  clearTimeout(upTime.to);
  upTime.to=setTimeout(function(){ upTime(countTo); },1000);
}
