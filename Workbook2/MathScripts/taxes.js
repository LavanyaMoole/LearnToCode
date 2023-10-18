//federal tax calculation 
//annual income
  const annualIncome = 100000; 
  //tax rate
  let taxRate=0.23;
  const federalTax = (annualIncome * taxRate);
  console.log(`Federal Tax: $${federalTax.toFixed(2)}`);
  