export const config = {
    runtime:'edge',
};

export default async function handler(req:Request) {
 const inicio = new Date();
 return new  Response(
    JSON.stringify({
        mensagem:'Funçao executada na borda da rede',
        horarioDoServidor: new Date().toISOString(),
        regiao:'local-dev',
        tempoDeExecucao:`${Date.now() - inicio.getTime()} ms`,

    }),
    {
        status: 200,
        headers: {
      'conntent-type':'application/json',
        },
    },
 );
}