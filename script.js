const poemText = `
No céu, Leão e Virgem se encontram, 
estrelas que dançam e brilham sem fim. 
Entre constelações, histórias se contam, 
como luzes que guiam, a noite assim.

Leão, imponente, com força e bravura, 
guarda o céu com seu brilho feroz. 
Virgem, serena, traz paz e ternura, 
no silêncio das estrelas, escuto sua voz.

Entre os astros, juntos passeiam, 
em um balé que só o céu pode ver. 
Leão e Virgem, que nunca fraquejam, 
nos lembram que há sempre algo a aprender.

E assim seguimos, sob esse encanto, 
Leão e Virgem a nos observar. 
No céu estrelado, um eterno recanto, 
onde sonhos e luz se encontram no ar.
`;

const poemContainer = document.getElementById("poem");
let index = 0;

function typePoem() {
    if (index < poemText.length) {
        poemContainer.innerHTML += poemText.charAt(index);
        index++;
        setTimeout(typePoem, 50); // Ajuste a velocidade da digitação
    }
}

window.onload = typePoem;
