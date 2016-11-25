//JavaScript for lightbox in Collection
console.log('Running up JS');

window.onload = init;
var currentThumb = null;

function init () {
	console.log('Running Init');

	var siteLocation = location.href;

	siteLocation = siteLocation.substring(0, (siteLocation.lastIndexOf('/') + 1));

	console.log('Site Location: ' + siteLocation);

	document.getElementById('a1').style.backgroundImage = "url(" + siteLocation + 'images/Rhythm0.jpg)';
	document.getElementById('a2').style.backgroundImage = "url(" + siteLocation + 'images/Rhythm4.jpg)';
	document.getElementById('a3').style.backgroundImage = "url(" + siteLocation + 'images/Rhythm5.jpg)';
	document.getElementById('a4').style.backgroundImage = "url(" + siteLocation + 'images/freeing.jpg)';

	addEvent(document.getElementById('a1'), 'click', showAsLarge);
	addEvent(document.getElementById('a2'), 'click', showAsLarge);
	addEvent(document.getElementById('a3'), 'click', showAsLarge);
	addEvent(document.getElementById('a4'), 'click', showAsLarge);

	addEvent(document.getElementById('a1'), 'mouseover', showBorder);
	addEvent(document.getElementById('a2'), 'mouseover', showBorder);
	addEvent(document.getElementById('a3'), 'mouseover', showBorder);
	addEvent(document.getElementById('a4'), 'mouseover', showBorder);

	addEvent(document.getElementById('a1'), 'mouseout', hideBorder);
	addEvent(document.getElementById('a2'), 'mouseout', hideBorder);
	addEvent(document.getElementById('a3'), 'mouseout', hideBorder);
	addEvent(document.getElementById('a4'), 'mouseout', hideBorder);

	reflectCode();

}

function showAsLarge () {

	if(currentThumb === null){
		currentThumb = this;
		this.className = 'activeThumb';
		currentThumb.className = 'activeThumb';
		console.log('currentThumb not Set');
	} else {
		currentThumb.className = 'normalThumb';
		this.className = 'activeThumb';
		console.log('currentThumb is Set');
		currentThumb = this;
	}

	var thumbSRC = this.style.backgroundImage.toString();
	thumbSRC = thumbSRC.trim();

	var position = thumbSRC.indexOf('/', getLengthURL());

	var imgLocation = thumbSRC.substring((position + 1), (thumbSRC.length-1));



	imgLocation = imgLocation.replace("\"", "");

	document.getElementById('mainImage').src = imgLocation;
}

function showBorder () {

	if(this.className != 'activeThumb'){
		this.className = 'highlightThumb';
	}
}


function hideBorder () {

	if (this.className != 'activeThumb'){
		this.className = 'normalThumb';
	}
}


function addEvent (obj, listener, handler) {
  if (obj){
    if (obj.addEventListener){
      obj.addEventListener(listener, handler, false);
    }
    else if (obj.attachEvent){
      obj.attachEvent("on" + listener, handler);
    }
  }
  else {
    console.error("Element " + obj + " not found");
  }
}


function getLengthURL () {
	var length


	siteURL = location.protocol +'//'+ location.host + location.pathname.substring(0, location.pathname.lastIndexOf('/') +1 )

	return siteURL.length
}

function reflectCode(){
	$.get('js/JSLight.js', function(data) {
	   $('#codeExample').text(data);
	}, 'text');
}

//localStorage
window.onload = initJS;
function initJS () {

	$('#formButton').click(formInfo);


	localStorage.setItem('myObject', JSON.stringify(exObject));

	console.log(localStorage.getItem('myObject'));

	var retObj = JSON.parse(localStorage.getItem('myObject'));
	console.log(retObj);

	showRetObj(retObj);

	simpleSetRetrieve();
	reflectCode();
}



function formInfo () {

	inName = $('#Name').val();
	inemail = $('#email').val();

	console.log(inName, inemail);

	if (localStorage.getItem(inName) === null){

		localStorage.setItem(inName, inemail);

		$('#message').html('Data Entered');
		$('#eName').html(inName);
		$('#eemail').html(localStorage.getItem(inName));

	} else{
		$('#message').html('Key Error: no data entered');
	}


}



var exObject = {

	getName: function (){
		return this.name;
	},

	setName: function (val){
		this.name = val;
	},

	getNumber: function (){
		return this.number;
	},

	setNumber: function (val){

		this.number = val;
	},
}

function showRetObj (obj) {

	console.log(obj);

	$('#objName').attr('placeholder', obj.name);
	$('#objNumber').attr('placeholder', obj.number);

}


// The function below is to reflect the contents of the javascript file back to the HTML Page
function reflectCode(){
	$.get('js/localStorage.js', function(data) {
	   $('#codeExample').text(data);
	}, 'text');
}
