class Turma{
    professor;
    curso;
    //aluno deve receber turma de Aluno.js
    alunos;
    //codigo do curso
    codCurso;

    constructor(prof, curso, codCurso){
        this.professor = prof;
        this.curso = curso;
        this.codCurso = codCurso;
        this.alunos =[];
    }

}