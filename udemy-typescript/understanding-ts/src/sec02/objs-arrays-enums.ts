// const person: {
//     name: string; // object
//     age: number; // object
//     hobbies: string[]; //array 한가지 타입만 제공
//     role: [number, string]; //Tuple 개수가 지정된다. 타입스크립트에서만 제공
// } = {
//     name: 'Maximilian',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// }

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR'};

const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
};

// person.role.push('admin'); // 에러가 발생하진 않는다.
// person.role[1] = 10; // 2번째 자리에 string으로 타입지정을 해두었기 때문에 에러발생

// person.role = [0, "admin", "user"]; // 2개의 값만 타입지정해 두었기 때문에 에러발생

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());   
}

if (person.role === Role.AUTHOR){
    console.log('is author')
}