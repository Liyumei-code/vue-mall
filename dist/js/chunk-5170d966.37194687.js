(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5170d966"],{"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==a.call(t)?c(t):i(n(t))}},"159b":function(t,e,r){var n=r("da84"),i=r("fdbc"),a=r("17c2"),o=r("9112");for(var c in i){var s=n[c],u=s&&s.prototype;if(u&&u.forEach!==a)try{o(u,"forEach",a)}catch(f){u.forEach=a}}},"15da":function(t,e,r){"use strict";var n=r("e2ac"),i=r.n(n);i.a},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,i=r("b301");t.exports=i("forEach")?function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},"1dde":function(t,e,r){var n=r("d039"),i=r("b622"),a=r("60ae"),o=i("species");t.exports=function(t){return a>=51||!n((function(){var e=[],r=e.constructor={};return r[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1e7d":function(t,e,r){"use strict";var n=r("f303"),i=r.n(n);i.a},"25e2":function(t,e,r){},"2e00":function(t,e,r){"use strict";var n=r("6074"),i=r.n(n);i.a},4160:function(t,e,r){"use strict";var n=r("23e7"),i=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"4de4":function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").filter,a=r("1dde");n({target:"Array",proto:!0,forced:!a("filter")},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},6074:function(t,e,r){},"703f":function(t,e,r){},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),a=r("c032"),o=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||o(e,t,{value:a.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),i=r("9bf2"),a=r("5c6c");t.exports=function(t,e,r){var o=n(e);o in t?i.f(t,o,a(0,r)):t[o]=r}},"99af":function(t,e,r){"use strict";var n=r("23e7"),i=r("d039"),a=r("e8b5"),o=r("861d"),c=r("7b0b"),s=r("50c4"),u=r("8418"),f=r("65f0"),l=r("1dde"),d=r("b622"),b=r("60ae"),g=d("isConcatSpreadable"),y=9007199254740991,h="Maximum allowed index exceeded",p=b>=51||!i((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),m=l("concat"),v=function(t){if(!o(t))return!1;var e=t[g];return void 0!==e?!!e:a(t)},O=!p||!m;n({target:"Array",proto:!0,forced:O},{concat:function(t){var e,r,n,i,a,o=c(this),l=f(o,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(a=-1===e?o:arguments[e],v(a)){if(i=s(a.length),d+i>y)throw TypeError(h);for(r=0;r<i;r++,d++)r in a&&u(l,d,a[r])}else{if(d>=y)throw TypeError(h);u(l,d++,a)}return l.length=d,l}})},"9bd0":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tab-control"},t._l(t.titles,(function(e,n){return r("div",{key:n,staticClass:"tab-control-item",class:{active:t.currentIndex===n},on:{click:function(e){return t.itemClick(n)}}},[r("span",[t._v(t._s(e))])])})),0)},i=[],a={name:"TabControl",props:{titles:{type:Array,default:function(){return[]}}},data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("tabClick",t)}}},o=a,c=(r("2e00"),r("2877")),s=Object(c["a"])(o,n,i,!1,null,"71a7ae76",null);e["a"]=s.exports},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),a=r("d066"),o=r("c430"),c=r("83ab"),s=r("4930"),u=r("fdbf"),f=r("d039"),l=r("5135"),d=r("e8b5"),b=r("861d"),g=r("825a"),y=r("7b0b"),h=r("fc6a"),p=r("c04e"),m=r("5c6c"),v=r("7c73"),O=r("df75"),S=r("241c"),w=r("057f"),C=r("7418"),x=r("06cf"),j=r("9bf2"),D=r("d1e7"),_=r("9112"),L=r("6eeb"),T=r("5692"),k=r("f772"),P=r("d012"),E=r("90e3"),I=r("b622"),M=r("c032"),N=r("746f"),V=r("d44e"),G=r("69f3"),A=r("b727").forEach,$=k("hidden"),R="Symbol",F="prototype",H=I("toPrimitive"),J=G.set,W=G.getterFor(R),B=Object[F],K=i.Symbol,q=a("JSON","stringify"),Q=x.f,z=j.f,U=w.f,X=D.f,Y=T("symbols"),Z=T("op-symbols"),tt=T("string-to-symbol-registry"),et=T("symbol-to-string-registry"),rt=T("wks"),nt=i.QObject,it=!nt||!nt[F]||!nt[F].findChild,at=c&&f((function(){return 7!=v(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=Q(B,e);n&&delete B[e],z(t,e,r),n&&t!==B&&z(B,e,n)}:z,ot=function(t,e){var r=Y[t]=v(K[F]);return J(r,{type:R,tag:t,description:e}),c||(r.description=e),r},ct=s&&"symbol"==typeof K.iterator?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof K},st=function(t,e,r){t===B&&st(Z,e,r),g(t);var n=p(e,!0);return g(r),l(Y,n)?(r.enumerable?(l(t,$)&&t[$][n]&&(t[$][n]=!1),r=v(r,{enumerable:m(0,!1)})):(l(t,$)||z(t,$,m(1,{})),t[$][n]=!0),at(t,n,r)):z(t,n,r)},ut=function(t,e){g(t);var r=h(e),n=O(r).concat(gt(r));return A(n,(function(e){c&&!lt.call(r,e)||st(t,e,r[e])})),t},ft=function(t,e){return void 0===e?v(t):ut(v(t),e)},lt=function(t){var e=p(t,!0),r=X.call(this,e);return!(this===B&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,$)&&this[$][e])||r)},dt=function(t,e){var r=h(t),n=p(e,!0);if(r!==B||!l(Y,n)||l(Z,n)){var i=Q(r,n);return!i||!l(Y,n)||l(r,$)&&r[$][n]||(i.enumerable=!0),i}},bt=function(t){var e=U(h(t)),r=[];return A(e,(function(t){l(Y,t)||l(P,t)||r.push(t)})),r},gt=function(t){var e=t===B,r=U(e?Z:h(t)),n=[];return A(r,(function(t){!l(Y,t)||e&&!l(B,t)||n.push(Y[t])})),n};if(s||(K=function(){if(this instanceof K)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),r=function(t){this===B&&r.call(Z,t),l(this,$)&&l(this[$],e)&&(this[$][e]=!1),at(this,e,m(1,t))};return c&&it&&at(B,e,{configurable:!0,set:r}),ot(e,t)},L(K[F],"toString",(function(){return W(this).tag})),D.f=lt,j.f=st,x.f=dt,S.f=w.f=bt,C.f=gt,c&&(z(K[F],"description",{configurable:!0,get:function(){return W(this).description}}),o||L(B,"propertyIsEnumerable",lt,{unsafe:!0}))),u||(M.f=function(t){return ot(I(t),t)}),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:K}),A(O(rt),(function(t){N(t)})),n({target:R,stat:!0,forced:!s},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=K(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!c},{create:ft,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:bt,getOwnPropertySymbols:gt}),n({target:"Object",stat:!0,forced:f((function(){C.f(1)}))},{getOwnPropertySymbols:function(t){return C.f(y(t))}}),q){var yt=!s||f((function(){var t=K();return"[null]"!=q([t])||"{}"!=q({a:t})||"{}"!=q(Object(t))}));n({target:"JSON",stat:!0,forced:yt},{stringify:function(t,e,r){var n,i=[t],a=1;while(arguments.length>a)i.push(arguments[a++]);if(n=e,(b(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),i[1]=e,q.apply(null,i)}})}K[F][H]||_(K[F],H,K[F].valueOf),V(K,R),P[$]=!0},b64b:function(t,e,r){var n=r("23e7"),i=r("7b0b"),a=r("df75"),o=r("d039"),c=o((function(){a(1)}));n({target:"Object",stat:!0,forced:c},{keys:function(t){return a(i(t))}})},bb51:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"category"}},[r("nav-bar",{staticClass:"nav-bar"},[r("div",{attrs:{slot:"center"},slot:"center"},[t._v("商品分类")])]),r("div",{staticClass:"container"},[r("tab-menu",{attrs:{categories:t.categories},on:{selectItem:t.selectItem}}),r("scroll",{ref:"scroll",attrs:{id:"tab-content",data:[t.categoryData]}},[r("div",[r("tab-content-category",{attrs:{subcategories:t.showCategory}}),r("tab-control",{attrs:{titles:["综合","新品","销量"]},on:{tabClick:function(e){return t.tabClick()}}}),r("goods-list",{attrs:{goods:t.showCategoryDetail}})],1)])],1)],1)},i=[],a=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("2fa7")),o=r("a7ac"),c=r("9bd0"),s=r("5d17"),u=r("6d71"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("scroll",{attrs:{id:"tab-menu"}},[r("div",{staticClass:"menu-list"},t._l(t.categories,(function(e,n){return r("div",{key:n,staticClass:"menu-list-item",class:{active:n===t.currentIndex},on:{click:function(e){return t.itemClick(n)}}},[t._v(" "+t._s(e.title)+" ")])})),0)])},l=[],d={name:"TabMenu",props:{categories:{type:Array,default:function(){return[]}}},data:function(){return{currentIndex:0}},components:{Scroll:s["a"]},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("selectItem",t)}}},b=d,g=(r("e65d"),r("2877")),y=Object(g["a"])(b,f,l,!1,null,"a89bf29a",null),h=y.exports,p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.subcategories.list?r("grid-view",{attrs:{cols:3,lineSpace:15,"v-margin":20}},t._l(t.subcategories.list,(function(e,n){return r("div",{key:n,staticClass:"item"},[r("a",{attrs:{href:e.link}},[r("img",{staticClass:"item-img",attrs:{src:e.image,alt:""}}),r("div",{staticClass:"item-text"},[t._v(t._s(e.title))])])])})),0):t._e()],1)},m=[],v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"gridView",staticClass:"grid-view"},[t._t("default")],2)},O=[],S=(r("99af"),r("a9e3"),{name:"GridView",props:{cols:{type:Number,default:3},hMargin:{type:Number,default:8},vMargin:{type:Number,default:8},itemSpace:{type:Number,default:8},lineSpace:{type:Number,default:8}},mounted:function(){setTimeout(this._autoLayout,20)},updated:function(){setTimeout(this._autoLayout,20)},methods:{_autoLayout:function(){var t=this.$refs.gridView,e=t.children;t.style.padding="".concat(this.vMargin,"px ").concat(this.hMargin,"px");for(var r=(t.clientWidth-2*this.hMargin-(this.cols-1)*this.itemSpace)/this.cols,n=0;n<e.length;n++){var i=e[n];i.style.width="".concat(r,"px"),(n+1)%this.cols!==0&&(i.style.marginRight="".concat(this.itemSpace,"px")),n>=this.cols&&(i.style.marginTop="".concat(this.lineSpace,"px"))}}},watch:{}}),w=S,C=(r("f262"),Object(g["a"])(w,v,O,!1,null,"02535f97",null)),x=C.exports,j={name:"TabContentCategory",props:{subcategories:{type:Object,default:function(){return{}}}},components:{GridView:x}},D=j,_=(r("15da"),Object(g["a"])(D,p,m,!1,null,"6329225b",null)),L=_.exports,T=r("1bab");function k(){return Object(T["a"])({url:"/category"})}function P(t){return Object(T["a"])({url:"/subcategory",params:{maitKey:t}})}function E(t,e){return Object(T["a"])({url:"/subcategory/detail",params:{miniWallkey:t,type:e}})}var I=r("b95e"),M=r("eecb");function N(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function V(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?N(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var G={name:"Category",components:{NavBar:o["a"],TabMenu:h,TabControl:c["a"],Scroll:s["a"],GoodsList:u["a"],TabContentCategory:L},data:function(){return{categories:[],categoryData:{},currentIndex:-1}},computed:{showCategory:function(){return-1===this.currentIndex?{}:this.categoryData[this.currentIndex].subCategories},showCategoryDetail:function(){return-1===this.currentIndex?[]:(console.log("aaaa",this.categoryData[this.currentIndex].categoryDetail[this.currentType]),this.categoryData[this.currentIndex].categoryDetail[this.currentType])}},created:function(){this._getCategory()},mixins:[M["c"]],methods:{_getCategory:function(){var t=this;k().then((function(e){t.categories=e.data.category.list;for(var r=0;r<t.categories.length;r++)t.categoryData[r]={subCategories:{},categoryDetail:{pop:[],new:[],sell:[]}};t._getSubcategory(0)}))},_getSubcategory:function(t){var e=this;this.currentIndex=t;var r=this.categories[t].maitKey;console.log(r),P(r).then((function(r){console.log(r),e.categoryData[t].subCategories=r.data,e.categoryData=V({},e.categoryData),e._getCategoryDetail(I["b"]),e._getCategoryDetail(I["a"]),e._getCategoryDetail(I["c"])}))},_getCategoryDetail:function(t){var e=this,r=this.categories[this.currentIndex].miniWallkey;E(r,t).then((function(r){e.categoryData[e.currentIndex].categoryDetail[t]=r,e.categoryData=V({},e.categoryData)}))},selectItem:function(t){this._getSubcategory(t)}}},A=G,$=(r("1e7d"),Object(g["a"])(A,n,i,!1,null,"0fccc861",null));e["default"]=$.exports},c032:function(t,e,r){e.f=r("b622")},dbb4:function(t,e,r){var n=r("23e7"),i=r("83ab"),a=r("56ef"),o=r("fc6a"),c=r("06cf"),s=r("8418");n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,r,n=o(t),i=c.f,u=a(n),f={},l=0;while(u.length>l)r=i(n,e=u[l++]),void 0!==r&&s(f,e,r);return f}})},e2ac:function(t,e,r){},e439:function(t,e,r){var n=r("23e7"),i=r("d039"),a=r("fc6a"),o=r("06cf").f,c=r("83ab"),s=i((function(){o(1)})),u=!c||s;n({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return o(a(t),e)}})},e65d:function(t,e,r){"use strict";var n=r("25e2"),i=r.n(n);i.a},f262:function(t,e,r){"use strict";var n=r("703f"),i=r.n(n);i.a},f303:function(t,e,r){},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-5170d966.37194687.js.map