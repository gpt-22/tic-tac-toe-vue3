(function(){var e={3588:function(e,n,t){"use strict";var a=t(9242),l=t(3396);function r(e,n,t,a,r,u){const i=(0,l.up)("TicTacToe");return(0,l.wg)(),(0,l.j4)(i)}t(6699);var u=t(7139);const i={class:"tic-tac-toe"},o={class:"results"},s={class:"controls"},c={class:"dimension-select-wrapper"},v=["value"],f=["onClick"],p=["src","alt"];function d(e,n,t,r,d,m){return(0,l.wg)(),(0,l.iD)("div",i,[(0,l._)("h1",{class:(0,u.C_)(["game-text",{active:e.isGameOver}])},(0,u.zw)(e.isGameOver?e.endGameText:e.gameText),3),(0,l._)("div",o,[(0,l._)("span",{class:(0,u.C_)({active:e.isXActive})}," Крестики: "+(0,u.zw)(e.xWin),3),(0,l._)("span",null,"Ничья: "+(0,u.zw)(e.drafts),1),(0,l._)("span",{class:(0,u.C_)({active:e.isOActive})}," Нолики: "+(0,u.zw)(e.oWin),3)]),(0,l._)("div",s,[(0,l._)("button",{class:"button",onClick:n[0]||(n[0]=(...n)=>e.restartGame&&e.restartGame(...n))},"Начать заново"),(0,l._)("button",{class:"button",onClick:n[1]||(n[1]=(...n)=>e.startGame&&e.startGame(...n))},"Новая игра"),(0,l._)("div",c,[(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":n[2]||(n[2]=n=>e.dimension=n),class:"dimension-select"},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.selectOptions,(e=>((0,l.wg)(),(0,l.iD)("option",{key:e.value,value:e.value},(0,u.zw)(e.label),9,v)))),128))],512),[[a.bM,e.dimension]])])]),(0,l._)("div",{class:"area",style:(0,u.j5)({"grid-template":e.areaGridTemplate})},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.cells,(n=>((0,l.wg)(),(0,l.iD)("div",{key:n.index,class:(0,u.C_)(["cell",{win:e.winIndexes.includes(n.index)}]),onClick:()=>e.onCellClick(n)},[n.value?((0,l.wg)(),(0,l.iD)("img",{key:0,src:e.getCellIconPath(n.value),alt:n.value},null,8,p)):(0,l.kq)("",!0)],10,f)))),128))],4)])}var m=t(4870);const g=[{value:3,label:"3x3"},{value:4,label:"4x4"},{value:5,label:"5x5"},{value:6,label:"6x6"},{value:7,label:"7x7"},{value:8,label:"8x8"},{value:9,label:"9x9"},{value:10,label:"10x10"}];var w;(function(e){e["X"]="x",e["O"]="o"})(w||(w={}));const x=e=>{const n=e[0].length,t=[];for(let a=0;a<n;a++)t.push(e.map((e=>e[a])));return t},h=e=>{const n=e[0].length,t=[[],[]];for(let a=0;a<n;a++)t[0].push(e[a][a]),t[1].push(e[a][n-a-1]);return t},b=e=>Array.from(Array(e*e)).map(((e,n)=>({value:null,index:n}))),O=(e,n)=>{const t=[];let a=[];return e.forEach((e=>{a.length<n&&a.push(e.index),a.length===n&&(t.push(a),a=[])})),t},_=(e,n)=>{const t=e.find((e=>{const t=e.every((e=>n[e].value===w.X)),a=e.every((e=>n[e].value===w.O));return t||a}));return t??[]},y=(e,n)=>{const t=O(e,n),a=_(t,e),l=x(t),r=_(l,e),u=h(t),i=_(u,e);return[...a,...r,...i]};var T=(0,l.aZ)({name:"TicTacToe",setup(){const e=(0,m.iH)(g[0].value),n=(0,m.iH)(b(e.value));(0,l.YP)(e,(()=>n.value=b(e.value)));const a=e=>{const n=e===w.X?"cross":"circle";return t(968)(`./${n}.svg`)},r=(0,l.Fl)((()=>n.value.every((e=>e.value)))),u=(0,m.iH)(null),i=(0,l.Fl)((()=>"Ходят "+(v.value===w.X?"крестики":"нолики"))),o=(0,l.Fl)((()=>r.value?"Ничья :^)":`Победили ${u.value===w.X?"крестики":"нолики"}!`)),s=(0,l.Fl)((()=>u.value?.length||r.value)),c=(0,m.iH)(0),v=(0,l.Fl)((()=>c.value%2===0?w.X:w.O)),f=(0,m.iH)(0),p=(0,m.iH)(0),d=(0,m.iH)(0),x=e=>{e.value||s.value||(e.value=v.value,c.value++)},h=(0,m.iH)(y(n.value,e.value)),O=()=>{if(h.value=y(n.value,e.value),h.value.length){const e=n.value[h.value[0]];u.value=e.value,e.value===w.X?f.value++:p.value++}else r.value&&d.value++};(0,l.YP)(c,O);const _=()=>{n.value=b(e.value),u.value=null,c.value=0},T=()=>{f.value=0,p.value=0,d.value=0,_()},k=(0,l.Fl)((()=>`repeat(${e.value}, 80px) / repeat(${e.value}, 80px)`)),C=(0,l.Fl)((()=>v.value===w.X&&!s.value)),G=(0,l.Fl)((()=>v.value===w.O&&!s.value));return{selectOptions:g,dimension:e,onCellClick:x,cells:n,current:v,xWin:f,oWin:p,drafts:d,winner:u,winIndexes:h,gameText:i,endGameText:o,restartGame:T,startGame:_,isDraft:r,isGameOver:s,getCellIconPath:a,areaGridTemplate:k,isXActive:C,isOActive:G}}}),k=t(89);const C=(0,k.Z)(T,[["render",d]]);var G=C,F=(0,l.aZ)({name:"App",components:{TicTacToe:G}});const H=(0,k.Z)(F,[["render",r]]);var X=H,j=t(65),D=(0,j.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,a.ri)(X).use(D).mount("#app")},968:function(e,n,t){var a={"./arrow-down.svg":4127,"./circle.svg":5645,"./cross.svg":3342};function l(e){var n=r(e);return t(n)}function r(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}l.keys=function(){return Object.keys(a)},l.resolve=r,e.exports=l,l.id=968},4127:function(e,n,t){"use strict";e.exports=t.p+"img/arrow-down.a8f0e7a1.svg"},5645:function(e,n,t){"use strict";e.exports=t.p+"img/circle.1ac67865.svg"},3342:function(e,n,t){"use strict";e.exports=t.p+"img/cross.57f89043.svg"}},n={};function t(a){var l=n[a];if(void 0!==l)return l.exports;var r=n[a]={exports:{}};return e[a](r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(n,a,l,r){if(!a){var u=1/0;for(c=0;c<e.length;c++){a=e[c][0],l=e[c][1],r=e[c][2];for(var i=!0,o=0;o<a.length;o++)(!1&r||u>=r)&&Object.keys(t.O).every((function(e){return t.O[e](a[o])}))?a.splice(o--,1):(i=!1,r<u&&(u=r));if(i){e.splice(c--,1);var s=l();void 0!==s&&(n=s)}}return n}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[a,l,r]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.p="/"}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,a){var l,r,u=a[0],i=a[1],o=a[2],s=0;if(u.some((function(n){return 0!==e[n]}))){for(l in i)t.o(i,l)&&(t.m[l]=i[l]);if(o)var c=o(t)}for(n&&n(a);s<u.length;s++)r=u[s],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(c)},a=self["webpackChunktic_tac_toe"]=self["webpackChunktic_tac_toe"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(3588)}));a=t.O(a)})();
//# sourceMappingURL=app.0a492f3f.js.map