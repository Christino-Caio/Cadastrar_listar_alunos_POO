/*principal classe onde se tem a caracteristica principal dos individuos:
Nome
Estado e Matricula
*/
class Pessoa{
    #nome;
    #matricula;
    #estado;
    constructor(nome, matricula, estado){
        this.#nome = nome;
        this.#matricula = matricula;
        this.#estado = estado;
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
    setMatricula(mat){
        this.#matricula = mat;
    }
    getEstado(){
        return this.#estado;
    }
    setNome(est){
        this.#estado = est;
    }


}