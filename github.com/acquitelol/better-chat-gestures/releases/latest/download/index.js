(function(A,c,e,D,t,m,V,r,h,Y){"use strict";var u={Failed:r.getAssetIDByName("Small"),Delete:r.getAssetIDByName("ic_message_delete"),Copy:r.getAssetIDByName("toast_copy_link"),Open:r.getAssetIDByName("ic_leave_stage"),Clipboard:r.getAssetIDByName("pending-alert"),Clock:r.getAssetIDByName("clock"),Forum:r.getAssetIDByName("ic_forum_channel"),Settings:{Toasts:{Settings:r.getAssetIDByName("ic_selection_checked_24px"),Failed:r.getAssetIDByName("ic_close_circle_24px")},Initial:r.getAssetIDByName("coffee"),Update:r.getAssetIDByName("discover"),Locale:r.getAssetIDByName("ic_locale_24px"),External:r.getAssetIDByName("ic_raised_hand_list"),Edit:r.getAssetIDByName("ic_edit_24px"),Reply:r.getAssetIDByName("ic_reply_24px")}},R={shadow:(s=.1)=>({shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:s,shadowRadius:4.65,elevation:8}),displayToast:(s,n)=>{e.toasts.open({content:n=="clipboard"?`Copied ${s} to clipboard.`:s,source:n=="clipboard"?u.Clipboard:u.Settings.Initial})}},w={plugin:{source:"https://github.com/acquitelol/better-chat-gestures"},author:{profile:{"Rosie<3":"https://github.com/acquitelol"}}};const{TouchableOpacity:x,View:B,Image:H,Text:C,Animated:S}=m.General,L=c.findByProps("transitionToGuild"),P=c.findByStoreName("UserStore"),G=c.findByProps("showUserProfile"),p=e.stylesheet.createThemedStyleSheet({container:{marginTop:25,marginLeft:"5%",marginBottom:-15,flexDirection:"row"},textContainer:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap",...R.shadow()},image:{width:75,height:75,borderRadius:10,...R.shadow()},mainText:{opacity:.975,letterSpacing:.25},header:{color:h.semanticColors.HEADER_PRIMARY,fontFamily:e.constants.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},subHeader:{color:h.semanticColors.HEADER_SECONDARY,fontSize:12.75}});var k=({name:s,authors:n})=>{const a=e.React.useRef(new S.Value(1)).current,i=()=>S.spring(a,{toValue:1.1,duration:10,useNativeDriver:!0}).start(),l=()=>S.spring(a,{toValue:1,duration:250,useNativeDriver:!0}).start(),y=()=>G.showUserProfile({userId:P.getCurrentUser().id}),d={transform:[{scale:a}]};return e.React.createElement(e.React.Fragment,null,e.React.createElement(B,{style:p.container},e.React.createElement(x,{onPress:y,onPressIn:i,onPressOut:l},e.React.createElement(S.View,{style:d},e.React.createElement(H,{style:[p.image],source:{uri:P?.getCurrentUser()?.getAvatarURL()?.replace("webp","png")}}))),e.React.createElement(B,{style:p.textContainer},e.React.createElement(x,{onPress:()=>L.openURL(w.plugin.source)},e.React.createElement(C,{style:[p.mainText,p.header]},s)),e.React.createElement(B,{style:{flexDirection:"row"}},e.React.createElement(C,{style:[p.mainText,p.subHeader]},"A project by"),n.map((f,o,T)=>e.React.createElement(x,{onPress:()=>L.openURL(w.author.profile[f.name]??"https://github.com/")},e.React.createElement(C,{style:[p.mainText,p.subHeader,{paddingLeft:4,fontFamily:e.constants.Fonts.DISPLAY_BOLD,flexDirection:"row"}]},f.name,o<T.length-1?",":null)))))))};const{View:W,Text:j}=m.General,M=e.stylesheet.createThemedStyleSheet({text:{color:h.semanticColors.HEADER_SECONDARY,paddingLeft:"5.5%",paddingRight:10,marginBottom:10,letterSpacing:.25,fontFamily:e.constants.Fonts.PRIMARY_BOLD,fontSize:12}});var O=({label:s,children:n})=>e.React.createElement(W,{style:{marginTop:10}},e.React.createElement(j,{style:[M.text,M.optionText]},s.toUpperCase()),n);const{FormRow:g,FormSwitch:N,FormDivider:I,FormInput:z,FormText:q}=m.Forms,{ScrollView:K,View:_,Text:X}=m.General,v=parseInt(Y.getDebugInfo()?.discord?.version.split(".")[0])>163?15:0,J=c.findByProps("transitionToGuild","openURL"),E=e.stylesheet.createThemedStyleSheet({icon:{color:h.semanticColors.INTERACTIVE_NORMAL},item:{color:h.semanticColors.TEXT_MUTED,fontFamily:e.constants.Fonts.PRIMARY_MEDIUM},container:{width:"90%",marginLeft:"5%",borderRadius:10,backgroundColor:h.semanticColors.BACKGROUND_MOBILE_SECONDARY,...R.shadow()},subheaderText:{color:h.semanticColors.HEADER_SECONDARY,textAlign:"center",margin:10,marginBottom:50,letterSpacing:.25,fontFamily:e.constants.Fonts.PRIMARY_BOLD,fontSize:14},image:{width:"100%",maxWidth:350,borderRadius:10}});var Q=()=>{V.useProxy(t.storage);const[s,n]=e.React.useState(t.storage.tapUsernameMention),[a,i]=e.React.useState(t.storage.reply),[l,y]=e.React.useState(t.storage.userEdit),[d,f]=e.React.useState(t.storage.delay),o=e.ReactNative.Platform.OS==="android";return e.React.createElement(K,null,e.React.createElement(k,{name:t.manifest.name,authors:t.manifest.authors}),e.React.createElement(_,{style:{marginTop:20}},e.React.createElement(O,{label:"Preferences"},e.React.createElement(_,{style:[E.container]},e.React.createElement(g,{label:"Tap Username to Mention",subLabel:`Allows you to tap on a username to mention them instead of opening their profile.${o?"This option is disabled on Android.":""}`,onLongPress:()=>R.displayToast("By default, Discord opens a profile when tapping on a username in chat. With this, it now mentions them, like on Android.","tooltip"),leading:e.React.createElement(g.Icon,{style:E.icon,source:s?u.Forum:u.Failed}),trailing:e.React.createElement(N,{style:{marginLeft:-v},value:o?!1:s,onValueChange:()=>{o||(t.storage.tapUsernameMention=!t.storage.tapUsernameMention,n(t.storage.tapUsernameMention))}}),disabled:o}),e.React.createElement(I,null),e.React.createElement(g,{label:`Double Tap To ${a?"Reply":"Edit"}`,subLabel:`Allows you to tap double tap on any messages to ${a?"reply to":"edit"} them.`,onLongPress:()=>R.displayToast("When double tapping on any messages, you can now start an edit!","tooltip"),leading:e.React.createElement(g.Icon,{style:E.icon,source:a?u.Settings.Reply:u.Settings.Edit}),trailing:e.React.createElement(N,{style:{marginLeft:-v},value:a,onValueChange:()=>{t.storage.reply=!t.storage.reply,i(t.storage.reply)}})}),e.React.createElement(I,null),e.React.createElement(g,{label:`${l?"Editing":"Replying"} to your own messages`,subLabel:`Allows you to tap double tap on any of your own messages to ${l?"reply to":"edit"} them.`,onLongPress:()=>R.displayToast(`When double tapping on any of your own messages, you can now ${l?"start an edit!":"reply to them!"}`,"tooltip"),leading:e.React.createElement(g.Icon,{style:E.icon,source:l?u.Settings.Edit:u.Settings.Reply}),trailing:e.React.createElement(N,{style:{marginLeft:-v},value:l,onValueChange:()=>{t.storage.userEdit=!t.storage.userEdit,y(t.storage.userEdit)}})}),e.React.createElement(I,null),e.React.createElement(z,{value:d,onChange:T=>{t.storage.delay=T==""?300:Number(T),f(d)},placeholder:"300",title:"Maximum Delay"}),e.React.createElement(I,null),e.React.createElement(q,{style:{padding:10}},"The maximum delay between taps until the double tap event is cancelled. This is 300ms by default."))),e.React.createElement(O,{label:"Source"},e.React.createElement(_,{style:E.container},e.React.createElement(g,{label:"Source",subLabel:`Open the repository of ${t.manifest.name} externally.`,onLongPress:()=>R.displayToast(`Opens the repository of ${t.manifest.name} on GitHub in an external page to view any source code of the plugin.`,"tooltip"),leading:e.React.createElement(g.Icon,{style:E.icon,source:u.Open}),trailing:()=>e.React.createElement(g.Arrow,{style:{marginLeft:-v}}),onPress:()=>J.openURL(w.plugin.source)})))),e.React.createElement(X,{style:E.subheaderText},`Build: (${t.manifest.hash.substring(0,8)})`))};const Z=c.findByName("Chat"),b=c.findByProps("insertText"),ee=c.findByStoreName("ChannelStore"),U=c.findByStoreName("MessageStore"),$=c.findByStoreName("UserStore"),te=c.findByProps("sendMessage","startEditMessage"),F=c.findByProps("createPendingReply"),ae={unpatchChat:null,currentTapIndex:0,doubleTapState({state:s="UNKNOWN",nativeEvent:n}){const a={state:s,data:n};return s=="INCOMPLETE"&&Object.assign(a,{reason:{required:{taps:2,isAuthor:!0},received:{taps:a.data.taps,isAuthor:a.data.isAuthor}}}),console.log("DoubleTapState",a)},onLoad(){t.storage.tapUsernameMention??=e.ReactNative.Platform.select({android:!1,ios:!0,default:!0}),t.storage.reply??=!1,t.storage.delay??=300,this.unpatchChat=D.after("render",Z.prototype,(s,n)=>{Boolean(n.props?.onTapUsername)&&e.ReactNative.Platform.OS!=="android"&&D.instead("onTapUsername",n?.props,(a,i)=>{if(!t.storage.tapUsernameMention)return i.apply(this,a);const l=b.refs[0].current,{messageId:y}=a[0].nativeEvent,d=U.getMessage(l.props?.channel?.id,y);d&&b.insertText(`@${d.author.username}#${d.author.discriminator}`)}),Boolean(n.props?.onTapMessage)&&D.after("onTapMessage",n?.props,a=>{const{nativeEvent:i}=a[0],l=i.channelId,y=i.messageId;this.currentTapIndex++;let d=setTimeout(()=>{this.currentTapIndex=0},t.storage.delay);const f=ee.getChannel(l),o=U.getMessage(l,y);if(Object.assign(i,{taps:this.currentTapIndex,content:o?.content,authorId:o?.author?.id,isAuthor:o?.author?.id===$.getCurrentUser()?.id}),this.currentTapIndex!==2)return this.doubleTapState({state:"INCOMPLETE",nativeEvent:i});if(clearTimeout(d),i?.authorId===$.getCurrentUser()?.id){if(t.storage.userEdit){const T=i.content;te.startEditMessage(l,y,T),b.focus()}else F.createPendingReply({channel:f,message:o,shouldMention:!0}),b.focus();return}t.storage.reply&&F.createPendingReply({channel:f,message:o,shouldMention:!0}),b.focus(),this.currentTapIndex=0,this.doubleTapState({state:"COMPLETE",nativeEvent:i})})})},onUnload(){this.unpatchChat?.()},settings:Q};return A.default=ae,Object.defineProperty(A,"__esModule",{value:!0}),A})({},vendetta.metro,vendetta.metro.common,vendetta.patcher,vendetta.plugin,vendetta.ui.components,vendetta.storage,vendetta.ui.assets,vendetta.ui,vendetta.debug);
