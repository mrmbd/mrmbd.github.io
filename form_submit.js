$('#loanchanger').val(document.URL.split('price=')[1].split('&')[0]-document.URL.split('downPayment=')[1].split('&')[0]);


var xmlhttp = new XMLHttpRequest();

  var nameregex = /^[a-zA-Z ]*$/;
  var emailregex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var telregex = /^[0-9]{10,11}$/;
  var emptyregex = /^\s*$/;
  var field1 = document.URL.split('price=')[1].split('&')[0];
  var field2 = document.URL.split('downPayment=')[1].split('&')[0];
  var field3 = document.URL.split('tenure=')[1].split('&')[0];
  var tenuretypestr = document.URL.split('tenureType=')[1].split('&')[0];
  var field4 = 'Fixed '+tenuretypestr[tenuretypestr.length -1]+' tahun';
  var field5 = $('#thename').val();
  var field6 = $('#theemail').val();
  var field7 = $('#thetel').val();
  var field8 = $('#loanchanger').val();
  var field9 = $('#detail-input-0').val();
  var field10 = $('#detail-input-1').val();

$('#apply-button').on('click touch', function () {

  var field5 = $('#thename').val();
  var field6 = $('#theemail').val();
  var field7 = $('#thetel').val();
  var field8 = $('#loanchanger').val();
  var field9 = $('#detail-input-0').val();
  var field10 = $('#detail-input-1').val();

  var a = "https://docs.google.com/forms/d/e/1FAIpQLSfbJBUalJ3mNj-Vjil_YL2cY5YciGccIL-nIVD45peK3dVKPQ/formResponse?entry.1340745339="+field1+"&entry.1526534170="+field2+"&entry.2121028643="+field3+"&entry.72327536="+field4+"&entry.1438658676="+field5+"&entry.1890467117="+field6+"&entry.593202483="+field7+"&entry.485263604="+field8+"&entry.1395256618="+field9+"&entry.2013415618="+field10;

  if (emptyregex.test(field5)) {
    alert("tolong isi semua kolom");
    return 0;
  }

  if (emptyregex.test(field6)) {
    alert("tolong isi semua kolom");
    return 0;
  }

  if (emptyregex.test(field7)) {
    alert("tolong isi semua kolom");
    return 0;
  }

  if (!nameregex.test(field5)) {
    alert("masukkan nama yang valid");
    console.log(field5);
  } else {
    if (!emailregex.test(field6)) {
      alert("masuk kan email yang benar");
    } else {
      if (!telregex.test(field7)) {
        alert("masukkan nomor telepon yang valid");
      } else {
        a = encodeURI(a);
        $('#apply-right-col').html('<p>Data Anda telah berhasil dikirim. Anda akan dihubungi melalui telepon dalam 24 jam untuk dibantu dengan pengiriman KPR Anda. Tolong pastikan untuk menjawab telepon. Terima Kasih.</p>');
        xmlhttp.open("POST", a, false);
        xmlhttp.send();
      }
    }
  }
});
