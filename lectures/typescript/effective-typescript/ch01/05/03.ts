let age: number
age = '12'
// ~~~ Type '"12"' is not assignalbe to type 'number'
age = '12' as any // OK
age += 1 // OK; at runtime, age is now "121"
function calcualteAge(birthDate: Date): number {
    // COMPRESS
    return 0
    // END
}

let birthDate: any = '1990-01-19'
calcualteAge(birthDate) // OK

export default {}