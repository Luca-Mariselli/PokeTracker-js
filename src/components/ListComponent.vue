<script>
import axios from 'axios';
import store from '../data/store.js';

export default {
    data() {
        return {
            store,
            searchText: '',
            originalSets: [] // 🔹 Mantiene una copia originale dei set
        };
    },
    computed: {
        // 🔹 Filtra i set in tempo reale
        filteredSets() {
            if (!this.searchText) {
                return this.originalSets; // Mostra tutti se non c'è ricerca
            }
            return this.originalSets.filter(set =>
                set.name.toLowerCase().includes(this.searchText.toLowerCase())
            );
        }
    },
    methods: {
        getSets() {
            axios
                .get('https://api.pokemontcg.io/v2/sets', {
                    headers: {
                        'X-Api-Key': 'ca4222ed-b799-4c8a-9803-46b4cd13efc6'
                    },
                    params: { orderBy: 'releaseDate' }
                })
                .then(response => {
                    this.originalSets = response.data.data; // 🔹 Salva una copia dei dati
                    this.store.mySets = [...this.originalSets]; // 🔹 Mantiene i dati originali
                })
                .catch(error => console.error("Errore nel caricamento:", error));
        }
    },
    mounted() {
        this.getSets();
    }
};
</script>

<template>
    <main>
        <div class="container p-3">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="search-container">
                        <input v-model="searchText" type="text" class="form-control search-input"
                            placeholder="Search Sets...">
                        <i class="fas fa-search search-icon"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="d-flex flex-wrap justify-content-start">
                <router-link class="card my-5" id="set-card" v-for="set in filteredSets" :key="set.id"
                    :to="{ path: '/cards', query: { id: set.id, setSymbol: set.images.symbol, setName: set.name, totalNumber: set.printedTotal } }">
                    <div class="card-image h-50">
                        <img class="object-fit-contain" :src="set.images.logo" />
                    </div>
                    <div class="h-50">
                        <div class="h-100">
                            <div class="h-50 my-set-name">{{ set.name }}</div>

                            <div class="h-50 d-flex justify-content-between align-items-end px-1">
                                <div class="d-flex flex-column">
                                    <span>Cards:</span>
                                    <span>{{ set.printedTotal }}</span>
                                </div>
                                <div class="d-flex flex-column">
                                    <span class="align-self-end">Released:</span>
                                    <span>{{ set.releaseDate }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </main>
</template>

<style scoped>
.my-container {
    width: 80vw;
    margin: 0 auto;
}



.card {
    margin: 0 30px;
    height: 500px;
    width: 250px;
    background-color: #fff;
    border: 5px solid black;
    box-shadow: 0 0 0 7px #fff, 0 0 8px 5px #000;


}

.card:hover {
    transform: scale(1.1);
    transition: 0.5s;
}



.card-image {
    border-bottom: 5px solid #000;
    z-index: 1;
}

#set-card>.card-image {
    background-color: #cd0000;
    display: flex;
    align-items: center;
    justify-content: center;
}

#set-card>.card-image>img {
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

.search-container {
    position: relative;
}

.search-input {
    height: 50px;
    border-radius: 30px;
    padding-left: 35px;
    border: none;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
}

.search-icon {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    color: #888;
}
</style>
