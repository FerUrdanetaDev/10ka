<template>
  <section class="relative min-h-screen w-full bg-black py-24 px-6 overflow-hidden border-t border-[#CCFF00]/20 flex items-center antialiased">
    
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute inset-0 opacity-[0.05] cyber-grid-nodes"></div>
      <div class="absolute top-1/4 left-0 w-full h-[1px] bg-cyan-500/30 animate-h-scan-fast"></div>
      <div class="absolute bottom-1/4 left-0 w-full h-[1px] bg-[#CCFF00]/30 animate-h-scan-fast-delayed"></div>
    </div>

    <div class="absolute inset-0 pointer-events-none border-[1px] border-white/5 m-4 md:m-10">
      <div class="absolute top-0 left-0 w-12 h-[2px] bg-[#CCFF00]"></div>
      <div class="absolute top-0 left-0 w-[2px] h-12 bg-[#CCFF00]"></div>
      <div class="absolute bottom-0 right-0 w-12 h-[2px] bg-cyan-400"></div>
      <div class="absolute bottom-0 right-0 w-[2px] h-12 bg-cyan-400"></div>
    </div>

    <div class="max-w-[1500px] mx-auto relative z-10 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-20 items-center">
        
        <div class="lg:col-span-6 flex flex-col order-1 lg:order-2">
          
          <div class="flex items-end gap-[2px] h-10 mb-8 opacity-80">
            <div v-for="i in 40" :key="i" 
                 class="w-[3px] bg-white animate-eq-bar"
                 :style="{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.05}s` }">
            </div>
          </div>

          <div class="flex items-center gap-4 mb-4">
            <div class="h-[1px] w-12 bg-[#CCFF00]"></div>
            <span class="font-mono text-[10px] text-[#CCFF00] tracking-[0.5em] uppercase">V.3.1_NODE_CONNECTED</span>
          </div>

          <h2 class="font-akony text-4xl md:text-6xl xl:text-7xl text-white leading-[0.85] mb-8 uppercase italic tracking-tighter">
            Unlock the <br/>
            <span class="text-[#CCFF00] stroke-text-thin glow-text">Reality</span>
          </h2>

          <div class="block lg:hidden w-full mb-10 relative group">
             <div class="relative w-full aspect-square max-w-[400px] mx-auto flex items-center justify-center">
                <div class="absolute inset-0 border border-[#CCFF00]/20 rounded-full animate-spin-slow"></div>
                <img src="~/assets/images/twins.png" alt="Cyber Twins" class="w-[80%] h-auto object-contain z-10 brightness-110" />
                <div class="absolute inset-0 z-20 scan-overlay opacity-30"></div>
             </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-12">
            <div v-for="(item, index) in features" :key="index" 
                 class="relative p-5 border border-white/10 bg-white/[0.02] hover:bg-[#CCFF00]/5 hover:border-[#CCFF00]/40 transition-all duration-300 group cursor-crosshair">
              <div class="absolute top-0 right-0 p-1 font-mono text-[7px] text-white/20 group-hover:text-[#CCFF00]/50">0{{ index + 1 }}</div>
              <h4 class="text-[#CCFF00] font-mono text-[10px] mb-2 font-bold uppercase tracking-widest">{{ item.title }}</h4>
              <p class="text-white/50 text-[11px] font-mono leading-relaxed">{{ item.desc }}</p>
            </div>
          </div>

          <div class="flex flex-wrap gap-8 items-center">
            <button class="relative h-14 px-12 bg-[#CCFF00] text-black font-black font-mono text-[11px] tracking-[0.4em] cyber-cut-btn-small hover:shadow-[0_0_35px_rgba(204,255,0,0.5)] transition-all flex items-center gap-3">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              ENTER_SYSTEM
            </button>
            <div class="font-mono text-[9px] space-y-1">
              <p class="text-[#CCFF00] animate-pulse">ROLLING CODE: 0xFC3B</p>
              <p class="text-white/30 tracking-tighter">STATUS: CHECKSUM_OK</p>
            </div>
          </div>
        </div>

        <div class="hidden lg:flex lg:col-span-6 relative group order-2 lg:order-1">
          <div class="relative w-full aspect-square max-w-[600px] mx-auto flex items-center justify-center">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-full h-full border border-[#CCFF00]/20 rounded-full"></div>
              <div class="absolute inset-[15%] border border-[#CCFF00]/10 rounded-full"></div>
              <div class="absolute inset-[30%] border border-[#CCFF00]/5 rounded-full"></div>
              <div class="absolute w-full h-full rounded-full radar-beam"></div>
              <div class="absolute w-full h-full border border-[#CCFF00]/20 rounded-full animate-spin-slow"></div>
            </div>

            <div class="absolute top-10 left-10 font-mono text-[9px] text-[#CCFF00] space-y-1 z-20">
              <p class="flex items-center gap-2"><span class="w-2 h-2 bg-[#CCFF00] animate-pulse"></span> SYS_ANALYSIS</p>
              <p class="text-white/40">NEURAL_LINK: ACTIVE</p>
            </div>

            <div class="relative z-10 w-[85%] overflow-hidden">
              <img 
                src="~/assets/images/twins.png" 
                alt="Cyber Twins" 
                class="w-full h-auto object-contain brightness-125 contrast-125 drop-shadow-[0_0_50px_rgba(204,255,0,0.15)] transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-0 z-20 pointer-events-none scan-overlay"></div>
            </div>

            <div class="absolute bottom-10 right-10 font-mono text-[9px] text-right space-y-1 z-20">
              <p class="text-cyan-400">COORD: {{ lat }} S.R.</p>
              <p class="text-white/40">SECTOR: DATA 3/D.19</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex gap-12 opacity-30 whitespace-nowrap overflow-hidden w-full px-20">
      <div v-for="i in 4" :key="i" class="flex gap-4 font-mono text-[8px] text-cyan-400">
        <span>DATA_FLOW_SYNC_ACTIVE [{{ (Math.random()*100).toFixed(0) }}%]</span>
        <span class="text-white/20">//</span>
        <span class="text-[#CCFF00]">RSA_ENCRYPTION_ENABLED</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const lat = ref('32.122');
const features = [
  { title: "Interoperability", desc: "Compatible with leading metaverse platforms (VRChat, Helios)." },
  { title: "Personalization", desc: "Adapt and modify your avatar's bone structure via SDK." },
  { title: "Immediate Access", desc: "Download your VRM file and start using it right away." },
  { title: "Digital Identity", desc: "Blockchain secured metadata for unique asset identity." }
];

onMounted(() => {
  setInterval(() => {
    lat.value = (32.100 + Math.random() * 0.050).toFixed(3);
  }, 1000);
});
</script>

<style scoped>
.font-akony { font-family: 'AKONY', sans-serif !important; }

.radar-beam {
  background: conic-gradient(from 0deg at 50% 50%, rgba(204, 255, 0, 0.3) 0deg, transparent 90deg);
  animation: radar-rotate 4s linear infinite;
}

@keyframes radar-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes eq-bar {
  0%, 100% { transform: scaleY(0.4); opacity: 0.5; }
  50% { transform: scaleY(1); opacity: 1; }
}
.animate-eq-bar {
  animation: eq-bar 0.8s ease-in-out infinite;
  transform-origin: bottom;
}

.glow-text { text-shadow: 0 0 20px rgba(204, 255, 0, 0.3); }
.stroke-text-thin { -webkit-text-stroke: 1px #CCFF00; color: transparent; }
.cyber-grid-nodes { background-image: radial-gradient(circle, #CCFF00 1px, transparent 1px); background-size: 30px 30px; }

.scan-overlay {
  background: linear-gradient(to bottom, transparent 0%, rgba(204, 255, 0, 0.2) 50%, #CCFF00 50.5%, transparent 51%);
  background-size: 100% 200%;

}

@keyframes scan-v { 0% { background-position: 0 -100%; } 100% { background-position: 0 100%; } }

.cyber-cut-btn-small { clip-path: polygon(15% 0, 100% 0, 100% 70%, 85% 100%, 0 100%, 0% 30%); }

@keyframes h-scan-fast {
  0% { transform: translateX(-100%); opacity: 0; }
  50% { opacity: 0.5; }
  100% { transform: translateX(100%); opacity: 0; }
}
.animate-h-scan-fast { animation: h-scan-fast 4s linear infinite; }
.animate-h-scan-fast-delayed { animation: h-scan-fast 6s linear infinite 2s; }

@keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
.animate-spin-slow { animation: spin-slow 15s linear infinite; }
</style>