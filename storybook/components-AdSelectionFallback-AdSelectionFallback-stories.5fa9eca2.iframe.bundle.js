"use strict";(self.webpackChunkwingman_fe=self.webpackChunkwingman_fe||[]).push([[115],{"./lib/components/AdSelectionFallback/AdSelectionFallback.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AdSelectionFallback:()=>AdSelectionFallback_stories_AdSelectionFallback,default:()=>AdSelectionFallback_stories});var _option,_option2,_option3,preview=__webpack_require__("./.storybook/preview.tsx"),react=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),MockComponentActions=__webpack_require__("./lib/private/MockComponentActions/MockComponentActions.tsx"),Dropdown=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Dropdown/Dropdown.mjs"),jsx_runtime=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const AdSelectionFallback=(0,react.forwardRef)(((_ref,ref)=>{let{hideLabel,id,onSelect}=_ref;const[advertisementType,setAdvertisementType]=(0,react.useState)();return(0,jsx_runtime.jsxs)(Dropdown.m,{"aria-label":"Ad type",id,label:hideLabel?void 0:"Ad type",onChange:event=>{const selection=event.currentTarget.value;setAdvertisementType(selection),onSelect(selection)},ref,placeholder:"Select an ad type",value:advertisementType??"",children:[_option||(_option=(0,jsx_runtime.jsx)("option",{children:"Classic"})),_option2||(_option2=(0,jsx_runtime.jsx)("option",{children:"StandOut"})),_option3||(_option3=(0,jsx_runtime.jsx)("option",{children:"Premium"}))]})})),AdSelectionFallback_stories={title:"Job Posting/Ad selection/AdSelectionFallback",component:(0,react.forwardRef)(((_ref,ref)=>{let{showStorybookAction,...props}=_ref;return(0,jsx_runtime.jsx)(MockComponentActions.B,{space:"medium",showStorybookAction,storybookPath:"/story/job-posting-ad-selection-adselectionfallback--ad-selection-fallback",sourcePath:"lib/components/AdSelectionFallback",children:(0,jsx_runtime.jsx)(AdSelectionFallback,{...props,ref})})})),args:{id:"seek-advertisement-type"},argTypes:{onSelect:{action:"onSelect"},showStorybookAction:preview.defaultArgTypes.showStorybookAction}},AdSelectionFallback_stories_AdSelectionFallback={};AdSelectionFallback_stories_AdSelectionFallback.parameters={...AdSelectionFallback_stories_AdSelectionFallback.parameters,docs:{...AdSelectionFallback_stories_AdSelectionFallback.parameters?.docs,source:{originalSource:"{}",...AdSelectionFallback_stories_AdSelectionFallback.parameters?.docs?.source}}}},"./lib/private/MockComponentActions/MockComponentActions.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>MockComponentActions});var _IconEducation,_IconSocialGitHub,braid_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Stack/Stack.mjs"),braid_design_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Actions/Actions.mjs"),braid_design_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/ButtonLink/ButtonLink.mjs"),braid_design_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/icons/IconEducation/IconEducation.mjs"),braid_design_system__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/icons/IconSocialGitHub/IconSocialGitHub.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"));const MockComponentActions=_ref=>{let{children,space,showStorybookAction,storybookPath,sourcePath}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(braid_design_system__WEBPACK_IMPORTED_MODULE_2__.B,{space,children:[children,showStorybookAction&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(braid_design_system__WEBPACK_IMPORTED_MODULE_3__.E,{size:"small",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(braid_design_system__WEBPACK_IMPORTED_MODULE_4__.v,{href:`https://seek-oss.github.io/wingman/storybook/?path=${encodeURIComponent(storybookPath)}`,icon:_IconEducation||(_IconEducation=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(braid_design_system__WEBPACK_IMPORTED_MODULE_5__.I,{})),rel:"noreferrer",target:"_blank",tone:"brandAccent",variant:"ghost",children:"Open in Storybook"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(braid_design_system__WEBPACK_IMPORTED_MODULE_4__.v,{href:`https://github.com/seek-oss/wingman/tree/main/fe/${sourcePath}`,icon:_IconSocialGitHub||(_IconSocialGitHub=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(braid_design_system__WEBPACK_IMPORTED_MODULE_6__.A,{})),rel:"noreferrer",target:"_blank",tone:"brandAccent",variant:"transparent",children:"Example code on GitHub"})]})]})}},"../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/ButtonLink/ButtonLink.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>ButtonLink});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_BraidProvider_BraidProvider_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/BraidProvider/BraidProvider.mjs"),_private_buildDataAttributes_mjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/private/buildDataAttributes.mjs"),_Button_Button_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Button/Button.mjs"),_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Box/Box.mjs");const ButtonLink=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(((_ref,ref)=>{let{children,size,tone,variant,bleed,icon,iconPosition,loading,data,...restProps}=_ref;const LinkComponent=(0,_BraidProvider_BraidProvider_mjs__WEBPACK_IMPORTED_MODULE_2__.d5)(ref);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button_Button_mjs__WEBPACK_IMPORTED_MODULE_3__.Ef,{bleed,variant,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_4__.a,{component:LinkComponent,ref,...restProps,...(0,_private_buildDataAttributes_mjs__WEBPACK_IMPORTED_MODULE_5__.a)({data,validateRestProps:!1}),...(0,_Button_Button_mjs__WEBPACK_IMPORTED_MODULE_3__.Kd)({variant,tone,size,bleed,loading}),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button_Button_mjs__WEBPACK_IMPORTED_MODULE_3__.M9,{variant,tone}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button_Button_mjs__WEBPACK_IMPORTED_MODULE_3__.C3,{variant,tone,size,loading,icon,iconPosition,bleed,children})]})})}));ButtonLink.displayName="ButtonLink"},"../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Dropdown/Dropdown.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Dropdown});var jsx_runtime=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),react=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),Box=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Box/Box.mjs"),Field=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/private/Field/Field.mjs"),Text=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Text/Text.mjs"),IconChevron=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/icons/IconChevron/IconChevron.mjs");const Dropdown=(0,react.forwardRef)(((props,ref)=>{const{children,value,onChange,onBlur,onFocus,placeholder,disabled,...restProps}=props;return(0,jsx_runtime.jsx)(Field.D,{...restProps,componentName:"Dropdown",disabled,prefix:void 0,secondaryMessage:null,value,children:(overlays,_ref,icon)=>{let{className,paddingRight,...fieldProps}=_ref;return(0,jsx_runtime.jsxs)(react.Fragment,{children:[icon,(0,jsx_runtime.jsx)(Box.a,{component:"select",value,defaultValue:void 0===value?"":void 0,onChange,onBlur,onFocus,placeholder,className:["fdo3aw0",className],...fieldProps,ref,children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[!value||placeholder?(0,jsx_runtime.jsx)("option",{value:"",disabled:!0,children:disabled?"":placeholder}):null,children]})}),overlays,(0,jsx_runtime.jsx)(Box.a,{position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",height:"touchable",width:"touchable",top:0,right:0,children:(0,jsx_runtime.jsx)(Text.E,{baseline:!1,children:(0,jsx_runtime.jsx)(IconChevron.V,{tone:disabled?"secondary":void 0})})})]})}})}));Dropdown.displayName="Dropdown"},"../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/icons/IconEducation/IconEducation.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>IconEducation});var jsx_runtime=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),Box=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Box/Box.mjs"),IconContainer=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/icons/IconContainer.mjs");const IconEducationSvg=_ref=>{let{title,titleId,...props}=_ref;return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",xmlSpace:"preserve",focusable:"false",fill:"currentColor",width:16,height:16,"aria-labelledby":titleId,...props,children:[title?(0,jsx_runtime.jsx)("title",{id:titleId,children:title}):null,(0,jsx_runtime.jsx)("path",{d:"M19 2H7C5.3 2 4 3.3 4 5v14c0 1.7 1.3 3 3 3h12c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1zM7 4h11v12H7c-.4 0-.7.1-1 .2V5c0-.6.4-1 1-1zm11 16H7c-.6 0-1-.4-1-1s.4-1 1-1h11v2z"})]})},IconEducation=props=>(0,jsx_runtime.jsx)(IconContainer.T,{...props,children:svgProps=>(0,jsx_runtime.jsx)(Box.a,{component:IconEducationSvg,...svgProps})})},"../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/icons/IconSocialGitHub/IconSocialGitHub.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>IconSocialGitHub});var jsx_runtime=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),Box=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Box/Box.mjs"),IconContainer=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/icons/IconContainer.mjs");const IconSocialGitHubSvg=_ref=>{let{title,titleId,...props}=_ref;return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",focusable:"false",fill:"currentColor",width:16,height:16,"aria-labelledby":titleId,...props,children:[title?(0,jsx_runtime.jsx)("title",{id:titleId,children:title}):null,(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",d:"M12.008 2C6.38 2 1.831 6.583 1.831 12.254c0 4.532 2.915 8.369 6.959 9.727.506.102.69-.221.69-.493 0-.237-.016-1.052-.016-1.901-2.831.611-3.42-1.222-3.42-1.222-.456-1.189-1.13-1.494-1.13-1.494-.927-.628.068-.628.068-.628 1.027.068 1.567 1.052 1.567 1.052.91 1.562 2.376 1.12 2.965.85.085-.663.354-1.121.64-1.376-2.257-.238-4.633-1.12-4.633-5.059 0-1.12.404-2.037 1.045-2.75-.102-.254-.455-1.307.1-2.716 0 0 .86-.272 2.798 1.052a9.786 9.786 0 0 1 2.544-.34c.86 0 1.736.12 2.545.34 1.938-1.324 2.797-1.052 2.797-1.052.556 1.409.202 2.462.101 2.716.657.713 1.045 1.63 1.045 2.75 0 3.939-2.376 4.804-4.65 5.06.37.322.69.933.69 1.9 0 1.375-.017 2.479-.017 2.818 0 .272.186.595.691.493a10.246 10.246 0 0 0 6.96-9.727C22.185 6.584 17.62 2 12.007 2Z"})]})},IconSocialGitHub=props=>(0,jsx_runtime.jsx)(IconContainer.T,{...props,children:svgProps=>(0,jsx_runtime.jsx)(Box.a,{component:IconSocialGitHubSvg,...svgProps})})}}]);