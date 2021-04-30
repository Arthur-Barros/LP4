<template>
    <div id="app">
      <Home_Curriculo
        name="Arthur Barros"
        idade="19"
        civil="Solteiro"
        naturalidade="MT - Cuiabá"
        nacionalidade="Brasil"
      />
    </div>
</template>

<script>
import Home_Curriculo from "./components/Home_Curriculo.vue";

export default {
  name: "App",
  components: {
    Home_Curriculo,
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
