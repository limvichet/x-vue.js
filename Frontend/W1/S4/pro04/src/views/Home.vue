<template>
    <div>      
      <div class="container">  
        <!-- navbar -->
        <navbar-component />  
        <!-- hero -->
        <hero-component />  
        <!-- feature -->
        <feature-component />  
        <!-- footer -->
        <footer-component />  
      </div>
    </div>  
  </template>
  
  <script>  
  
    import NavbarComponent from '@/components/NavbarComponent.vue';
    import HeroComponent from '@/components/HeroComponent.vue';
    import FeatureComponent from '@/components/FeatureComponent.vue';
    import FooterComponent from '@/components/FooterComponent.vue';
  
    export default {
      name: 'Home',
      components: {
        NavbarComponent,
        HeroComponent,
        FeatureComponent,
        FooterComponent,
      }
    };
  
  </script>
  
  <style scoped>
  .feature-icon {
    width: 4rem;
    height: 4rem;
    border-radius: .75rem;
  }
  
  .carousel-item {
    transition: transform 2s ease, opacity .5s ease-out;
  }
  </style>
  