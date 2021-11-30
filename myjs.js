const pratoPrincipal = document.querySelector(".conteudo-prato-principal .pratos")
const pratoPrincipalTodos = document.querySelectorAll(".conteudo-prato-principal .pratos")
const bebidaPrincipal = document.querySelector(".conteudo-prato-bebida .pratos")
const bebidaPrincipalTodos = document.querySelectorAll(".conteudo-prato-bebida .pratos")
const sobremesaPrincipal = document.querySelector(".conteudo-prato-sobremesa .pratos")
const sobremesaPrincipalTodos = document.querySelectorAll(".conteudo-prato-sobremesa .pratos")
let verificadorPrato = document.querySelectorAll(".conteudo-prato-principal .clicado")
let verificadorBebida = document.querySelectorAll(".conteudo-prato-bebida .clicado")
let verificadorSobremesa = document.querySelectorAll(".conteudo-prato-sobremesa .clicado")
const botaoEnviar = document.querySelector("button")
const corpoApp = document.querySelector(".conteudo-app")

for(let i = 0; i < pratoPrincipalTodos.length; i++){
  pratoPrincipalTodos[i].addEventListener("click" , (event) => {
    verificadorPrato = document.querySelectorAll(".conteudo-prato-principal .clicado")
    
    
    switch(verificadorPrato.length){
      case 0:
        if(event.path.length !== 7){
          event.target.parentNode.classList.toggle("clicado")
          break
        }
        event.target.classList.toggle("clicado")
        break
      case 1:
        verificadorPrato[0].classList.remove("clicado")
        if(event.path.length !== 7){
          event.target.parentNode.classList.toggle("clicado")
          break
        }
        event.target.classList.toggle("clicado")
        break
      default:
        console.log("Erro nos cases.")
    }
  })
}
for(let i = 0; i < bebidaPrincipalTodos.length; i++){
  bebidaPrincipalTodos[i].addEventListener("click" , (event) => {
    verificadorBebida = document.querySelectorAll(".conteudo-prato-bebida .clicado")
    
    
    switch(verificadorBebida.length){
      case 0:
        if(event.path.length !== 7){
          event.target.parentNode.classList.toggle("clicado")
          break
        }
        event.target.classList.toggle("clicado")
        break
      case 1:
        verificadorBebida[0].classList.remove("clicado")
        if(event.path.length !== 7){
          event.target.parentNode.classList.toggle("clicado")
          break
        }
        event.target.classList.toggle("clicado")
        break
      default:
        console.log("Erro nos cases.")
    }
  })
}

for(let i = 0; i < sobremesaPrincipalTodos.length; i++){
  sobremesaPrincipalTodos[i].addEventListener("click" , (event) => {
    verificadorSobremesa = document.querySelectorAll(".conteudo-sobremesa-principal .clicado")
    
    
    switch(verificadorSobremesa.length){
      case 0:
        if(event.path.length !== 7){
          event.target.parentNode.classList.toggle("clicado")
          break
        }
        event.target.classList.toggle("clicado")
        break
      case 1:
        verificadorSobremesa[0].classList.remove("clicado")
        if(event.path.length !== 7){
          event.target.parentNode.classList.toggle("clicado")
          break
        }
        event.target.classList.toggle("clicado")
        break
      default:
        console.log("Erro nos cases.")
    }
  })
}

/* function evento_click(botao) {
  const esta_clicado = document.querySelector(
    ".conteudo-prato-principal .clicado"
  );
  if (esta_clicado !== null) {
    esta_clicado.classList.remove("clicado");
    botao.classList.toggle("clicado");
  } else {
    botao.classList.toggle("clicado");
  }
} */



/* function evento_click_bebida(botao) {
  const esta_clicado_bebida = document.querySelector(
    ".conteudo-prato-bebida .clicado"
  );
  if (esta_clicado_bebida !== null) {
    esta_clicado_bebida.classList.remove("clicado");
    botao.classList.toggle("clicado");
  } else {
    botao.classList.toggle("clicado");
  }
} */

/* function evento_click_sobremesa(botao) {
  const esta_clicado_sobremesa = document.querySelector(
    ".conteudo-prato-sobremesa .clicado"
  );
  if (esta_clicado_sobremesa !== null) {
    esta_clicado_sobremesa.classList.remove("clicado");
    botao.classList.toggle("clicado");
  } else {
    botao.classList.toggle("clicado");
  }
}
 */

corpoApp.addEventListener("click", () => {
  
  const pratoEscolhido = document.querySelector(
      ".conteudo-prato-principal .clicado"
    );
  const bebida_escolhida = document.querySelector(
      ".conteudo-prato-bebida .clicado"
    );
  const sobremesa_escolhida = document.querySelector(
      ".conteudo-prato-sobremesa .clicado"
    );
  const botaoPronto = document.querySelector("button");
  const mudaTextoBotao = document.querySelector(".finalizar-pedido p");
  
  if (pratoEscolhido !== null && bebida_escolhida !== null && sobremesa_escolhida !== null) {
    botaoPronto.classList.add("finalizar-pedido-correto");
    mudaTextoBotao.innerHTML = "Fechar pedido";
    mudaTextoBotao.classList.add("padding");
    botaoPronto.disabled = false;  
  }
}
)

