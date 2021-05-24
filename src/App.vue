<template>
  <div id="ld-container">
    <Navbar />
    <div id="app-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
#ld-container {
  display: flex;
  height: 100vh;
}

/* Content */
#app-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: #374151;
  color: #d1d5db;
}
</style>
