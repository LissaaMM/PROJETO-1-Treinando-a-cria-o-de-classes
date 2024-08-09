class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantility) {
        this.inStock += quantility
    }

    calculateDiscount(discountPercentage) {
        const discountQuantia = this.price * (discountPercentage / 100)
        return this.price - discountQuantia
    }
}

const produto = new Product("Notebook", "Notebook Acer Aspire 5", 2.916.97)
produto.addToStock(10)

console.log(`Nome do produto: ${produto.name}`)
console.log(`Descrição do produto: ${produto.description}`)
console.log(`Valor do produto: R$${produto.price.toFixed(2)}`)
console.log(`Quantidade no estoque: ${produto.inStock}`)
console.log("==================================")
const desconto = 5
const novoValor = produto.calculateDiscount(desconto)
console.log(`Desconto no produto: ${desconto}%`)
console.log(`Novo valor do produto: R$${novoValor.toFixed(2)}`)
