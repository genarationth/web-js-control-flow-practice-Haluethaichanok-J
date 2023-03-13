let dayNumber=0;
let day;

function findDayNumber(day){
    
switch(day){
    case 0 : day = 'Sunday';
    break;
    case 1 : day = 'Monday';
    break;
    case 2 : day = 'Tuesday';
    break;
    case 3 : day = 'Wednesay';
    break;
    case 4 : day = 'Thursay';
    break;
    case 5 : day = 'Friday';
    break;
    case 6 : day = 'Saturday';
    break;
default : day = 'Invalid day number';
}
console.log(day);}


findDayNumber(0);
findDayNumber(1);
findDayNumber(2);
findDayNumber(3);
findDayNumber(4);
findDayNumber(5);
findDayNumber(6);
findDayNumber(10);

