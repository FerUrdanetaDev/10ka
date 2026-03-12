<template>
  <section class="relative min-h-screen w-full bg-black py-20 overflow-hidden antialiased selection:bg-[#CCFF00] selection:text-black">
    
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute inset-0 opacity-10 cyber-grid-nodes"></div>
      <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#CCFF00]/10 to-transparent"></div>
    </div>

    <div class="max-w-[1400px] mx-auto px-6 mb-12 relative z-20">
      <div class="flex items-end justify-between border-b border-[#CCFF00]/30 pb-6">
        <div>
          <p class="font-mono text-[10px] text-[#CCFF00] tracking-[0.5em] uppercase mb-2">System.Directory_V3.0</p>
          <h2 class="font-akony text-4xl md:text-6xl text-white uppercase italic tracking-tighter">
            Content <span class="text-[#CCFF00] drop-shadow-[0_0_15px_#CCFF00]">Guide</span>
          </h2>
        </div>
        <div class="hidden md:block font-mono text-[10px] text-[#CCFF00]/50 text-right uppercase">
          Neural_Interface: Active<br>
          Protocol: Pyramid_Core
        </div>
      </div>
    </div>

    <div class="relative z-10 px-6 max-w-[1500px] mx-auto">
      <div class="flex flex-wrap justify-center gap-y-12 gap-x-6">
        
        <div v-for="(node, index) in spineNodes" :key="index" 
             class="flex items-center group transition-all duration-500"
             :class="[
               index < 4 ? 'w-full md:w-[calc(25%-1.5rem)]' : '', 
               index >= 4 && index < 7 ? 'w-full md:w-[calc(30%-1.5rem)]' : '',
               index === 7 ? 'w-full md:w-[450px]' : ''
             ]">
          
          <div 
            @mouseenter="activeNode = index"
            class="relative w-full p-6 transition-all duration-300 border backdrop-blur-sm h-full"
            :class="activeNode === index 
              ? 'bg-[#CCFF00]/5 border-[#CCFF00] translate-y-[-5px]' 
              : 'bg-white/5 border-white/10 opacity-70'"
          >
            <div v-if="activeNode === index" class="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#CCFF00]"></div>
            
            <div class="flex justify-between items-start mb-4">
              <div class="p-2 border border-[#CCFF00]/20 bg-[#CCFF00]/5">
                <component :is="node.icon" class="w-5 h-5 text-[#CCFF00]" />
              </div>
              <div class="text-right">
                <span class="font-mono text-[20px] font-black block leading-none" :class="activeNode === index ? 'text-[#CCFF00]' : 'text-white/20'">
                  0{{ index + 1 }}
                </span>
                <ClientOnly>
                  <span class="font-mono text-[7px] text-[#CCFF00] tracking-tighter opacity-50 uppercase">
                    Unit_{{ node.unitId }}
                  </span>
                </ClientOnly>
              </div>
            </div>

            <h3 class="font-akony text-xl text-white uppercase italic mb-3 transition-colors group-hover:text-[#CCFF00]">
              {{ node.title }}
            </h3>
            
            <p class="font-mono text-[10px] text-white/60 leading-relaxed uppercase tracking-wider min-h-[60px]">
              {{ node.desc }}
            </p>

            <div class="mt-4 h-[2px] w-full bg-white/10 overflow-hidden">
              <div 
                class="h-full bg-[#CCFF00] transition-all duration-700"
                :style="{ width: activeNode === index ? '100%' : '10%' }"
              ></div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="max-w-[1400px] mx-auto px-6 mt-16 flex justify-between items-center border-t border-white/5 pt-8">
      <div class="flex gap-4">
        <div v-for="i in 4" :key="i" class="w-8 h-[2px]" :class="i === 1 ? 'bg-[#CCFF00]' : 'bg-[#CCFF00]/20'"></div>
      </div>
      <p class="font-mono text-[9px] text-[#CCFF00]/40 uppercase tracking-[0.5em]">
        Matrix_Layout: Enabled // Protocol_10KA
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { 
  ClockIcon, 
  CpuChipIcon, 
  ShoppingBagIcon, 
  GlobeAltIcon, 
  PaintBrushIcon, 
  UserGroupIcon, 
  EyeIcon, 
  HeartIcon 
} from '@heroicons/vue/24/outline'

const activeNode = ref(0)

// He movido el random aquí para que sea estable y no se recalcule en el template
const spineNodes = ref([
  { title: "Our History", icon: ClockIcon, unitId: '00', desc: "The origins of 10KA, born from a desire to redefine phygital ownership in the Web3 era." },
  { title: "What is 10KA", icon: CpuChipIcon, unitId: '00', desc: "An interoperable AI Agent ecosystem providing customizable assistants as tokenized entities." },
  { title: "Product", icon: ShoppingBagIcon, unitId: '00', desc: "Premium, blockchain-certified phygital sneakers and AI-enhanced wearable assets." },
  { title: "Utility", icon: GlobeAltIcon, unitId: '00', desc: "Unlocking seamless interoperability across leading metaverse platforms like VRChat." },
  { title: "Art Work", icon: PaintBrushIcon, unitId: '00', desc: "Cyberpunk aesthetic meets digital craftsmanship, certified by secure metadata." },
  { title: "Partnerships", icon: UserGroupIcon, unitId: '00', desc: "Collaborations with fashion labels, tech giants, and blockchain infrastructure." },
  { title: "Overall Vision", icon: EyeIcon, unitId: '00', desc: "Shaping the future of digital identity and interoperable experiences." },
  { title: "Thanks", icon: HeartIcon, unitId: '00', desc: "To the dedicated community that empowers the continuous evolution of our ecosystem." }
])

onMounted(() => {
  // Solo generamos los IDs aleatorios una vez que el cliente está listo
  spineNodes.value.forEach(node => {
    node.unitId = (Math.random() * 100).toFixed(0)
  })
})
</script>

<style scoped>
/* TODO TU CSS ORIGINAL SIN TOCAR UNA SOLA LÍNEA */
.font-akony { font-family: 'AKONY', sans-serif !important; }

.cyber-grid-nodes {
  background-image: radial-gradient(circle, #CCFF00 1px, transparent 1px);
  background-size: 30px 30px;
}

.group {
  animation: fadeIn 0.6s ease-out backwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.group:nth-child(1) { animation-delay: 0.1s; }
.group:nth-child(2) { animation-delay: 0.2s; }
.group:nth-child(3) { animation-delay: 0.3s; }
.group:nth-child(4) { animation-delay: 0.4s; }

@media (max-width: 768px) {
  .md\:w-\[calc\(25\%-1\.5rem\) \],
  .md\:w-\[calc\(30\%-1\.5rem\) \],
  .md\:w-\[450px\] {
    width: 100% !important;
  }
}
</style>