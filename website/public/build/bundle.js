var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function a(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let l,o;function c(t,e){return l||(l=document.createElement("a")),l.href=e,t===l.href}function i(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode&&t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function h(){return d(" ")}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e){e=""+e,t.data!==e&&(t.data=e)}function y(t){o=t}const b=[],v=[];let _=[];const x=[],k=Promise.resolve();let w=!1;function E(t){_.push(t)}const A=new Set;let M=0;function z(){if(0!==M)return;const t=o;do{try{for(;M<b.length;){const t=b[M];M++,y(t),C(t.$$)}}catch(t){throw b.length=0,M=0,t}for(y(null),b.length=0,M=0;v.length;)v.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];A.has(e)||(A.add(e),e())}_.length=0}while(b.length);for(;x.length;)x.pop()();w=!1,A.clear(),y(t)}function C(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const j=new Set;function R(t,e){t&&t.i&&(j.delete(t),t.i(e))}function S(t,e,n,r){if(t&&t.o){if(j.has(t))return;j.add(t),undefined.c.push((()=>{j.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}else r&&r()}function B(t){t&&t.c()}function N(t,n,s,l){const{fragment:o,after_update:c}=t.$$;o&&o.m(n,s),l||E((()=>{const n=t.$$.on_mount.map(e).filter(a);t.$$.on_destroy?t.$$.on_destroy.push(...n):r(n),t.$$.on_mount=[]})),c.forEach(E)}function O(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];_.forEach((r=>-1===t.indexOf(r)?e.push(r):n.push(r))),n.forEach((t=>t())),_=e}(n.after_update),r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function T(t,e){-1===t.$$.dirty[0]&&(b.push(t),w||(w=!0,k.then(z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(e,a,s,l,c,i,u,f=[-1]){const g=o;y(e);const d=e.$$={fragment:null,ctx:[],props:i,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(g?g.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:a.target||g.$$.root};u&&u(d.root);let h=!1;if(d.ctx=s?s(e,a.props||{},((t,n,...r)=>{const a=r.length?r[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=a)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](a),h&&T(e,t)),n})):[],d.update(),h=!0,r(d.before_update),d.fragment=!!l&&l(d.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);d.fragment&&d.fragment.l(t),t.forEach(m)}else d.fragment&&d.fragment.c();a.intro&&R(e.$$.fragment),N(e,a.target,a.anchor,a.customElement),z()}y(g)}class P{$destroy(){O(this,1),this.$destroy=t}$on(e,n){if(!a(n))return t;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const t=r.indexOf(n);-1!==t&&r.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const I="https://s3.us-east-2.amazonaws.com/emberoma.com/images/";function J(t,e,n){const r=t.slice();return r[1]=e[n],r}function K(t){let e,n,r,a,s,l,o,f,y,b=t[1].name+"";return{c(){e=g("a"),n=g("img"),s=h(),l=g("h4"),o=d(b),f=h(),c(n.src,r=t[1].image)||p(n,"src",r),p(n,"alt",a=t[1].name),p(n,"class","svelte-fxygye"),p(l,"class","svelte-fxygye"),p(e,"href",y=t[1].instagram),p(e,"target","_blank"),p(e,"class","member svelte-fxygye")},m(t,r){u(t,e,r),i(e,n),i(e,s),i(e,l),i(l,o),i(e,f)},p(t,s){1&s&&!c(n.src,r=t[1].image)&&p(n,"src",r),1&s&&a!==(a=t[1].name)&&p(n,"alt",a),1&s&&b!==(b=t[1].name+"")&&$(o,b),1&s&&y!==(y=t[1].instagram)&&p(e,"href",y)},d(t){t&&m(e)}}}function D(e){let n,r,a,s,l=e[0],o=[];for(let t=0;t<l.length;t+=1)o[t]=K(J(e,l,t));return{c(){n=g("section"),r=g("h1"),r.textContent="The Artists",a=h(),s=g("div");for(let t=0;t<o.length;t+=1)o[t].c();p(r,"class","svelte-fxygye"),p(s,"class","grid svelte-fxygye"),p(n,"class","svelte-fxygye")},m(t,e){u(t,n,e),i(n,r),i(n,a),i(n,s);for(let t=0;t<o.length;t+=1)o[t]&&o[t].m(s,null)},p(t,[e]){if(1&e){let n;for(l=t[0],n=0;n<l.length;n+=1){const r=J(t,l,n);o[n]?o[n].p(r,e):(o[n]=K(r),o[n].c(),o[n].m(s,null))}for(;n<o.length;n+=1)o[n].d(1);o.length=l.length}},i:t,o:t,d(t){t&&m(n),f(o,t)}}}function L(t,e,n){let{bandMembers:r=[{name:"Ryles Steurer",instagram:"rylessteurermusic"},{name:"Joy Melan",instagram:"joy.melan"},{name:"Seth Thomas",instagram:"_sethom_"},{name:"Hunter Walkup",instagram:"hunter_walkup"},{name:"Nico Little",instagram:"nicolittlemusic"},{name:"Jac Carson",instagram:"jac_withnok"},{name:"Kendall Harrison",instagram:"kenxall"},{name:"August King",instagram:"august_king_keys"},{name:"Sam Blue",instagram:"sambluesmusic"},{name:"Jade Parx",instagram:"jadeparx"},{name:"Rhett Belcher",instagram:"100percent_brett"},{name:"Craig Kierce",instagram:"ckierce"},{name:"Roy Marrero",instagram:"dat_boi_palmtree"},{name:"Carlos VanWees",instagram:"losvanwees"},{name:"Liz Mallet",instagram:"lizzzzz.adrienne.2222"},{name:"Donovan Handy",instagram:"donosinferno"},{name:"Spencer Ryan",instagram:"spencer_gtr"},{name:"Ronnie Hall",instagram:"ronniehallatx"}]}=e;return r=r.map((t=>({...t,instagram:"https://instagram.com/"+t.instagram,image:I+"chad.png"}))),t.$$set=t=>{"bandMembers"in t&&n(0,r=t.bandMembers)},[r]}class W extends P{constructor(t){super(),H(this,t,L,D,s,{bandMembers:0})}}function q(t,e,n){const r=t.slice();return r[1]=e[n],r}function F(t){let e,n,r,a=t[1].platform+"";return{c(){e=g("a"),n=d(a),p(e,"href",r=t[1].url),p(e,"target","_blank"),p(e,"class","svelte-198fg63")},m(t,r){u(t,e,r),i(e,n)},p(t,s){1&s&&a!==(a=t[1].platform+"")&&$(n,a),1&s&&r!==(r=t[1].url)&&p(e,"href",r)},d(t){t&&m(e)}}}function V(e){let n,r=e[0],a=[];for(let t=0;t<r.length;t+=1)a[t]=F(q(e,r,t));return{c(){n=g("div");for(let t=0;t<a.length;t+=1)a[t].c();p(n,"class","social-links svelte-198fg63")},m(t,e){u(t,n,e);for(let t=0;t<a.length;t+=1)a[t]&&a[t].m(n,null)},p(t,[e]){if(1&e){let s;for(r=t[0],s=0;s<r.length;s+=1){const l=q(t,r,s);a[s]?a[s].p(l,e):(a[s]=F(l),a[s].c(),a[s].m(n,null))}for(;s<a.length;s+=1)a[s].d(1);a.length=r.length}},i:t,o:t,d(t){t&&m(n),f(a,t)}}}function X(t,e,n){let{links:r=[{platform:"Instagram",url:"https://instagram.com/rylessteurermusic"},{platform:"Spotify",url:"https://distrokid.com/hyperfollow/emberoma/salted-caramel"}]}=e;return t.$$set=t=>{"links"in t&&n(0,r=t.links)},[r]}class G extends P{constructor(t){super(),H(this,t,X,V,s,{links:0})}}function Q(t,e,n){const r=t.slice();return r[1]=e[n],r}function U(e){let n,r,a,s,l,o,f,$,y,b,v,_,x,k,w,E,A,M=e[1].title+"",z=e[1].date+"",C=e[1].location+"",j=e[1].time+"";return{c(){n=g("div"),r=g("img"),s=h(),l=g("div"),o=g("h2"),f=d(M),$=h(),y=g("p"),b=d(z),v=h(),_=g("p"),x=d(C),k=h(),w=g("p"),E=d(j),A=h(),c(r.src,a=e[1].posterImage)||p(r,"src",a),p(r,"alt","Event Poster"),p(r,"class","poster svelte-1u621y0"),p(o,"class","svelte-1u621y0"),p(y,"class","svelte-1u621y0"),p(_,"class","svelte-1u621y0"),p(w,"class","svelte-1u621y0"),p(l,"class","details-overlay svelte-1u621y0"),p(n,"class","poster-container svelte-1u621y0")},m(t,e){u(t,n,e),i(n,r),i(n,s),i(n,l),i(l,o),i(o,f),i(l,$),i(l,y),i(y,b),i(l,v),i(l,_),i(_,x),i(l,k),i(l,w),i(w,E),i(n,A)},p:t,d(t){t&&m(n)}}}function Y(e){let n,r=e[0],a=[];for(let t=0;t<r.length;t+=1)a[t]=U(Q(e,r,t));return{c(){n=g("div");for(let t=0;t<a.length;t+=1)a[t].c();p(n,"class","event-poster svelte-1u621y0")},m(t,e){u(t,n,e);for(let t=0;t<a.length;t+=1)a[t]&&a[t].m(n,null)},p(t,[e]){if(1&e){let s;for(r=t[0],s=0;s<r.length;s+=1){const l=Q(t,r,s);a[s]?a[s].p(l,e):(a[s]=U(l),a[s].c(),a[s].m(n,null))}for(;s<a.length;s+=1)a[s].d(1);a.length=r.length}},i:t,o:t,d(t){t&&m(n),f(a,t)}}}function Z(t){return[[{title:"Album Release Party",date:"December 13th, 2024",location:"Friend's Bar in Austin, TX",time:"7:30pm - 10:30pm",posterImage:I+"salted_caramel_poster.jpg"}]]}class tt extends P{constructor(t){super(),H(this,t,Z,Y,s,{})}}function et(e){let n,r,a,s,l,o,f,d;return{c(){n=g("section"),r=g("h1"),r.textContent="The Album",a=h(),s=g("div"),l=g("div"),o=g("a"),f=g("img"),p(r,"class","svelte-3ugf9w"),c(f.src,d=e[0])||p(f,"src",d),p(f,"alt","Album Cover"),p(f,"class","album svelte-3ugf9w"),p(o,"href",nt),p(l,"class","album-container svelte-3ugf9w"),p(s,"class","albums svelte-3ugf9w"),p(n,"class","svelte-3ugf9w")},m(t,e){u(t,n,e),i(n,r),i(n,a),i(n,s),i(s,l),i(l,o),i(o,f)},p:t,i:t,o:t,d(t){t&&m(n)}}}let nt="https://distrokid.com/hyperfollow/emberoma/salted-caramel";function rt(t){return[I+"salted_caramel_album.jpg"]}class at extends P{constructor(t){super(),H(this,t,rt,et,s,{})}}function st(e){let n,r,a,s,l,o,c,f,d,$,y,b;return l=new G({}),c=new tt({}),d=new at({}),y=new W({}),{c(){n=g("main"),r=g("header"),a=g("h1"),a.textContent="EMBEROMA",s=h(),B(l.$$.fragment),o=h(),B(c.$$.fragment),f=h(),B(d.$$.fragment),$=h(),B(y.$$.fragment),p(r,"class","hero svelte-dbpzw5"),p(n,"class","svelte-dbpzw5")},m(t,e){u(t,n,e),i(n,r),i(r,a),i(r,s),N(l,r,null),i(n,o),N(c,n,null),i(n,f),N(d,n,null),i(n,$),N(y,n,null),b=!0},p:t,i(t){b||(R(l.$$.fragment,t),R(c.$$.fragment,t),R(d.$$.fragment,t),R(y.$$.fragment,t),b=!0)},o(t){S(l.$$.fragment,t),S(c.$$.fragment,t),S(d.$$.fragment,t),S(y.$$.fragment,t),b=!1},d(t){t&&m(n),O(l),O(c),O(d),O(y)}}}return new class extends P{constructor(t){super(),H(this,t,null,st,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
