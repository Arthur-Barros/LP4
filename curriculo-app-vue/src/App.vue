<template>
    <div id="app">
      <Menu />
      <router-view />
    </div>
</template>

<script>
import Menu from "../src/components/Menu";

export default {
  name: "App",
  components: {
    Menu,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: rgb(22, 21, 21);
}

a,
li {
  color: inherit;
  text-decoration: none;
  list-style: none;
}

#app {
  text-align: center;
}
</style>
