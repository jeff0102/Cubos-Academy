const name = 'Jhinezka Uzcategui';

const creatingUsername = function(name) {
    name = name.toLowerCase();
    for (let char of name) {
        if (char == " ") {
            name = name.replace(" ", "")
        }
    }
    name = "@" + name.slice(0, 12)
    console.log(name)
}

creatingUsername(name)