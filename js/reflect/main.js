const obj = {
  foo: 1,
  bar: 2
}

console.log(Reflect.get(obj, 'foo'))
console.log(Reflect.has(obj, 'foo'))

const arr = ['foo', 'bar']

console.log(Reflect.get(arr, 1))
console.log(Reflect.has(arr, 1))

const obj2 = {
  foo: 42,
  f(n) {
    return this.foo + n
  }
}

console.log(Reflect.apply(obj2.f, { foo: 3 }, [2]))
