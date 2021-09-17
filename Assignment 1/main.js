/*
	WEB 303
	Starting file for Assignment 1 
	Nguyen Le
*/

$(document).ready(function(){
	let salary = $("input#salary").change(function(){
		console.log($("input#salary").val());
		gadget();
	});
	
	let percent = $("input#percent").change(function(){
		console.log($("input#percent").val());
		gadget();
	});

	//let spend = parseInt($(sal2) * $(percent2) / 100).toFixed(2);
	//let spend2 = document.querySelector("#spend");

	//spend2.replaceWith(spend);

	function gadget(){
		$('#spend').html('$ ' + (parseInt($("input#salary").val()) * parseInt($("input#percent").val()) / 100));
	};

});

//salary * percent / 100


// just update to change upon input