
var str = '123';

function changeScalar(x){
    x = 456;
}

changeScalar();

console.log('原始类型作为参数传入函数时，出入的是参数的副本，所以副本的改变不会影响其本身，所以它还是:'+str);


var obj ={
    a: 13,
    b: 20
}

function changeObj(x){
    x.a = '1000';
    x = [];
    x.push(123);
    return x;
}
var test = changeObj(obj);
changeObj(obj);
console.log('引用类型进入函数后，传入的是引用类型的地址，所以对参数的更改会作用到其本身',obj);
console.log('参数在函数内指向另一个数组后，则不再指向先前的地址，进而指向新的地址，所以会返回push后的数组'+test);

