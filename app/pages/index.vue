<template>
  <div class="min-h-screen bg-black text-white uppercase antialiased selection:bg-[#00FF00] selection:text-black">
    
    <Navbar :isMenuOpen="isMenuOpen" @toggleMenu="isMenuOpen = !isMenuOpen" />
  
    <main>
      <HeroSection />

      <TwinsSection />
      
      <SpineGuide />

      <NFT />
 
      <Mint />

            <Footer />
      
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '/components/Navbar.vue'
import HeroSection from '/components/HeroSection.vue'
import SpineGuide from '/components/SpineGuide.vue'
import NFT from '/components/NFT.vue'
import TwinsSection from '/components/TwinsSection.vue'
import Mint from '~/components/Mint.vue'
// Import the Footer component
import Footer from '~/components/Footer.vue'


const isMenuOpen = ref(false)
</script>

<style>
@font-face {
  font-family: 'Fraktion';
  /* Se mantiene tu ruta original */
  src: url('/fonts/PPFraktionMono-Bold-BF675904a6c4c6e.otf') format('opentype');
  font-weight: bold; font-style: normal; font-display: swap;
}

/* Aplicación global de la fuente según tu configuración */
html, body, * { font-family: 'Fraktion', monospace !important; }

.stroke-text { -webkit-text-stroke: 1.5px rgba(255,255,255,0.15); }
.stroke-text-white { -webkit-text-stroke: 1px white; }

.scanlines {
  background: linear-gradient(to bottom, transparent 50%, rgba(204, 255, 0, 0.05) 51%);
  background-size: 100% 4px;
}

.hover-area {
  padding: 0px 4px;
  display: inline-flex;
  align-items: center; gap: 4px;
  transition: background-color 0.1s ease; position: relative;
}

.nav-link:hover .hover-area {
  background-color: #CCFF00; color: black;
  animation: jitter 0.15s infinite linear;
}

.nav-link:hover .hover-area::after {
  content: ''; position: absolute; inset: 0;
  background: #CCFF00; z-index: -1;
  animation: glitch-pixels 0.3s infinite steps(1);
}

.bracket-container { color: #71717a; display: inline-flex; align-items: center; margin-left: 2px; }
.nav-link:hover .bracket-container { color: black; }

.social-icon { @apply text-white hover:text-[#CCFF00] transition-all duration-300 hover:scale-110; }

@keyframes jitter {
  0% { transform: translate(0); }
  25% { transform: translate(-1px, 0.5px); }
  50% { transform: translate(1px, -0.5px); }
  75% { transform: translate(-0.5px, -1px); }
  100% { transform: translate(0.5px, 1px); }
}

@keyframes glitch-pixels {
  0% { clip-path: inset(10% 0 40% 0); transform: scaleX(1.1); }
  33% { clip-path: inset(40% 0 20% 0); transform: scaleX(1); }
  66% { clip-path: inset(60% 0 5% 0); transform: scaleX(1.05); }
  100% { clip-path: inset(0% 0 0% 0); }
}

.mega-enter-active, .mega-leave-active { transition: all 0.6s cubic-bezier(0.85, 0, 0.15, 1); }
.mega-enter-from { transform: translateX(100%); opacity: 0; }
.mega-leave-to { transform: translateX(-100%); opacity: 0; }

.mega-item:hover { animation: mega-jitter 0.2s infinite; }
@keyframes mega-jitter { 0% { transform: translate(0,0); } 50% { transform: translate(-3px, 1px); } 100% { transform: translate(0,0); } }
</style>