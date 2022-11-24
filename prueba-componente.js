Vue.component('prueba-componente', {
    data:function() {
        return {
            property: 'value',
        };
    },
    props:["texto1", "edadtomi"],
    template: /*html*/`
        <div>
            <h2> Bienvenido {{ property }} </h2>
            <p class="">Soy un parrafo</p>
            <h2>{{ texto1 }}</h2>
            <p>Tomi tiene {{edadtomi}}</p>
        </div>`
});

