class Product {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = 0;
    }

    addToStock(quantity) {
        this.inStock += quantity;
    }

    calculateDiscount(discountPercentage) {
        const discountAmount = this.price * (discountPercentage / 100);
        return this.price - discountAmount;
    }
}

module.exports = Product;

const Product = require('./product');

const produto = new Product("Notebook", "Notebook Nitro 5", 1000.00);
produto.addToStock(10);

console.log(`Nome do produto: ${produto.name}`);
console.log(`Descrição do produto: ${produto.description}`);
console.log(`Valor do produto: R$${produto.price.toFixed(2)}`);
console.log(`Quantidade no estoque: ${produto.inStock}`);
console.log("==================================");
const desconto = 5;
const novoValor = produto.calculateDiscount(desconto);
console.log(`Desconto no produto: ${desconto}%`);
console.log(`Novo valor do produto: R$${novoValor.toFixed(2)}`);