/* const x:number = 4
const y:number = 10

if (x > y) {
  console.log('x ist größer als y.')
} else {
  console.log('x ist kleiner als y.')
}

if (x > y) {
  console.log('x ist größer als y.')
} else if (x % 2 === 0) {
  console.log('x ist kleiner als y und eine gerade Zahl.')
} else {
  console.log('x ist kleiner als y und eine ungerade Zahl.')
}

const z:number = 5

if (z === 1) {
  console.log('z ist 1.')
} else if (z === 2) {
  console.log('z ist 2.')
} else if (z === 3) {
  console.log('z ist 3.')
} else if (z === 4) {
  console.log('z ist 4.')
} else if (z === 5) {
  console.log('z ist 5.')
} else {
  console.log('Der Wert von z ist nicht 1, 2, 3, 4 oder 5.')
}

switch (z) {
  case 1: {
    console.log('z ist 1.')
    break
  }
  case 2: {
    console.log('z ist 2.')
    break
  }
  case 3: {
    console.log('z ist 3.')
    break
  }
  case 4: {
    console.log('z ist 4.')
    break
  }
  case 5: {
    console.log('z ist 5.')
    break
  }
  default: {
    console.log('Der Wert von z ist nicht 1, 2, 3, 4 oder 5.')
    break
  }
}

const a:number = 5

console.log(a)
console.log(a)
console.log(a)
console.log(a)
console.log(a)

const b:number = 10
let i:number

for (i = 1; i <= 5; i++) {
  console.log(b)
}

let c:number = 1

while (c < 10) {
  console.log(c)
  c += 2
}

let d:number = 1

do {
  console.log(d)
  d += 2
} while (d < 10)

let k:number = 1

while (k <= 10) {
  if (k % 5 === 0) {
    console.log(k)
    continue
  }
  k++
}

function add (x:number, y:number, z?:number): number {
  if (z === undefined) {
    return x + y
  } else {
    return x + y + z
  }
}

console.log(add(15, 20, 10))

function add (...summanden:number[]) {
  let i:number
  let summe:number = 0

  for (i = 0; i < summanden.length; i++) {
    summe += summanden[i]
  }

  return summe
}

console.log(add())
 */
