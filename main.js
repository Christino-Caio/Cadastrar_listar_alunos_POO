let turma = [];

function listarAluno(){
    Interface.listar(turma);
}

function botaoSalvar(){
  let a =  Interface.salvar(turma);
  turma.push(a);
}

function cadastroAluno(){
    Interface.cadastrar();
}

function mudarNome(){
    Interface.alterarNome();

    //para mudar o nome, só preciso de um loop, verificanjod o numero do aluno. 
    // se for o mesmo numero, faz um alert para poder alterar o nome do aluno. 
    // usar Setnome, depois tem que chamar a funcaço de listar
}

function novaNota(){
    Interface.mudarNota()


}