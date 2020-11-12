//Call setClock every 1 second
setInterval(function(){
    let og = new Date();
    //console.log(og.getDay(),og.getDate(), og.getMonth()+1, og.getFullYear());
    setClock(og.getHours(), og.getMinutes(), og.getSeconds());
}, 500);

setDate();
function setDate() {
    let CURRDAY = new Date();
    let dayNum = CURRDAY.getDate();
    console.log(dayNum)
    let day = CURRDAY.toLocaleDateString('default', {weekday: 'long'});
    let month = CURRDAY.toLocaleDateString('default', {month: 'long'});

    let dateths = ["st","nd","rd","th"];
    
    /* st nd rd th th th th th th th  */
    

    document.getElementById('dayNum').innerText = dayNum;
    document.getElementById('day').innerText = day;
    document.getElementById('month').innerText = month;

}
//Set the hours/minutes/seconds of the current time
function setClock(hours, minutes, seconds){
    //console.log(hours, minutes, seconds)
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;  
}