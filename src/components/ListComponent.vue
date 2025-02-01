<script>
import axios from 'axios';
import store from '../data/store.js';
export default {
    components: {

    },
    data() {
        return {
            store,
            id: '',
        }
    },
    methods: {
        searchSets() {
            const options = {
                method: 'GET',
                url: 'https://api.pokemontcg.io/v2/sets',
                headers: 'ca4222ed-b799-4c8a-9803-46b4cd13efc6',
                params: {
                    orderBy: 'releaseDate'
                }
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

        <div class="d-flex flex-wrap justify-content-around">
            <router-link class="card my-5" id="spiderman" v-for="(set, i)  in store.mySets.data" :key="set.id"
                :to="{ path: '/cards', query: { id: set.id, setSymbol: set.images.symbol, setName: set.name } }">


                <div class="card-image h-50">
                    <img class="object-fit-contain" :src=set.images.logo />
                </div>
                <div class="h-50">
                    <div class="h-100">
                        <div class="h-50 my-set-name">{{ set.name }}</div>

                        <div div class="h-50 d-flex justify-content-between align-items-end px-1">

                            <div class="d-flex flex-column">
                                <span>Cards:</span>
                                <span>{{ set.printedTotal }}</span>

                            </div>
                            <div class="d-flex flex-column">
                                <span class="align-self-end">Release:</span>
                                <span>{{ set.releaseDate }}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </router-link>
        </div>


    </main>



</template>

<style scoped>
.card {
    margin: 0 30px;
    height: 500px;
    width: 250px;
    background-color: #fff;
    border: 5px solid black;
    box-shadow: 0 0 0 7px #fff, 0 0 8px 5px #000;
}

.card-image {
    border-bottom: 5px solid #000;
    z-index: 1;
}

#spiderman>.card-image {
    background-color: #cd0000;
    display: flex;
    align-items: center;
    justify-content: center;
}

#spiderman>.card-image>img {
    width: 200px;
    height: 200px;
}

.my-set-name {
    display: flex;
    justify-content: center;
    font-size: 2rem;
    text-align: center;
    width: 80%;
    margin: 0 auto;
    font-weight: 600;
}
</style>