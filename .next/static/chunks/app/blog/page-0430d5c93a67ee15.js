(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[831],{8910:(e,t,a)=>{Promise.resolve().then(a.bind(a,8042)),Promise.resolve().then(a.bind(a,5966)),Promise.resolve().then(a.bind(a,6910))},8042:(e,t,a)=>{"use strict";a.d(t,{default:()=>y});var s=a(5155),r=a(2115),l=a(4872),i=a(4085);let c=(0,a(7401).A)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);var n=a(2423),o=a(9053),d=a(8173),m=a.n(d),h=a(2336),u=a(5565);function y(e){let{initialPosts:t}=e,[a,d]=(0,r.useState)(""),[y,p]=(0,r.useState)(t);(0,r.useEffect)(()=>{{let e=localStorage.getItem("blogPosts");if(e)try{let t=JSON.parse(e).map(e=>({title:e.title,excerpt:e.excerpt,date:e.date,image:e.image,category:e.category,link:"/blog/".concat(e.slug||e.title.toLowerCase().replace(/\s+/g,"-"))}));p(t)}catch(e){console.error("Error parsing blog posts:",e)}}},[]);let x=y.filter(e=>e.title.toLowerCase().includes(a.toLowerCase())||e.excerpt.toLowerCase().includes(a.toLowerCase())||e.category.toLowerCase().includes(a.toLowerCase()));return(0,s.jsxs)("main",{className:"container mx-auto px-6 py-20",children:[(0,s.jsxs)("div",{className:"max-w-3xl mx-auto mb-12",children:[(0,s.jsx)("h1",{className:"text-4xl md:text-5xl font-bold text-white mb-6",children:"NOX Media Blog"}),(0,s.jsx)("p",{className:"text-gray-400 text-lg",children:"Insights, strategies, and trends in web development, digital marketing, and creative design."})]}),(0,s.jsx)("div",{className:"max-w-md mx-auto mb-16",children:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(h.p,{type:"text",placeholder:"Search articles...",className:"bg-black/50 border-white/10 text-white pl-10 focus-visible:ring-purple-500",value:a,onChange:e=>d(e.target.value)}),(0,s.jsx)(c,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"})]})}),(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:x.length>0?x.map((e,t)=>(0,s.jsx)(l.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},className:"group",children:(0,s.jsxs)("div",{className:"bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden h-full flex flex-col",children:[(0,s.jsxs)(m(),{href:e.link,className:"relative h-48 block",children:[(0,s.jsx)("div",{className:"relative w-full h-full",children:(0,s.jsx)(u.default,{src:e.image||"/placeholder.svg",alt:e.title,fill:!0,className:"object-cover transition-transform duration-500 group-hover:scale-110",sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",unoptimized:e.image.startsWith("data:")})}),(0,s.jsx)("div",{className:"absolute top-4 left-4 bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded",children:e.category})]}),(0,s.jsxs)("div",{className:"p-6 flex-1 flex flex-col",children:[(0,s.jsxs)("div",{className:"flex items-center text-gray-400 text-sm mb-3",children:[(0,s.jsx)(n.A,{className:"h-4 w-4 mr-2"}),e.date]}),(0,s.jsx)(m(),{href:e.link,children:(0,s.jsx)("h3",{className:"text-white text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors",children:e.title})}),(0,s.jsx)("p",{className:"text-gray-400 mb-4 flex-1",children:e.excerpt}),(0,s.jsxs)(m(),{href:e.link,className:"text-purple-400 hover:text-purple-300 inline-flex items-center",children:["Read More ",(0,s.jsx)(o.A,{className:"ml-2 h-4 w-4"})]})]})]})},t)):(0,s.jsxs)("div",{className:"col-span-full text-center py-12",children:[(0,s.jsx)("h3",{className:"text-xl text-white mb-2",children:"No articles found"}),(0,s.jsx)("p",{className:"text-gray-400",children:"Try adjusting your search criteria"})]})}),(0,s.jsx)("div",{className:"mt-16 text-center",children:(0,s.jsx)(i.$,{className:"bg-purple-600 hover:bg-purple-700 text-white",children:"Load More Articles"})})]})}},9053:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(7401).A)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])},2423:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(7401).A)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]])},1594:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(7401).A)("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]])},3239:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(7401).A)("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]])},2233:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(7401).A)("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]])},4035:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(7401).A)("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]])},4999:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(7401).A)("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]])},4505:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(7401).A)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},6710:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(7401).A)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]])},2104:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(7401).A)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]])},7725:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(7401).A)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]])},6148:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(7401).A)("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]])},7113:(e,t,a)=>{"use strict";a.d(t,{D:()=>d,N:()=>m});var s=a(2115),r=(e,t,a,s,r,l,i,c)=>{let n=document.documentElement,o=["light","dark"];function d(t){(Array.isArray(e)?e:[e]).forEach(e=>{let a="class"===e,s=a&&l?r.map(e=>l[e]||e):r;a?(n.classList.remove(...s),n.classList.add(l&&l[t]?l[t]:t)):n.setAttribute(e,t)}),c&&o.includes(t)&&(n.style.colorScheme=t)}if(s)d(s);else try{let e=localStorage.getItem(t)||a,s=i&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;d(s)}catch(e){}},l=["light","dark"],i="(prefers-color-scheme: dark)",c="undefined"==typeof window,n=s.createContext(void 0),o={setTheme:e=>{},themes:[]},d=()=>{var e;return null!=(e=s.useContext(n))?e:o},m=e=>s.useContext(n)?s.createElement(s.Fragment,null,e.children):s.createElement(u,{...e}),h=["light","dark"],u=e=>{let{forcedTheme:t,disableTransitionOnChange:a=!1,enableSystem:r=!0,enableColorScheme:c=!0,storageKey:o="theme",themes:d=h,defaultTheme:m=r?"system":"light",attribute:u="data-theme",value:f,children:v,nonce:k,scriptProps:b}=e,[w,A]=s.useState(()=>p(o,m)),[j,N]=s.useState(()=>"system"===w?g():w),C=f?Object.values(f):d,M=s.useCallback(e=>{let t=e;if(!t)return;"system"===e&&r&&(t=g());let s=f?f[t]:t,i=a?x(k):null,n=document.documentElement,o=e=>{"class"===e?(n.classList.remove(...C),s&&n.classList.add(s)):e.startsWith("data-")&&(s?n.setAttribute(e,s):n.removeAttribute(e))};if(Array.isArray(u)?u.forEach(o):o(u),c){let e=l.includes(m)?m:null,a=l.includes(t)?t:e;n.style.colorScheme=a}null==i||i()},[k]),S=s.useCallback(e=>{let t="function"==typeof e?e(w):e;A(t);try{localStorage.setItem(o,t)}catch(e){}},[w]),E=s.useCallback(e=>{N(g(e)),"system"===w&&r&&!t&&M("system")},[w,t]);s.useEffect(()=>{let e=window.matchMedia(i);return e.addListener(E),E(e),()=>e.removeListener(E)},[E]),s.useEffect(()=>{let e=e=>{e.key===o&&(e.newValue?A(e.newValue):S(m))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[S]),s.useEffect(()=>{M(null!=t?t:w)},[t,w]);let L=s.useMemo(()=>({theme:w,setTheme:S,forcedTheme:t,resolvedTheme:"system"===w?j:w,themes:r?[...d,"system"]:d,systemTheme:r?j:void 0}),[w,S,t,j,r,d]);return s.createElement(n.Provider,{value:L},s.createElement(y,{forcedTheme:t,storageKey:o,attribute:u,enableSystem:r,enableColorScheme:c,defaultTheme:m,value:f,themes:d,nonce:k,scriptProps:b}),v)},y=s.memo(e=>{let{forcedTheme:t,storageKey:a,attribute:l,enableSystem:i,enableColorScheme:c,defaultTheme:n,value:o,themes:d,nonce:m,scriptProps:h}=e,u=JSON.stringify([l,a,n,t,d,o,i,c]).slice(1,-1);return s.createElement("script",{...h,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?m:"",dangerouslySetInnerHTML:{__html:"(".concat(r.toString(),")(").concat(u,")")}})}),p=(e,t)=>{let a;if(!c){try{a=localStorage.getItem(e)||void 0}catch(e){}return a||t}},x=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},g=e=>(e||(e=window.matchMedia(i)),e.matches?"dark":"light")}},e=>{var t=t=>e(e.s=t);e.O(0,[24,33,565,814,609,441,517,358],()=>t(8910)),_N_E=e.O()}]);