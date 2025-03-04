class C {
    foo: string
    constructor(foo: string) {
        this.foo = foo
    }
}

const c = new C('instance of C')
const d: C = {foo: 'object literal'} // OK!

console.log(d instanceof C) // false

export default {}