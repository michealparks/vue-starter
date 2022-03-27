<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

const log = (...args: string[]) => {
  console.log(...args)
}


</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld
    msg="Hello Vue 3 + TypeScript + Vite"
    @increment="(event) => log('increment', String(event))"
    @toggle="(event) => log('toggle', event)"
  />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
