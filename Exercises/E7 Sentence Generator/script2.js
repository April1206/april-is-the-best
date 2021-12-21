let nouns = ["💗","💔","🧡","🖤","💜","💕","💘","💚"];
let verbs = ["🍋","🥥","🍒","🍓","🍏","🍈","🍉","🍇","🍑"];
let adjectives = ["🦄","🐑","🐮","🐒","🐩","🦝","🦌","🦒","🐿️","🦥"];

function sentence(){ 
let noun = nouns[Math.floor(Math.random () * nouns.length)]
let verb = verbs[Math.floor(Math.random () * verbs.length)]
let adjective = adjectives[Math.floor(Math.random () * adjectives.length)]

let sentence= `I ${noun} MY ${adjective}AND I ${verb} U .`
console.log(sentence);

document.getElementById('sentence').innerHTML = "&quot;" + sentence + "&quot;";
}

sentence()
