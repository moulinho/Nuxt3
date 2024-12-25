<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
useHead({
  bodyAttrs: {
    class: 'theme-dark',
  },
  link:[
    {
      rel:'stylesheet', type:'image/x-icon',href:'/favicon.ico'
    }
  ],
  script: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.2.3/js/bootstrap.bundle.min.js',
    }
  ],


  titleTemplate:(titleChunk)=>{
return titleChunk ? `${titleChunk}- Shopping site`: "Shopping site"
  }
})
</script>