(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("5NKs");t.__esModule=!0,t.default=void 0;var i,n=r(a("v06X")),s=r(a("XEEL")),o=r(a("uDP2")),d=r(a("j8BX")),l=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},m=Object.create({}),h=function(e){var t=u(e),a=p(t);return m[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,S=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function R(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+l+s+o+a+r+t+n+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},N=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=e.ariaHidden,s=l.default.createElement(k,(0,d.default)({src:t},i,{ariaHidden:n}));return a.length>1?l.default.createElement("picture",null,r(a),s):s},k=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));k.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=p(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,S=e.itemProp,w=e.loading,R=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,d.default)({opacity:O?1:0,transition:z?"opacity "+y+"ms":"none"},o),T="boolean"==typeof b?"lightgray":b,x={transitionDelay:y+"ms"},P=(0,d.default)({opacity:this.state.imgLoaded?0:1},z&&x,{},o,{},f),q={title:t,alt:this.state.isVisible?"":a,style:P,className:p,itemProp:S};if(m){var _=m,j=g(m);return l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),T&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&x)}),j.base64&&l.default.createElement(N,{ariaHidden:!0,src:j.base64,spreadProps:q,imageVariants:_,generateSources:L}),j.tracedSVG&&l.default.createElement(N,{ariaHidden:!0,src:j.tracedSVG,spreadProps:q,imageVariants:_,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,E(_),l.default.createElement(k,{alt:a,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:R})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,d.default)({alt:a,title:t,loading:w},j,{imageVariants:_}))}}))}if(h){var H=h,M=g(h),U=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete U.display,l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:U,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},T&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:T,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},z&&x)}),M.base64&&l.default.createElement(N,{ariaHidden:!0,src:M.base64,spreadProps:q,imageVariants:H,generateSources:L}),M.tracedSVG&&l.default.createElement(N,{ariaHidden:!0,src:M.tracedSVG,spreadProps:q,imageVariants:H,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,E(H),l.default.createElement(k,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:R})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,d.default)({alt:a,title:t,loading:w},M,{imageVariants:H}))}}))}return null},t}(l.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),T=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});z.propTypes={resolutions:V,sizes:T,fixed:c.default.oneOfType([V,c.default.arrayOf(V)]),fluid:c.default.oneOfType([T,c.default.arrayOf(T)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var x=z;t.default=x},"E8R+":function(e,t,a){},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},XybF:function(e,t,a){e.exports={bannerImgContainer:"post-module--bannerImgContainer--2EOq4",bannerImg:"post-module--bannerImg--21NV6",blogArticle:"post-module--blogArticle--3ImmI"}},tKyt:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return y}));a("M7k7");var r=a("Ol7k"),i=a("q1tI"),n=a.n(i),s=a("9eSz"),o=a.n(s),d=a("U4IR"),l=a("kuUC"),c=a("JkAW"),u=(a("a1Th"),a("Btvt"),a("I5cv"),a("obyI")),f=a.n(u);var p=function(e){var t,a;a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r;r=i;function i(){return e.apply(this,arguments)||this}var s=i.prototype;return s.componentDidMount=function(){var e,t,a=this,r=this.props,i=r.pageCanonicalUrl,n=r.pageId;window.DISQUS?window.DISQUS.reset({reload:!0,config:function(){this.page.url=i,this.page.identifier=n}}):(window.disqus_config=function(){a.page.url=i,a.page.identifier=n},e=document,(t=e.createElement("script")).src=f.a.disqusScript,t.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(t))},s.render=function(){return n.a.createElement("div",null,n.a.createElement("div",{id:"disqus_thread"}))},i}(n.a.Component),g=a("Rt21"),m=a.n(g),h=(a("E8R+"),a("wpW0"),a("XybF")),b=a.n(h),y="2369135345";t.default=function(e){var t=e.data.markdownRemark,a=t.html,i=t.frontmatter,s=i.title,u=i.cover.childImageSharp.fluid,g=i.excerpt,h=i.path,y=m.a.resolvePageUrl(f.a.siteUrl,f.a.pathPrefix,h);return n.a.createElement(r.a,{className:"outerPadding"},n.a.createElement(r.a,{className:"container"},n.a.createElement(c.a,{title:s,description:g,path:h,keywords:["Rolwin","Reevan","Monteiro","FullStack developer","Javascript","ReactJS","NodeJS","Gatsby","technology"]}),n.a.createElement(d.a,null),n.a.createElement(l.b,null,n.a.createElement("div",{className:"marginTopTitle"},n.a.createElement("h1",null,s),n.a.createElement("div",{className:b.a.bannerImgContainer},n.a.createElement(o.a,{className:b.a.bannerImg,fluid:u,title:g,alt:s})),n.a.createElement("article",{className:b.a.blogArticle,dangerouslySetInnerHTML:{__html:a}}),n.a.createElement(p,{pageCanonicalUrl:y,pageId:s})))))}},wpW0:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-post-post-jsx-53b5643023620a41dccd.js.map