function dayCalculator() {
  //get input



  var CC =document.getElementById('century');
  var YY =document.getElementById('year');
  var MM=document.getElementById('month');
  var DD =document.getElementById('day');

    var errMsg ="";
    if (CC.value< 0 )
    {
      errMsg=errMsg + "invalid";
      alert("invalid");
    }
    if (YY.value< 0)
    {
      errMsg=errMsg + "invalid";
      alert("invalid");
    }
    if (MM.value< 0)
    {
      errMsg=errMsg + "invalid";
      alert("invalid");
    }
    if (DD.value< 0)
    {
      errMsg=errMsg + "invalid";
      alert("invalid");
    }
    else {

   var akan =( ( (CC.value/4) -2*CC.value-1) + ((5*YY.value/4) ) + ((26*(MM.value+1)/10)) + DD.value ) % 7;
  alert(akan);

  }

}
dayOfTheWeek =("Monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday");
