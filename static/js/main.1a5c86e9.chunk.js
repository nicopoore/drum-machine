(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{50:function(e,r,t){},51:function(e,r,t){},57:function(e,r,t){"use strict";t.r(r);var a=t(2),o=t(0),c=t.n(o),n=t(14),s=t.n(n),i=(t(50),t(13)),p=(t(51),t(28)),u=t(11),d=t(15),l=t(16),m=t(19),g=t(17),h=function(e){Object(m.a)(t,e);var r=Object(g.a)(t);function t(){return Object(d.a)(this,t),r.apply(this,arguments)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.querySelectorAll(".clip").forEach((function(r){r.volume=e.props.volume/100}))}},{key:"renderPads",value:function(e,r){return Object(a.jsx)(B,{keyCode:r[e].keyCode,keyTrigger:r[e].keyTrigger,id:r[e].id,clip:r[e].url},r[e].keyCode)}},{key:"render",value:function(){var e,r=this;switch(this.props.currBank){case"ONE":return e=this.props.bankOne.map((function(e,t,a){return r.renderPads(t,a)})),Object(a.jsx)("div",{className:"pad-wrapper",children:e});case"TWO":return e=this.props.bankTwo.map((function(e,t,a){return r.renderPads(t,a)})),Object(a.jsx)("div",{className:"pad-wrapper",children:e});default:return null}}}]),t}(o.Component),k=Object(u.b)((function(e){return{currBank:e.currBank,bankOne:e.banks.bankOne,bankTwo:e.banks.bankTwo,volume:e.volume}}))(h),b=t(20),y=t(77),j=function(e){Object(m.a)(t,e);var r=Object(g.a)(t);function t(e){var a;return Object(d.a)(this,t),(a=r.call(this,e)).disabled=!a.props.power,a.toggleBank=function(){if(a.props.power){var e,r;switch(a.props.currBank){case"ONE":e="TWO",r="Heater Kit";break;case"TWO":e="ONE",r="Smooth Piano Kit";break;default:e=a.props.currBank}a.props.dispatch({type:"TOGGLE_BANK",currBank:e,currDisplay:r})}},a.togglePower=function(){var e;e=a.props.power?"Power off":"Power on",a.props.dispatch({type:"TOGGLE_POWER",power:!a.props.power,currDisplay:e})},a.toggleBank=a.toggleBank.bind(Object(b.a)(a)),a.togglePower=a.togglePower.bind(Object(b.a)(a)),a}return Object(l.a)(t,[{key:"render",value:function(){var e=Object(a.jsxs)("div",{className:"toggler",id:"bankToggler",children:[Object(a.jsx)("p",{className:"toggle-title",children:"Toggle Bank"}),Object(a.jsx)("br",{}),Object(a.jsx)(y.a,{onChange:this.toggleBank,disabled:!this.props.power,color:"primary",label:"Bank"})]}),r=Object(a.jsxs)("div",{className:"toggler",id:"powerToggler",children:[Object(a.jsx)("p",{className:"toggle-title",children:"Power"}),Object(a.jsx)("br",{}),Object(a.jsx)(y.a,{onChange:this.togglePower,checked:this.props.power,color:"primary",label:"Power"})]}),t="toggle/bank"===this.props.toggleType?"bankToggler":"powerToggler";return Object(a.jsxs)("div",{className:"toggler",id:t,children:["toggle/bank"===this.props.toggleType&&e,"toggle/power"===this.props.toggleType&&r]})}}]),t}(o.Component),O=Object(u.b)((function(e){return{power:e.power,currBank:e.currBank}}))(j);var f=Object(u.b)((function(e){return{currBank:e.currBank,currDisplay:e.currDisplay,volume:e.volume}}))((function(e){return Object(a.jsx)("div",{id:"display",children:Object(a.jsx)("h2",{children:e.currDisplay})})})),w=t(74),v=t(78),C=t(75),T=t(76),x=function(e){Object(m.a)(t,e);var r=Object(g.a)(t);function t(){return Object(d.a)(this,t),r.apply(this,arguments)}return Object(l.a)(t,[{key:"handleChange",value:function(e,r){if(this.props.power){document.querySelectorAll(".clip").forEach((function(e){e.volume=parseFloat(r)/100}));var t="Volume: ".concat(r,"%");switch(r){case 0:t="Volume: Muted";break;case 100:t="Volume: Max"}this.props.dispatch({type:"VOLUME_CHANGE",volume:r,currDisplay:t})}}},{key:"render",value:function(){return Object(a.jsx)("div",{id:"volume",children:Object(a.jsxs)(w.a,{container:!0,spacing:2,children:[Object(a.jsx)(w.a,{item:!0,children:Object(a.jsx)(C.a,{})}),Object(a.jsx)(w.a,{item:!0,xs:!0,children:Object(a.jsx)(v.a,{value:this.props.volume,step:1,min:0,max:100,onChange:this.handleChange.bind(this),"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto"})}),Object(a.jsx)(w.a,{item:!0,children:Object(a.jsx)(T.a,{})})]})})}}]),t}(o.Component),D=Object(u.b)((function(e){return{power:e.power,volume:e.volume}}))(x),_=function(e){Object(m.a)(t,e);var r=Object(g.a)(t);function t(e){var a;return Object(d.a)(this,t),(a=r.call(this,e)).handlePad=function(){if(a.props.power){var e=document.getElementById(a.props.keyTrigger);e.currentTime=0,e.play(),document.getElementById(a.props.id).focus(),a.props.dispatch({type:"UPDATE_DISPLAY",currDisplay:a.props.id})}},a.handleKey=function(e){e.key.toUpperCase()===a.props.keyTrigger&&a.handlePad()},a.handlePad=a.handlePad.bind(Object(b.a)(a)),a}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("keydown",(function(r){e.handleKey(r)}))}},{key:"componentWillUnmount",value:function(){var e=this;window.removeEventListener("keydown",(function(r){e.handleKey(r)}))}},{key:"render",value:function(){return Object(a.jsxs)("button",{className:"drum-pad",id:this.props.id,onClick:this.handlePad,children:[Object(a.jsx)("audio",{className:"clip",id:this.props.keyTrigger,src:this.props.clip}),this.props.keyTrigger]})}}]),t}(o.Component),B=Object(u.b)((function(e){return{power:e.power,currDisplay:e.currDisplay,volume:e.volume}}))(_),P="TOGGLE_POWER",E="TOGGLE_BANK",H="UPDATE_DISPLAY",z="VOLUME_CHANGE",N={power:!0,volume:50,currBank:"ONE",currDisplay:"Volume: 50%",banks:{bankOne:[{keyCode:81,keyTrigger:"Q",id:"Chord-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{keyCode:87,keyTrigger:"W",id:"Chord-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{keyCode:69,keyTrigger:"E",id:"Chord-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{keyCode:65,keyTrigger:"A",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyCode:83,keyTrigger:"S",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{keyCode:68,keyTrigger:"D",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{keyCode:90,keyTrigger:"Z",id:"Punchy-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{keyCode:88,keyTrigger:"X",id:"Side-Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}],bankTwo:[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}]}};var S=Object(p.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case P:return Object(i.a)(Object(i.a)({},e),{},{power:r.power,currDisplay:r.currDisplay});case E:return Object(i.a)(Object(i.a)({},e),{},{currBank:r.currBank,currDisplay:r.currDisplay});case H:return Object(i.a)(Object(i.a)({},e),{},{currDisplay:r.currDisplay});case z:return Object(i.a)(Object(i.a)({},e),{},{volume:r.volume,currDisplay:r.currDisplay});default:return e}}));var K=function(){return Object(a.jsx)(u.a,{store:S,children:Object(a.jsxs)("div",{className:"FullWrapper",id:"drum-machine",children:[Object(a.jsx)(O,{toggleType:"toggle/power"}),Object(a.jsx)(k,{}),Object(a.jsx)(f,{}),Object(a.jsx)(O,{toggleType:"toggle/bank"}),Object(a.jsx)(D,{})]})})},L=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,80)).then((function(r){var t=r.getCLS,a=r.getFID,o=r.getFCP,c=r.getLCP,n=r.getTTFB;t(e),a(e),o(e),c(e),n(e)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(K,{})}),document.getElementById("root")),L()}},[[57,1,2]]]);
//# sourceMappingURL=main.1a5c86e9.chunk.js.map