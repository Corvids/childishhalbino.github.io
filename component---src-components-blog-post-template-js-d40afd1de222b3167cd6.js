(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return c});var n=t(0),l=t.n(n),r=t(153),o=t(150),u=t(157),s=t(160),i=(t(176),t(149)),m=t.n(i);a.default=function(e){var a=e.data.markdownRemark;return a.frontmatter.latestEditDate===a.frontmatter.postDate?l.a.createElement(r.a,null,l.a.createElement(s.a,null),l.a.createElement("div",null,l.a.createElement(o.a,{styling:[m.a.One,m.a.shadow]},l.a.createElement("div",{className:m.a.blogPostFlex},l.a.createElement("h1",null,a.frontmatter.title),l.a.createElement("div",null,l.a.createElement("p",null,"Posted: ",a.frontmatter.postDate))),l.a.createElement(o.a,{styling:[m.a.Two,m.a.shadow]},l.a.createElement("div",{className:m.a.blogPostBody,dangerouslySetInnerHTML:{__html:a.html}})))),l.a.createElement(u.a,null)):l.a.createElement(r.a,null,l.a.createElement(s.a,null),l.a.createElement("div",null,l.a.createElement(o.a,{styling:[m.a.One,m.a.shadow]},l.a.createElement("div",{className:m.a.blogPostFlex},l.a.createElement("h1",null,a.frontmatter.title),l.a.createElement("div",null,l.a.createElement("p",null,"Posted: ",a.frontmatter.postDate),l.a.createElement("p",null,a.frontmatter.datePrefix," ",a.frontmatter.latestEditDate))),l.a.createElement(o.a,{styling:[m.a.Two,m.a.shadow]},l.a.createElement("div",{className:m.a.blogPostBody,dangerouslySetInnerHTML:{__html:a.html}})))),l.a.createElement(u.a,null))};var c="3409219257"},149:function(e,a,t){e.exports={subble:"subble-module--subble--5ss1z",One:"subble-module--One--1eBK5",Two:"subble-module--Two--144ez",Three:"subble-module--Three--3Cv1B",Four:"subble-module--Four--3bWKc",navBar:"subble-module--navBar--2Avlj",shadow:"subble-module--shadow--3eA44",spacedEvenly:"subble-module--spacedEvenly--2Gc81",spaceAround:"subble-module--spaceAround--3vYZa",inlineImages:"subble-module--inlineImages--22z_p",tallyTabFlex:"subble-module--tallyTabFlex--2b2W3",blurbText:"subble-module--blurbText--3Aim3",inlineRow:"subble-module--inlineRow--2sK6d",inlineColumn:"subble-module--inlineColumn--utsAp",fitContent:"subble-module--fitContent--2JURu",reactIcons:"subble-module--reactIcons--19slI",contactItem:"subble-module--contactItem--i809u",contactBarFlex:"subble-module--contactBarFlex--urBJy",blogHeaderFlex:"subble-module--blogHeaderFlex--36ysq",navBarFlex:"subble-module--navBarFlex--2eP6m",navBarItem:"subble-module--navBarItem--1B7NR",navBarItemFlex:"subble-module--navBarItemFlex--2b4ci",blogPostBody:"subble-module--blogPostBody--3XLaD",download:"subble-module--download--e8gmi",projectFlex:"subble-module--projectFlex--3BZga",projectOverlay:"subble-module--projectOverlay--3tSMR",projectImage:"subble-module--projectImage--mquYv",text:"subble-module--text--24X35",aboutHeader:"subble-module--aboutHeader--2emKq",wrap:"subble-module--wrap--8KXfr",blogPostSubble:"subble-module--blogPostSubble--37hv2",bioSubbleHeader:"subble-module--bioSubbleHeader--D-dH0",bioSubbleOpen:"subble-module--bioSubbleOpen--1pr6Q"}},150:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(149),o=t.n(r);a.a=function(e){var a=e.children,t=e.styling,n=[o.a.subble].concat(t);return l.a.createElement("div",{className:n.join(" ")},a)}},151:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return p}),t.d(a,"StaticQueryContext",function(){return b}),t.d(a,"StaticQuery",function(){return d});var n=t(0),l=t.n(n),r=t(4),o=t.n(r),u=t(148),s=t.n(u);t.d(a,"Link",function(){return s.a}),t.d(a,"withPrefix",function(){return u.withPrefix}),t.d(a,"navigate",function(){return u.navigate}),t.d(a,"push",function(){return u.push}),t.d(a,"replace",function(){return u.replace}),t.d(a,"navigateTo",function(){return u.navigateTo});var i=t(152),m=t.n(i);t.d(a,"PageRenderer",function(){return m.a});var c=t(32);t.d(a,"parsePath",function(){return c.a});var b=l.a.createContext({}),d=function(e){return l.a.createElement(b.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(e,a,t){var n;e.exports=(n=t(155))&&n.default||n},153:function(e,a,t){"use strict";var n=t(154),l=t(0),r=t.n(l),o=t(161),u=t.n(o),s=t(151),i=t(156),m=t.n(i);a.a=function(e){var a=e.children;return r.a.createElement(s.StaticQuery,{query:"205747956",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"I'm a Sydney based Software Developer."},{name:"keywords",content:"sofware development, programming, blogging, video games, basketball"}]},r.a.createElement("html",{lang:"en"})),r.a.createElement("body",null,r.a.createElement("div",{className:m.a.bubble},a,r.a.createElement("footer",null,r.a.createElement("p",null,"Site built in Gatsby JS. Last built: ",e.site.buildTimeZone)))))},data:n})}},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Connor Williams"},buildTimeZone:"Wednesday, February 13th, 2019, 2:02:53 am"}}}},155:function(e,a,t){"use strict";t.r(a);t(33);var n=t(0),l=t.n(n),r=t(4),o=t.n(r),u=t(52),s=t(2),i=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return l.a.createElement(u.a,Object.assign({location:a,pageResources:t},t.json))};i.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},a.default=i},156:function(e,a,t){e.exports={bubble:"bubble-module--bubble--Pr8uS"}},157:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(151),o=t(158),u=t.n(o),s=t(150),i=t(159),m=t.n(i),c=t(149),b=t.n(c);a.a=function(){return l.a.createElement(s.a,{styling:[b.a.One,b.a.shadow]},l.a.createElement("div",{className:u.a.introSubble},l.a.createElement(s.a,{styling:[b.a.navBar,b.a.shadow,u.a.introHeading]},l.a.createElement(s.a,{styling:[b.a.navBarItem,b.a.shadow]},l.a.createElement("h1",null,"Hi, I'm ",l.a.createElement("i",null,"Connor Williams!")))),l.a.createElement(s.a,{styling:[b.a.Two,b.a.shadow]},l.a.createElement("div",{className:u.a.blurb},l.a.createElement("img",{className:b.a.shadow,src:m.a,alt:"me.jpg"}),l.a.createElement("div",{className:[u.a.blurbText]},l.a.createElement("p",null,"I'm a Software Developer from Sydney who recently graduated with a Diploma of Software Development. This is a personal blog for me to learn web development and showcase my"," ",l.a.createElement(r.Link,{to:"projects"},"projects.")),l.a.createElement("br",null),l.a.createElement("p",null,"Feel free to learn some more about me"," ",l.a.createElement(r.Link,{to:"about"},"here!")),l.a.createElement("br",null),l.a.createElement("i",{className:u.a.disclaimerText},"This website is currently under construction. There might be some bugs. Sorry!"))))))}},158:function(e,a,t){e.exports={blurb:"introSubble-module--blurb--3uVUw",blurbText:"introSubble-module--blurbText--1tYmo",disclaimerText:"introSubble-module--disclaimerText--gzfBD",introHeading:"introSubble-module--introHeading--dCt8E"}},159:function(e,a,t){e.exports=t.p+"static/me-a7badd1facb0631f7343195c4f7ffef8.jpg"},160:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(150),o=t(148),u=t.n(o),s=t(149),i=t.n(s);a.a=function(){return l.a.createElement(r.a,{styling:[i.a.navBar,i.a.navBarFlex,i.a.shadow]},l.a.createElement(u.a,{to:"/"},l.a.createElement(r.a,{styling:[i.a.navBarItem,i.a.navBarItemFlex,i.a.shadow]},"Home")),l.a.createElement(u.a,{to:"about/"},l.a.createElement(r.a,{styling:[i.a.navBarItem,i.a.navBarItemFlex,i.a.shadow]},"About")),l.a.createElement(u.a,{to:"projects/"},l.a.createElement(r.a,{styling:[i.a.navBarItem,i.a.navBarItemFlex,i.a.shadow]},"Projects")),l.a.createElement(u.a,{to:"contact/"},l.a.createElement(r.a,{styling:[i.a.navBarItem,i.a.navBarItemFlex,i.a.shadow]},"Contact")))}},176:function(e,a,t){}}]);
//# sourceMappingURL=component---src-components-blog-post-template-js-d40afd1de222b3167cd6.js.map