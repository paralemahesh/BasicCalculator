
class Stack {
    constructor(){
        this.stack = []
        this.count = 0;
    }

    // Stack
    push(element) 
    { 
        console.log(`push: ${element}`)
        // push element into the items 
        this.stack.push(element); 
        this.count++;
        console.log(`push - stack after push: ${this.stack}`)
    } 

    // pop function 
    pop() 
    { 
        // return top most element in the stack 
        // and removes it from the stack 
        // Underflow if stack is empty 
        if (this.stack.length === 0) 
            return "Underflow"; 
        let topElement = this.stack.pop();
        this.count--;
        return topElement;
    } 
        
    // peek function 
    peek() 
    { 
        // return the top most element from the stack 
        // but does'nt delete it. 
        return this.stack[this.stack.length - 1]; 
    } 

    // isEmpty function 
    isEmpty() 
    { 
        // return true if stack is empty 
        return this.stack.length === 0; 
    } 

    // printStack function 
    printStack() 
    { 
        console.log(`printStack : ${this.stack}`)
        var str = ""; 
        for (var i = 0; i < this.stack.length; i++) 
            str += this.stack[i] + " "; 
        return str.replace(/ /g, ''); 
    } 

    // size function
    size(){
        return this.count;
    }
}

export default (Stack)