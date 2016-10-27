var CALC = {
				
	onReady: function() {
		$('#rate').focus();
		$('button.reset').hide();
		$('button.calculate').click(CALC.calculate);
		$('button.reset').click(CALC.reset);
	},
	
	calculate: function(event) {
		// Get quantity
	var rate = $('#rate').val();

	// Get price
	var sumassured = $('#sumassured').val();
	
	var value = $('#value').val();
	
	var levy = $('#levy').val();
	
	var fee = $('#fee').val();

	var totalCost = rate * sumassured / value - (rate * sumassured / value )/100*3 - fee ;
	totalCost=totalCost.toFixed(2);

	// Set total cost
	$('#total').val(totalCost);
	
	$('button.calculate').hide();
	$('button.reset').show();
	
	},
	
	reset: function(event) {
		$('#rate').val('');
		$('#sumassured').val('');
		$('#value').val('');
		$('#levy').val('');
		$('#fee').val('');
		$('#total').val('');
		$('#quantity').focus();
		$('button.calculate').show();
		$('button.reset').hide();
	}
};
	
$(document).ready(CALC.onReady);