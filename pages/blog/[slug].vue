<template>
  <ContentDoc
    :path="
      $route.params.slug ? `/articles/${$route.params.slug[0]}` : '/articles'
    "
  >
    <template #not-found>
      <h2>Blog ({{ $route.params.slug }}) not found</h2>
    </template>
  </ContentDoc>
</template>
