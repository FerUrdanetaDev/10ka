<template>
  <section class="relative min-h-screen w-full bg-black py-20 px-6 overflow-hidden antialiased text-white selection:bg-[#CCFF00] selection:text-black font-mono">
    
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute inset-0 opacity-10 cyber-grid-nodes"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#CCFF00]/5 blur-[120px] rounded-full animate-pulse"></div>
      <div class="absolute inset-0 bg-scanlines opacity-[0.03]"></div>
    </div>

    <div class="max-w-[1400px] mx-auto relative z-10">
      
      <div class="flex items-center justify-between border-b border-[#CCFF00]/30 pb-8 mb-16">
        <div class="flex items-center gap-6">
          <div class="w-16 h-16 border-2 border-[#CCFF00] p-2 flex items-center justify-center bg-[#CCFF00]/5 shadow-[0_0_15px_rgba(204,255,0,0.2)] relative overflow-hidden group">
            <img src="/logo.png" alt="10KA_LOGO" class="w-full h-auto object-contain z-10" />
            <div class="absolute inset-0 bg-[#CCFF00]/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
          </div>
          <h2 class="font-akony text-4xl md:text-6xl uppercase italic tracking-tighter">
            Unlock <span class="text-[#CCFF00] drop-shadow-[0_0_10px_#CCFF00]">Access</span>
          </h2>
        </div>
        <div class="hidden md:block text-[10px] text-[#CCFF00] text-right uppercase tracking-[0.2em]">
          <p class="typing-effect">NEURAL_LINK: ESTABLISHED</p>
          <p class="opacity-50 mt-1">PROTOCOL: BIOPUNK_OVERRIDE</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div class="lg:col-span-4 space-y-10 relative">
          <div class="relative p-6 border-l-2 border-[#CCFF00] bg-white/[0.03] backdrop-blur-sm overflow-hidden">
            <div class="absolute top-0 right-0 p-1 text-[8px] text-[#CCFF00]/30">ID: 10KA-CUBE</div>
            <h3 class="font-akony text-2xl uppercase italic text-white mb-4">Access Core</h3>
            <p class="text-[11px] text-white/50 leading-relaxed uppercase tracking-widest">
              Virtual NFT Access Core. <br>
              Injecting <span class="text-white">10KA AI Agent</span> code into the system...
            </p>
          </div>

          <div class="relative group flex justify-center py-10">
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none scale-150">
              <div class="absolute w-64 h-64 border border-[#CCFF00]/20 rounded-full animate-ping"></div>
              <div class="absolute w-80 h-80 border border-[#CCFF00]/5 rounded-full animate-spin-slow">
                <div class="h-1/2 w-[1px] bg-gradient-to-t from-transparent to-[#CCFF00] mx-auto"></div>
              </div>
            </div>
            <img src="~/assets/images/access-core-cube.png" alt="ACCESS_CORE_UNIT" class="relative z-10 w-80 animate-float drop-shadow-[0_0_25px_rgba(204,255,0,0.2)]" />
          </div>
        </div>

        <div class="lg:col-span-4 flex flex-col items-center justify-center space-y-12">
          <div class="text-center relative">
            <div class="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#CCFF00] to-transparent animate-pulse"></div>
            <p class="text-[10px] text-[#CCFF00] tracking-[0.5em] uppercase mb-4 animate-pulse">System online / ready</p>
            <div class="inline-block py-2 px-8 bg-[#CCFF00] text-black font-akony text-sm skew-x-[-12deg] shadow-[0_0_30px_rgba(204,255,0,0.4)]">
              DIRECT MINT ACTIVE
            </div>
          </div>

          <button @click="handleMint" class="mint-trigger relative group active:scale-95 transition-transform">
            <div class="btn-frame bg-black border border-[#CCFF00] group-hover:bg-[#CCFF00] transition-all duration-300">
              <span class="font-akony text-5xl italic tracking-tighter text-white group-hover:text-black z-10 glitch-text" data-text="MINT">
                MINT
              </span>
            </div>
            <div class="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-[#CCFF00]"></div>
            <div class="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-[#CCFF00]"></div>
            <div class="absolute inset-0 bg-[#CCFF00]/20 blur-xl opacity-50 animate-pulse"></div>
          </button>

          <div class="space-y-2 text-center">
            <p class="text-[9px] text-white/30 uppercase tracking-[0.3em]">Verify contract: 0x10KA...884</p>
            <div class="w-full h-1 bg-white/5 overflow-hidden">
              <div class="h-full bg-[#CCFF00] w-1/3 animate-loading-bar"></div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-4 bg-white/[0.01] border border-white/10 backdrop-blur-xl relative group h-full overflow-hidden flex flex-col">
          
          <div class="border-b border-white/10 p-6">
             <div class="absolute top-0 right-0 bg-[#CCFF00] text-black font-bold text-[9px] px-2 py-1 z-20">AGENT_UNIT_v2.0</div>
             <h4 class="font-akony text-xl italic text-white flex justify-between relative z-10">
               Agent <span>[LIVE]</span>
             </h4>
          </div>

          <div class="relative flex-grow flex items-center justify-center p-6 min-h-[500px]">
            
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none scale-90 opacity-40">
              <div class="w-[450px] h-[450px] border border-[#CCFF00]/10 rounded-full animate-spin-slow">
                 <div class="h-full w-[1px] bg-gradient-to-t from-transparent via-[#CCFF00]/20 to-transparent mx-auto"></div>
              </div>
            </div>

            <img src="~/assets/images/agent2.png" alt="AGENT_UNIT_v2.0" class="relative z-10 w-full max-w-[320px] object-contain drop-shadow-[0_0_20px_rgba(204,255,0,0.1)]" />

            <div class="absolute inset-0 z-20 font-mono text-[9px] uppercase tracking-widest text-white/70">
              
              <div class="absolute top-6 left-6 border-l border-b border-[#CCFF00] pl-2 pb-2">
                 DeFi Advisor
                 <p class="text-[7px] text-[#CCFF00]">>> [active]</p>
              </div>

              <div class="absolute top-6 right-6 border-r border-b border-[#CCFF00] pr-2 pb-2 text-right">
                 Identity Mgmt
                 <p class="text-[7px] text-[#CCFF00]">>> [verified]</p>
              </div>

              <div class="absolute top-1/2 left-4 -translate-y-1/2 flex gap-1 items-center">
                 <div class="w-1.5 h-1.5 bg-[#CCFF00] rounded-full animate-pulse"></div>
                 NFT Automator
              </div>

              <div class="absolute top-1/2 right-4 -translate-y-1/2 text-right flex gap-1 items-center justify-end">
                 AI Adaptation
                 <div class="w-1.5 h-1.5 bg-[#CCFF00] rounded-full animate-pulse"></div>
              </div>

              <div class="absolute bottom-16 left-6 flex flex-col gap-1 items-start">
                  <div class="w-10 h-[1px] bg-[#CCFF00]"></div>
                  Metaverse Sync
                  <p class="text-[7px] opacity-40 lowercase">vrm & gaming integration</p>
              </div>

              <div class="absolute bottom-16 right-6 text-right flex flex-col gap-1 items-end">
                  <div class="w-10 h-[1px] bg-[#CCFF00]"></div>
                  Editable Wearables
                  <p class="text-[7px] opacity-40 lowercase">erc-1155 assets</p>
              </div>
            </div>

          </div>

          <div class="mt-auto p-6 border-t border-white/5 font-mono text-[8px] text-[#CCFF00]/40 uppercase space-y-1">
            <p Dino class="animate-pulse">> syncing_biometric_data...</p>
            <p Kino Dino>> hash_verified: 884-X9-10KA</p>
            <p>> status: linked</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const handleMint = () => {
  console.log("INJECTING_MINT_SEQUENCE_01...");
}
</script>

