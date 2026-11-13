const { spawn } = require('child_process');

// Chama e executa o arquivo 'segundo-plano.js' em segundo plano
const processo = spawn('node', ['.js'], {
  detached: true, // Desvincula do terminal atual
  stdio: 'ignore' // Ignora entradas e saídas para não travar o terminal
});

// Permite que o principal.js feche enquanto o segundo-plano.js continua rodando
processo.unref();

console.log('Arquivo .js iniciado em segundo plano!');
