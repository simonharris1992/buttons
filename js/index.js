$( document ).ready(function() {
	fButton1Dimensions();
	fButton2Dimensions();
	fButton3Dimensions();
	fButton4Dimensions();
	fButton5Dimensions();
});

function fButton1Dimensions(){
	nButton1Height = $('#button-col-1').height();
	nButton1Width = $('#button-col-1').innerWidth();
	$('#button-background-container-1').height(nButton1Height);
    $('#button-background-div-1').height(nButton1Height);  
	$('#button-border-1').height(nButton1Height-6);
	$('#button-background-container-1').width(nButton1Width);
    $('#button-background-div-1').width(nButton1Width);
	$('#button-border-1').width(nButton1Width-6);
}

function fButton2Dimensions(){
	nButton2Height = $('#button-col-2').height();
	nButton2Width = $('#button-col-2').innerWidth();
	$('#button-background-container-2').height(nButton2Height);
    $('#button2-background-div-1').height(nButton2Height);   
	$('#button2-background-div-2').height(nButton2Height);  
	$('#button-border-2').height(nButton2Height-6);
	$('#button-background-container-2').width(nButton2Width);
    $('#button2-background-div-1').width(nButton2Width);  
	$('#button2-background-div-2').width(nButton2Width);
	$('#button-border-2').width(nButton2Width-6);
}

function fButton3Dimensions(){
	nButton3Height = $('#button-col-3').height();
	nButton3Width = $('#button-col-3').innerWidth();
	$('#button-background-container-3').height(nButton3Height);
    $('#button3-background-div-1').height(nButton3Height);  
	$('#button-border-3').height(nButton3Height-6);
	$('#button-background-container-3').width(nButton3Width);
    $('#button3-background-div-1').width(nButton3Width);
	$('#button-border-3').width(nButton3Width-6);
}

function fButton4Dimensions(){
	nButton4Height = $('#button-col-4').height();
	nButton4Width = $('#button-col-4').innerWidth();
	$('#button-background-container-4').height(nButton4Height);
    $('#button4-background-div-1').height(nButton4Height);  
	$('#button-border-4').height(nButton4Height-6);
	$('#button-background-container-4').width(nButton4Width);
    $('#button4-background-div-1').width(nButton4Width);
	$('#button-border-4').width(nButton4Width-6);
}

function fButton5Dimensions(){
	nButton5Height = $('#button-col-5').height();
	nButton5Width = $('#button-col-5').innerWidth();
	$('#button-background-container-5').height(nButton5Height);
    $('#button5-background-div-1').height(2*nButton5Height);  
	$('#button-border-5').height(nButton5Height-6);
	$('#button-background-container-5').width(nButton5Width);
    $('#button5-background-div-1').width(nButton5Width);
	$('#button-border-5').width(nButton5Width-6);
}