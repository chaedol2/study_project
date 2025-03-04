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

function calculateVolume(shape: unknown) {
    if (shape instanceof Cylinder) {
        shape // OK, type is Cylinder
        shape.radius // OK, type is number
    }
}

export default {}
