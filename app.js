const sources=[
["Product","Lenny's Newsletter","Product management, growth, leadership and interviews with people who build products.","https://www.lennysnewsletter.com/","Product thinking"],
["Product","SVPG / Marty Cagan","Product operating models, empowered teams, discovery and product leadership.","https://www.svpg.com/articles/","Product leadership"],
["Product","Teresa Torres","Continuous discovery, customer interviews and opportunity-focused product practice.","https://www.producttalk.org/","Discovery"],
["Product","Shreyas Doshi","Product judgment, prioritization, leadership and practical PM thinking.","https://www.shreyasdoshi.com/","Product judgment"],
["Product","Gibson Biddle","Product strategy, Netflix lessons and the DHM framework.","https://gibsonbiddle.com/","Strategy"],
["Product","John Cutler","Product discovery, teams, experimentation and product culture.","https://cutlefish.substack.com/","Product practice"],
["AI & Technology","MIT Technology Review","Emerging technology, AI and the implications behind the headlines.","https://www.technologyreview.com/","Emerging tech"],
["AI & Technology","Ars Technica","Deep, readable coverage of technology, science, software and hardware.","https://arstechnica.com/","Technology news"],
["AI & Technology","Hacker News","A high-signal community feed for technology, startups, engineering and research.","https://news.ycombinator.com/","Tech community"],
["AI & Technology","The Pragmatic Engineer","Engineering trends, large-scale software organisations, AI and developer productivity.","https://newsletter.pragmaticengineer.com/","Engineering + product"],
["AI & Technology","Google Research","Research and advances in AI, computing and applied technology.","https://research.google/blog/","Research"],
["AI & Technology","Anthropic News","AI research, models, safety and practical work from Anthropic.","https://www.anthropic.com/news","AI research"],
["Engineering","Google Engineering","How Google engineers build and operate systems at scale.","https://engineering.googleblog.com/","Engineering"],
["Engineering","Netflix TechBlog","Real engineering problems, architecture, data, ML and developer tooling.","https://netflixtechblog.com/","Engineering"],
["Engineering","Uber Engineering","Large-scale systems, data, ML and engineering practices from Uber.","https://www.uber.com/blog/engineering/","Engineering"],
["Engineering","Cloudflare Blog","Internet infrastructure, security, performance and developer technology.","https://blog.cloudflare.com/","Infrastructure"],
["Engineering","Stripe Engineering","Engineering, APIs, infrastructure and building reliable financial systems.","https://stripe.dev/blog","Engineering"],
["Engineering","Microsoft Engineering","Cloud, developer platforms, AI and engineering practices.","https://engineering.microsoft.com/","Engineering"],
["UX & Design Systems","Nielsen Norman Group","Evidence-based UX research, usability and interaction design.","https://www.nngroup.com/articles/","UX research"],
["UX & Design Systems","Figma Blog","Product design, collaboration, design systems and design tooling.","https://www.figma.com/blog/","Design"],
["UX & Design Systems","Material Design","A mature reference for components, accessibility, interaction and design systems.","https://m3.material.io/","Design systems"],
["UX & Design Systems","Design Systems","Community resources and thinking around building and operating design systems.","https://designsystems.com/","Design systems"],
["Business & Strategy","Stratechery","Technology strategy and business analysis focused on why markets and companies behave as they do.","https://stratechery.com/","Strategy"],
["Business & Strategy","TechCrunch","Startups, technology companies, products and the business around them.","https://techcrunch.com/","Tech business"],
["Business & Strategy","The Verge","Consumer technology, products, platforms and technology culture.","https://www.theverge.com/tech","Technology"]
].map(x=>({cat:x[0],name:x[1],desc:x[2],url:x[3],kind:x[4]}));

const cats=["All",...new Set(sources.map(s=>s.cat))];let active="All";
const filters=document.getElementById("filters");
cats.forEach(c=>{let b=document.createElement("button");b.className="filter"+(c==="All"?" active":"");b.textContent=c;b.onclick=()=>{active=c;document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");render()};filters.appendChild(b)});
const shortlist=["The Pragmatic Engineer","Lenny's Newsletter","Hacker News","Stratechery"].map(n=>sources.find(s=>s.name===n));
document.getElementById("today").innerHTML=shortlist.map(s=>`<a class="today-card" href="${s.url}" target="_blank" rel="noopener"><span class="tag">${s.cat}</span><strong>${s.name}</strong><small>${s.kind}</small></a>`).join("");
function render(){
 const q=document.getElementById("search").value.toLowerCase().trim();
 const visible=sources.filter(s=>(active==="All"||s.cat===active)&&(!q||`${s.name} ${s.desc} ${s.kind} ${s.cat}`.toLowerCase().includes(q)));
 const grouped={};visible.forEach(s=>(grouped[s.cat]??=[]).push(s));const root=document.getElementById("sections");root.innerHTML="";
 Object.entries(grouped).forEach(([cat,arr])=>{let sec=document.createElement("section");sec.className="section";sec.id=cat.toLowerCase().replace(/[^a-z]+/g,"-");sec.innerHTML=`<div class="section-head"><h2>${cat}</h2><p class="section-desc">${arr.length} trusted source${arr.length>1?"s":""}</p></div><div class="cards">${arr.map(s=>`<a class="card" href="${s.url}" target="_blank" rel="noopener"><span class="tag">${s.kind}</span><h3>${s.name}</h3><p>${s.desc}</p><span class="arrow">Open source ↗</span></a>`).join("")}</div>`;root.appendChild(sec)});
 if(!visible.length)root.innerHTML="<p>Nothing matched that search.</p>";
}
document.getElementById("search").addEventListener("input",render);document.getElementById("updated").textContent="Curated 27 Oct 2026";render();
