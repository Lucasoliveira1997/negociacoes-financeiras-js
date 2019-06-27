class DateHelper {
    constructor(){throw new Error("Não é possível instanciar DateHelper")}

    static textoParaData(texto){
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error ("Formato de data inválido - correto: dd-mm-aaaa")
        return new Date(texto.split("-").map(e => parseInt(e)))       
    }

    static dataParaTexto(data){
        return console.log(`${data.getDate()}/${(data.getMonth() +1)}/${data.getFullYear()}`)
    }
}