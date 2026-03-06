// Classe é uma definição, como o objeto deve ser
class Senai{
    codigo;
    cidade;
    // Na classe não é necessário usar o function

    descreverEscola(){
        console.log(`O código ${this.codigo} pertence a escola ${this.cidade}`)
    }
}

// Instância é uma ocorrência, criação de um novo objeto - Criando uma instância

const senaiArarq = new Senai();
// Incrementando o objeto
senaiArarq.codigo = 603;
senaiArarq.cidade = 'Araraquara'


const senaiMat = new Senai();
senaiMat.codigo = 145;
senaiMat.cidade = 'Matão';
senaiMat.rua = 'Rua das Flores'

// Exibindo os dados no console
senaiArarq.descreverEscola();
senaiMat.descreverEscola();