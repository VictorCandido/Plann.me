export default class Parcela {
    #Id: string;
    #Descricao: string;
    #TotalParcela: number;
    #ValorParcela: number;
    
    constructor(descricao: string, totalParcela: number, valorParcela: number, id?: string) { 
        this.#Id = id || '';
        this.#Descricao = descricao;
        this.#TotalParcela = totalParcela;
        this.#ValorParcela = valorParcela;
    }

    get id(): string {
        return this.#Id;
    }

    set id(id: string) {
        this.#Id = id;
    }

    get descricao(): string {
        return this.#Descricao;
    }

    set descricao(descricao: string) {
        this.#Descricao = descricao;
    }

    get totalParcelas(): number {
        return this.#TotalParcela;
    }

    set totalParcelas(totalParcelas: number) {
        this.#TotalParcela = totalParcelas;
    }

    get valorParcela(): number {
        return this.#ValorParcela;
    }

    set valorParcela(valorParcela: number) {
        this.#ValorParcela = valorParcela;
    }

}