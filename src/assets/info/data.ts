import boleto1 from '../../assets/boletos/boleto_1.png'
import boleto2 from '../../assets/boletos/boleto_2.png'
import boleto3 from '../../assets/boletos/boleto_3.jpeg'
import boleto4 from '../../assets/boletos/boleto_4.jpeg'
import boleto5 from '../../assets/boletos/boleto_5.png'
import boleto6 from '../../assets/boletos/boleto_6.png'
import boleto7 from '../../assets/boletos/boleto_7.jpeg'
import boleto8 from '../../assets/boletos/boleto_8.png'
import boleto9 from '../../assets/boletos/boleto_9.png'
import boleto10 from '../../assets/boletos/boleto_10.png'

export interface IResult {
  number: number
  result: string
}

export interface User {
  polla: number
  codigo: string
  nombre: string
  aciertos: number
  boleto: string
  prediction: IResult[]
}

export let users: User[] = [
  {
    polla: 8,
    codigo: '82e351',
    nombre: 'Jean Carlos Diaz Diaz',
    aciertos: 0,
    boleto: boleto1,
    prediction: [
      { number: 1, result: 'V' },
      { number: 2, result: 'L' },
      { number: 3, result: 'V' },
      { number: 4, result: 'V' },
      { number: 5, result: 'V' },
      { number: 6, result: 'V' },
      { number: 7, result: 'L' },
      { number: 8, result: 'V' },
      { number: 9, result: 'V' },
      { number: 10, result: 'L' },
      { number: 11, result: 'V' },
      { number: 12, result: 'L' },
      { number: 13, result: 'V' },
      { number: 14, result: 'L' },
      { number: 15, result: 'L' },
      { number: 16, result: 'V' },
      { number: 17, result: 'L' },
      { number: 18, result: ' L' },
    ],
  },
  {
    polla: 8,
    codigo: 'c97357',
    nombre: 'Luis Angel Barboza Bustamante',
    aciertos: 0,
    boleto: boleto2,
    prediction: [
      { number: 1, result: 'V' },
      { number: 2, result: 'L' },
      { number: 3, result: 'L' },
      { number: 4, result: 'L' },
      { number: 5, result: 'V' },
      { number: 6, result: 'V' },
      { number: 7, result: 'L' },
      { number: 8, result: 'V' },
      { number: 9, result: 'L' },
      { number: 10, result: 'L' },
      { number: 11, result: 'V' },
      { number: 12, result: 'V' },
      { number: 13, result: 'V' },
      { number: 14, result: 'L' },
      { number: 15, result: 'L' },
      { number: 16, result: 'L' },
      { number: 17, result: 'L' },
      { number: 18, result: 'L' },
    ],
  },
  {
    polla: 8,
    codigo: '58e6d4',
    nombre: 'Victor Hugo Arias Diaz',
    aciertos: 0,
    boleto: boleto3,
    prediction: [
      { number: 1, result: 'V' },
      { number: 2, result: 'V' },
      { number: 3, result: 'L' },
      { number: 4, result: 'E' },
      { number: 5, result: 'L' },
      { number: 6, result: 'V' },
      { number: 7, result: 'L' },
      { number: 8, result: 'V' },
      { number: 9, result: 'E' },
      { number: 10, result: 'V' },
      { number: 11, result: 'V' },
      { number: 12, result: 'L' },
      { number: 13, result: 'L' },
      { number: 14, result: 'L' },
      { number: 15, result: 'L' },
      { number: 16, result: 'L' },
      { number: 17, result: 'E' },
      { number: 18, result: 'L' },
    ],
  },
  {
    polla: 8,
    codigo: '3a27a2',
    nombre: 'Chris Acuña Vigo',
    aciertos: 0,
    boleto: boleto4,
    prediction: [
      { number: 1, result: 'V' },
      { number: 2, result: 'L' },
      { number: 3, result: 'V' },
      { number: 4, result: 'L' },
      { number: 5, result: 'L' },
      { number: 6, result: 'V' },
      { number: 7, result: 'L' },
      { number: 8, result: 'V' },
      { number: 9, result: 'L' },
      { number: 10, result: 'L' },
      { number: 11, result: 'V' },
      { number: 12, result: 'L' },
      { number: 13, result: 'V' },
      { number: 14, result: 'L' },
      { number: 15, result: 'L' },
      { number: 16, result: 'V' },
      { number: 17, result: 'L' },
      { number: 18, result: 'L' },
    ],
  },
  {
    polla: 8,
    codigo: '5a564d',
    nombre: 'Maikol GUEVARA HERNANDEZ',
    aciertos: 0,
    boleto: boleto5,
    prediction: [
      { number: 1, result: 'V' },
      { number: 2, result: 'L' },
      { number: 3, result: 'V' },
      { number: 4, result: 'L' },
      { number: 5, result: 'L' },
      { number: 6, result: 'V' },
      { number: 7, result: 'L' },
      { number: 8, result: 'V' },
      { number: 9, result: 'L' },
      { number: 10, result: 'L' },
      { number: 11, result: 'V' },
      { number: 12, result: 'L' },
      { number: 13, result: 'L' },
      { number: 14, result: 'L' },
      { number: 15, result: 'E' },
      { number: 16, result: 'V' },
      { number: 17, result: 'L' },
      { number: 18, result: 'L' },
    ],
  },
  {
    polla: 8,
    codigo: 'a12e76',
    nombre: 'JHONATAN OMAR BUSTAMANTE',
    aciertos: 0,
    boleto: boleto6,
    prediction: [
      { number: 1, result: 'V' },
      { number: 2, result: 'L' },
      { number: 3, result: 'L' },
      { number: 4, result: 'L' },
      { number: 5, result: 'V' },
      { number: 6, result: 'V' },
      { number: 7, result: 'L' },
      { number: 8, result: 'V' },
      { number: 9, result: 'L' },
      { number: 10, result: 'L' },
      { number: 11, result: 'V' },
      { number: 12, result: 'L' },
      { number: 13, result: 'V' },
      { number: 14, result: 'L' },
      { number: 15, result: 'L' },
      { number: 16, result: 'V' },
      { number: 17, result: 'L' },
      { number: 18, result: 'L' },
    ],
  },
  {
    polla: 8,
    codigo: 'da307e',
    nombre: 'VICTOR ROJAS RIVERA',
    aciertos: 0,
    boleto: boleto7,
    prediction: [
      { number: 1, result: 'V' },
      { number: 2, result: 'L' },
      { number: 3, result: 'V' },
      { number: 4, result: 'V' },
      { number: 5, result: 'V' },
      { number: 6, result: 'V' },
      { number: 7, result: 'L' },
      { number: 8, result: 'V' },
      { number: 9, result: 'V' },
      { number: 10, result: 'L' },
      { number: 11, result: 'V' },
      { number: 12, result: 'L' },
      { number: 13, result: 'V' },
      { number: 14, result: 'L' },
      { number: 15, result: 'L' },
      { number: 16, result: 'V' },
      { number: 17, result: 'L' },
      { number: 18, result: 'L' },
    ],
  },
  {
    polla: 8,
    codigo: 'a8a4a9',
    nombre: 'Fany Rojas Vasquez',
    aciertos: 0,
    boleto: boleto8,
    prediction: [
      { number: 1, result: 'V' },
      { number: 2, result: 'L' },
      { number: 3, result: 'L' },
      { number: 4, result: 'L' },
      { number: 5, result: 'V' },
      { number: 6, result: 'V' },
      { number: 7, result: 'L' },
      { number: 8, result: 'V' },
      { number: 9, result: 'V' },
      { number: 10, result: 'L' },
      { number: 11, result: 'V' },
      { number: 12, result: 'L' },
      { number: 13, result: 'V' },
      { number: 14, result: 'L' },
      { number: 15, result: 'V' },
      { number: 16, result: 'L' },
      { number: 17, result: 'L' },
      { number: 18, result: 'L' },
    ],
  },
  {
    polla: 8,
    codigo: '9eacb1',
    nombre: 'Jhesler Cieza EDQUEN ',
    aciertos: 0,
    boleto: boleto9,
    prediction: [
      { number: 1, result: 'V' },
      { number: 2, result: 'L' },
      { number: 3, result: 'V' },
      { number: 4, result: 'L' },
      { number: 5, result: 'L' },
      { number: 6, result: 'V' },
      { number: 7, result: 'L' },
      { number: 8, result: 'V' },
      { number: 9, result: 'V' },
      { number: 10, result: 'L' },
      { number: 11, result: 'V' },
      { number: 12, result: 'L' },
      { number: 13, result: 'V' },
      { number: 14, result: 'L' },
      { number: 15, result: 'E' },
      { number: 16, result: 'V' },
      { number: 17, result: 'L' },
      { number: 18, result: 'L' },
    ],
  },
  {
    polla: 8,
    codigo: '2fd964',
    nombre: 'Marco Antonio Vasquez Sanchez',
    aciertos: 0,
    boleto: boleto10,
    prediction: [
      { number: 1, result: 'L' },
      { number: 2, result: 'L' },
      { number: 3, result: 'V' },
      { number: 4, result: 'V' },
      { number: 5, result: 'V' },
      { number: 6, result: 'V' },
      { number: 7, result: 'L' },
      { number: 8, result: 'V' },
      { number: 9, result: 'L' },
      { number: 10, result: 'V' },
      { number: 11, result: 'V' },
      { number: 12, result: 'L' },
      { number: 13, result: 'V' },
      { number: 14, result: 'L' },
      { number: 15, result: 'V' },
      { number: 16, result: 'E' },
      { number: 17, result: 'V' },
      { number: 18, result: 'V' },
    ],
  },
]

export const results: IResult[] = [
  {
    number: 1,
    result: 'V',
  },
  {
    number: 2,
    result: 'L',
  },
  {
    number: 3,
    result: 'V',
  },
  {
    number: 4,
    result: 'V',
  },
  {
    number: 5,
    result: 'V',
  },
  {
    number: 6,
    result: 'V',
  },
  {
    number: 7,
    result: 'L',
  },
  {
    number: 8,
    result: 'V',
  },
  {
    number: 9,
    result: 'L',
  },
  {
    number: 10,
    result: 'E',
  },
  {
    number: 11,
    result: 'V',
  },
  {
    number: 12,
    result: 'L',
  },
  {
    number: 13,
    result: 'V',
  },
  {
    number: 14,
    result: 'L',
  },
  {
    number: 15,
    result: 'V',
  },
  {
    number: 16,
    result: 'L',
  },
  {
    number: 17,
    result: '?',
  },
  {
    number: 18,
    result: '?',
  },
]

for (let i = 0; i < results.length; i++) {
  for (const user of users) {
    if (user.prediction.some(pred => pred.number === results[i].number && pred.result === results[i].result)) {
      user.aciertos++
    }
  }
}
