/* The Offer Goes to School — applied learning and product library.
   Products marked "In development" are editorial specifications, not checkout listings. */
(function(){
  "use strict";
  const categories=["Offer design","Money & pricing","Enterprise systems","Sales & negotiation","Leadership","Institutions"];
  const products=[
    {id:"offer-design-kit",title:"The Offer Design System",category:"Offer design",type:"Toolkit",audience:"Founders, consultants and independent professionals",description:"Construct a proposition around a real customer problem, credible proof and deliverable outcomes.",includes:["Offer architecture workbook","Customer-problem interview guide","Promise, proof and risk checklist"],status:"In development"},
    {id:"offer-autopsy-kit",title:"The Offer Autopsy Field Kit",category:"Offer design",type:"Research toolkit",audience:"Strategists, business educators and researchers",description:"Study why an offer works—or fails—by reconstructing the complete exchange.",includes:["Offer dissection worksheet","Evidence and assumption log","Case comparison scorecard"],status:"In development"},
    {id:"offer-canvas",title:"Interactive Offer Canvas",category:"Offer design",type:"Interactive tool",audience:"Anyone shaping a new proposition",description:"Turn a vague business idea into a structured, reviewable draft offer in your browser.",includes:["Eight core offer decisions","Live draft summary","Copyable review document"],status:"Free tool",tool:"/workbench/offer-canvas"},
    {id:"pricing-architecture",title:"Pricing Architecture Workbook",category:"Money & pricing",type:"Workbook",audience:"Product businesses and service firms",description:"Model value, total customer cost and the consequences of alternative pricing models.",includes:["Pricing decision tree","Cost and value worksheet","Offer comparison exercises"],status:"In development"},
    {id:"margin-calculator",title:"Price & Margin Calculator",category:"Money & pricing",type:"Interactive tool",audience:"Independent businesses and early-stage founders",description:"Test contribution margin, estimated profit and break-even quantity before committing to a price.",includes:["Contribution margin","Monthly profit scenario","Break-even volume"],status:"Free tool",tool:"/workbench/margin-calculator"},
    {id:"first-customer",title:"The First Customer Field Guide",category:"Sales & negotiation",type:"Field guide",audience:"New founders and independent professionals",description:"Design useful discovery conversations and validate demand before spending heavily.",includes:["Discovery interview prompts","Outreach worksheet","Evidence-of-demand tracker"],status:"In development"},
    {id:"negotiation-playbook",title:"The Practical Negotiation Playbook",category:"Sales & negotiation",type:"Playbook",audience:"Business owners, buyers and service providers",description:"Prepare alternatives, concessions and credible terms for consequential negotiations.",includes:["Preparation worksheet","Concession ladder","Agreement review checklist"],status:"In development"},
    {id:"business-opportunity",title:"Business Opportunity Evaluation Kit",category:"Enterprise systems",type:"Decision kit",audience:"Prospective entrepreneurs and investors",description:"Examine the problem, market access, operating costs and downside risk before starting.",includes:["Opportunity scoring matrix","Demand-validation worksheet","Assumption and risk register"],status:"In development"},
    {id:"operating-system",title:"The Small Enterprise Operating System",category:"Enterprise systems",type:"Template system",audience:"Small organisations building repeatable work",description:"Convert undocumented work into reliable routines, roles and quality checks.",includes:["SOP starter templates","Weekly operating review","Responsibility matrix"],status:"In development"},
    {id:"leadership-first",title:"The First-Time Manager Handbook",category:"Leadership",type:"Handbook",audience:"First-time managers and team leads",description:"Establish healthy feedback, delegation and accountability habits without unnecessary bureaucracy.",includes:["First 30 days plan","Meeting templates","Coaching conversation framework"],status:"In development"},
    {id:"team-design",title:"The Team Performance Workbook",category:"Leadership",type:"Workbook",audience:"Small team leaders",description:"Diagnose responsibilities, blockers and working agreements to help a team deliver.",includes:["Role clarity map","Decision-rights exercise","Team review template"],status:"In development"},
    {id:"association-management",title:"Association Management Toolkit",category:"Institutions",type:"Institutional kit",audience:"Professional, civic and membership organisations",description:"Strengthen continuity with practical membership, meeting and governance routines.",includes:["Membership workflow","Meeting and resolution templates","Governance review checklist"],status:"In development"},
    {id:"institutional-offers",title:"Institutional Offer Strategy",category:"Institutions",type:"Strategy course",audience:"Schools, NGOs, associations and training institutions",description:"Clarify the public or member value an institution promises and the systems that sustain it.",includes:["Stakeholder offer map","Service design exercise","Fulfilment audit"],status:"In development"},
    {id:"offer-research",title:"Applied Market Research Kit",category:"Institutions",type:"Research toolkit",audience:"Researchers, consultants and organisational designers",description:"Translate customer observations into testable market hypotheses rather than unsupported assumptions.",includes:["Interview protocol","Research evidence log","Hypothesis testing plan"],status:"In development"}
  ];
  const e=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const short=n=>n==="Free tool"?"Available now · free":"Product concept · in development";
  const route=p=>"/library/"+encodeURIComponent(p.id);
  const card=p=>'<article class="product-card" data-searchable="'+e([p.title,p.description,p.category,p.type,p.audience].join(" ").toLowerCase())+'" data-category="'+e(p.category)+'"><div class="product-topline"><span class="index">'+e(p.type)+' / '+e(p.category)+'</span><span class="product-status '+(p.tool?"ready":"")+'">'+short(p.status)+'</span></div><h3><a href="'+route(p)+'" data-link>'+e(p.title)+'</a></h3><p>'+e(p.description)+'</p><div class="product-card-foot"><span>'+e(p.audience)+'</span><a href="'+route(p)+'" data-link aria-label="Explore '+e(p.title)+'">Explore <span aria-hidden="true">↗</span></a></div></article>';
  const toolLink=p=>p.tool?'<a href="'+p.tool+'" data-link class="btn primary">Open the free tool <span aria-hidden="true">↗</span></a>':'<a href="/library" data-link class="btn">Explore the product library</a>';
  function homeSection(){
    return '<section class="section product-intro" id="products"><div class="section-head"><div><span class="eyebrow">From inquiry to practice</span><h2>Ideas deserve to be used.</h2></div><span class="index">The applied school / 001</span></div><div class="split-intro"><p class="big-editorial">Not another shelf of information. A working library for designing better offers and building the systems behind them.</p><div><p>Research is the foundation. Workbooks, decision tools, courses and institutional systems make it applicable. The library is deliberately transparent about what is available and what is still being developed.</p><a class="text-cta" href="/library" data-link>Enter the product library <span aria-hidden="true">↗</span></a></div></div><div class="products-grid featured-products">'+products.filter(p=>["offer-canvas","business-opportunity","margin-calculator"].includes(p.id)).map(card).join("")+'</div><div class="section-end"><span>New products begin as research questions and become useful through testing.</span><a href="/workbench" data-link>Try the free workbench →</a></div></section>';
  }
  function libraryIndex(){
    return '<section class="compact-hero library-hero"><span class="eyebrow">The applied school / Product library</span><div class="compact-hero-line"><h1>Useful thinking.<br><em>Working form.</em></h1><p>Explore practical tools, templates and learning products organised around the problems people actually need to solve.</p></div><div class="catalogue-notice"><strong>Catalogue transparency</strong><span>Two interactive tools are available to use today. The remaining listings are development concepts, not products available for purchase.</span></div></section><section class="section catalogue" id="catalogue"><div class="section-head"><h2>Browse the collection</h2><span class="index">'+products.length+' items / '+categories.length+' fields</span></div><div class="catalogue-controls"><label class="search-label" for="catalogue-search">Search by problem, skill or product name<input type="search" id="catalogue-search" placeholder="e.g. pricing, leadership, negotiation…" autocomplete="off"/></label><div class="filters" role="group" aria-label="Filter product category"><button class="filter active" data-filter="All" aria-pressed="true">All fields</button>'+categories.map(c=>'<button class="filter" data-filter="'+e(c)+'" aria-pressed="false">'+e(c)+'</button>').join("")+'</div><p id="catalogue-count" class="index" role="status" aria-live="polite">Showing '+products.length+' entries</p></div><div class="products-grid" id="catalogue-results">'+products.map(card).join("")+'</div><div class="no-results" id="catalogue-empty" hidden>No matching entries. Try another subject or clear the filter.</div></section><section class="section catalog-footer"><span class="eyebrow">A principle of the school</span><h2>We would rather make one genuinely useful tool than publish twenty empty promises.</h2><a href="/workbench" data-link class="btn primary">Explore working tools</a></section>';
  }
  function productDetail(p){
    return '<section class="compact-hero product-detail"><a href="/library" data-link class="back-link">← All products</a><span class="eyebrow">'+e(p.category)+' / '+e(p.type)+'</span><div class="compact-hero-line"><h1>'+e(p.title)+'</h1><div class="detail-aside"><span class="product-status '+(p.tool?"ready":"")+'">'+short(p.status)+'</span><p>'+e(p.description)+'</p>'+toolLink(p)+'</div></div></section><section class="section product-spec"><div class="spec-grid"><aside><span class="index">Product specification / '+e(p.id)+'</span><p>This page describes the intended practical outcome. '+(p.tool?"The browser-based tool is available now.":"The downloadable or taught product is not yet released, and there is no payment button.")+'</p></aside><div><h2>Who it serves</h2><p>'+e(p.audience)+'</p><h2>What it contains</h2><ul class="include-list">'+p.includes.map(x=>'<li>'+e(x)+'</li>').join("")+'</ul><h2>Why it belongs here</h2><p>Each useful application is rooted in the school’s larger question: how do capabilities become credible propositions, and how are those propositions fulfilled?</p><a href="/theory/anatomy-of-the-offer" data-link class="text-cta">Read the underlying theory →</a></div></div></section><section class="section related-library"><div class="section-head"><h2>Continue exploring</h2><a href="/library" data-link>See the library →</a></div><div class="products-grid">'+products.filter(x=>x.id!==p.id).slice(0,3).map(card).join("")+'</div></section>';
  }
  function workbench(){
    return '<section class="compact-hero library-hero"><span class="eyebrow">The practical laboratory</span><div class="compact-hero-line"><h1>The Workbench<span class="small-stop">.</span></h1><p>Short, functional instruments for thinking before spending. No account, payment or data upload required.</p></div></section><section class="section"><div class="section-head"><h2>Start with a question.</h2><span class="index">Available now / 02</span></div><div class="workbench-grid"><a href="/workbench/offer-canvas" data-link class="tool-tile"><span class="index">01 / Offer architecture</span><span class="tool-icon" aria-hidden="true">↗</span><h3>Design an offer worth examining.</h3><p>Make a draft proposition that explains audience, promise, proof, terms, risk and delivery.</p><span class="text-cta">Launch the Offer Canvas →</span></a><a href="/workbench/margin-calculator" data-link class="tool-tile"><span class="index">02 / Commercial arithmetic</span><span class="tool-icon" aria-hidden="true">↗</span><h3>Check the arithmetic behind the promise.</h3><p>Estimate contribution, simple operating profit and break-even volume.</p><span class="text-cta">Launch the calculator →</span></a></div></section>';
  }
  function offerCanvas(){
    const fields=[["audience","Who is the offer for?","e.g. independent retailers"],["problem","What important problem do they face?","A specific, observed problem"],["outcome","What outcome will you promise?","What will be different afterwards?"],["proof","What makes your promise credible?","Evidence, expertise, demonstration"],["terms","What are the terms or price?","Price, time, commitment"],["risk","Who carries the risk?","Refunds, guarantees, uncertainty"],["delivery","How will you fulfil the promise?","People, process, technology"],["access","How can someone accept or refuse?","Eligibility, purchase, next action"]];
    return '<section class="compact-hero tool-hero"><a href="/workbench" data-link class="back-link">← The Workbench</a><span class="eyebrow">Instrument 01 / Offer architecture</span><h1>The Offer Canvas<span class="small-stop">.</span></h1><p>Use this working canvas to think through eight decisions behind a credible proposition. Your entries stay in your browser; the page does not send them to a server.</p></section><section class="section tool-layout"><form id="offer-form" class="canvas-form"><div class="canvas-grid">'+fields.map((f,i)=>'<label class="canvas-field"><span class="index">'+String(i+1).padStart(2,"0")+' / '+e(f[1])+'</span><textarea name="'+f[0]+'" rows="3" placeholder="'+e(f[2])+'"></textarea></label>').join("")+'</div><div class="actions"><button class="btn primary" type="submit">Generate draft summary →</button><button class="btn" type="reset">Clear canvas</button></div></form><aside class="canvas-result" id="offer-result" aria-live="polite"><span class="index">Your working draft</span><h2>Start with the questions.</h2><p>Complete the fields and generate an initial offer summary. You can then copy and revise it.</p><pre id="offer-output" hidden></pre><button id="copy-offer" class="btn" type="button" hidden>Copy summary</button><span id="copy-feedback" class="index" role="status"></span></aside></section>';
  }
  function marginCalculator(){
    return '<section class="compact-hero tool-hero"><a href="/workbench" data-link class="back-link">← The Workbench</a><span class="eyebrow">Instrument 02 / Commercial arithmetic</span><h1>Price & Margin<span class="small-stop">.</span></h1><p>A simple scenario calculator for product economics. It is not accounting, tax or investment advice.</p></section><section class="section tool-layout"><form id="margin-form" class="calculator-form"><label>Selling price per unit (₦)<input type="number" name="price" value="15000" min="0" step="0.01" required/></label><label>Variable cost per unit (₦)<input type="number" name="cost" value="8000" min="0" step="0.01" required/></label><label>Expected units sold per month<input type="number" name="units" value="50" min="0" step="1" required/></label><label>Monthly fixed operating costs (₦)<input type="number" name="fixed" value="150000" min="0" step="0.01" required/></label><button class="btn primary" type="submit">Calculate scenario →</button></form><aside class="margin-result" aria-live="polite"><span class="index">Scenario outputs</span><div class="metric"><span>Contribution per unit</span><strong id="unit-contribution">—</strong></div><div class="metric"><span>Contribution margin</span><strong id="margin-percent">—</strong></div><div class="metric"><span>Estimated monthly operating profit</span><strong id="monthly-profit">—</strong></div><div class="metric"><span>Break-even units / month</span><strong id="break-even">—</strong></div><p class="footnote">Assumes constant price and variable cost per unit. Excludes taxes, financing, refunds and other costs unless included above.</p></aside></section>';
  }
  function bind(){
    const search=document.querySelector("#catalogue-search");
    if(search){
      let category="All";
      const apply=()=>{
        const q=search.value.trim().toLowerCase();
        let shown=0;
        document.querySelectorAll("#catalogue-results .product-card").forEach(el=>{
          const ok=(category==="All"||el.dataset.category===category)&&(!q||el.dataset.searchable.includes(q));
          el.hidden=!ok;if(ok)shown++;
        });
        document.querySelector("#catalogue-count").textContent="Showing "+shown+" of "+products.length+" entries";
        document.querySelector("#catalogue-empty").hidden=shown!==0;
      };
      search.addEventListener("input",apply);
      document.querySelectorAll("[data-filter]").forEach(btn=>btn.addEventListener("click",()=>{
        category=btn.dataset.filter;
        document.querySelectorAll("[data-filter]").forEach(x=>{const active=x===btn;x.classList.toggle("active",active);x.setAttribute("aria-pressed",String(active));});
        apply();
      }));
    }
    const form=document.querySelector("#offer-form");
    if(form){
      form.addEventListener("submit",ev=>{
        ev.preventDefault();const d=new FormData(form);
        const keys=[["audience","Audience"],["problem","Problem"],["outcome","Promise"],["proof","Evidence / proof"],["terms","Price and terms"],["risk","Risk allocation"],["delivery","Fulfilment system"],["access","Access and choice"]];
        const summary="THE OFFER GOES TO SCHOOL — WORKING OFFER CANVAS\n\n"+keys.map(([k,label])=>label+": "+(String(d.get(k)||"").trim()||"[Not yet defined]")).join("\n\n")+"\n\nWorking hypothesis only. Test against real customer evidence and delivery capacity.";
        document.querySelector("#offer-output").textContent=summary;
        document.querySelector("#offer-output").hidden=false;
        document.querySelector("#offer-result h2").textContent="Your first draft.";
        document.querySelector("#offer-result p").textContent="Review the missing assumptions, then refine this proposition with real evidence.";
        document.querySelector("#copy-offer").hidden=false;
        document.querySelector("#copy-feedback").textContent="";
      });
      form.addEventListener("reset",()=>{
        const out=document.querySelector("#offer-output");out.hidden=true;out.textContent="";
        document.querySelector("#copy-offer").hidden=true;
        document.querySelector("#offer-result h2").textContent="Start with the questions.";
        document.querySelector("#offer-result p").textContent="Complete the fields and generate an initial offer summary. You can then copy and revise it.";
        document.querySelector("#copy-feedback").textContent="";
      });
      document.querySelector("#copy-offer").addEventListener("click",async()=>{
        const s=document.querySelector("#offer-output").textContent;
        try{await navigator.clipboard.writeText(s);document.querySelector("#copy-feedback").textContent="Copied to clipboard.";}
        catch(_){document.querySelector("#copy-feedback").textContent="Copy unavailable here. Select the text above to copy it.";}
      });
    }
    const calc=document.querySelector("#margin-form");
    if(calc){
      const fmt=n=>new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN",maximumFractionDigits:0}).format(n);
      const calculate=ev=>{
        if(ev)ev.preventDefault();
        const d=new FormData(calc), price=Number(d.get("price")),cost=Number(d.get("cost")),units=Number(d.get("units")),fixed=Number(d.get("fixed"));
        if([price,cost,units,fixed].some(n=>!Number.isFinite(n)||n<0)||!Number.isInteger(units))return;
        const contribution=price-cost;
        document.querySelector("#unit-contribution").textContent=fmt(contribution);
        document.querySelector("#margin-percent").textContent=price===0?"Not applicable":((contribution/price)*100).toFixed(1)+"%";
        document.querySelector("#monthly-profit").textContent=fmt(contribution*units-fixed);
        document.querySelector("#break-even").textContent=contribution<=0?"Not reachable at this price":String(Math.ceil(fixed/contribution))+" units";
      };
      calc.addEventListener("submit",calculate);calculate();
    }
  }
  window.SchoolStudio={homeSection,libraryIndex,productDetail,workbench,offerCanvas,marginCalculator,bind,products,findProduct:id=>products.find(p=>p.id===id)};
})();
