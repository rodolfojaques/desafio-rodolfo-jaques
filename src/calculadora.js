import dataMenu from "./data-menu"

class Calculadora {
    static DB_MENU = dataMenu
    static pagamento(itens,fator){
        let retorno
        let total = 0        

        itens.forEach(item => {
            const itemTratado = item.split(",")
            if(itemTratado.length !== 2){
                retorno = 'Item inválido!' 
                return
            }

            const codItem = itemTratado[0]

            const quantItem = Number(itemTratado[1])
            if(quantItem < 1){
                retorno = 'Quantidade inválida!'
                return
            }

            const itemPedido = this.DB_MENU.filter((elem)=> elem.nome === codItem)
            if(itemPedido[0] === undefined){
                retorno = 'Item inválido!' 
                return
            }

            if(itemPedido[0].is_extra){
                if(itens.join().includes(itemPedido[0].parent_extra)){}else{
                    retorno = "Item extra não pode ser pedido sem o principal" 
                    return
                }
            } 

            total += (itemPedido[0].valor * quantItem)
        })

        const descontoOuTaxa = total * fator

        return retorno || `R$ ${(total + descontoOuTaxa).toFixed(2)}`.replace(".",",")
    }
}

export default Calculadora