var list = [1,2,3,4,5,6,7,8,9];

var a = list.every((item) => {
    return item>0;
});

var b =list.filter((x) => {
    return x>4;
});

var c = list.filter((x) => {
    return x%2===1;
});

var d = list.some((x) => {
    return x<0;
});
var newList = [];
list.forEach((item) => {
    newList.push(item);
});

var reduceResult = list.reduce(function(pre,cur,index){
    return pre*cur;
})

console.log(reduceResult);

console.log(list);
console.log(newList);



