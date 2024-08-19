<template>
    <section class="container">
        <div class="px-4 pt-5 my-5 text-center border-bottom">
            <h1 class="display-4 fw-bold text-body-emphasis">{{ hero_header }}</h1>
            <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">{{ hero_para }}</p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">{{ hero_btn_quote }}</button>
                    <button type="button" class="btn btn-outline-secondary btn-lg px-4">{{ hero_contact }}</button>
                </div>
            </div>
            <div class="overflow-hidden" style="max-height: auto;">
                <div class="container px-5">
                    <!-- <img :src="'img/' + hero_image" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image"
                        width="700" height="500" loading="lazy"> -->
                    <img :src="hero_image" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image"
                        width="700" loading="lazy">
                </div>
            </div>
        </div>
    </section>

</template>

<script>
export default {
    name: "HeroComponent",
    data() {
        return {
            hero_header: "Move With Joy",
            hero_contact: "Contact Us",
            hero_btn_quote: "Get a Quote",
            // hero_image: "moving-van.jpg",
            hero_image: "https://media.mikrosanimation.com/app/uploads/2024/02/06170950/Orion-Mikros.jpg",
            hero_para: "Welcome to our website, It'  where we are on a mission to provide exceptional moving services to customers in the US. As a startup, we believe that moving doesn't have to be stressful or complicated, and we are passionate about making the process as seamless and enjoyable as possible.",
        };
    },
}

</script>