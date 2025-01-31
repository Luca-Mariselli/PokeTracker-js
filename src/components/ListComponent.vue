<script>
import axios from 'axios';
import store from '../data/store.js';
export default {
    components: {

    },
    data() {
        return {
            store,
            mySets: [],

        }
    },
    methods: {
        searchSets() {
            const options = {
                method: 'GET',
                url: 'https://api.pokemontcg.io/v2/sets',
                headers: 'ca4222ed-b799-4c8a-9803-46b4cd13efc6'
            };
            axios
                .request(options)
                .then(response => {
                    this.store.mySets = response.data
                    console.log(response.data)

                });
        },
    },
    mounted() {
        this.searchSets()
    }
}
</script>

<template>



    <main>
        <div class="d-flex flex-wrap justify-content-evenly">
            <div class="setCard m-4 d-flex align-items-center" v-for="(set, i) in store.mySets.data">

                <div class="w-100 align-items-center d-flex flex-column">
                    <div class="setName">{{ set.name }}</div>
                    <img style="width: 250px; height: 250px;" class=" object-fit-contain" :src=set.images.logo alt="">
                    <div class="align-self-start d-flex justify-content-between w-100">
                        <div>Total cards: {{ set.printedTotal }}</div>
                        <div>Released: {{ set.releaseDate }}</div>
                    </div>
                </div>


            </div>
        </div>
    </main>



</template>

<style scoped></style>