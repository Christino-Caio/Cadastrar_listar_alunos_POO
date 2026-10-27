let turma = [];

function listar(){
    Interface.listar(turma);
}

function salvar(){
  let a =  Interface.salvar(turma);
  turma.push(a);
}