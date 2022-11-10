"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=a,h=c["".concat(s,".").concat(g)]||c[g]||d[g]||o;return n?i.createElement(h,r(r({ref:t},u),{},{components:n})):i.createElement(h,r({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4862:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const o={id:"developing-while-writing-tests",slug:"guide/developing-while-writing-tests",title:"Developing Your App While Writing Tests",sidebar_label:"Developing Your App While Writing Tests"},r=void 0,l={unversionedId:"developing-while-writing-tests",id:"version-19.x/developing-while-writing-tests",title:"Developing Your App While Writing Tests",description:"Developing Your App While Writing Tests",source:"@site/versioned_docs/version-19.x/Guide.DevelopingWhileWritingTests.md",sourceDirName:".",slug:"/guide/developing-while-writing-tests",permalink:"/Detox/docs/19.x/guide/developing-while-writing-tests",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-19.x/Guide.DevelopingWhileWritingTests.md",tags:[],version:"19.x",frontMatter:{id:"developing-while-writing-tests",slug:"guide/developing-while-writing-tests",title:"Developing Your App While Writing Tests",sidebar_label:"Developing Your App While Writing Tests"},sidebar:"tutorialSidebar",previous:{title:"Running Locally",permalink:"/Detox/docs/19.x/guide/running-locally"},next:{title:"Running on CI",permalink:"/Detox/docs/19.x/guide/running-on-ci"}},s={},p=[{value:"Developing Your App While Writing Tests",id:"developing-your-app-while-writing-tests",level:2},{value:"Step 1: Build Your App in Debug",id:"step-1-build-your-app-in-debug",level:3},{value:"Step 2: Make Sure Your React-Native Packager is Running",id:"step-2-make-sure-your-react-native-packager-is-running",level:3},{value:"Step 3: Run Detox Tests",id:"step-3-run-detox-tests",level:3},{value:"Step 4: Make Changes to Your App\u2019s Codebase as Usual",id:"step-4-make-changes-to-your-apps-codebase-as-usual",level:3},{value:"Step 5: Re-run Detox Tests Without Re-installing the App",id:"step-5-re-run-detox-tests-without-re-installing-the-app",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"developing-your-app-while-writing-tests"},"Developing Your App While Writing Tests"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If your app requires active development, such as adding testID fields for tests, this is a good workflow. It allows you to work both on your app and your tests at the same time.")),(0,a.kt)("p",null,"The main idea behind this workflow is to run your app in debug with Detox on a simulator. Once the app is up and running, it will still be connected to the React Native packager. This means that you\u2019ll be able to do JavaScript code modifications in your app codebase and press CMD+R to reload the bundle inside the Detox simulator."),(0,a.kt)("h3",{id:"step-1-build-your-app-in-debug"},"Step 1: Build Your App in Debug"),(0,a.kt)("p",null,"Detox is going to need the executable for your app. This means we need to build it first. Since we want a build that\u2019s connected to the live React Native packager (to update bundle changes), we\u2019re going to need a ",(0,a.kt)("em",{parentName:"p"},"debug")," build."),(0,a.kt)("p",null,"There are multiple ways to build your app, let\u2019s find the alternative you like best:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},'I like to build my app by clicking "Play" in Xcode')," \u2014 This isn\u2019t a great approach here because using Xcode IDE to build your app will place the executable in an internal directory which path that is difficult to predict (",(0,a.kt)("inlineCode",{parentName:"p"},"~/Library/Developer/Xcode/DerivedData/..."),"). This means we won\u2019t be able to tell Detox where to find it. Although you can change the default ",(0,a.kt)("inlineCode",{parentName:"p"},"derivedData")," path by altering your Xcode settings, we encourage you to try the alternative ways to build.\nIf you\u2019d like to debug Detox with Xcode, see ",(0,a.kt)("a",{parentName:"p",href:"/Detox/docs/19.x/guide/debugging-in-xcode"},"Debugging In Xcode"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"I like to build my app with ",(0,a.kt)("inlineCode",{parentName:"strong"},"react-native run-ios"))," \u2014 The official React Native command line tools provide a script to build your app from terminal. Go to your project root and type ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native run-ios"),". This will build the app in debug and place the executable in the folder ",(0,a.kt)("inlineCode",{parentName:"p"},"ios/build/Build/Products/Debug-iphonesimulator"),". This is a great way to build because it\u2019s easy to specify this path in Detox configuration inside ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),". This is actually the path we specified in the getting started tutorial."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"react-native run-ios\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"I like to build my app with ",(0,a.kt)("inlineCode",{parentName:"strong"},"detox build"))," \u2014 During the installation instructions, we provided Detox configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," with a command line to build your app executable. We can execute this build command by going to the project root and typing ",(0,a.kt)("inlineCode",{parentName:"p"},"detox build"),". Please make sure that you\u2019re using a Detox configuration that builds a debug version of your app. The default we specified in the getting started tutorial should work."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"detox build\n")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"TIP: Running ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native run-ios")," will also start a simulator and install your app on it, running ",(0,a.kt)("inlineCode",{parentName:"p"},"detox test")," later will possibly start a different simulator, so you\u2019ll find yourself with two open simulators. You can safely close the simulator started by ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native"),", everything will continue working as expected.")),(0,a.kt)("h3",{id:"step-2-make-sure-your-react-native-packager-is-running"},"Step 2: Make Sure Your React-Native Packager is Running"),(0,a.kt)("p",null,"If you can\u2019t see a React Native packager instance running in a terminal, you can run it manually by typing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"react-native start\n")),(0,a.kt)("p",null,"The packager instance will reload the JavaScript bundle of your app when you press CMD+R in the simulator window. This will allow you to make modifications in your app codebase."),(0,a.kt)("h3",{id:"step-3-run-detox-tests"},"Step 3: Run Detox Tests"),(0,a.kt)("p",null,"Type the following inside your project root:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"detox test\n")),(0,a.kt)("p",null,"This will use Detox to find the app executable we\u2019ve built in step 1, install it on a simulator and run Detox tests against it."),(0,a.kt)("h3",{id:"step-4-make-changes-to-your-apps-codebase-as-usual"},"Step 4: Make Changes to Your App\u2019s Codebase as Usual"),(0,a.kt)("p",null,"You can keep working on the JavaScript codebase of your app as usual. As long as you keep the simulator from step 3 running, you\u2019ll be able to press CMD+R inside and reload your app with the new changes."),(0,a.kt)("h3",{id:"step-5-re-run-detox-tests-without-re-installing-the-app"},"Step 5: Re-run Detox Tests Without Re-installing the App"),(0,a.kt)("p",null,"You can make changes to your Detox tests as well. When you want to run your tests on the simulator, we recommend using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"detox test --reuse\n")),(0,a.kt)("p",null,"The reuse option will prevent Detox from compiling and re-installing your app again in the simulator. The tests will simply run against the current app instance currently running in the simulator. This will make the process much faster."))}d.isMDXComponent=!0}}]);