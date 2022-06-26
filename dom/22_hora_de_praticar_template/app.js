new Vue({
    el: '#desafio',
    data: {
        nome: 'Ana Caroline',
        idade: '30',
        link:'https://casa.abril.com.br/wp-content/uploads/2021/05/Descubra-os-significados-de-cada-flor-goodhousekeeping-01.jpg?resize=630,940'
    },
    methods: {
        multiplicacao: function(){
            return this.idade*3
        },
        sorteio: function(){
            return (Math.random(0,1))
        }
    }

})