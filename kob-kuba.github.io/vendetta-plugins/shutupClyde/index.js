(function(i,s){"use strict";const o={editMessage:[["receiveMessage",s.findByProps("editMessage").receiveMessage]]},a={editMessage:[["receiveMessage",function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const t=n[1];return t.author.username==="Clyde"&&t.author.discriminator==="0000"?{stop:!0}:{finalArgs:n}}]]},c=function(e,n){(function(r){s.findByProps(e)[n]=function(){for(var t=arguments.length,u=new Array(t),f=0;f<t;f++)u[f]=arguments[f];const{stop:l,finalArgs:y}=a[e].find(function(v){let[M,p]=v;return M===n})[1](...u);if(!l)return r(...y)}})(s.findByProps(e)[n])},d=function(e,n){s.findByProps(e)[n]=o[e].find(function(r){let[t,u]=r;return t===n})[1]};var g={onLoad:function(){for(const e of Object.keys(o))for(const[n,r]of o[e])c(e,n)},onUnload:function(){for(const e of Object.keys(o))for(const[n,r]of o[e])d(e,n)}};return i.default=g,Object.defineProperty(i,"__esModule",{value:!0}),i})({},vendetta.metro);
