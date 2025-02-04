<script>
import { ref } from 'vue';
export default {
    data() {
        return {
            id: this.$route.query.id, // Query string ID
            setSymbol: this.$route.query.setSymbol,
            setName: this.$route.query.setName,
            totalNumber: this.$route.query.totalNumber,
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
        <img class="align-self-center" :src="setSymbol" alt="">
    </div>

    <div class="my-container">
        <div class="my-cards-container d-flex flex-wrap justify-content-start">
            <router-link class="position-relative py-4" v-for="pokemon in jsonData" :key="pokemon.id" :to="{
                path: `/single-card`,
                query: {
                    setId: id,
                    pokemonId: pokemon.id
                }
            }">
                <span class="my-tag">
                    <span>{{ pokemon.rarity }}</span>
                    <span>{{ pokemon.number }}/{{ totalNumber }}</span>
                </span>
                <img :src="pokemon.images.small" alt="">
            </router-link>
        </div>
    </div>
</template>


<style scoped>
.my-container {
    width: 80vw;
    margin: 3rem auto;
    background-color: rgba(255, 247, 236, 0.838);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.712), transparent 0 0 0, transparent 0 0 0, transparent 0 0 0, transparent 0 0 0;
}


.my-cards-container {
    position: relative;

    a {
        width: calc(100%/5);
        display: flex;
        justify-content: center;
    }

    img {
        width: 240px;
        border: 3px solid rgb(0, 0, 0);
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

.my-tag {
    position: absolute;
    left: 10;
    background-color: rgba(0, 0, 0, 0.713);
    width: 240px;
    height: 40px;
    bottom: 50px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
}
</style>