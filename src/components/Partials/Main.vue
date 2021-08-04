<template>
    <div class="bg-gray-100 min-h-screen">
        <div class="container mx-auto pb-5 pt-5">
            <filters class="mb-5"></filters>
            <car-list :cars="getCartsFilters"></car-list>
        </div>
    </div>
</template>

<script>
    import CarList from '@/components/Car/CarList.vue'
    import Filters from '@/components/Partials/Filters.vue'
    import { mapGetters } from 'vuex'

    export default {
        name: 'Main',
        components:{
            CarList,
            Filters
        },
        computed:{
            ...mapGetters('car', ['getCartsFilters'])
        }
    }
</script>
