/*global $, jQuery, alert*/
$(function () {
    'use strict';
 //    $('#countdown').countdown('2018/1/1', function(event) {
	//   var $this = $(this).html(event.strftime(''
	//     + '<span>%w</span> Weeks '
	//     + '<span>%d</span> Days '
	//     + '<span>%H</span> Hr '
	//     + '<span>%M</span> Min '
	//     + '<span>%S</span> Sec'));
	// });

	var clock;
	// Grab the current date
	var currentDate = new Date();

	// Set some date in the future. In this case, it's always Jan 1
	var futureDate  = new Date(currentDate.getFullYear() + 1, 0, 1);

	// Calculate the difference in seconds between the future and current date
	var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

	// Instantiate a coutdown FlipClock
	clock = $('#countdown').FlipClock(diff, {
		clockFace: 'DailyCounter',
		countdown: true
	});

});