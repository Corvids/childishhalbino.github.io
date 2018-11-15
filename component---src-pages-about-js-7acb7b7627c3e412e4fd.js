(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(150),o=t(155),u=t(147),i=t(145),s=t.n(i),c=t(146),m=t.n(c);a.default=function(){return l.a.createElement(r.a,null,l.a.createElement(o.a,null),l.a.createElement(u.a,{styling:[m.a.One,m.a.shadow]},l.a.createElement("div",null,l.a.createElement("div",{className:[m.a.aboutHeader]},l.a.createElement("img",{src:t(154),alt:"me.jpg"}),l.a.createElement("h1",{className:[m.a.text]},"Hi! I'm Connor Williams, a Sydney based Software Developer.")))),l.a.createElement(u.a,{styling:[m.a.One,m.a.shadow]},l.a.createElement("div",{className:m.a.aboutBody},l.a.createElement("p",null,"I'm a positive, high-energy, polite, and passionate person."),l.a.createElement("p",null,"I've always loved computers - my Dad worked in IT when I was young and that definitely had an impact on me. I've been programming since I was about 12-13. I learned how to program by building Minecraft mods and little python scripts. They weren't anything ",l.a.createElement("i",null,"amazing")," but they laid the groundwork for a love of programming."),l.a.createElement("p",null,"I studied IPT in High School (grad. 2017) and graduated from a Diploma of Software Development at Mount Druitt TAFE in 2018."),l.a.createElement("p",null,"I'm particularly fluent in Java but I also know Python, C#, HTML, CSS, JS. I'm really eager to learn more about Software Development and passionate about solving problems."),l.a.createElement("p",null,"I'm currently looking for full-time work. In the meantime - I've been developing some of side projects which you can see ",l.a.createElement(s.a,{to:"/projects/"},"here.")))))}},146:function(e,a,t){e.exports={subble:"subble-module--subble--5ss1z",One:"subble-module--One--1eBK5",Two:"subble-module--Two--144ez",Three:"subble-module--Three--3Cv1B",Four:"subble-module--Four--3bWKc",navBar:"subble-module--navBar--2Avlj",shadow:"subble-module--shadow--3eA44",spacedEvenly:"subble-module--spacedEvenly--2Gc81",spaceAround:"subble-module--spaceAround--3vYZa",inlineImages:"subble-module--inlineImages--22z_p",inlineRow:"subble-module--inlineRow--2sK6d",inlineColumn:"subble-module--inlineColumn--utsAp",fitContent:"subble-module--fitContent--2JURu",reactIcons:"subble-module--reactIcons--19slI",contactItemFlex:"subble-module--contactItemFlex--1kbkJ",contactBarFlex:"subble-module--contactBarFlex--urBJy",blogHeaderFlex:"subble-module--blogHeaderFlex--36ysq",tallyTabFlex:"subble-module--tallyTabFlex--2b2W3",navBarFlex:"subble-module--navBarFlex--2eP6m",navBarItem:"subble-module--navBarItem--1B7NR",navBarItemFlex:"subble-module--navBarItemFlex--2b4ci",blogPostBody:"subble-module--blogPostBody--3XLaD",download:"subble-module--download--e8gmi",projectFlex:"subble-module--projectFlex--3BZga",projectOverlay:"subble-module--projectOverlay--3tSMR",projectImage:"subble-module--projectImage--mquYv",text:"subble-module--text--24X35",aboutHeader:"subble-module--aboutHeader--2emKq",aboutBody:"subble-module--aboutBody--1euLY",wrap:"subble-module--wrap--8KXfr"}},147:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(146),o=t.n(r);a.a=function(e){var a=e.children,t=e.styling,n=[o.a.subble].concat(t);return l.a.createElement("div",{className:n.join(" ")},a)}},148:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return p}),t.d(a,"StaticQueryContext",function(){return d}),t.d(a,"StaticQuery",function(){return b});var n=t(0),l=t.n(n),r=t(4),o=t.n(r),u=t(145),i=t.n(u);t.d(a,"Link",function(){return i.a}),t.d(a,"withPrefix",function(){return u.withPrefix}),t.d(a,"navigate",function(){return u.navigate}),t.d(a,"push",function(){return u.push}),t.d(a,"replace",function(){return u.replace}),t.d(a,"navigateTo",function(){return u.navigateTo});var s=t(149),c=t.n(s);t.d(a,"PageRenderer",function(){return c.a});var m=t(34);t.d(a,"parsePath",function(){return m.a});var d=l.a.createContext({}),b=function(e){return l.a.createElement(d.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}b.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,a,t){var n;e.exports=(n=t(152))&&n.default||n},150:function(e,a,t){"use strict";var n=t(151),l=t(0),r=t.n(l),o=t(158),u=t.n(o),i=t(148),s=t(153),c=t.n(s);a.a=function(e){var a=e.children;return r.a.createElement(i.StaticQuery,{query:"205747956",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"I'm a Sydney based Software Developer."},{name:"keywords",content:"sofware development, programming, blogging, video games, basketball"}]},r.a.createElement("html",{lang:"en"})),r.a.createElement("body",null,r.a.createElement("div",{className:c.a.bubble},a,r.a.createElement("footer",null,r.a.createElement("p",null,"Site built in Gatsby JS. Last built: ",e.site.buildTimeZone)))))},data:n})}},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Connor Williams"},buildTimeZone:"Thursday, November 15th, 2018, 11:24:50 am"}}}},152:function(e,a,t){"use strict";t.r(a);t(35);var n=t(0),l=t.n(n),r=t(4),o=t.n(r),u=t(48),i=t(2),s=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return l.a.createElement(u.a,Object.assign({location:a,pageResources:t},t.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},a.default=s},153:function(e,a,t){e.exports={bubble:"bubble-module--bubble--Pr8uS"}},154:function(e,a,t){e.exports=t.p+"static/me-a7badd1facb0631f7343195c4f7ffef8.jpg"},155:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(147),o=t(145),u=t.n(o),i=t(146),s=t.n(i);a.a=function(){return l.a.createElement(r.a,{styling:[s.a.navBar,s.a.navBarFlex,s.a.shadow]},l.a.createElement(u.a,{to:"/"},l.a.createElement(r.a,{styling:[s.a.navBarItem,s.a.navBarItemFlex,s.a.shadow]},"Home")),l.a.createElement(u.a,{to:"about/"},l.a.createElement(r.a,{styling:[s.a.navBarItem,s.a.navBarItemFlex,s.a.shadow]},"About")),l.a.createElement(u.a,{to:"projects/"},l.a.createElement(r.a,{styling:[s.a.navBarItem,s.a.navBarItemFlex,s.a.shadow]},"Projects")),l.a.createElement(u.a,{to:"contact/"},l.a.createElement(r.a,{styling:[s.a.navBarItem,s.a.navBarItemFlex,s.a.shadow]},"Contact")))}}}]);
//# sourceMappingURL=component---src-pages-about-js-7acb7b7627c3e412e4fd.js.map