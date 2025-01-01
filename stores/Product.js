export const useProduct = defineStore("product", {
  state: () => ({
    products: [],
    product: [],
    baseUrl: useRuntimeConfig().public.apiBase,
    // baseUrl:'https://api.escuelajs.co/api/v1/products?offset=20&limit=20',
    categories: [],
    query: null,
  }),
  getters: {
    getProducts: (state) => state.products,
    getProduct: (state) => {
      state.product;
    },
  },
  actions: {
    /**
     * Fetch all products in the store.
     */
    async fetchAllProducts() {
      this.products = [];
      const { data: products } = useFetch(this.baseUrl, {
        key: `products`,
      });
      
      this.products = products;
      return this.products;
    },

    /**
     * Fetch products from the API
     *
     * @param {string} title
     */
    async fetchSearchProducts(title = null) {
      this.products = [];
      const { data: products } = useFetch(this.baseUrl + "?title=" + title, {
        key: `search`,
      });

      this.products = products;
      return this.products
    },

    /**
     * Fetch product details
     *
     * @param {number} id
     */
    async fetchProduct(id) {
      const { data: product } = useFetch(this.baseUrl + id, {
        key: `product/${id}`,
      });
      this.product = product;
    
    },

    /**
     * The category of the sticker to be sent.
     *
     * @param {String} category
     */

    async fetchCategoriesProduct(category = null) {
      if (category !== null) {
        const { data: categories } = useFetch(
          `https://api.escuelajs.co/api/v1/categories/${category}/products`,
          {
            key: `categories/${category}`,
          }
        );
        this.categories = categories;
        // console.log("categories1", this.categories);
      } else {
        const { data: categories } = useFetch(
          "https://api.escuelajs.co/api/v1/categories",
          {
            key: `categories/${category}`,
          }
        );
        this.categories = categories;
      }

      // console.log("categories2", this.categories);
    },
  },
});