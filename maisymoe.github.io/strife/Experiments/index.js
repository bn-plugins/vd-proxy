(function(a,e,r,s,l){"use strict";const{getSerializedState:c}=r.findByProps("getSerializedState"),{getCurrentUser:u}=r.findByStoreName("UserStore");function i(){try{const t=u();t.flags+=1,e.FluxDispatcher._actionHandlers._computeOrderedActionHandlers("OVERLAY_INITIALIZE").filter(function(n){return n.name.includes("Experiment")}).forEach(function(n){let{actionHandler:N}=n;return N({serializedExperimentStore:c(),user:t})})}catch(t){l.logger.error("Failed to enable experiments...",t)}}function o(){e.FluxDispatcher.unsubscribe("CONNECTION_OPEN",o),i()}const{getCurrentUser:d}=r.findByStoreName("UserStore");d()?i():e.FluxDispatcher.subscribe("CONNECTION_OPEN",o);const f=function(){return s.showConfirmationAlert({title:"Wait!",content:"Disabling experiments requires a restart - would you like to do that now?",confirmText:"Sure",cancelText:"Not now",confirmColor:"red",onConfirm:e.ReactNative.NativeModules.BundleUpdaterManager.reload})};return a.onUnload=f,a})({},vendetta.metro.common,vendetta.metro,vendetta.ui.alerts,vendetta);
