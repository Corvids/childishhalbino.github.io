(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{141:function(e,t,a){"use strict";a.r(t);var n=a(280),r=a(0),i=a.n(r),o=a(175),l=a(156),A=a(159),s=a(146);t.default=function(){return i.a.createElement(s.StaticQuery,{query:c,render:function(e){var t=e.allMarkdownRemark.edges;return i.a.createElement(l.a,null,i.a.createElement(A.a,{title:"Home",keywords:["gatsby","application","react"]}),i.a.createElement("h1",null,"PROJECTS"),i.a.createElement(o.a,{styling:"projects",cards:t}))},data:n})};var c="2956157395"},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(145),A=a.n(l);a.d(t,"Link",function(){return A.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(147),c=a.n(s);a.d(t,"PageRenderer",function(){return c.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var u=r.a.createContext({}),m=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,a){var n;e.exports=(n=a(148))&&n.default||n},148:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(52),A=a(2),s=function(e){var t=e.location,a=A.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},150:function(e){e.exports={data:{site:{buildTime:"Friday, February 15th, 2019, 8:24 am"}}}},151:function(e,t,a){},152:function(e,t,a){},153:function(e){e.exports={data:{image:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQDAQX/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAH0sop86mFLWMa6A//EABwQAAMAAQUAAAAAAAAAAAAAAAABAgMRFCIxMv/aAAgBAQABBQJdW04HanLuGVyef2an/8QAFREBAQAAAAAAAAAAAAAAAAAAESD/2gAIAQMBAT8BY//EABYRAQEBAAAAAAAAAAAAAAAAABABEf/aAAgBAgEBPwHCH//EABwQAAEDBQAAAAAAAAAAAAAAAAABAhEQICEyYf/aAAgBAQAGPwIdFM6nVJWz/8QAHRABAAICAgMAAAAAAAAAAAAAAQARITFBUWFxkf/aAAgBAQABPyEFfUEOBHez7Kw2hk7jU1jZFgC/GJvjBVP/2gAMAwEAAgADAAAAEMc4Qv/EABkRAAIDAQAAAAAAAAAAAAAAAAARARAxQf/aAAgBAwEBPxBOjJ2v/8QAGREAAgMBAAAAAAAAAAAAAAAAAAEQESEx/9oACAECAQE/EE70o4j/xAAdEAEBAAMAAgMAAAAAAAAAAAABEQAhMVFhcYGh/9oACAEBAAE/EAIoAK+NYoKsFnMbdwT6ii8RT52TJpoAby73+89XEVBBsw/Rj8PAxzUwkXP/2Q==",aspectRatio:1,src:"/static/0dab95136d3e295cdfbf596b0fd58201/1f83c/blurb.jpg",srcSet:"/static/0dab95136d3e295cdfbf596b0fd58201/5c8a3/blurb.jpg 500w,\n/static/0dab95136d3e295cdfbf596b0fd58201/454b2/blurb.jpg 1000w,\n/static/0dab95136d3e295cdfbf596b0fd58201/1f83c/blurb.jpg 1080w",sizes:"(max-width: 1080px) 100vw, 1080px"}}},blurb:{childMarkdownRemark:{html:"<h1>Hi! I'm Connor Williams</h1>\n<p>I'm a software developer from Sydney. I love programming, video games, and basketball.  </p>\n<p>I'm curious, a fast learner, and I love to build things.</p>\n<p>This is a personal blog / portfolio for my side projects. Feel free to check them out.  </p>\n<p>Currently looking for work.</p>",htmlAst:{type:"root",children:[{type:"element",tagName:"h1",properties:{},children:[{type:"text",value:"Hi! I'm Connor Williams"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I'm a software developer from Sydney. I love programming, video games, and basketball.  "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I'm curious, a fast learner, and I love to build things."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This is a personal blog / portfolio for my side projects. Feel free to check them out.  "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Currently looking for work."}]}],data:{quirksMode:!1}},rawMarkdownBody:"\r\n# Hi! I'm Connor Williams\r\n\r\nI'm a software developer from Sydney. I love programming, video games, and basketball.  \r\n\r\nI'm curious, a fast learner, and I love to build things.\r\n\r\nThis is a personal blog / portfolio for my side projects. Feel free to check them out.  \r\n\r\nCurrently looking for work."}}}}},154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){"use strict";var n=a(150),r=a(0),i=a.n(r),o=a(4),l=a.n(o),A=a(146),s=(a(161),a(151),function(e){var t=e.title,a=e.link;return i.a.createElement(A.Link,{to:a,className:"headerItem"},i.a.createElement("h1",null,t))}),c=(a(152),function(e){e.siteTitle;var t=e.children;return i.a.createElement("div",null,i.a.createElement("header",{className:"header shadow"},i.a.createElement(s,{link:"/",title:"HOME"}),i.a.createElement(s,{link:"/about/",title:"ABOUT"}),i.a.createElement(s,{link:"/projects/",title:"PROJECTS"}),i.a.createElement(s,{link:"/contact/",title:"CONTACT"})),i.a.createElement("div",null,t))});c.propTypes={siteTitle:l.a.string},c.defaultProps={siteTitle:""};var d=c,u=a(153),m=a(162),p=a.n(m),f=(a(154),a(157)),h=a.n(f),g=function(){return i.a.createElement(A.StaticQuery,{query:y,render:function(e){return i.a.createElement("div",{className:"blurb"},i.a.createElement(p.a,{fluid:e.image.childImageSharp.fluid}),i.a.createElement(h.a,{source:e.blurb.childMarkdownRemark.rawMarkdownBody}))},data:u})},y="296956379",b=(a(155),function(e){var t=e.children;return i.a.createElement(A.StaticQuery,{query:E,render:function(e){return i.a.createElement("div",null,i.a.createElement(d,{siteTitle:"Hello."},i.a.createElement("main",null,i.a.createElement("div",{className:"grid"},i.a.createElement("div",{className:"gridItem shadow"},i.a.createElement("div",{className:"children"},t," ")),i.a.createElement("div",{className:"gridItem blurbItem shadow"},i.a.createElement(g,null))))),i.a.createElement("footer",null,i.a.createElement("p",null," Site built with GatsbyJS. Last build: ",e.site.buildTime," ")))},data:n})});b.propTypes={children:l.a.node.isRequired};t.a=b;var E="3265189579"},159:function(e,t,a){"use strict";var n=a(160),r=a(0),i=a.n(r),o=a(4),l=a.n(o),A=a(164),s=a.n(A),c=a(146);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title;return i.a.createElement(c.StaticQuery,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d;var u="1025518380"},160:function(e){e.exports={data:{site:{siteMetadata:{title:"ChildishhAlbino",description:"A personal blog/portfolio for Connor Williams.",author:"@gatsbyjs"}}}}},175:function(e,t,a){"use strict";a(74),a(54),a(176);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=(a(178),a(157)),A=a.n(l),s=a(179),c=function(e){function t(t){var a;a=e.call(this,t)||this;var n=Object.values(t.cards),r=[];return n.forEach(function(e){r.push(e.node)}),a.state={cards:r,selected:r[0],styling:t.styling},a}r()(t,e);var a=t.prototype;return a.render=function(){var e=this;return o.a.createElement("div",{className:"aboutCardGrid"},o.a.createElement("div",{className:"arrows"},o.a.createElement("div",{onClick:function(){e.back()},className:"arrow"},o.a.createElement(s.a,null)),o.a.createElement("p",null,"Click to scroll between cards!"),o.a.createElement("div",{onClick:function(){e.forward()},className:"arrow"},o.a.createElement(s.b,null))),o.a.createElement("div",{className:"cards alignLeft"},o.a.createElement(A.a,{className:this.state.styling,source:this.state.selected.rawMarkdownBody})))},a.back=function(){var e=this.state.cards,t=e.indexOf(this.state.selected),a=e.length;0===t?t=a-1:t-=1,this.setState({selected:e[t]})},a.forward=function(){var e=this.state.cards;console.log(e);var t=e.indexOf(this.state.selected);t===e.length-1?t=0:t+=1,console.log(e[t]),this.setState({selected:e[t]})},t}(o.a.Component);t.a=c},176:function(e,t,a){var n=a(11),r=a(177)(!1);n(n.S,"Object",{values:function(e){return r(e)}})},177:function(e,t,a){var n=a(34),r=a(35),i=a(73).f;e.exports=function(e){return function(t){for(var a,o=r(t),l=n(o),A=l.length,s=0,c=[];A>s;)i.call(o,a=l[s++])&&c.push(e?[a,o[a]]:o[a]);return c}}},178:function(e,t,a){},280:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"67ba6459-41f5-582b-868b-3f62166daa17",rawMarkdownBody:"\r\n# TallyTab: _Never lose track of your tabs again_\r\n\r\n![TallyTabHomeScreen](https://i.imgur.com/AC5Jsnl.png 'TallyTab Home Screen')\r\n\r\n* # Technical Stack\r\n  * Java.\r\n  * Java FX.\r\n  \r\n* # Technical Requirements\r\n  * Windows (7 or higher) or Mac OSX.\r\n  * Java 8.\r\n  \r\n* # Features\r\n  * Custom Menu creator and editor.\r\n  * Create and manage multiple functions at a time.\r\n  * Save menus and functions to files.\r\n  * Change function limit and menu on the fly.\r\n  \r\n* # Latest Release: _Alpha 1.7.1_\r\n  * [Download](https://github.com/ChildishhAlbino/TallyTab/releases/download/d9d684a/TallyTab.V1.7.1a.zip )\r\n  * [Changelog](https://github.com/ChildishhAlbino/TallyTab/releases/tag/d9d684a)"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-projects-js-81b755af1425f52185b9.js.map