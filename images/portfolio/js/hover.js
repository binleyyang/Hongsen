$(document).ready(function() {


		$('#update-hover').hover(function() {
			$('#update').fadeIn(150);
			return false;
		}, function() {
			$('#update').mouseout(function() {
				$('#update').fadeOut();
			});
		});

		$('#contact-hover').hover(function() {
			$('#contact').fadeIn(150);
			return false;
		}, function() {
			$('#contact').mouseout(function() {
				$('#contact').fadeOut();
			});
		});

		$('#services-hover').hover(function() {
			$('#services').fadeIn(150);
			return false;
		}, function() {
			$('#services').mouseout(function() {
				$('#services').fadeOut();
			});
		});

});