class Interface{

  constructor(){
      

  }

  //DA AULA
  static salvar() {
    let nome = document.getElementById('nome').value;
    let n1 = Number(document.getElementById('n1').value);
    let n2 = Number(document.getElementById('n2').value);
    let n3 = Number(document.getElementById('n3').value);
    let a1 = new Aluno(nome, n1, n2, n3);
    let ff = Number(document.getElementById('falta').value);
    let m = a1.gerarMedia(n1, n2, n3);
    a1.gerarEstado(m);
    a1.Faltou(ff);


    //turma[turma.length] = a1;
    alert('aluno cadastrado');
    return a1;
  }

 // PRECISA ADICIONAR PARA MOSTRAR A LISTA DAS TURMAS
  static listar(turma) {
    const btnCadastrar = document.getElementById('btn-cadastrar');
    const tabCadastrar = document.getElementById('tab-cadastrar');
    const btnListar = document.getElementById('btn-listar');
    const tabListar = document.getElementById('tab-listar');

    btnListar.classList.add('active');
    btnCadastrar.classList.remove('active');


    // Ajusta o conteúdo visível
    tabListar.classList.add('active');
    tabCadastrar.classList.remove('active');
    
    let lista = '<table><tr><b> <th>#</th> <th>Nome</th> <th>Nota 1</th> <th>Nota 2</th> <th>Nota 3</th> <th>Media</th> <th>Situação</th></b></tr>';
    for (let i = 0; i < turma.length; i++) {
      turma[i].chamada = i;
      if (turma[i].falta >4){

        lista = lista + "<tr>"+"<td>"+turma[i].chamada+"</td> "+" <td>" + turma[i].getNome() + ' </td> '+ 
        "<td> "+ turma[i].getNota(1) + 
        " </td>" + "<td>"+ turma[i].getNota(2)+"</td>" + "<td>"+ turma[i].getNota(3)+ "</td>" +"<td>" + turma[i].media.toFixed(2) + "</td>" +"<td>"+ turma[i].estado + "</td></tr>";
      }
      else{
        lista = lista + "<tr>"+"<td>"+turma[i].chamada+"</td> "+"<td>" +  turma[i].getNome() + ' </td> ' +
        "<td>"+ turma[i].getNota(1)+"</td>"+"<td>"+ turma[i].getNota(2)+"</td>"+"<td>"+ turma[i].getNota(3)+"</td>"+"<td>" + turma[i].media.toFixed(2) + "</td>" +  "<td>    "+ turma[i].estado + "</td></tr> ";
      }

    }
    document.getElementById('alunos').innerHTML = lista;
  }

  static cadastrar() {
    const btnCadastrar = document.getElementById('btn-cadastrar');
    const tabCadastrar = document.getElementById('tab-cadastrar');
    const btnListar = document.getElementById('btn-listar');
    const tabListar = document.getElementById('tab-listar');

    btnListar.classList.remove('active');
    btnCadastrar.classList.add('active');

    // Ajusta o conteúdo visível
    tabListar.classList.remove('active');
    tabCadastrar.classList.add('active');
    //document.getElementById("media").innerHTML = m;
  }



  static alterarNome(){
    let ch = Number(prompt("insira o numero de identifacação do aluno"));
    for(let i=0; i<turma.length; i++){
      if(ch == turma[i].chamada){
        let Nm;
        Nm = prompt("Insira o novo Nome");
        turma[i].setNome(Nm);
      }
      else if(ch >turma.length){

        alert("Esse aluno não esta matriculado");
      }
      
    }
    Interface.listar(turma);
  }



  static mudarNota(){
    let ch = Number(prompt("insira o numero de identifacação do aluno"));
      for(let i=0; i<turma.length; i++){
        if(ch == turma[i].chamada){
          let nt = parseFloat(prompt("insira 1 para mudar a n1, 2 para n2 e 3 para n3"));
          let Nm;
          Nm =  parseFloat(prompt("Insira a nova nota"));
          turma[i].setNota(nt, Nm);
          turma[i].gerarMedia(turma[i].getNota(1),turma[i].getNota(2),turma[i].getNota(3));
          turma[i].gerarEstado(turma[i].media);
          
      }
  }
  Interface.listar(turma);
}
            // INICIO DAS CONFIGURAÇÕES CLASS TURMA
// Classe turma para pegar os valores de turma
  static salClasse(classe) {
    let prof = document.getElementById('professor').value;
    let curso = document.getElementById('curso').value;

    let cc = new Turma(prof, curso);
    alert("Turma Cadastrada")
    return cc;
  }

  static listarClasse(classe){
    const btnCadastrar = document.getElementById('btn-cadastrar');
    const tabCadastrar = document.getElementById('tab-cadastrar');
    const btnListar = document.getElementById('btn-listar');
    const tabListar = document.getElementById('tab-listar');

    btnListar.classList.add('active');
    btnCadastrar.classList.remove('active');


    // Ajusta o conteúdo visível
    tabListar.classList.add('active');
    tabCadastrar.classList.remove('active');
    
    let lista = '<table><tr><b><th>Professor</th><th>Curso</th> </b></tr>';
    for (let i = 0; i < classe.length; i++) {
      lista = lista + "<tr><td>"+classe[i].professor+"</td>"+"<td>"+classe[i].curso+ "</td></tr>";

    }
    document.getElementById('turmas').innerHTML = lista;
    

  }



}
