// armazenamento dos alunos
let turma = [];

//para armazenar o professor e cursos; vai armazenar todas as informçãoes de uma materia;
//também vai armazenar a turma de alunos;
//ct = codigo de turma
let ct =[];

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

// CONFIGURAÇÕES DA CLASS TURMA
//para salvar classe com professor
function btaSalTurma(){
    let b = InterfaceTur.salClasse(ct);
    ct.push(b);

}

function listarTurma(){
    InterfaceTur.listarClasse(ct,turma);
}

function listarpovo(){
    InterfaceTur.listarAlunos(turma,ct);
}