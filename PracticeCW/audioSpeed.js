function speedListen(audioLength, playSpeed) {
  let newAudioLength = "";
  var timeArr = audioLength.split(":").map(Number);
  var totalSecs = (timeArr[0] * 3600) + (timeArr[1] * 60) + timeArr[2];
  var newTime = Math.floor(totalSecs / playSpeed);
  var secs;
  var mins;
  var hrs;

  secs = newTime % 60;
  mins = Math.floor((newTime % 3600) / 60);  
  hrs = Math.floor( newTime / 3600 );
  
  newAudioLength = [ lead0(hrs), lead0(mins), lead0(secs) ].join(":");
  
  
  return newAudioLength;
  
  function lead0(n) {
    var ans = (n < 10) ? '0' : '';
    
    return ans + n.toString();
  }
}

speedListen("00:30:00", 2);