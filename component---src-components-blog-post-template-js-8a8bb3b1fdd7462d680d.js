(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{137:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return m});var n=t(0),l=t.n(n),r=t(150),o=t(147),u=t(156),s=t(155),c=(t(172),t(146)),i=t.n(c);a.default=function(e){var a=e.data.markdownRemark;return a.frontmatter.latestEditDate===a.frontmatter.postDate?l.a.createElement(r.a,null,l.a.createElement(s.a,null),l.a.createElement("div",null,l.a.createElement(o.a,{styling:[i.a.One,i.a.shadow]},l.a.createElement("div",{className:i.a.blogPostFlex},l.a.createElement("h1",null,a.frontmatter.title),l.a.createElement("div",null,l.a.createElement("p",null,"Posted: ",a.frontmatter.postDate))),l.a.createElement(o.a,{styling:[i.a.Two,i.a.shadow]},l.a.createElement("div",{className:i.a.blogPostBody,dangerouslySetInnerHTML:{__html:a.html}})))),l.a.createElement(u.a,null)):l.a.createElement(r.a,null,l.a.createElement(s.a,null),l.a.createElement("div",null,l.a.createElement(o.a,{styling:[i.a.One,i.a.shadow]},l.a.createElement("div",{className:i.a.blogPostFlex},l.a.createElement("h1",null,a.frontmatter.title),l.a.createElement("div",null,l.a.createElement("p",null,"Posted: ",a.frontmatter.postDate),l.a.createElement("p",null,a.frontmatter.datePrefix," ",a.frontmatter.latestEditDate))),l.a.createElement(o.a,{styling:[i.a.Two,i.a.shadow]},l.a.createElement("div",{className:i.a.blogPostBody,dangerouslySetInnerHTML:{__html:a.html}})))),l.a.createElement(u.a,null))};var m="3409219257"},146:function(e,a,t){e.exports={subble:"subble-module--subble--5ss1z",One:"subble-module--One--1eBK5",Two:"subble-module--Two--144ez",Three:"subble-module--Three--3Cv1B",Four:"subble-module--Four--3bWKc",navBar:"subble-module--navBar--2Avlj",shadow:"subble-module--shadow--3eA44",spacedEvenly:"subble-module--spacedEvenly--2Gc81",spaceAround:"subble-module--spaceAround--3vYZa",inlineImages:"subble-module--inlineImages--22z_p",inlineRow:"subble-module--inlineRow--2sK6d",inlineColumn:"subble-module--inlineColumn--utsAp",fitContent:"subble-module--fitContent--2JURu",reactIcons:"subble-module--reactIcons--19slI",contactItemFlex:"subble-module--contactItemFlex--1kbkJ",contactBarFlex:"subble-module--contactBarFlex--urBJy",blogHeaderFlex:"subble-module--blogHeaderFlex--36ysq",tallyTabFlex:"subble-module--tallyTabFlex--2b2W3",navBarFlex:"subble-module--navBarFlex--2eP6m",navBarItem:"subble-module--navBarItem--1B7NR",navBarItemFlex:"subble-module--navBarItemFlex--2b4ci",blogPostBody:"subble-module--blogPostBody--3XLaD",download:"subble-module--download--e8gmi",projectFlex:"subble-module--projectFlex--3BZga",projectOverlay:"subble-module--projectOverlay--3tSMR",projectImage:"subble-module--projectImage--mquYv",text:"subble-module--text--24X35",aboutHeader:"subble-module--aboutHeader--2emKq",aboutBody:"subble-module--aboutBody--1euLY",wrap:"subble-module--wrap--8KXfr"}},147:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(146),o=t.n(r);a.a=function(e){var a=e.children,t=e.styling,n=[o.a.subble].concat(t);return l.a.createElement("div",{className:n.join(" ")},a)}},148:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return f}),t.d(a,"StaticQueryContext",function(){return d}),t.d(a,"StaticQuery",function(){return b});var n=t(0),l=t.n(n),r=t(4),o=t.n(r),u=t(145),s=t.n(u);t.d(a,"Link",function(){return s.a}),t.d(a,"withPrefix",function(){return u.withPrefix}),t.d(a,"navigate",function(){return u.navigate}),t.d(a,"push",function(){return u.push}),t.d(a,"replace",function(){return u.replace}),t.d(a,"navigateTo",function(){return u.navigateTo});var c=t(149),i=t.n(c);t.d(a,"PageRenderer",function(){return i.a});var m=t(34);t.d(a,"parsePath",function(){return m.a});var d=l.a.createContext({}),b=function(e){return l.a.createElement(d.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}b.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,a,t){var n;e.exports=(n=t(152))&&n.default||n},150:function(e,a,t){"use strict";var n=t(151),l=t(0),r=t.n(l),o=t(158),u=t.n(o),s=t(148),c=t(153),i=t.n(c);a.a=function(e){var a=e.children;return r.a.createElement(s.StaticQuery,{query:"205747956",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"I'm a Sydney based Software Developer."},{name:"keywords",content:"sofware development, programming, blogging, video games, basketball"}]},r.a.createElement("html",{lang:"en"})),r.a.createElement("body",null,r.a.createElement("div",{className:i.a.bubble},a,r.a.createElement("footer",null,r.a.createElement("p",null,"Site built in Gatsby JS. Last built: ",e.site.buildTimeZone)))))},data:n})}},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Connor Williams"},buildTimeZone:"Wednesday, December 12th, 2018, 1:00:31 am"}}}},152:function(e,a,t){"use strict";t.r(a);t(35);var n=t(0),l=t.n(n),r=t(4),o=t.n(r),u=t(48),s=t(2),c=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return l.a.createElement(u.a,Object.assign({location:a,pageResources:t},t.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},a.default=c},153:function(e,a,t){e.exports={bubble:"bubble-module--bubble--Pr8uS"}},154:function(e,a,t){e.exports=t.p+"static/me-a7badd1facb0631f7343195c4f7ffef8.jpg"},155:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(147),o=t(145),u=t.n(o),s=t(146),c=t.n(s);a.a=function(){return l.a.createElement(r.a,{styling:[c.a.navBar,c.a.navBarFlex,c.a.shadow]},l.a.createElement(u.a,{to:"/"},l.a.createElement(r.a,{styling:[c.a.navBarItem,c.a.navBarItemFlex,c.a.shadow]},"Home")),l.a.createElement(u.a,{to:"about/"},l.a.createElement(r.a,{styling:[c.a.navBarItem,c.a.navBarItemFlex,c.a.shadow]},"About")),l.a.createElement(u.a,{to:"projects/"},l.a.createElement(r.a,{styling:[c.a.navBarItem,c.a.navBarItemFlex,c.a.shadow]},"Projects")),l.a.createElement(u.a,{to:"contact/"},l.a.createElement(r.a,{styling:[c.a.navBarItem,c.a.navBarItemFlex,c.a.shadow]},"Contact")))}},156:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(148),o=t(157),u=t.n(o),s=t(147),c=t(154),i=t.n(c),m=t(146),d=t.n(m);a.a=function(){return l.a.createElement(s.a,{styling:[d.a.One,d.a.shadow]},l.a.createElement("div",{className:u.a.introSubble},l.a.createElement(s.a,{styling:[d.a.navBar,d.a.shadow,u.a.introHeading]},l.a.createElement(s.a,{styling:[d.a.navBarItem,d.a.shadow]},l.a.createElement("h1",null,"Hi, I'm ",l.a.createElement("i",null,"Connor Williams!")))),l.a.createElement(s.a,{styling:[d.a.Two,d.a.shadow]},l.a.createElement("div",{className:u.a.blurb},l.a.createElement("img",{className:d.a.shadow,src:i.a,alt:"me.jpg"}),l.a.createElement("div",{className:[u.a.blurbText]},l.a.createElement("p",null,"I'm a Software Developer from Sydney who recently graduated with a Diploma of Software Development. This is a personal blog for me to learn web development and showcase my"," ",l.a.createElement(r.Link,{to:"projects"},"projects.")),l.a.createElement("br",null),l.a.createElement("p",null,"Feel free to learn some more about me"," ",l.a.createElement(r.Link,{to:"about"},"here!")))))))}},157:function(e,a,t){e.exports={blurb:"introSubble-module--blurb--3uVUw",blurbText:"introSubble-module--blurbText--1tYmo",introHeading:"introSubble-module--introHeading--dCt8E"}},172:function(e,a,t){}}]);
//# sourceMappingURL=component---src-components-blog-post-template-js-8a8bb3b1fdd7462d680d.js.map