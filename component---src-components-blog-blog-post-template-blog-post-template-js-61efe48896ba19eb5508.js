(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{137:function(e,t,a){"use strict";a.r(t),a.d(t,"postQuery",function(){return s});var r=a(0),n=a.n(r),i=a(156),l=a(157),o=a.n(l);a(268);t.default=function(e){console.log(e);var t=e.data.markdownRemark;return t.frontmatter.latestEdit===t.frontmatter.postDate?n.a.createElement(i.a,null,n.a.createElement("div",{className:"postHeader"},n.a.createElement("div",null,n.a.createElement("h1",null,t.frontmatter.title),n.a.createElement("p",null,t.frontmatter.caption)),n.a.createElement("div",{className:"dateWrapper"},n.a.createElement("p",null,"Posted: ",t.frontmatter.postDate))),n.a.createElement(o.a,{className:"blogPostBody",source:t.rawMarkdownBody})):n.a.createElement(i.a,null,n.a.createElement("div",{className:"postHeader"},n.a.createElement("div",null,n.a.createElement("h1",null,t.frontmatter.title),n.a.createElement("p",null,t.frontmatter.caption)),n.a.createElement("div",{className:"dateWrapper"},n.a.createElement("p",null,"Posted: ",t.frontmatter.postDate),n.a.createElement("p",null,"Edited: ",t.frontmatter.latestEdit))),n.a.createElement(o.a,{className:"blogPostBody",source:t.rawMarkdownBody}))};var s="3803534083"},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return A});var r=a(0),n=a.n(r),i=a(4),l=a.n(i),o=a(145),s=a.n(o);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var d=a(147),c=a.n(d);a.d(t,"PageRenderer",function(){return c.a});var u=a(32);a.d(t,"parsePath",function(){return u.a});var f=n.a.createContext({}),A=function(e){return n.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}A.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},147:function(e,t,a){var r;e.exports=(r=a(148))&&r.default||r},148:function(e,t,a){"use strict";a.r(t);a(33);var r=a(0),n=a.n(r),i=a(4),l=a.n(i),o=a(52),s=a(2),d=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=d},150:function(e){e.exports={data:{site:{buildTime:"Friday, February 15th, 2019, 9:13 am"}}}},151:function(e,t,a){},152:function(e,t,a){},153:function(e){e.exports={data:{image:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQDAQX/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAH0sop86mFLWMa6A//EABwQAAMAAQUAAAAAAAAAAAAAAAABAgMRFCIxMv/aAAgBAQABBQJdW04HanLuGVyef2an/8QAFREBAQAAAAAAAAAAAAAAAAAAESD/2gAIAQMBAT8BY//EABYRAQEBAAAAAAAAAAAAAAAAABABEf/aAAgBAgEBPwHCH//EABwQAAEDBQAAAAAAAAAAAAAAAAABAhEQICEyYf/aAAgBAQAGPwIdFM6nVJWz/8QAHRABAAICAgMAAAAAAAAAAAAAAQARITFBUWFxkf/aAAgBAQABPyEFfUEOBHez7Kw2hk7jU1jZFgC/GJvjBVP/2gAMAwEAAgADAAAAEMc4Qv/EABkRAAIDAQAAAAAAAAAAAAAAAAARARAxQf/aAAgBAwEBPxBOjJ2v/8QAGREAAgMBAAAAAAAAAAAAAAAAAAEQESEx/9oACAECAQE/EE70o4j/xAAdEAEBAAMAAgMAAAAAAAAAAAABEQAhMVFhcYGh/9oACAEBAAE/EAIoAK+NYoKsFnMbdwT6ii8RT52TJpoAby73+89XEVBBsw/Rj8PAxzUwkXP/2Q==",aspectRatio:1,src:"/static/0dab95136d3e295cdfbf596b0fd58201/1f83c/blurb.jpg",srcSet:"/static/0dab95136d3e295cdfbf596b0fd58201/5c8a3/blurb.jpg 500w,\n/static/0dab95136d3e295cdfbf596b0fd58201/454b2/blurb.jpg 1000w,\n/static/0dab95136d3e295cdfbf596b0fd58201/1f83c/blurb.jpg 1080w",sizes:"(max-width: 1080px) 100vw, 1080px"}}},blurb:{childMarkdownRemark:{html:"<h1>Hi! I'm Connor Williams</h1>\n<p>I'm a software developer from Sydney. I love programming, video games, and basketball.  </p>\n<p>I'm curious, a fast learner, and I love to build things.</p>\n<p>This is a personal blog / portfolio for my side projects. Feel free to check them out.  </p>\n<p>Currently looking for work.</p>",htmlAst:{type:"root",children:[{type:"element",tagName:"h1",properties:{},children:[{type:"text",value:"Hi! I'm Connor Williams"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I'm a software developer from Sydney. I love programming, video games, and basketball.  "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I'm curious, a fast learner, and I love to build things."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This is a personal blog / portfolio for my side projects. Feel free to check them out.  "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Currently looking for work."}]}],data:{quirksMode:!1}},rawMarkdownBody:"\r\n# Hi! I'm Connor Williams\r\n\r\nI'm a software developer from Sydney. I love programming, video games, and basketball.  \r\n\r\nI'm curious, a fast learner, and I love to build things.\r\n\r\nThis is a personal blog / portfolio for my side projects. Feel free to check them out.  \r\n\r\nCurrently looking for work."}}}}},154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){"use strict";var r=a(150),n=a(0),i=a.n(n),l=a(4),o=a.n(l),s=a(146),d=(a(161),a(151),function(e){var t=e.title,a=e.link;return i.a.createElement(s.Link,{to:a,className:"headerItem"},i.a.createElement("h1",null,t))}),c=(a(152),function(e){e.siteTitle;var t=e.children;return i.a.createElement("div",null,i.a.createElement("header",{className:"header shadow"},i.a.createElement(d,{link:"/",title:"HOME"}),i.a.createElement(d,{link:"/about/",title:"ABOUT"}),i.a.createElement(d,{link:"/projects/",title:"PROJECTS"}),i.a.createElement(d,{link:"/contact/",title:"CONTACT"})),i.a.createElement("div",null,t))});c.propTypes={siteTitle:o.a.string},c.defaultProps={siteTitle:""};var u=c,f=a(153),A=a(162),p=a.n(A),m=(a(154),a(157)),h=a.n(m),g=function(){return i.a.createElement(s.StaticQuery,{query:y,render:function(e){return i.a.createElement("div",{className:"blurb"},i.a.createElement(p.a,{fluid:e.image.childImageSharp.fluid}),i.a.createElement(h.a,{source:e.blurb.childMarkdownRemark.rawMarkdownBody}))},data:f})},y="296956379",b=(a(155),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:E,render:function(e){return i.a.createElement("div",null,i.a.createElement(u,{siteTitle:"Hello."},i.a.createElement("main",null,i.a.createElement("div",{className:"grid"},i.a.createElement("div",{className:"gridItem shadow"},i.a.createElement("div",{className:"children"},t," ")),i.a.createElement("div",{className:"gridItem blurbItem shadow"},i.a.createElement(g,null))))),i.a.createElement("footer",null,i.a.createElement("p",null," Site built with GatsbyJS. Last build: ",e.site.buildTime," ")))},data:r})});b.propTypes={children:o.a.node.isRequired};t.a=b;var E="3265189579"},161:function(e,t,a){"use strict";a(169)("link",function(e){return function(t){return e(this,"a","href",t)}})},162:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var n,i=r(a(7)),l=r(a(53)),o=r(a(167)),s=r(a(168)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,s.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},A=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},p=[];var m=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),p.push([e,t])},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",l=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+r+n+"<img "+o+s+t+l+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=d.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,n=e.onError,i=(0,o.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,s.default)({},i,{onLoad:r,onError:n,ref:t,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});g.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,n=!1,i=t.fadeIn,o=A(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,n=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,n=!1);var s=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:n,fadeIn:i,hasNoScript:s,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,l.default)((0,l.default)(a))),a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:A(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){var e=A(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,l=e.imgStyle,o=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,A=e.placeholderClassName,p=e.fluid,m=e.fixed,y=e.backgroundColor,b=e.Tag,E=e.itemProp,v="boolean"==typeof y?"lightgray":y,w=(0,s.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),S=(0,s.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),B={title:t,alt:this.state.isVisible?"":a,style:w,className:A};if(p){var I=p;return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(I.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/I.aspectRatio+"%"}}),I.base64&&d.default.createElement(g,(0,s.default)({src:I.base64},B)),I.tracedSVG&&d.default.createElement(g,(0,s.default)({src:I.tracedSVG},B)),v&&d.default.createElement(b,{title:t,style:{backgroundColor:v,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,I.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),d.default.createElement("source",{srcSet:I.srcSet,sizes:I.sizes}),d.default.createElement(g,{alt:a,title:t,src:I.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,s.default)({alt:a,title:t},I))}}))}if(m){var R=m,k=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},i);return"inherit"===i.display&&delete k.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:k,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},R.base64&&d.default.createElement(g,(0,s.default)({src:R.base64},B)),R.tracedSVG&&d.default.createElement(g,(0,s.default)({src:R.tracedSVG},B)),v&&d.default.createElement(b,{title:t,style:{backgroundColor:v,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&d.default.createElement("picture",null,R.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),d.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),d.default.createElement(g,{alt:a,title:t,width:R.width,height:R.height,src:R.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,s.default)({alt:a,title:t,width:R.width,height:R.height},R))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),E=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:b,sizes:E,fixed:b,fluid:E,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var v=y;t.default=v},169:function(e,t,a){var r=a(11),n=a(16),i=a(17),l=/"/g,o=function(e,t,a,r){var n=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(l,"&quot;")+'"'),o+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},268:function(e,t,a){}}]);
//# sourceMappingURL=component---src-components-blog-blog-post-template-blog-post-template-js-61efe48896ba19eb5508.js.map