(this.webpackJsonpbaza_it=this.webpackJsonpbaza_it||[]).push([[0],[,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/BazaIT.304e5212.svg"},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),c=a.n(r),i=(a(9),a(10),a(3)),o=(a(11),function(e){var t=e.title,a=e.stats,r=["red","yellow","green","blue","pink","magenta","goldenrod","lime","grey"],c=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=c.current.scrollWidth,t=c.current.scrollHeight,n=c.current.getContext("2d");!function(e,t,a){var n=a.width,l=a.height,c=a.padding,i=a.type;t.clearRect(0,0,n,l),t.fillRect(2*c,c,n-3*c,l-2*c),t.clearRect(2*c+1,c,n-3*c,l-2*c-1);var o=(n-2*c-3)/(e.length+1),s=e.reduce((function(e,t){return t[1]<e?t[1]:e}),1/0),m=(l-c-6)/(e.reduce((function(e,t){return t[1]>e?t[1]:e}),-1/0)-s);switch(i){case"polyline":t.beginPath(),t.moveTo(2*c+3,l-m*(e[0][1]-s)-c-3);for(var u=1,f=e.length;u<f;u++)t.lineTo(o*(u+1),l-m*(e[u][1]-s)-c-3),t.fillText(e[u][1],2*c-25,l-m*(e[u][1]-s)-c-3);t.stroke();break;case"bar":t.fillStyle=r[0],t.fillRect(2*c+3,l-m*(e[0][1]-s)-c-3,o,m*(e[0][1]-s));for(var h=1,E=e.length;h<E;h++)t.fillStyle=r[h%r.length],t.fillRect(2*c+3+(o+3)*h,l-m*(e[h][1]-s)-c-3,o,m*(e[h][1]-s)),t.fillStyle="black",t.fillText(e[h][1],2*c-25,l-m*(e[h][1]-s)-c-3)}}(a,n,{width:e,height:t,padding:20,type:"bar"})})),l.a.createElement("div",{className:"graphic-card"},l.a.createElement("h3",{className:"graphic-title"},t),l.a.createElement("div",{className:"graphic-diagram"},l.a.createElement("canvas",{width:"600px",height:"400px",ref:c})))}),s=(a(12),function(e){var t=e.stats,a=Object.keys(t).map((function(e,a){return l.a.createElement(o,{key:a,title:e,stats:t[e]})}));return l.a.createElement("div",{className:"statistics"},a)}),m=(a(13),function(){return l.a.createElement("div",null,"Tests are here")}),u=function(){var e=Object(n.useState)({"Vacancies per date":[["2020-09-15",35],["2020-09-18",5],["2020-09-19",15],["2020-09-21",15],["2020-09-22",25],["2020-09-23",5],["2020-09-25",35],["2020-10-15",0],["2020-10-25",10]]}),t=Object(i.a)(e,2),a=t[0],r=t[1],c={"Vacancies per date":[["2020-09-15",35],["2020-09-18",5],["2020-09-19",15],["2020-09-21",15],["2020-09-22",25],["2020-09-23",5],["2020-09-25",35],["2020-10-15",0],["2020-10-25",10]]},o={Geography:[["Lutsk",10],["Dnipro",35],["Lviv",44],["Kyiv",54],["Kharkiv",30],["Chernihiv",15],["Zaporizhzhia",11]]},u={"Average Salary":[["2020-01",15e3],["2020-02",14200],["2020-03",12e3],["2020-04",13e3],["2020-05",14e3],["2020-06",15e3],["2020-07",15e3],["2020-08",17e3],["2020-09",19e3]]};return l.a.createElement("div",{className:"profile"},l.a.createElement("nav",{className:"profile-tab"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#",title:"link to tab"},"Profile Statistics")),l.a.createElement("li",{className:"active-tab"},l.a.createElement("a",{href:"#",title:"link to tab"},"General Statistics")),l.a.createElement("li",null,l.a.createElement("a",{href:"#",title:"link to tab"},"Comparative Statistics")),l.a.createElement("li",null,l.a.createElement("a",{href:"#",title:"link to tab"},"Company Statistics")))),l.a.createElement("div",{className:"profile-tab"},l.a.createElement("nav",{className:"profile-tab-nav"},l.a.createElement("ul",null,l.a.createElement("li",{className:"active"},l.a.createElement("button",{onClick:function(){return r(c)}},"Vacancies per Day")),l.a.createElement("li",{className:"active"},l.a.createElement("button",{onClick:function(){return r(o)}},"Vacancies Geography")),l.a.createElement("li",{className:"active"},l.a.createElement("button",{onClick:function(){return r(u)}},"Average Salary")))),l.a.createElement(s,{stats:a})),l.a.createElement(m,null))};var f=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("div",{className:"nav-bar"},l.a.createElement("a",{className:"logo",href:"https://bazait.com",title:"BazaIT"},l.a.createElement("img",{src:a(14),alt:"BazaIT logo"})),l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,"\u041a\u043e\u043c\u043f\u0430\u043d\u0456\u0457"),l.a.createElement("li",null,"\u0412\u0430\u043a\u0430\u043d\u0441\u0456\u0457"),l.a.createElement("li",null,"\u041d\u043e\u0432\u0438\u043d\u0438"))),l.a.createElement("button",null,l.a.createElement("span",null),"UserName"))),l.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.cef5f4c6.chunk.js.map