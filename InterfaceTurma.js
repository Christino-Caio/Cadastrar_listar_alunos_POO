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
  static listarClasse(classe,turma){
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

  static listarAlunos(){
    

  }

}
