$(document).ready(function() {
	$('body').prepend('<div class="header" id="header"><h3>Welcome to WeeklyHow</h3></div>');
	$('head').prepend('<style>#header { padding: 12px 18px; background: #555; color: #f1f1f1; } .content { padding: 16px; } .sticky { position: fixed; top: 0; width: 100%; } .sticky + .content { padding-top: 100px; }</style>');


	var header = document.getElementById("header");
	var sticky = header.offsetTop;

	window.onscroll = function() {
		if(window.pageYOffset > sticky) {
			header.classList.add("sticky");
		} else {
			header.classList.remove("sticky");
		}
	};
});