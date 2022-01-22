const dogs = [
    {
        id: 'dog-1',
        name: 'Poodle',
        temperment: [
            'Intelligent',
            'Active',
            'Alert',
            'Faithful',
            'Trainable',
            'Instinctual'
        ],
    },
    {
        id: 'dog-2',
        name: 'Bernese Mountain Dog',
        temperment: ['Affectionate', 'Intelligent', 'Loyal', 'Faithful']
    },
    {
        id: 'dog-3',
        name: 'Labrador Retriever',
        temperment: [
            'Intelligent',
            'Even Tempered',
            'Kind',
            'Agile',
            'Outgoing',
            'Trusting',
            'Gentle'
        ]
    }
]

const x = dogs.find(dog => dog.name === 'Bernese Mountain Dog')
console.log(x)

const y = dogs.some(dog => dog.temperment.includes('Aggressive'))
console.log(y)

const z = dogs.every(dog => dog.temperment.includes('Intelligent'))
console.log(z)

const a = dogs.map(dog => dog.name)
console.log(a)

const b = dogs.filter(dog => dog.temperment.includes('Faithful'))
console.log(b)

const c = dogs.reduce((allTemperments, dog) => {
  return [...allTemperments, ...dog.temperment]
}, [])
console.log(c)