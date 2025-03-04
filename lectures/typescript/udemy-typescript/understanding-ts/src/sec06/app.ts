type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

//Admin과 Employee를 interface로 바꾸어주어도 같은 효과
// interface ElevatedEmployee extends Employee, Admin {} 

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable){
    if(typeof a === 'string' || typeof b === 'string'){ //이 라인을 타입가드라고 부른다.
        return a.toString() + b.toString();
    }
    return a+b;
}

const result = add('Max', ' Schwarz');
result.split(' ');

const fetchedUserData = {
    id: 'ul',
    name: 'Max',
    job: {title: 'CEO', description: 'My own company'}
};

console.log(fetchedUserData?.job?.title);

const userInput = undefined;

const storeData = userInput ?? 'DEFAULT';

console.log(storeData)

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInfromation(emp: UnknownEmployee) {
//     console.log('Name: ' + emp.name);
//     if ('privileges' in emp){
//         console.log('Privileges: ' + emp.privileges);
//     }
//     if ('startDate' in emp){
//         console.log('Start Date: ' + emp.startDate);
//     }
// }

// printEmployeeInfromation({name: 'Manu', startDate: new Date()});

// class Car {
//     drive(){
//         console.log('Driving...');
//     }
// }

// class Truck {
//     drive() {
//         console.log('Driving a truck...');
//     }

//     loadCargo(amount: number){
//         console.log('Loading cargo ...' + amount);
//     }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle){
//     vehicle.drive();
//     if('loadCargo' in vehicle){
//         vehicle.loadCargo(1000);
//     }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//     type: 'bird';
//     flyingSpeed: number;
// }

// interface Horse {
//     type: 'horse';
//     runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal){
//     let speed;
//     switch(animal.type){
//         case 'bird': speed = animal.flyingSpeed; break;
//         case 'horse': speed = animal.runningSpeed;
//     }
//     console.log('Moving at speed: ' + speed);
// }
// moveAnimal({type: 'bird', flyingSpeed: 10});

// //첫번째 방법
// // const userInputElement = <HTMLInputElement>document.getElementById('user-input')!
// // userInputElement.value = 'Hi there!';

// //두 번째 방법 
// // const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
// // userInputElement.value = 'Hi there!';

// //세 번째 방법
// const userInputElement = document.getElementById('user-input');
// if (userInputElement){
//     (userInputElement as HTMLInputElement).value = 'Hi there!';
// }

// interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a charactor' }
//     [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//     email: 'Not a valid email!',
//     username: 'Must start with a capital character!'
// }