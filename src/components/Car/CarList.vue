<template>
    <div class="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <car-item v-for="car in cars" :key="car.id" :car=car></car-item>
    </div>
</template>

<script>
    import CarItem from './CarItem.vue'

    export default {
        name: 'CarList',
        props:{
            cars:{
                required: true,
                type: Array
            }
        },
        components:{
            CarItem
        }
    }
</script>
