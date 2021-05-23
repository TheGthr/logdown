<template>
  <div id="ld-container">
    <Navbar />
    <div id="content">
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
@import url("https://fonts.googleapis.com/css?family=PT+Sans:400,400italic,700|Abril+Fatface");

html {
  font-family: "PT Sans", Helvetica, Arial, sans-serif;
}
@media (min-width: 48em) {
  html {
    font-size: 16px;
  }
}
@media (min-width: 58em) {
  html {
    font-size: 20px;
  }
}

body {
  margin: 0;
}

#ld-container {
  display: flex;
  height: 100vh;
}

/* Content */
#content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: #374151;
  color: #d1d5db;
}
</style>