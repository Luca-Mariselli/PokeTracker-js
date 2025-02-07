import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import './style.css'
import HomeComponent from './components/HomeComponent.vue'
import ListComponent from './components/ListComponent.vue'
import SetCardsComponent from './components/SetCardsComponent.vue'
import SingleCardComponent from './components/SingleCardComponent.vue'

import App from './App.vue'
import axios from 'axios';


const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/' , component: HomeComponent},
        {path: '/sets' , component: ListComponent},
        {path: '/cards' , component: SetCardsComponent},
        { path: '/single-card', component: SingleCardComponent, props: true },    
    ]
});

// const options = {
//     method: 'GET',
//     url: 'https://api.pokemontcg.io/v2/sets',
//     // params: {query: 'harry%20potter', include_adult: 'false', language: 'it-IT', page: '1'},
//     headers: 'ca4222ed-b799-4c8a-9803-46b4cd13efc6'
    
//   };
  
//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });



const app= createApp(App)

app.use(router)

app.mount('#app')