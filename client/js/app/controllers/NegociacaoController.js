class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document)  

        this._inputData = $("#data")
        this._inputQuantidade = $("#quantidade")
        this._inputValor = $("#valor")
    }

    adiciona(event){
        event.preventDefault()        
        //x = new DateHelper() daria erro, pq os metodos da classe sao estaticos, nao precisa instanciar
        
        let data = DateHelper.textoParaData(this._inputData.value)
        console.log(data)    
                
        let negociacao = new Negociacao(data, this._inputQuantidade.value, this._inputValor.value)
        console.log(negociacao)        

        DateHelper.dataParaTexto(negociacao.data)
    }
}