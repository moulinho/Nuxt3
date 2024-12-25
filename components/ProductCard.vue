<template>
  <div class="col-sm-6 col-lg-4">
    <div class="card card-sm">
      <a :href="`/product/${product.id}`" class="d-block">
        
        <!-- <img :src="product.images[1]" class="card-img-top"> -->
        <!-- <nuxt-img fit="contains" :src="product.images[1]" :alt="product.title" class="card-img-top" loading="lazy" preload/> -->
        <nuxt-img v-if="imageSrc" fit="cover" :src="imageSrc" :alt="product.title" class="card-img-top" loading="lazy" preload />
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
const props = defineProps({
  product: {
    type: Object,
    require: true
  }
})


const imageSrc = computed(() => {
  // Get the image URL from props
  let imageUrl = props.product.images[0];

  // Parse the image URL if it contains a JSON-like string
  imageUrl = imageUrl.includes('[') ? JSON.parse(imageUrl)[0] : imageUrl;

  // Regular expression to match common image file extensions
  const imageExtensions = /(\.jpg|\.jpeg|\.png|\.gif|\.bmp|\.svg|\.webp)$/i;

  // Check if the image URL has a valid image extension
  if (imageExtensions.test(imageUrl)) {
    return imageUrl;
  } else {
    // Fallback: Return a default image or handle the invalid case
    return 'https://via.placeholder.com/150'; // Example fallback image
  }
});
</script>

console.log('product', props.product);
