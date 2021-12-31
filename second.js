function Calculadora() {
  //criado a função
  this.display = document.querySelector(".display");

  this.inicia = () => {
    //metodo inicia
    this.capturaCliques(); //metodo captura clique
    this.capturaEnter();
  };

  this.capturaEnter = () => {
    document.addEventListener("keypress", (e) => {
      if (e.keyCode === 13) {
        this.realizaConta();
      }
    });
  };

  this.capturaCliques = () => {
    // metodo para captura os cliques
    document.addEventListener("click", (event) => {
      const el = event.target;
      if (el.classList.contains("btn-num")) this.addNumDisplay(el);
      if (el.classList.contains("btn-clear")) this.clear(el);
      if (el.classList.contains("btn-del")) this.del(el);
      if (el.classList.contains("btn-eq")) this.realizaConta(el);
    });
  };
  this.addNumDisplay = (el) => {
    //recebe um elemento
    this.display.value += el.innerText; //add o valor
    this.display.focus(); // foco vai para o display
  };
  this.clear = (el) => {
    // metodo clear
    this.display.value = "";
  };
  this.del = (el) => {
    //apaga o elemento do display
    this.display.value = this.display.value.slice(0, -1);
  };
  this.realizaConta = (el) => {
    //realiza a conta
    try {
      const conta = eval(this.display.value); //vai avaliar se é num
      if (!conta) {
        alert("Conta inválida");
      }
      this.display.value = conta;
    } catch (e) {
      alert("conta inválida"); //se der erro vai dar um alerta
      return;
    }
  };
}
const calculadora = new Calculadora(); //cria o objeto
calculadora.inicia(); // chama o metodo inicia
