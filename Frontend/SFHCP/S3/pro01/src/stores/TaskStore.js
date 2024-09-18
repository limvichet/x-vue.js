import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      {
        id: 1,
        title: "HTML is the standard markup language for Web pages",
        isFav: false,
      },
      {
        id: 2,
        title: "CSS is the language we use to style an HTML document.",
        isFav: false,
      },
      {
        id: 3,
        title: "JavaScript is the programming language of the Web",
        isFav: true,
      },
      {
        id: 4,
        title: "Vue is progressive JavaScript Framework. An approachable",
        isFav: true,
      },
    ],
    name: "My task",
  }),
});
