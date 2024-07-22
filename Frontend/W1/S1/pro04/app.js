
const app = Vue.createApp({
    data() {
        return {
            title: "Designed for business teams like yours",
            subtitle: "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
            products: [
                { description: "Apple MacBook Pro 17", color: "Silver", category: "Laptop", price: "2999" },
                { description: "Microsoft Surface Pro", color: "White", category: "Laptop PC", price: "1999" },
                { description: "Magic Mouse 2", color: "Black", category: "Accessories", price: "99" },
                { description: "Google Pixel Phone", color: "Gray", category: "Phone", price: "799" },
                { description: "Apple Watch 5", color: "Red", category: "Wearables", price: "999" },
          
            ]
        }
    },
    computed: {
        products() {
        return Object.keys(this.products)[0];
      }
    }
})
app.mount('#app')