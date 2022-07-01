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

    <footer><small>More coming soon I promise...</small></footer>
  </main>
</template>

<script lang="ts" setup></script>

<style lang="scss">
$background-color: #1a1919;

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
  background-color: $background-color;
  color: #fff;
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: darken($background-color, 2%);
}

.highlighted {
  color: #18da18;
}
</style>
