interface Identified {
    id: string
}

interface Person {
    name: string
}

interface Lifespan {
    birth: Date
    death?: Date
}
type PersonSpan = Person & Lifespan

const a: PersonSpan = {
    name: 'a',
}

export default {}