(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(277),o=a(146),A=(a(278),function(e){var t=e.data,a=t.frontmatter;return r.a.createElement(o.Link,{to:t.fields.slug},r.a.createElement("div",{className:"blogSlug shadow"},r.a.createElement("div",{className:"titleCaptionContainer"},r.a.createElement("h2",null,a.title),r.a.createElement("p",null,a.caption)),r.a.createElement("h2",null,a.latestEdit)))}),l=(a(279),function(){return r.a.createElement(o.StaticQuery,{query:s,render:function(e){return r.a.createElement("div",{className:"blogCollator"},r.a.createElement("div",{className:"blogCollatorHeader"},r.a.createElement("h1",null,"My ",e.allMarkdownRemark.totalCount," Most Recent Blog Posts")),e.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.a.createElement(A,{key:t.id,data:t})}))},data:i})}),s="1093279277",c=a(156),d=a(159);t.default=function(){return r.a.createElement(c.a,null,r.a.createElement(d.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement(l,null))}},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),A=a(145),l=a.n(A);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return A.withPrefix}),a.d(t,"navigate",function(){return A.navigate}),a.d(t,"push",function(){return A.push}),a.d(t,"replace",function(){return A.replace}),a.d(t,"navigateTo",function(){return A.navigateTo});var s=a(147),c=a.n(s);a.d(t,"PageRenderer",function(){return c.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var u=r.a.createContext({}),m=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,a){var n;e.exports=(n=a(148))&&n.default||n},148:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),A=a(52),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(A.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},150:function(e){e.exports={data:{site:{buildTime:"Friday, February 15th, 2019, 8:24 am"}}}},151:function(e,t,a){},152:function(e,t,a){},153:function(e){e.exports={data:{image:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQDAQX/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAH0sop86mFLWMa6A//EABwQAAMAAQUAAAAAAAAAAAAAAAABAgMRFCIxMv/aAAgBAQABBQJdW04HanLuGVyef2an/8QAFREBAQAAAAAAAAAAAAAAAAAAESD/2gAIAQMBAT8BY//EABYRAQEBAAAAAAAAAAAAAAAAABABEf/aAAgBAgEBPwHCH//EABwQAAEDBQAAAAAAAAAAAAAAAAABAhEQICEyYf/aAAgBAQAGPwIdFM6nVJWz/8QAHRABAAICAgMAAAAAAAAAAAAAAQARITFBUWFxkf/aAAgBAQABPyEFfUEOBHez7Kw2hk7jU1jZFgC/GJvjBVP/2gAMAwEAAgADAAAAEMc4Qv/EABkRAAIDAQAAAAAAAAAAAAAAAAARARAxQf/aAAgBAwEBPxBOjJ2v/8QAGREAAgMBAAAAAAAAAAAAAAAAAAEQESEx/9oACAECAQE/EE70o4j/xAAdEAEBAAMAAgMAAAAAAAAAAAABEQAhMVFhcYGh/9oACAEBAAE/EAIoAK+NYoKsFnMbdwT6ii8RT52TJpoAby73+89XEVBBsw/Rj8PAxzUwkXP/2Q==",aspectRatio:1,src:"/static/0dab95136d3e295cdfbf596b0fd58201/1f83c/blurb.jpg",srcSet:"/static/0dab95136d3e295cdfbf596b0fd58201/5c8a3/blurb.jpg 500w,\n/static/0dab95136d3e295cdfbf596b0fd58201/454b2/blurb.jpg 1000w,\n/static/0dab95136d3e295cdfbf596b0fd58201/1f83c/blurb.jpg 1080w",sizes:"(max-width: 1080px) 100vw, 1080px"}}},blurb:{childMarkdownRemark:{html:"<h1>Hi! I'm Connor Williams</h1>\n<p>I'm a software developer from Sydney. I love programming, video games, and basketball.  </p>\n<p>I'm curious, a fast learner, and I love to build things.</p>\n<p>This is a personal blog / portfolio for my side projects. Feel free to check them out.  </p>\n<p>Currently looking for work.</p>",htmlAst:{type:"root",children:[{type:"element",tagName:"h1",properties:{},children:[{type:"text",value:"Hi! I'm Connor Williams"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I'm a software developer from Sydney. I love programming, video games, and basketball.  "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I'm curious, a fast learner, and I love to build things."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This is a personal blog / portfolio for my side projects. Feel free to check them out.  "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Currently looking for work."}]}],data:{quirksMode:!1}},rawMarkdownBody:"\r\n# Hi! I'm Connor Williams\r\n\r\nI'm a software developer from Sydney. I love programming, video games, and basketball.  \r\n\r\nI'm curious, a fast learner, and I love to build things.\r\n\r\nThis is a personal blog / portfolio for my side projects. Feel free to check them out.  \r\n\r\nCurrently looking for work."}}}}},154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){"use strict";var n=a(150),r=a(0),i=a.n(r),o=a(4),A=a.n(o),l=a(146),s=(a(161),a(151),function(e){var t=e.title,a=e.link;return i.a.createElement(l.Link,{to:a,className:"headerItem"},i.a.createElement("h1",null,t))}),c=(a(152),function(e){e.siteTitle;var t=e.children;return i.a.createElement("div",null,i.a.createElement("header",{className:"header shadow"},i.a.createElement(s,{link:"/",title:"HOME"}),i.a.createElement(s,{link:"/about/",title:"ABOUT"}),i.a.createElement(s,{link:"/projects/",title:"PROJECTS"}),i.a.createElement(s,{link:"/contact/",title:"CONTACT"})),i.a.createElement("div",null,t))});c.propTypes={siteTitle:A.a.string},c.defaultProps={siteTitle:""};var d=c,u=a(153),m=a(162),p=a.n(m),f=(a(154),a(157)),g=a.n(f),y=function(){return i.a.createElement(l.StaticQuery,{query:h,render:function(e){return i.a.createElement("div",{className:"blurb"},i.a.createElement(p.a,{fluid:e.image.childImageSharp.fluid}),i.a.createElement(g.a,{source:e.blurb.childMarkdownRemark.rawMarkdownBody}))},data:u})},h="296956379",E=(a(155),function(e){var t=e.children;return i.a.createElement(l.StaticQuery,{query:b,render:function(e){return i.a.createElement("div",null,i.a.createElement(d,{siteTitle:"Hello."},i.a.createElement("main",null,i.a.createElement("div",{className:"grid"},i.a.createElement("div",{className:"gridItem shadow"},i.a.createElement("div",{className:"children"},t," ")),i.a.createElement("div",{className:"gridItem blurbItem shadow"},i.a.createElement(y,null))))),i.a.createElement("footer",null,i.a.createElement("p",null," Site built with GatsbyJS. Last build: ",e.site.buildTime," ")))},data:n})});E.propTypes={children:A.a.node.isRequired};t.a=E;var b="3265189579"},159:function(e,t,a){"use strict";var n=a(160),r=a(0),i=a.n(r),o=a(4),A=a.n(o),l=a(164),s=a.n(l),c=a(146);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,A=e.title;return i.a.createElement(c.StaticQuery,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:A,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:A},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:A},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:A.a.string,lang:A.a.string,meta:A.a.array,keywords:A.a.arrayOf(A.a.string),title:A.a.string.isRequired},t.a=d;var u="1025518380"},160:function(e){e.exports={data:{site:{siteMetadata:{title:"ChildishhAlbino",description:"A personal blog/portfolio for Connor Williams.",author:"@gatsbyjs"}}}}},277:function(e){e.exports={data:{allMarkdownRemark:{totalCount:2,edges:[{node:{id:"40d8a65f-bf0d-5d51-bfcc-481828ab06e3",frontmatter:{title:"LCS Week 2 Predictions:",postDate:"Saturday, February 2nd, 2019, 9:18 pm",latestEdit:"Saturday, February 2nd, 2019, 9:18 pm",caption:"and my reasons behind them."},fields:{slug:"/posts/Week 2 LCS Predictions/"}}},{node:{id:"3fded309-2004-57a9-843c-ffde36e03783",frontmatter:{title:"GatsbyJS:",postDate:"Friday, November 2nd, 2018, 2:17 am",latestEdit:"Wednesday, January 30th, 2019, 12:19 am",caption:"and my experience with web design / development."},fields:{slug:"/posts/GatsbyJS and Web development/"}}}]}}}},278:function(e,t,a){},279:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-45f9c7e4570a7ff10ce4.js.map