//Variables

var P = 0, HU = 0, HUZ, ECO = 0, d1, d2, d3, Y, STU = 0, d4, L, K, VS = 0, HW, TK, d5, Z, VW, KS = 0, M = 0, F = 0, H = 0, MS = 0, MD = 0, S = 0;

$( "#quiz-start" ).click(function() {
  $("#title").addClass("disp-non");
  $(".active").removeClass("active");
  $("#intro").addClass("disp-non");
  $("#q1").removeClass("disp-non");
  $("#q1").addClass("active");
  $(".header-title").text($("#q1").data("heading"));
  $("#controls").removeClass("disp-non");
  $(".progress-bar").css("width",$("#q1").data("progress")+"%");
});

$( ".quiz-btn" ).click(function() {
  if (!$(this).is("input")) {
    $(this).parent().children().removeClass('selected');
    $(this).addClass('selected');
    $("#next").removeClass("disabled");
    if ($(this).is("button")) {
      setTimeout(function(){ next() }, 250);
    }
  }
});

$(':input[type="number"]').on("input", function() {
  input(this);
});

function input(element) {
  var x = true;
  $('.active :input[type="number"]').each(function( index ) {
    if ($( this ).val() == "") {
      x = false;
    }
  });
    if($(element).val() != "" && x) {
      $(element).addClass('selected');
      $("#next").removeClass("disabled");
    } else {
      $(element).parent().children().removeClass('selected');
      $("#next").addClass("disabled");
    }
}

$('select').on('change', function() {
  select(this);
});

function select(element) {
  var x = true;
    $('.active select').each(function( index ) {
      if ($( this ).val() == "") {
        x = false;
      }
    });
      if($(element).val() != "" && x) {
        $(element).addClass('selected');
        $("#next").removeClass("disabled");
      } else {
        $(element).parent().children().removeClass('selected');
        $("#next").addClass("disabled");
      }
}

$("#prev").click(function() {
  if ($('.active').attr('id') == 'q1') {
    $("#title").removeClass("disp-non");
    $(".active").removeClass("active");
    $("#intro").removeClass("disp-non");
    $("#q1").addClass("disp-non");
    $("#intro").addClass("active");
    $(".header-title").text('INTRO');
    $("#controls").addClass("disp-non");
  } else {
    var current = $(".active").attr('id').replace('q','');
    var back = $(".active").data("back");
    $(".active").removeClass("active");
    $("#q"+back).addClass("active");
    $("#q"+current).addClass("disp-non");
    $("#q"+back).removeClass("disp-non");
    $(".header-title").text($("#q"+back).data("heading"));
    if ($("#q"+back).find(".quiz-btn").hasClass("selected")) {
      $("#next").removeClass("disabled");
    } else {
      $("#next").addClass("disabled");
    }
    $(".progress-bar").css("width",$("#q"+back).data("progress")+"%");
    if (parseInt($("#q"+back).data("progress")) > 24) {
      $('.circles-1 .progress-meter-fill').css('fill',"#27a330");
      if (parseInt($("#q"+back).data("progress")) > 49) {
        $('.circles-2 .progress-meter-fill').css('fill',"#27a330");
        if (parseInt($("#q"+back).data("progress")) > 74) {
          $('.circles-3 .progress-meter-fill').css('fill',"#27a330");
        } else {
          $('.circles-3 .progress-meter-fill').css('fill',"#e0e0e0");
        }
      } else {
        $('.circles-2 .progress-meter-fill').css('fill',"#e0e0e0");
        $('.circles-3 .progress-meter-fill').css('fill',"#e0e0e0");
      }
    } else {
      $('.circles-1 .progress-meter-fill').css('fill',"#e0e0e0");
      $('.circles-2 .progress-meter-fill').css('fill',"#e0e0e0");
      $('.circles-3 .progress-meter-fill').css('fill',"#e0e0e0");
    }
  }
});

$("#next").click(function() {
  next();
});

