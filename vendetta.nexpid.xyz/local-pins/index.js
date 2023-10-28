(function(d,Y,t,s,P,Q,f,h,E,I,W,T,J){"use strict";const K=s.findByStoreName("ThemeStore"),q=s.findByProps("colors","meta");s.findByProps("triggerHaptic");const Z=s.findByProps("TextStyleSheet").TextStyleSheet,{View:A,Text:_,Pressable:ee}=E.General;s.findByProps("TableRow");const te=s.findByProps("ActionSheet")?.ActionSheet??s.find(function(e){return e.render?.name==="ActionSheet"}),D=s.findByProps("openLazy","hideActionSheet"),{openLazy:ne,hideActionSheet:M}=D,{ActionSheetTitleHeader:re,ActionSheetCloseButton:ie,ActionSheetContentContainer:ae}=s.findByProps("ActionSheetTitleHeader","ActionSheetCloseButton","ActionSheetContentContainer");s.findByProps("ActionSheetRow")?.ActionSheetRow,s.findByName("Navigator")??s.findByProps("Navigator")?.Navigator,s.findByProps("getRenderCloseButton")?.getRenderCloseButton??s.findByProps("getHeaderCloseButton")?.getHeaderCloseButton,s.findByProps("popModal","pushModal");const m=s.findByProps("useSearchControls"),B=s.findByProps("useSettingSearchQuery"),ce=s.findByName("SettingSearchBar");s.findByProps("SvgXml"),s.findByProps("useInMainTabsExperiment","isInMainTabsExperiment"),s.find(function(e){return e?.WebView&&!e.default}).WebView;function se(e){return q.meta.resolveSemanticColor(K.theme,e)}function le(e,n){try{ne(new Promise(function(r){return r({default:e})}),"ActionSheet",n)}catch(r){Q.logger.error(r.stack),I.showToast("Got error when opening ActionSheet! Please check debug logs",h.getAssetIDByName("Smal"))}}Object.assign(function(e){let{searchContext:n,controls:r}=e;return t.React.createElement(t.ReactNative.ScrollView,{scrollEnabled:!1},t.React.createElement(m.default,{searchContext:n,controls:r},t.React.createElement(ce,null)))},{useAdvancedSearch:function(e){const n=B.useSettingSearchQuery(),r=m.useSearchControls(e,!1,function(){});return t.React.useEffect(function(){return function(){B.setSettingSearchQuery(""),B.setIsSettingSearchActive(!1)}},[]),[n,r]}});function oe(e){let{title:n,onPress:r,icon:i}=e;const a=t.stylesheet.createThemedStyleSheet({androidRipple:{color:f.semanticColors.ANDROID_RIPPLE},icon:{height:18,tintColor:f.semanticColors.HEADER_SECONDARY,opacity:.5}}),c=r?ee:A;return t.React.createElement(c,{android_ripple:a.androidRipple,disabled:!1,accessibilityRole:"button",onPress:r,style:{marginBottom:8,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}},i&&t.React.createElement(A,{style:{marginRight:4}},t.React.createElement(t.ReactNative.Image,{style:a.icon,source:i,resizeMode:"contain"})),t.React.createElement(v,{variant:"text-sm/semibold",color:"HEADER_SECONDARY"},n))}function ue(e){let{title:n,onTitlePress:r,icon:i,children:a,padding:c}=e;const o=t.stylesheet.createThemedStyleSheet({main:{backgroundColor:f.semanticColors.CARD_PRIMARY_BG,borderRadius:16,overflow:"hidden",flex:1}});return t.React.createElement(A,{style:{marginHorizontal:16,marginTop:16}},t.React.createElement(oe,{title:n,onPress:r,icon:i}),t.React.createElement(A,{style:o.main},c?t.React.createElement(A,{style:{paddingHorizontal:16,paddingVertical:16}},a):a))}var x;(function(e){function n(i){let{children:a,onPress:c}=i;return t.React.createElement(v,{variant:"text-md/bold",onPress:c},a)}e.Bold=n;function r(i){let{children:a,onPress:c}=i;return t.React.createElement(_,{style:{textDecorationLine:"underline"},onPress:c},a)}e.Underline=r})(x||(x={}));function v(e){let{variant:n,lineClamp:r,color:i,align:a,style:c,onPress:o,getChildren:u,children:g,liveUpdate:y}=e;const[R,p]=t.React.useReducer(function(S){return~S},0);return t.React.useEffect(function(){if(!y)return;const S=new Date().setMilliseconds(1e3);let X,j;return j=setTimeout(function(){p(),X=setInterval(p,1e3)},S-Date.now()),function(){clearTimeout(j),clearInterval(X)}},[]),t.React.createElement(_,{style:[n?Z[n]:{},i?{color:se(f.semanticColors[i])}:{},a?{textAlign:a}:{},c??{}],numberOfLines:r,onPress:o},u?.()??g)}function L(e){let{onPress:n,onLongPress:r,icon:i,style:a,destructive:c,color:o}=e;const u=t.stylesheet.createThemedStyleSheet({headerStyleIcon:{width:24,height:24,marginRight:10,tintColor:f.semanticColors.HEADER_PRIMARY},cardStyleIcon:{width:22,height:22,marginLeft:5,tintColor:f.semanticColors.INTERACTIVE_NORMAL},destructiveIcon:{tintColor:f.semanticColors.TEXT_DANGER}});return t.React.createElement(t.ReactNative.TouchableOpacity,{onPress:n,onLongPress:r},t.React.createElement(t.ReactNative.Image,{style:[typeof a=="string"?a==="header"?u.headerStyleIcon:u.cardStyleIcon:a,c&&u.destructiveIcon,o&&{tintColor:o}].filter(function(g){return!!g}),source:i}))}const{ActionSheetRow:N}=s.findByProps("ActionSheetRow"),{FormRow:G}=s.findByProps("FormRow");function de(e){let{label:n,icon:r,onPress:i}=e;const a=t.stylesheet.createThemedStyleSheet({iconComponent:{width:24,height:24,tintColor:f.semanticColors.INTERACTIVE_NORMAL}});return N?React.createElement(N,{label:n,icon:React.createElement(N.Icon,{source:r,IconComponent:function(){return React.createElement(t.ReactNative.Image,{resizeMode:"cover",style:a.iconComponent,source:r})}}),onPress:i}):React.createElement(G,{label:n,leading:React.createElement(G.Icon,{source:r}),onPress:i})}function fe(e){const n=b(e.channel_id,e.id);return React.createElement(de,{label:n?"Unpin Message Locally":"Pin Message Locally",icon:h.getAssetIDByName("ic_message_pin"),onPress:function(){n?(k(e.channel_id,e.id),I.showToast(`Unpinned ${e.nick??e.author.globalName??e.author.username}'s message locally`,h.getAssetIDByName("ic_message_pin"))):($(e.channel_id,e.id),I.showToast(`Pinned ${e.nick??e.author.globalName??e.author.username}'s message locally`,h.getAssetIDByName("ic_message_pin"))),M()}})}const{FormCheckboxRow:H}=E.Forms;function he(e){let{defFilters:n,set:r}=e;const[i,a]=t.React.useState(n);return r(i),t.React.createElement(te,null,t.React.createElement(ae,null,t.React.createElement(re,{title:"Filters",trailing:t.React.createElement(ie,{onPress:function(){return M()}})}),t.React.createElement(H,{label:"Server pinned",onPress:function(){return a(i.includes("server")?i.filter(function(c){return c!=="server"}):i.concat("server"))},selected:i.includes("server")}),t.React.createElement(H,{label:"Locally pinned",onPress:function(){return a(i.includes("local")?i.filter(function(c){return c!=="local"}):i.concat("local"))},selected:i.includes("local")})))}const{View:ge}=E.General,O=s.findByStoreName("MessageStore"),ye=s.findByName("ChannelPinsConnected",!1),Re=s.findByProps("fetchMessages","sendMessage");function pe(e){let{channelId:n}=e;const[r,i]=t.React.useState(l.preferFilters??["server","local"]),[a,c]=t.React.useState(0);return Ae({filters:function(){return le(he,{defFilters:r,set:i})},clear:function(){return Array.isArray(a)&&T.showConfirmationAlert({title:"Clear local pins",content:`Are you sure you want to clear **${a.length}** pin${a.length!==1?"s":""} in this channel?`,confirmText:"Clear",confirmColor:"red",onConfirm:function(){F(n),c([])},isDismissable:!0})}}),V[n]=function(o){return[...r.includes("local")?Array.isArray(a)?a:[]:[],...r.includes("server")?o:[]]},t.React.useEffect(function(){(async function(){const o=[],u=z(n)?.slice().reverse()??[];for(let g=0;g<u.length;g++){const y=u[g];c(g/u.length);let R=O.getMessage(n,y.id);if(!R){const p=[(BigInt(y.id)+1n).toString(),(BigInt(y.id)-1n).toString()];await Re.fetchMessages({channelId:n,before:p[0],after:p[1],limit:1}),R=O.getMessage(n,y.id)}R&&o.push(R)}c(o)})()},[]),Array.isArray(a)?t.React.createElement(ye.default,{channelId:n}):t.React.createElement(ge,{style:{alignItems:"center",justifyContent:"center",flex:1}},t.React.createElement(t.ReactNative.ActivityIndicator,{size:"large",style:{marginBottom:10}}),t.React.createElement(v,{variant:"text-lg/semibold",color:"TEXT_NORMAL",align:"center"},Math.floor(a*100),"%"))}const{View:Se}=E.General,Ee=s.findByName("ChannelSettingsModal",!1),Pe=s.findByName("ChannelPinsConnected",!1);let w={};function Ae(e){w=e}const V={};function Ce(){const e=new Array;return e.push(P.after("default",Pe,function(n,r){const{channelId:i,loaded:a,messages:c}=r.props;return{...r,props:{...r.props,messages:a&&c?V[i]?.(c)??c:c}}})),e.push(P.before("openLazy",D,function(n){let[r,i,a]=n;const c=a?.message;i!=="MessageLongPressActionSheet"||!c||r.then(function(o){const u=P.after("default",o,function(g,y){t.React.useEffect(function(){return function(){u()}},[]);const R=W.findInReactTree(y,function(S){return S?.[0]?.type?.name==="ButtonRow"});if(!R)return y;let p=Math.max(R.findIndex(function(S){return S.props.message===t.i18n.Messages.MARK_UNREAD}),0);R.splice(p,0,t.React.createElement(fe,c))})})})),e.push(P.after("default",Ee,function(n,r){const i=r.props.screens;i.PINNED_MESSAGES.headerRight=function(){return t.React.createElement(Se,{style:{flexDirection:"row-reverse"}},t.React.createElement(L,{icon:h.getAssetIDByName("ic_filter"),style:"header",onPress:function(){return w.filters?.()}}),t.React.createElement(L,{icon:h.getAssetIDByName("ic_message_delete"),style:"header",destructive:!0,onPress:function(){return w.clear?.()}}))},e.push(P.after("render",i.PINNED_MESSAGES,function(a,c){return t.React.createElement(pe,{channelId:c.props.channelId})}))})),function(){return e.forEach(function(n){return n()})}}const{ScrollView:ve}=E.General,{FormRow:C}=E.Forms,Ie=t.stylesheet.createThemedStyleSheet({destructiveIcon:{tintColor:f.semanticColors.TEXT_DANGER}}),Be={color:"TEXT_DANGER",variant:"text-md/semibold"};function Ne(){return J.useProxy(l),React.createElement(ve,null,React.createElement(ue,{title:"Settings",icon:h.getAssetIDByName("ic_cog_24px")},React.createElement(C,{label:"Data size",subLabel:l.pinned?`${Math.floor(JSON.stringify(l.pinned).length/1e3*100)/100} kilobytes`:"N/A",leading:React.createElement(C.Icon,{source:h.getAssetIDByName("ic_message_edit")})}),React.createElement(C,{label:React.createElement(v,Be,"Clear data"),leading:React.createElement(C.Icon,{style:Ie.destructiveIcon,source:h.getAssetIDByName("ic_message_delete")}),trailing:React.createElement(C.Arrow,null),onPress:function(){return T.showConfirmationAlert({title:"Clear data",content:"Are you sure you want to clear all local pin data?",confirmText:"Clear",confirmColor:"red",onConfirm:function(){delete l.pinned},isDismissable:!0})}})))}const l=Y.storage;function z(e){return l.pinned?.[e]}function F(e){l.pinned??(l.pinned={}),delete l.pinned?.[e]}function b(e,n){return l.pinned?.[e]?.some(function(r){return r.id===n})}function $(e,n){var r;l.pinned??(l.pinned={}),(r=l.pinned)[e]??(r[e]=[]),b(e,n)||l.pinned[e].push({id:n,pinned:Date.now()})}function k(e,n){l.pinned??(l.pinned={}),l.pinned[e]=(l.pinned[e]??[]).filter(function(r){return r.id!==n})}let U;var we={onLoad:function(){return U=Ce()},onUnload:function(){return U()},settings:Ne};return d.addPin=$,d.clearPins=F,d.default=we,d.getPins=z,d.hasPin=b,d.removePin=k,d.vstorage=l,Object.defineProperty(d,"__esModule",{value:!0}),d})({},vendetta.plugin,vendetta.metro.common,vendetta.metro,vendetta.patcher,vendetta,vendetta.ui,vendetta.ui.assets,vendetta.ui.components,vendetta.ui.toasts,vendetta.utils,vendetta.ui.alerts,vendetta.storage);
