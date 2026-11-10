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

  //função para listar alunos na classe
  static listarClasse(classe){
    const btnCadastrar = document.getElementById('btn-cadastrar');
    const tabCadastrar = document.getElementById('tab-cadastrar');
    const btnListarTurma = document.getElementById('btn-LisTur');
    const tabListarTurma = document.getElementById('tab-classe');
    const btnListar = document.getElementById('btn-listar'); 
    const tabListar = document.getElementById('tab-listar'); 

    // Ativa a aba atual
    btnListarTurma.classList.add('active');
    tabListarTurma.classList.add('active');

    // Desativa as outras abas obrigatoriamente
    btnCadastrar.classList.remove('active');
    tabCadastrar.classList.remove('active');
    btnListar.classList.remove('active');
    tabListar.classList.remove('active');


    
    let materia = '<table><tr><b><th>Professor</th><th>Curso</th> <th>Codigo de Turma</th> </b></tr>';
    for (let i = 0; i < classe.length; i++) {
      materia = materia + "<tr><td>"+classe[i].professor+"</td>"+"<td>"+classe[i].curso+ "</td>"+"<td>" + classe[i].codCurso +"</td></tr>";
    }

    

    document.getElementById('turmas').innerHTML = materia;
    

  }

  static listarAlunos(turma, ct){
    //ct onde as Turmas estão armazenados
    //aTurma = codigo do curso do aluno; codCurso = codigo do curso
    let materia = '<table><tr><b> <th>Nome</th> </b></tr>';
    let add = '<table><tr><b><th>Professor</th><th>Curso</th> <th>Codigo de Turma</th> </b></tr>';
    for(let i =0; i<turma.length;i++){

      for(let j =0; i<turma.length;i++){
        if( ct[i].codCurso == turma[j].aTurma){
          ct[i].alunos[j] = turma[j].getNome();
          add = add +  "<tr><td>"+ct[j].professor+"</td>"+"<td>"+
          ct[j].curso+ "</td>"+"<td>" + ct[j].codCurso +"</td></tr>" +
          materia + ct[i].alunos[j];
        }
      }
    }
    document.getElementById('turmas').innerHTML = add;

  }

}
