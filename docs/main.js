var{defineProperty:_,getOwnPropertyNames:m,getOwnPropertyDescriptor:u}=Object,l=Object.prototype.hasOwnProperty,f=new WeakMap,x=(j)=>{var q=f.get(j),J;if(q)return q;if(q=_({},"__esModule",{value:!0}),j&&typeof j==="object"||typeof j==="function")m(j).map((N)=>!l.call(q,N)&&_(q,N,{get:()=>j[N],enumerable:!(J=u(j,N))||J.enumerable}));return f.set(j,q),q},g=(j,q)=>{for(var J in q)_(j,J,{get:q[J],enumerable:!0,configurable:!0,set:(N)=>q[J]=()=>N})},H=(j,q)=>()=>(j&&(q=j(j=0)),q),d=`/* Light theme by default */
:root {
  --pt-background: var(--pt-white);
  --pt-text: var(--pt-slate-600);
  --pt-heading: var(--pt-slate-800);
  --pt-border: var(--pt-slate-200);
  --pt-progress-bar: var(--pt-slate-300);

  --pt-success-icon: var(--pt-green-600);
  --pt-success-border: var(--pt-green-600);

  --pt-error-icon: var(--pt-red-500);
  --pt-error-border: var(--pt-red-500);

  --pt-warning-icon: var(--pt-yellow-500);
  --pt-warning-border: var(--pt-yellow-400);

  --pt-info-icon: var(--pt-slate-500);
  --pt-info-border: var(--pt-slate-200);

  --pt-debug-icon: var(--pt-blue-600);
  --pt-debug-border: var(--pt-blue-600);

  --pt-spinner-icon: var(--pt-slate-500);
  --pt-spinner-border: var(--pt-slate-400);

  --pt-progress-icon: var(--pt-blue-600);
  --pt-progress-border: var(--pt-blue-600);
}

/* Dark theme when user prefers dark color scheme */
@media (prefers-color-scheme: dark) {
  :root {
    --pt-background: var(--pt-slate-800);
    --pt-text: var(--pt-slate-300);
    --pt-heading: var(--pt-slate-50);
    --pt-border: var(--pt-slate-700);
    --pt-progress-bar: var(--pt-slate-500);

    --pt-success-icon: var(--pt-green-500);
    --pt-success-border: var(--pt-green-600);

    --pt-error-icon: var(--pt-red-500);
    --pt-error-border: var(--pt-red-500);

    --pt-warning-icon: var(--pt-yellow-500);
    --pt-warning-border: var(--pt-yellow-400);

    --pt-info-icon: var(--pt-slate-400);
    --pt-info-border: var(--pt-slate-700);

    --pt-debug-icon: var(--pt-blue-300);
    --pt-debug-border: var(--pt-blue-600);

    --pt-spinner-icon: var(--pt-slate-400);
    --pt-spinner-border: var(--pt-slate-400);

    --pt-progress-icon: var(--pt-blue-300);
    --pt-progress-border: var(--pt-blue-600);
  }
}
`,A,o=H(()=>{A=d}),c=`:root {
  --pt-white: #ffffff;
  --pt-slate-50: #f8fafc;
  --pt-slate-200: #e2e8f0;
  --pt-slate-300: #cbd5e1;
  --pt-slate-400: #94a3b8;
  --pt-slate-500: #64748b;
  --pt-slate-600: #475569;
  --pt-slate-700: #334155;
  --pt-slate-800: #1e293b;
  --pt-black: #000000;

  --pt-green-500: #22c55e;
  --pt-green-600: #16a34a;
  --pt-red-500: #ef4444;
  --pt-yellow-400: #facc15;
  --pt-yellow-500: #eab308;
  --pt-blue-300: #93c5fd;
  --pt-blue-600: #2563eb;
}

/* Animations */
@keyframes vt-progress-bar {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

@keyframes vt-spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Icons */
[data-pt-icon] {
  display: flex;
  width: 1rem;
  height: 1rem;
  justify-content: center;
  align-items: center;
}

[data-pt-icon][data-pt-success] {
  color: var(--pt-success-icon);
}

[data-pt-icon][data-pt-warning] {
  color: var(--pt-warning-icon);
}

[data-pt-icon][data-pt-info] {
  color: var(--pt-info-icon);
}

[data-pt-icon][data-pt-error] {
  color: var(--pt-error-icon);
}

[data-pt-icon][data-pt-debug] {
  color: var(--pt-debug-icon);
}

[data-pt-icon][data-pt-spinner] {
  width: 1rem;
  height: 1rem;
  border: 2px solid var(--pt-spinner-icon);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: vt-spinner 1s linear infinite;
}

[data-pt-icon][data-pt-progress] {
  width: 1rem;
  height: 1rem;
  border: 2px solid var(--pt-progress-icon);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: vt-spinner 1s linear infinite;
}

/* Toast Types */
[data-pt-toast][data-pt-info] {
  border-top-color: var(--pt-info-border);
}

[data-pt-toast][data-pt-success] {
  border-top-color: var(--pt-success-border);
}

[data-pt-toast][data-pt-error] {
  border-top-color: var(--pt-error-border);
}

[data-pt-toast][data-pt-warning] {
  border-top-color: var(--pt-warning-border);
}

[data-pt-toast][data-pt-debug] {
  border-top-color: var(--pt-debug-border);
}

[data-pt-toast][data-pt-spinner] {
  border-top-color: var(--pt-spinner-border);
}

[data-pt-toast][data-pt-progress] {
  border-top-color: var(--pt-progress-border);
}

/* Toast Base */
[data-pt-toast] {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  position: relative;
  z-index: 99999;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  width: 16rem;
  min-height: 1rem;
  padding: 1.25rem 1.5rem 1.5rem 1.5rem;
  pointer-events: auto;
  transition-property: opacity;
  transition-duration: 200ms;
  transition-timing-function: ease;
  box-shadow: 0rem 0.25rem 0.75rem 0rem hsla(0, 0%, 0%, 0.09);
  border-radius: 0.375rem;
  font-size: 1rem;
  background-color: var(--pt-background);
  border-color: var(--pt-border);
  border-style: solid;
  border-width: 1px;
  border-top-width: 0.5rem;
  flex: 1 0 auto;
}

/* Focus indicator for keyboard navigation */
[data-pt-toast]:focus {
  outline: 2px solid var(--pt-focus-ring, #2563eb);
  outline-offset: 2px;
}

[data-pt-heading-wrapper] {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
}

[data-pt-heading] {
  font-weight: 500;
  color: var(--pt-heading);
}

[data-pt-body] {
  font-weight: 400;
  color: var(--pt-text);
}

[data-pt-progress-bar] {
  width: 0%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0.2rem;
  background-color: var(--pt-progress-bar);
}

/* Container */
[data-pt-container] {
  position: fixed;
  z-index: 9998;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 0.5rem;
  pointer-events: none;
  max-height: 100vh;
  overflow-y: auto;
}

/* Position variants */
[data-pt-container][data-pt-position='top-right'] {
  top: 0.5rem;
  right: 0.5rem;
}

[data-pt-container][data-pt-position='top-left'] {
  top: 0.5rem;
  left: 0.5rem;
}

[data-pt-container][data-pt-position='bottom-right'] {
  bottom: 0.5rem;
  right: 0.5rem;
}

[data-pt-container][data-pt-position='bottom-left'] {
  bottom: 0.5rem;
  left: 0.5rem;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  [data-pt-toast] {
    animation: none;
    transition: none;
  }

  [data-pt-progress-bar] {
    animation: none;
    transition: none;
  }

  [data-pt-icon][data-pt-spinner] {
    animation: none;
  }
}
`,C,i=H(()=>{C=c}),n=`/* Dark theme colors - WCAG AA compliant (4.5:1 contrast ratio for text) */
:root {
  --pt-background: var(--pt-slate-800);
  --pt-text: var(--pt-slate-300);
  --pt-heading: var(--pt-slate-50);
  --pt-border: var(--pt-slate-700);
  --pt-progress-bar: var(--pt-slate-500);

  --pt-success-icon: var(--pt-green-500);
  --pt-success-border: var(--pt-green-600);

  --pt-error-icon: var(--pt-red-500);
  --pt-error-border: var(--pt-red-500);

  --pt-warning-icon: var(--pt-yellow-500);
  --pt-warning-border: var(--pt-yellow-400);

  --pt-info-icon: var(--pt-slate-400);
  --pt-info-border: var(--pt-slate-700);

  --pt-debug-icon: var(--pt-blue-300);
  --pt-debug-border: var(--pt-blue-600);

  --pt-spinner-icon: var(--pt-slate-400);
  --pt-spinner-border: var(--pt-slate-400);

  --pt-progress-icon: var(--pt-blue-300);
  --pt-progress-border: var(--pt-blue-600);
}
`,B,h=H(()=>{B=n}),p=`/* Light theme colors - WCAG AA compliant (4.5:1 contrast ratio for text) */
:root {
  --pt-background: var(--pt-white);
  --pt-text: var(--pt-slate-600);
  --pt-heading: var(--pt-slate-800);
  --pt-border: var(--pt-slate-200);
  --pt-progress-bar: var(--pt-slate-300);

  --pt-success-icon: var(--pt-green-600);
  --pt-success-border: var(--pt-green-600);

  --pt-error-icon: var(--pt-red-500);
  --pt-error-border: var(--pt-red-500);

  /* Using amber-600 for better contrast on white background (WCAG AA) */
  --pt-warning-icon: #d97706;
  --pt-warning-border: var(--pt-yellow-400);

  --pt-info-icon: var(--pt-slate-500);
  --pt-info-border: var(--pt-slate-200);

  --pt-debug-icon: var(--pt-blue-600);
  --pt-debug-border: var(--pt-blue-600);

  --pt-spinner-icon: var(--pt-slate-500);
  --pt-spinner-border: var(--pt-slate-400);

  --pt-progress-icon: var(--pt-blue-600);
  --pt-progress-border: var(--pt-blue-600);
}
`,T,s=H(()=>{T=p}),R,r=H(()=>{o(),i(),h(),s(),R={base:C,light:T,dark:B,auto:A}});function y(j,q){Object.keys(q).forEach((J)=>{if(q[J]&&typeof q[J]==="object"&&!(q[J]instanceof Array)){if(!j[J])j[J]={};y(j[J],q[J])}else j[J]=q[J]})}function W(...j){let q=document.createElement("style");q.innerHTML=j.join(""),document.head.appendChild(q)}var t='<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2102_1592)"><path d="M12 7.5C12 5.84315 10.6569 4.5 9 4.5C7.34315 4.5 6 5.84315 6 7.5V12C6 13.6569 7.34315 15 9 15C10.6569 15 12 13.6569 12 12V7.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.25 5.25L12 6.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.75 5.25L6 6.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.25 14.25L12 12.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.75 14.25L6 12.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 9.75H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 9.75H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.5 3L8.25 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.5 3L9.75 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_2102_1592"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>',a='<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2102_1582)"><g clip-path="url(#clip1_2102_1582)"><path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.25 6.75L6.75 11.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.75 6.75L11.25 11.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g></g><defs><clipPath id="clip0_2102_1582"><rect width="18" height="18" fill="white"/></clipPath><clipPath id="clip1_2102_1582"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>',e="<div></div>",j8='<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2102_1564)"><g clip-path="url(#clip1_2102_1564)"><path d="M16.5 8.30999V8.99999C16.4991 10.6173 15.9754 12.191 15.007 13.4864C14.0386 14.7817 12.6775 15.7293 11.1265 16.1879C9.57557 16.6465 7.91794 16.5914 6.40085 16.0309C4.88376 15.4704 3.58849 14.4346 2.70822 13.0778C1.82795 11.721 1.40984 10.116 1.51626 8.50223C1.62267 6.88841 2.24791 5.35223 3.29871 4.12279C4.34951 2.89335 5.76959 2.03653 7.34714 1.6801C8.92469 1.32367 10.5752 1.48674 12.0525 2.14499" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.5 3L9 10.5075L6.75 8.2575" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g></g><defs><clipPath id="clip0_2102_1564"><rect width="18" height="18" fill="white"/></clipPath><clipPath id="clip1_2102_1564"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>';function q8(j){let q;switch(j){case"success":q=V.icons.success;break;case"debug":q=V.icons.debug;break;case"error":q=V.icons.error;break;case"warning":q=V.icons.warning;break;case"spinner":q=V.icons.spinner;break;case"info":q=V.icons.info;break;case"progress":q=V.icons.progress;break}return q}var J8=H(()=>{I()}),K8='<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2102_1587)"><path d="M16.2976 13.5L10.2976 3C10.1667 2.76915 9.97702 2.57714 9.74776 2.44355C9.5185 2.30996 9.25791 2.23958 8.99257 2.23958C8.72723 2.23958 8.46664 2.30996 8.23738 2.44355C8.00812 2.57714 7.8184 2.76915 7.68757 3L1.68757 13.5C1.55533 13.729 1.48599 13.9889 1.48658 14.2534C1.48716 14.5178 1.55765 14.7774 1.6909 15.0059C1.82416 15.2343 2.01543 15.4234 2.24534 15.5541C2.47525 15.6848 2.73562 15.7524 3.00007 15.75H15.0001C15.2632 15.7497 15.5217 15.6802 15.7495 15.5485C15.9773 15.4167 16.1665 15.2273 16.298 14.9993C16.4294 14.7714 16.4986 14.5128 16.4985 14.2496C16.4985 13.9864 16.4292 13.7279 16.2976 13.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 6.75V9.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 12.75H9.0075" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_2102_1587"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>',N8='<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2102_1792)"><path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 12V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 6H9.0075" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_2102_1792"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>',O8="<div></div>",M={};g(M,{icons:()=>F});var F,k=H(()=>{J8(),F={get:q8,svg:{success:j8,warning:K8,error:a,debug:t,spinner:e,info:N8,progress:O8}}});function Q8(){let{icons:j}=(k(),x(M));return{success:j.svg.success,warning:j.svg.warning,error:j.svg.error,debug:j.svg.debug,spinner:j.svg.spinner,info:j.svg.info,progress:j.svg.progress}}function w(j){if(y(V,j),!V.injectCss)return;switch(V.theme){case"none":break;case"light":W(R.light,R.base);break;case"dark":W(R.dark,R.base);break;case"auto":W(R.auto,R.base);break}}var V,I=H(()=>{r(),V={target:void 0,position:"bottom-right",injectCss:!0,theme:"auto",get icons(){if(!this._icons)this._icons=Q8();return this._icons},set icons(j){this._icons=j},_icons:void 0,announceToScreenReader:!0,ariaLive:"polite"}});I();function z(j,q){let J,{toast:N,progressBar:O}=j;if(q>0)O.style.animationName="vt-progress-bar",O.style.animationDuration=`${q}ms`,O.style.animationTimingFunction="linear",O.style.animationFillMode="forwards",N.addEventListener("mouseover",()=>{O.style.animationPlayState="paused",clearTimeout(J)}),N.addEventListener("mouseout",()=>{O.style.animationPlayState="running",J=setTimeout(()=>{N.style.opacity="0",setTimeout(()=>{if(N.parentNode)N.parentNode.removeChild(N)},250)},q)});J=setTimeout(()=>{N.style.opacity="0",setTimeout(()=>{if(N.parentNode)N.parentNode.removeChild(N)},250)},q)}function V8(j){let{toast:q}=j;q.style.cursor="pointer",q.setAttribute("tabindex","0"),q.setAttribute("aria-label","Toast. Press Enter or Space to close."),q.addEventListener("click",()=>{z(j,0)}),q.addEventListener("keydown",(J)=>{if(J.key==="Enter"||J.key===" ")J.preventDefault(),z(j,0)})}k();function X8(j,q,J,N,O){let Q=document.createElement("div");Q.setAttribute("data-pt-toast",O),Q.setAttribute(`data-pt-${q}`,""),Q.setAttribute("role","status"),Q.setAttribute("aria-atomic","true");let X=document.createElement("div");X.setAttribute("data-pt-heading-wrapper","");let Z=document.createElement("div");Z.setAttribute("data-pt-icon",""),Z.setAttribute(`data-pt-${q}`,""),Z.innerHTML=F.get(q);let Y=document.createElement("div");Y.setAttribute("data-pt-heading","true"),Y.textContent=J,X.appendChild(Z),X.appendChild(Y);let $=document.createElement("div");if($.setAttribute("data-pt-body",""),$.textContent=N,!N)$.style.display="none";let K=document.createElement("div");return K.setAttribute("data-pt-progress-bar",""),Q.appendChild(X),Q.appendChild($),Q.appendChild(K),j.appendChild(Q),{toast:Q,container:j,headingWrapper:X,iconElement:Z,headingElement:Y,bodyElement:$,progressBar:K}}var L={heading:"",body:"",duration:3500,clickToClose:!0};function Y8(j){let q={...L,...j},J=q.heading,N=q.body,O=q.duration,Q=q.clickToClose;return{heading:J,body:N,duration:O,clickToClose:Q}}I();function Z8(j="bottom-right"){let q=document.createElement("div");if(q.setAttribute("data-pt-container",""),q.setAttribute("data-pt-position",j),q.setAttribute("role","region"),q.setAttribute("aria-label","Toasts"),V.ariaLive)q.setAttribute("aria-live",V.ariaLive);return document.body.appendChild(q),q}function $8(){if(V.target){if(typeof V.target==="string"){let q=document.querySelector(V.target);if(q)return q}else if(V.target instanceof HTMLElement)return V.target}let j=document.querySelector("[data-pt-container]");if(j)return j;return Z8(V.position)}function P(j,q){let{heading:J,body:N,duration:O,clickToClose:Q}=Y8(q);if(j==="spinner")O=null,Q=!1;let X=$8(),Z=Math.random().toString(36).substring(2,11),Y=X8(X,j,J,N,Z);if(O)z(Y,O);if(Q)V8(Y);return Y}var H8={success:(j)=>P("success",j),error:(j)=>P("error",j),warning:(j)=>P("warning",j),debug:(j)=>P("debug",j),info:(j)=>P("info",j),spinner:(j)=>P("spinner",j),progress:(j)=>P("progress",j)};function P8(j,q){let{heading:J,body:N}=q;if(J!==void 0)j.headingElement.textContent=J;if(N!==void 0)if(N)j.bodyElement.textContent=N,j.bodyElement.style.display="block";else j.bodyElement.textContent="",j.bodyElement.style.display="none"}class G{elements=null;progressOptions;type;heading;body;duration;clickToClose;constructor({type:j,heading:q,body:J="",duration:N=L.duration,clickToClose:O=L.clickToClose,progress:Q}){if(this.type=j,this.heading=q,this.body=J,this.duration=N,this.clickToClose=O,j==="progress"){if(this.progressOptions={total:Q?.total||100,current:Q?.current||0,showPercentage:Q?.showPercentage!==!1},N===L.duration)this.duration=null}if(this.elements=H8[this.type]({heading:this.heading,body:this.body,duration:this.duration,clickToClose:this.clickToClose}),j==="progress"&&this.progressOptions)this.setProgress(this.progressOptions.current)}update(j){if(!this.elements)return;P8(this.elements,j)}setProgress(j){if(!this.elements||this.type!=="progress"||!this.progressOptions)return;let{progressBar:q,bodyElement:J,toast:N}=this.elements,O=Math.min(100,Math.max(0,j/this.progressOptions.total*100));if(q.style.width=`${O}%`,q.style.transition="width 0.3s ease",this.progressOptions.showPercentage)J.textContent=`${Math.round(O)}%`,J.style.display="block";this.progressOptions.current=j,N.dispatchEvent(new CustomEvent("vt:progress",{detail:{current:j,total:this.progressOptions.total,percentage:O}}))}incrementProgress(j=1){if(!this.progressOptions)return;this.setProgress((this.progressOptions.current||0)+j)}complete(j=2000){if(!this.progressOptions)return;if(this.setProgress(this.progressOptions.total),j>0)setTimeout(()=>{this.close()},j)}close(){if(!this.elements)return;this.elements.toast.remove(),this.elements=null}}w({position:"top-right",theme:"auto"});function R8(){let j=localStorage.getItem("theme"),q=window.matchMedia("(prefers-color-scheme: dark)").matches;if(j)document.documentElement.setAttribute("data-theme",j);else if(q)document.documentElement.setAttribute("data-theme","dark");else document.documentElement.setAttribute("data-theme","light")}function v(){let j=document.querySelector(".dark-mode");if(!j)return;let J=document.documentElement.getAttribute("data-theme")==="dark"?"Switch to light mode":"Switch to dark mode";j.setAttribute("aria-label",J),j.setAttribute("title",J)}function U8(){let q=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",q),localStorage.setItem("theme",q),v()}R8();v();var b=document.querySelector(".dark-mode");if(b)b.addEventListener("click",(j)=>{j.preventDefault(),U8()});function G8(){let j=document.createElement("canvas");j.style.position="fixed",j.style.top="0",j.style.left="0",j.style.width="100%",j.style.height="100%",j.style.zIndex="-1",j.style.opacity="0.15",document.body.prepend(j);let q=j.getContext("2d"),J=window.innerWidth,N=window.innerHeight;j.width=J,j.height=N,window.addEventListener("resize",()=>{J=window.innerWidth,N=window.innerHeight,j.width=J,j.height=N});let O=[],Q=25,X=["circle","triangle","square","hexagon"];for(let K=0;K<Q;K++)O.push({x:Math.random()*J,y:Math.random()*N,size:Math.random()*40+20,speedX:(Math.random()-0.5)*0.3,speedY:(Math.random()-0.5)*0.3,rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-0.5)*0.01,type:X[Math.floor(Math.random()*X.length)]});function Z(){let K=document.documentElement.getAttribute("data-theme");return K==="dark"||K!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches?"#b492ff":"#8f62f0"}function Y(K){switch(q.save(),q.translate(K.x,K.y),q.rotate(K.rotation),q.strokeStyle=Z(),q.lineWidth=2,q.fillStyle="transparent",K.type){case"circle":q.beginPath(),q.arc(0,0,K.size/2,0,Math.PI*2),q.stroke();break;case"triangle":q.beginPath(),q.moveTo(0,-K.size/2),q.lineTo(K.size/2,K.size/2),q.lineTo(-K.size/2,K.size/2),q.closePath(),q.stroke();break;case"square":q.strokeRect(-K.size/2,-K.size/2,K.size,K.size);break;case"hexagon":q.beginPath();for(let U=0;U<6;U++){let E=Math.PI/3*U,D=Math.cos(E)*K.size/2,S=Math.sin(E)*K.size/2;if(U===0)q.moveTo(D,S);else q.lineTo(D,S)}q.closePath(),q.stroke();break}q.restore()}function $(){q.clearRect(0,0,J,N),O.forEach((K)=>{if(K.x+=K.speedX,K.y+=K.speedY,K.rotation+=K.rotationSpeed,K.x<-K.size)K.x=J+K.size;if(K.x>J+K.size)K.x=-K.size;if(K.y<-K.size)K.y=N+K.size;if(K.y>N+K.size)K.y=-K.size;Y(K)}),requestAnimationFrame($)}$()}G8();var L8=document.querySelectorAll("[data-toast-type]"),W8={success:{heading:"Success!",body:"Your operation completed successfully."},error:{heading:"Error",body:"Something went wrong. Please try again."},warning:{heading:"Warning",body:"This action requires your attention."},info:{heading:"Information",body:"Here's something you should know."},debug:{heading:"Debug Info",body:"This is a debug message for developers."},spinner:{heading:"Loading...",body:"Please wait while we process your request."},progress:{heading:"Uploading file...",body:"Your file is being uploaded."}};L8.forEach((j)=>{j.addEventListener("click",()=>{let q=j.getAttribute("data-toast-type"),J=W8[q];if(q==="spinner"){let N=new G({type:"spinner",heading:J.heading,body:J.body,duration:null});setTimeout(()=>{N.close()},3000)}else if(q==="progress"){let N=new G({type:"progress",heading:J.heading,body:J.body,progress:{total:100,current:0,showPercentage:!0}}),O=0,Q=setInterval(()=>{if(O+=10,N.setProgress(O),O>=100)clearInterval(Q),N.complete()},300)}else new G({type:q,heading:J.heading,body:J.body,duration:5000})})});
