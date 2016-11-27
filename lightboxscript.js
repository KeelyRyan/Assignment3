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
