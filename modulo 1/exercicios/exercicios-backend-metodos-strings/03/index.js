const text = "Aprenda programar do zero na Cubos Academy";

const rigthLink = function(promt) {
    promt = promt.toLowerCase();
    for (let char of promt) {
        if (char == " ") {
            promt = promt.replace(" ", "-");
         }
    }
    console.log(`${promt}`)

}

rigthLink(text)
