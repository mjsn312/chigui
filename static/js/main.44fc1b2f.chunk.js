(window.webpackJsonpmattguitar=window.webpackJsonpmattguitar||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t.p+"static/media/play3.789b3e57.mp4"},function(e,a,t){e.exports=t.p+"static/media/set1.49c31b55.jpg"},function(e,a,t){e.exports=t.p+"static/media/set2.cba67f88.jpg"},function(e,a,t){e.exports=t.p+"static/media/me.1cc551fe.jpg"},,,,function(e,a,t){e.exports=t(22)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/set3.c11372fb.jpg"},,function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(2),r=t.n(c),s=(t(18),t(10)),m=t(3),o=t(4),u=t(11),i=t(5),E=t(12),b=(t(19),t(6)),p=t.n(b),h=t(7),f=t.n(h),y=t(8),d=t.n(y),N=(t(20),t(9)),w=t.n(N),v=t(21),g=new URL(window.location.href).searchParams.get("view")||"header",k=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(i.a)(a).call(this,e))).scroll=function(e){var a;a="string"===typeof e?e:e.currentTarget.getAttribute("data-to"),document.getElementsByClassName(a)[0]&&document.getElementsByClassName(a)[0].scrollIntoView({behavior:"smooth"}),t.setState({last:a},function(){t.urlSetParams({view:t.state.last})})},t.state={last:g},t}return Object(E.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("popstate",function(a){if(null!==window.history.state){var t=window.history.state.view;e.setState({last:t||"header"})}else e.setState({last:"header"})},!1),window.addEventListener("scroll",function(a){var t=Object(s.a)(e.refs.app.children);t.splice(1,1);var n=v(t);e.state.last!==n.className&&e.setState({last:n.className})}),this.scroll(this.state.last)}},{key:"urlSetParams",value:function(e){var a=new URL(window.location.href);a.searchParams.set("view",e.view),window.history.pushState({view:e.view},"Chicago Guitar instructor - ".concat(e.view),a)}},{key:"render",value:function(){return l.a.createElement("div",{className:"App",ref:"app"},l.a.createElement(I,{scroll:this.scroll,last:this.state.last}),l.a.createElement(x,{scroll:this.scroll,last:this.state.last}),l.a.createElement(j,null),l.a.createElement(M,null),l.a.createElement(S,null),l.a.createElement(O,null),l.a.createElement(T,null),l.a.createElement(A,null),l.a.createElement(P,null))}}]),a}(n.Component),I=function(e){return l.a.createElement("div",{className:"nav"},l.a.createElement("button",{onClick:e.scroll,"data-to":"about","data-selected":"about"===e.last},"About"),l.a.createElement("button",{onClick:e.scroll,"data-to":"truth","data-selected":"truth"===e.last},"Truth"),l.a.createElement("button",{onClick:e.scroll,"data-to":"course","data-selected":"course"===e.last},"Course"),l.a.createElement("button",{onClick:e.scroll,"data-to":"feel","data-selected":"feel"===e.last},"Feel"),l.a.createElement("button",{onClick:e.scroll,"data-to":"goal","data-selected":"goal"===e.last},"My Goal"),l.a.createElement("button",{onClick:e.scroll,"data-to":"contact","data-selected":"contact"===e.last},"Contact"))},x=function(e){var a=["header","about","truth","course","feel","goal","contact"],t=a.indexOf(e.last),n=t>-1?a[t-1>0?t-1:0]:"about",c=t>-1?a[t+1<a.length-1?t+1:a.length-1]:"contact";return l.a.createElement("div",{className:"scroller"},l.a.createElement("div",{className:"up",onClick:e.scroll,"data-to":n}),l.a.createElement("div",{className:"down",onClick:e.scroll,"data-to":c}))},C=function(e){return l.a.createElement("div",{className:"bg-vid"},l.a.createElement("video",{src:e.src,autoPlay:!0,loop:!0,muted:!0}))},j=function(e){return l.a.createElement("header",{className:"header"},l.a.createElement(C,{src:p.a}),l.a.createElement("div",{className:"inner"},l.a.createElement("h1",null,"Chicago Guitar Instructor",l.a.createElement("h2",null,l.a.createElement("br",null),"Learn the Sacred Art of",l.a.createElement("br",null),"Euphoric Subconscious Expression",l.a.createElement("br",null),"Through Music",l.a.createElement("br",null),l.a.createElement("br",null),"Without ",l.a.createElement("span",{className:"fancy"},"Reading")," Music",l.a.createElement("br",null),l.a.createElement("br",null),"Every Student's First Class is Free!"))))},M=function(e){return l.a.createElement("div",{className:"about"},l.a.createElement("img",{src:d.a,alt:"set2"}),l.a.createElement("p",{className:"tekts"},"Over the past twenty years,",l.a.createElement("br",null),"I have developed a ",l.a.createElement("span",{className:"fancy"},"unique")," system",l.a.createElement("br",null),"of teaching students",l.a.createElement("br",null),"how to play guitar,",l.a.createElement("br",null),"without the need to read music.",l.a.createElement("br",null),l.a.createElement("br",null),"Music can be used as an ",l.a.createElement("span",{className:"fancy"},"outlet "),l.a.createElement("br",null),"through which one may ",l.a.createElement("span",{className:"fancy"},"express"),l.a.createElement("br",null),"his or her ",l.a.createElement("span",{className:"fancy"},"subconscious "),"emotions",l.a.createElement("br",null),"in the form of ",l.a.createElement("br",null),"combinations of vibrations",l.a.createElement("br",null),"that are simultaneously ",l.a.createElement("span",{className:"fancy"},"felt")," and"," ",l.a.createElement("span",{className:"fancy"},"heard")))},S=function(){return l.a.createElement("div",{className:"truth"},l.a.createElement("p",{className:"tekts"},"A startling amount of guitar classes",l.a.createElement("br",null),"are based on ",l.a.createElement("span",{className:"fancy"},"ideas"),l.a.createElement("br",null)," taken from ",l.a.createElement("span",{className:"fancy"},"books "),l.a.createElement("br",null),"written by ",l.a.createElement("span",{className:"fancy"},"third parties"),".",l.a.createElement("br",null),l.a.createElement("br",null),"...ideas",l.a.createElement("br",null),"the teachers",l.a.createElement("br",null),"of these ",l.a.createElement("span",{className:"fancy"},"classes"),l.a.createElement("br",null),"don't",l.a.createElement("span",{className:"fancy"}," fully")," understand!",l.a.createElement("br",null),l.a.createElement("br",null),"A lot of these instructors",l.a.createElement("br",null),"are ",l.a.createElement("span",{className:"fancy"},"just")," there for the paycheck.",l.a.createElement("br",null)," ",l.a.createElement("br",null),"To me, this is ",l.a.createElement("span",{className:"fancy"},"not a job"),".",l.a.createElement("br",null)," ",l.a.createElement("br",null),"In fact, your first class is ",l.a.createElement("span",{className:"fancy"},"free"),"!",l.a.createElement("br",null),l.a.createElement("br",null)))},O=function(){return l.a.createElement("div",{className:"course"},l.a.createElement("p",{className:"tekts"},"My course",l.a.createElement("br",null),"will teach you that the ",l.a.createElement("span",{className:"fancy"},"tiny")," details,",l.a.createElement("br",null),"that 98% of musicians completely ",l.a.createElement("span",{className:"fancy"},"overlook"),",",l.a.createElement("br",null),"are almost always the missing pieces of the",l.a.createElement("br",null),l.a.createElement("span",{className:"fancy"},'"Musician\'s Puzzle of Success"'),".",l.a.createElement("br",null)," ",l.a.createElement("br",null),"Ignorance of these",l.a.createElement("br",null),l.a.createElement("span",{className:"fancy"},"seemingly")," insignificant details",l.a.createElement("br",null),"will, without a doubt,",l.a.createElement("br",null),"limit a musician's ability to ",l.a.createElement("span",{className:"fancy"},"succeed"),".",l.a.createElement("br",null),l.a.createElement("br",null),"I know ",l.a.createElement("span",{className:"fancy"},"every single detail"),l.a.createElement("br",null),"of my system",l.a.createElement("br",null),"because ",l.a.createElement("span",{className:"fancy"},"I created it!")),l.a.createElement("p",{className:"tekts"},"I construct patterns of exercises,",l.a.createElement("br",null),"based on ",l.a.createElement("span",{className:"fancy"},"each individual student's"),l.a.createElement("br",null),"experience and goals.",l.a.createElement("br",null),l.a.createElement("br",null),"Through ",l.a.createElement("span",{className:"fancy"},"repetition"),",",l.a.createElement("br",null),"these simple, enjoyable exercises",l.a.createElement("br",null),"become ",l.a.createElement("span",{className:"fancy"},"habits"),".",l.a.createElement("br",null),l.a.createElement("br",null),"True ",l.a.createElement("span",{className:"fancy"},"habits")," do not require"," ",l.a.createElement("span",{className:"fancy"},"conscious")," thought.",l.a.createElement("br",null),l.a.createElement("br",null),"They become second nature and"," ",l.a.createElement("span",{className:"fancy"},"just happen!"),l.a.createElement("br",null),l.a.createElement("br",null),"I specialize in recognizing the"," ",l.a.createElement("span",{className:"fancy"},"tendencies"),l.a.createElement("br",null),"that ",l.a.createElement("span",{className:"fancy"},"prevent")," musicians from progressing,",l.a.createElement("br",null),"and I ",l.a.createElement("span",{className:"fancy"},"modify")," them with",l.a.createElement("br",null),"patterns that transform them into",l.a.createElement("br",null),l.a.createElement("span",{className:"fancy"},"successful habits!")))},T=function(){return l.a.createElement("div",{className:"feel"},l.a.createElement("p",{className:"tekts"},"My course heavily focuses on",l.a.createElement("br",null),l.a.createElement("span",{className:"fancy"},"feel")," over thought.",l.a.createElement("br",null),l.a.createElement("br",null),"One can easily play a ",l.a.createElement("span",{className:"fancy"},"single")," note on a guitar",l.a.createElement("br",null),"and manipulate its frequency",l.a.createElement("br",null),"to that which he desires to hear and ",l.a.createElement("span",{className:"fancy"},"feel"),".",l.a.createElement("br",null),l.a.createElement("br",null),"And when exectued ",l.a.createElement("span",{className:"fancy"},"correctly"),",",l.a.createElement("br",null),"the resulting ",l.a.createElement("span",{className:"fancy"},"euphoria")," is incomparible",l.a.createElement("br",null),"to ",l.a.createElement("span",{className:"fancy"},"any")," other sensation.",l.a.createElement("br",null),l.a.createElement("br",null),"The less you ",l.a.createElement("span",{className:"fancy"},"think")," and the more you"," ",l.a.createElement("span",{className:"fancy"},"feel"),",",l.a.createElement("br",null),"the better you will ",l.a.createElement("span",{className:"fancy"},"play"),"."),l.a.createElement("p",{className:"tekts"},"I will teach you how to experience",l.a.createElement("br",null),"the ",l.a.createElement("span",{className:"fancy"},"joy")," and"," ",l.a.createElement("span",{className:"fancy"},"emotion"),l.a.createElement("br",null),"in ",l.a.createElement("span",{className:"fancy"},"every")," note you play",l.a.createElement("br",null),"and ",l.a.createElement("span",{className:"fancy"},"every")," sound you create,",l.a.createElement("br",null),l.a.createElement("br",null),"Which will provide",l.a.createElement("br",null),"the necessary encouragement",l.a.createElement("br",null),"to practice",l.a.createElement("span",{className:"fancy"},"/"),"experiment",l.a.createElement("br",null),l.a.createElement("span",{className:"fancy"},"as often as you can."),l.a.createElement("br",null),l.a.createElement("br",null),"Remember,",l.a.createElement("span",{className:"fancy"}," habits")," are formed ",l.a.createElement("br",null),"through",l.a.createElement("span",{className:"fancy"}," repetition"),"."))},A=function(){return l.a.createElement("div",{className:"goal"},l.a.createElement("img",{src:f.a,alt:"set1"}),l.a.createElement("p",{className:"tekts"},"My ",l.a.createElement("span",{className:"fancy"},"goal"),l.a.createElement("br",null),"is to reveal the ",l.a.createElement("span",{className:"fancy"},"euphoria"),l.a.createElement("br",null),"that ",l.a.createElement("span",{className:"fancy"},"is")," the appreciation of"," ",l.a.createElement("span",{className:"fancy"},"music"),",",l.a.createElement("br",null),"so my students can experience it"," ",l.a.createElement("span",{className:"fancy"},"first-hand"),l.a.createElement("br",null),"and accumulate their own",l.a.createElement("span",{className:"fancy"}," wisdom"),",",l.a.createElement("br",null),"with the hope that they spread this ",l.a.createElement("span",{className:"fancy"},"gift"),l.a.createElement("br",null),"to ",l.a.createElement("span",{className:"fancy"},"others"),".",l.a.createElement("br",null),l.a.createElement("br",null),"You've got a ",l.a.createElement("span",{className:"fancy"},"lot")," of emotion inside of you,",l.a.createElement("br",null),"whether or not you realize it.",l.a.createElement("br",null),"Isn't it about time you ",l.a.createElement("span",{className:"fancy"},"let some out"),"?"))},P=function(){return l.a.createElement("div",{className:"contact"},l.a.createElement("p",{className:"tekts"},l.a.createElement("span",{className:"fancy"},"$40")," per class.",l.a.createElement("br",null),"First class is always ",l.a.createElement("span",{className:"fancy"},"free"),l.a.createElement("br",null),l.a.createElement("br",null),"I charge per ",l.a.createElement("span",{className:"fancy"},"class"),", rather than per"," ",l.a.createElement("span",{className:"fancy"},"hour"),l.a.createElement("br",null),"because each student is ",l.a.createElement("span",{className:"fancy"},"unique"),".",l.a.createElement("br",null),l.a.createElement("br",null),"My class is not over",l.a.createElement("br",null),"until what I'm teaching you clicks.",l.a.createElement("br",null),"And I know ",l.a.createElement("span",{className:"fancy"},"exactly")," how to make that happen!",l.a.createElement("br",null),l.a.createElement("br",null),"I currently have a 100%",l.a.createElement("span",{className:"fancy"}," ","success")," ","rate.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("span",{className:"namesies"},l.a.createElement("img",{src:w.a,alt:"meme"}),l.a.createElement("br",null),"Matthew J. Nolan",l.a.createElement("br",null),"Tinley Park, IL",l.a.createElement("br",null),"mnolan312@gmail.com"))},L=k;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[13,1,2]]]);
//# sourceMappingURL=main.44fc1b2f.chunk.js.map