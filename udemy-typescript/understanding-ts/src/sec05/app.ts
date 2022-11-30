// type AddFn = (a: number, b: number) => number; //사용자 정의함수 방식
interface AddFn {
    (a: number, b: number ): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Named {
    readonly name?: string; //물음표를 통해 name을 optional하게 적용한다.
    outputName?: string; //물음표를 통해 ouputName을 optional하게 적용한다.
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string; //물음표를 통해 name을 optional하게 적용한다.
    age = 30;

    constructor(n?: string){ //물음표를 통해 매개변수를 optional하게 적용한다.
        if(n){// 빈 문자열로 올 시 name이 설정되지 않게 끔한다.
            this.name = n;
        }
    }

    greet(phrase: string) {
        if(this.name){
            console.log(phrase + ' ' + this.name);
        } else {
            console.log("Hi!");
        }
    }
}

let user1: Greetable;

user1 = new Person();
// user1.name = 'Manu'; //readonly설정으로 변경 불가.

user1.greet('Hi there - I am Max');
console.log(user1)