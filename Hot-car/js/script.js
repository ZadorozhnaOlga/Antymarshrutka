var infoRegister = function () {
		var email = document.getElementById('mail').value;
        alert('На вашу пошту ' + '"' + email  + ' " ' + 'надіслано запит про підтвердження.');
    }

var fullInfo = function(){
	$sidebar = $("#sidebar");
	$sidebar.css("display", "none");
	$sidebar = $("#fullsidebar");
	$sidebar.css("display", "block");
}