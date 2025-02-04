<script>
import axios from 'axios';
export default {
    data() {
        return {
            pokemonId: this.$route.query.pokemonId,
            setId: this.$route.query.setId,
            card: null,  // Card to show
        }
    },
    methods: {
        getCard() {
            console.log(this.pokemonId)
            axios
                .get(`https://api.pokemontcg.io/v2/cards/${this.pokemonId}`, {
                    headers: {
                        'X-Api-Key': 'ca4222ed-b799-4c8a-9803-46b4cd13efc6'
                    }

                }).then((response) => {
                    this.card = response.data.data
                })
                .catch(error => console.error("Errore nel caricamento:", error))
        },

    },
    mounted() {
        this.getCard()
    }
}
</script>

<template>
    <main>
        <a class="my-back-btn" href="javascript:history.back()">Go Back</a>
        <div v-if="this.card">
            <div class="d-flex container">
                <img class="my-card-img" :src=card.images.large alt="">

                <div class="my-info-container">
                    <div><b>Name:</b> {{ this.card.name }}</div>
                    <div><b>Rarity:</b> {{ this.card.rarity }}</div>
                    <div><b>Set:</b> {{ this.card.set.name }}</div>
                    <div><b>Number:</b> {{ this.card.number }}/{{ this.card.set.total }}</div>
                    <div><b>Artist:</b> {{ this.card.artist }}</div>
                    <span class="my-price-container">
                        <span class="d-flex align-items-center">
                            <a :href=this.card.cardmarket.url target="_blank"><img src="../data/img/cardmarket-logo.png"
                                    alt="">
                            </a>
                            <b>
                                Avg <a class="my-cm" :href=this.card.cardmarket.url target="_blank">Cardmarket</a>
                                sell price:
                            </b> {{ this.card.cardmarket.prices.averageSellPrice
                            }} $
                        </span>
                        <!-- <span v-if="this.card.tcgplayer.prices.normal.mid" class="d-flex align-items-center">
                            <a :href=this.card.tcgplayer.url target="_blank"><img src="../data/img/tcgplayer-logo.png"
                                    alt="">
                            </a>
                            <b>
                                Avg <a class="my-tcgp" :href=this.card.tcgplayer.url target="_blank">TCGplayer</a>
                                sell price:
                            </b> {{ this.card.tcgplayer.prices.normal.mid
                            }} $
                        </span> -->
                    </span>

                </div>

            </div>

        </div>

    </main>
</template>

<style scoped>
.my-back-btn {
    background-color: #375da9;
    padding: 1rem;
    border-radius: 25px;
    color: white;
    font-weight: bold;
    margin-top: 2rem;
    margin-left: 2rem;
}

.my-back-btn:hover {
    transform: scale(1.1);
    transition: 0.3s;
}

.container {
    background-color: rgb(255, 247, 236);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.712), transparent 0 0 0, transparent 0 0 0, transparent 0 0 0, transparent 0 0 0;
}

.my-card-img {
    width: 35%;
    margin: 2rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.7), transparent 0 0 0, transparent 0 0 0, transparent 0 0 0, transparent 0 0 0;

}

.my-info-container {
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
    padding: 3rem;
    background-color: rgba(18, 18, 18, 0.184);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.885), transparent 0 0 0, transparent 0 0 0, transparent 0 0 0, transparent 0 0 0;

    width: 100%;
    border-radius: 30px;
    font-size: 20px;
    position: relative;

    div {
        padding: 0.2rem;
        border-left: 1px solid gray;
        border-right: 1px solid gray;
        border-bottom: 2px solid black;
        display: flex;
        justify-content: start;




        b {
            width: 30%;
        }
    }

}

.my-price-container {
    justify-self: baseline;
    position: absolute;
    bottom: 0;
    left: 0;
    border: 2px black solid;
    padding: 2rem;
    margin: 2rem;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    width: 92%;


    img {
        width: 50px;
        margin: 1rem;
    }

    b {
        width: 40%;
    }



    .my-cm {
        color: #375da9;
    }

    .my-tcgp {
        color: #dc8420;
    }

}
</style>