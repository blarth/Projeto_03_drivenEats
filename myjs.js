function evento_click(botao) {
  const esta_clicado = document.querySelector(
    ".conteudo-prato-principal .clicado"
  );
  if (esta_clicado !== null) {
    esta_clicado.classList.remove("clicado");
    botao.classList.toggle("clicado");
  } else {
    botao.classList.toggle("clicado");
  }
}

function evento_click_bebida(botao) {
  const esta_clicado_bebida = document.querySelector(
    ".conteudo-prato-bebida .clicado"
  );
  if (esta_clicado_bebida !== null) {
    esta_clicado_bebida.classList.remove("clicado");
    botao.classList.toggle("clicado");
  } else {
    botao.classList.toggle("clicado");
  }
}

function evento_click_sobremesa(botao) {
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

function botao_finalizar() {
  const prato_escolhido = document.querySelector(
    ".conteudo-prato-principal .clicado"
  );
  const bebida_escolhida = document.querySelector(
    ".conteudo-prato-bebida .clicado"
  );
  const sobremesa_escolhida = document.querySelector(
    ".conteudo-prato-sobremesa .clicado"
  );
  const botao_ready = document.querySelector("button");
  const muda_texto_botao = document.querySelector(".finalizar-pedido p");

  if (prato_escolhido !== null) {
    if (bebida_escolhida !== null) {
      if (sobremesa_escolhida !== null) {
        botao_ready.classList.add("finalizar-pedido-correto");
        muda_texto_botao.innerHTML = "Fechar pedido";
        muda_texto_botao.classList.add("padding");
        botao_ready.disabled = false;
      }
    }
  }
}

function mandar_mensagem() {
  let prato_escolhido = document.querySelector(
    ".conteudo-prato-principal .clicado .titulo-prato"
  );
  prato_escolhido = prato_escolhido.innerHTML;

  let bebida_escolhida = document.querySelector(
    ".conteudo-prato-bebida .clicado .titulo-prato"
  );
  bebida_escolhida = bebida_escolhida.innerHTML;

  let sobremesa_escolhida = document.querySelector(
    ".conteudo-prato-sobremesa .clicado .titulo-prato"
  );

  sobremesa_escolhida = sobremesa_escolhida.innerHTML;

  let valor1 = document.querySelector(
    ".conteudo-prato-principal .clicado .preco-prato"
  ).innerHTML;
  valor1 = valor1.replace("R$ ", "");
  valor1 = valor1.replace(",", ".");
  valor1 = parseFloat(valor1);

  let valor2 = document.querySelector(
    ".conteudo-prato-bebida .clicado .preco-prato"
  ).innerHTML;
  valor2 = valor2.replace("R$ ", "");
  valor2 = valor2.replace(",", ".");
  valor2 = parseFloat(valor2);

  let valor3 = document.querySelector(
    ".conteudo-prato-sobremesa .clicado .preco-prato"
  ).innerHTML;
  valor3 = valor3.replace("R$ ", "");
  valor3 = valor3.replace(",", ".");
  valor3 = parseFloat(valor3);

  let total = valor1 + valor2 + valor3;

  let total_msg = total.toFixed(2);

  const mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${prato_escolhido} \n- Bebida: ${bebida_escolhida} \n- Sobremesa: ${sobremesa_escolhida} \n-Total: R$ ${total_msg} `;
  const msg_wpp = encodeURI(mensagem);

  window.location.href = `https://wa.me/5516994476161?text=${msg_wpp}`;
}
