// Kapitola 6 – Poválečná situace a (ne)potrestání viníků

window.CHAPTERS_DATA = window.CHAPTERS_DATA || [];
window.CHAPTERS_DATA.push({
  title: "Poválečná situace a (ne)potrestání viníků",
  subtitle: "Co přišlo po roce 1945",
  rights: [],
  video: null,
  noteQ: "Jak hodnotíte fakt, že většina pachatelů z Akce T4 unikla spravedlnosti a mnozí pokračovali v práci ve zdravotnictví? Co to říká o fungování poválečné justice? Myslíte, že je možné podobné selhání systému v dnešní době?",
  pages: [
    `
<p style="line-height:1.8;color:#d1d5db;margin-bottom:0.5rem">
  Zatímco druhá světová válka v Evropě oficiálně skončila 8.5.1945, umírání v léčebnách pokračovalo s lokálními rozdíly až do roku 1947. Situace s jídlem se totiž nezlepšila hned a rovněž čím dál častěji na odděleních vypukaly epidemie.
  K výraznému zlepšení na západě dochází v důsledku Marshallova plánu. Ústavy na území pod Sovětskou nadvládou se zlepšovaly pomalu.
  Německým pacientům na českém území se rovněž nevyhnul odsun.
</p>
<p style="font-size:0.75rem;color:#4b5563;margin-bottom:1.75rem;line-height:1.6;font-style:italic">
  ŠIMŮNEK, Michal V. a NOVÁK, Milan. <em>Odbity smrti.</em> Praha: Academia, 2023. ISBN 978-80-200-3470-0.
</p>

<!-- Klára bublina -->
<div style="display:flex;align-items:flex-start;gap:1.25rem;margin-bottom:1.75rem;flex-wrap:wrap">
  <div style="flex-shrink:0">
    <img src="img/klara.png" alt="Klára" style="max-height:160px;mix-blend-mode:screen;opacity:0.92;filter:drop-shadow(0 0 14px rgba(0,0,0,0.9))">
  </div>
  <div style="flex:1;min-width:180px">
    <div style="background:rgba(255,255,255,0.06);border:2px solid rgba(234,179,8,0.35);border-radius:18px 18px 18px 4px;padding:0.9rem 1.1rem">
      <p style="color:#fff;font-weight:700;font-size:0.95rem;line-height:1.5;margin:0">Odhadněte, co se stalo po válce s aktivními účastníky „Akce T4".</p>
    </div>
  </div>
</div>

<!-- Inline kvíz -->
<div id="ch6-quiz" style="margin-bottom:1.75rem">
  <div style="display:flex;flex-direction:column;gap:0.6rem">
    <button onclick="ch6Answer(1)" id="ch6-opt1"
      style="text-align:left;background:rgba(255,255,255,0.05);border:1.5px solid rgba(255,255,255,0.15);border-radius:8px;padding:0.75rem 1rem;color:#d1d5db;font-size:0.9rem;cursor:pointer;transition:border-color 0.2s">
      1. Všichni byli spravedlivě odsouzeni
    </button>
    <button onclick="ch6Answer(2)" id="ch6-opt2"
      style="text-align:left;background:rgba(255,255,255,0.05);border:1.5px solid rgba(255,255,255,0.15);border-radius:8px;padding:0.75rem 1rem;color:#d1d5db;font-size:0.9rem;cursor:pointer;transition:border-color 0.2s">
      2. Byli potrestáni nejvyšší představitelé, ale většina dalších lidí se trestu vyhnula
    </button>
    <button onclick="ch6Answer(3)" id="ch6-opt3"
      style="text-align:left;background:rgba(255,255,255,0.05);border:1.5px solid rgba(255,255,255,0.15);border-radius:8px;padding:0.75rem 1rem;color:#d1d5db;font-size:0.9rem;cursor:pointer;transition:border-color 0.2s">
      3. Všichni unikli trestu
    </button>
  </div>
  <div id="ch6-feedback" style="display:none;margin-top:0.75rem;padding:0.75rem 1rem;border-radius:8px;font-size:0.875rem;line-height:1.6"></div>
</div>

<p style="line-height:1.8;color:#d1d5db;margin-bottom:1.75rem">
  V rámci Norimberských procesů se sice nacistická „eutanazie" vyšetřovala, ale došlo k potrestání jen těch nejvyšších protagonistů (například Karl Brandt). Dále se však příliš na vyšetřování nedalo, a tak se často stávalo, že ředitelé ústavů a aktivně se podílející personál buď zcela unikli spravedlnosti nebo dostali směšně malé tresty. Největším paradoxem je fakt, že spousta pachatelů v „Akci T4" byla po válce nadále zaměstnávána ve zdravotnictví.<br><br>
  Celkový počet obětí „Akce T4" (včetně neoficiálního pokračování) se odhaduje na 200 – 250 tisíc. Ale jednotlivé údaje se velmi liší.
</p>

<!-- Strom -->
<div style="margin-bottom:0.4rem;text-align:center">
  <img src="img/strom.png" alt="Strom s 250 000 listy" style="max-width:100%;border-radius:6px;opacity:0.9;filter:drop-shadow(0 4px 16px rgba(0,0,0,0.7))">
</div>
<p style="font-size:0.82rem;color:#9ca3af;margin-top:0.5rem;margin-bottom:0.3rem;font-style:italic">Ku příkladu takto velká je koruna stromu, když je na ní 250 tisíc listů. Tolik bylo zbytečně zabito lidí…</p>
<p style="font-size:0.72rem;color:#4b5563;margin-bottom:0;font-style:italic">generováno</p>
`
  ]
});
