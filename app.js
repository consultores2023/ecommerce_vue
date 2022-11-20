var app = new Vue({
    el: '#app',
    data: {
        message: 'Hola Orión',
        contador: 0,
        bienvenida: "Bienvenido a Vue 2",
        carta: {
            imagen: "img/hero4.png",
            home_image: "img/home.png",
            titulo: "Sticker 1",
            descripcion: "Hermosos sticker que se pegan a la pared",
            boton: "Ver",
            precio: 2990.00
        },
        precioIva:0,
        nombre: "",
        numero:290
    },
    methods: {
        sumar() {
            app.contador = app.contador + 1
            document.getElementById('counting').innerHTML = app.contador;
        },
        restar() {
            app.contador = app.contador - 1
            document.getElementById('counting').innerHTML = app.contador;
        },
        mostrarPrecio(){
            alert(`Este hermoso ${this.carta.titulo} sale ${this.carta.precio}`)
        },
        calcularIva(){
            this.precioIva = this.carta.precio * 1.21
            return this.precioIva; 
        }
    },
    computed:{
        mostrarNombre(){
            // la obligación de return algo
            return this.nombre.toUpperCase()
        }
    }
})