(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(150),i=a(155),c=a(146),u=a(156);a(161);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(i.a,null),r.a.createElement(c.a,{stylingClass:"subble"},r.a.createElement("h1",null,"Contact Me!")),r.a.createElement(u.a,null))}},146:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(147);t.a=function(e){var t=e.children,a=e.stylingClass;return r.a.createElement("div",{class:a},t)}},147:function(e,t,a){},148:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},149:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return d});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(145),u=a.n(c);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var o=a(148),s=a.n(o);a.d(t,"PageRenderer",function(){return s.a});var m=a(33);a.d(t,"parsePath",function(){return m.a});var f=r.a.createContext({}),d=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},150:function(e,t,a){"use strict";var n=a(151),r=a(0),l=a.n(r),i=a(160),c=a.n(i),u=a(149);a(153);t.a=function(e){var t=e.children;return l.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},l.a.createElement("html",{lang:"en"})),l.a.createElement("body",null,l.a.createElement("div",{className:"bubble"},t)))},data:n})}},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Connor Williams"}}}}},152:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(48),u=a(2),o=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},153:function(e,t,a){},154:function(e,t,a){e.exports=a.p+"static/me-a7badd1facb0631f7343195c4f7ffef8.jpg"},155:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(146),i=a(145),c=a.n(i);a(147);t.a=function(){return r.a.createElement(l.a,{stylingClass:"navBarSubble"},r.a.createElement(l.a,{stylingClass:"navBarItemSubble"},r.a.createElement(c.a,{to:"/"},"Home")),r.a.createElement(l.a,{stylingClass:"navBarItemSubble"},r.a.createElement(c.a,{to:"about/"},"About")),r.a.createElement(l.a,{stylingClass:"navBarItemSubble"},r.a.createElement(c.a,{to:"projects/"},"Projects")),r.a.createElement(l.a,{stylingClass:"navBarItemSubble"},r.a.createElement(c.a,{to:"contact/"},"Contact")))}},156:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=(a(157),a(146));t.a=function(){return r.a.createElement(l.a,{stylingClass:"subble"},r.a.createElement("div",{className:"introSubble"},r.a.createElement("div",{className:"introHeader"},r.a.createElement("h1",null,"Hi! I'm ",r.a.createElement("i",null,"Connor Williams."))),r.a.createElement("div",{class:"introBlurb"},r.a.createElement("img",{src:a(154),alt:"me.jpg"}),r.a.createElement("div",{class:"blurbText"},r.a.createElement("p",null,"I'm a Software Developer from Sydney who recently graduated with a Diploma of Software Development. This is a test blog for me to learn web development and showcase my ",r.a.createElement("a",{href:"/projects/"},"projects.")),r.a.createElement("p",null,r.a.createElement("br",null),"Feel free to learn some more about me ",r.a.createElement("a",{href:"/about/"},"here!"))))))}},157:function(e,t,a){},158:function(e,t,a){"use strict";a(159)("link",function(e){return function(t){return e(this,"a","href",t)}})},159:function(e,t,a){var n=a(6),r=a(16),l=a(25),i=/"/g,c=function(e,t,a,n){var r=String(l(e)),c="<"+t;return""!==a&&(c+=" "+a+'="'+String(n).replace(i,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(c),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},161:function(e,t,a){"use strict";a(158);var n=a(0),r=a.n(n),l=a(146);a(147);t.a=function(e){var t=e.children,a=e.link;return r.a.createElement(l.a,{stylingClass:"projectSubble"},r.a.createElement("a",{href:a},t))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-f519d3aa4605eb685e64.js.map