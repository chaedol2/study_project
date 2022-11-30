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
type K = keyof (Person | Lifespan) // Type is never

// keyof (A&B) === (keyof A) | (keyof B)
// keyof (A|B) === (keyof A) & (keyof B)

export default {}