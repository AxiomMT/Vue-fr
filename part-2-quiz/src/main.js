/*  Course version (not working) */
// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'

// Vue.config.productionTip = false

// new Vue({
// 	router,
// 	render: (h) => h(App)
// }).$mount('#app');

/* Custom version (working) */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
