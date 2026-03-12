<template>
  <section class="relative min-h-screen w-full bg-black flex flex-col pt-16 overflow-hidden antialiased selection:bg-[#CCFF00] selection:text-black uppercase tracking-widest text-xs">
    
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute inset-0 cyber-grid-3d opacity-25"></div>
      <div class="absolute inset-0 bg-cyber-grid-static opacity-15"></div>
      
      <div class="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#CCFF00]/40 to-transparent animate-v-scan"></div>
      <div class="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent animate-v-scan-delayed"></div>
      
      <div class="absolute inset-0 scanlines opacity-[0.08]"></div>
      <div class="absolute inset-0 noise-overlay opacity-[0.02]"></div>
      
      <div class="absolute top-[-10%] left-[-10%] w-1/2 h-1/2 bg-[#CCFF00]/10 blur-[140px] animate-pulse-slow"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-1/2 h-1/2 bg-purple-900/10 blur-[140px] animate-pulse-slow delay-1000"></div>
    </div>

    <div class="absolute inset-x-0 top-24 pointer-events-none z-20 px-8 hidden xl:block">
      <div class="relative w-full max-w-[1600px] mx-auto">
        <div class="absolute left-0 top-0 opacity-60">
          <div class="text-[10px] text-[#CCFF00] font-mono space-y-2">
            <div class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-[#CCFF00] animate-ping"></span>
              <p>> NEURAL_LINK: ESTABLISHED</p>
            </div>
            <ClientOnly>
              <p class="text-white/40">> UPTIME: {{ uptime }}S</p>
            </ClientOnly>
            <div class="space-y-1">
              <ClientOnly>
                <div class="flex justify-between text-[8px]"><span>SYNC</span><span>{{ cpuLoad }}%</span></div>
              </ClientOnly>
              <div class="w-32 h-1 bg-white/10 overflow-hidden">
                <div class="h-full bg-[#CCFF00] animate-loading-bar"></div>
              </div>
            </div>
            <div class="pt-2 space-y-1 opacity-50">
              <p>> PACKET_LOSS: 0.0%</p>
              <p>> ENCRYPTION: AES_256</p>
            </div>
          </div>
        </div>

        <div class="absolute right-0 top-0 opacity-60 text-right font-mono">
          <ClientOnly>
            <div class="text-[10px] text-cyan-400 space-y-1">
              <p>LAT: {{ (10.6667 + Math.random()*0.001).toFixed(4) }}</p>
              <p>LONG: {{ (-71.6122 + Math.random()*0.001).toFixed(4) }}</p>
              <p class="text-white/40">NODE: 10KA_SYS_OVERRIDE</p>
              <div class="flex justify-end gap-1 mt-2">
                <div v-for="i in 5" :key="i" class="w-1 h-3 bg-cyan-500/30" :class="{'animate-pulse': i % 2 === 0}"></div>
              </div>
            </div>
          </ClientOnly>
        </div>
      </div>
    </div>

    <div class="relative z-10 flex-grow flex flex-col justify-between w-full max-w-[1600px] mx-auto px-6 md:px-12 py-10">
      <div class="flex flex-col items-center text-center mt-12 md:mt-20 relative group">
        <div class="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-[1px] bg-gradient-to-r from-transparent via-[#CCFF00] to-transparent opacity-50"></div>
        
        <h1 class="font-akony leading-[0.85] tracking-[-0.03em] uppercase text-white hero-title mb-8 relative">
          <span class="relative inline-block glitch-text" data-text="Shaping the Future">
            Shaping the Future
          </span>
          <br />
          <span class="relative inline-block text-[#CCFF00] stroke-text-thin glow-soft mt-4 hover:animate-glitch-active transition-all cursor-default">
            One Step at a Time.
          </span>
        </h1>
        
        <div class="max-w-[700px] mb-12 relative">
          <div class="absolute -left-4 top-0 h-full w-[2px] bg-[#CCFF00] opacity-30"></div>
          <p class="font-mono text-white/70 text-[13px] md:text-sm tracking-[0.2em] leading-relaxed italic px-4">
            <span class="text-[#CCFF00] font-bold">//</span>
            Merging innovation, fashion, and digital identity to create a seamless journey into the future
            <span class="text-[#CCFF00] animate-pulse font-bold">_</span>
          </p>
        </div>

        <div class="flex flex-row items-center justify-center gap-4 md:gap-8 w-full max-w-lg">
          <button class="nav-glitch-effect relative group h-12 md:h-14 flex-1 md:flex-none md:w-52 overflow-hidden bg-transparent transition-all hover:shadow-[0_0_20px_rgba(204,255,0,0.2)] cyber-button-border">
            <span class="relative z-20 text-[#CCFF00] text-[9px] md:text-[11px] font-black tracking-[0.2em] md:tracking-[0.4em] font-mono">AGENTS.sys</span>
          </button>
          
          <button class="nav-glitch-effect relative group h-12 md:h-14 flex-1 md:flex-none md:w-52 overflow-hidden bg-[#CCFF00] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(204,255,0,0.5)] cyber-cut-btn">
            <div class="relative z-10 flex items-center justify-center gap-2 md:gap-3 text-black font-black tracking-[0.2em] md:tracking-[0.4em] text-[9px] md:text-[11px] font-mono">
              <span>ENTER SYSTEM</span>
              <svg class="w-4 h-4 md:w-5 md:h-5 animate-bounce-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </div>
          </button>
        </div>
      </div>

      <div class="relative w-full flex flex-col items-center mt-8">
        <div class="relative w-full flex justify-center items-end group">
          <div class="absolute inset-0 flex items-center justify-center -z-10 opacity-20">
            <div class="w-[300px] h-[300px] border border-[#CCFF00]/20 rounded-full animate-ping delay-700"></div>
            <div class="absolute w-[500px] h-[500px] border border-cyan-500/10 rounded-full animate-reverse-spin"></div>
          </div>
          <div class="absolute left-[15%] top-0 w-16 h-16 border-l-2 border-t-2 border-[#CCFF00]/40 animate-pulse"></div>
          <img src="/hero-background.png" alt="10KA Agents" class="h-[30vh] md:h-[38vh] w-auto object-contain object-bottom opacity-90 brightness-110 animate-float" />
        </div>

        <aside class="absolute left-0 bottom-10 hidden lg:flex flex-col items-center gap-6 group">
          <div class="text-[#CCFF00] text-[10px] font-mono rotate-[-90deg] translate-y-[-40px] opacity-50">#001_ROOT</div>
          <div class="h-32 w-[1px] bg-gradient-to-t from-[#CCFF00] via-white/20 to-transparent"></div>
          <p class="font-mono rotate-[-90deg] origin-center whitespace-nowrap text-[9px] tracking-[0.6em] text-white/40 uppercase">
            PROTOCOL: <span class="text-[#CCFF00]">ACTIVE</span>
          </p>
        </aside>

        <aside class="absolute right-0 bottom-10 hidden lg:flex flex-col items-center gap-6 group">
          <p class="rotate-[90deg] origin-center whitespace-nowrap text-[9px] tracking-[0.6em] text-white/40 uppercase font-mono">
            V.3.1_NODE_CONNECTED
          </p>
          <div class="h-32 w-[1px] bg-gradient-to-t from-cyan-500 via-white/20 to-transparent"></div>
        </aside>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 w-full h-12 bg-black/90 backdrop-blur-md border-t border-[#CCFF00]/20 flex items-center px-8 justify-between z-30 font-mono overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-[1px] bg-[#CCFF00]/30 animate-h-scan"></div>
      
      <div class="flex gap-10 items-center">
        <div class="flex items-center gap-3">
          <div class="relative flex items-center justify-center">
            <div class="w-2.5 h-2.5 bg-[#CCFF00] rounded-full animate-breath shadow-[0_0_12px_#CCFF00]"></div>
            <div class="absolute w-4 h-4 border border-[#CCFF00]/20 rounded-full animate-ping"></div>
          </div>
          <span class="text-[10px] text-[#CCFF00] font-black tracking-[0.5em]">CORE STABLE</span>
        </div>
        <ClientOnly>
          <div class="hidden md:flex gap-6 text-[9px] text-white/30 tracking-[0.3em]">
            <span>CPU: {{ cpuLoad }}%</span>
            <span>NET: {{ connectionType }}</span>
            <span class="text-[#CCFF00]/50 uppercase">LOC: {{ userCity }}, {{ userCountry }}</span>
          </div>
        </ClientOnly>
      </div>
      
      <ClientOnly>
        <div class="text-[9px] text-white/40 tracking-[0.4em] hidden sm:block italic">
          SIGNAL: {{ (Math.random() * 100).toFixed(0) }}% // RSA_READY
        </div>
      </ClientOnly>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const userCountry = ref('DETECTING');
const userCity = ref('SOURCE');
const connectionType = ref('4G');
const cpuLoad = ref('0');
const uptime = ref(0);

onMounted(() => {
  fetch('https://ipapi.co/json/')
    .then(res => res.json())
    .then(data => {
      userCountry.value = data.country_name || 'INTL';
      userCity.value = data.city || 'NODE';
    })
    .catch(() => { userCountry.value = 'GLOBAL'; });

  if (navigator.connection) {
    connectionType.value = navigator.connection.effectiveType.toUpperCase();
  }

  setInterval(() => {
    uptime.value++;
    cpuLoad.value = (Math.random() * (25 - 10) + 10).toFixed(1);
  }, 1000);
});
</script>

<style>
/* He mantenido tus fuentes exactamente igual */
@font-face {
  font-family: 'AKONY';
  src: url('/fonts/AKONY.otf') format('opentype');
  font-weight: normal; font-style: normal; font-display: swap;
}
h1.hero-title, h1.hero-title *, .font-akony {
  font-family: 'AKONY', sans-serif !important;
}
</style>

<style scoped>
/* TODO TU CSS ORIGINAL SIN CAMBIOS */
.hero-title { font-size: clamp(2.2rem, 6vw, 3rem); }
.glow-soft { text-shadow: 0 0 12px rgba(204, 255, 0, 0.25); }
.cyber-button-border {
  clip-path: polygon(15% 0, 100% 0, 100% 70%, 85% 100%, 0 100%, 0% 30%);
  background: #CCFF00;
  padding: 1px;
  position: relative;
}
.cyber-button-border::before {
  content: ""; position: absolute; inset: 1px; background: black;
  clip-path: polygon(15% 0, 100% 0, 100% 70%, 85% 100%, 0 100%, 0% 30%);
  z-index: 1;
}
.cyber-grid-3d {
  background-image: linear-gradient(rgba(204, 255, 0, 0.15) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(204, 255, 0, 0.15) 1px, transparent 1px);
  background-size: 80px 80px;
  transform: perspective(1000px) rotateX(60deg) translateY(-100px);
  transform-origin: top;
  animation: grid-travel 30s linear infinite;
}
.bg-cyber-grid-static {
  background-image: linear-gradient(rgba(204, 255, 0, 0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(204, 255, 0, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
}
@keyframes breath { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.25); opacity: 0.7; } }
.animate-breath { animation: breath 3s ease-in-out infinite; }
@keyframes loading-bar { 0% { width: 0%; } 100% { width: 100%; } }
.animate-loading-bar { animation: loading-bar 3s infinite alternate cubic-bezier(0.4, 0, 0.2, 1); }
@keyframes reverse-spin { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
.animate-reverse-spin { animation: reverse-spin 20s linear infinite; }
@keyframes h-scan { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
.animate-h-scan { animation: h-scan 4s linear infinite; }
.cyber-cut-btn { clip-path: polygon(15% 0, 100% 0, 100% 70%, 85% 100%, 0 100%, 0% 30%); }
.stroke-text-thin { -webkit-text-stroke: 1px rgba(204, 255, 0, 0.5); color: transparent; }
.scanlines { background: repeating-linear-gradient(0deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1) 1px, transparent 1px, transparent 2px); background-size: 100% 3px; }
.glitch-text::before, .glitch-text::after { content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.8; }
.hero-title:hover .glitch-text::before { color: #ff00ff; z-index: -1; animation: glitch-off 0.2s infinite linear alternate-reverse; }
.hero-title:hover .glitch-text::after { color: #00ffff; z-index: -2; animation: glitch-off 0.2s infinite linear alternate; }

@keyframes grid-travel { from { background-position: 0 0; } to { background-position: 0 100%; } }

@keyframes glitch-off { 0% { transform: translate(-2px, 2px); } 100% { transform: translate(2px, -2px); } }

@keyframes v-scan { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }

@keyframes bounce-x { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(5px); } }

.animate-bounce-x { animation: bounce-x 1s infinite; }

.animate-v-scan { animation: v-scan 4s linear infinite; }


.animate-v-scan-delayed { animation: v-scan 7s linear infinite 1.5s; }

.animate-pulse-slow { animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
</style>