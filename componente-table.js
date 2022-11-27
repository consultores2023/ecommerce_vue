const table = Vue.component('componente-table', {
    props: {
        objetos: Array,
        th_color: Object,
        background_color: Object
    },
    data: {
        keys: [],
        values:[]
    },
    methods: {
        getKeys(objeto) {
            this.keys = Object.keys(objeto);
        },
        getValues(objeto) {
            this.values = Object.values(objeto);
        }
    },
    template: /*html*/`
    <div  >  
        {{getKeys(objetos[0])}}   
        <table class="table" :style="background_color">
                <thead>
                    <tr :style="th_color">
                        <th  scope="col" v-for="objeto in keys"> {{objeto }} </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="objeto in objetos">
                        <td v-for="k in objeto">{{k}}</td>
                    </tr>
                </tbody>
        </table>
    </div>
    `
}
);