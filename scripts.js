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
