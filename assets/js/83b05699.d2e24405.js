"use strict";(self.webpackChunkdocs_denations_com=self.webpackChunkdocs_denations_com||[]).push([[2857],{4137:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),c=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=c(t.components);return a.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),p=c(n),k=r,h=p["".concat(i,".").concat(k)]||p[k]||u[k]||o;return n?a.createElement(h,l(l({ref:e},d),{},{components:n})):a.createElement(h,l({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8448:function(t,e,n){var a=n(7294);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},7358:function(t,e,n){n.d(e,{Z:function(){return u}});var a=n(7294),r=n(2713);var o=function(){var t=(0,a.useContext)(r.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},l=n(6010),s="tabItem_1uMI",i="tabItemActive_2DSg";var c=37,d=39;var u=function(t){var e=t.lazy,n=t.block,r=t.defaultValue,u=t.values,p=t.groupId,k=t.className,h=o(),f=h.tabGroupChoices,m=h.setTabGroupChoices,g=(0,a.useState)(r),b=g[0],y=g[1],v=a.Children.toArray(t.children),x=[];if(null!=p){var w=f[p];null!=w&&w!==b&&u.some((function(t){return t.value===w}))&&y(w)}var N=function(t){var e=t.currentTarget,n=x.indexOf(e),a=u[n].value;y(a),null!=p&&(m(p,a),setTimeout((function(){var t,n,a,r,o,l,s,c;(t=e.getBoundingClientRect(),n=t.top,a=t.left,r=t.bottom,o=t.right,l=window,s=l.innerHeight,c=l.innerWidth,n>=0&&o<=c&&r<=s&&a>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(i),setTimeout((function(){return e.classList.remove(i)}),2e3))}),150))},D=function(t){var e,n;switch(t.keyCode){case d:var a=x.indexOf(t.target)+1;n=x[a]||x[0];break;case c:var r=x.indexOf(t.target)-1;n=x[r]||x[x.length-1]}null==(e=n)||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},k)},u.map((function(t){var e=t.value,n=t.label;return a.createElement("li",{role:"tab",tabIndex:b===e?0:-1,"aria-selected":b===e,className:(0,l.Z)("tabs__item",s,{"tabs__item--active":b===e}),key:e,ref:function(t){return x.push(t)},onKeyDown:D,onFocus:N,onClick:N},n)}))),e?(0,a.cloneElement)(v.filter((function(t){return t.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==b})}))))}},2713:function(t,e,n){var a=(0,n(7294).createContext)(void 0);e.Z=a},4811:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return p},default:function(){return h}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),l=n(7358),s=n(8448),i=["components"],c={sidebar_position:1,slug:"/guide"},d="Welcome to DeNations",u={unversionedId:"guide/intro",id:"guide/intro",isDocsHomePage:!1,title:"Welcome to DeNations",description:"DeNations",source:"@site/docs/guide/intro.md",sourceDirName:"guide",slug:"/guide",permalink:"/docs/guide",editUrl:"https://github.com/smatoos/docs.denations.com/edit/master/website/docs/guide/intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/guide"},sidebar:"guideSidebar",next:{title:"Contract Address",permalink:"/docs/guide/Contract Address"}},p=[{value:"DeNations",id:"denations",children:[{value:"Play to Earn",id:"play-to-earn",children:[]}]},{value:"DeNations Land",id:"denations-land",children:[{value:"Collect Resources! Build Civilizations",id:"collect-resources-build-civilizations",children:[]}]},{value:"DeNations Art Chain",id:"denations-art-chain",children:[{value:"Collect to Earn! Art Collaboration",id:"collect-to-earn-art-collaboration",children:[]}]},{value:"Related Links",id:"related-links",children:[]}],k={toc:p};function h(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"welcome-to-denations"},"Welcome to DeNations"),(0,o.kt)("h2",{id:"denations"},"DeNations"),(0,o.kt)("h3",{id:"play-to-earn"},"Play to Earn"),(0,o.kt)("p",null,"DeNations is a blockchain-powered decentralized metaverse platform that everyone can own nations, build civilizations, and earn tokens."),(0,o.kt)("p",null,"In DeNations, ownership of core assets is represented by Ethereum NFT (Non-Fungible Token). Players can register their NFTs at DeNations' metaverse platform, run their nations, and earn token (DENA) profits. Players will experience the best MetaFi (combination of Metaverse and DeFi) in DeNations."),(0,o.kt)("h2",{id:"denations-land"},"DeNations Land"),(0,o.kt)("h3",{id:"collect-resources-build-civilizations"},"Collect Resources! Build Civilizations"),(0,o.kt)("p",null,"DeNations Land is a digital form of the earth\u2019s surface in DeNations metaverse. DeNations earth is divided into land hexagons. Each hexagon has its own unique coordinates. The land is represented as NFT and can be traded in the open markets."),(0,o.kt)("h2",{id:"denations-art-chain"},"DeNations Art Chain"),(0,o.kt)("h3",{id:"collect-to-earn-art-collaboration"},"Collect to Earn! Art Collaboration"),(0,o.kt)("p",null,"As DeNations is\xa0becoming noticeable each day, it has recently released a new collaboration project called DeNations Art Chain, a decentralized ecosystem where various talented artists can easily and sustainably produce valuable NFT arts."),(0,o.kt)("p",null,"Artists focus on producing their art NFTs and recruiting the next talented artist without worrying about complicated blockchain technologies. DeNations takes care of technology, marketing and token economy."),(0,o.kt)("p",null,"Unlike the other common NFTs, NFTs of the Art Chain Block is profitable under the support of the DeNations Token economy and MetaFi ecosystem."),(0,o.kt)("h2",{id:"related-links"},"Related Links"),(0,o.kt)(l.Z,{defaultValue:"platform",values:[{label:"Platform",value:"platform"},{label:"Collection",value:"collection"},{label:"Community",value:"community"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"platform",mdxType:"TabItem"},(0,o.kt)("table",{class:"tg"},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{class:"tg-0lax"},"Platform"),(0,o.kt)("th",{class:"tg-0lax"},"Link"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-0lax"},"DeNations"),(0,o.kt)("td",{class:"tg-0lax"},(0,o.kt)("a",{href:"https://denations.com/",target:"_blank",rel:"noopener noreferrer"},"https://denations.com"))),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-0lax"},"Play(Metaverse)"),(0,o.kt)("td",{class:"tg-0lax"},(0,o.kt)("a",{href:"https://play.denations.com/",target:"_blank",rel:"noopener noreferrer"},"https://play.denations.com"))),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-0lax"},"Land Map"),(0,o.kt)("td",{class:"tg-0lax"},(0,o.kt)("a",{href:"https://map.denations.com/",target:"_blank",rel:"noopener noreferrer"},"https://map.denations.com/"))),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-0lax"},"Finance"),(0,o.kt)("td",{class:"tg-0lax"},(0,o.kt)("a",{href:"https://finance.denations.com/",target:"_blank",rel:"noopener noreferrer"},"https://finance.denations.com"))),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-0lax"},"Art Chain"),(0,o.kt)("td",{class:"tg-0lax"},(0,o.kt)("a",{href:"https://artchain.denations.com/",target:"_blank",rel:"noopener noreferrer"},"https://artchain.denations.com"))),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-0lax"},"Documentation"),(0,o.kt)("td",{class:"tg-0lax"},(0,o.kt)("a",{href:"https://docs.denations.com/",target:"_blank",rel:"noopener noreferrer"},"https://docs.denations.com")))))),(0,o.kt)(s.Z,{value:"collection",mdxType:"TabItem"},(0,o.kt)("table",{class:"tg"},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{class:"tg-0lax"},"Collection")," ",(0,o.kt)("th",{class:"tg-0lax"},"Link"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-0lax"},"DeNations Ownership NFTs"),(0,o.kt)("td",{class:"tg-0lax"},(0,o.kt)("a",{href:"https://opensea.io/collection/decentralized-nations",target:"_blank",rel:"noopener noreferrer"},"https://opensea.io/collection/decentralized-nations"))),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-0lax"},"Land NFTs"),(0,o.kt)("td",{class:"tg-0lax"},(0,o.kt)("a",{href:"https://opensea.io/collection/denations-land",target:"_blank",rel:"noopener noreferrer"},"https://opensea.io/collection/denations-land"))),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-0lax"},"Stock Voucher NFTs"),(0,o.kt)("td",{class:"tg-0lax"},(0,o.kt)("a",{href:"https://opensea.io/collection/denations-stock-voucher",target:"_blank",rel:"noopener noreferrer"},"https://opensea.io/collection/denations-stock-voucher"))),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-0lax"},"Art by Jeon Byeongsam"),(0,o.kt)("td",{class:"tg-0lax"},(0,o.kt)("a",{href:"https://opensea.io/collection/denations-art-unique-edition",target:"_blank",rel:"noopener noreferrer"},"https://opensea.io/collection/denations-art-unique-edition"))),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-0lax"},"Art by Jacoby"),(0,o.kt)("td",{class:"tg-0lax"},(0,o.kt)("a",{href:"https://opensea.io/collection/denations-art-by-jacoby",target:"_blank",rel:"noopener noreferrer"},"https://opensea.io/collection/denations-art-by-jacoby"))),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-0lax"},"Art Open Edition"),(0,o.kt)("td",{class:"tg-0lax"},(0,o.kt)("a",{href:"https://opensea.io/collection/denations-art-open-edition",target:"_blank",rel:"noopener noreferrer"},"https://opensea.io/collection/denations-art-open-edition"))),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-0lax"},"Art by Jae Young Kim"),(0,o.kt)("td",{class:"tg-0lax"},(0,o.kt)("a",{href:"https://opensea.io/collection/denations-art-chain-by-jae-yong-kim",target:"_blank",rel:"noopener noreferrer"},"https://opensea.io/collection/denations-art-chain-by-jae-yong-kim"))),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-0lax"},"Art by detox."),(0,o.kt)("td",{class:"tg-0lax"},(0,o.kt)("a",{href:"https://opensea.io/collection/denations-art-chain-by-detox",target:"_blank",rel:"noopener noreferrer"},"https://opensea.io/collection/denations-art-chain-by-detox")))))),(0,o.kt)(s.Z,{value:"community",mdxType:"TabItem"},(0,o.kt)("table",{class:"tg"},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{class:"tg-0lax"},"Community")," ",(0,o.kt)("th",{class:"tg-0lax"},"Link"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-0lax"},"Medium"),(0,o.kt)("td",{class:"tg-0lax"},(0,o.kt)("a",{href:"https://medium.com/denations",target:"_blank",rel:"noopener noreferrer"},"https://medium.com/denations"))),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-0lax"},"Discord"),(0,o.kt)("td",{class:"tg-0lax"},(0,o.kt)("a",{href:"https://discord.com/invite/H6MtffFFMx",target:"_blank",rel:"noopener noreferrer"},"https://discord.com/invite/H6MtffFFMx"))),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-0lax"},"Twitter"),(0,o.kt)("td",{class:"tg-0lax"},(0,o.kt)("a",{href:"https://twitter.com/DeNations_DENA",target:"_blank",rel:"noopener noreferrer"},"https://twitter.com/DeNations_DENA"))),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-0lax"},"Telegram"),(0,o.kt)("td",{class:"tg-0lax"},(0,o.kt)("a",{href:"https://t.me/smatoos",target:"_blank",rel:"noopener noreferrer"},"https://t.me/smatoos"))),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-0lax"},"Youtube"),(0,o.kt)("td",{class:"tg-0lax"},(0,o.kt)("a",{href:"https://www.youtube.com/channel/UC4KXfzAuebs2gMh84dzOEVQ",target:"_blank",rel:"noopener noreferrer"},"https://www.youtube.com/channel/UC4KXfzAuebs2gMh84dzOEVQ"))),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-0lax"},"Facebook"),(0,o.kt)("td",{class:"tg-0lax"},(0,o.kt)("a",{href:"https://www.facebook.com/DeNations21",target:"_blank",rel:"noopener noreferrer"},"https://www.facebook.com/DeNations21"))),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-0lax"},"Reddit"),(0,o.kt)("td",{class:"tg-0lax"},(0,o.kt)("a",{href:"https://www.reddit.com/r/DeNations/",target:"_blank",rel:"noopener noreferrer"},"https://www.reddit.com/r/DeNations/"))),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-0lax"},"Kakao Group(Korean)"),(0,o.kt)("td",{class:"tg-0lax"},(0,o.kt)("a",{href:"https://open.kakao.com/o/gIr5brLd",target:"_blank",rel:"noopener noreferrer"},"https://open.kakao.com/o/gIr5brLd"))))))))}h.isMDXComponent=!0},6010:function(t,e,n){function a(t){var e,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=a(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function r(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=a(t))&&(r&&(r+=" "),r+=e);return r}n.d(e,{Z:function(){return r}})}}]);