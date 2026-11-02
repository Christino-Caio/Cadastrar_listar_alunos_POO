class Aluno {
  #nome;
  #nota1;
  #nota2;
  #nota3;
  estado;
  media;
  falta;
  chamada;
  constructor(nome, nota1, nota2, nota3) {
    this.#nome = nome;
    this.#nota1 = nota1;
    this.#nota2 = nota2;
    this.#nota3 = nota3;
  }
  gerarMedia(nota1, nota2, nota3) {
    let m = (nota1 + nota2 + nota3) / 3;
    this.media = m;
    return m;
  }
  gerarEstado(media) {
    let est;
    if (media >= 6) {
      est = 'Aprovado';
    } else if (media >= 3) {
      est = 'Recuperação';
    } else {
      est = 'Reprovado';
    }
    this.estado = est;
    return est;
  }
  Faltou(falta) {
    let est;
    let fal = falta
    if (falta > 4) {
      est = 'Reprovado por falta';
      this.estado = est;
      this.falta = fal;
      return est;
    }
   
  }

  getNome(){
    return this.#nome;
  }

  setNome(nome){
    this.#nome = nome;

  }

  getNota(n){
    if(n==1){
      return this.#nota1;
    }
    else if(n==2){
      return this.#nota2
    }
    else if(n==3){
      return this.#nota3
    }
  }

  setNota(n,no){
    if(n==1){
      this.#nota1= no;
    }
    else if(n==2){
      this.#nota2= no;
    }
    else if(n==3){
      this.#nota3= no;
    }

  }
} //fim da classe
