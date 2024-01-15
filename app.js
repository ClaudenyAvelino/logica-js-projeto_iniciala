alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute

//enquanto chute não for igual a número secreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um numero entre 1 e 10');

    //se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        console.log(`Isso ai você descobriu o número secreto ${numeroSecreto}`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }
}
