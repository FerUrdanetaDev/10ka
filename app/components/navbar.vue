<template>
  <nav class="fixed top-0 left-0 w-full h-16 flex bg-black z-[110] border-b border-white/5 lg:border-transparent uppercase">
    <div class="bg-[#CCFF00] w-28 h-full flex items-center justify-center flex-shrink-0 z-[120]">
      <img src="/logo.png" alt="10KA" class="w-16 h-18 object-contain" style="filter: brightness(0);" />
    </div>

    <div class="flex-grow flex items-center justify-between h-full">
      
      <div class="hidden lg:flex items-center gap-6 px-8">
        <NuxtLink v-for="link in ['TERMINAL', 'ECOSYSTEM', 'AGENTS', 'DOCS']" :key="link" to="#" class="nav-link text-[13px] font-bold tracking-[0.01em] group text-white">
          <span class="hover-area">
            {{ link }} 
            <span class="bracket-container text-white/30">
              [<ArrowUpRightIcon class="inline w-2.5 h-2.5 stroke-[3]" />]
            </span>
          </span>
        </NuxtLink>
      </div>

      <div class="flex h-full items-center ml-auto">
        
        <div class="hidden lg:flex items-center gap-7 mr-10 text-white/50">
          <a href="#" class="hover:text-[#CCFF00] transition-colors leading-none"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.946-2.419 2.157-2.419 1.21 0 2.175 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg></a>
          <a href="#" class="hover:text-[#CCFF00] transition-colors leading-none"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
          <a href="#" class="hover:text-[#CCFF00] transition-colors text-xl font-bold leading-none">𝕏</a>
        </div>

        <div class="hidden lg:flex bg-[#CCFF00] w-48 h-full items-center justify-center cursor-pointer hover:bg-white hover:shadow-[0_0_15px_#CCFF00] transition-all duration-300 flex-shrink-0">
          <span class="text-black text-[13px] font-black tracking-[0.01rem]">WHITELIST</span>
        </div>

        <ClientOnly>
          <div class="lg:hidden flex items-center justify-center h-full px-6 border-l border-white/5">
            <button @click="$emit('toggleMenu')" class="flex items-center outline-none z-[160]">
              <div class="relative w-8 h-8 flex flex-col justify-center items-end gap-1.5">
                <span :class="['h-[2px] bg-[#CCFF00] transition-all duration-300', isMenuOpen ? 'w-8 rotate-45 translate-y-[4px]' : 'w-6']"></span>
                <span :class="['h-[2px] bg-[#CCFF00] transition-all duration-300', isMenuOpen ? 'w-8 -rotate-45 -translate-y-[4px]' : 'w-8']"></span>
              </div>
            </button>
          </div>
        </ClientOnly>

      </div>
    </div>

    <ClientOnly>
      <Transition name="cyber-right">
        <div v-if="isMenuOpen" class="fixed inset-0 z-[150] bg-black flex flex-col items-end shadow-[-20px_0_60px_rgba(0,0,0,0.8)]">
          <div class="absolute inset-0 pointer-events-none scanlines opacity-20"></div>
          <div class="absolute inset-0 bg-gradient-to-l from-[#CCFF00]/5 to-transparent"></div>
          <div class="absolute top-0 right-0 w-full h-[1px] bg-[#CCFF00] shadow-[0_0_20px_#CCFF00]"></div>
          
          <div class="relative w-full md:w-2/3 h-full flex flex-col justify-between p-10 md:p-20">
            <div class="mt-12 text-right">
              <p class="text-[10px] text-[#CCFF00] tracking-[0.8em] opacity-70 mb-2">ACCESS_GRANTED // V3.0</p>
              <div class="h-[1px] w-24 bg-[#CCFF00] ml-auto"></div>
            </div>

            <nav class="flex flex-col items-end gap-2">
              <NuxtLink v-for="link in ['TERMINAL', 'ECOSYSTEM', 'STAKING', 'DOCS']" :key="link" to="#"
                class="group flex items-center gap-6 py-2 text-right">
                <ArrowUpRightIcon class="w-10 h-10 md:w-14 md:h-14 text-[#CCFF00] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                <span class="text-5xl md:text-8xl font-black tracking-tighter text-white group-hover:text-[#CCFF00] transition-colors uppercase">
                  {{ link }}
                </span>
              </NuxtLink>
            </nav>
            
            <div class="flex flex-col gap-10 border-t border-[#CCFF00]/10 pt-10">
              <button class="bg-[#CCFF00] text-black py-5 font-black tracking-[.4em] text-center hover:bg-white transition-all shadow-[0_10px_30px_rgba(204,255,0,0.1)] uppercase">
                JOIN_WHITELIST
              </button>
              <div class="flex items-center gap-10 justify-end text-white/50 text-sm">
                <a href="#" class="hover:text-[#CCFF00] transition-all tracking-widest">DISCORD</a>
                <a href="#" class="hover:text-[#CCFF00] transition-all tracking-widest">INSTAGRAM</a>
                <a href="#" class="hover:text-[#CCFF00] transition-all text-2xl font-bold">𝕏</a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </ClientOnly>
  </nav>
</template>

<script setup>
import { ArrowUpRightIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'
defineProps(['isMenuOpen'])
defineEmits(['toggleMenu'])
</script>


<style scoped>
/* TU CSS ORIGINAL SIN UNA SOLA LÍNEA CAMBIADA */
.cyber-right-enter-active, .cyber-right-leave-active {
  transition: all 0.5s cubic-bezier(0.85, 0, 0.15, 1);
}
.cyber-right-enter-from { transform: translateX(100%); }
.cyber-right-leave-to { transform: translateX(100%); }

.scanlines {
  background: linear-gradient(to bottom, transparent 50%, rgba(204, 255, 0, 0.05) 51%);
  background-size: 100% 4px;
}
</style>