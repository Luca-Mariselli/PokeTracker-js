<script>
export default {
    data() {
        return {
            pokemonId: this.$route.query.pokemonId,
            setId: this.$route.query.setId,
            jsonData: '', // Array di tutte le carte
            card: null,  // La carta specifica da mostrare
        }
    },
    methods: {
        async loadJson() {
            try {
                const response = await fetch(`/data/cardsJson/${this.setId}.json`);
                console.log(response);

                if (!response.ok) {
                    throw new Error(`File ${this.setId}.json non trovato`);
                }

                this.jsonData = await response.json();
                console.log('Jsondata', this.jsonData);

                // Cerca la carta con l'ID corrispondente a pokemonId
                this.card = this.jsonData.find(card => card.id === this.pokemonId);

                // Se la carta non esiste, assegnamo null
                if (!this.card) {
                    console.error('Carta non trovata');
                    this.card = { errore: 'Carta non trovata' };
                }

            } catch (error) {
                console.error('Errore nel caricamento del JSON:', error);
                this.card = { errore: 'File non trovato' };
            }
        }
    },
    mounted() {
        this.loadJson();
    }
}
</script>

<template>
    <main>
        <div v-if="card">
            <h2 v-if="card.errore">{{ card.errore }}</h2>
            <div v-else>
                <h3>{{ card.name }}</h3>
                <img :src="card.images.large" :alt="card.name" />
                <p>{{ card.description }}</p>
            </div>
        </div>
    </main>
</template>

<style scoped></style>