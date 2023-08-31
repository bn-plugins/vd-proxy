(function(w,H,l,E,I,e,v,y,p,$,de,z){"use strict";const{Animated:T}=e.ReactNative;function G(n){let{duration:r,children:a,style:i,fade:t,trigger:s,customOpacity:u,setDisplay:S,animateOnInit:f}=n;f??=!0;const C=e.React.useRef(!0),B=e.React.useRef(!0),d=e.React.useRef(new T.Value(f&&t==="in"?1:0)).current;return e.React.useEffect(function(){if(!f&&C.current){C.current=!1;return}!f&&B.current&&(d.setValue(t==="in"?0:1),B.current=!1),T.timing(d,{toValue:u??(t==="in"?1:0),duration:r,useNativeDriver:!0}).start()},[d,t,u,s]),e.React.createElement(T.View,{style:[{opacity:d},S&&d._value===0&&{display:"none"},i]},a)}const{ScrollView:U}=y.General,{default:k}=l.findByProps("DCDAutoModerationSystemMessageView","default"),F=l.findByName("MessageRecord"),j=l.findByName("RowManager"),P=l.findByStoreName("SelectedChannelStore"),N=l.findByStoreName("UserStore"),{receiveMessage:Y}=l.findByProps("receiveMessage"),{createBotMessage:K}=l.findByProps("createBotMessage"),{getText:q}=l.findByProps("openSystemKeyboard","getText");function D(){const n=q(P.getChannelId());if(n.trim()!=="")if(o.previewType==="popup")$.showConfirmationAlert({title:"Message Preview",onConfirm:function(){},children:React.createElement(U,{style:{marginVertical:12,maxHeight:e.ReactNative.Dimensions.get("window").height*.7}},React.createElement(k,{rowGenerator:new j,message:new F({id:"0",channel_id:P.getChannelId(),author:N.getCurrentUser(),content:n})}))});else{const r=P.getChannelId(),a=N.getCurrentUser();return Y(r,Object.assign(K({channelId:r,content:n}),{author:a}))}}const{Pressable:J,View:Q}=y.General,g=40,m=e.stylesheet.createThemedStyleSheet({androidRipple:{color:p.semanticColors.ANDROID_RIPPLE,cornerRadius:2147483647},actionButton:{borderRadius:2147483647,height:g,width:g,marginHorizontal:4,flexShrink:0,flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:p.semanticColors.BACKGROUND_SECONDARY_ALT,marginLeft:8,marginTop:-4},actionIcon:{tintColor:p.semanticColors.INTERACTIVE_NORMAL,width:g*.6,height:g*.6}});function W(n){let{inputProps:r}=n;const a=e.React.useRef(null);r.onChangeText?R.push(E.after("onChangeText",r,function(s){let[u]=s;return a.current=u},!0)):r.onChangeText=function(s){return a.current=s};const i=a.current?.length>0,t=i?J:Q;return e.React.createElement(G,{style:{flexDirection:"row",position:"absolute",left:0,top:-g,zIndex:3},duration:100,fade:i?"in":"out"},e.React.createElement(t,{android_ripple:m.androidRipple,disabled:!1,accessibilityRole:"button",accessibilityState:{disabled:!1,expanded:!1},accessibilityLabel:"Open markdown preview",accessibilityHint:"Open a modal which shows your message's markdown preview",onPress:i?function(){return D()}:void 0,style:m.actionButton},e.React.createElement(e.ReactNative.Image,{style:m.actionIcon,source:v.getAssetIDByName("ic_eye")})))}const{ChatInput:X}=l.findByProps("ChatInput"),Z=l.findByTypeName("ChatInputActionButton"),R=[];function ee(){return R.push(E.after("render",X.prototype,function(n,r){const a=I.findInReactTree(r,function(t){return typeof t?.placeholder=="string"});if(!a?.onChangeText)return;const i=I.findInReactTree(r,function(t){return t?.type?.displayName==="View"&&Array.isArray(t?.props?.children)})?.props?.children;i&&o.buttonType==="pill"&&i.unshift(React.createElement(W,{inputProps:a}))})),R.push(E.after("type",Z,function(n,r){let[a]=n;a?.accessibilityLabel===e.i18n.Messages.SEND&&r.type?.render&&R.push(E.after("render",r.type,function(i,t){t.props&&(t.props.onLongPress=function(){return o.buttonType==="send"&&D()})},!0))})),function(){return R.forEach(function(n){return n()})}}const te=l.findByStoreName("ThemeStore"),ne=l.findByProps("colors","meta"),{TextStyleSheet:re}=l.findByProps("TextStyleSheet"),{View:h,Text:x,Pressable:ae}=y.General;l.find(function(n){return n.render?.name==="ActionSheet"}),l.findByProps("openLazy","hideActionSheet"),l.findByProps("ActionSheetTitleHeader","ActionSheetCloseButton","ActionSheetContentContainer"),l.findByName("Navigator"),l.findByProps("getRenderCloseButton"),l.findByProps("popModal","pushModal");function ie(n){return ne.meta.resolveSemanticColor(te.theme,n)}function le(n){let{title:r,onPress:a,icon:i}=n;const t=e.stylesheet.createThemedStyleSheet({androidRipple:{color:p.semanticColors.ANDROID_RIPPLE},icon:{height:18,tintColor:p.semanticColors.HEADER_SECONDARY,opacity:.5}}),s=a?ae:h;return e.React.createElement(s,{android_ripple:t.androidRipple,disabled:!1,accessibilityRole:"button",onPress:a,style:{marginBottom:8,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}},i&&e.React.createElement(h,{style:{marginRight:4}},e.React.createElement(e.ReactNative.Image,{style:t.icon,source:i,resizeMode:"contain"})),e.React.createElement(M,{variant:"text-sm/semibold",color:"HEADER_SECONDARY"},r))}function oe(n){let{title:r,onTitlePress:a,icon:i,children:t,padding:s}=n;const u=e.stylesheet.createThemedStyleSheet({main:{backgroundColor:p.semanticColors.BACKGROUND_TERTIARY,borderRadius:16,overflow:"hidden",flex:1}});return e.React.createElement(h,{style:{marginHorizontal:16,marginTop:16}},e.React.createElement(le,{title:r,onPress:a,icon:i}),e.React.createElement(h,{style:u.main},s?e.React.createElement(h,{style:{paddingHorizontal:16,paddingVertical:16}},t):t))}var _;(function(n){function r(i){let{children:t,onPress:s}=i;return e.React.createElement(M,{variant:"text-md/bold",onPress:s},t)}n.Bold=r;function a(i){let{children:t,onPress:s}=i;return e.React.createElement(x,{style:{textDecorationLine:"underline"},onPress:s},t)}n.Underline=a})(_||(_={}));function M(n){let{variant:r,lineClamp:a,color:i,align:t,style:s,onPress:u,getChildren:S,children:f,liveUpdate:C}=n;const[B,d]=e.React.useReducer(function(A){return~A},0);return e.React.useEffect(function(){if(!C)return;const A=new Date().setMilliseconds(1e3);let L,V;return V=setTimeout(function(){d(),L=setInterval(d,1e3)},A-Date.now()),function(){clearTimeout(V),clearInterval(L)}},[]),e.React.createElement(x,{style:[r?re[r]:{},i?{color:ie(p.semanticColors[i])}:{},t?{textAlign:t}:{},s??{}],numberOfLines:a,onPress:u},S?.()??f)}const{ScrollView:se}=y.General,{FormRow:c,FormRadioRow:b}=y.Forms;function ce(){return o.buttonType??="pill",o.previewType??="popup",z.useProxy(o),React.createElement(se,null,React.createElement(oe,{title:"Settings",icon:v.getAssetIDByName("ic_cog")},React.createElement(c,{label:"Button type",leading:React.createElement(c.Icon,{source:v.getAssetIDByName("ic_message_edit")})}),React.createElement(b,{label:"Floating Pill",onPress:function(){return o.buttonType="pill"},trailing:React.createElement(c.Arrow,null),selected:o.buttonType==="pill",style:{marginHorizontal:12}}),React.createElement(b,{label:"Send button",subLabel:"Holding the send button",onPress:function(){return o.buttonType="send"},trailing:React.createElement(c.Arrow,null),selected:o.buttonType==="send",style:{marginHorizontal:12}}),React.createElement(c,{label:"Preview type",leading:React.createElement(c.Icon,{source:v.getAssetIDByName("ic_message_edit")})}),React.createElement(b,{label:"Popup",onPress:function(){return o.previewType="popup"},trailing:React.createElement(c.Arrow,null),selected:o.previewType==="popup",style:{marginHorizontal:12}}),React.createElement(b,{label:"Ephemeral message",onPress:function(){return o.previewType="clyde"},trailing:React.createElement(c.Arrow,null),selected:o.previewType==="clyde",style:{marginHorizontal:12}})))}const o=H.storage;let O;var ue={onLoad:function(){return O=ee()},onUnload:function(){return O?.()},settings:ce};return w.default=ue,w.vstorage=o,Object.defineProperty(w,"__esModule",{value:!0}),w})({},vendetta.plugin,vendetta.metro,vendetta.patcher,vendetta.utils,vendetta.metro.common,vendetta.ui.assets,vendetta.ui.components,vendetta.ui,vendetta.ui.alerts,vendetta.ui.toasts,vendetta.storage);