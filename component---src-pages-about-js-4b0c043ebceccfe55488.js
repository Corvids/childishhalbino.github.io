(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{139:function(e,t,a){"use strict";a.r(t);var n=a(276),r=a(0),o=a.n(r),i=a(146),s=a(175),l=a(156),d=a(159);t.default=function(){return o.a.createElement(i.StaticQuery,{query:c,render:function(e){var t=e.allMarkdownRemark.edges;return o.a.createElement(l.a,null,o.a.createElement(d.a,{title:"Home",keywords:["gatsby","application","react"]}),o.a.createElement("h1",null,"ABOUT"),o.a.createElement(s.a,{cards:t}))},data:n})};var c="3913332154"},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),s=a(145),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var d=a(147),c=a.n(d);a.d(t,"PageRenderer",function(){return c.a});var A=a(32);a.d(t,"parsePath",function(){return A.a});var u=r.a.createContext({}),m=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},147:function(e,t,a){var n;e.exports=(n=a(148))&&n.default||n},148:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),s=a(52),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=d},150:function(e){e.exports={data:{site:{buildTimeZone:"Tuesday, March 5th, 2019, 1:35:03 am"}}}},151:function(e,t,a){},152:function(e,t,a){},153:function(e){e.exports={data:{image:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQDAQX/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAH0sop86mFLWMa6A//EABwQAAMAAQUAAAAAAAAAAAAAAAABAgMRFCIxMv/aAAgBAQABBQJdW04HanLuGVyef2an/8QAFREBAQAAAAAAAAAAAAAAAAAAESD/2gAIAQMBAT8BY//EABYRAQEBAAAAAAAAAAAAAAAAABABEf/aAAgBAgEBPwHCH//EABwQAAEDBQAAAAAAAAAAAAAAAAABAhEQICEyYf/aAAgBAQAGPwIdFM6nVJWz/8QAHRABAAICAgMAAAAAAAAAAAAAAQARITFBUWFxkf/aAAgBAQABPyEFfUEOBHez7Kw2hk7jU1jZFgC/GJvjBVP/2gAMAwEAAgADAAAAEMc4Qv/EABkRAAIDAQAAAAAAAAAAAAAAAAARARAxQf/aAAgBAwEBPxBOjJ2v/8QAGREAAgMBAAAAAAAAAAAAAAAAAAEQESEx/9oACAECAQE/EE70o4j/xAAdEAEBAAMAAgMAAAAAAAAAAAABEQAhMVFhcYGh/9oACAEBAAE/EAIoAK+NYoKsFnMbdwT6ii8RT52TJpoAby73+89XEVBBsw/Rj8PAxzUwkXP/2Q==",aspectRatio:1,src:"/static/0dab95136d3e295cdfbf596b0fd58201/1f83c/blurb.jpg",srcSet:"/static/0dab95136d3e295cdfbf596b0fd58201/5c8a3/blurb.jpg 500w,\n/static/0dab95136d3e295cdfbf596b0fd58201/454b2/blurb.jpg 1000w,\n/static/0dab95136d3e295cdfbf596b0fd58201/1f83c/blurb.jpg 1080w",sizes:"(max-width: 1080px) 100vw, 1080px"}}},blurb:{childMarkdownRemark:{html:"<h1>Hi! I'm Connor Williams</h1>\n<p>I'm a software developer from Sydney. I love programming, video games, and basketball.  </p>\n<p>I'm curious, a fast learner, and I love to build things.</p>\n<p>This is a personal blog / portfolio for my side projects. Feel free to check them out.  </p>\n<p>Currently looking for work.</p>",htmlAst:{type:"root",children:[{type:"element",tagName:"h1",properties:{},children:[{type:"text",value:"Hi! I'm Connor Williams"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I'm a software developer from Sydney. I love programming, video games, and basketball.  "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I'm curious, a fast learner, and I love to build things."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This is a personal blog / portfolio for my side projects. Feel free to check them out.  "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Currently looking for work."}]}],data:{quirksMode:!1}},rawMarkdownBody:"\r\n# Hi! I'm Connor Williams\r\n\r\nI'm a software developer from Sydney. I love programming, video games, and basketball.  \r\n\r\nI'm curious, a fast learner, and I love to build things.\r\n\r\nThis is a personal blog / portfolio for my side projects. Feel free to check them out.  \r\n\r\nCurrently looking for work."}}}}},154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){"use strict";var n=a(150),r=a(0),o=a.n(r),i=a(4),s=a.n(i),l=a(146),d=(a(161),a(151),function(e){var t=e.title,a=e.link;return o.a.createElement(l.Link,{to:a,className:"headerItem"},o.a.createElement("h1",null,t))}),c=(a(152),function(e){e.siteTitle;var t=e.children;return o.a.createElement("div",null,o.a.createElement("header",{className:"header shadow"},o.a.createElement(d,{link:"/",title:"HOME"}),o.a.createElement(d,{link:"/about/",title:"ABOUT"}),o.a.createElement(d,{link:"/projects/",title:"PROJECTS"}),o.a.createElement(d,{link:"/contact/",title:"CONTACT"})),o.a.createElement("div",null,t))});c.propTypes={siteTitle:s.a.string},c.defaultProps={siteTitle:""};var A=c,u=a(153),m=a(162),p=a.n(m),h=(a(154),a(157)),f=a.n(h),g=function(){return o.a.createElement(l.StaticQuery,{query:y,render:function(e){return o.a.createElement("div",{className:"blurb"},o.a.createElement(p.a,{fluid:e.image.childImageSharp.fluid}),o.a.createElement(f.a,{source:e.blurb.childMarkdownRemark.rawMarkdownBody}))},data:u})},y="296956379",w=(a(155),function(e){var t=e.children;return o.a.createElement(l.StaticQuery,{query:b,render:function(e){return o.a.createElement("div",null,o.a.createElement(A,{siteTitle:"Hello."},o.a.createElement("main",null,o.a.createElement("div",{className:"grid"},o.a.createElement("div",{className:"gridItem shadow"},o.a.createElement("div",{className:"children"},t," ")),o.a.createElement("div",{className:"gridItem blurbItem shadow"},o.a.createElement(g,null))))),o.a.createElement("footer",null,o.a.createElement("p",null," Site built with GatsbyJS. Last build: ",e.site.buildTimeZone," ")))},data:n})});w.propTypes={children:s.a.node.isRequired};t.a=w;var b="4034071209"},159:function(e,t,a){"use strict";var n=a(160),r=a(0),o=a.n(r),i=a(4),s=a.n(i),l=a(164),d=a.n(l),c=a(146);function A(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,s=e.title;return o.a.createElement(c.StaticQuery,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return o.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}A.defaultProps={lang:"en",meta:[],keywords:[]},A.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=A;var u="1025518380"},160:function(e){e.exports={data:{site:{siteMetadata:{title:"ChildishhAlbino",description:"A personal blog/portfolio for Connor Williams.",author:"@gatsbyjs"}}}}},175:function(e,t,a){"use strict";a(74),a(54),a(176);var n=a(7),r=a.n(n),o=a(0),i=a.n(o),s=(a(178),a(157)),l=a.n(s),d=a(179),c=function(e){function t(t){var a;a=e.call(this,t)||this;var n=Object.values(t.cards),r=[];return n.forEach(function(e){r.push(e.node)}),a.state={cards:r,selected:r[0],styling:t.styling},a}r()(t,e);var a=t.prototype;return a.render=function(){var e=this;return i.a.createElement("div",{className:"aboutCardGrid"},this.state.cards.length>1&&i.a.createElement("div",{className:"arrows"},i.a.createElement("div",{onClick:function(){e.back()},className:"arrow"},i.a.createElement(d.a,null)),i.a.createElement("p",null,"Click to scroll between cards!"),i.a.createElement("div",{onClick:function(){e.forward()},className:"arrow"},i.a.createElement(d.b,null))),i.a.createElement("div",{className:"cards alignLeft"},i.a.createElement(l.a,{className:this.state.styling,source:this.state.selected.rawMarkdownBody})))},a.back=function(){var e=this.state.cards,t=e.indexOf(this.state.selected),a=e.length;0===t?t=a-1:t-=1,this.setState({selected:e[t]})},a.forward=function(){var e=this.state.cards;console.log(e);var t=e.indexOf(this.state.selected);t===e.length-1?t=0:t+=1,console.log(e[t]),this.setState({selected:e[t]})},t}(i.a.Component);t.a=c},176:function(e,t,a){var n=a(11),r=a(177)(!1);n(n.S,"Object",{values:function(e){return r(e)}})},177:function(e,t,a){var n=a(34),r=a(35),o=a(73).f;e.exports=function(e){return function(t){for(var a,i=r(t),s=n(i),l=s.length,d=0,c=[];l>d;)o.call(i,a=s[d++])&&c.push(e?[a,i[a]]:i[a]);return c}}},178:function(e,t,a){},276:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"f8b243db-a14a-5168-b736-8421b2a7d304",rawMarkdownBody:"\r\n# Summary\r\n\r\nI'm Connor, a Software Developer from Western Sydney.\r\n\r\nI'm 19-years-old and passionate about programming and Software Development. I'm an open-minded person, who works well both individually and as part of a team. I'm motivated and eager to learn how to become a great developer. \r\n\r\nI'm currently not working in the industry but I'm looking to start. I'm proficient in languages such as Java and C# and competent with web-based languages / frameworks including NodeJS, React / GatsbyJS, etc. I'm an adept problem solver and a quick learner."}},{node:{id:"172f15bd-bb48-5af6-a007-32e5c8897ebb",rawMarkdownBody:"\r\n# More than a tl;dr\r\n\r\n## The Computer Guy\r\n\r\nSince a young age; I've had an interest in - and been very good with computers. My Dad worked in IT when I was born and I look back fondly on memories of building my first desktop PC (with his help of course) or the shock on his face when a five-year-old me worked out how to install a PC game (Monster's Inc.) I wanted to play because he wouldn't install it for me. Looking back, that would be a recurring theme in my life.\r\n\r\nBecause of those early experiences; I've always loved computers. I've become the person people turn to for hardware and software inquiries. During my early teens - I developed a passion for building computers and helped many friends enter into PC gaming. Recently, I've helped two close friends build their relative high-end computers from start to finish, and both were incredibly satisfied with the results and appreciative of my skillset.\r\n\r\n## Why Software then\r\n\r\nYou might be asking yourself - 'why did he choose to be a Software Developer then?\" The answer is simple - Minecraft. Thirteen-year-old me LOVED Minecraft. I loved building Redstone (the game's version of electrical circuitry) contraptions especially. It was at this point that I decided to learn how to 'mod' the game. Using a YouTube tutorial - I modified the game and added custom blocks for no reason other than my own enjoyment. While I never actually fleshed out these mods - it ignited a spark for programming that has lasted to this day.\r\n\r\nPython was where I really learned programming. Year 9 IST quickly became myself and my friend rapidly accelerating past the rest of the class and even our teacher. We pushed each other to learn new things and while the scripts we wrote weren't pretty to look at, they taught us the fundamentals of coding. In hindsight, this is the point I decided I'd become a Software Developer.\r\n\r\nGoing forward from that point; especially as High School came to a close, I'd use every excuse to program. There were many times I'd write a Python script to solve repetitive problems in Physics or Maths, or use spare time in my other classes to finish off scripts that played games like Rock, Paper, Scissors. It was really fun and I still find myself doing this now.\r\n\r\n## Confidence Boost\r\n\r\nDespite how often I programmed; I didn't consider myself that good at it until my major project of IPT. We had to produce some form of Information System, and being a basketball fan - I designed an application that allowed our school basketball team to score and time the games rather than using a paper system. After a recommendation to try Unity, I looked into it and quickly picked up C# and the Unity interface to develop a prototype in roughly a week. Looking back at the code now; I can easily pick out hundreds of errors, but it taught me about Objective Oriented Programming and software architecture. I went on to learn more about those topics and programming in general at TAFE - cementing my passion for programming and Software Development. I'm eager to enter the industry and improve even more as a developer and as a person.\r\n\r\n## Today\r\n\r\nAs I'm not currently employed in the industry, I'm spending time developing side projects in a variety of languages and frameworks to improve as a developer overall and to produce a well-rounded portfolio. As a developer; I'm a quick learner and I pick up new languages, frameworks, and practices fast. I'm pragmatic about problem solving and do my best to be forward thinking with all possible solutions. I have an ability to detect the root cause of an error and eliminate red herrings easily. I'm always willing to try new things and I work well with team members.\r\n\r\n## Outside of the Industry\r\n\r\nWhen I'm not programming or developing side projects - I'm an avid basketball fan. I've been playing since I was in Year 9. I also like playing video games such as League of Legends, and I'm fond of eSports. I also enjoy Skiing."}},{node:{id:"bbf6ed45-a154-5f4a-a6ce-e591ef91c683",rawMarkdownBody:"\r\n# Education\r\n\r\n* Diploma of Software Development _(completed, June 2018)_\r\n* Higher School Certificate - Greystanes High School _(graduated, 2017)_\r\n  * Band 5 in Hospitality\r\n  * Band 4 in English\r\n  * Band 4 in IPT\r\n  * Band 4 in Physics\r\n* Certificate II in Hospitality _(SIT20213)_"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-about-js-4b0c043ebceccfe55488.js.map