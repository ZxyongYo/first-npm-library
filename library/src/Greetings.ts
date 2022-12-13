
const defaultName = 'world'

export function sayHello(name = defaultName) {
  console.log('hello' + name + '!')
}

export function sayHi(name = defaultName) {
  console.log('Hi' + name + '!')
}