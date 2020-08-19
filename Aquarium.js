window.onload=function() {
  lengthObj = document.getElementById('txtLength');
  heightObj = document.getElementById('txtHeight');
  widthObj = document.getElementById('txtWidth');
  costObj = document.getElementById('tdCost');
  document.getElementById('btnReset').onclick = resetInputs;
  document.getElementById('btnCalc').onclick = calcWeight;
}
function resetInputs() {
  lengthObj.value = '';
  heightObj.value = '';
  widthObj.value = '';
  costObj.innerHTML = '';
}
function calcWeight() {
  var length = new Number(lengthObj.value);
  var height = new Number(heightObj.value);
  var width = new Number(widthObj.value);
  costObj.innerHTML = '';
  if(isNaN(length) || isNaN(height) || isNaN(width) ){
    alert('Invalid inputs');
    return;
    }
	
function surfaceArea () {
	
costObj.innerHTML = (height*length + );
}
