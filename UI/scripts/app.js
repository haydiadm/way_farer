var sb = document.getElementById('sb');
sb.addEventListener('click', function(event) {
    event.preventDefault();
    var pw = document.getElementById('pw');
    var cpw = document.getElementById('cpw');
    //alert (pw.value+cpw.value);
    if (pw.value.length>=6) {
        alert ("correct password length" );
         if (pw.value == cpw.value) {
             alert ("password are the same");

         }
       else {
           alert ("not the same");
       }
    }else {
        alert("password  is too short");
    }
});
