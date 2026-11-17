class Pessoa{

    #nome;
    #matricula;
    #estado;


    constructor(nome,matricula,estado){

        this.#nome = nome;
        this.#matricula = matricula;
        this.#estado = estado;
    }

    constructor(nome){

        this.#nome = nome;
        this.#matricula = 1000;
        this.#estado = 'ativo';

    }

    getNome(){
        return this.#nome;
    }


    setNome(nome){
        this.#nome = nome;
    }

    getMatricula(){
        return this.#matricula;
    }


    setMatricula(matricula){
        this.#matricula = matricula;
    }

    getEstado(){
        return this.#estado;
    }


    setEstado(estado){
        this.#estado = estado;
    }
}