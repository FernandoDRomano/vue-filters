<template>
    <div>
        <paginate name="cars" :list="cars" :per="12" class="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <car-item v-for="car in paginated('cars')" :key="car.id" :car=car></car-item>
        </paginate>
        <paginate-links 
            for="cars" 
            class="flex justify-center mt-5"
            :show-step-links="true"
            :limit="2"
            :classes="{
                'ul': ['flex', 'justify-center', 'items-center', 'my-3'],
                '.active': ['bg-blue-800'],
                'li': ['px-3', 'py-2', 'sm:px-4', 'sm:py-3', 'bg-blue-500', 'text-white', 'font-semibold', 'border', 'border-blue-800'],
                'a': ['cursor-pointer', 'text-xs']
            }"
        ></paginate-links>
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
        data(){
            return {
                paginate: ['cars']
            }
        },
        components:{
            CarItem
        }
    }
</script>
