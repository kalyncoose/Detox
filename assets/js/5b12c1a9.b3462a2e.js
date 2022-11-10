"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7940],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),g=o,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||a;return t?i.createElement(m,r(r({ref:n},c),{},{components:t})):i.createElement(m,r({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<a;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2082:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=t(7462),o=(t(7294),t(3905));const a={},r="Overview",s={unversionedId:"config/overview",id:"version-20.x/config/overview",title:"Overview",description:"If you prefer to read TypeScript files instead of docs, feel free to browse through",source:"@site/versioned_docs/version-20.x/config/overview.mdx",sourceDirName:"config",slug:"/config/overview",permalink:"/Detox/docs/config/overview",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-20.x/config/overview.mdx",tags:[],version:"20.x",frontMatter:{},sidebar:"apiSidebar",next:{title:"Devices",permalink:"/Detox/docs/config/devices"}},l={},p=[{value:"Config structure",id:"config-structure",level:2},{value:"Path conventions",id:"path-conventions",level:2},{value:"Extending",id:"extending",level:2},{value:"Default configuration",id:"default-configuration",level:2}],c={toc:p};function d(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you prefer to read TypeScript files instead of docs, feel free to browse through\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/blob/master/detox/index.d.ts"},"the typings file")," provided by Detox.")),(0,o.kt)("p",null,"Running automated tests on your mobile application implies firstly that\nyou have a mobile device and an application. Unlike unit tests, where\npassing tests don\u2019t require extra checks, the end-to-end tests are better\nto be executed multiple times \u2013 on various devices and app flavors (e.g.\n",(0,o.kt)("em",{parentName:"p"},"debug")," and ",(0,o.kt)("em",{parentName:"p"},"release"),")."),(0,o.kt)("p",null,"This is why Detox is inclined towards static configuration files describing\npermutations of ",(0,o.kt)("em",{parentName:"p"},"apps"),", ",(0,o.kt)("em",{parentName:"p"},"devices")," and a lot more, actually. If you come to\nthink of it, even a simple React Native application is likely to have four\ncombinations:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"iOS simulator running a ",(0,o.kt)("em",{parentName:"li"},"debug")," build;"),(0,o.kt)("li",{parentName:"ol"},"iOS simulator running a ",(0,o.kt)("em",{parentName:"li"},"release")," build;"),(0,o.kt)("li",{parentName:"ol"},"Android emulator running a ",(0,o.kt)("em",{parentName:"li"},"debug")," build;"),(0,o.kt)("li",{parentName:"ol"},"Android emulator running a ",(0,o.kt)("em",{parentName:"li"},"release")," build;")),(0,o.kt)("p",null,"Imagine you want to check your app both on phones and tablets, and now you\nhave eight combinations already! Add multiple OS versions into the test\ncoverage matrix equation, and the configuration grows by a factor of N."),(0,o.kt)("h2",{id:"config-structure"},"Config structure"),(0,o.kt)("p",null,"In view of the arguments above, our recommendation to keep Detox configs\nneat and tidy is to keep them inside three key-value dictionaries:\n",(0,o.kt)("inlineCode",{parentName:"p"},"devices"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"apps")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"configurations"),". See the schematic code below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/* @type {Detox.DetoxConfig} */\nmodule.exports = {\n// highlight-next-line\n  devices: {\n    device1: { /* ... */  },\n    device2: { /* ... */  },\n  },\n// highlight-next-line\n  apps: {\n    app1: { /* ... */  },\n    app2: { /* ... */  },\n  },\n// highlight-next-line\n  configurations: {\n    'device1+app1': {\n      device: 'device1',\n      app: 'app1',\n    },\n    /* ... */\n  },\n};\n")),(0,o.kt)("p",null,"Configuration names serve as an entry point, when you want to run Detox tests:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"detox test -c 'device1+app1'\n")),(0,o.kt)("p",null,"When Detox starts, it picks the specified configuration and resolves its aliases to the device and\nthe application. However, the config file is not limited only to devices and applications \u2013 there\nare more sections:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/* @type {Detox.DetoxConfig} */\nmodule.exports = {\n// highlight-start\n  artifacts: { /* ... */ },\n  behavior: { /* ... */ },\n  logger: { /* ... */ },\n  session: { /* ... */ },\n  testRunner: { /* ... */ },\n// highlight-end\n  devices: { /* ... */ },\n  apps: { /* ... */ },\n  configurations: { /* ... */ },\n};\n")),(0,o.kt)("p",null,"When the config gets finally resolved, it looks more like a flat structure, as shown on the diagram:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Detox config with its global dictionaries for apps, devices and configurations, and also its other config sections, when resolved, it becomes a flat object with all imaginable properties: device, apps, test runner, logger, artifacts, behavior, session, etc.",src:t(7954).Z,width:"600",height:"446"})),(0,o.kt)("p",null,"Aside from mandatory ",(0,o.kt)("inlineCode",{parentName:"p"},"device")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," properties, each configuration can have\noverrides to the global config sections such as ",(0,o.kt)("inlineCode",{parentName:"p"},"testRunner"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"artifacts"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"behavior")," and others, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/* @type {Detox.DetoxConfig} */\nmodule.exports = {\n  logger: {\n// highlight-next-line\n    level: process.env.CI ? 'debug' : 'info',\n  },\n  /* ... */\n  configurations: {\n    'ios.sim.debug': {\n      device: 'iphone',\n      app: 'ios.debug',\n// highlight-start\n      testRunner: {\n        args: {\n          runInBand: true,\n        },\n      },\n// highlight-end\n      // ...\n// highlight-start\n      logger: {\n        level: 'trace' // override\n      },\n// highlight-end\n    },\n  },\n};\n")),(0,o.kt)("p",null,"For more clarity, this relationship might be illustrated with a diagram:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Detox configurations refer to devices and apps dictionaries, and may also contain overrides to the other global config sections: test runner, artifacts, behavior, logger and session.",src:t(6169).Z,width:"625",height:"510"})),(0,o.kt)("p",null,"It should be noted that the aliasing of devices and apps is optional in fact.\nInstead of using keys, you can inline both device and app configs into your\nconfiguration, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/* @type {Detox.DetoxConfig} */\nmodule.exports = {\n  configurations: {\n    'ios.sim.debug': {\n      device: {\n        type: 'ios.simulator',\n        device: {\n          type: 'iPhone 13 Pro',\n        },\n      },\n      app: {\n        type: 'ios.app',\n        binaryPath: '/path/to/your.app',\n      },\n    },\n  },\n};\n")),(0,o.kt)("p",null,"Besides, there is ",(0,o.kt)("a",{parentName:"p",href:"/Detox/docs/config/apps"},"basic support")," for tests with multiple applications, if you switch\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"apps")," array (aliased or inlined) instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"app"),", e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/* @type {Detox.DetoxConfig} */\nmodule.exports = {\n  apps: { /* ... */ },\n  devices: { /* ... */ },\n  configurations: {\n    'multi.ios.debug': {\n      device: 'iphone',\n      apps: ['passenger.ios.debug', 'driver.ios.debug'],\n    },\n  },\n};\n")),(0,o.kt)("h2",{id:"path-conventions"},"Path conventions"),(0,o.kt)("p",null,"Detox supports standalone configuration files and the respective named section inside ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),".\nIt starts scanning from the current working directory, and runs over the following options, in this order:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},".detoxrc.js")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},".detoxrc.json")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},".detoxrc")," (JSON)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"detox.config.js")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"detox.config.json")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"package.json"))),(0,o.kt)("p",null,"If you decide to have ",(0,o.kt)("inlineCode",{parentName:"p"},"detox")," section in your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", it should be defined as a top-level\nproperty:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "your-project",\n  "version": "X.Y.Z",\n  "scripts": {},\n// highlight-start\n  "detox": {\n    "devices": {},\n    "apps": {},\n    "configurations": {},\n  }\n// highlight-end\n}\n')),(0,o.kt)("h2",{id:"extending"},"Extending"),(0,o.kt)("p",null,"All Detox config files are extensible by definition.\nThat helps if you ever need to share certain settings across multiple mobile projects, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n// highlight-next-line\n  "extends": "@my-org/detox-preset",\n  "configurations": {\n    // \u2026\n  },\n}\n')),(0,o.kt)("p",null,"Please note that ",(0,o.kt)("inlineCode",{parentName:"p"},"extends")," has to be a valid Node module path. Relative module paths will be resolved relatively\nto the Detox config file which contains that specific ",(0,o.kt)("inlineCode",{parentName:"p"},"extends")," property, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="~/Projects/my-project/e2e/detox.config.js"',title:'"~/Projects/my-project/e2e/detox.config.js"'},'module.exports = { extends: "../base.detox.config.js" };\n// the path resolves to: ~/Projects/my-project/base.detox.config.js\n\nmodule.exports = { extends: "./ci.detox.config.js" };\n// the path resolves to: ~/Projects/my-project/e2e/ci.detox.config.js\n')),(0,o.kt)("p",null,"The extension chain can have an arbitrary length. All the configs are going to be ",(0,o.kt)("em",{parentName:"p"},"deep-merged")," in the logical\norder: grandparent\xa0\u2190\xa0parent\xa0\u2190\xa0child."),(0,o.kt)("h2",{id:"default-configuration"},"Default configuration"),(0,o.kt)("p",null,"As you might have noticed, you always have to pass ",(0,o.kt)("inlineCode",{parentName:"p"},"-c <configuration name>")," argument when running Detox tests:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"detox test -c ios.sim.debug\n")),(0,o.kt)("p",null,"Technically this is not true. You can omit the configuration name if:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"there is only one configuration in ",(0,o.kt)("inlineCode",{parentName:"p"},"configurations")," dictionary;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"you set some configuration as a default choice via ",(0,o.kt)("inlineCode",{parentName:"p"},"selectedConfiguration")," property:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/* @type {Detox.DetoxConfig} */\nmodule.exports = {\n// highlight-next-line\n  selectedConfiguration: 'device1+app1',\n  devices: {\n    device1: { /* ... */  },\n    device2: { /* ... */  },\n  },\n  apps: {\n    app1: { /* ... */  },\n    app2: { /* ... */  },\n  },\n  configurations: {\n// highlight-next-line\n    'device1+app1': {\n      device: 'device1',\n      app: 'app1',\n    },\n    /* ... */\n  },\n};\n")))),(0,o.kt)("p",null,"The next articles will be describing each configuration section in detail."))}d.isMDXComponent=!0},6169:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/config-dictionaries-a26b08a493d63fc3a39090eb24664f35.png"},7954:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/config-resolution-e8a37213bc0262b6c542358cef4fd4dc.png"}}]);