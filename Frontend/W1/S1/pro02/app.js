const app = Vue.createApp({
    data(){
        return {
            title: "Exercises related to HTML, CSS, JavaScript and Vue ",
            descriptions: [
                { title: "HTML", short: "is the standard language used to create and structure content on the web. It uses tags to define elements such as headings, paragraphs, links, images, and other types of content"},
                { title: "CSS", short: "is used to control the presentation, formatting, and layout of HTML elements. It allows you to apply styles to your web pages."},
                { title: "JavaScript", short: "is a dynamic programming language that enables interactive web pages. It is an essential part of web applications, allowing you to create dynamically updating content, control multimedia, animate images, and much more"},
                { title: "Vue", short: "is a progressive JavaScript framework used for building user interfaces and single-page applications (SPAs). It is designed to be incrementally adoptable, meaning you can use as much or as little of Vue as you need"},
              ],
              addresses: [
                "Lim Vichet",
                "limvichet917@gmail.com",
                "2024-07-11 File created.",
                "2024-07-12 Last modification."
              ]
        }
    }
})
app.mount('#app')