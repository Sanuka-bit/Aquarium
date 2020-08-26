window.onload=function() {
  lengthObj = document.getElementById('txtLength');
  heightObj = document.getElementById('txtHeight');
  widthObj = document.getElementById('txtWidth');
  costObj = document.getElementById('tdCost');
  document.getElementById('btnReset').onclick = resetInputs;
  document.getElementById('btnCalc').onclick = calcCost;
function resetInputs() {
  lengthObj.value = '';
  heightObj.value = '';
  widthObj.value = '';
  costObj.innerHTML = '';
}
function calcCost() {
  var length = new Number(lengthObj.value);
  var height = new Number(heightObj.value);
  var width = new Number(widthObj.value);
  costObj.innerHTML = '';
  if(isNaN(length) || isNaN(height) || isNaN(width) ){
    alert('Invalid inputs');
    return;
    }
}
	
function surfaceArea () {
	var length = new Number(lengthObj.value);
	var height = new Number(heightObj.value);
    var width = new Number(widthObj.value);
return (length*height*2) + (length*width*2) + (width*height);
}


function glassCosts () {
	var length = new Number(lengthObj.value);
	var height = new Number(heightObj.value);
    var width = new Number(widthObj.value);
return	if (height > 25) {
		(surfaceArea*0.1)
	    }else {
		(surfaceArea*0.06)
	    }
}
function glueCosts () {
 	var length = new Number(lengthObj.value);
	var height = new Number(heightObj.value);
    var width = new Number(widthObj.value);	
return ((height*4) + (length*2) + (width*2)*0.1)
}

function labourCosts () {
	var length = new Number(lengthObj.value);
	var height = new Number(heightObj.value);
    var width = new Number(widthObj.value);	
return (surfaceArea/100)
}

var grandTotal = (glassCosts () + glueCosts ()+ labourCosts()) *1.1)

costObj.innerHTML = grandTotal;	
	
	

