"use strict";(self.webpackChunkwingman_fe=self.webpackChunkwingman_fe||[]).push([[99],{"./lib/components/LocationSuggest/LocationSuggest.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LocationSuggest:()=>LocationSuggest_stories_LocationSuggest,default:()=>LocationSuggest_stories});var preview=__webpack_require__("./.storybook/preview.tsx"),useApolloClient=__webpack_require__("../node_modules/.pnpm/@apollo+client@3.12.11_@types+react@18.3.18_graphql-ws@6.0.3_graphql@16.10.0_ws@8.18.0__918fb0787af9f82bfc5860b2bc9ef7c4/node_modules/@apollo/client/react/hooks/useApolloClient.js"),react=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),MockComponentActions=__webpack_require__("./lib/private/MockComponentActions/MockComponentActions.tsx"),ApolloMockProvider=__webpack_require__("./lib/components/ApolloMockProvider/ApolloMockProvider.tsx"),useQuery=__webpack_require__("../node_modules/.pnpm/@apollo+client@3.12.11_@types+react@18.3.18_graphql-ws@6.0.3_graphql@16.10.0_ws@8.18.0__918fb0787af9f82bfc5860b2bc9ef7c4/node_modules/@apollo/client/react/hooks/useQuery.js"),useLazyQuery=__webpack_require__("../node_modules/.pnpm/@apollo+client@3.12.11_@types+react@18.3.18_graphql-ws@6.0.3_graphql@16.10.0_ws@8.18.0__918fb0787af9f82bfc5860b2bc9ef7c4/node_modules/@apollo/client/react/hooks/useLazyQuery.js"),Stack=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.6.0_@types+react@18.3.18_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Stack/Stack.mjs"),FieldMessage=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.6.0_@types+react@18.3.18_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/FieldMessage/FieldMessage.mjs"),index_module=__webpack_require__("../node_modules/.pnpm/use-debounce@10.0.4_react@18.3.1/node_modules/use-debounce/dist/index.module.js"),flattenResourceByKey=__webpack_require__("./lib/utils/flattenResourceByKey.ts"),BreadCrumbsString=__webpack_require__("./lib/components/BreadCrumbsString/BreadCrumbsString.tsx"),match=__webpack_require__("../node_modules/.pnpm/autosuggest-highlight@3.3.4/node_modules/autosuggest-highlight/match/index.js"),match_default=__webpack_require__.n(match),Columns=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.6.0_@types+react@18.3.18_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Columns/Columns.mjs"),Column=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.6.0_@types+react@18.3.18_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Column/Column.mjs"),Autosuggest=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.6.0_@types+react@18.3.18_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Autosuggest/Autosuggest.mjs"),IconSearch=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.6.0_@types+react@18.3.18_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/icons/IconSearch/IconSearch.mjs"),Button=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.6.0_@types+react@18.3.18_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Button/Button.mjs"),IconGlobe=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.6.0_@types+react@18.3.18_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/icons/IconGlobe/IconGlobe.mjs"),Dialog=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.6.0_@types+react@18.3.18_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Dialog/Dialog.mjs"),Text=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.6.0_@types+react@18.3.18_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Text/Text.mjs"),IconLocation=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.6.0_@types+react@18.3.18_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/icons/IconLocation/IconLocation.mjs"),SmartTextLink=__webpack_require__("../node_modules/.pnpm/scoobie@20.0.1_babel-plugin-macros@3.1.0_braid-design-system@33.6.0_@types+react@18.3.1_b06315f06f59ab31eb27e892ac779fd5/node_modules/scoobie/src/components/SmartTextLink.tsx");var _IconSearch,_IconGlobe,_Text,_IconLocation,LocationSelectMap=__webpack_require__("./lib/components/LocationSelectMap/LocationSelectMap.tsx"),jsx_runtime=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const SEEK_MEL_CENTER=[-37.8275,144.9902],LocationSuggest_LocationSuggestInput=_ref3=>{let{isLoading,locationSuggestions,onChange,onClear,onDetectLocation,onSelect,placeholder,setDetectLocationError,tone,initialLocation,schemeId,client,context,hirerId,...restProps}=_ref3;const initialLocationSuggest=(0,react.useMemo)((()=>({text:(null==initialLocation?void 0:initialLocation.contextualName)??"",value:(null==initialLocation?void 0:initialLocation.id.value)??""})),[initialLocation]),[locationSuggest,setLocationSuggest]=(0,react.useState)(initialLocationSuggest),[showMapDialog,setShowMapDialog]=(0,react.useState)(!1),[detectedLatLong,setDetectedLatLong]=(0,react.useState)();(0,react.useEffect)((()=>{initialLocation&&setLocationSuggest({text:initialLocation.contextualName,value:initialLocation.id.value})}),[initialLocation]);const mappedSuggestions=(locationSuggestions=>locationSuggestions?locationSuggestions.map((_ref=>{let{location}=_ref;return{text:location.contextualName,value:location.id.value}})):[])(locationSuggestions),highlightedSuggestions=mappedSuggestions.map((suggestion=>{return{...suggestion,highlights:(string=suggestion.text,input=locationSuggest.text,match_default()(string,input).map((_ref2=>{let[start,end]=_ref2;return{start,end}})))};var string,input})),handleClear=(0,react.useCallback)((()=>{setLocationSuggest(initialLocationSuggest),onClear()}),[initialLocationSuggest,onClear]),previousHirerId=(value=>{const ref=(0,react.useRef)();return(0,react.useEffect)((()=>{ref.current=value})),ref.current})(hirerId);(0,react.useEffect)((()=>{previousHirerId!==hirerId&&handleClear()}),[hirerId,handleClear,previousHirerId]);return(0,jsx_runtime.jsxs)(Columns.e,{alignY:"bottom",collapseBelow:"tablet",space:"small",children:[(0,jsx_runtime.jsx)(Column.V,{children:(0,jsx_runtime.jsx)(Autosuggest.G,{...restProps,placeholder,icon:_IconSearch||(_IconSearch=(0,jsx_runtime.jsx)(IconSearch.C,{})),id:"locationSuggestInput",automaticSelection:!1,onClear:handleClear,onChange:_ref4=>{let{text,value=""}=_ref4;setLocationSuggest({text,value}),""!==text&&onChange(text),value&&(selectedValue=>{var _locationSuggestions$;const selectedLocation=null==locationSuggestions||null===(_locationSuggestions$=locationSuggestions.find((locationSuggestion=>locationSuggestion.location.id.value===selectedValue)))||void 0===_locationSuggestions$?void 0:_locationSuggestions$.location;onSelect(selectedLocation)})(value)},suggestions:highlightedSuggestions,tone,value:locationSuggest})}),(0,jsx_runtime.jsxs)(Column.V,{width:"content",children:[(0,jsx_runtime.jsx)(Button.$n,{icon:_IconGlobe||(_IconGlobe=(0,jsx_runtime.jsx)(IconGlobe.z,{})),onClick:()=>setShowMapDialog(!0),tone:"critical"===tone?tone:void 0,variant:"soft",children:"Select on map"}),(0,jsx_runtime.jsx)(Dialog.l,{id:"seek-location-suggest-map-dialog",title:"Select a location",width:"medium",description:_Text||(_Text=(0,jsx_runtime.jsxs)(Text.E,{tone:"secondary",children:["Select a point on the map to choose from a list of"," ",(0,jsx_runtime.jsx)(SmartTextLink.j,{href:"https://developer.seek.com/use-cases/job-posting/locations#nearestlocations",children:"nearest locations"})]})),open:showMapDialog,onClose:()=>{setShowMapDialog(!1)},children:(0,jsx_runtime.jsx)(LocationSelectMap.K,{schemeId,onLocationSelected:location=>{setShowMapDialog(!1),setLocationSuggest({text:location.contextualName,value:location.id.value}),onSelect(location)},initialLocation:detectedLatLong??SEEK_MEL_CENTER,mapHeight:{wide:1300,desktop:1300,tablet:600,mobile:600},client,context})})]}),(0,jsx_runtime.jsx)(Column.V,{width:"content",children:(0,jsx_runtime.jsx)(Button.$n,{icon:_IconLocation||(_IconLocation=(0,jsx_runtime.jsx)(IconLocation.p,{})),loading:isLoading,onClick:()=>{navigator.geolocation?(setLocationSuggest(initialLocationSuggest),navigator.geolocation.getCurrentPosition((position=>{onDetectLocation({latitude:position.coords.latitude,longitude:position.coords.longitude}),setDetectedLatLong([position.coords.latitude,position.coords.longitude]),setDetectLocationError()}),(()=>setDetectLocationError("Sorry, we couldn’t detect your current location. Please try again.")))):setDetectLocationError("Sorry, we can’t detect your current location.")},tone:"critical"===tone?tone:void 0,variant:"soft",children:"Detect location"})})]})};var queries=__webpack_require__("./lib/components/LocationSuggest/queries.ts");const LocationSuggest=(0,react.forwardRef)(((_ref,forwardedRef)=>{let{client,context,debounceDelay=250,first=5,hirerId,onSelect,onClear,schemeId,usageTypeCode="PositionPosting",initialValue,message,name,reserveMessageSpace,tone,showBreadcrumbs,...restProps}=_ref;const[selectedLocation,setSelectedLocation]=(0,react.useState)(),[locationSuggestInput,setLocationSuggestInput]=(0,react.useState)(""),[detectLocationError,setDetectLocationError]=(0,react.useState)(),[placeholder,setPlaceholder]=(0,react.useState)(""),[debounceLocationSuggestInput]=(0,index_module.d7)(locationSuggestInput,debounceDelay),{data:suggestData,previousData:previousSuggestData,error:suggestError}=(0,useQuery.IT)(queries.xv,{variables:{usageTypeCode,schemeId,hirerId,first,text:debounceLocationSuggestInput},skip:!Boolean(debounceLocationSuggestInput),client,context,fetchPolicy:"no-cache",onCompleted:data=>{var _data$locationSuggest;null!==(_data$locationSuggest=data.locationSuggestions)&&void 0!==_data$locationSuggest&&_data$locationSuggest.length&&Boolean(detectLocationError)&&setDetectLocationError("")}}),{data:initialLocation}=(0,useQuery.IT)(queries.GZ,{variables:{id:initialValue??""},skip:void 0===initialValue,client,context}),[nearestLocations,{data:nearestLocationsData,error:nearestLocationsError,loading:nearestLocationsLoading}]=(0,useLazyQuery._)(queries.ad,{client,context}),handleLocationSelect=value=>{onSelect&&onSelect(value),value&&setSelectedLocation(value)};return(0,react.useEffect)((()=>{if(null!=nearestLocationsData&&nearestLocationsData.nearestLocations){const closestLocation=nearestLocationsData.nearestLocations[0],{contextualName}=closestLocation;setPlaceholder(contextualName),handleLocationSelect(closestLocation)}}),[nearestLocationsData]),(0,jsx_runtime.jsxs)(Stack.B,{space:"small",children:[(0,jsx_runtime.jsxs)(Stack.B,{space:"none",children:[(0,jsx_runtime.jsx)(LocationSuggest_LocationSuggestInput,{...restProps,isLoading:nearestLocationsLoading,locationSuggestions:(null==suggestData?void 0:suggestData.locationSuggestions)??(null==previousSuggestData?void 0:previousSuggestData.locationSuggestions)??void 0,onChange:setLocationSuggestInput,onClear:()=>{setSelectedLocation(void 0),setPlaceholder(""),null==onClear||onClear()},onDetectLocation:input=>{nearestLocations({variables:{schemeId,geoLocation:input}})},onSelect:handleLocationSelect,placeholder,setDetectLocationError,tone,initialLocation:(null==initialLocation?void 0:initialLocation.location)??void 0,schemeId,client,context,hirerId}),(0,jsx_runtime.jsx)("input",{type:"hidden",name,value:(null==selectedLocation?void 0:selectedLocation.id.value)??"",ref:forwardedRef,readOnly:!0})]}),(Boolean(message)||reserveMessageSpace)&&(0,jsx_runtime.jsx)(FieldMessage.i,{id:"locationSuggestMessage",message,reserveMessageSpace:suggestError||nearestLocationsError?void 0:reserveMessageSpace,tone}),suggestError&&(0,jsx_runtime.jsx)(FieldMessage.i,{id:"locationSuggestError",message:suggestError.message,tone:"critical"}),nearestLocationsError&&(0,jsx_runtime.jsx)(FieldMessage.i,{id:"locationSuggestNearestLocationsError",message:nearestLocationsError.message,tone:"critical"}),detectLocationError?(0,jsx_runtime.jsx)(FieldMessage.i,{id:"locationSuggestDetectLocationError",message:detectLocationError,tone:"critical"}):null,showBreadcrumbs&&selectedLocation?(0,jsx_runtime.jsx)(BreadCrumbsString.W,{segments:(0,flattenResourceByKey.L)(selectedLocation,"parent").map((x=>({name:x.name,key:x.id.value})))}):null]})})),mockLocationSuggest=[{location:{id:{value:"seekAnz:location:seek:2FqwWaaMV"},name:"Melbourne",contextualName:"Melbourne VIC 3000 AU",countryCode:"AU",currencies:[{code:"AUD"}],parent:{id:{value:"seekAnz:location:seek:2m81wybwV"},name:"CBD & Inner Suburbs",contextualName:"CBD & Inner Suburbs, Melbourne VIC AU",countryCode:"AU",currencies:[{code:"AUD"}],parent:{id:{value:"seekAnz:location:seek:31XoHiay5"},name:"Melbourne",contextualName:"Melbourne VIC AU",countryCode:"AU",currencies:[{code:"AUD"}],parent:{id:{value:"seekAnz:location:seek:HxMS1gfR"},name:"Victoria",contextualName:"Victoria AU",countryCode:"AU",currencies:[{code:"AUD"}],parent:{id:{value:"seekAnz:location:seek:2aeax6diF"},name:"Australia",contextualName:"Australia",countryCode:"AU",currencies:[{code:"AUD"}],parent:null}}}}}},{location:{id:{value:"seekAnz:location:seek:2vArzkyio"},name:"Sydney",contextualName:"Sydney NSW 1001 AU",countryCode:"AU",currencies:[{code:"AUD"}],parent:{id:{value:"seekAnz:location:seek:2QCxeiwmR"},name:"CBD, Inner West & Eastern Suburbs",contextualName:"CBD, Inner West & Eastern Suburbs, Sydney NSW AU",countryCode:"AU",currencies:[{code:"AUD"}],parent:{id:{value:"seekAnz:location:seek:2zY2wZbuq"},name:"Sydney",contextualName:"Sydney NSW AU",countryCode:"AU",currencies:[{code:"AUD"}],parent:{id:{value:"seekAnz:location:seek:FTwZdE2K"},name:"New South Wales",contextualName:"New South Wales AU",countryCode:"AU",currencies:[{code:"AUD"}],parent:{id:{value:"seekAnz:location:seek:2aeax6diF"},name:"Australia",contextualName:"Australia",countryCode:"AU",currencies:[{code:"AUD"}],parent:null}}}}}}],mockNearestLocations=[{id:{value:"seekAnz:location:seek:2FqwWaaMV"},name:"Melbourne",contextualName:"Melbourne VIC 3000 AU",countryCode:"AU",currencies:[{code:"AUD"}],parent:{id:{value:"seekAnz:location:seek:2m81wybwV"},name:"CBD & Inner Suburbs",contextualName:"CBD & Inner Suburbs, Melbourne VIC AU",countryCode:"AU",currencies:[{code:"AUD"}],parent:{id:{value:"seekAnz:location:seek:31XoHiay5"},name:"Melbourne",contextualName:"Melbourne VIC AU",countryCode:"AU",currencies:[{code:"AUD"}],parent:{id:{value:"seekAnz:location:seek:HxMS1gfR"},name:"Victoria",contextualName:"Victoria AU",countryCode:"AU",currencies:[{code:"AUD"}],parent:{id:{value:"seekAnz:location:seek:2aeax6diF"},name:"Australia",contextualName:"Australia",countryCode:"AU",currencies:[{code:"AUD"}],parent:null}}}}},{id:{value:"seekAnz:location:seek:2vArzkyio"},name:"Sydney",contextualName:"Sydney NSW 1001 AU",countryCode:"AU",currencies:[{code:"AUD"}],parent:{id:{value:"seekAnz:location:seek:2QCxeiwmR"},name:"CBD, Inner West & Eastern Suburbs",contextualName:"CBD, Inner West & Eastern Suburbs, Sydney NSW AU",countryCode:"AU",currencies:[{code:"AUD"}],parent:{id:{value:"seekAnz:location:seek:2zY2wZbuq"},name:"Sydney",contextualName:"Sydney NSW AU",countryCode:"AU",currencies:[{code:"AUD"}],parent:{id:{value:"seekAnz:location:seek:FTwZdE2K"},name:"New South Wales",contextualName:"New South Wales AU",countryCode:"AU",currencies:[{code:"AUD"}],parent:{id:{value:"seekAnz:location:seek:2aeax6diF"},name:"Australia",contextualName:"Australia",countryCode:"AU",currencies:[{code:"AUD"}],parent:null}}}}}],Component=(0,react.forwardRef)(((_ref,ref)=>{let{client:_client,showStorybookAction:_showStorybookAction,...props}=_ref;const client=(0,useApolloClient.m)();return(0,jsx_runtime.jsx)(LocationSuggest,{...props,client,ref})})),MockLocationSuggest=(0,react.forwardRef)(((_ref2,ref)=>{let{client:_client,showStorybookAction,...props}=_ref2;return(0,jsx_runtime.jsx)(ApolloMockProvider.f,{resolvers:{Query:{nearestLocations:()=>mockNearestLocations,locationSuggestions:()=>mockLocationSuggest}},children:(0,jsx_runtime.jsx)(MockComponentActions.B,{space:"medium",showStorybookAction,storybookPath:"/story/job-posting-locations-locationsuggest--location-suggest",sourcePath:"lib/components/LocationSuggest",children:(0,jsx_runtime.jsx)(Component,{...props,ref})})})})),LocationSuggest_stories={args:{id:"locationSuggest",label:"Location",hirerId:"seekAnzPublicTest:organization:seek:93WyyF1h",message:"undefined",reserveMessageSpace:!1,showBreadcrumbs:!1,schemeId:"seekAnz",tone:preview.defaultArgs.tone},argTypes:{message:{control:{type:"radio"},mapping:{undefined:void 0,requiredValidation:"Select a location"},options:["undefined","requiredValidation"]},showStorybookAction:preview.defaultArgTypes.showStorybookAction,tone:preview.defaultArgTypes.tone},component:MockLocationSuggest,title:"Job Posting/Locations/LocationSuggest"},LocationSuggest_stories_LocationSuggest={};LocationSuggest_stories_LocationSuggest.parameters={...LocationSuggest_stories_LocationSuggest.parameters,docs:{...LocationSuggest_stories_LocationSuggest.parameters?.docs,source:{originalSource:"{}",...LocationSuggest_stories_LocationSuggest.parameters?.docs?.source}}}},"./lib/components/BreadCrumbsString/BreadCrumbsString.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>BreadCrumbsString});var _IconChevron,braid_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.6.0_@types+react@18.3.18_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Box/Box.mjs"),braid_design_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.6.0_@types+react@18.3.18_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Text/Text.mjs"),braid_design_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.6.0_@types+react@18.3.18_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Strong/Strong.mjs"),braid_design_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.6.0_@types+react@18.3.18_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/icons/IconChevron/IconChevron.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const BreadCrumbsString=_ref=>{let{segments}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(braid_design_system__WEBPACK_IMPORTED_MODULE_2__.l,{background:"infoLight",borderRadius:"large",padding:"small",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(braid_design_system__WEBPACK_IMPORTED_MODULE_3__.E,{children:segments.map(((_ref2,index)=>{let{name,key}=_ref2;return 0===index?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(braid_design_system__WEBPACK_IMPORTED_MODULE_4__.O,{children:[name," "]},key):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[_IconChevron||(_IconChevron=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(braid_design_system__WEBPACK_IMPORTED_MODULE_5__.V,{direction:"left"}))," ",name," "]},key)}))})})}},"./lib/components/LocationSelectMap/LocationSelectMap.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>LocationSelectMap});var useQuery=__webpack_require__("../node_modules/.pnpm/@apollo+client@3.12.11_@types+react@18.3.18_graphql-ws@6.0.3_graphql@16.10.0_ws@8.18.0__918fb0787af9f82bfc5860b2bc9ef7c4/node_modules/@apollo/client/react/hooks/useQuery.js"),useResponsiveValue=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.6.0_@types+react@18.3.18_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/useResponsiveValue/useResponsiveValue.mjs"),useColor=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.6.0_@types+react@18.3.18_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/useColor/useColor.mjs"),useSpace=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.6.0_@types+react@18.3.18_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/useSpace/useSpace.mjs"),Box=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.6.0_@types+react@18.3.18_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Box/Box.mjs"),Stack=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.6.0_@types+react@18.3.18_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Stack/Stack.mjs"),Columns=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.6.0_@types+react@18.3.18_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Columns/Columns.mjs"),Column=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.6.0_@types+react@18.3.18_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Column/Column.mjs"),Text=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.6.0_@types+react@18.3.18_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Text/Text.mjs"),ButtonIcon=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.6.0_@types+react@18.3.18_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/ButtonIcon/ButtonIcon.mjs"),IconClear=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.6.0_@types+react@18.3.18_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/icons/IconClear/IconClear.mjs"),Divider=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.6.0_@types+react@18.3.18_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Divider/Divider.mjs"),Alert=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.6.0_@types+react@18.3.18_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Alert/Alert.mjs"),index_esm=__webpack_require__("../node_modules/.pnpm/pigeon-maps@0.22.1_react@18.3.1/node_modules/pigeon-maps/lib/index.esm.js"),react=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),InlineCode=__webpack_require__("../node_modules/.pnpm/scoobie@20.0.1_babel-plugin-macros@3.1.0_braid-design-system@33.6.0_@types+react@18.3.1_b06315f06f59ab31eb27e892ac779fd5/node_modules/scoobie/src/components/InlineCode.tsx"),index_module=__webpack_require__("../node_modules/.pnpm/use-debounce@10.0.4_react@18.3.1/node_modules/use-debounce/dist/index.module.js");const formatPoint=point=>{const roundedLat=Math.abs(point[0]).toFixed(2),roundedLon=Math.abs(point[1]).toFixed(2);return`${point[0]<0?`${roundedLat}° S`:`${roundedLat}° N`}, ${point[1]<0?`${roundedLon}° W`:`${roundedLon}° E`}`};var lib=__webpack_require__("../node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.10.0/node_modules/graphql-tag/lib/index.js");const LOCATION_ATTRIBUTES=lib.J1`
  fragment locationAttributes on Location {
    id {
      value
    }
    name
    contextualName
    countryCode
    currencies {
      code
    }
  }
