 function start(){
	var hasError=clicked();
	if(hasError=="") { 
	var myarray = new Array();
	$('.input').each(function() {
		myarray[this.id]=this.value;
	});
	sendoff(myarray);
	}
	else{
	alert(hasError);
	}
	
 }
 
	function sendoff(myarray){
	var xmlhttp;
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	 alert(xmlhttp.responseText);
	 var redirect="?";
	for(i in myarray){
	redirect+= i+"="+myarray[i]+"&";
	}
	 window.location = "http://osher.co.za/search.html"+redirect+"a=asd";
		$('.loading').css("visibility","hidden");
        }
  };
        $('.inputbox').fadeTo ( 'slow', 0.30 );
        $('.button').fadeTo ( 'slow', 0.30 );
        $('.requiredField').each(function() {
		$(this).attr("disabled", "disabled");
		});
		$('.button').attr("disabled", "disabled");
		$('.loading').css("opacity",1);
		$('.loading').css("visibility","visible");
  xmlhttp.open("POST","email.php",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	var send="";
	for(i in myarray){
	send+= i+"="+myarray[i]+"&";
	}
	xmlhttp.send(send+"done=yes");
	}
	
	function clicked(){
	var hasError="";
	
$('.requiredField').each(function() {
    if($.trim($(this).val()) == '') {
        hasError='Please fill required fields';
    } else if($(this).hasClass('email')) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if(!emailReg.test($.trim($(this).val()))) {
            hasError='Sorry! You\'ve entered an invalid email';
        }
    }
});
return hasError;

}
