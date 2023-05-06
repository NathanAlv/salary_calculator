const $ = document.querySelector.bind(document)

const calculateResult = (event) => {
  event.preventDefault()

  const horasSemanais = convertStringToFloat('hourly-wage')
  const horaExtra = convertStringToFloat('extra-hour')
  const  Valor = convertStringToFloat('wage-type')
  const horasTrabalhadas = horasSemanais * 4
  const ValorHora = horasTrabalhadas / Valor
  const valorHoraExtra = ValorHora * 1.5
  

  const installmentValue = (horasTrabalhadas * ValorHora) + (horaExtra * valorHoraExtra)
  const salarioMensal = installmentValue * 30

  $('#result').innerText = `Seu Salário Mensal é : R$ ${salarioMensal.toFixed(2)}`
}


const convertStringToFloat = (id) => {
  let aux = $(`#${id}`).value
  const value = parseFloat(aux)
  return value
}





