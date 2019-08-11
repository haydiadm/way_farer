
var Create_trip = document.getElementById('Create_trip');
Create_trip.addEventListener('click' ,function (event) {
    event.preventDefault();
    var from= document.getElementById('From');
    var to = document.getElementById('To');
//    alert(from.value + to.value );
if (from.value == to.value ) {
    var error = document.getElementById('error');
    error.innerText="choose another destanation";
    error.hidden= false;
}
});
