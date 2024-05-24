/* eslint-disable no-unused-vars */
export enum WEEK_DAYS {
  MONDAY = 'Monday',
  TUESDAY = 'Tuesday',
  WEDNESDAY = 'Wednesday',
  THURSDAY = 'Thursday',
  FRIDAY = 'Friday',
  SATURDAY = 'Saturday',
  SUNDAY = 'Sunday'
}

export type Training = {
  id: string;
  weekday: WEEK_DAYS;
  userId: string;
  exercises: {
    exerciseId: string,
    repetitions: number,
    series: number,
    weight: number
  }
}

// ADD TREINO
// {
//   "dia_semana": "2021-09-15",
//   "cpf_aluno": "25864831550",
//   "exercicios": [
//     { "id_exercicio": 1, "n_repeticoes": 44, "n_series": 22, "peso": 15 },
//     { "id_exercicio": 2, "n_repeticoes": 33, "n_series": 11, "peso": 20 }
//   ]
// }
