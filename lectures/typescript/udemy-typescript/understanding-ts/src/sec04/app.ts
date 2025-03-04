// let, const, var
// const userName = 'Max';
// userName = 'Maximilian;' //오류발생

// let age = 30;

// age = 29;

// function add(a: number, b: number){
//     let result = a + b;
//     return result;
// }

// if(age > 20){
//     let isOld = true;
// }

// console.log(isOld);
// console.log(result);

//Arrow Function

// const add = (a: number, b: number = 1) => a+b;

// console.log(add(2,5));

// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector('button');

// if(button){
//     button.addEventListener('click', event => console.log(event));
// }

// printOutput(add(5));

//Spread Operator
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];

activeHobbies.push(...hobbies);
//hobbies라는 해당 배열의 모든 요소를 하나씩 꺼내 넣어라

const person ={
    firstName: "Max",
    age: 30,
};

const copiedPerson = {...person};
// 객체의경우 키-값쌍으로 하나씩 꺼내어 리스트 목록을 넣는다.(복사본을 만드는경우)


// spread operator 활용
const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue)=>{
        return curResult + curValue;
    },0);
};
//reduce는 누적계산의 결과값을 내보낸다, 2번째 인자로 0은 initialValue이다.
const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);


// 디스트럭쳐링을 사용하지 않을경우
// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

// 디스트럭쳐링을 사용한 경우
const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;

console.log(userName, age, person);
