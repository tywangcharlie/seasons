(this.webpackJsonpseasons=this.webpackJsonpseasons||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(3),s=a(6),o=a(4),c=a(7),i=a(0),l=a.n(i),u=a(5),m=a.n(u),d=(a(13),{summer:{text:"Lets hit the beach!",iconName:"sun"},winter:{text:"Burr, it is chilly",iconName:"snowflake"}}),h=function(e){var t,a,n=(t=e.lat,(a=(new Date).getMonth())>2&&a<9?t>0?"summer":"winter":t<0?"summer":"winter"),r=d[n],s=r.text,o=r.iconName;return l.a.createElement("div",{className:"season-display ".concat(n)},l.a.createElement("i",{className:"icon-left massive ".concat(o," icon")}),l.a.createElement("h1",null,s),l.a.createElement("i",{className:"icon-right massive ".concat(o," icon")}))},g=function(e){return l.a.createElement("div",{className:"ui active dimmer"},l.a.createElement("div",{className:"ui big text loader"},e.message))};g.defaultProps={message:"Loading.."};var v=g,p=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={lat:null,errorMessage:""},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("My component was rendered to the screen"),window.navigator.geolocation.getCurrentPosition((function(t){return e.setState({lat:t.coords.latitude})}),(function(t){return e.setState({errorMessage:t.message})}))}},{key:"componentDidUpdate",value:function(){console.log("My component jsut updated - it rendered!")}},{key:"renderContent",value:function(){return this.state.errorMessage&&!this.state.lat?l.a.createElement("div",null,"Error: ",this.state.errorMessage):!this.state.errorMessage&&this.state.lat?l.a.createElement(h,{lat:this.state.lat}):l.a.createElement(v,{message:"Please accept location request"})}},{key:"render",value:function(){return l.a.createElement("div",{className:"border red"},this.renderContent())}}]),t}(l.a.Component);m.a.render(l.a.createElement(p,null),document.querySelector("#root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.349524b3.chunk.js.map