function Stack() {
    // to create a stack 
    var items = [];

    // to add a push method
    this.push = function(element){
        items.push(element);
    }
    
    //to add a pop method
    this.pop = function(){
        items.pop();
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

var c = new Stack;
c.push(1);
c.push(2);
c.push(3);
c.push(4);
c.print();
c.pop();

var peek = c.peek();
console.log(peek);

