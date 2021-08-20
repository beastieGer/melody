$(document).ready(function () {
	let currentFloor = 2;
	let floorPath = $(".home-image path");
	let counterUp = $(".counter-up");
	let counterDown = $(".counter-down");
	let modal = $(".modal");
	let modalCloseButton = $(".modal-close-button");
	let viewFlatsButton = $(".view-flats");

	let usCurrentFloor = currentFloor.toLocaleString("en-US", {
		minimumIntegerDigits: 2,
		useGrouping: false,
	});

	$(".home-image path").on("mouseover", function () {
		currentFloor = $(this).attr("data-floor");
		$(".counter").text(currentFloor);

		floorPath.removeClass("current-floor");
	});

	floorPath.on("click", toggleModal);
	modalCloseButton.on("click", toggleModal);
	viewFlatsButton.on("click", toggleModal);

	counterUp.on("click", function () {
		if (currentFloor < 18) {
			currentFloor++;
			usCurrentFloor = currentFloor.toLocaleString("en-US", {
				minimumIntegerDigits: 2,
				useGrouping: false,
			});
			$(".counter").text(usCurrentFloor);

			floorPath.removeClass("current-floor");
			$(`[data-floor=${usCurrentFloor}]`).addClass("current-floor");
		}
	});

	counterDown.on("click", function () {
		if (currentFloor > 2) {
			currentFloor--;
			usCurrentFloor = currentFloor.toLocaleString("en-US", {
				minimumIntegerDigits: 2,
				useGrouping: false,
			});
			$(".counter").text(usCurrentFloor);

			floorPath.removeClass("current-floor");
			$(`[data-floor=${usCurrentFloor}]`).addClass("current-floor");
		}
	});
	function toggleModal() {
		modal.toggleClass("is-open");
	}
});