/* function botaoFinalizar() {
  const pratoEscolhido = document.querySelector(
    ".conteudo-prato-principal .clicado"
  );
  const bebida_escolhida = document.querySelector(
    ".conteudo-prato-bebida .clicado"
  );
  const sobremesa_escolhida = document.querySelector(
    ".conteudo-prato-sobremesa .clicado"
  );
  const botaoPronto = document.querySelector("button");
  const mudaTextoBotao = document.querySelector(".finalizar-pedido p");

  if (pratoEscolhido !== null){
   if(bebida_escolhida !== null){
    if(sobremesa_escolhida !== null) {
        botaoPronto.classList.add("finalizar-pedido-correto");
        mudaTextoBotao.innerHTML = "Fechar pedido";
        mudaTextoBotao.classList.add("padding");
        botaoPronto.disabled = false;  
   }
  }
} */


botaoEnviar.addEventListener("click", (event) => {
  let pratoEscolhido = document.querySelector(
    ".conteudo-prato-principal .clicado .titulo-prato"
  );
  pratoEscolhido = pratoEscolhido.innerHTML;

  let bebidaEscolhida = document.querySelector(
    ".conteudo-prato-bebida .clicado .titulo-prato"
  );
  bebidaEscolhida = bebidaEscolhida.innerHTML;

  let sobremesaEscolhida = document.querySelector(
    ".conteudo-prato-sobremesa .clicado .titulo-prato"
  );

  sobremesaEscolhida = sobremesaEscolhida.innerHTML;

  let valorPrato = document.querySelector(
    ".conteudo-prato-principal .clicado .preco-prato"
  ).innerHTML;
  valorPrato = valorPrato.replace("R$ ", "");
  valorPrato = valorPrato.replace(",", ".");
  valorPrato = parseFloat(valorPrato);

  let valorBebida = document.querySelector(
    ".conteudo-prato-bebida .clicado .preco-prato"
  ).innerHTML;
  valorBebida = valorBebida.replace("R$ ", "");
  valorBebida = valorBebida.replace(",", ".");
  valorBebida = parseFloat(valorBebida);

  let valorSobremesa = document.querySelector(
    ".conteudo-prato-sobremesa .clicado .preco-prato"
  ).innerHTML;
  valorSobremesa = valorSobremesa.replace("R$ ", "");
  valorSobremesa = valorSobremesa.replace(",", ".");
  valorSobremesa = parseFloat(valorSobremesa);

  let valorTotal = (num1, num2, num3) => {
    let total = (num1 + num2 + num3)
    total = total.toFixed(2)
    return total 
  }

  totalMsg = valorTotal(valorPrato, valorBebida, valorSobremesa)
  

  const mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${pratoEscolhido} \n- Bebida: ${bebidaEscolhida} \n- Sobremesa: ${sobremesaEscolhida} \n-Total: R$ ${totalMsg} `;
  const msgWpp = encodeURI(mensagem);

  window.location.href = `https://wa.me/5516994476161?text=${msgWpp}`;

})

/* function mandar_mensagem() {
  let pratoEscolhido = document.querySelector(
    ".conteudo-prato-principal .clicado .titulo-prato"
  );
  pratoEscolhido = pratoEscolhido.innerHTML;

  let bebida_escolhida = document.querySelector(
    ".conteudo-prato-bebida .clicado .titulo-prato"
  );
  bebida_escolhida = bebida_escolhida.innerHTML;

  let sobremesa_escolhida = document.querySelector(
    ".conteudo-prato-sobremesa .clicado .titulo-prato"
  );

  sobremesa_escolhida = sobremesa_escolhida.innerHTML;

  let valorPrato = document.querySelector(
    ".conteudo-prato-principal .clicado .preco-prato"
  ).innerHTML;
  valorPrato = valorPrato.replace("R$ ", "");
  valorPrato = valorPrato.replace(",", ".");
  valorPrato = parseFloat(valorPrato);

  let valorBebida = document.querySelector(
    ".conteudo-prato-bebida .clicado .preco-prato"
  ).innerHTML;
  valorBebida = valorBebida.replace("R$ ", "");
  valorBebida = valorBebida.replace(",", ".");
  valorBebida = parseFloat(valorBebida);

  let valorSobremesa = document.querySelector(
    ".conteudo-prato-sobremesa .clicado .preco-prato"
  ).innerHTML;
  valorSobremesa = valorSobremesa.replace("R$ ", "");
  valorSobremesa = valorSobremesa.replace(",", ".");
  valorSobremesa = parseFloat(valorSobremesa);

  let valorTotal = valorPrato + valorBebida + valorSobremesa;

  let totalMsg = total.toFixed(2);

  const mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${pratoEscolhido} \n- Bebida: ${bebida_escolhida} \n- Sobremesa: ${sobremesa_escolhida} \n-Total: R$ ${totalMsg} `;
  const msg_wpp = encodeURI(mensagem);

  window.location.href = `https://wa.me/5516994476161?text=${msg_wpp}`;
}
 */