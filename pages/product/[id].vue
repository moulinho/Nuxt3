<template>
  <div class="page-wrapper">
    <!-- Page body -->
    <div class="page-body">
      <div class="container-xl">
        <div class="row justify-content-center">
          <div class="col-lg-10 col-xl-9">
            <div class="card card-lg">
              <div class="card-body markdown">
                <h1 class="mb-0">{{ product.title }}</h1>

                <p>
                  <img :src="product.images[0]" :alt="product.title" class="card-img-top">

                </p>

                <p>
                  {{ product.description }}
                </p>
                <div class="rate">
                  &starf;&starf;&starf;&starf;&star;
                </div>

                <div class="col-6 col-sm-4 col-md-2 col-xl-auto py-3">
                  <a @click.prevent="addToCart(product)" href="#" class="btn btn-tabler w-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus"
                      width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="6" cy="19" r="2"></circle>
                      <circle cx="17" cy="19" r="2"></circle>
                      <path d="M17 17h-11v-14h-2"></path>
                      <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13"></path>
                      <path d="M15 6h6m-3 -3v6"></path>
                    </svg>
                    {{ product.price }}
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const productStore = useProduct();

const route = useRoute();

productStore.fetchProduct(route.params.id);

const { product } = storeToRefs(productStore)

// console.log("route.params.id", route.params.id);

/* Meta data */

useHead({
  title: computed(() => product.value.title),
  meta: [
    {
      name: 'description',
      content: computed(() => product.value.description)
    }
  ]

})

const cartStore = useCart();

async function addToCart(prod) {
  console.log('product',prod)
  await cartStore.addTocart({
    id: prod.id,
    name: prod.title,
    image: prod.images[1],
    price: prod.price,
    category:prod.category.name
  })
}

console.log('productStore',productStore);


// definePageMeta({
//   middleware:'check-auth'
// })

</script>

<style  scoped></style>