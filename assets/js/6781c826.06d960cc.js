"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8854],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=i.createContext({}),s=function(e){var t=i.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=s(a),u=n,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return a?i.createElement(h,l(l({ref:t},c),{},{components:a})):i.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[d]="string"==typeof e?e:n,l[1]=r;for(var s=2;s<o;s++)l[s]=a[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},24946:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var i=a(87462),n=(a(67294),a(3905));const o={},l="Expect",r={unversionedId:"api/expect",id:"api/expect",title:"Expect",description:"Detox uses matchers to match UI elements in your app and expectations to verify those elements are in the expected state.",source:"@site/../docs/api/expect.md",sourceDirName:"api",slug:"/api/expect",permalink:"/Detox/docs/next/api/expect",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/api/expect.md",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Actions",permalink:"/Detox/docs/next/api/actions"},next:{title:"Web views",permalink:"/Detox/docs/next/api/webviews"}},p={},s=[{value:"Methods",id:"methods",level:2},{value:"<code>toBeVisible()</code>",id:"tobevisible",level:3},{value:"<code>toExist()</code>",id:"toexist",level:3},{value:"<code>toBeFocused()</code>",id:"tobefocused",level:3},{value:"<code>toHaveText(text)</code>",id:"tohavetexttext",level:3},{value:"<code>toHaveLabel(label)</code>",id:"tohavelabellabel",level:3},{value:"<code>toHaveId(id)</code>",id:"tohaveidid",level:3},{value:"<code>toHaveValue(value)</code>",id:"tohavevaluevalue",level:3},{value:"<code>toHaveSliderPosition(normalizedPosition, tolerance)</code>",id:"tohavesliderpositionnormalizedposition-tolerance",level:3},{value:"<code>toHaveToggleValue(value)</code>",id:"tohavetogglevaluevalue",level:3},{value:"<code>withTimeout(timeout)</code>",id:"withtimeouttimeout",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>not</code>",id:"not",level:3}],c={toc:s},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"expect"},"Expect"),(0,n.kt)("p",null,"Detox uses ",(0,n.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/matchers"},"matchers")," to match UI elements in your app and expectations to verify those elements are in the expected state."),(0,n.kt)("p",null,"Use ",(0,n.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/actions"},"actions")," to simulate use interaction with elements."),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#tobevisible"},(0,n.kt)("inlineCode",{parentName:"a"},".toBeVisible()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#toexist"},(0,n.kt)("inlineCode",{parentName:"a"},".toExist()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#tobefocused"},(0,n.kt)("inlineCode",{parentName:"a"},".toBeFocused()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#tohavetexttext"},(0,n.kt)("inlineCode",{parentName:"a"},".toHaveText()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#tohavelabellabel"},(0,n.kt)("inlineCode",{parentName:"a"},".toHaveLabel()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#tohaveidid"},(0,n.kt)("inlineCode",{parentName:"a"},".toHaveId()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#tohavevaluevalue"},(0,n.kt)("inlineCode",{parentName:"a"},".toHaveValue()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#tohavesliderpositionnormalizedposition-tolerance"},(0,n.kt)("inlineCode",{parentName:"a"},".toHaveSliderPosition()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#tohavetogglevaluevalue"},(0,n.kt)("inlineCode",{parentName:"a"},".toHaveToggleValue()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#not"},(0,n.kt)("inlineCode",{parentName:"a"},".not"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#withtimeouttimeout"},(0,n.kt)("inlineCode",{parentName:"a"},".withTimeout()")))),(0,n.kt)("h3",{id:"tobevisible"},(0,n.kt)("inlineCode",{parentName:"h3"},"toBeVisible()")),(0,n.kt)("p",null,"Expects the view to be at least N% visible on the screen.\nAccepts an optional parameter of percent threshold of element visibility, integer ranging from 1 to 100, that determines whether the element is visible or not. If no number is provided then defaults to 75%."),(0,n.kt)("p",null,"Negating this expectation with a ",(0,n.kt)("inlineCode",{parentName:"p"},"not")," expression expects the view\u2019s visible area to be lower than N%."),(0,n.kt)("p",null,"On iOS, visibility is defined by having the view, or one of its subviews, be topmost at the view\u2019s activation point on screen."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"await expect(element(by.id('subtitle'))).toBeVisible();\nawait expect(element(by.id('mainTitle'))).toBeVisible(35);\n")),(0,n.kt)("h3",{id:"toexist"},(0,n.kt)("inlineCode",{parentName:"h3"},"toExist()")),(0,n.kt)("p",null,"Expects the element to exist within the app\u2019s current UI hierarchy."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"await expect(element(by.id('okButton'))).toExist();\n")),(0,n.kt)("h3",{id:"tobefocused"},(0,n.kt)("inlineCode",{parentName:"h3"},"toBeFocused()")),(0,n.kt)("p",null,"Expects the element to be the focused element."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"await expect(element(by.id('emailInput'))).toBeFocused();\n")),(0,n.kt)("h3",{id:"tohavetexttext"},(0,n.kt)("inlineCode",{parentName:"h3"},"toHaveText(text)")),(0,n.kt)("p",null,"Expects the element to have the specified text."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"await expect(element(by.id('mainTitle'))).toHaveText('Welcome back!');\n")),(0,n.kt)("h3",{id:"tohavelabellabel"},(0,n.kt)("inlineCode",{parentName:"h3"},"toHaveLabel(label)")),(0,n.kt)("p",null,"Expects the element to have the specified label as its accessibility label (iOS) or content description (Android). In React Native, this corresponds to the value in the ",(0,n.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/accessibility#accessibilitylabel"},(0,n.kt)("inlineCode",{parentName:"a"},"accessibilityLabel"))," prop."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Note that in React Native apps, the ",(0,n.kt)("inlineCode",{parentName:"p"},"accessibilityLabel")," is computed in a non-standard way, which happens to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/issues/32826"},"differ between iOS and Android"),". Detox ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/issues/3977"},"bridges over that gap")," by artificially aligning Android to iOS.\nEffectively, that means that in React Native apps, performing accessibility-label based matching for elements ",(0,n.kt)("strong",{parentName:"p"},"with no explicit label")," suggests that the matching will be performed against a concatenation of labels from the child-elements, if applicable. For example:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-js"},"<View testID='title-root'>\n  <Text accessibilityLabel={'title'}>Goodbye!</Text>\n  <Text accessibilityLabel={'subtitle'}>Thanks for all the fish.</Text>\n</View>\n")),(0,n.kt)("p",{parentName:"admonition"},"In this case, where ",(0,n.kt)("inlineCode",{parentName:"p"},"title-root")," has no accessibility label of its own, matching the label of ",(0,n.kt)("inlineCode",{parentName:"p"},"title-root")," will be performed against the text: ",(0,n.kt)("inlineCode",{parentName:"p"},"title subtitle"),"."),(0,n.kt)("p",{parentName:"admonition"},"Also note that in iOS, ",(0,n.kt)("inlineCode",{parentName:"p"},"accessibilityLabel")," for primitive elements such as text, automatically receives the text itself - even if the accessibilityLabel prop isn't explicitly specified.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"await expect(element(by.id('submitButton'))).toHaveLabel('Submit');\n")),(0,n.kt)("h3",{id:"tohaveidid"},(0,n.kt)("inlineCode",{parentName:"h3"},"toHaveId(id)")),(0,n.kt)("p",null,"Expects the element to have the specified accessibility identifier. In React Native, this corresponds to the value in the ",(0,n.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view.html#testid"},(0,n.kt)("inlineCode",{parentName:"a"},"testID"))," prop."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"await expect(element(by.text('Submit'))).toHaveId('submitButton');\n")),(0,n.kt)("h3",{id:"tohavevaluevalue"},(0,n.kt)("inlineCode",{parentName:"h3"},"toHaveValue(value)")),(0,n.kt)("p",null,"Expects the element to have the specified accessibility value. In React Native, this corresponds to the value in the ",(0,n.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view.html#accessibilityvalue"},(0,n.kt)("inlineCode",{parentName:"a"},"accessibilityValue"))," prop."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"await expect(element(by.id('temperatureDial'))).toHaveValue('25');\n")),(0,n.kt)("h3",{id:"tohavesliderpositionnormalizedposition-tolerance"},(0,n.kt)("inlineCode",{parentName:"h3"},"toHaveSliderPosition(normalizedPosition, tolerance)")),(0,n.kt)("p",null,"Expects the slider element to have the specified normalized position (","[","0, 1]), within the provided tolerance (optional)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"await expect(element(by.id('slider'))).toHaveSliderPosition(0.75);\nawait expect(element(by.id('slider'))).toHaveSliderPosition(0.3113, 0.00001);\n")),(0,n.kt)("h3",{id:"tohavetogglevaluevalue"},(0,n.kt)("inlineCode",{parentName:"h3"},"toHaveToggleValue(value)")),(0,n.kt)("p",null,"Expects a toggle-able element (e.g. a Switch or a Check-Box) to be on/checked or off/unchecked. As a reference, in react-native, this is the ",(0,n.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/switch"},"equivalent switch component"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"await expect(element(by.id('switch'))).toHaveToggleValue(true);\nawait expect(element(by.id('checkbox'))).toHaveToggleValue(false);\n")),(0,n.kt)("h3",{id:"withtimeouttimeout"},(0,n.kt)("inlineCode",{parentName:"h3"},"withTimeout(timeout)")),(0,n.kt)("p",null,"Waits until the expectation is resolved for the specified amount of time. If timeout is reached before resolution, the expectation is failed."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"timeout"),"\u2014the timeout to wait, in ms"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"await waitFor(element(by.id('bigButton'))).toBeVisible().withTimeout(2000);\n")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"not"},(0,n.kt)("inlineCode",{parentName:"h3"},"not")),(0,n.kt)("p",null,"Negates the expectation, e.g.:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"await expect(element(by.id('tinyButton'))).not.toBeVisible();\nawait expect(element(by.id('tinyButton'))).not.toExist();\nawait expect(element(by.id('tinyButton'))).not.toBeFocused();\nawait expect(element(by.id('tinyButton'))).not.toHaveText('');\nawait expect(element(by.id('tinyButton'))).not.toHaveValue('');\n")))}m.isMDXComponent=!0}}]);