function next() {
  if (!$("#next").hasClass("disabled")) {
    var current = $(".active").attr('id').replace('q','');
    var increment = $(".active .selected").data("forward");
    if (increment != 21) {
      $("#q"+increment).data("back",current)
    }
    if ($('.active').attr('id') == 'q1') {
      if ($(".active").data("value") == "2") {
        P = 0;
        HU = 0;
        ECO = 0;
      }
    }
    if ($('.active').attr('id') == 'q2') {
        d1 = parseInt($("#d1").val());
        d2 = parseInt($("#d2").val());
        d3 = d1 + d2;
        P = (34*d1)+(17*d2);
        Y = parseInt($("#Y").val());
    }
    if ($('.active').attr('id') == 'q3') {
        d2 = parseInt($(".active .selected").val());
        d3 = d1 + d2;
        P = (34*d1)+(17*d2);
    }
    if ($('.active').attr('id') == 'q4') {
        Y = parseInt($(".active .selected").val());
    }
    if ($('.active').attr('id') == 'q5') {
        ECO = parseInt($(".active .selected").val());
    }
    if ($('.active').attr('id') == 'q6') {
        HUZ = parseInt($(".active .selected").data("value"));
        if (HUZ == 1) {
            HU = (17+(7*Y))*d3*0.35;
        } else {
            HU = (17+(7*Y))*d3*0.65;
        }
    }
    if ($('.active').attr('id') == 'q7') {
      if ($(".active .selected").data("value") == "2") {
        STU = 0;
      }
    }
    if ($('.active').attr('id') == 'q8') {
        d4 = parseInt($(".active .selected").val());
    }
    if ($('.active').attr('id') == 'q9') {
      if ($(".active .selected").data("value") == "2") {
        L = 0;
      }
    }
    if ($('.active').attr('id') == 'q10') {
        L = parseInt($(".active .selected").val());
    }
    if ($('.active').attr('id') == 'q11') {
        K = parseInt($(".active .selected").val());
        STU = (15 * d4) + (2500 * L) + (d3 * K/30);
    }
    if ($('.active').attr('id') == 'q12') {
      if ($(".active .selected").data("value") == "2") {
        VS = 0;
      }
    }
    if ($('.active').attr('id') == 'q13') {
        HW = parseInt($(".active .selected").val());
    }
    if ($('.active').attr('id') == 'q14') {
        TK = parseInt($(".active .selected").val());
    }
    if ($('.active').attr('id') == 'q15') {
        d5 = parseInt($(".active .selected").val());
    }
    if ($('.active').attr('id') == 'q16') {
        Z = parseInt($(".active .selected").val());
    }
    if ($('.active').attr('id') == 'q17') {
        VW = parseInt($(".active .selected").val());
        VS = HW + TK + ((d5 * Z) + VW + (VW * 0.1));
    }
    if ($('.active').attr('id') == 'q18') {
        KS = parseInt($(".active .selected").data("value"));
    }
    if ($('.active').attr('id') == 'q19') {
        M = parseInt($("#M").val());
        F = parseInt($("#F").val());
        H = parseInt($("#H").val());
        MS = parseInt($("#MS").val());
    }
    if ($('.active').attr('id') == 'q20') {
        MD = parseInt($(".active .selected").val());
        S = (P+HU+ECO)+(M+F+H)+STU+MS+VS+KS+MD+100;
        console.log(S);
    }
    if (increment != 21) {
      $(".active").removeClass("active");
      $("#q"+increment).addClass("active");
      $("#q"+current).addClass("disp-non");
      $("#q"+increment).removeClass("disp-non");
      $(".header-title").text($("#q"+increment).data("heading"));
      if ($("#q"+increment).find(".quiz-btn").hasClass("selected")) {
        $("#next").removeClass("disabled");
      } else {
        $("#next").addClass("disabled");
        if ($('.active .quiz-btn' ).first().is('input')) {
          input($('.active .quiz-btn' ).first());
        }
        if ($('.active .quiz-btn' ).first().is('select')) {
          select($('.active .quiz-btn' ).first());
        }
      }
      $(".progress-bar").css("width",$("#q"+increment).data("progress")+"%");
      if (parseInt($("#q"+increment).data("progress")) > 24) {
        $('.circles-1 .progress-meter-fill').css('fill',"#27a330");
        if (parseInt($("#q"+increment).data("progress")) > 49) {
          $('.circles-2 .progress-meter-fill').css('fill',"#27a330");
          if (parseInt($("#q"+increment).data("progress")) > 74) {
            $('.circles-3 .progress-meter-fill').css('fill',"#27a330");
          } else {
            $('.circles-3 .progress-meter-fill').css('fill',"#e0e0e0");
          }
        } else {
          $('.circles-2 .progress-meter-fill').css('fill',"#e0e0e0");
          $('.circles-3 .progress-meter-fill').css('fill',"#e0e0e0");
        }
      } else {
        $('.circles-1 .progress-meter-fill').css('fill',"#e0e0e0");
        $('.circles-2 .progress-meter-fill').css('fill',"#e0e0e0");
        $('.circles-3 .progress-meter-fill').css('fill',"#e0e0e0");
      }
    } else {
      $("#title2").removeClass("disp-non");
      $(".active").removeClass("active");
      $("#intro2").removeClass("disp-non");
      $("#q20").addClass("disp-non");
      $("#intro2").addClass("active");
      $(".header-title").text('RESULTAAT');
      $("#controls").addClass("disp-non");
      $(".super-big").html('<sup>€</sup>'+new Intl.NumberFormat('de-DE').format(S));
    }

    console.clear();
    console.log('S = '+S);
    console.log('P = '+P);
    console.log('HU = '+HU);
    console.log('ECO = '+ECO);
    console.log('M = '+M);
    console.log('F = '+F);
    console.log('H = '+H);
    console.log('STU = '+STU);
    console.log('MS = '+MS);
    console.log('VS = '+VS);
    console.log('KS = '+KS);
    console.log('MD = '+MD);

  }
}
