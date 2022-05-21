module.exports = {
    name: "daily",
    code: `
    $description[1;**Você Pegou Seu Diaro e Recebeu \`$random[1;1000]\` Reais**]
    $setUserVar[money;$sum[$getGlobalUserVar[money];$random[1;1000]]]
    $globalCooldown[24h;Espere Por %time%]
    `
    
    }