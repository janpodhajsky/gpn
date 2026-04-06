// Kapitola 3 – Propaganda

window.CHAPTERS_DATA = window.CHAPTERS_DATA || [];
window.CHAPTERS_DATA.push({
  title: "Propaganda",
  subtitle: "Jak se připravovala půda pro vraždění",
  rights: [],
  video: null,
  extraInputs: [
    { key: 'ch2-hitler', label: 'Napište tři přídavná jména, která podle Vás vystihují pohled Adolfa Hitlera na humanitu.' },
    { key: 'ch2-masaryk', label: 'Napište tři přídavná jména, která podle Vás vystihují pohled T.G. Masaryka na humanitu.' }
  ],
  noteQ: "Na základě obsahu kapitoly: Jak propaganda mění vnímání hodnoty lidského života? Dokážete uvést ještě jiný případ?",
  pages: [

    // ── STRÁNKA 1 ──────────────────────────────────────────────────
    `
<div style="border:1.5px solid rgba(234,179,8,0.4);border-radius:10px;padding:1.25rem 1.5rem;margin-bottom:2rem;background:rgba(234,179,8,0.05)">
  <p style="font-size:0.78rem;font-weight:700;color:#EAB308;letter-spacing:0.1em;margin-bottom:0.9rem">PORUŠENÁ PRÁVA</p>
  <p style="color:#e5e5e5;line-height:1.7;margin-bottom:0.75rem">
    <strong style="color:#fff">Lidská důstojnost je nedotknutelná</strong><br>
    <span style="font-size:0.8rem;color:#9ca3af">(ČLÁNEK 1, LISTINA ZÁKLADNÍCH PRÁV EVROPSKÉ UNIE)</span>
  </p>
  <p style="color:#e5e5e5;line-height:1.7;margin-bottom:0.75rem">
    Zakazuje se jakákoliv diskriminace<br>
    <span style="font-size:0.8rem;color:#9ca3af">(ČLÁNEK 21, LISTINA ZÁKLADNÍCH PRÁV EVROPSKÉ UNIE)</span>
  </p>
  <p style="color:#e5e5e5;line-height:1.7;margin-bottom:0">
    Lidé jsou svobodní a rovní v důstojnosti i v právech<br>
    <span style="font-size:0.8rem;color:#9ca3af">(ČLÁNEK 1, LISTINA ZÁKLADNÍCH PRÁV A SVOBOD ČESKÉ REPUBLIKY)</span>
  </p>
</div>

<!-- Hitler: obrázek vlevo, bublina vpravo -->
<div style="display:flex;align-items:flex-start;gap:1.25rem;margin-bottom:1.75rem;flex-wrap:wrap">
  <div style="flex-shrink:0">
    <img src="img/hitler.png" alt="Adolf Hitler" style="max-height:160px;mix-blend-mode:screen;opacity:0.88;filter:drop-shadow(0 0 14px rgba(0,0,0,0.9))">
  </div>
  <div style="flex:1;min-width:180px">
    <div style="background:rgba(255,255,255,0.06);border:2px solid rgba(180,30,30,0.45);border-radius:18px 18px 18px 4px;padding:0.9rem 1.1rem">
      <p style="color:#e5e5e5;font-size:0.85rem;line-height:1.6;margin:0;font-style:italic">„Silnější pokolení vypudí slabé, neboť touha po životě ve své poslední podobě vždy znovu rozbije všechna směšná pouta tzv. humanity, aby na její místo nechala nastoupit humanitu přírody ničící slabé, a tak bylo síle uvolněno místo"</p>
    </div>
  </div>
</div>

<!-- Masaryk: obrázek vlevo, bublina vpravo -->
<div style="display:flex;align-items:flex-start;gap:1.25rem;margin-bottom:2rem;flex-wrap:wrap">
  <div style="flex-shrink:0">
    <img src="img/masaryk.png" alt="T.G. Masaryk" style="max-height:160px;mix-blend-mode:screen;opacity:0.88;filter:drop-shadow(0 0 14px rgba(0,0,0,0.9))">
  </div>
  <div style="flex:1;min-width:180px">
    <div style="background:rgba(255,255,255,0.06);border:2px solid rgba(234,179,8,0.35);border-radius:18px 18px 18px 4px;padding:0.9rem 1.1rem">
      <p style="color:#e5e5e5;font-size:0.85rem;line-height:1.6;margin:0;font-style:italic">„Žádný stát neobstojí, nemá-li pevné mravní základy své existence. Práva demokracie je humanitní, humanita je éthickou základnou veškeré politiky"</p>
    </div>
  </div>
</div>

[[INPUTS]]

<div style="display:flex;gap:1.5rem;flex-wrap:wrap;align-items:flex-start;margin-bottom:1.5rem">
  <div style="flex:1;min-width:200px">
    <p style="line-height:1.8;color:#d1d5db">
      Adolf Hitler se ze začátku bál odporu proti plánované akci. A tak muselo vzniknout něco, co by se slovy J. Goebbelse <em>„vklínilo do vědomí každého obyvatele"</em>. Rasová propaganda byla doslova všude: v tisku, ve filmu, v rozhlase, ale také při školním vyučování. Většinou se ukazovaly ilustrace mající dokládat naprosto přehnané náklady sociální podpory. Jindy zase byli nemocní lidé odlidštěni a zobrazováni jako zvířata.
    </p>
  </div>
  <div style="flex-shrink:0;text-align:center">
    <img src="img/goebbels.png" alt="Propagandistický plakát" style="max-width:200px;max-height:240px;border-radius:6px;opacity:0.85;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.7))">
  </div>
</div>

<div style="display:flex;gap:1.5rem;flex-wrap:wrap;align-items:flex-start;margin-bottom:2rem">
  <div style="flex:1;min-width:200px">
    <p style="line-height:1.8;color:#d1d5db">
      Z filmové tvorby se nejvíce proslavil propagandistický film <strong style="color:#fff">„Žaluji"</strong> (<em>Ich klage an</em>) z roku 1941. Vypráví příběh ženy trpící roztroušenou sklerózou. Pravý důvod vzniku tohoto filmu je však ospravedlnit masové vraždy páchané na bezbranných obětech.
    </p>
  </div>
  <div style="flex-shrink:0;text-align:center">
    <img src="img/ich-klage-an.png" alt="Film Žaluji" style="max-width:200px;max-height:240px;border-radius:6px;opacity:0.85;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.7))">
  </div>
</div>

<div style="margin-bottom:1.5rem;text-align:center">
  <img src="img/letak-2.png" alt="Ukázka propagandistického materiálu" style="max-width:100%;border-radius:6px;opacity:0.9;filter:drop-shadow(0 4px 16px rgba(0,0,0,0.7))">
  <p style="font-size:0.78rem;color:#6b7280;margin-top:0.6rem;line-height:1.6;font-style:italic">PŘEKLAD: …protože Bůh nemůže chtít, aby se nemocní a churaví rozmnožovali v nemocných a churavých</p>
</div>

<div style="display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:1rem;align-items:stretch">
  <div style="flex:1;min-width:140px">
    <img src="img/letak-original.png" alt="Ukázka 1" style="width:100%;height:100%;object-fit:contain;border-radius:6px;opacity:0.9;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.7))">
  </div>
  <div style="flex:1;min-width:140px">
    <img src="img/letak-preklad.png" alt="Ukázka 2" style="width:100%;height:100%;object-fit:contain;border-radius:6px;opacity:0.9;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.7))">
  </div>
</div>
`,

    // ── STRÁNKA 2 ──────────────────────────────────────────────────
    `
<div style="display:flex;align-items:flex-start;gap:1.5rem;margin-bottom:2rem;flex-wrap:wrap">
  <div style="flex-shrink:0">
    <img src="img/klara.png" alt="Klára" style="max-height:160px;mix-blend-mode:screen;opacity:0.92;filter:drop-shadow(0 0 14px rgba(0,0,0,0.9))">
  </div>
  <div style="flex:1;min-width:200px">
    <div style="background:rgba(255,255,255,0.06);border:2px solid rgba(234,179,8,0.35);border-radius:18px 18px 18px 4px;padding:0.9rem 1.1rem">
      <p style="color:#fff;font-weight:700;font-size:0.95rem;line-height:1.5;margin:0">Kdy se začaly objevovat ojedinělé, ale přesto protiprávní případy?</p>
    </div>
  </div>
</div>

<p style="line-height:1.8;color:#d1d5db;margin-bottom:1rem">
  V Československu byl během chemických pokusů těžce poraněn čtrnáctiletý chlapec. Jeho matka společně se svou sestrou bez vědomí otce chlapce chladnokrevně zastřelily pěti ranami z pistole. Vykřičníkem nezůstává jen fakt, kolik ran bylo na zraněného chlapce použito a že otec o tomto plánu nevěděl, zarážející je i fakt, že jedna z žen byla lékařkou. Z činu však byly omilostněny.
</p>
<p style="line-height:1.8;color:#d1d5db;margin-bottom:0.5rem">
  V Německu se zase do propagandy hodil případ rolníka, který si vzal z ústavu svého postiženého syna. Avšak poté, co se dozvěděl, že jeho syn bude prohlášen za nebezpečného, ho raději sám zastřelil. Propagandistické články se otce zastávaly a poukazovaly na <em>„zdravý selský rozum"</em>.
</p>
<p style="font-size:0.75rem;color:#4b5563;margin-bottom:2rem;line-height:1.6">
  ŠIMŮNEK, Michal V. a NOVÁK, Milan. <em>Odbity smrti.</em> Praha: Academia, 2023. ISBN 978-80-200-3470-0.
</p>

<div style="border:1.5px solid rgba(234,179,8,0.35);border-radius:10px;padding:1.25rem 1.5rem;background:rgba(234,179,8,0.05);margin-bottom:2rem">
  <h4 style="font-family:'Playfair Display',serif;font-size:1rem;color:#EAB308;margin-bottom:0.75rem;letter-spacing:0.03em">CO SI ODNÁŠÍME?</h4>
  <p style="line-height:1.8;color:#d1d5db;margin:0">
    Dle nacistické ideologie zdraví jedince nepatřilo jemu samotnému, nýbrž celému národu. A právě toto naprosto převrátilo lékařskou etiku, zdravotnický a sociální systém.
  </p>
</div>
`
  ]
});
