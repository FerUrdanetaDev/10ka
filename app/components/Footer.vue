<template>
  <footer class="relative w-full bg-black border-t border-[#CCFF00]/30 pt-20 pb-10 px-6 font-mono text-white overflow-hidden">
    
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[#CCFF00]/5 to-transparent"></div>
      <div class="absolute inset-0 opacity-[0.02] cyber-grid"></div>
    </div>

    <div class="max-w-[1400px] mx-auto relative z-10">
      
      <div class="flex flex-col items-center text-center mb-24">
        <h2 class="font-akony text-3xl md:text-5xl italic uppercase tracking-tighter mb-4">
          JOIN THE <span class="text-[#CCFF00] drop-shadow-[0_0_10px_#CCFF00]">10KA COMMUNITY!</span>
        </h2>
        <p class="text-[10px] md:text-xs text-white/50 uppercase tracking-[0.2em] mb-10 max-w-2xl">
          Stay updated with the latest news, announcements, and exclusive content from the world of 10KA. Don’t miss a thing!
        </p>

        <form @submit.prevent="handleSubmit" class="w-full max-w-xl">
          <div class="flex flex-col md:flex-row gap-4 mb-6">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              class="flex-grow bg-transparent border-b border-white/20 py-3 px-2 text-sm focus:outline-none focus:border-[#CCFF00] transition-colors"
              required
            />
            <button type="submit" class="relative group">
              <div class="bg-white text-black font-akony px-10 py-3 skew-x-[-12deg] group-hover:bg-[#CCFF00] transition-all duration-300">
                SUBMIT
              </div>
            </button>
          </div>
          
          <div class="flex items-start gap-3 text-left">
            <input type="checkbox" id="terms" class="mt-1 accent-[#CCFF00]" required />
            <label for="terms" class="text-[9px] text-white/40 uppercase leading-tight">
              I would like to receive updates, offers, and exclusive information from 10KA. I confirm that I am 17 years old or older.
            </label>
          </div>
        </form>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 border-y border-white/10 py-16">
        
        <div class="md:col-span-5 space-y-8">
          <img src="/logo.png" alt="10KA" class="h-12 w-auto object-contain" />
          
          <div class="space-y-4">
            <p class="text-[10px] text-[#CCFF00] tracking-[0.4em] uppercase">FIND US ON</p>
            <div class="flex gap-5">
              <a href="#" class="social-btn" aria-label="X">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" class="social-btn" aria-label="Discord">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
              </a>
              <a href="#" class="social-btn" aria-label="Telegram">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 4.084-1.362 5.441-.168.575-.512.784-.712.802-.444.04-1.008-.293-1.442-.575-.68-.444-1.065-.722-1.725-1.157-.763-.504-.268-.783.167-1.232.114-.118 2.086-1.914 2.124-2.077.005-.02.01-.097-.036-.136-.046-.039-.114-.026-.163-.015-.07.016-1.18.749-3.326 2.196-.314.216-.599.322-.855.316-.281-.006-.823-.153-1.226-.284-.494-.161-.887-.246-.853-.52.017-.143.215-.29.593-.441 2.321-1.011 3.868-1.677 4.641-1.997 2.212-.912 2.67-1.07 2.97-.107l-.01.036z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div class="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div v-for="(links, category) in footerNavigation" :key="category" class="space-y-4">
            <h4 class="text-[11px] text-white font-bold uppercase tracking-widest border-l-2 border-[#CCFF00] pl-3">
              {{ category }}
            </h4>
            <ul class="space-y-2">
              <li v-for="link in links" :key="link.name">
                <a :href="link.url" class="text-[10px] text-white/40 hover:text-[#CCFF00] transition-colors uppercase">
                  {{ link.name }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="pt-12 space-y-8">
        <div class="flex flex-wrap gap-x-8 gap-y-4 justify-center md:justify-start">
          <a href="#" class="legal-link">Terms of Use & Privacy Policy</a>
          <a href="#" class="legal-link">Careers</a>
          <a href="#" class="legal-link">User Agreement</a>
          <a href="#" class="legal-link">Fan Content Guidelines</a>
          <a href="#" class="legal-link">Cookie Declaration</a>
        </div>

        <div class="border-t border-white/5 pt-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
          <img src="/logo.png" alt="10KA" class="h-8 grayscale opacity-50" />
          <p class="text-[9px] text-white/30 leading-loose uppercase tracking-tighter">
            © 2024 10KA S.A. All rights reserved. 10KA, the 10KA logo, Agents, phygital sneakers and the 10KA logo are trademarks and/or registered trademarks of 10KA S.A. in the US and/or other countries.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const footerNavigation = {
  SYSTEM: [
    { name: "Access Core", url: "#" },
    { name: "AI Agent", url: "#" },
    { name: "Wearables", url: "#" }
  ],
  ENVIRONMENT: [
    { name: "Nifty Island", url: "#" },
    { name: "The Sandbox", url: "#" },
    { name: "VRM Integration", url: "#" }
  ],
  DEVELOPMENT: [
    { name: "ERC-6551", url: "#" },
    { name: "Smart Contracts", url: "#" },
    { name: "Github Docs", url: "#" }
  ]
};

const handleSubmit = () => {
  console.log("NEURAL_DATA_SYNCED");
};
</script>

<style scoped>
.font-akony { font-family: 'AKONY', sans-serif !important; }

.cyber-grid {
  background-image: linear-gradient(to right, #CCFF00 1px, transparent 1px),
                    linear-gradient(to bottom, #CCFF00 1px, transparent 1px);
  background-size: 40px 40px;
}

/* ESTILO DE LOS ICONOS SOCIALES EN VERDE LIMA */
.social-btn {
  @apply text-[#CCFF00] p-2 border border-[#CCFF00]/20 hover:border-[#CCFF00] hover:bg-[#CCFF00]/10 transition-all duration-300;
  filter: drop-shadow(0 0 5px rgba(204, 255, 0, 0.3));
}

.legal-link {
  @apply text-[10px] text-white/30 hover:text-white transition-colors uppercase tracking-widest border-b border-transparent hover:border-[#CCFF00];
}

footer {
  box-shadow: inset 0 20px 50px -20px rgba(204, 255, 0, 0.05);
}
</style>