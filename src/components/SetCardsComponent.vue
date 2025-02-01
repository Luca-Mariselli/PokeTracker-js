<script>
import { ref } from 'vue';
import axios from 'axios';
import store from '../data/store.js';
export default {
    data() {
        return {
            id: this.$route.query.id, // Query string ID
            setSymbol: this.$route.query.setSymbol,
            setName: this.$route.query.setName,
            cardUrl: './data/cardsJson',
            jsonData: ref(null),
        };
    },
    methods: {
        async loadJson() {
            try {
                const response = await fetch(`/data/cardsJson/${this.id}.json`);
                console.log(response)

                if (!response.ok) {
                    throw new Error(`File ${this.id}.json non trovato`);
                }

                this.jsonData = await response.json();
            } catch (error) {
                console.error('Errore nel caricamento del JSON:', error);
                this.jsonData = { errore: 'File non trovato' };
            }
        }
    },
    mounted() {
        this.loadJson()
    }
}
</script>
<template>

    <div class="d-flex my-title-container">

        <div class="mx-auto">{{ this.setName }}</div>
        <img class="align-self-center" :src=this.setSymbol alt="">

    </div>
    <div class="my-container">
        <div class="my-cards-container d-flex flex-wrap justify-content-start">
            <div class="p-4" v-for="pokemon in jsonData">
                <div>
                    <img :src=pokemon.images.small alt="">
                </div>
            </div>
        </div>
    </div>


</template>


<style scoped>
.my-container {
    width: 80vw;
    margin: 0 auto;
}


.my-cards-container {
    div {
        width: calc(100%/5);
        display: flex;
        justify-content: center;
    }

    img {
        width: 240px;
    }
}

.my-title-container {
    background-color: #cd0000;
    height: 130px;
    position: relative;


    img {
        width: auto;
        height: 100px;
        position: absolute;
        right: 1rem;
    }

    div {
        font-size: 4rem;
        color: yellow;
        font-family: 'Pokemon Solid', sans-serif;
        letter-spacing: 5px;
    }
}
</style>