<template>
  <section class="relative min-h-screen w-full bg-black py-20 px-4 overflow-hidden antialiased">
    
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute inset-0 opacity-10 cyber-grid-nodes"></div>
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#CCFF00]/5 to-transparent"></div>
    </div>

    <div class="max-w-[1400px] mx-auto relative z-10">
      
      <div class="flex justify-between items-end mb-8 lg:mb-12 border-b border-white/10 pb-6">
        <div>
          <h2 class="font-akony text-3xl md:text-5xl text-white italic tracking-tighter uppercase">
            Asset <span class="text-[#CCFF00]">Classification</span>
          </h2>
          <p class="font-mono text-[10px] text-white/40 mt-2 tracking-[0.3em]">SECURE_PROTOCOL_INITIATED // 10KA_CORE</p>
        </div>
        <div class="hidden md:block font-mono text-[9px] text-[#CCFF00] text-right">
          <p>LOAD_STATUS: 100%</p>
          <p class="animate-pulse text-white/20">DB_SYNC: OK</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-1 border border-white/10 bg-white/5">
        
        <div class="lg:col-span-3 flex lg:flex-col border-b lg:border-b-0 lg:border-r border-white/10 bg-black/40 overflow-x-auto lg:overflow-x-visible no-scrollbar">
          <button 
            v-for="(product, key) in products" :key="key"
            @click="activeTab = key"
            :class="[
              'relative h-16 lg:h-24 px-6 flex items-center gap-4 transition-all border-r lg:border-r-0 lg:border-b border-white/5 uppercase font-mono text-[10px] lg:text-xs tracking-widest text-left whitespace-nowrap lg:whitespace-normal flex-shrink-0 lg:flex-shrink',
              activeTab === key ? 'bg-[#CCFF00] text-black' : 'text-white/40 hover:bg-white/5'
            ]"
          >
            <span class="text-[9px] opacity-50 hidden lg:inline">0{{ Object.keys(products).indexOf(key) + 1 }}</span>
            <span class="font-black">{{ key }}</span>
            <div v-if="activeTab === key" class="absolute bottom-0 left-0 w-full h-1 bg-black lg:hidden"></div>
            <div v-if="activeTab === key" class="absolute right-0 top-0 w-1 h-full bg-white animate-pulse hidden lg:block"></div>
          </button>
          
          <div class="flex-grow p-6 opacity-20 hidden lg:block">
            <div class="h-full border-t border-dashed border-white/20 pt-4 font-mono text-[8px] space-y-2">
              <p>MINT_AUTH: VERIFIED</p>
              <p>NETWORK: ETH_MAINNET</p>
              <div class="w-full h-1 bg-white/10 overflow-hidden">
                <div class="h-full bg-[#CCFF00] w-[65%]"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 relative min-h-[350px] lg:min-h-[400px] bg-black/60 flex items-center justify-center p-8 overflow-hidden group">
          <div class="absolute inset-0 flex items-center justify-center opacity-10">
            <div class="w-full h-full border border-[#CCFF00] rounded-full animate-ping opacity-20"></div>
          </div>

          <transition name="fade-glitch" mode="out-in">
            <img 
              :key="activeTab"
              :src="products[activeTab].image" 
              :alt="activeTab"
              class="relative z-10 w-full h-auto max-h-[300px] lg:max-h-[350px] object-contain drop-shadow-[0_0_40px_rgba(204,255,0,0.2)]"
            />
          </transition>

          <div class="absolute top-6 left-6 lg:top-10 lg:left-10 w-4 h-4 border-l border-t border-[#CCFF00]"></div>
          <div class="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 w-4 h-4 border-r border-b border-[#CCFF00]"></div>
        </div>

        <div class="lg:col-span-4 p-6 lg:p-8 flex flex-col bg-black/40 relative">
          <div class="mb-6 lg:mb-8">
            <div class="flex justify-between items-start mb-4">
              <span class="font-mono text-[9px] px-2 py-1 bg-white/10 text-white tracking-tighter">{{ products[activeTab].standard }}</span>
              <span class="font-mono text-[9px] text-[#CCFF00] italic">STABLE_VERSION</span>
            </div>
            <h3 class="font-akony text-2xl lg:text-3xl text-white mb-2 italic uppercase">{{ activeTab }}</h3>
            <div class="h-1 w-20 bg-[#CCFF00]"></div>
          </div>

          <div class="space-y-6 flex-grow overflow-y-auto pr-4 custom-scroll pb-4">
            <div v-for="(feat, i) in products[activeTab].features" :key="i" class="border-l border-white/10 pl-4 py-1">
              <h4 class="font-mono text-[10px] text-[#CCFF00] font-bold uppercase mb-1">{{ feat.title }}</h4>
              <p class="font-mono text-[11px] text-white/50 leading-relaxed uppercase">{{ feat.desc }}</p>
            </div>
          </div>

          <div class="mt-4 pt-4 border-t border-white/5 opacity-30">
            <p class="font-mono text-[8px] text-white tracking-widest uppercase italic">Data_Source: 10KA_Internal_Encrypted_Index</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

import imgSneakers from '~/assets/images/sneakers.png';
import imgAgent from '~/assets/images/agent.png';
import imgWearables from '~/assets/images/wereables.png';

const activeTab = ref('sneakers');

const products = {
  sneakers: {
    image: imgSneakers,
    standard: 'ERC-6551',
    features: [
      { title: "Exclusive design", desc: "Sneakers crafted with premium materials, prioritizing comfort and style." },
      { title: "Metaverse connection", desc: "Digital access to unique virtual worlds created by 10KA." },
      { title: "Authenticity", desc: "Blockchain technology certifies originality, merging fashion and tech." },
      { title: "Limited editions", desc: "Exclusive quantities, ensuring every pair is unique." }
    ]
  },
  agent: {
    image: imgAgent,
    standard: 'ERC-4907',
    features: [
      { title: "Customizable intelligence", desc: "AI tailored to workflows, data analysis, or content creation." },
      { title: "No limitations", desc: "Operates without restrictions, delivering unparalleled efficiency." },
      { title: "Seamless integration", desc: "Interoperable with the 10KA ecosystem and metaverse." },
      { title: "Blockchain Ownership", desc: "Mint as a unique, tokenized entity with full control." }
    ]
  },
  wearables: {
    image: imgWearables,
    standard: 'ERC-1155',
    features: [
      { title: "Transform your Agent", desc: "Modify appearance and abilities with stylish wearables." },
      { title: "Metaverse-ready", desc: "VRM formats for seamless use in virtual worlds." },
      { title: "Phygital design", desc: "Both physical and digital versions for dual-world expression." },
      { title: "Ecosystem integration", desc: "Across the entire 10KA experience and tasks." }
    ]
  }
};
</script>

<style scoped>
.font-akony { font-family: 'AKONY', sans-serif !important; }
.cyber-grid-nodes { background-image: radial-gradient(circle, #CCFF00 1px, transparent 1px); background-size: 30px 30px; }
.fade-glitch-enter-active, .fade-glitch-leave-active { transition: all 0.3s cubic-bezier(0.85, 0, 0.15, 1); }
.fade-glitch-enter-from { opacity: 0; transform: scale(0.9) translateX(20px); filter: brightness(2); }
.fade-glitch-leave-to { opacity: 0; transform: scale(1.1) translateX(-20px); filter: hue-rotate(90deg); }

.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

.custom-scroll::-webkit-scrollbar { width: 2px; }
.custom-scroll::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); }
.custom-scroll::-webkit-scrollbar-thumb { background: #CCFF00; }
</style>