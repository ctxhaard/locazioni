<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/Home.vue'
</script>

<template>
    <p>
      <router-link to="/">Home</router-link>
      <router-link to="/scad">Scad</router-link>
      <router-link to="/contab">Contab</router-link>
    </p>  
    <router-view></router-view>
</template>

<style>

</style>
