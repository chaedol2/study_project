//59. 퍼스트 클래스 만들기
abstract class Department {
    //static 정적인 요소는 인스턴스에 유효하지 않다. 동적으로 실행시킬 수 없다.
    static fiscalYear = 2020;
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = [];

    constructor(protected readonly id:string, public name: string) {
        // this.id = id;
        // this.name = name;

        //정적속성과 정적메소드의 전체적인 개념은 인스턴스와 분리되어 있다.
        // console.log(this.fiscalYear); //this는 인스턴스에 접근하는 방식이므로 정적인속성에 접근 불가
        // console.log(Department.fiscalYear) //static속성에 접근하는 방법
    }

    static createEmployee(name: string){
        return {name : name };
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string){
        // validation etc
        //readonly 는 타입스크립트에서만 가능한 표현이다.
        // this.id = 'd2'; 
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
//extends로 클래스의 기능, 속성, 메소드를 상속하고 공유한다.
class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]){
        super(id, 'IT');
        this.admins = admins;
    }

    // 추상 메소드에 대한 재정의
    describe(){
        console.log('IT Department - ID: ' + this.id);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error('No report found.');
    }

    set mostRecentReport(value: string) {
        if(!value){
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }

    //추상 메소드에 대한 재정의
    describe(){
        console.log('Accounting Department - ID: ' + this.id);
    }

    // 싱글톤 패턴을 위해 private를 붙여 주었다.
    private constructor(id: string, private reports: string[]){
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    //싱글톤 패턴만들기
    static getInstance(){
        if(AccountingDepartment.instance){
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    //추상 메소드에 대한 재정의
    addEmployee(name: string){
        if(name === 'Max'){
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string){
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports(){
        console.log(this.reports);
    }

}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear)

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

// private로 설정하여 막을 수 있다.(타입스크립트만 가능)
// it.employees[2] = 'Anna' 

it.describe();
it.name = 'NEW NAME'
it.printEmployeeInformation();

console.log(it);

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2)

accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();

// accounting.describe();

//61. 생성자 함수 및 "this" 키워드

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();