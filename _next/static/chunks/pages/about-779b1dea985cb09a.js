(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{9212:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return c(4228)}])},9816:function(d,b,a){"use strict";a.d(b,{Z:function(){return k}});var e=a(5893),c=a(5675),f=a.n(c),g={src:".//_next/static/media/medium.199a9557.svg",height:24,width:24},h={src:".//_next/static/media/github.6968ecbc.svg",height:24,width:24},i={src:".//_next/static/media/linkedin.95851985.svg",height:24,width:24},j=a(8716),k=function(b){var a=b.expandFromTopLeft;return(0,e.jsxs)(j.E.div,{id:"icon-links",className:"grid grid-cols-3 mx-2 justify-around w-52 h-14 gap-5 scale-75 sm:scale-90 child:relative child:transition-all child:ease-in-out-expo child:brightness-100 "+(void 0===a||a?"origin-top-left":"origin-center"),children:[(0,e.jsx)("a",{href:"https://richardso21.medium.com",className:"hover:brightness-125",target:"_blank",rel:"noreferrer",children:(0,e.jsx)(f(),{src:g,layout:"fill",alt:"medium"})}),(0,e.jsx)("a",{href:"https://www.github.com/richardso21",className:"hover:brightness-125",target:"_blank",rel:"noreferrer",children:(0,e.jsx)(f(),{src:h,layout:"fill",alt:"github"})}),(0,e.jsx)("a",{href:"https://www.linkedin.com/in/richardso21",className:"hover:brightness-125",target:"_blank",rel:"noreferrer",children:(0,e.jsx)(f(),{src:i,layout:"fill",alt:"linkedin"})})]})}},8941:function(d,b,a){"use strict";a.d(b,{Z:function(){return q}});var e=a(5893),f=a(7294),g=a(8716),h=a(1163),i=function(){var a=(0,h.useRouter)();return(0,e.jsx)(e.Fragment,{children:"/"!==a.pathname&&(0,e.jsx)(g.E.button,{onClick:function(){var b=a.asPath.split("/");console.log(b),b.pop(),a.push(1===b.length?"/":b.join("/"))},initial:{display:"none",opacity:0},animate:{display:"initial",opacity:1},transition:{delay:.75},className:"fixed mx-24 md:mx-36 my-5 md:my-7 z-50 scale-150 -top-px",children:(0,e.jsx)("p",{className:"text-blue-300 font-thin text-5xl leading-none [text-shadow:0_0_5px_black]",children:"\u2039"})})})},j=function(a){var b=a.isOpen,c=a.setIsOpen,d=(0,h.useRouter)();return(0,f.useEffect)(function(){d.events.on("routeChangeStart",function(){return c(!1)})}),(0,e.jsx)(g.E.button,{initial:{display:"none",opacity:0},animate:{display:"initial",opacity:1},transition:{delay:.5},className:"ham hamburger hamburger--shelf fixed mx-4 md:mx-12 my-6 md:my-8 z-50 "+(b?"active ":""),type:"button",onClick:function(){return c(!b)},children:(0,e.jsxs)("div",{className:"inner",children:[(0,e.jsx)("span",{className:"bar"}),(0,e.jsx)("span",{className:"bar"}),(0,e.jsx)("span",{className:"bar"})]})})},k=a(9816),c=a(1664),l=a.n(c),m=function(){var a="cursor-pointer hover:skew-x-12 hover:scale-125 transition ease-out active:text-blue-400 active:scale-110 italic";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l(),{href:"/",children:(0,e.jsx)(g.E.p,{className:a,children:"Home"})}),(0,e.jsx)(l(),{href:"/experience",children:(0,e.jsx)(g.E.p,{className:a,children:"Experience"})}),(0,e.jsx)(l(),{href:"/projects",children:(0,e.jsx)(g.E.p,{className:a,children:"Projects"})}),(0,e.jsx)(l(),{href:"/resume",children:(0,e.jsx)(g.E.p,{className:a,children:"Resume"})}),(0,e.jsx)(l(),{href:"/about",children:(0,e.jsx)(g.E.p,{className:a,children:"About Me"})})]})},n="transition-all ease-in-out-expo duration-300 h-full",o=function(b){var a=b.isOpen;return(0,e.jsx)("div",{className:n+" fixed bg-gray-400 z-30 "+(a?"w-full sm:w-96":"w-0"),children:(0,e.jsx)("div",{className:n+" absolute bg-gray-900 z-40 overflow-hidden "+(a?"w-full sm:w-96 delay-200":"w-0 delay-0"),children:(0,e.jsxs)("div",{className:"mt-5 relative flex justify-evenly flex-col child:self-center text-4xl text-white w-screen sm:w-96 h-full",children:[(0,e.jsx)(m,{}),(0,e.jsx)(k.Z,{expandFromTopLeft:!1})]})})})},p=function(c){var d=c.children,b=(0,f.useState)(!1),a=b[0],g=b[1];return(0,e.jsxs)("div",{className:"overflow-hidden",children:[(0,e.jsx)(j,{isOpen:a,setIsOpen:g}),(0,e.jsx)(i,{}),(0,e.jsx)(o,{isOpen:a}),(0,e.jsx)("div",{className:"relative transition-all ease-in-out-expo duration-500 "+(a?"left-full sm:left-96 brightness-75 blur pointer-events-none":"left-0"),children:d})]})};function q(a){var b=a.children;return(0,e.jsx)("div",{className:"dark bg-gray-800",children:(0,e.jsx)(p,{children:(0,e.jsx)("div",{className:"md:px-12 px-6 min-h-screen",children:b})})})}},4228:function(e,b,a){"use strict";a.r(b);var f=a(5893),g=a(8716),d=a(9008),h=a.n(d),i=a(9816),j=a(8941),k={hidden:{opacity:0},show:{opacity:1,transition:{delayChildren:.2,staggerChildren:.2}}},l={hidden:{opacity:0,y:100},show:{opacity:1,y:0}},c=function(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(h(),{children:(0,f.jsx)("title",{children:"About Richard So"})}),(0,f.jsxs)("div",{className:"relative pt-24 w-full text-white child:py-5",children:[(0,f.jsx)(g.E.h1,{layoutId:"name",className:"text-6xl md:text-8xl font-bold inline-block",children:"Richard So"}),(0,f.jsxs)(g.E.div,{className:"grid grid-cols-12 gap-5 lg:gap-24 text-2xl sm:text-3xl xl:text-4xl",variants:k,initial:"hidden",animate:"show",children:[(0,f.jsxs)(g.E.main,{className:"col-span-12 lg:col-span-6 xl:col-span-7 child:leading-snug",variants:l,children:[(0,f.jsxs)("p",{className:"text-gray-200",children:["Hello \uD83D\uDC4B, thank you for visiting! I","'","m a passionate"," ",(0,f.jsx)("strong",{children:" full stack developer + data scientist "})," that loves to learn new things. I","'","m currently a"," ",(0,f.jsx)("strong",{children:"CS major at Georgia Tech "})," (class of 2024), and have recently worked at ",(0,f.jsx)("strong",{children:"Union Pacific Railroad"})," as a SWE intern. Also, I like ducks! \uD83E\uDD86"]}),(0,f.jsx)("br",{}),(0,f.jsxs)("p",{className:"pb-10 text-gray-400 italic",children:["Reach out via"," ",(0,f.jsx)("a",{href:"mailto:richardso2021@gmail.com",children:"richardso2021@gmail.com"})," ","or any of these links below."]}),(0,f.jsx)(i.Z,{})]}),(0,f.jsxs)(g.E.div,{className:"relative col-span-12 lg:col-start-7 xl:col-start-8 lg:col-end-13",variants:l,children:[(0,f.jsx)("h3",{className:"text-gray-100 text-4xl font-bold pb-5",children:"Languages"}),(0,f.jsxs)("ul",{className:"text-gray-300 text-2xl list-disc pl-10 leading-snug",children:[(0,f.jsx)("li",{children:"Javascript / Typescript"}),(0,f.jsx)("li",{children:"Python"}),(0,f.jsx)("li",{children:"C / C++"}),(0,f.jsx)("li",{children:"MATLAB"}),(0,f.jsx)("li",{children:"SQL"})]}),(0,f.jsx)("h3",{className:"text-gray-100 text-4xl font-bold py-5",children:"Frameworks/Tech"}),(0,f.jsxs)("ul",{className:"text-gray-300 text-2xl list-disc pl-10 leading-snug",children:[(0,f.jsx)("li",{children:"React, Vue, Angular, Svelte"}),(0,f.jsx)("li",{children:"Next, Nuxt, Flask"}),(0,f.jsx)("li",{children:"NumPy, Pandas, Matplotlib"}),(0,f.jsx)("li",{children:"PyTorch, Keras, scikit-learn"}),(0,f.jsx)("li",{children:"Firebase, PostgreSQL, SQLite"}),(0,f.jsx)("li",{children:"Salesforce (CRM Analytics)"})]}),(0,f.jsx)("h3",{className:"text-gray-100 text-4xl font-bold py-5",children:"Learning"}),(0,f.jsxs)("ul",{className:"text-gray-300 text-2xl list-disc pl-10 leading-snug",children:[(0,f.jsx)("li",{children:"Flutter/Dart"}),(0,f.jsx)("li",{children:"Assembly"})]})]})]})]})]})};c.getLayout=function(a){return(0,f.jsx)(j.Z,{children:a})},b.default=c}},function(a){a.O(0,[716,774,888,179],function(){var b;return a(a.s=9212)}),_N_E=a.O()}])