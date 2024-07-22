const app = Vue.createApp({
    data() {
        return {
            title: "Starter template ",
            subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui at quos ducimus rerum eveniet non consequuntur ullam sunt minima enim.",
            descriptions: [
                { title: "HTML Semantic", short: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem aperiam repudiandae deleniti a laboriosam non dolor corporis quae unde, in perspiciatis, id blanditiis, quibusdam voluptate excepturi maiores vitae dolore pariatur cupiditate? Voluptates enim perspiciatis ad magni suscipit! Quod, architecto ab! " },
                { title: "CSS Semantic", short: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem aperiam repudiandae deleniti a laboriosam non dolor corporis quae unde, in perspiciatis, id blanditiis, quibusdam voluptate excepturi maiores vitae dolore pariatur cupiditate? Voluptates enim perspiciatis ad magni suscipit! Quod, architecto ab!" },
                { title: "JAVA Semantic", short: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem aperiam repudiandae deleniti a laboriosam non dolor corporis quae unde, in perspiciatis, id blanditiis, quibusdam voluptate excepturi maiores vitae dolore pariatur cupiditate? Voluptates enim perspiciatis ad magni suscipit! Quod, architecto ab!" },
                { title: "Vue", short: "is a progressive JavaScript framework used for building user interfaces and single-page applications (SPAs). It is designed to be incrementally adoptable, meaning you can use as much or as little of Vue as you need" },
            ]
        }
    }
})
app.mount('#app')