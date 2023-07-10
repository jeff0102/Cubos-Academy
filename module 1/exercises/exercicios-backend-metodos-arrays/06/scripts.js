const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

// 1 descontextualizar
// 2 iterar hasta encontrar nombre y mascota sino print no encontrado
// 3 si fue encontrado nombre y mascota, luego printar 

const foundOwner = function(pet) {
    const {nome, pets} = usuarios;
    for (let item of usuarios) {
        if (item.pets.includes(pet)) {
        console.log(`O dono(a) do(a) ${pet} é o(a) ${item.nome}`);
        return
        }
    }
    console.log(`Que pena ${pet}, não encontramos seu dono(a)`)
}

foundOwner("Lulu")