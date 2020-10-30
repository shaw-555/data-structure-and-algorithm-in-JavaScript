function Stack() {
    // to create a stack 
    var items = [];

    // to add a push method
    this.push = function(element){
        items.push(element);
    }
    
    //to add a pop method
    this.pop = function(){
        return items.pop();
    }

    // to add a peek method
    this.peek = function(){
        return items[items.length -1 ];
    }
    // to add a isEmpyt method
    this.isEmpty = function(){
        return items.length === 0;
    }
    // to add a size method
    this.size = function(){
        return items.length;
    }
    // to add a clear method
    this.clear = function(){
        items = [];
    }
    // to add a print method
    this.print = function(){
        console.log(items.toString());
    }
}

function divideBy2 (decNumber) {
    var remStack = new Stack();
        rem, 
        binaryString = '';
    
    while(decNumber > 0){
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor( decNumber / 2);
    }

    while(!remStack.isEmpty()){
        binaryString += remStack.pop().toString();
    }
}

function baseConverter (decNumber, base){
    var remStack = new Stack(),
        rem,
        baseString = '',
        digits = '0123456789ABCDEF';

    while (decNumber > 0){
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
        console.log(rem);
        
    }
    
    while (!remStack.isEmpty()){
        var i = remStack.pop()
        baseString += digits[remStack.pop()];
        console.log('every i is'+ i);
        
    }

    
    return baseString;
}

var c = baseConverter(10000,2);
console.log('test1'+c);
