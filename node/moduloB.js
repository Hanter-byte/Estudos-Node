let a = 10 //apenas visivel no modulo

module.exports = { // visivel fora do modulo
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa noite'
    },
    soma(i, j) {
        return i + j
    },
    contador(i, j) {
        for (i; i <= j; i++) {
            console.log(i);
            if (i == j)
                return ("")
        }
    }
}