"use strict";(self.webpackChunkdocs_denations_com=self.webpackChunkdocs_denations_com||[]).push([[8361],{4137:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},C=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),C=u(n),f=a,p=C["".concat(c,".").concat(f)]||C[f]||d[f]||i;return n?r.createElement(p,o(o({ref:t},s),{},{components:n})):r.createElement(p,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=C;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}C.displayName="MDXCreateElement"},2511:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(3366),a=n(7294),i=n(3727),o=n(9962),l=n(2735),c=n(6136),u=(0,a.createContext)({collectLink:function(){}}),s=n(9524),d=n(3905),C=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var f=function(e){var t,n,f=e.isNavLink,p=e.to,m=e.href,h=e.activeClassName,b=e.isActive,k=e["data-noBrokenLinkCheck"],v=e.autoAddBaseUrl,y=void 0===v||v,g=(0,r.Z)(e,C),E=(0,o.Z)().siteConfig,w=E.trailingSlash,N=E.baseUrl,B=(0,s.C)().withBaseUrl,x=(0,a.useContext)(u),O=p||m,M=(0,l.Z)(O),Z=null==O?void 0:O.replace("pathname://",""),T=void 0!==Z?(n=Z,y&&function(e){return e.startsWith("/")}(n)?B(n):n):void 0;T&&M&&(T=(0,d.applyTrailingSlash)(T,{trailingSlash:w,baseUrl:N}));var D,j=(0,a.useRef)(!1),A=f?i.OL:i.rU,L=c.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!L&&M&&null!=T&&window.docusaurus.prefetch(T),function(){L&&D&&D.disconnect()}}),[T,L,M]);var P=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,_=!T||!M||P;return T&&M&&!P&&!k&&x.collectLink(T),_?a.createElement("a",Object.assign({href:T},O&&!M&&{target:"_blank",rel:"noopener noreferrer"},g)):a.createElement(A,Object.assign({},g,{onMouseEnter:function(){j.current||null==T||(window.docusaurus.preload(T),j.current=!0)},innerRef:function(e){var t,n;L&&e&&M&&(t=e,n=function(){null!=T&&window.docusaurus.prefetch(T)},(D=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.unobserve(t),D.disconnect(),n())}))}))).observe(t))},to:T||""},f&&{isActive:b,activeClassName:h}))}},2735:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},9524:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(9962),a=n(2735);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,l=void 0!==o&&o,c=i.absolute,u=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+s:s}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},4136:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,i=e.split(/[#?]/)[0],o="/"===i||i===r?i:(a=i,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,o)}},3905:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(4136);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(3509);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},3509:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6890:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7462),a=n(3366),i=n(7294),o="card_2EkX",l=["children"];var c=function(e){var t=e.children,n=(0,a.Z)(e,l);return i.createElement("div",(0,r.Z)({className:o},n),t)}},6336:function(e,t,n){n.d(t,{Ts:function(){return a},UD:function(){return i},AQ:function(){return o},XN:function(){return l},h0:function(){return c},BI:function(){return u}});var r=n(7294);function a(e){return r.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M10 14C11.1046 14 12 13.1046 12 12C12 10.8954 11.1046 10 10 10C8.89545 10 8.00002 10.8954 8.00002 12C8.00002 13.1046 8.89545 14 10 14Z",fill:e.pointColor}),r.createElement("path",{d:"M16 11C17.1046 11 18 10.1046 18 9C18 7.89543 17.1046 7 16 7C14.8954 7 14 7.89543 14 9C14 10.1046 14.8954 11 16 11Z",fill:e.pointColor}),r.createElement("path",{d:"M22 14C23.1046 14 24 13.1046 24 12C24 10.8954 23.1046 10 22 10C20.8954 10 20 10.8954 20 12C20 13.1046 20.8954 14 22 14Z",fill:e.pointColor}),r.createElement("path",{d:"M23 20C24.1046 20 25 19.1046 25 18C25 16.8954 24.1046 16 23 16C21.8954 16 21 16.8954 21 18C21 19.1046 21.8954 20 23 20Z",fill:e.pointColor}),r.createElement("path",{d:"M19 25C20.1046 25 21 24.1046 21 23C21 21.8954 20.1046 21 19 21C17.8954 21 17 21.8954 17 23C17 24.1046 17.8954 25 19 25Z",fill:e.pointColor}),r.createElement("path",{d:"M16.54 2C14.6566 1.9273 12.7778 2.23566 11.0165 2.90661C9.25508 3.57755 7.64732 4.59725 6.28956 5.90459C4.9318 7.21192 3.852 8.77996 3.11491 10.5147C2.37782 12.2494 1.99861 14.1152 2.00001 16C1.99996 16.7413 2.17091 17.4727 2.49956 18.1372C2.82821 18.8017 3.3057 19.3814 3.8949 19.8313C4.48411 20.2812 5.16915 20.5891 5.89674 20.7311C6.62434 20.8731 7.37488 20.8453 8.09001 20.65L9.21001 20.34C9.65556 20.2184 10.1232 20.2013 10.5764 20.29C11.0296 20.3787 11.4563 20.5709 11.8231 20.8516C12.1899 21.1322 12.4869 21.4938 12.691 21.9081C12.8952 22.3223 13.0009 22.7782 13 23.24V27C13 27.7956 13.3161 28.5587 13.8787 29.1213C14.4413 29.6839 15.2044 30 16 30C17.8849 30.0014 19.7506 29.6222 21.4853 28.8851C23.2201 28.148 24.7881 27.0682 26.0954 25.7105C27.4028 24.3527 28.4225 22.7449 29.0934 20.9835C29.7643 19.2222 30.0727 17.3434 30 15.46C29.8549 11.9367 28.3902 8.59673 25.8968 6.10325C23.4033 3.60977 20.0633 2.14509 16.54 2V2ZM24.65 24.31C23.5334 25.479 22.1909 26.409 20.7039 27.0433C19.217 27.6776 17.6166 28.0031 16 28C15.7348 28 15.4804 27.8946 15.2929 27.7071C15.1054 27.5196 15 27.2652 15 27V23.24C15 21.9139 14.4732 20.6421 13.5355 19.7045C12.5979 18.7668 11.3261 18.24 10 18.24C9.55066 18.2408 9.10341 18.3013 8.67001 18.42L7.55001 18.73C7.13169 18.8421 6.69317 18.8564 6.26845 18.7717C5.84373 18.687 5.44423 18.5056 5.10092 18.2416C4.75762 17.9776 4.47973 17.638 4.28881 17.2493C4.09789 16.8606 3.99907 16.4331 4.00001 16C3.99877 14.3838 4.32402 12.784 4.95626 11.2966C5.58849 9.80917 6.51468 8.4648 7.67924 7.34413C8.8438 6.22346 10.2228 5.34958 11.7333 4.77493C13.2439 4.20028 14.855 3.9367 16.47 4C19.4772 4.15662 22.3198 5.42167 24.4491 7.55095C26.5783 9.68024 27.8434 12.5228 28 15.53C28.0688 17.146 27.8073 18.759 27.2312 20.2704C26.6552 21.7818 25.7769 23.1597 24.65 24.32V24.31Z",fill:e.color}))}function i(e){return r.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M23 23.001L23 5.001C22.9994 4.47075 22.7885 3.96239 22.4136 3.58744C22.0386 3.2125 21.5303 3.00159 21 3.001L7.00002 3.001C6.46977 3.00159 5.9614 3.2125 5.58646 3.58744C5.21152 3.96239 5.00061 4.47075 5.00002 5.001L5.00001 23.001C5.00061 23.5313 5.21152 24.0396 5.58646 24.4146C5.9614 24.7895 6.46976 25.0004 7.00001 25.001L21 25.001C21.5303 25.0004 22.0386 24.7895 22.4136 24.4146C22.7885 24.0396 22.9994 23.5313 23 23.001ZM7.00001 23.001L7.00002 5.001L21 5.001L21 23.001L7.00001 23.0023L7.00001 23.001Z",fill:e.color}),r.createElement("path",{d:"M10 29.001L25 29.001C25.5303 29.0004 26.0386 28.7895 26.4136 28.4146C26.7885 28.0396 26.9994 27.5313 27 27.001L27 8.001C27 7.73579 26.8947 7.48143 26.7071 7.2939C26.5196 7.10636 26.2652 7.001 26 7.001C25.7348 7.001 25.4804 7.10636 25.2929 7.2939C25.1054 7.48143 25 7.73579 25 8.001L25 27.001L10 27.001C9.7348 27.001 9.48044 27.1064 9.29291 27.2939C9.10537 27.4814 9.00001 27.7358 9.00001 28.001C9.00001 28.2662 9.10537 28.5206 9.29291 28.7081C9.48044 28.8957 9.7348 29.001 10 29.001Z",fill:e.pointColor}))}function o(e){return r.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M27.8481 10.7588C26.8444 10.765 26.9431 12.6169 25.6925 11.7431C25.2281 11.4194 24.9425 10.9488 24.3594 10.8056C23.85 10.6806 23.3281 10.8106 22.825 10.8975C22.2531 10.9963 21.575 11.0406 21.1413 11.4738C20.7219 11.8906 20.5 12.45 20.0538 12.8694C19.1906 13.6819 18.8263 14.5688 19.385 15.7175C19.9225 16.8219 21.0469 17.4213 22.26 17.3425C23.4519 17.2631 24.69 16.5719 24.6556 18.3038C24.6431 18.9163 24.7713 19.3413 24.9594 19.9106C25.1338 20.4356 25.1219 20.9444 25.1619 21.4863C25.2356 22.4988 25.4219 23.6338 25.9244 24.5281L26.8619 23.2056C26.9775 23.0419 27.2194 22.8125 27.2769 22.6194C27.3788 22.2775 27.1781 21.69 27.155 21.3069C27.1319 20.9238 27.1431 20.5356 27.0844 20.1525C27.0019 19.6156 26.6844 19.1125 26.6406 18.5819C26.56 17.5938 26.7406 16.805 25.9794 15.9788C25.2444 15.1819 24.1669 14.9906 23.1375 15.1525C22.6188 15.2338 20.5306 15.5675 21.3688 14.3819C21.5344 14.1488 21.8238 13.9575 22.01 13.7356C22.1719 13.5425 22.3125 13.1875 22.5025 13.0369C22.6925 12.8863 23.565 12.7131 23.815 12.79C24.065 12.8669 24.3256 13.2275 24.5425 13.3875C24.9432 13.6893 25.4108 13.89 25.9056 13.9725C26.7594 14.0975 28.5444 13.6013 28.5306 12.5063C28.5281 11.9813 28.0406 11.25 27.8481 10.7588V10.7588Z",fill:e.pointColor}),r.createElement("path",{d:"M17.9656 19.7687C17.6325 18.3662 15.7269 17.8975 14.6994 17.1369C14.1088 16.6994 13.5831 16.0237 12.8075 15.9687C12.45 15.9431 12.1506 16.0206 11.7963 15.9287C11.4713 15.845 11.2163 15.67 10.87 15.7156C10.2231 15.8006 9.81501 16.4919 9.12001 16.3981C8.46064 16.3094 7.78126 15.5381 7.63126 14.91C7.43876 14.1025 8.07751 13.8406 8.76189 13.7687C9.04751 13.7387 9.36814 13.7062 9.64251 13.8106C10.0038 13.945 10.1744 14.2987 10.4988 14.4775C11.1069 14.8106 11.23 14.2781 11.1369 13.7381C10.9975 12.9294 10.835 12.5994 11.5563 12.0431C12.0563 11.6594 12.4838 11.3819 12.4038 10.6925C12.3563 10.2875 12.1344 10.1044 12.3413 9.70125C12.4981 9.39437 12.9288 9.1175 13.2094 8.93437C13.9338 8.46187 16.3125 8.49687 15.3406 7.17437C15.055 6.78625 14.5281 6.0925 14.0281 5.9975C13.4031 5.87937 13.1256 6.57687 12.69 6.88437C12.24 7.2025 11.3638 7.56375 10.9131 7.07187C10.3069 6.41 11.315 6.1925 11.5381 5.73062C11.7613 5.26875 11.0213 4.39562 10.625 4.17437L8.76189 6.26375C8.70837 6.61366 8.727 6.97082 8.81664 7.31326C8.90628 7.65571 9.06504 7.97619 9.28314 8.255C9.65376 8.73187 10.2438 8.885 10.2706 9.53625C10.2969 10.1612 10.1994 10.4812 9.79064 10.9206C9.61376 11.1081 9.48876 11.3744 9.30876 11.55C9.08814 11.7644 9.17001 11.6987 8.82564 11.7575C8.17814 11.8669 7.62689 12.0356 7.00126 12.2081C5.95876 12.4962 5.86251 10.7931 5.38751 10.125L3.82501 11.3869C3.80814 11.5937 4.08126 11.9744 4.15564 12.1994C4.58251 13.485 5.44376 14.4794 6.00001 15.7094C6.58564 17.0119 8.15814 16.6506 8.85251 17.7919C9.46876 18.8044 8.81064 20.0862 9.27189 21.1462C9.60689 21.9156 10.3969 22.0837 10.9419 22.6462C11.4988 23.2144 11.4869 23.9919 11.5719 24.7312C11.6677 25.6009 11.8233 26.4629 12.0375 27.3112C12.1131 27.6044 12.1825 27.9919 12.3831 28.2337C12.5206 28.4 12.9925 28.5431 12.8019 28.5981C13.0681 28.6419 13.5425 28.8906 13.7644 28.7081C14.0569 28.4681 13.9788 27.7294 14.0294 27.3956C14.1813 26.4019 14.6788 25.43 15.35 24.6862C16.0131 23.9525 16.9219 23.4556 17.4819 22.6237C18.0275 21.8125 18.1919 20.7181 17.9656 19.7687V19.7687ZM15.8788 21.4137C15.5038 22.0831 14.6688 22.5312 14.1319 23.0631C13.9863 23.2075 13.6763 23.7075 13.4938 23.5994C13.3631 23.5219 13.3188 22.8731 13.2706 22.7244C13.0224 21.9753 12.5484 21.3215 11.9138 20.8525C11.7181 20.7044 11.2331 20.5119 11.1213 20.3087C10.9963 20.0881 11.1088 19.5675 11.1131 19.3275C11.12 18.9775 10.9606 18.3956 11.0469 18.0775C11.1469 17.7106 10.9544 17.9319 11.2825 17.8594C11.4556 17.8206 12.1706 17.9462 12.3863 17.9912C12.7288 18.0625 12.9175 18.2756 13.1875 18.4912C13.8975 19.0606 14.6794 19.5012 15.475 19.9375C16.0913 20.2787 16.2725 20.7106 15.8788 21.4137Z",fill:e.pointColor}),r.createElement("path",{d:"M11.5288 4.19312C11.825 4.4825 12.1038 4.825 12.5456 4.85375C12.9638 4.88187 13.3581 4.65562 13.7231 4.94C14.1281 5.2525 14.42 5.64812 14.9575 5.74562C15.4775 5.84 16.0281 5.53625 16.1569 5.00437C16.2819 4.4975 16.0125 3.94625 15.9963 3.4375C15.9963 3.36687 16.0344 3.05312 15.9856 3C15.9494 2.96 15.6469 3.005 15.6006 3.00625C15.2619 3.01625 14.924 3.03958 14.5869 3.07625C13.358 3.20926 12.1546 3.5176 11.0131 3.99187C11.165 4.09687 11.3556 4.13875 11.5288 4.19312V4.19312Z",fill:e.pointColor}),r.createElement("path",{d:"M22.275 7.70438C22.8056 7.70438 23.3444 7.46688 23.1731 6.85313C23.0294 6.33875 22.7844 5.78063 22.1881 6.05813C21.8088 6.23438 21.2713 6.68313 21.2269 7.12813C21.1763 7.63313 21.9213 7.70438 22.275 7.70438Z",fill:e.pointColor}),r.createElement("path",{d:"M21.8513 10.39C22.3931 10.7144 23.1969 10.5619 23.6056 10.0987C23.925 9.73625 24.1131 9.10687 24.6875 9.1075C24.9404 9.10697 25.1833 9.20598 25.3638 9.38313C25.6013 9.62875 25.5544 9.85937 25.605 10.1669C25.7181 10.8575 26.4588 10.2063 26.6519 9.93875C26.7769 9.76438 26.9463 9.50563 26.8894 9.27875C26.8369 9.06688 26.5894 8.84125 26.4794 8.64688C26.1581 8.08438 25.8938 7.43 25.4125 6.97562C24.9494 6.53812 24.38 6.58875 23.9406 7.04312C23.5806 7.41812 23.1625 7.715 22.9163 8.17125C22.7425 8.49188 22.5469 8.645 22.195 8.72812C22.0013 8.77375 21.78 8.79062 21.6175 8.92062C21.165 9.27687 21.4225 10.1325 21.8513 10.39V10.39Z",fill:e.pointColor}),r.createElement("path",{d:"M29 16C29 8.82062 23.1794 3 16 3C8.82064 3 3.00002 8.82062 3.00002 16C3.00002 23.1794 8.82064 29 16 29C23.1794 29 29 23.1794 29 16Z",stroke:e.color,"stroke-width":"2","stroke-miterlimit":"10"}))}function l(e){return r.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("mask",{id:"path-1-inside-1",fill:"white"},r.createElement("path",{d:"M14.2778 3C19.5746 3 30.1667 4.3 30.1667 16C30.1667 27.7 19.5746 29 14.2778 29"})),r.createElement("path",{d:"M14.2778 5C16.8276 5 20.3928 5.32494 23.2582 6.8723C24.659 7.62875 25.8605 8.66005 26.7205 10.0728C27.5786 11.4824 28.1667 13.3863 28.1667 16H32.1667C32.1667 12.7636 31.4307 10.1176 30.1372 7.99285C28.8457 5.8712 27.0681 4.38375 25.1588 3.3527C21.404 1.32506 17.0248 1 14.2778 1V5ZM28.1667 16C28.1667 18.6136 27.5786 20.5176 26.7205 21.9272C25.8605 23.34 24.659 24.3712 23.2582 25.1277C20.3928 26.6751 16.8276 27 14.2778 27V31C17.0248 31 21.404 30.6749 25.1588 28.6473C27.0681 27.6163 28.8457 26.1288 30.1372 24.0071C31.4307 21.8824 32.1667 19.2363 32.1667 16H28.1667Z",fill:e.color,mask:"url(#path-1-inside-1)"}),r.createElement("path",{d:"M3 16C3 22.682 8.10232 28 14.2778 28C20.4532 28 25.5556 22.682 25.5556 16C25.5556 9.31796 20.4532 4 14.2778 4C8.10232 4 3 9.31796 3 16Z",stroke:e.color,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),r.createElement("path",{d:"M18.6905 20.0569V22.5064C18.6905 22.5345 18.6609 22.5535 18.6349 22.5423L16.6971 21.68C16.6964 21.6793 16.6957 21.6793 16.6943 21.6793C16.657 21.6667 16.6042 21.6392 16.5683 21.6273C16.2959 21.5076 16.1122 21.2324 16.0953 20.9234C16.0953 20.9227 16.0953 20.9213 16.0953 20.9206C16.0953 20.8593 16.0953 18.7639 16.0953 18.7639C16.0686 17.5617 14.2744 17.5645 14.2526 18.7724C14.2421 19.1095 14.2407 19.4551 14.2498 19.793C14.266 20.0569 14.0767 20.2343 13.8873 20.3765C13.4467 20.6911 12.8857 20.8284 12.3473 20.8636C12.3128 20.8657 12.2924 20.8263 12.3142 20.7995C12.8752 20.0992 12.6119 19.1539 12.0545 18.5127C11.4344 17.8334 11.2169 16.5658 11.447 15.4304C11.6772 14.2951 12.2677 13.5201 13.1743 12.9542C14.6383 12.0399 17.2933 12.2884 18.8756 14.4063C19.0664 14.621 19.2846 14.8026 19.5738 14.8983C19.6104 14.9103 19.6097 14.9624 19.5731 14.9729C17.9479 15.4304 16.9491 16.879 17.4397 18.6612C17.5136 18.8956 17.6664 19.1109 17.8825 19.2369C17.9803 19.2954 18.1 19.3221 18.1978 19.3756C18.4779 19.4938 18.668 19.7479 18.6898 20.0541C18.6905 20.0548 18.6905 20.0562 18.6905 20.0569Z",fill:e.pointColor}),r.createElement("path",{d:"M19.8033 16.9522C19.1304 16.8755 18.4406 17.126 17.9761 17.573C17.9521 17.5955 17.9162 17.5758 17.9191 17.5427C18.0007 16.5644 18.839 15.8007 19.6372 15.612C19.6668 15.605 19.6907 15.6331 19.6773 15.6599C19.5084 15.9984 19.6147 16.6052 19.8329 16.898C19.8512 16.9219 19.8329 16.9557 19.8033 16.9522Z",fill:e.pointColor}),r.createElement("path",{d:"M21.2575 11.3839C20.2214 11.0123 18.9326 11.6007 18.6666 12.7572C18.637 12.8867 18.485 12.9268 18.378 12.8473C14.4582 9.93114 9.44523 13.1795 10.9367 17.7539C10.9571 17.8165 10.9402 17.8855 10.8931 17.932C9.81546 19.0089 9.66413 20.8474 10.3743 22.1784C10.4665 22.3515 10.2512 22.5268 10.1048 22.3966C7.15133 19.7684 6.66004 15.6113 8.49079 12.4221C11.1092 7.86248 17.641 6.88763 21.456 11.1059C21.577 11.241 21.4278 11.4452 21.2575 11.3839Z",fill:e.pointColor}))}function c(e){return r.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M22.0952 20.5714V9.90476H11.4286",stroke:e.color,"stroke-width":"1.52381","stroke-linecap":"round","stroke-linejoin":"round"}),r.createElement("path",{d:"M22.0952 9.90476L9.90476 22.0952",stroke:e.color,"stroke-width":"1.52381","stroke-linecap":"round","stroke-linejoin":"round"}))}function u(e){return r.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M25.1429 9.90476L25.1429 12.9524C25.1429 14.1648 24.6612 15.3276 23.8039 16.1849C22.9466 17.0422 21.7838 17.5238 20.5714 17.5238L8.38095 17.5238",stroke:e.color,"stroke-width":"1.52381","stroke-linecap":"round","stroke-linejoin":"round"}),r.createElement("path",{d:"M12.9539 12.9524L8.38095 17.5238L12.9539 22.0952",stroke:e.color,"stroke-width":"1.52381","stroke-linecap":"round","stroke-linejoin":"round"}))}},62:function(e,t,n){n.d(t,{m:function(){return h},S:function(){return m}});var r=n(3366),a=n(7294),i=n(2511),o="linkContentsWrapper_2quQ",l="linkTitleWrapper_1VaJ",c="linkTitle_2o4z",u="descriptionWrapper_mSBM",s="linkNoDecoration_1bvz",d=n(6336),C=n(6890),f=["to","title","description"],p=["to","title","description"];function m(e){var t=e.to,n=e.title,p=e.description,m=(0,r.Z)(e,f);return a.createElement(i.Z,{to:t,className:s},a.createElement(C.Z,m,a.createElement("div",{className:o},a.createElement("div",{className:l},a.createElement("h3",{className:c},n),a.createElement(d.BI,{size:24,color:"var(--ifm-color-emphasis-600)"})),p&&a.createElement("div",{className:u},a.createElement("p",null,p)))))}function h(e){var t=e.to,n=e.title,i=e.description,f=(0,r.Z)(e,p);return a.createElement("a",{href:t,target:"_blank",className:s},a.createElement(C.Z,f,a.createElement("div",{className:o},a.createElement("div",{className:l},a.createElement("h3",{className:c},n),a.createElement(d.h0,{size:24,color:"var(--ifm-color-emphasis-600)"})),i&&a.createElement("div",{className:u},a.createElement("p",null,i)))))}},3288:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return d},default:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(4137)),o=n(62),l=["components"],c={sidebar_position:4},u="Buyback and Burn",s={unversionedId:"guide/tokenomics/Buyback and Burn",id:"guide/tokenomics/Buyback and Burn",isDocsHomePage:!1,title:"Buyback and Burn",description:"Objective",source:"@site/docs/guide/tokenomics/Buyback and Burn.md",sourceDirName:"guide/tokenomics",slug:"/guide/tokenomics/Buyback and Burn",permalink:"/docs/guide/tokenomics/Buyback and Burn",editUrl:"https://github.com/smatoos/docs.denations.com/edit/master/website/docs/guide/tokenomics/Buyback and Burn.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guideSidebar",previous:{title:"SMTS Token",permalink:"/docs/guide/tokenomics/SMTS Token"},next:{title:"Nation Ownership NFT",permalink:"/docs/guide/nfts"}},d=[{value:"Objective",id:"objective",children:[]},{value:"Monetary Policy",id:"monetary-policy",children:[{value:"Buyback",id:"buyback",children:[]},{value:"Burn",id:"burn",children:[]},{value:"Inflation",id:"inflation",children:[]}]},{value:"Execution History",id:"execution-history",children:[{value:"Buyback",id:"buyback-1",children:[]},{value:"Burn",id:"burn-1",children:[]}]}],C={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"buyback-and-burn"},"Buyback and Burn"),(0,i.kt)("h2",{id:"objective"},"Objective"),(0,i.kt)("p",null,"To support the value of DENA, the key token of DeNations, we operate the following monetary policy. "),(0,i.kt)("h2",{id:"monetary-policy"},"Monetary Policy"),(0,i.kt)("h3",{id:"buyback"},"Buyback"),(0,i.kt)("h4",{id:"buyback-budget"},"Buyback Budget"),(0,i.kt)("p",null,"Up to 10% of quarterly Nation Ownership sales (directly sold by DeNations) sold in Ether may be used as a quarterly buyback budget for the next quarter, when it is regarded as DENA is underpriced."),(0,i.kt)("p",null,"For instance, if accumulated Ether sales of 2021 1Q (January ~ March)sold by DeNations was 100 Ether, then DeNations may use up to 10 ETH as buyback budget of 2021 2Q (April ~ June)."),(0,i.kt)("h4",{id:"buyback-execution-timing"},"Buyback execution timing"),(0,i.kt)("p",null,"Buyback execution may happen at arbitrary times at our discretion without prior notice to prevent abusing activity of arbitrage players. Buyback frequency may be also arbitrary."),(0,i.kt)("h3",{id:"burn"},"Burn"),(0,i.kt)("p",null,"Platform fees (NFT registration fee, NFT upgrade)that users have paid in terms of DENA will be collected and burned monthly."),(0,i.kt)("h3",{id:"inflation"},"Inflation"),(0,i.kt)("p",null,"A perpetual inflation rate of 1~5% per year will begin after 4 years, ensuring continued participation of users at the expense of passive DENA holders. A proper inflation rate can motivate platform activities, thereby increasing platform value and eventually increasing DENA\u2019s value."),(0,i.kt)("p",null,"1) 100% of newly minted DENA will be allocated to community reward"),(0,i.kt)("p",null,"2) The default inflation rate is set to 3%"),(0,i.kt)("p",null,"3) Holders of DENA can vote to change the inflation rate from 1% to 5%.(requires \u2154 agreement with at least 4% of circulating DENA participating)"),(0,i.kt)("h2",{id:"execution-history"},"Execution History"),(0,i.kt)("h3",{id:"buyback-1"},"Buyback"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"1st ETH OUT: 5\n1st DENA IN: 1,6226.33\nDENA IN Price: 6.526232603\nDENA Price (Before): 6.2847\nDENA Price (After):\xa06.63\nPrice Increase Rate: 5.49%\n\nTxHash: 0x5ca505f63597c306404638f33ad53698f4345f4d6271857bd0e75e0163073a32\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"2nd ETH OUT: 5\n2nd DENA IN: 1,516.84\nDENA IN Price: 6.997309582\nDENA Price (Before): 6.6758\nDENA Price (After):\xa07.06\nPrice Increase Rate: 5.76%\n\nTxHash: 0x971bd63fb1678a31b6fd908c3b79da402558d59b43ed41c57d7c23d3052494f5\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"3rd ETH OUT: 5 ETH\n3rd DENA IN: 2,005.41 \n\nTxHash: 0x40ed55e36b43d1ee173441713893b2f8a106a1984ad0da9a0c2f8a85778c8b90\n")),(0,i.kt)("h3",{id:"burn-1"},"Burn"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"1st Burn TxHash ",(0,i.kt)("strong",{parentName:"p"},"(344 DENA):")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"https://etherscan.io/tx/0x0a7d16c3f4e8297a0ad625badd10a6d7a16aa33ba3b5ad028bdedbfdfa03c6f9"},"0x0a7d16c3f4e8297a0ad625badd10a6d7a16aa33ba3b5ad028bdedbfdfa03c6f9"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"2nd Burn TxHash ",(0,i.kt)("strong",{parentName:"p"},"(1,700 DENA):")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"https://etherscan.io/tx/0x0a7d16c3f4e8297a0ad625badd10a6d7a16aa33ba3b5ad028bdedbfdfa03c6f9"},"0x0a7d16c3f4e8297a0ad625badd10a6d7a16aa33ba3b5ad028bdedbfdfa03c6f9"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"3rd Burn TxHash ",(0,i.kt)("strong",{parentName:"p"},"(3,161 DENA = $15,046 USD Value)"),' "'),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"https://www.notion.so/a106a1984ad0da9a0c2f8a85778c8b90"},"tx/0x40ed55e36b43d1ee173441713893b2f8a106a1984ad0da9a0c2f8a85778c8b90")))),(0,i.kt)(o.m,{title:"Check the recent post",to:"https://smatoos.medium.com/dena-buyback-burn-up-to-50-of-total-supply-131eae0905de",style:{margin:"1rem 0"},mdxType:"ExternalLinkCard"}))}f.isMDXComponent=!0}}]);