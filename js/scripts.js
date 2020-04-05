
function calcFields() {
  var   origFlrSize = parseInt($('#target').val()),
        origProtein = parseInt($('#target3').val()),
        ProPcnt = Math.abs((origProtein/origFlrSize)*100).toFixed(2),
        FlrAmt = parseFloat($('#target5').val()),
        FlrUnit = $('#targetunit').val(),
        WantedPro = parseInt($('#target6').val()),
        FlrGrPerCup = parseInt($('#targetgramspercup').val())
      ;

  if (FlrUnit == 'cups') {
    FlrAmt = FlrAmt * FlrGrPerCup;
  }

  var   WhtGltnNeed = Math.abs((((WantedPro - ProPcnt)/100)/(0.75 - (ProPcnt/100)))*FlrAmt).toFixed(2),
        YourFlourNeed = (FlrAmt - WhtGltnNeed).toFixed(2)
     ;

  console.log(origFlrSize + ", " + origProtein + ", " + ProPcnt + ", " + FlrAmt + ", " + WantedPro + ", " + YourFlourNeed + ", " + WhtGltnNeed);
  $('#target4').html(ProPcnt);
  $('#target7').html(YourFlourNeed);
  $('#target8').html(WhtGltnNeed);
}

function swapUnits() {
  var   FlrGrPerCup = parseInt($('#targetgramspercup').val()),
        FlrAmt = parseFloat($('#target5').val()),
        FlrUnit = $('#targetunit').val()
      ;

  if (FlrUnit == 'cups') {
    FlrAmt = (FlrAmt / FlrGrPerCup).toFixed(2);
  } else {
    FlrAmt = (FlrAmt * FlrGrPerCup).toFixed(0);
  }

  console.log(FlrAmt + " " + FlrUnit);
  $('#target5').val(FlrAmt);
  calcFields();
}
$(function() {

  // $('#clickHere').on('click', function() {
  $('input').on('keyup', function() {
      calcFields();
  });
  $('#targetunit').on('change', function() {
      swapUnits();
  });

  calcFields();

  $('#FlourWhtGlutnFormula').flip({
    trigger: 'manual'
  });

  $('#CardNav a').on('click',function(event) {
    if (!$(this).hasClass('Current')) {
      $("#FlourWhtGlutnFormula").flip('toggle');
      $('#CardNav a').removeClass('Current');
      $(this).addClass('Current');
      console.log('link clicked, no current class');
    }
    event.preventDefault();
  })


  $( "#AboutToggle" ).click(function() {
    $( "#AboutInfo" ).slideToggle( "fast", function() {
      // Animation complete.
    });
    $(this).toggleClass("DetailOpen");
    event.preventDefault();
  });

});
