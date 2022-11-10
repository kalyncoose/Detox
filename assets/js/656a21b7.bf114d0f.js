"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7857],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(y,s(s({ref:t},p),{},{components:n})):i.createElement(y,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={},s="Mocking User Activity",o={unversionedId:"guide/mocking-user-activity",id:"version-20.x/guide/mocking-user-activity",title:"Mocking User Activity",description:"Detox supports mocking user activity for iOS apps.",source:"@site/versioned_docs/version-20.x/guide/mocking-user-activity.md",sourceDirName:"guide",slug:"/guide/mocking-user-activity",permalink:"/Detox/docs/guide/mocking-user-activity",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-20.x/guide/mocking-user-activity.md",tags:[],version:"20.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mocking User Notifications",permalink:"/Detox/docs/guide/mocking-user-notifications"},next:{title:"Developing Your App While Writing Tests",permalink:"/Detox/docs/guide/developing-while-writing-tests"}},l={},c=[{value:"Mocking App Launch with a User Activity",id:"mocking-app-launch-with-a-user-activity",level:3},{value:"Sending User Activity to a Running App",id:"sending-user-activity-to-a-running-app",level:3},{value:"User Activity JSON Format",id:"user-activity-json-format",level:3},{value:"Activity Types",id:"activity-types",level:4},{value:"Spotlight Search Results",id:"spotlight-search-results",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mocking-user-activity"},"Mocking User Activity"),(0,a.kt)("p",null,"Detox supports mocking user activity for iOS apps."),(0,a.kt)("p",null,"The user activity API is used to mock an external user activity state. The app normally uses this state to continue the activity inside the app. This API is also used for associated domains, Spotlight search handling and Siri intents."),(0,a.kt)("h3",{id:"mocking-app-launch-with-a-user-activity"},"Mocking App Launch with a User Activity"),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"launchApp()")," with custom params will trigger the mocking mechanism."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"await device.launchApp({userActivity: activity});\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"describe('Background user activity', () => {\n  it('Launch with user activity', async () => {\n    await device.launchApp({userActivity: activity})\n    await expect(element(by.text('From user activity'))).toBeVisible();\n  });\n});\n")),(0,a.kt)("h3",{id:"sending-user-activity-to-a-running-app"},"Sending User Activity to a Running App"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"sendUserActivity()")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"await device.sendUserActivity(activity)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\ndescribe('Foreground user activity', () => {\n\nbeforeEach(async () => {\n  await device.launchApp({newInstance: true});\n});\n\nit('User activity from inside the app', async () => {\n  await device.sendUserActivity(activity);\n  await expect(element(by.text('From user activity'))).toBeVisible();\n });\n});\n")),(0,a.kt)("h3",{id:"user-activity-json-format"},"User Activity JSON Format"),(0,a.kt)("p",null,"User activities are passed as JSON objects to Detox, which then parses them and creates native objects representing the passed information."),(0,a.kt)("p",null,"The JSON object passed to Detox needs to provide some required data, but can also provide additional, optional data."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"activityType")),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"The activity type. Either a custom user string or a predefined constant as provided by Detox. See the Activity Types section below.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"webpageURL")),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Used when simulating an associated domain link opening. This is the URL that the user browsed to.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"referrerURL")),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Used when simulating an associated domain link opening. This is the URL that the user browsed from.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"userInfo")),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Object"),(0,a.kt)("td",{parentName:"tr",align:null},"An additional key-value pair storage, used for general purpose data passing to the app.")))),(0,a.kt)("h4",{id:"activity-types"},"Activity Types"),(0,a.kt)("p",null,"Activities can be both developer-generated user activity state, such as actions from another system\u2014another iOS device, macOS, Safari, etc., and system-generated user activities, such as user browsed an associated domain, Spotlight search tapped, Siri intent activity, etc.,  where the app should handle such an activity."),(0,a.kt)("p",null,"Detox supports mocking both types."),(0,a.kt)("p",null,"For developer-generated user activities, use a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"activityType")," that is expected by the application."),(0,a.kt)("p",null,"For system-generated user activities, use set the ",(0,a.kt)("inlineCode",{parentName:"p"},"activityType")," to a predefined constant in Detox, like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const DetoxConstants = require(\'detox/index\').DetoxConstants;\n\nconst userActivityBrowsingWeb = {\n  "activityType": DetoxConstants.userActivityTypes.browsingWeb,\n  "webpageURL": "https://my.deeplink.dtx",\n  "referrerURL": "https://google.com/"\n};\n')),(0,a.kt)("p",null,"Currently supported system-generated activity types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DetoxConstants.userActivityTypes.browsingWeb - Used for associated domains (deep links)"),(0,a.kt)("li",{parentName:"ul"},"DetoxConstants.userActivityTypes.searchableItem - Used for Spotlight search results")),(0,a.kt)("h4",{id:"spotlight-search-results"},"Spotlight Search Results"),(0,a.kt)("p",null,"In addition to ",(0,a.kt)("inlineCode",{parentName:"p"},"DetoxConstants.userActivityTypes.searchableItem"),", Detox also provides an additional constant, used to provide the item identifier, which was selected in Spotlight. The app uses this identifier to display the item on screen."),(0,a.kt)("p",null,"An example on a Spotlight search user activity:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const DetoxConstants = require(\'detox\').DetoxConstants;\n\nlet userActivitySearchableItem = {\n  "activityType": DetoxConstants.userActivityTypes.searchableItem,\n  "userInfo": {"customKey": "value"}\n};\nuserActivitySearchableItem.userInfo[DetoxConstants.searchableItemActivityIdentifier] = "com.test.itemId"\n')))}u.isMDXComponent=!0}}]);