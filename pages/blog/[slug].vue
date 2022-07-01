<template>
  <main>
    <ContentDoc
      :path="
        $route.params.slug ? `/articles/${$route.params.slug[0]}` : '/articles'
      "
    >
      <template #not-found>
        <h2>Blog ({{ $route.params.slug }}) not found</h2>
      </template>
    </ContentDoc>
  </main>
</template>

<style lang="scss">
h1 {
  position: absolute;
  text-align: center;
  display: block;
  font-size: 2.5rem;
  width: 100%;
  left: 0px;
  top: 0px;
  padding-bottom: 25px;
  border-bottom: 1px solid #f3f3f3f3;
}
</style>
