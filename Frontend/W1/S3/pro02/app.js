const app = Vue.createApp({
    data() {
      return {
        message: "Welcome to BootCamp D3 Practice 1",
        count: 0,
        link: "https://www.google.com",
        books: [
          { title: "Book 1", image: "./assets/book1.png", view: "hide" },
          { title: "Book 2", image: "./assets/book2.png", view: "hide" },
          { title: "Book 3", image: "./assets/book3.png", view: "hide" },
        ],
      };
    },
    methods: {
      handleMousOver() {
        console.log("Mouse leave event occurred!");
        this.count++;
      },
      showTitle(index) {
        this.books[index].view = 'show'
        console.log(books);
      },
    },
  });
  app.mount("#app");
  