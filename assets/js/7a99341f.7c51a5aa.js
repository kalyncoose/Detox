"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8201],{9025:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var o=t(7462),i=(t(7294),t(3905)),a=t(2225);const l={},r="Logger",s={unversionedId:"config/logger",id:"version-20.x/config/logger",title:"Logger",description:"The logger section controls how the printed logs are going to look like in your terminal window.",source:"@site/versioned_docs/version-20.x/config/logger.mdx",sourceDirName:"config",slug:"/config/logger",permalink:"/Detox/docs/config/logger",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-20.x/config/logger.mdx",tags:[],version:"20.x",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Behavior",permalink:"/Detox/docs/config/behavior"},next:{title:"Session",permalink:"/Detox/docs/config/session"}},g={},p=[{value:"Location",id:"location",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>logger.level</code> [enum]",id:"loggerlevel-enum",level:2},{value:"<code>logger.overrideConsole</code> [boolean]",id:"loggeroverrideconsole-boolean",level:2},{value:"<code>logger.options</code> BunyanDebugStreamOptions",id:"loggeroptions-bunyandebugstreamoptions",level:2}],d={toc:p};function c(e){let{components:n,...l}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"logger"},"Logger"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"logger")," section controls how the printed logs are going to look like in your terminal window."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(1951).Z,width:"1176",height:"218"})),(0,i.kt)("h2",{id:"location"},"Location"),(0,i.kt)(a.ZP,{sectionName:"logger",mdxType:"Location"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h2",{id:"loggerlevel-enum"},(0,i.kt)("inlineCode",{parentName:"h2"},"logger.level")," ","[","enum","]"),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"info"),"."),(0,i.kt)("p",null,"Possible values in the descending severity order: ",(0,i.kt)("inlineCode",{parentName:"p"},"fatal"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"error"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"warn"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"info"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"debug"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"trace"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"info")," by default."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"error")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"warn")," when you want to make the output as silent as possible."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"debug")," to control what generally is happening under the hood."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"trace")," when troubleshooting specific issues.")),(0,i.kt)("p",null,"Please note that the log level has no effect on the ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/config/artifacts"},"generated log files")," and their content \u2013 it filters only the messages printed to your terminal."),(0,i.kt)("h2",{id:"loggeroverrideconsole-boolean"},(0,i.kt)("inlineCode",{parentName:"h2"},"logger.overrideConsole")," ","[","boolean","]"),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("p",null,"When enabled, hijacks all the console methods (console.log, console.warn, etc) so that the messages\nprinted via them are formatted and saved as Detox logs."),(0,i.kt)("h2",{id:"loggeroptions-bunyandebugstreamoptions"},(0,i.kt)("inlineCode",{parentName:"h2"},"logger.options")," ","[BunyanDebugStreamOptions]"),(0,i.kt)("p",null,"Default: varies according to the ",(0,i.kt)("inlineCode",{parentName:"p"},"logger.level"),"."),(0,i.kt)("p",null,"Since Detox is using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jwalton/bunyan-debug-stream"},"bunyan-debug-stream")," for printing logs,\nwe decided just to expose all its options for sake of simplicity of customization:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface BunyanDebugStreamOptions {\n    colors?: { [key: number]: string | string[] } | false | null;\n    forceColor?: boolean;\n    basepath?: string;\n    basepathReplacement?: string;\n    showProcess?: boolean;\n    showDate?: boolean | ((time: Date, entry: any) => string);\n    showPrefixes?: boolean | ((prefixes: string[]) => string);\n    processName?: string;\n    maxExceptionLines?: number | 'auto';\n    stringifiers?: { [key: string]: Stringifier | null };\n    prefixers?: { [key: string]: Stringifier | null };\n    indent?: string;\n    showLoggerName?: boolean;\n    showPid?: boolean;\n    showLevel?: boolean;\n    showMetadata?: boolean;\n}\n")),(0,i.kt)("p",null,"There's one caveat inside ",(0,i.kt)("inlineCode",{parentName:"p"},"logger.options"),", however \u2013 all the custom functions ",(0,i.kt)("strong",{parentName:"p"},"must not")," use closures! That's\nbecause they get ",(0,i.kt)("inlineCode",{parentName:"p"},"eval()"),"-ed every time the test runner spawns a new child worker process. In other words:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const dontDoThis = date => date.toISOString();\n\nmodule.exports = {\n  logger: {\n    level: 'debug',\n    options: {\n      // showDate: (date) => dontDoThis(date),\n// highlight-next-line\n      showDate: (date) => date.toISOString(), /* do this instead */\n    },\n  },\n  // ...\n};\n")))}c.isMDXComponent=!0},2225:(e,n,t)=>{t.d(n,{ZP:()=>r});var o=t(7462),i=(t(7294),t(3905)),a=t(814);const l={toc:[]};function r(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can define the ",(0,i.kt)("code",null,t.sectionName)," config section in two ways: ",(0,i.kt)("i",null,"globally")," and ",(0,i.kt)("i",null,"locally")," (per a configuration):"),(0,i.kt)(a.Z,{title:".detoxrc.js",language:"javascript",mdxType:"CodeBlock"},["/** @type {Detox.DetoxConfig} */","module.exports = {","// highlight-start",`  ${t.sectionName}: {`,"    /* global section */","  },","// highlight-end","  devices: { /* \u2026 */ },","  apps: { /* \u2026 */ },","  configurations: {","    'ios.sim.debug': {","      device: 'iphone',","      app: 'ios.debug',","// highlight-start",`      ${t.sectionName}: {`,"        /* local (per-configuration) section */","      },","// highlight-end","    },","  },","};"].join("\n")))}r.isMDXComponent=!0},1951:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/log-example-07a2afd13f5a9c00f864226c5694c431.png"}}]);