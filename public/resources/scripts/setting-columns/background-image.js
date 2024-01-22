toastr.options = {
	"closeButton": false,
	"debug": false,
	"newestOnTop": false,
	"progressBar": true,
	"positionClass": "toast-bottom-left",
	"preventDuplicates": false,
	"onclick": null,
	"showDuration": "300",
	"hideDuration": "1000",
	"timeOut": "5000",
	"extendedTimeOut": "1000",
	"showEasing": "swing",
	"hideEasing": "linear",
	"showMethod": "fadeIn",
	"hideMethod": "fadeOut"
};

document.addEventListener("DOMContentLoaded", function() {
	const lastBackground = localStorage.getItem("backgroundImage");
	if (lastBackground) {
		document.body.style.backgroundImage = `url('${lastBackground}')`;
		document.getElementById("imageUrl").value = lastBackground;
	}
});

function changeBackground() {
	document.getElementById("canvas").style.display = "none";
	const imageUrl = document.getElementById("imageUrl").value.trim();
	if (imageUrl === "") {
		toastr.error("Please enter an image URL.", "Error");
		return;
	}

	const img = new Image();
	img.onload = function() {
		document.body.style.backgroundImage = `url('${imageUrl}')`;
		localStorage.setItem("backgroundImage", imageUrl);
		toastr.success("Your changes have been saved.", "Success!");
	};

	img.onerror = function() {
		toastr.error("Please recheck your spelling or URL.", "Error");
	};

	img.src = imageUrl;
}

function resetBackground() {
	toastr.success("Your changes have been saved.", "Background has been reset!");
	document.body.style.backgroundColor = "#111";
	document.body.style.backgroundImage = "";
	document.getElementById("canvas").style.display = "block";
	localStorage.removeItem("backgroundImage");
	document.getElementById("imageUrl").value = "";
}
