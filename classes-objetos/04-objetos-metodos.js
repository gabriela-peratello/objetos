// Criar um objeto SENAI, acessar os dados da chave, incrementar dados/alterar o objeto, excluir um valor do objeto. THIS -> Refere ao objeto no contexto atual, usados para acessar propriedades e métodos do objeto corrente.


// Método é uma função dentro de um objeto
const senai = {codigo:603, cidade: 'Araraquara',

    descricaoEscola:function(){
        console.log(`O código ${senai.codigo} pertence a Escola SENAI de ${this.cidade}.`)
}
};




senai.codigo = 608;
senai.cidade = 'Matão'
senai.descricaoEscola()

