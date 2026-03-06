
// Criar um objeto SENAI, acessar os dados da chave, incrementar dados/alterar o objeto, excluir um valor do objeto
const senai = {codigo:603, cidade: 'Araraquara'};

console.log('---------------------')

senai.telefone = 1633035252;
delete senai.rua;

senai.endereço = {rua: 'Hugo Negrini', bairro: 'Quitandinha', numero: 60}
senai.alunos = ['SESI', 'EEBA', 'Comunidade']

senai.endereço.numero = 62
senai.alunos[3] = 'técnico'
console.log(senai);