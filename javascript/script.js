let btnTarefa = document.querySelector('#adctarefa')
let tarefaDigitada = document.querySelector('#tarefas')











let tarefaNova=`<div class="col-md-4">
<div class="card-tarefa">
    <div class="texto-tarefa">
        ${valorDigitado}
    </div>
    <div class="botao-tarefa">
        <img src="./imagens/chek.png" alt="check" width="40px" align="right">
    </div>
</div>
</div>`

tarefas.innerHTML += tarefaNova