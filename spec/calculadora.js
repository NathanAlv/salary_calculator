describe("calcularSalarioMensal", () => {
    it("calcula salário apenas com horas normais", () => {
      const valorHora = 25;
      const horasSemanais = 40;
      const horasExtras = 0;
      const percentualHoraExtra = 50;
  
      const horasNormais = horasSemanais * 4;
      const salarioMensal = calcularSalarioMensal(valorHora, horasNormais, horasExtras, percentualHoraExtra);
  
      expect(salarioMensal).toEqual(horasNormais * valorHora);
    });
  
    it("calcula salário com horas normais e extras", () => {
      const valorHora = 30;
      const horasSemanais = 40;
      const horasExtras = 10;
      const percentualHoraExtra = 50;
  
      const horasNormais = horasSemanais * 4;
      const valorHoraExtra = valorHora * (1 + percentualHoraExtra / 100);
      const salarioMensal = calcularSalarioMensal(valorHora, horasNormais, horasExtras, percentualHoraExtra);
  
      expect(salarioMensal).toEqual(horasNormais * valorHora + horasExtras * valorHoraExtra);
    });
  
    it("calcula salário com horas normais e extras, com percentual de hora extra diferente", () => {
      const valorHora = 20;
      const horasSemanais = 30;
      const horasExtras = 20;
      const percentualHoraExtra = 75;
  
      const horasNormais = horasSemanais * 4;
      const valorHoraExtra = valorHora * (1 + percentualHoraExtra / 100);
      const salarioMensal = calcularSalarioMensal(valorHora, horasNormais, horasExtras, percentualHoraExtra);
  
      expect(salarioMensal).toEqual(horasNormais * valorHora + horasExtras * valorHoraExtra);
    });
  
    it("calcula salário com horas normais e sem horas extras", () => {
      const valorHora = 40;
      const horasSemanais = 45;
      const horasExtras = 0;
      const percentualHoraExtra = 50;
  
      const horasNormais = horasSemanais * 4;
      const salarioMensal = calcularSalarioMensal(valorHora, horasNormais, horasExtras, percentualHoraExtra);
  
      expect(salarioMensal).toEqual(horasNormais * valorHora);
    });
});
  