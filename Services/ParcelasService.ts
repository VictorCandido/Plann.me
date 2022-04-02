export default class ParcelasService {
    constructor() {}

    getData() {
        return [
            { id: 1, descricao: 'Produto 1', parcelasPagas: 1, parcelasTotal: 10, parcelaValor: 150, ultimoPagamento: new Date() },
            { id: 2, descricao: 'Produto 2', parcelasPagas: 1, parcelasTotal: 10, parcelaValor: 150, ultimoPagamento: new Date() },
            { id: 3, descricao: 'Produto 3', parcelasPagas: 1, parcelasTotal: 10, parcelaValor: 150, ultimoPagamento: new Date() },
            { id: 4, descricao: 'Produto 4', parcelasPagas: 1, parcelasTotal: 10, parcelaValor: 150, ultimoPagamento: new Date() },
            { id: 5, descricao: 'Produto 5', parcelasPagas: 1, parcelasTotal: 10, parcelaValor: 150, ultimoPagamento: new Date() }
        ]
    }
}