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

export interface User {
  polla: number
  codigo: string
  nombre: string
  aciertos: number
  boleto: string
}

export const users: User[] = [
  {
    polla: 8,
    codigo: '82e351',
    nombre: 'Jean Carlos Diaz Diaz',
    aciertos: 0,
    boleto: boleto1,
  },
  {
    polla: 8,
    codigo: 'c97357',
    nombre: 'Luis Angel Barboza Bustamante',
    aciertos: 0,
    boleto: boleto2,
  },
  {
    polla: 8,
    codigo: '58e6d4',
    nombre: 'Victor Hugo Arias Diaz',
    aciertos: 0,
    boleto: boleto3,
  },
  {
    polla: 8,
    codigo: '3a27a2',
    nombre: 'Chris Acuña Vigo',
    aciertos: 0,
    boleto: boleto4,
  },
  {
    polla: 8,
    codigo: '5a564d',
    nombre: 'Maikol GUEVARA HERNANDEZ',
    aciertos: 0,
    boleto: boleto5,
  },
  {
    polla: 8,
    codigo: 'a12e76',
    nombre: 'JHONATAN OMAR BUSTAMANTE',
    aciertos: 0,
    boleto: boleto6,
  },
  {
    polla: 8,
    codigo: 'da307e',
    nombre: 'VICTOR ROJAS RIVERA',
    aciertos: 0,
    boleto: boleto7,
  },
  {
    polla: 8,
    codigo: 'a8a4a9',
    nombre: 'Fany Rojas Vasquez',
    aciertos: 0,
    boleto: boleto8,
  },
  {
    polla: 8,
    codigo: '9eacb1',
    nombre: 'Jhesler Cieza EDQUEN ',
    aciertos: 0,
    boleto: boleto9,
  },
  {
    polla: 8,
    codigo: '2fd964',
    nombre: 'Marco Antonio Vasquez Sanchez',
    aciertos: 0,
    boleto: boleto10,
  },
]
