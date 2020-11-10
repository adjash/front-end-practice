//Call setClock every 1 second
setInterval(function(){
    let og = new Date();
    let months = og.toLocaleString('default', {month: 'long'});
    console.log(months)
    
    //console.log(og.getDay(),og.getDate(), og.getMonth()+1, og.getFullYear());
    setClock(og.getHours(), og.getMinutes(), og.getSeconds());
}, 500)

function setDate() {

}
//Set the hours/minutes/seconds of the current time
function setClock(hours, minutes, seconds){
    //console.log(hours, minutes, seconds)
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;  
}