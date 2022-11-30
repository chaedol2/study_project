interface Person {
    first: string
    last: string
}

const p: Person = { first: 'Jane', last: 'Jacobs' }
// Person은 type이다.
// {}는 value이다.

function email(p: Person, subject: string, body: string): Response {
    // email, p, subject, body 는 Values
    // Person, string, string, Response는 Types
    
    // COMPRESS
    return new Response()
    // END
}

class Cylinder {
    radius = 1
    height = 1
}

function calculateVolume(shape: any) {
    if (shape instanceof Cylinder) { // instance인게 참이면 타입도 참이다.
        shape // OK, type is Cylinder
        shape.radius // OK, type is number
    }
}

type T1 = typeof p // Type is Person
type T2 = typeof email
// Type is (p: Person, subject: string, body: string) => Response

const v1 = typeof p // Value is "object"
const v2 = typeof email // Value is "function"

export default {}
