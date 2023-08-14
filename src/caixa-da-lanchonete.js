import Calculadora from "./calculadora";

class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {
        if(itens.length === 0){
            return "Não há itens no carrinho de compra!"
        }

        if(metodoDePagamento === "dinheiro"){
            return Calculadora.pagamento(itens,-0.05)

        }else if(metodoDePagamento === "debito"){
            return Calculadora.pagamento(itens,0)
        
        }else if(metodoDePagamento === "credito"){
            return Calculadora.pagamento(itens,0.03)

        }else{
            return "Forma de pagamento inválida!"
        }
    }
}

export { CaixaDaLanchonete };
