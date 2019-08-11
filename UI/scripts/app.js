var sb = document.getElementById('sb');
sb.addEventListener('click', function(event) {
    event.preventDefault();
    var pw = document.getElementById('pw');
    var cpw = document.getElementById('cpw');
    //alert (pw.value+cpw.value);
    if (pw.value == cpw.value) {
       // alert ("password are the same");

    }
  else {
     // alert ("not the same");
     var error = document.getElementById('error');
     error.innerText="passwords are not the same";
     error.hidden= false;
  }

});

var pw = document.getElementById('pw');
pw.addEventListener('blur' ,function() {
    if (pw.value.length>=6) {
    //    alert ("correct password length" );

    }else {
        //alert("password  is too short");
        var error = document.getElementById('error');
        error.innerText="password is too short";
        error.hidden= false;

    }
});

pw.addEventListener('focus' ,function () {
    var error = document.getElementById('error');
    error.innerText="";
});
