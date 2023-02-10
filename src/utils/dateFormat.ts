import { format } from 'date-fns'

const date = new Date()
const formattedDate = format(date, 'dd/MM/yyyy HH:mm:ss', {
  locale: {
    code: 'pt-BR',
  },
})
