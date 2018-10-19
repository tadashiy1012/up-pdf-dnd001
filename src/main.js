import Vue from 'vue';
import Vuex from 'vuex';
import pdfjs from 'pdfjs-dist';
import MainContainer from './MainContainer.vue';

pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.bundle.js';

Vue.use(Vuex);

const store = {
    state: {
        books: []
    },
    getters: {
        books: state => state.books,
    },
    mutations: {
        addBook(state, payload) {
            state.books = [...state.books, payload.book]
        }
    },
    actions: {
        addBook({commit}, payload) {
            commit('addBook', payload);
        }
    }
};

const app = new Vue({
    template: '<main-container />',
    components: {MainContainer},
    store: new Vuex.Store(store)
}).$mount('#app');

console.log(app);