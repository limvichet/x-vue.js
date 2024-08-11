<template>
    <section class="container">
        <div class="px-4 pt-5 my-5 text-center border-bottom">
            <h1 class="display-4 fw-bold text-body-emphasis">Move With Joy</h1>
            <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">
                    Welcome to our website, where we are on a mission to provide exceptional moving services to
                    customers in
                    the US. As a startup, we believe that moving doesn't have to be stressful or complicated, and we are
                    passionate about making the process as seamless and enjoyable as possible.

                </p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">Get a Quote</button>
                    <button type="button" class="btn btn-outline-secondary btn-lg px-4">Contact Us</button>
                </div>
            </div>
            <div class="overflow-hidden" style="max-height: 30vh;">
                <div class="container px-5">
                    <img src="../assets/moving-van.jpg" class="img-fluid border rounded-3 shadow-lg mb-4"
                        alt="Example image" width="700" height="500" loading="lazy">
                </div>
            </div>
        </div>
    </section>

</template>

<script>
    export default {
        name: "HeroComponent"
    }
</script>