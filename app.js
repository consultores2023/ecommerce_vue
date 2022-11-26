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
        numero: 290,
        navbarItems: [
            { label: "Shop", href: "shop.html" },
            { label: "About", href: "about.html" },
            { label: "Blog", href: "blog.html" },
            { label: "Contact", href: "contact.html" },
            { label: "Cart", href: "cart.html" }],
        heroItems: ["Trade-in-offer", "Super Value deals", "On all product", "Save more with coupons", "Shop Now"],
        featureItems: [{ label: "Envio gratutito", href: "img/features/f1.png" },
                        { label: "Orden Online", href: "img/features/f2.png" },
                        { label: "Ahorra Dinero", href: "img/features/f3.png" },
                        { label: "Promotions", href: "img/features/f4.png" },
            { label: "Happy Sell", href: "img/features/f5.png" },
            { label: "24/7 Support", href: "img/features/f6.png" }],
        productItems: [{ brand: "adidas", name: "Cartoon Astronaut T-shirt", price: "$78", href: "img/products/f1.jpg" },
            { brand: "adidas", name: "Cartoon Astronaut T-shirt", price: "$78", href: "img/products/f2.jpg" },
            { brand: "adidas", name: "Cartoon Astronaut T-shirt", price: "$78", href: "img/products/f3.jpg" },
            { brand: "adidas", name: "Cartoon Astronaut T-shirt", price: "$78", href: "img/products/f4.jpg" },
            { brand: "adidas", name: "Cartoon Astronaut T-shirt", price: "$78", href: "img/products/f5.jpg" },
            { brand: "adidas", name: "Cartoon Astronaut T-shirt", price: "$78", href: "img/products/f6.jpg" },
            { brand: "adidas", name: "Cartoon Astronaut T-shirt", price: "$78", href: "img/products/f7.jpg" },
            { brand: "adidas", name: "Cartoon Astronaut T-shirt", price: "$78", href: "img/products/f8.jpg" }],
        usuario: "",
        logged: true,
        showHidden: true,
        esMayor: false,
        texto: "Mis card de productos - componentes",
        edad: "25",
        estilo1: { fontSize: '10px',  'flex-direction': 'row', 'margin': '10px'},
        estilo2: { fontSize: '10px', 'flex-direction': 'row', 'margin': '10px' },
        estilo3: { fontSize: '15px',  'flex-direction': 'row', 'margin': '10px'},
        estilo4: { color: 'red'},
        estilo5: { color: '#6DF743' },
        estilo6: { color: '#00B9AE' },
        estilo7: { 'background-color': '#02C3BD' },
        estilo8: { 'background-color': '#037171' },
        estilo9: { 'background-color': '#03312E' },
    
    },
    methods: {
        sumar() {
            app.contador = app.contador + 1
            },
        restar() {
            app.contador = app.contador - 1            
        },
        mostrarPrecio(){
            alert(`Este hermoso ${this.carta.titulo} sale ${this.carta.precio}`)
        },
        calcularIva(){
            this.precioIva = this.carta.precio * 1.21
            return this.precioIva; 
        },
        returnValue() {
            return this.contador
        },
        hidden() {
            if (this.showHidden){
            this.showHidden = false
            } else {
                this.showHidden = true
            }
        }
    },
    computed:{
        mostrarNombre(){
            // la obligación de return algo
            return this.nombre.toUpperCase()
        }
    }
})