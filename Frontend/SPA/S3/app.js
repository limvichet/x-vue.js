const app = Vue.createApp({
  data() {
    return {
      link: "https://www.google.com",
      hello: "Hello, Vue! far from home",
      title: "Lorem ipsum dolor sit amet consectetur",
      desctiption:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aliquid exercitationem adipisci deserunt alias temporibus sint possimus nam quos animi",
        books: [
            { title: 'Book 1', image: 'pexels-1.jpg' },
            { title: 'Book 2', image: 'pexels-2.jpg' },
            { title: 'Book 3', image: 'pexels-3.jpg' },
            { title: 'Book 4', image: 'pexels-4.jpg' }
        ]
    };
  },
  methods: {
    handleMouseOver() {
      console.log("Mouse over event occurred!");
    },
    handleDoubleClick() {
      console.log("Double click event occurred!");
    },
    handleMouseMove() {
      console.log("Mouse move event occurred!");
    },
  },
});
app.mount("#app");
