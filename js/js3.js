// Pra que colar? não faça isso!
//Quiz nivel 3
function corrigir() {
     q1 = document.quiz.q1.value;
     q2 = document.quiz.q2.value;
     q3 = document.quiz.q3.value;
     q4 = document.quiz.q4.value;
     q5 = document.quiz.q5.value;
     r1 = document.getElementById("r1");
     r2 = document.getElementById("r2");
     r3 = document.getElementById("r3");
     r4 = document.getElementById("r4");
     r5 = document.getElementById("r5");
     var num = 0;
    if (q1 == "c") {
      r1.innerHTML = "<font color=green>Questão 1 correta.</font>";
      num = num+1;
    }
    else{r1.innerHTML = "<font color=red>Questão 1 errada.</font>";}
    if (q2 == "d") {
      r2.innerHTML = "<font color=green>Questão 2 correta.</font>";
      num = num+1;
    }
    else{r2.innerHTML = "<font color=red>Questão 2 errada.</font>";}
    if (q3 == "a") {
      r3.innerHTML = "<font color=green>Questão 3 correta.</font>";
      num = num+1;
    }
    else{r3.innerHTML = "<font color=red>Questão 3 errada.</font>";}
    if (q4 == "a") {
      r4.innerHTML = "<font color=green>Questão 4 correta.</font>";
      num = num+1;
    }
    else{r4.innerHTML = "<font color=red>Questão 4 errada.</font>";}
    if (q5 == "c") {
      r5.innerHTML = "<font color=green>Questão 5 correta.</font>";
      num = num+1;
    }
    else{r5.innerHTML = "<font color=red>Questão 5 errada.</font>";}
   
    if (num >= 4) {
      seguir.innerHTML = "Muito bem, passe para o proximo nível <a href=quiz04.html><button id=nivel4>Nivel 4</button></a>";
    }
    else{
      seguir.innerHTML = "Que pena, acerte no minimo 4 questões para subir de nível";
    }
  }
