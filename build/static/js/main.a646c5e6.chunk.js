(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r(2),s=r(4),u=r(3),i=r(5),c=r(8),l=r(0),o=r.n(l),h=r(7),m=r.n(h);r(16);function d(e){return o.a.createElement("button",{className:"square",onClick:function(){return e.onClick()}},e.value)}function v(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var a=Object(c.a)(t[r],3),n=a[0],s=a[1],u=a[2];if(e[n]&&e[n]===e[s]&&e[n]===e[u])return e[n]}return null}var f=function(e){function t(){return Object(a.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"renderSquare",value:function(e){var t=this;return o.a.createElement(d,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),o.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),o.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(o.a.Component),b=function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={stepNumber:0,history:[{squares:Array(9).fill(null)}],xIsNext:!0},e}return Object(i.a)(t,e),Object(n.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history,r=t[t.length-1].squares.slice();v(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({stepNumber:t.length,history:t.concat([{squares:r}]),xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:!(e%2)})}},{key:"render",value:function(){var e,t=this,r=this.state.history,a=r[this.state.stepNumber],n=v(a.squares);e=n?"Winner: "+n:"Next player: "+(this.state.xIsNext?"X":"O");var s=r.map(function(e,r){var a=r?"Move #"+r:"Game start";return o.a.createElement("li",{key:r},o.a.createElement("a",{href:"#",onClick:function(){return t.jumpTo(r)}},a))});return o.a.createElement("div",{className:"game"},o.a.createElement("div",{className:"game-board"},o.a.createElement(f,{squares:a.squares,onClick:function(e){return t.handleClick(e)}})),o.a.createElement("div",{className:"game-info"},o.a.createElement("div",null,e),o.a.createElement("ol",null,s)))}}]),t}(o.a.Component);m.a.render(o.a.createElement(b,null),document.getElementById("root"))},16:function(e,t,r){},9:function(e,t,r){e.exports=r(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.a646c5e6.chunk.js.map