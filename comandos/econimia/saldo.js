module.exports = {
    name: "saldo",
    code: `
  
  **💵 | Este e o Seu Saldo <@$authorID>** Você Tem:
  
  > Reais: \`$numberSeparator[$getUserVar[money;$findUser[$message;yes]];,]\` Em Seu Bolso`
  }