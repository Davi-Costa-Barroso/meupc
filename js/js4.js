// Pra que colar? não faça isso!
//Quiz nivel 4
function corrigir() {
     q1 = document.quiz.q1.value;
     q2 = document.quiz.q2.value;
     q3 = document.quiz.q3.value;
     q4 = document.quiz.q4.value;
     r1 = document.getElementById("r1");
     r2 = document.getElementById("r2");
     r3 = document.getElementById("r3");
     r4 = document.getElementById("r4");
     var num = 0;
    if (q1 == "b") {
      r1.innerHTML = "<font color=green>Questão 1 correta.</font>";
      num = num+1;
    }
    else{r1.innerHTML = "<font color=red>Questão 1 errada.</font>";}
    if (q2 == "a") {
      r2.innerHTML = "<font color=green>Questão 2 correta.</font>";
      num = num+1;
    }
    else{r2.innerHTML = "<font color=red>Questão 2 errada.</font>";}
    if (q3 == "c") {
      r3.innerHTML = "<font color=green>Questão 3 correta.</font>";
      num = num+1;
    }
    else{r3.innerHTML = "<font color=red>Questão 3 errada.</font>";}
    if (q4 == "d") {
      r4.innerHTML = "<font color=green>Questão 4 correta.</font>";
      num = num+1;
    }
    else{r4.innerHTML = "<font color=red>Questão 4 errada.</font>";}
   
    if (num == 4) {
      seguir.innerHTML = "Muito bem, você concluiu o <font color=red><b>nível 4</b></font>! <style type=text/css>#quizparabens {position:absolute;left:10%;top:90%;margin-left:-110px;margin-top:-40px;}</style><div><img src=img/gif.gif width=100% height=100% id=quizparabens /></div> ";
    }
    else{
      seguir.innerHTML = "Refaça o quiz para acertar todas as perguntas!";
    }
  }