<style scoped>
/* (Se mantienen los mismos estilos CSS base que te gustaron) */
.font-akony { font-family: 'AKONY', sans-serif !important; }
.cyber-grid-nodes { background-image: radial-gradient(circle, #CCFF00 1px, transparent 1px); background-size: 40px 40px; }
.bg-scanlines { background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06)); background-size: 100% 2px, 3px 100%; }
.mint-trigger { width: 300px; height: 85px; }
.btn-frame { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; transform: skewX(-12deg); cursor: pointer; overflow: hidden; }
.glitch-text { position: relative; animation: glitch 3s infinite; }
.glitch-text::before, .glitch-text::after { content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.8; }
.glitch-text::before { left: 2px; text-shadow: -2px 0 #ff00c1; clip: rect(44px, 450px, 56px, 0); animation: glitch-anim 5s infinite linear alternate-reverse; }
.glitch-text::after { left: -2px; text-shadow: -2px 0 #00fff9; clip: rect(44px, 450px, 56px, 0); animation: glitch-anim2 1s infinite linear alternate-reverse; }
@keyframes glitch-anim { 0% { clip: rect(31px, 9999px, 94px, 0); } 20% { clip: rect(62px, 9999px, 42px, 0); } 100% { clip: rect(89px, 9999px, 98px, 0); } }
@keyframes glitch-anim2 { 0% { clip: rect(10px, 9999px, 30px, 0); } 100% { clip: rect(70px, 9999px, 90px, 0); } }
@keyframes float { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-20px) rotate(2deg); } }
.animate-float { animation: float 6s ease-in-out infinite; }
.animate-spin-slow { animation: spin 15s linear infinite; }
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes loading-bar { 0% { transform: translateX(-100%); } 50% { transform: translateX(200%); } 100% { transform: translateX(-100%); } }
.animate-loading-bar { animation: loading-bar 3s ease-in-out infinite; }
.typing-effect { border-right: 2px solid #CCFF00; white-space: nowrap; overflow: hidden; animation: typing 3s steps(30, end) infinite; }
@keyframes typing { from { width: 0 } to { width: 100% } }
</style>