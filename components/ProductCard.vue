<template>
  <div class="col-sm-6 col-lg-4">
    <div class="card card-sm">
      <a :href="`/product/${product.id}`" class="d-block">
        <nuxt-img
          fit="cover"
          :src="imageExtensions(product.images[0])"
          :alt="product.title"
          class="card-img-top"
          loading="lazy"
          preload
        />
      </a>
      <div class="card-body">
        <div class="d-flex align-items-center">
          <div>
            <div>{{ product.title }}</div>
            <div class="text-muted">{{ product.category.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const imageExtensions = (imageUrl) => { 

  // Regular expression to match common image file extensions
  const imageExtensions = /(\.jpg|\.jpeg|\.png|\.gif|\.bmp|\.svg|\.webp)$/i;

  if (imageExtensions.test(imageUrl)) {
    return imageUrl;
  } else {
    // Fallback: Return a default image or handle the invalid case
    return "https://via.placeholder.com/150"; // Example fallback image
  }
  
 }


</script>
