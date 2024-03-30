var answer = prompt("pick one: cat, dog, cow, or pig");
alert(sound(answer));

function sound(input) {
    if (typeof input === 'string') {
        if (input === 'cat') {
            return "meow meow meow meowwwwwww";
        } else if (input === 'dog') {
            return "woof woof woof bark bark";
        } else if (input === 'cow') {
            return "MoOOOooooOoOoooOOoO";
        } else if (input === 'pig') {
            return "oink oink oink";
        } else{
            return "i said to pick one :("
        }
    }
}