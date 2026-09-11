//! importando CommonsJS o módulo os
const os = require ('os');

const plataforma = os.platform();
const memoriaTotal = (os.totalmem()/(1024**3)).toFixed(2);
const memoriaLivre = (os.freemem()/(1024 **3)).toFixed(2);
const processador = os.cpus();

console.log('=== DIAGNÓSTIGO DO SERVIDOR ===');
console.log(`Arquitetura OS:${plataforma}`);
console.log(`Memoria RAM Total:${memoriaTotal}GB`);
console.log(`Memoria RAM Livre:${memoriaLivre}GB`);
console.log(`Cores do Processador :${processador.length}GB`);
console.log(`Processador :${processador[0].model}`);
console.log(`Velocidade do Processador:${processador[0].speed} Mhz`);










