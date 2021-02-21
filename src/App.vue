<template>
  <div id="ld-container" class="flex h-screen">
    <Navbar />
    <div
      id="content"
      class="flex justify-center items-center w-screen bg-gray-700 text-gray-300"
    >
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

/* Content */
#content {
  background-color: #282c34;
}
</style>