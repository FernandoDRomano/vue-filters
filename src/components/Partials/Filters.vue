<template>
    <form class="w-11/12 mx-auto border rounded-md shadow-lg bg-white">
        <h2 class="font-medium text-xl lg:text-2xl text-center bg-blue-400 text-white py-3 rounded-t-lg">Filtros</h2>
        
        <div class="px-4 sm:px-6 py-4 sm:py-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-4 md:gap-6">
            

            <div class="flex items-center mb-2 sm:flex-col sm:items-start">
                <label class="text-sm sm:text-base font-light mr-2" for="status">Estado</label>
                <select class="text-sm w-full py-1 px-4 bg-gray-300 rounded-md" v-model="status" name="status" id="status">
                    <option v-for="option in options" :key="option.value" :value="option.value">
                        {{option.text}}
                    </option>
                </select>
            </div>

            <div class="flex flex-col mb-2">
                <label class="text-sm sm:text-base font-light mr-2" for="model">Modelo</label>
                <input class="border ring-2 ring-gray-400 outline-none w-full rounded-md bg-gray-300 font-light px-4" v-model="model" type="text" name="model" id="model" placeholder="Ingrese el modelo a buscar">
            </div>
            

            <div class="flex flex-col mb-2">
                <label class="text-sm sm:text-base font-light mr-2" for="min_price">Precio Minimo</label>
                <div class="flex items-center">
                    <input class="flex-grow" v-model="min_price" type="range" name="min_price" id="min_price" min="0" max="20000" step="500">
                    <small class="text-xs font-light ml-2">{{ min_price }}</small>
                </div>
            </div>

            <div class="flex flex-col mb-2">
                <label class="text-sm sm:text-base font-light mr-2" for="max_price">Precio Máximo</label>
                <div class="flex items-center">
                    <input class="flex-grow" v-model="max_price" type="range" name="max_price" id="max_price" min="0" max="20000" step="500">
                    <small class="text-xs font-light ml-2">{{ max_price }}</small>
                </div>
            </div>

            <div class="flex flex-col mb-2">
                <label class="text-sm sm:text-base font-light mr-2" for="from_date">Fecha Desde</label>
                <datepicker
                    class="ring-2 ring-gray-400 outline-none rounded-md px-2 w-full"
                    v-model="from_date"
                    name="from_date"
                    id="from_date"
                    placeholder="Seleccione una fecha"
                    :showYearView="true"
                    format="yyyy"
                    minimum-view="year"
                ></datepicker>
            </div>

            <div class="flex flex-col">
                <label class="text-sm sm:text-base font-light mr-2" for="to_date">Fecha Hasta</label>
                <datepicker
                    class="ring-2 ring-gray-400 outline-none rounded-md px-2 w-full"
                    v-model="to_date"
                    name="to_date"
                    id="to_date"
                    placeholder="Seleccione una fecha"
                    :showYearView="true"
                    format="yyyy"
                    minimum-view="year"
                ></datepicker>
            </div>
        </div>

    </form>
</template>

<script>
    import Datepicker from 'vuejs-datepicker';
    import {mapState, mapMutations} from 'vuex'

    export default {
        name: 'Filters',
        components:{
            Datepicker
        },
        data(){
            return{
                options:[
                    {value: 'all', text: 'Todos'},
                    {value: 'new', text: 'Nuevos'},
                    {value: 'used', text: 'Usados'},
                ]
            }
        },
        methods:{
            ...mapMutations('car', ['setFilter'])
        },
        computed:{
            ...mapState('car', ['filters']),
            
            status:{
                get(){
                    return this.filters.status
                },
                set(value){
                    this.setFilter({
                        filter: 'status',
                        value: value
                    })
                }
            },

            model:{
                get(){
                    return this.filters.model
                },
                set(value){
                    this.setFilter({
                        filter: 'model',
                        value: value
                    })
                }
            },

            min_price:{
                get(){
                    return this.filters.min_price
                },
                set(value){
                    this.setFilter({
                        filter: 'min_price',
                        value: value
                    })
                }
            },

            max_price:{
                get(){
                    return this.filters.max_price
                },
                set(value){
                    this.setFilter({
                        filter: 'max_price',
                        value: value
                    })
                }
            },

            from_date:{
                get(){
                    const date = `${this.filters.from_date}-1-1`
                    return new Date(date)
                },
                set(value){
                    this.setFilter({
                        filter: 'from_date',
                        value: new Date(value).getFullYear()
                    })
                }
            },

            to_date:{
                get(){
                    const date = `${this.filters.to_date}-1-1`
                    return new Date(date)
                },
                set(value){
                    this.setFilter({
                        filter: 'to_date',
                        value: new Date(value).getFullYear()
                    })
                }
            }
        }

    }
</script>
