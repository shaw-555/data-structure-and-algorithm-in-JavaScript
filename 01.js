var weekDay = ['sun','mon','tus','wed','thu','fri','sat'];
console.log(weekDay.length);

for(var i = 0; i<weekDay.length; i++){
    console.log(weekDay);
    
}
// to add an element
for(var i=weekDay.length; i>=0 ; i--){
    weekDay[i] = weekDay[i-1];
}
weekDay[0]='eng';

// to delete an element
for(var i =0; i<weekDay.length ; i++){
    weekDay[i] = weekDay[i+1];
}

console.log(weekDay);