const moonguse = require('mongoose')

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = `mongodb+srv://fullstack:${password}@cluster0.np02z.mongodb.net/phonebook?retryWrites=true`

moonguse.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new moonguse.Schema({
  name: String,
  number: String
})

const Person = moonguse.model('Person', personSchema)

if (name && number) {
  const person = new Person({
    name: name,
    number: number
  })

  person.save().then(() => {
    console.log(`added ${name} number ${number} to the phonebook`)
    moonguse.connection.close()
  })
} else {
  Person.find({}).then(result => {
    result.forEach(p => {
      console.log(p)
    })
    moonguse.connection.close()
  })
}
