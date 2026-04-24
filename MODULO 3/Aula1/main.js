const nome = 'Maria';
const precoProduto = 200;
const percentualDesconto = 10;

const desconto = (percentualDesconto*precoProduto)/100;

console.log(`Olá, ${nome}! O produto custa ${precoProduto}`);
console.log(`Desconto de ${percentualDesconto}%: R$${desconto}`);
console.log(`Preço final R$${precoProduto-desconto}`);
console.log(`Preço acima de R$100: ${(precoProduto-desconto) > 100 ? true : false}`);
console.log(`Desconto é valido: ${0 <= desconto <= 100 ? true: false}`)

