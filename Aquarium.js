window.onload=function() {
  lengthObj = document.getElementById('txtLength');
  heightObj = document.getElementById('txtHeight');
  widthObj = document.getElementById('txtWidth');
  costObj = document.getElementById('tdCost');
  document.getElementById('btnReset').onclick = resetInputs;
  document.getElementById('btnCalcCost').onclick = CalcCost;
}



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
return (length*height*2) + (length*width*2) + (width*height);
}

function glueCosts () {
 	var length = new Number(lengthObj.value);
	var height = new Number(heightObj.value);
    var width = new Number(widthObj.value);	
	var glueCost = 0.1;
	var edges = ((height*4) + (length*2) + (width*2));
return edges*glueCost;
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
if (height > 26) {
		cost = surfaceArea()*0.1;
	    }else {
		cost = surfaceArea()*0.06;
	    }
return cost;
}

function CalcCost() {
var length = new Number(lengthObj.value);
var height = new Number(heightObj.value);
var width = new Number(widthObj.value);	
var lc = labourCosts();
var glc = glueCosts();	
var gl = glassCost();

if(isNaN(length) || isNaN(width) || isNaN(height)) {
	alert('Invalid length, width or height');
	return;
}


var total = (gl + lc + glc)*1.1;
var costRounded = total.toFixed(2);
costObj.innerHTML = '';	
costObj.innerHTML = "$" + costRounded;	
}
