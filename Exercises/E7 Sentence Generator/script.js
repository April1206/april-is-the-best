console.log('it works')

let nouns = ["heart","cloud","ocean"];
let verbs = ["look","make","continue"];
let adjectives = ["good", "different","possible"];

let noun = nouns [Math.floor(Math.random() * nouns.length)]
let verb = verbs [Math.floor(Math.random() * verbs.length)]
let adjective = adjectives [Math.floor(Math.random() * adjectives.length)]

console.log(noun)
console.log(verb)
let sentence = `my ${noun} leaps ${adjective} when i ${verb} a rainbow in the sky.`

console.log(sentence)


