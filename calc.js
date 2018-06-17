
function pmt(rate_per_period, number_of_payments, present_value, future_value, type){
    if(rate_per_period != 0.0){
        // Interest rate exists
        var q = Math.pow(1 + rate_per_period, number_of_payments);
        return -(rate_per_period * (future_value + (q * present_value))) / ((-1 + q) * (1 + rate_per_period * (type)));

    } else if(number_of_payments != 0.0){
        // No interest rate, but number of payments exists
        return -(future_value + present_value) / number_of_payments;
    }

    return 0;
}

const numberWithCommas = (x) => {
  var parts = x.toString().split(",");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return parts.join(",");
}

const numberWithDot = (x) => {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

$("input,select").change(function(){
  if($( "#totalpropprice" ).hasClass( "has-error" ) || $( "#totalcreditprice" ).hasClass( "has-error" )) {

  } else {
      var price,dp,tenure,tenuretype,status;
      price = $('#simulation-price').val().replace(/\./g,'');
      dp = $('#simulation-dp').val().replace(/\./g,'');
      tenure = $('#simulation-tenure').val();
      tenuretype = $('#simulation-tenure-type').val();
      status = $('#simulation-financing-status').val();
      var balance = price-dp;
      $('#simulation-result').text('Rp'+numberWithCommas(Math.round(-pmt(tenuretype/12,tenure*12,balance,0,0))));
      $('#product-info-installment').text('Rp'+numberWithCommas(Math.round(-pmt(tenuretype/12,tenure*12,balance,0,0))));
      $('#simulation-interest').text(numberWithDot(tenuretype*100)+'%');
      $('#product-info-interest').text(numberWithDot(tenuretype*100)+'%');
      $('#simulation-loan-amount').text('Rp'+numberWithCommas(balance));
  }
});
