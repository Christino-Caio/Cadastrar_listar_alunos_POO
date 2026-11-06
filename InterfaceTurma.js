class InterfaceTur{

  constructor(){
      

  }

 
// INICIO DAS CONFIGURAÇÕES CLASS TURMA
// Classe turma para pegar os valores de turma
  static salClasse(classe) {
    let prof = document.getElementById('professor').value;
    let curso = document.getElementById('curso').value;
    let cdcurso = document.getElementById('cdcurso').value;

    let cc = new Turma(prof,curso,cdcurso);
    alert("Turma Cadastrada");
    return cc;
  }
//aaaa
//função para listar alunos na classe
  static listarClasse(classe,turma){
    const btnCadastrar = document.getElementById('btn-cadastrar');
    const tabCadastrar = document.getElementById('tab-cadastrar');
    const btnListarTurma = document.getElementById('btn-LisTur');
    const tabListarTurma = document.getElementById('tab-classe');
    const btnListar = document.getElementById('btn-listar'); // Adicionado
    const tabListar = document.getElementById('tab-listar');  // Adicionado

    // Ativa a aba atual
    btnListarTurma.classList.add('active');
    tabListarTurma.classList.add('active');

    // Desativa as OUTRAS duas abas obrigatoriamente
    btnCadastrar.classList.remove('active');
    tabCadastrar.classList.remove('active');
    btnListar.classList.remove('active');
    tabListar.classList.remove('active');


    //vai armazenar os alunos da classe Aluno no alunos da classe Turma
    /*for(let i=0; i<turma.length; i++){

      classe[i].alunos = turma[i].getNome;
    } */
    
    let materia = '<table><tr><b><th>Professor</th><th>Curso</th> <th>Codigo de Turma</th> </b></tr>';
    for (let i = 0; i < classe.length; i++) {
      materia = materia + "<tr><td>"+classe[i].professor+"</td>"+"<td>"+classe[i].curso+ "</td>"+"<td>" + classe[i].codCurso +"</td></tr>";
    }

    /*   for(let i =0;i <classe.length; i++){
      materia = materia + 

    }  */

    document.getElementById('turmas').innerHTML = materia;
    

  }



}
