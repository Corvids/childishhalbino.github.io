(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{144:function(e,t,a){"use strict";a.r(t);a(49);var n=a(0),r=a.n(n),l=a(150),c=a(156),i=(a(174),a(146)),o=function(e){var t=e.children;return r.a.createElement(i.a,{stylingClass:"subble"},r.a.createElement("h1",null," Recent Posts"),t)},u=(a(159),a(175),function(e){var t=e.title,a=e.caption,n=e.date,l=e.link;return r.a.createElement(i.a,{stylingClass:"noShadow"},r.a.createElement("div",{class:"blogPost"},r.a.createElement("div",{class:"postContent"},r.a.createElement("a",{href:l},r.a.createElement("p",null,t)),r.a.createElement("p",{class:"captionText"},a)),r.a.createElement("div",{class:"postDate"},r.a.createElement("p",null,n))))}),s=a(155);a.d(t,"query",function(){return m});var m="4277738921";t.default=function(e){var t=e.data;return r.a.createElement(l.a,null,r.a.createElement(c.a,null),r.a.createElement(s.a,null),r.a.createElement(o,null,t.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.a.createElement(u,{title:t.frontmatter.title,caption:t.frontmatter.caption,date:t.frontmatter.date,link:t.fields.slug})})))}},146:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(147);t.a=function(e){var t=e.children,a=e.stylingClass;return r.a.createElement("div",{class:a},t)}},147:function(e,t,a){},148:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},149:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(145),o=a.n(i);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var u=a(148),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var m=a(33);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},150:function(e,t,a){"use strict";var n=a(151),r=a(0),l=a.n(r),c=a(158),i=a.n(c),o=a(149);a(153);t.a=function(e){var t=e.children;return l.a.createElement(o.StaticQuery,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"I'm a Sydney based Software Developer."},{name:"keywords",content:"sample, something"}]},l.a.createElement("html",{lang:"en"})),l.a.createElement("body",null,l.a.createElement("div",{className:"bubble"},t,l.a.createElement("footer",null,l.a.createElement("p",null,"Site built in Gatsby JS")))))},data:n})}},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Connor Williams"}}}}},152:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(48),o=a(2),u=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},153:function(e,t,a){},154:function(e,t,a){e.exports=a.p+"static/me-a7badd1facb0631f7343195c4f7ffef8.jpg"},155:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(146),c=a(145),i=a.n(c);a(147);t.a=function(){return r.a.createElement(l.a,{stylingClass:"navBarSubble"},r.a.createElement(i.a,{to:"/"},r.a.createElement(l.a,{stylingClass:"navBarItemSubble"},"Home")),r.a.createElement(i.a,{to:"about/"},r.a.createElement(l.a,{stylingClass:"navBarItemSubble"},"About")),r.a.createElement(i.a,{to:"projects/"},r.a.createElement(l.a,{stylingClass:"navBarItemSubble"},"Projects")),r.a.createElement(i.a,{to:"contact/"},r.a.createElement(l.a,{stylingClass:"navBarItemSubble"},"Contact")))}},156:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(145),c=a.n(l),i=(a(157),a(146));t.a=function(){return r.a.createElement(i.a,{stylingClass:"subble"},r.a.createElement("div",{className:"introSubble"},r.a.createElement("div",{className:"introHeader"},r.a.createElement("h1",null,"Hi! I'm ",r.a.createElement("i",null,"Connor Williams."))),r.a.createElement("div",{class:"introBlurb"},r.a.createElement("img",{src:a(154),alt:"me.jpg"}),r.a.createElement("div",{class:"blurbText"},r.a.createElement("p",null,"I'm a Software Developer from Sydney who recently graduated with a Diploma of Software Development. This is a test blog for me to learn web development and showcase my ",r.a.createElement(c.a,{to:"/projects/"},"projects.")),r.a.createElement("p",null,r.a.createElement("br",null),"Feel free to learn some more about me ",r.a.createElement(c.a,{to:"/about/"},"here!"))))))}},157:function(e,t,a){},159:function(e,t,a){"use strict";a(160)("link",function(e){return function(t){return e(this,"a","href",t)}})},160:function(e,t,a){var n=a(6),r=a(16),l=a(25),c=/"/g,i=function(e,t,a,n){var r=String(l(e)),i="<"+t;return""!==a&&(i+=" "+a+'="'+String(n).replace(c,"&quot;")+'"'),i+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(i),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},174:function(e,t,a){},175:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-206f1876bb0ce2a54eec.js.map