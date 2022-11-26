const Feature = Vue.component('componente-card', {
    props: {
        name: String,
        brand: String,
        price: String,
        href: String
    },
    template: /*html*/`
    <div id="product1" class="pro" >
        <div class="pro-container">
                <img v-bind:src="href" alt="">
                <div class="des">
                    <span>{{brand}}</span>
                    <h5> {{name}}</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>{{price}}</h4>
                </div>
                <a href=""><i class="fal fa-shopping-cart cart"></i></a>
        </div>
    </div>
    `
}
);