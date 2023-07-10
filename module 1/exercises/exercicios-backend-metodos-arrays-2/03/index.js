const marketList = ["arroz", "feijão", "carne", "vodka", "macarrão"];
const bannedItems = ["cerveja", "vodka"];
let unauthorized = null;

const verifyingList = function(list) {
    unauthorized = list.some((item) => bannedItems.includes(item));
  if (unauthorized === false) {
    console.log("Tudo certo, vamos às compras!");
  } else {
    console.log("Revise sua lista. Possui bebida com venda proibida!");
  }
};

verifyingList(marketList);