`,NESTED_LOCATION_ATTRIBUTES=lib.J1`
  fragment nestedLocationAttributes on Location {
    ...locationAttributes
    parent {
      ...locationAttributes
      parent {
        ...locationAttributes
        parent {
          ...locationAttributes
          parent {
            ...locationAttributes
            parent {
              ...locationAttributes
            }
          }
        }
      }
    }
  }
  ${LOCATION_ATTRIBUTES}
`,NEAREST_LOCATIONS=lib.J1`
  query NearbyLocations($geoLocation: GeoLocationInput!, $schemeId: String!) {
    nearestLocations(geoLocation: $geoLocation, schemeId: $schemeId, first: 3) {
      ...nestedLocationAttributes
    }
  }
  ${NESTED_LOCATION_ATTRIBUTES}
`;__webpack_require__('./lib/components/node_modules/.pnpm/braid-design-system@33.6.0_@types+react@18.3.18_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/css/atoms/sprinkles.css.mjs.vanilla.css!=!../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.17_babel-plugin-macros@3.1.0_webpack@5.97.1/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../node_modules/.pnpm/braid-design-system@33.6.0_@types+react@18.3.18_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/css/atoms/sprinkles.css.mjs.vanilla.css","source":"#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"}!../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.17_babel-plugin-macros@3.1.0_webpack@5.97.1/node_modules/@vanilla-extract/webpack-plugin/extracted.js');var _IconClear,_Divider,_Text,_ZoomControl,jsx_runtime=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const DEFAULT_MAP_HEIGHT=400,LocationSelectMap=_ref=>{let{debounceDelay=250,schemeId,onLocationSelected,initialLocation,client,context,mapHeight={wide:DEFAULT_MAP_HEIGHT,desktop:DEFAULT_MAP_HEIGHT,tablet:200,mobile:200}}=_ref;const[latLong,setLatLong]=(0,react.useState)(initialLocation),[showSuggestions,setShowSuggestions]=(0,react.useState)(!1),responsiveValue=(0,useResponsiveValue.t)(),color=(0,useColor.b)(),{space,grid}=(0,useSpace.G)(),[debouncedLatLong]=(0,index_module.d7)(latLong,debounceDelay),{data,previousData}=(0,useQuery.IT)(NEAREST_LOCATIONS,{variables:{geoLocation:{latitude:debouncedLatLong[0],longitude:debouncedLatLong[1]},schemeId},client,context}),nearestLocations=(null==data?void 0:data.nearestLocations)??(null==previousData?void 0:previousData.nearestLocations),isDesktopOrAbove=responsiveValue({mobile:!1,desktop:!0}),height=responsiveValue(mapHeight)??DEFAULT_MAP_HEIGHT,NearestLocationsCards=()=>(0,jsx_runtime.jsx)(Box.l,{borderRadius:"standard",background:"surface",children:(0,jsx_runtime.jsxs)(Stack.B,{space:"none",children:[(0,jsx_runtime.jsx)(Box.l,{paddingX:{desktop:"medium",tablet:"none",mobile:"none"},paddingY:{desktop:"xsmall",tablet:"medium",mobile:"medium"},children:(0,jsx_runtime.jsxs)(Columns.e,{space:"small",alignY:"center",children:[(0,jsx_runtime.jsx)(Column.V,{children:(0,jsx_runtime.jsx)(Text.E,{weight:"strong",size:"small",children:`Locations near ${formatPoint(latLong)}`})}),isDesktopOrAbove?(0,jsx_runtime.jsx)(Column.V,{width:"content",children:(0,jsx_runtime.jsx)(ButtonIcon.a2,{icon:_IconClear||(_IconClear=(0,jsx_runtime.jsx)(IconClear.n,{tone:"secondary"})),id:"clear-nearest-suggestions-button",label:"Clear Suggestions",onClick:()=>setShowSuggestions(!1)})}):null]})}),null==nearestLocations?void 0:nearestLocations.map((location=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[_Divider||(_Divider=(0,jsx_runtime.jsx)(Divider.c,{})),(0,jsx_runtime.jsx)(Box.l,{className:"_7mf5nx0",cursor:"pointer",paddingX:{desktop:"medium",tablet:"none",mobile:"none"},paddingY:"medium",onClick:()=>{onLocationSelected(location),setShowSuggestions(!1)},children:(0,jsx_runtime.jsxs)(Stack.B,{space:"small",children:[(0,jsx_runtime.jsx)(Text.E,{size:"small",children:location.contextualName}),(0,jsx_runtime.jsx)(Text.E,{size:"small",children:(0,jsx_runtime.jsx)(InlineCode.R,{children:location.id.value})})]})})]},location.id.value)))]})}),NoLocationsNotice=()=>(0,jsx_runtime.jsx)(Alert.F,{tone:"info",onClose:()=>setShowSuggestions(!1),closeLabel:"Close",children:_Text||(_Text=(0,jsx_runtime.jsx)(Text.E,{children:"No locations found."}))}),hasNearestLocations=nearestLocations&&nearestLocations.length>0,suggestionsOffset=[-space.xlarge*grid,140];return(0,jsx_runtime.jsxs)(Stack.B,{space:"none",children:[(0,jsx_runtime.jsxs)(index_esm.T5,{defaultCenter:initialLocation,defaultZoom:10,height,onClick:_ref2=>{let{latLng}=_ref2;setLatLong(latLng),setShowSuggestions(!0)},animate:!0,animateMaxScreens:100,center:latLong,children:[(0,jsx_runtime.jsx)(index_esm.pH,{color:color.foreground.formAccentLight,anchor:latLong,onClick:()=>{setLatLong(latLong),setShowSuggestions(!0)}}),showSuggestions&&isDesktopOrAbove&&(0,jsx_runtime.jsx)(index_esm.hJ,{anchor:latLong,offset:suggestionsOffset,children:hasNearestLocations?(0,jsx_runtime.jsx)(NearestLocationsCards,{}):(0,jsx_runtime.jsx)(NoLocationsNotice,{})}),_ZoomControl||(_ZoomControl=(0,jsx_runtime.jsx)(index_esm.pj,{}))]}),!isDesktopOrAbove&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:hasNearestLocations?(0,jsx_runtime.jsx)(Stack.B,{space:"none",children:(0,jsx_runtime.jsx)(NearestLocationsCards,{})}):(0,jsx_runtime.jsx)(NoLocationsNotice,{})})]})}},"./lib/components/LocationSuggest/queries.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{GZ:()=>LOCATION,ad:()=>NEAREST_LOCATIONS,xv:()=>LOCATION_SUGGEST});var _apollo_client__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.10.0/node_modules/graphql-tag/lib/index.js");const LOCATION_ATTRIBUTES=_apollo_client__WEBPACK_IMPORTED_MODULE_0__.J1`
  fragment locationAttributes on Location {
    id {
      value
    }
    name
    contextualName
    countryCode
    currencies {
      code
    }
  }
