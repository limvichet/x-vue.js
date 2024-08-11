
const app = Vue.createApp({
    data() {
        return {
            title: "Designed for business teams like yours",
            subtitle: "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
            items: [
                { image: "pexels-1.jpg", 
                    title: "The Coldest Sunset", 
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.", 
                    tags: ["#photography", "#travel", "#winter"]
                },
                { image: "pexels-2.jpg", 
                    title: "The Coldest Sunset", 
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.", 
                    tags: ["#resercher", "#travel", "#summer"]
                },
                { image: "pexels-3.jpg", 
                    title: "The Coldest Sunset", 
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.", 
                    tags: ["#analog", "#travel", "#winter"]
                },
                { image: "pexels-4.jpg", 
                    title: "The Coldest Sunset", 
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.", 
                    tags: ["#self", "#travel", "#winter"]
                },
          
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