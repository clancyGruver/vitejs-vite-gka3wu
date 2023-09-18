import { createApp } from 'vue'
import App from './App.vue'
import './style.css';

// monkeyPatching BigInt
// @ts-ignore
BigInt.prototype.toJSON = function() { return this.toString() };

createApp(App).mount('#app')
