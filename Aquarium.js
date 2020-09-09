window.onload=function() {
  lengthObj = document.getElementById('txtLength');
  heightObj = document.getElementById('txtHeight');
  widthObj = document.getElementById('txtWidth');
  costObj = document.getElementById('tdCost');
  document.getElementById('btnReset').onclick = resetInputs;
  document.getElementById('btnCalcCost').onclick = CalcCost;
}

labourCosts = 2
glassCost = 1.2
glueCosts = 1.6
gst = 0.48


function resetInputs() {
  lengthObj.value = '';
  heightObj.value = '';
  widthObj.value = '';
  costObj.innerHTML = '';
}

function surfaceArea () {
	var length = new Number(lengthObj.value);
	var height = new Number(heightObj.value);
    var width = new Number(widthObj.value);
costObj.innerHTML = (length*height*2) + (length*width*2) + (width*height);
}

function glueCosts () {
 	var length = new Number(lengthObj.value);
	var height = new Number(heightObj.value);
    var width = new Number(widthObj.value);	
return  ((height*4) + (length*2) + (width*2)*0.1);
}

function labourCosts () {
	var length = new Number(lengthObj.value);
	var height = new Number(heightObj.value);
    var width = new Number(widthObj.value);	
return (surfaceArea()/100);
}

function glassCost() {
	var length = new Number(lengthObj.value);
	var height = new Number(heightObj.value);
    var width = new Number(widthObj.value);	
	var costs;
if (height > 25) {
		costs = surfaceArea()*0.1;
	    }else {
		costs = surfaceArea()*0.06;
	    }
return costs;	
}

function CalcCost() {
	var length = new Number(lengthObj.value);
	var height = new Number(heightObj.value);
    var width = new Number(widthObj.value);	
	var gc = glassCost();
	var lc = labourCosts();
	var glc = glueCosts();

if(isNaN(length) || isNaN(width) || isNaN(height)) {
	alert('Invalid length, width or height');
	return;
}

costObj.innerHTML = '';	
costObj.innerHTML = (gc + lc + glc *1.1);
}
