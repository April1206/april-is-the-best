let nouns = ["๐","๐","๐งก","๐ค","๐","๐","๐","๐"];
let verbs = ["๐","๐ฅฅ","๐","๐","๐","๐","๐","๐","๐"];
let adjectives = ["๐ฆ","๐","๐ฎ","๐","๐ฉ","๐ฆ","๐ฆ","๐ฆ","๐ฟ๏ธ","๐ฆฅ"];

function sentence(){ 
let noun = nouns[Math.floor(Math.random () * nouns.length)]
let verb = verbs[Math.floor(Math.random () * verbs.length)]
let adjective = adjectives[Math.floor(Math.random () * adjectives.length)]

let sentence= `I ${noun} MY ${adjective}AND I ${verb} U .`
console.log(sentence);

document.getElementById('sentence').innerHTML = "&quot;" + sentence + "&quot;";
}

sentence()
