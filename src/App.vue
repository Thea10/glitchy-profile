<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from "@/components/Main";

export default {
  name: "App",
  components: {
    Main
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

body {
  margin: 0;
  background: $leftBg;
  color: $textLinks;
  overflow-x: hidden;

  a{
    text-decoration: none;

  }
  @include md-min {
    background: -moz-linear-gradient(to right, $leftBg 50%, $rightBg 50%);
    background: -o-linear-gradient(to right, $leftBg 50%, $rightBg 50%);
    background: -webkit-linear-gradient(to right, $leftBg 50%, $rightBg 50%);
    background: linear-gradient(to right, $leftBg 50%, $rightBg 50%);
  }
}
#app {
  font-family: 'Roboto Mono', monospace, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 8px !important;
  height: 5px !important;
}

::-webkit-scrollbar-thumb {
  border-radius: 7px !important;
  background-color: $shadow;
  box-shadow: 0 0 1px $rightBg;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px $hoverLinks;
  box-shadow: inset 0 0 6px $hoverLinks;
  border-radius: 10px;
}

</style>
