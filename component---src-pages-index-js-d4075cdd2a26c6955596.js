(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{141:function(e,t,a){"use strict";a.r(t);a(49);var n=a(0),l=a.n(n),r=a(150),o=a(156),u=a(147),i=a(7),c=a.n(i),s=a(174),m=a.n(s),d=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={dateTime:m()().format("dddd[,] MMMM Do[,] YYYY[,] h:mm:ss a")},a}c()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timerID=setInterval(function(){return e.tick()},1e3)},a.componentWillUnmount=function(){clearInterval(this.timerID)},a.tick=function(){this.setState({dateTime:m()().format("dddd[,] MMMM Do[,] YYYY[,] h:mm:ss a")})},a.render=function(){return l.a.createElement("div",null,l.a.createElement("p",null,"It is: ",this.state.dateTime,"."))},t}(l.a.Component),b=a(146),p=a.n(b),f=function(e){var t=e.children;return l.a.createElement(u.a,{styling:[p.a.One,p.a.shadow]},l.a.createElement("div",{className:[p.a.inlineRow,p.a.blogHeaderFlex].join(" ")},l.a.createElement("h1",null," Recent Posts "),l.a.createElement(d,null)),t)},v=(a(159),a(148)),E=(a(176),function(e){var t=e.title,a=e.caption,n=e.postDate,r=e.editDate,o=e.editPrefix,i=e.link;return r===n?l.a.createElement(u.a,{styling:[p.a.Two,p.a.shadow]},l.a.createElement("div",{className:"blogPost"},l.a.createElement("div",{className:"postContent"},l.a.createElement(v.Link,{to:i},l.a.createElement("p",null,t)),l.a.createElement("p",{className:"captionText"},a)),l.a.createElement("div",{className:"postDate"},l.a.createElement("p",null,"Posted: ",n)))):l.a.createElement(u.a,{styling:[p.a.Two,p.a.shadow]},l.a.createElement("div",{className:"blogPost"},l.a.createElement("div",{className:"postContent"},l.a.createElement(v.Link,{to:i},l.a.createElement("p",null,t)),l.a.createElement("p",{className:"captionText"},a)),l.a.createElement("div",{className:"postDate"},l.a.createElement("p",null,o," ",r))))}),g=a(155);a.d(t,"query",function(){return y});var y="3842818416";t.default=function(e){var t=e.data;return l.a.createElement(r.a,null,l.a.createElement(o.a,null),l.a.createElement(g.a,null),l.a.createElement(f,null,t.allMarkdownRemark.edges.map(function(e){var t=e.node;return l.a.createElement(E,{title:t.frontmatter.title,caption:t.frontmatter.caption,postDate:t.frontmatter.postDate,editDate:t.frontmatter.latestEditDate,link:t.fields.slug,editPrefix:t.frontmatter.datePrefix})})))}},146:function(e,t,a){e.exports={subble:"subble-module--subble--5ss1z",One:"subble-module--One--1eBK5",Two:"subble-module--Two--144ez",Three:"subble-module--Three--3Cv1B",Four:"subble-module--Four--3bWKc",navBar:"subble-module--navBar--2Avlj",shadow:"subble-module--shadow--3eA44",spacedEvenly:"subble-module--spacedEvenly--2Gc81",spaceAround:"subble-module--spaceAround--3vYZa",inlineImages:"subble-module--inlineImages--22z_p",inlineRow:"subble-module--inlineRow--2sK6d",inlineColumn:"subble-module--inlineColumn--utsAp",fitContent:"subble-module--fitContent--2JURu",reactIcons:"subble-module--reactIcons--19slI",contactItemFlex:"subble-module--contactItemFlex--1kbkJ",contactBarFlex:"subble-module--contactBarFlex--urBJy",blogHeaderFlex:"subble-module--blogHeaderFlex--36ysq",tallyTabFlex:"subble-module--tallyTabFlex--2b2W3",navBarFlex:"subble-module--navBarFlex--2eP6m",navBarItem:"subble-module--navBarItem--1B7NR",navBarItemFlex:"subble-module--navBarItemFlex--2b4ci",blogPostBody:"subble-module--blogPostBody--3XLaD",contactItem:"subble-module--contactItem--i809u",download:"subble-module--download--e8gmi",projectFlex:"subble-module--projectFlex--3BZga",projectOverlay:"subble-module--projectOverlay--3tSMR",projectImage:"subble-module--projectImage--mquYv",text:"subble-module--text--24X35",aboutHeader:"subble-module--aboutHeader--2emKq",aboutBody:"subble-module--aboutBody--1euLY",wrap:"subble-module--wrap--8KXfr"}},147:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(146),o=a.n(r);t.a=function(e){var t=e.children,a=e.styling,n=[o.a.subble].concat(a);return l.a.createElement("div",{className:n.join(" ")},t)}},148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return b});var n=a(0),l=a.n(n),r=a(4),o=a.n(r),u=a(145),i=a.n(u);a.d(t,"Link",function(){return i.a}),a.d(t,"withPrefix",function(){return u.withPrefix}),a.d(t,"navigate",function(){return u.navigate}),a.d(t,"push",function(){return u.push}),a.d(t,"replace",function(){return u.replace}),a.d(t,"navigateTo",function(){return u.navigateTo});var c=a(149),s=a.n(c);a.d(t,"PageRenderer",function(){return s.a});var m=a(34);a.d(t,"parsePath",function(){return m.a});var d=l.a.createContext({}),b=function(e){return l.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}b.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},150:function(e,t,a){"use strict";var n=a(151),l=a(0),r=a.n(l),o=a(158),u=a.n(o),i=a(148),c=a(153),s=a.n(c);t.a=function(e){var t=e.children;return r.a.createElement(i.StaticQuery,{query:"205747956",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"I'm a Sydney based Software Developer."},{name:"keywords",content:"sofware development, programming, blogging, video games, basketball"}]},r.a.createElement("html",{lang:"en"})),r.a.createElement("body",null,r.a.createElement("div",{className:s.a.bubble},t,r.a.createElement("footer",null,r.a.createElement("p",null,"Site built in Gatsby JS. Last built: ",e.site.buildTimeZone)))))},data:n})}},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Connor Williams"},buildTimeZone:"Wednesday, November 14th, 2018, 11:52:00 pm"}}}},152:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),l=a.n(n),r=a(4),o=a.n(r),u=a(48),i=a(2),c=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return l.a.createElement(u.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},153:function(e,t,a){e.exports={bubble:"bubble-module--bubble--Pr8uS"}},154:function(e,t,a){e.exports=a.p+"static/me-a7badd1facb0631f7343195c4f7ffef8.jpg"},155:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(147),o=a(145),u=a.n(o),i=a(146),c=a.n(i);t.a=function(){return l.a.createElement(r.a,{styling:[c.a.navBar,c.a.navBarFlex,c.a.shadow]},l.a.createElement(u.a,{to:"/"},l.a.createElement(r.a,{styling:[c.a.navBarItem,c.a.navBarItemFlex,c.a.shadow]},"Home")),l.a.createElement(u.a,{to:"about/"},l.a.createElement(r.a,{styling:[c.a.navBarItem,c.a.navBarItemFlex,c.a.shadow]},"About")),l.a.createElement(u.a,{to:"projects/"},l.a.createElement(r.a,{styling:[c.a.navBarItem,c.a.navBarItemFlex,c.a.shadow]},"Projects")),l.a.createElement(u.a,{to:"contact/"},l.a.createElement(r.a,{styling:[c.a.navBarItem,c.a.navBarItemFlex,c.a.shadow]},"Contact")))}},156:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(148),o=(a(157),a(147)),u=a(154),i=a.n(u),c=a(146),s=a.n(c);t.a=function(){return l.a.createElement(o.a,{styling:[s.a.One,s.a.shadow]},l.a.createElement("div",null,l.a.createElement("div",{className:"introHeader"},l.a.createElement("h1",null,"Hi! I'm ",l.a.createElement("i",null,"Connor Williams."))),l.a.createElement("div",{className:"introBlurb"},l.a.createElement("img",{src:i.a,alt:"me.jpg"}),l.a.createElement("div",{className:"blurbText"},l.a.createElement("p",null,"I'm a Software Developer from Sydney who recently graduated with a Diploma of Software Development. This is a personal blog for me to learn web development and showcase my ",l.a.createElement(r.Link,{to:"/projects/"},"projects.")),l.a.createElement("p",null,l.a.createElement("br",null),"Feel free to learn some more about me ",l.a.createElement(r.Link,{to:"/about/"},"here!"))))))}},157:function(e,t,a){},176:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-d4075cdd2a26c6955596.js.map