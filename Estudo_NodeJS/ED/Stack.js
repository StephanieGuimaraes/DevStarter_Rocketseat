/*
*Stack = Pilha
*linear, um após o outro
*O último a entrar na pilha é o primeiro a sair (LIFO)
*/

//modelagem
class Stack{
    //constructor = funcao que vai ser executada assim q o objeto for criado
    constructor(){
        this.data = []
        this.top = -1
    }
    push(value){
        this.top++
        this.data[this.top] = value
        return this.data
    }

    pop(){
        if(this.top < 0) return undefined
        const poppedTop = this.data[this.top]
        delete this.data[this.top]
        this.top--
        return poppedTop 
    }
    peek(){
        return this.top >= 0 ? this.data[this.top] : undefined
    }
}
//"new Stack" istancia um novo objeto, transformando stack em um objeto
const stack = new Stack()

//adiciona dados
stack.push('learning')
stack.push('Data')
stack.push('Steph')
console.log(stack)
console.log(stack.peek())
stack.pop
console.log(stack.pop())
console.log(stack.peek())