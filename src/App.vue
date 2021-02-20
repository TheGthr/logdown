<template>
  <div id="ld-container" class="flex h-screen">
    <Navigator />
    <div class="flex w-screen bg-gray-600">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigator from '@/components/Navigator';
export default {
  components: {
    Navigator
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
