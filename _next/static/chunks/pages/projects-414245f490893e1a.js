(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{7670:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return i(2284)}])},9816:function(e,t,i){"use strict";i.d(t,{Z:function(){return d}});var s=i(5893),n=i(5675),r=i.n(n),a={src:".//_next/static/media/medium.199a9557.svg",height:24,width:24},l={src:".//_next/static/media/github.6968ecbc.svg",height:24,width:24},c={src:".//_next/static/media/linkedin.95851985.svg",height:24,width:24},o=i(8716),d=function(e){var t=e.expandFromTopLeft,i=void 0===t||t;return(0,s.jsxs)(o.E.div,{id:"icon-links",className:"grid grid-cols-3 mx-2 justify-around w-52 h-14 gap-5 scale-75 sm:scale-90 child:relative child:transition-all child:ease-in-out-expo child:brightness-100 "+(i?"origin-top-left":"origin-center"),children:[(0,s.jsx)("a",{href:"https://richardso21.medium.com",className:"hover:brightness-125",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(r(),{src:a,layout:"fill",alt:"medium"})}),(0,s.jsx)("a",{href:"https://www.github.com/richardso21",className:"hover:brightness-125",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(r(),{src:l,layout:"fill",alt:"github"})}),(0,s.jsx)("a",{href:"https://www.linkedin.com/in/richardso21",className:"hover:brightness-125",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(r(),{src:c,layout:"fill",alt:"linkedin"})})]})}},8941:function(e,t,i){"use strict";i.d(t,{Z:function(){return p}});var s=i(5893),n=i(7294),r=i(8716),a=i(1163),l=function(){var e=(0,a.useRouter)();return(0,s.jsx)(s.Fragment,{children:"/"!==e.pathname&&(0,s.jsx)(r.E.button,{onClick:function(){var t=e.asPath.split("/");console.log(t),t.pop(),e.push(1===t.length?"/":t.join("/"))},initial:{display:"none",opacity:0},animate:{display:"initial",opacity:1},transition:{delay:.75},className:"fixed mx-24 md:mx-36 my-5 md:my-7 z-50 scale-150 -top-px",children:(0,s.jsx)("p",{className:"text-blue-300 font-thin text-5xl leading-none [text-shadow:0_0_5px_black]",children:"\u2039"})})})},c=function(e){var t=e.isOpen,i=e.setIsOpen,l=(0,a.useRouter)();return(0,n.useEffect)((function(){l.events.on("routeChangeStart",(function(){return i(!1)}))})),(0,s.jsx)(r.E.button,{initial:{display:"none",opacity:0},animate:{display:"initial",opacity:1},transition:{delay:.5},className:"ham hamburger hamburger--shelf fixed mx-4 md:mx-12 my-6 md:my-8 z-50 "+(t?"active ":""),type:"button",onClick:function(){return i(!t)},children:(0,s.jsxs)("div",{className:"inner",children:[(0,s.jsx)("span",{className:"bar"}),(0,s.jsx)("span",{className:"bar"}),(0,s.jsx)("span",{className:"bar"})]})})},o=i(9816),d=i(1664),h=i.n(d),u=function(){var e="cursor-pointer hover:skew-x-12 hover:scale-125 transition ease-out active:text-blue-400 active:scale-110 italic";return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h(),{href:"/",children:(0,s.jsx)(r.E.p,{className:e,children:"Home"})}),(0,s.jsx)(h(),{href:"/experience",children:(0,s.jsx)(r.E.p,{className:e,children:"Experience"})}),(0,s.jsx)(h(),{href:"/projects",children:(0,s.jsx)(r.E.p,{className:e,children:"Projects"})}),(0,s.jsx)(h(),{href:"/resume",children:(0,s.jsx)(r.E.p,{className:e,children:"Resume"})}),(0,s.jsx)(h(),{href:"/about",children:(0,s.jsx)(r.E.p,{className:e,children:"About Me"})})]})},x="transition-all ease-in-out-expo duration-300 h-full",m=function(e){var t=e.isOpen;return(0,s.jsx)("div",{className:x+" fixed bg-gray-400 z-30 "+(t?"w-full sm:w-96":"w-0"),children:(0,s.jsx)("div",{className:x+" absolute bg-gray-900 z-40 overflow-hidden "+(t?"w-full sm:w-96 delay-200":"w-0 delay-0"),children:(0,s.jsxs)("div",{className:"mt-5 relative flex justify-evenly flex-col child:self-center text-4xl text-white w-screen sm:w-96 h-full",children:[(0,s.jsx)(u,{}),(0,s.jsx)(o.Z,{expandFromTopLeft:!1})]})})})},f=function(e){var t=e.children,i=(0,n.useState)(!1),r=i[0],a=i[1];return(0,s.jsxs)("div",{className:"overflow-hidden",children:[(0,s.jsx)(c,{isOpen:r,setIsOpen:a}),(0,s.jsx)(l,{}),(0,s.jsx)(m,{isOpen:r}),(0,s.jsx)("div",{className:"relative transition-all ease-in-out-expo duration-500 "+(r?"left-full sm:left-96 brightness-75 blur pointer-events-none":"left-0"),children:t})]})};function p(e){var t=e.children;return(0,s.jsx)("div",{className:"dark bg-gray-800",children:(0,s.jsx)(f,{children:(0,s.jsx)("div",{className:"md:px-12 px-6 min-h-screen",children:t})})})}},2284:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return j},default:function(){return g}});var s=i(5893),n=i(8716),r=i(9008),a=i.n(r),l=i(8941),c=i(5675),o=i.n(c),d=i(1664),h=i.n(d),u=function(e){var t=e.data,i=e.uid;return(0,s.jsx)(h(),{href:"/projects/"+i,children:(0,s.jsxs)("div",{className:"group w-full h-72 sm:h-96 relative rounded-md overflow-hidden active:scale-95 transition cursor-pointer bg-slate-700",children:[(0,s.jsx)(n.E.div,{className:"relative h-full transition duration-200 group-hover:blur-sm group-hover:brightness-75 child:h-full",layoutId:i+"_img",children:(0,s.jsx)(o(),{src:t.frontImage.url,alt:t.frontImage.alt,width:t.frontImage.dimensions.width,height:t.frontImage.dimensions.height,objectFit:"cover"})}),(0,s.jsxs)("div",{className:"absolute w-full left-0 -bottom-40 z-10 backdrop-blur backdrop-brightness-75 transition-all duration-200 group-hover:bottom-0 p-5 text-white ease-out",children:[(0,s.jsx)(n.E.h2,{className:"text-2xl sm:text-3xl font-bold pb-5 [text-shadow:0_0_5px_black]",layoutId:i,children:t.name}),(0,s.jsx)("p",{className:"text-md sm:text-xl italic font-medium text-gray-100",children:t.techStack}),(0,s.jsx)("span",{className:"text-gray-200 text-lg italic absolute bottom-5 right-5",children:t.dateDone})]})]})})},x={hidden:{opacity:0},show:{opacity:1,transition:{delayChildren:.3,staggerChildren:.15}}},m={hidden:{opacity:0,y:100},show:{opacity:1,y:0}},f=function(e){var t=e.projects;return(0,s.jsx)(n.E.div,{className:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 py-5",variants:x,initial:"hidden",animate:"show",children:t.map((function(e){return(0,s.jsx)(n.E.div,{variants:m,children:(0,s.jsx)(u,{data:e.data,uid:e.uid})},e.id)}))})},p=function(e){var t=e.projects;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a(),{children:(0,s.jsx)("title",{children:"Projects | Richard So"})}),(0,s.jsxs)("div",{className:"relative pt-24",children:[(0,s.jsx)(n.E.h1,{className:"text-white text-6xl md:text-8xl font-bold inline-block mb-10",layoutId:"projects",children:"Projects"}),(0,s.jsx)(f,{projects:t})]})]})};p.getLayout=function(e){return(0,s.jsx)(l.Z,{children:e})};var j=!0,g=p},9008:function(e,t,i){e.exports=i(5443)}},function(e){e.O(0,[716,774,888,179],(function(){return t=7670,e(e.s=t);var t}));var t=e.O();_N_E=t}]);