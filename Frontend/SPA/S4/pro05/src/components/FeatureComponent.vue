<template>
    <section class="container">
        <div class="container px-4 py-5" id="featured-3">
            <h2 class="pb-2 border-bottom">Why Move With Us?</h2>
            <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div class="feature col">
                    <div
                        class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                        <!-- <svg class="bi" width="1em" height="1em"><use xlink:href="#collection"></use></svg> -->
                        <img src="../assets/briefcase.svg" alt="" height="30px">
                    </div>
                    <h3 class="fs-2 text-body-emphasis">Professional</h3>
                    <p>Our team of professional movers are trained to prioritize efficiency, organization, and attention
                        to
                        detail. We understand that your possessions are more than just objects - they are a reflection
                        of your
                        life, memories, and experiences. That's why we take extra care to ensure that everything is
                        packed and
                        transported with the utmost care and attention.</p>
                    <a href="#" class="icon-link">
                        Get a quote
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671" />
                        </svg>
                    </a>
                </div>
                <div class="feature col">
                    <div
                        class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                        <!-- <svg class="bi" width="1em" height="1em"><use xlink:href="#people-circle"></use></svg> -->
                        <img src="../assets/bus-front.svg" alt="" height="30px">
                    </div>
                    <h3 class="fs-2 text-body-emphasis">Countrywide</h3>
                    <p>We offer a range of services to suit your individual needs, whether you're moving locally or
                        across the
                        country. Our team can handle everything from packing and loading to unloading and unpacking, so
                        you can
                        focus on settling into your new home. And with our transparent pricing and no hidden fees, you
                        can trust
                        that you're getting a fair and competitive rate for our services.</p>
                    <a href="#" class="icon-link">
                        Get a quote
                        <!-- <svg class="bi"><use xlink:href="#chevron-right"></use></svg> -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671" />
                        </svg>
                    </a>
                </div>
                <div class="feature col">
                    <div
                        class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                        <!-- <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"></use></svg> -->
                        <img src="../assets/chat-square-heart.svg" alt="" height="30px">
                    </div>
                    <h3 class="fs-2 text-body-emphasis">Personal Touch</h3>
                    <p>At our core, we believe that moving should be an exciting and positive experience, not a
                        stressful one.
                        By providing exceptional moving services in the US, we hope to revolutionize the way people
                        think about
                        moving and provide a better, more personalized experience for our customers. Contact us today to
                        learn
                        more about how we can help you with your next move.</p>
                    <a href="#" class="icon-link">
                        Get a quote
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671" />
                        </svg>
                    </a>
                </div>
            </div>

            <section class="container-fluid">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="1000">
                            <img src="@/assets/couple.jpg" class="d-block w-100">
                        </div>
                        <div class="carousel-item" data-bs-interval="1000">
                            <img src="@/assets/dog.jpg" class="d-block w-100">
                        </div>
                        <div class="carousel-item" data-bs-interval="1000">
                            <img src="@/assets/family.jpg" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

        </div>
    </section>
</template>

<script>
    export default {
        name: "FeatureComponent",
        data (){
            return {
                
            }
        }
    }
</script>