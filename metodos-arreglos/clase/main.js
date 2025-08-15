// // METODOS

// // METODOS QUE MODIFICAN EL ARREGLO ORIGINAL

// const metodosQueModifican = ['shift', 'unshift', 'pop', 'push', 'splice', 'sort', 'reverse']
// // console.log(metodosQueModifican)

// // push agrega uno o mas elementos al final del arreglo

// const frutas = ['manzana', 'pera', 'limon']
// frutas.push('platano', 'palta')
// // console.log(frutas)+

// // pop elima el ultimo elemento del arreglo

// let ultima = frutas.pop()
// // console.log(ultima)
// // console.log(frutas)

// // shift elimina el primer elemento del arreglo

// const letras = ['a', 'b', 'c', 'd']
// const primera = letras.shift()
// // console.log(primera)
// // console.log(letras)

// // unshift agrega UNO o MAS elementos

// letras.unshift('z', 'y')
// // console.log(letras)

// //splice : añade, elemina o remplaza elementos en cualquier
// // parte del arreglo

// // const colores = ['rojo', 'verde', 'azul']

// // elimine el verde y agregue un amarillo

// colores.splice(0, 0, 'amarillo')
// // console.log(colores)

// // sort: ordena los elementos del arreglo,
// // pero como STRINGS por defecto

// // const numbers = [3, 1, 12]
// // numbers.sort((a, b) => a - b)
// // numbers.sort((a, b) => b - a)
// // console.log(numbers)

// // const vocales = ['e', 'a', 'o', 'i', 'u']
// // vocales.sort()
// // console.log(vocales)

// // const arr = [40, 10, 100, 30]

// arr.sort((a, b) => a - b)
// 1-  40 - 10 = 30 -> b va antes
// 2- 10 - 100 = -90 -> a va antes

// reverse

// arr.reverse()
// console.log(arr)

// METODOS QUE NO MODIFICAN EL ARREGLO ORIGINAL

// map filter find some every includes slice toSorted toReversed

// map APLICA UNA FUNCION A CADA ELEMENTO DEL ARREGLO
// devuelve un nuevo arreglo con los resultados

// const preciosEnDolares = [100, 200, 300]
// const preciosEnPesos = numeros.map((numero) => numero * 2)

// console.log(numeros)
// console.log(dobles)

// const nombres = ['Javier', 'Tiare', 'Orlando']
// const html = nombres.map((nombre) => `<li>${nombre}</li>`).join('')
// console.log(html)

// filter Devuelve solo lo que cumpla una condicion

// const edades = [12, 18, 22, 14, 30]
// const mayores = edades.filter((edad) => edad >= 18)
// console.log(edades)
// console.log('filter:', mayores)

// find devuelve el primer elemento que cumpla la condicion

// const encontrado = edades.find((edad) => edad > 20)
// console.log(encontrado)

// some al menos alguien de este arreglo cumple la condicion?
// booleano true o false

// const edades = [12, 18, 22, 14, 30]
// const hayAdultos = edades.some((edad) => edad >= 18)
// console.log(hayAdultos)

// // every, todos cumplen la condicion?
// const todosSonAdultos = edades.every((edad) => edad >= 18)
// console.log(todosSonAdultos)

// includes existe el valor que me estas pasando?
const colores = ['rojo', 'azul', 'verde']
// console.log(colores.includes('azul'))
// console.log(colores.includes('negro'))

// slice extraer o sacar una parte del arreglo

// const letras = ['a', 'b', 'c', 'd']
// const parte = letras.slice(1, 3)
// console.log(parte)
// console.log(letras)

// reduce Toma todos los valores de un arreglo y los REDUCE
// a un solo valor.

// array.reduce((acumulador, valorActual) => {
//     // logica
//     return nuevoAcumulador
// }, valorInicial)

// const numeros = [1, 2, 3, 4]

// const total = numeros.reduce((acumulador, actual) => {
//   return acumulador + actual
// }, 0)

// console.log(total)

// acumulador = 0
// 1era vuelta = acumulador = 0, actual = 1 -> devuelve 1
// 2nda vuelta = acumulador = 1, actual = 2 -> devuelve 3
// 3era vuelta = acumulador = 3, acutal = 3 -> devuelve 6
// 4ta vuelta = acumulador = 6, actual = 4 -> devuelve 10

const letras = ['a', 'b', 'a', 'c', 'b', 'a']

const conteo = letras.reduce((acc, letra) => {
  acc[letra] = (acc[letra] || 0) + 1
  return acc
}, {})

console.log(conteo)
