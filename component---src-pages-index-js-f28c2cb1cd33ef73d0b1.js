(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{140:function(e,t,a){"use strict";a.r(t);a(50);var n=a(0),l=a.n(n),r=a(150),o=a(154),u=a(147),i=a(7),s=a.n(i),c=a(178),m=a.n(c),d=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={dateTime:m()().format("dddd[,] MMMM Do[,] YYYY[,] h:mm:ss a")},a}s()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timerID=setInterval(function(){return e.tick()},1e3)},a.componentWillUnmount=function(){clearInterval(this.timerID)},a.tick=function(){this.setState({dateTime:m()().format("dddd[,] MMMM Do[,] YYYY[,] h:mm:ss a")})},a.render=function(){return l.a.createElement("div",null,l.a.createElement("p",null,"It is: ",this.state.dateTime,"."))},t}(l.a.Component),b=a(146),p=a.n(b),f=function(e){var t=e.children;return l.a.createElement(u.a,{styling:[p.a.One,p.a.shadow]},l.a.createElement("div",{className:[p.a.inlineRow,p.a.blogHeaderFlex].join(" ")},l.a.createElement("h1",null," Recent Posts "),l.a.createElement(d,null)),t)},v=(a(159),a(148)),E=function(e){var t=e.title,a=e.caption,n=e.postDate,r=e.editDate,o=e.editPrefix,i=e.link;return r===n?l.a.createElement(u.a,{styling:[p.a.Two,p.a.shadow]},l.a.createElement("div",{className:p.a.blogPostSubble},l.a.createElement("div",null,l.a.createElement(v.Link,{to:i},l.a.createElement("h1",null,t)),l.a.createElement("p",null,a)),l.a.createElement("div",null,l.a.createElement("p",null,"Posted: ",n)))):l.a.createElement(u.a,{styling:[p.a.Two,p.a.shadow]},l.a.createElement("div",{className:p.a.blogPostSubble},l.a.createElement("div",null,l.a.createElement(v.Link,{to:i},l.a.createElement("h1",null,t)),l.a.createElement("p",null,a)),l.a.createElement("div",null,l.a.createElement("p",null,o," ",r))))},g=a(157);a.d(t,"query",function(){return h});var h="3842818416";t.default=function(e){var t=e.data;return l.a.createElement(r.a,null,l.a.createElement(o.a,null),l.a.createElement(g.a,null),l.a.createElement(f,null,t.allMarkdownRemark.edges.map(function(e){var t=e.node;return l.a.createElement(E,{title:t.frontmatter.title,caption:t.frontmatter.caption,postDate:t.frontmatter.postDate,editDate:t.frontmatter.latestEditDate,link:t.fields.slug,editPrefix:t.frontmatter.datePrefix})})))}},146:function(e,t,a){e.exports={subble:"subble-module--subble--5ss1z",One:"subble-module--One--1eBK5",Two:"subble-module--Two--144ez",Three:"subble-module--Three--3Cv1B",Four:"subble-module--Four--3bWKc",navBar:"subble-module--navBar--2Avlj",shadow:"subble-module--shadow--3eA44",spacedEvenly:"subble-module--spacedEvenly--2Gc81",spaceAround:"subble-module--spaceAround--3vYZa",inlineImages:"subble-module--inlineImages--22z_p",tallyTabFlex:"subble-module--tallyTabFlex--2b2W3",blurbText:"subble-module--blurbText--3Aim3",inlineRow:"subble-module--inlineRow--2sK6d",inlineColumn:"subble-module--inlineColumn--utsAp",fitContent:"subble-module--fitContent--2JURu",reactIcons:"subble-module--reactIcons--19slI",contactItem:"subble-module--contactItem--i809u",contactBarFlex:"subble-module--contactBarFlex--urBJy",blogHeaderFlex:"subble-module--blogHeaderFlex--36ysq",navBarFlex:"subble-module--navBarFlex--2eP6m",navBarItem:"subble-module--navBarItem--1B7NR",navBarItemFlex:"subble-module--navBarItemFlex--2b4ci",blogPostBody:"subble-module--blogPostBody--3XLaD",download:"subble-module--download--e8gmi",projectFlex:"subble-module--projectFlex--3BZga",projectOverlay:"subble-module--projectOverlay--3tSMR",projectImage:"subble-module--projectImage--mquYv",text:"subble-module--text--24X35",aboutHeader:"subble-module--aboutHeader--2emKq",aboutBody:"subble-module--aboutBody--1euLY",wrap:"subble-module--wrap--8KXfr",blogPostSubble:"subble-module--blogPostSubble--37hv2",bioSubbleHeader:"subble-module--bioSubbleHeader--D-dH0",bioSubbleOpen:"subble-module--bioSubbleOpen--1pr6Q"}},147:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(146),o=a.n(r);t.a=function(e){var t=e.children,a=e.styling,n=[o.a.subble].concat(a);return l.a.createElement("div",{className:n.join(" ")},t)}},148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return b});var n=a(0),l=a.n(n),r=a(4),o=a.n(r),u=a(145),i=a.n(u);a.d(t,"Link",function(){return i.a}),a.d(t,"withPrefix",function(){return u.withPrefix}),a.d(t,"navigate",function(){return u.navigate}),a.d(t,"push",function(){return u.push}),a.d(t,"replace",function(){return u.replace}),a.d(t,"navigateTo",function(){return u.navigateTo});var s=a(149),c=a.n(s);a.d(t,"PageRenderer",function(){return c.a});var m=a(34);a.d(t,"parsePath",function(){return m.a});var d=l.a.createContext({}),b=function(e){return l.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}b.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},150:function(e,t,a){"use strict";var n=a(151),l=a(0),r=a.n(l),o=a(158),u=a.n(o),i=a(148),s=a(153),c=a.n(s);t.a=function(e){var t=e.children;return r.a.createElement(i.StaticQuery,{query:"205747956",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"I'm a Sydney based Software Developer."},{name:"keywords",content:"sofware development, programming, blogging, video games, basketball"}]},r.a.createElement("html",{lang:"en"})),r.a.createElement("body",null,r.a.createElement("div",{className:c.a.bubble},t,r.a.createElement("footer",null,r.a.createElement("p",null,"Site built in Gatsby JS. Last built: ",e.site.buildTimeZone)))))},data:n})}},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Connor Williams"},buildTimeZone:"Saturday, February 2nd, 2019, 9:39:57 pm"}}}},152:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),l=a.n(n),r=a(4),o=a.n(r),u=a(48),i=a(2),s=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return l.a.createElement(u.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},153:function(e,t,a){e.exports={bubble:"bubble-module--bubble--Pr8uS"}},154:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(148),o=a(155),u=a.n(o),i=a(147),s=a(156),c=a.n(s),m=a(146),d=a.n(m);t.a=function(){return l.a.createElement(i.a,{styling:[d.a.One,d.a.shadow]},l.a.createElement("div",{className:u.a.introSubble},l.a.createElement(i.a,{styling:[d.a.navBar,d.a.shadow,u.a.introHeading]},l.a.createElement(i.a,{styling:[d.a.navBarItem,d.a.shadow]},l.a.createElement("h1",null,"Hi, I'm ",l.a.createElement("i",null,"Connor Williams!")))),l.a.createElement(i.a,{styling:[d.a.Two,d.a.shadow]},l.a.createElement("div",{className:u.a.blurb},l.a.createElement("img",{className:d.a.shadow,src:c.a,alt:"me.jpg"}),l.a.createElement("div",{className:[u.a.blurbText]},l.a.createElement("p",null,"I'm a Software Developer from Sydney who recently graduated with a Diploma of Software Development. This is a personal blog for me to learn web development and showcase my"," ",l.a.createElement(r.Link,{to:"projects"},"projects.")),l.a.createElement("br",null),l.a.createElement("p",null,"Feel free to learn some more about me"," ",l.a.createElement(r.Link,{to:"about"},"here!")),l.a.createElement("br",null),l.a.createElement("i",{className:u.a.disclaimerText},"This website is currently under construction. There might be some bugs. Sorry!"))))))}},155:function(e,t,a){e.exports={blurb:"introSubble-module--blurb--3uVUw",blurbText:"introSubble-module--blurbText--1tYmo",disclaimerText:"introSubble-module--disclaimerText--gzfBD",introHeading:"introSubble-module--introHeading--dCt8E"}},156:function(e,t,a){e.exports=a.p+"static/me-a7badd1facb0631f7343195c4f7ffef8.jpg"},157:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(147),o=a(145),u=a.n(o),i=a(146),s=a.n(i);t.a=function(){return l.a.createElement(r.a,{styling:[s.a.navBar,s.a.navBarFlex,s.a.shadow]},l.a.createElement(u.a,{to:"/"},l.a.createElement(r.a,{styling:[s.a.navBarItem,s.a.navBarItemFlex,s.a.shadow]},"Home")),l.a.createElement(u.a,{to:"about/"},l.a.createElement(r.a,{styling:[s.a.navBarItem,s.a.navBarItemFlex,s.a.shadow]},"About")),l.a.createElement(u.a,{to:"projects/"},l.a.createElement(r.a,{styling:[s.a.navBarItem,s.a.navBarItemFlex,s.a.shadow]},"Projects")),l.a.createElement(u.a,{to:"contact/"},l.a.createElement(r.a,{styling:[s.a.navBarItem,s.a.navBarItemFlex,s.a.shadow]},"Contact")))}}}]);
//# sourceMappingURL=component---src-pages-index-js-f28c2cb1cd33ef73d0b1.js.map