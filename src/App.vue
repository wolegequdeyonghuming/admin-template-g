<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  html, body{
    padding: 0;
    margin: 0;
  }
  * {
    box-sizing: border-box;
    user-focus: none;
    &:focus {
      outline: none;
    }
  }
  a {
    text-decoration: none;
  }
</style>