`,NESTED_LOCATION_ATTRIBUTES=_apollo_client__WEBPACK_IMPORTED_MODULE_0__.J1`
  fragment nestedLocationAttributes on Location {
    ...locationAttributes
    parent {
      ...locationAttributes
      parent {
        ...locationAttributes
        parent {
          ...locationAttributes
          parent {
            ...locationAttributes
            parent {
              ...locationAttributes
            }
          }
        }
      }
    }
  }
  ${LOCATION_ATTRIBUTES}
`,LOCATION=_apollo_client__WEBPACK_IMPORTED_MODULE_0__.J1`
  query location($id: String!) {
    location(id: $id) {
      ...nestedLocationAttributes
    }
  }
  ${NESTED_LOCATION_ATTRIBUTES}
`,LOCATION_SUGGEST=_apollo_client__WEBPACK_IMPORTED_MODULE_0__.J1`
  query suggestLocations(
    $usageTypeCode: String!
    $schemeId: String!
    $hirerId: String
    $text: String!
    $first: Int
  ) {
    locationSuggestions(
      usageTypeCode: $usageTypeCode
      schemeId: $schemeId
      hirerId: $hirerId
      text: $text
      first: $first
    ) {
      location {
        ...nestedLocationAttributes
      }
    }
  }
  ${NESTED_LOCATION_ATTRIBUTES}
`,NEAREST_LOCATIONS=_apollo_client__WEBPACK_IMPORTED_MODULE_0__.J1`
  query nearestLocations(
    $schemeId: String!
    $geoLocation: GeoLocationInput!
    $first: Int
  ) {
    nearestLocations(
      schemeId: $schemeId
      geoLocation: $geoLocation
      first: $first
    ) {
      ...nestedLocationAttributes
    }
  }
  ${NESTED_LOCATION_ATTRIBUTES}
`},"./lib/utils/flattenResourceByKey.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>flattenResourceByKey});const flattenResourceByKey=(resource,key)=>{const castedResource=resource;return[resource].concat(castedResource[key]?flattenResourceByKey(castedResource[key],key):[])}}}]);
//# sourceMappingURL=components-LocationSuggest-LocationSuggest-stories.fdd54351.iframe.bundle.js.map