class Professor extends Pessoa{

    #email; /*string */
    #sala; /*int */
    #formação; /*string */

    constructor(nome,matricula,estado,formacao,email) {

        super(nome,matricula,estado);
        this.#formacao= formacao;
        this.#email = email;

    }

    getFormacao(){
        return this.#formacao;
    }

    setFormacao(formacao){
        this.#formacao = formacao;
    }
   
}




