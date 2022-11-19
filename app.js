var app = new Vue({
    el: '#center',
    data: {
        message: 'Hola Orión',
        contador: 0
    },
    methods: {
        sumar() {
            app.contador = app.contador + 1
            document.getElementById('counting').innerHTML = app.contador;
        },
        restar() {
            app.contador = app.contador - 1
            document.getElementById('counting').innerHTML = app.contador;
        }
    }
})