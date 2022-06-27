<template>
  <main>
    <ProfilePicture />

    <h1>Welcome to my digital portfolio!</h1>

    <h2>
      My name is <span class="highlighted">Juliette Cordor</span> and my
      pronouns are
      <span class="highlighted">She/Her</span>
    </h2>

    <GithubStats />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>

<style lang="css">
body {
  padding: 0;
  margin: 0;
}

body,
html {
  font-family: 'Noto Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
}

main {
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1a1919;
  color: #fff;
}

.highlighted {
  color: #18da18;
}
</style>
