<template>
  <section id="container" class="d-flex flex-column align-items-center pb-5">
    <div id="bg" class="bg-info bg-gradient"></div>
    <div id="nav" class="my-5 fw-bold">
      <router-link to="/" class="btn btn-secondary mx-2">Home</router-link>
      <router-link to="/projects" class="btn btn-secondary mx-2">Mes projets</router-link>
    </div>
    <router-view/>
  </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;600;700&display=swap');
#app {
  font-family: 'Raleway', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav a.router-link-exact-active {
  color: #27D0F2;
}

#bg {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
</style>
