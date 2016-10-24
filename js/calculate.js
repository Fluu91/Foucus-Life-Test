var CALC = {
				
	onReady: function() {
		$('#quantity').focus();
		$('button.reset').hide();
		$('button.calculate').click(CALC.calculate);
		$('button.reset').click(CALC.reset);
	},
	
	calculate: function(event) {
		// Get quantity
	var quantity = $('#quantity').val();

	// Get price
	var cost = $('#price').val();
	
	var value = $('#value').val();
	
	var levy = $('#levy').val();
	
	var fee = $('#fee').val();

	var totalCost = quantity * cost / value - levy - fee ;
	totalCost=totalCost.toFixed(2);

	// Set total cost
	$('#total').val(totalCost);
	
	$('button.calculate').hide();
	$('button.reset').show();
	
	},
	
	reset: function(event) {
		$('#quantity').val('');
		$('#price').val('');
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