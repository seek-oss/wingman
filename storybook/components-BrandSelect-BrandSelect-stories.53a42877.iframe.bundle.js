"use strict";(self.webpackChunkwingman_fe=self.webpackChunkwingman_fe||[]).push([[975],{"./lib/components/BrandSelect/BrandSelect.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MultipleBrands:()=>MultipleBrands,NoBrands:()=>NoBrands,NoInitialBrandId:()=>NoInitialBrandId,default:()=>BrandSelect_stories});var preview=__webpack_require__("./.storybook/preview.tsx"),react=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),MockComponentActions=__webpack_require__("./lib/private/MockComponentActions/MockComponentActions.tsx");const createCursorConnection=(items,args)=>{var _edges$,_edges;if(args.first&&args.last)throw new Error("first and last cannot be specified in the same query");const operationPageSize=(value=Math.floor(args.first??args.last??100),min=1,max=100,Math.min(Math.max(value,min),max));var value,min,max;let startIndex=items.findIndex((item=>item.cursor===args.after))+1,endIndex=items.findIndex(((item,index)=>index>=startIndex&&item.cursor===args.before));endIndex=-1===endIndex?items.length:endIndex,args.last?startIndex=Math.max(startIndex,endIndex-operationPageSize):endIndex=Math.min(endIndex,startIndex+operationPageSize);const edges=items.slice(startIndex,endIndex);return{edges,pageInfo:{hasNextPage:endIndex<items.length,hasPreviousPage:startIndex>0,startCursor:(null===(_edges$=edges[0])||void 0===_edges$?void 0:_edges$.cursor)??null,endCursor:(null===(_edges=edges[edges.length-1])||void 0===_edges?void 0:_edges.cursor)??null}}};var _Divider,_IconChevron,_IconChevron2,ApolloMockProvider=__webpack_require__("./lib/components/ApolloMockProvider/ApolloMockProvider.tsx"),useQuery=__webpack_require__("../node_modules/.pnpm/@apollo+client@3.12.5_@types+react@18.3.16_graphql-ws@5.16.2_graphql@16.10.0__graphql@16.10.0_amg6sd3465x6cavv55s5k7fr64/node_modules/@apollo/client/react/hooks/useQuery.js"),Inline=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Inline/Inline.mjs"),Text=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Text/Text.mjs"),Loader=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Loader/Loader.mjs"),Stack=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Stack/Stack.mjs"),Heading=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Heading/Heading.mjs"),FieldMessage=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/FieldMessage/FieldMessage.mjs"),Notice=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Notice/Notice.mjs"),SmartTextLink=__webpack_require__("../node_modules/.pnpm/scoobie@19.0.0_babel-plugin-macros@3.1.0_braid-design-system@33.3.0_@types+react@18.3.16_babe_wvs52pfjknvtc5hvilttxoksrq/node_modules/scoobie/src/components/SmartTextLink.tsx"),Divider=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Divider/Divider.mjs"),Columns=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Columns/Columns.mjs"),Column=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Column/Column.mjs"),TextLinkButton=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/TextLinkButton/TextLinkButton.mjs"),IconChevron=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/icons/IconChevron/IconChevron.mjs"),jsx_runtime=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const ConnectionPagination=_ref=>{let{children:render,connection:{edges,pageInfo:{endCursor,hasNextPage,hasPreviousPage,startCursor}},dividers,onPagination,pageSize}=_ref;return(0,jsx_runtime.jsxs)(Stack.B,{space:"large",children:[render(edges),hasPreviousPage||hasNextPage?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[dividers?_Divider||(_Divider=(0,jsx_runtime.jsx)(Divider.c,{})):null,(0,jsx_runtime.jsxs)(Columns.e,{space:"large",children:[hasPreviousPage&&startCursor?(0,jsx_runtime.jsx)(Column.V,{children:(0,jsx_runtime.jsx)(Text.E,{align:"left",children:(0,jsx_runtime.jsxs)(TextLinkButton.W,{onClick:()=>onPagination({after:null,before:startCursor,first:null,last:pageSize}),children:[_IconChevron||(_IconChevron=(0,jsx_runtime.jsx)(IconChevron.V,{direction:"left"}))," Previous"]})})}):null,hasNextPage&&endCursor?(0,jsx_runtime.jsx)(Column.V,{children:(0,jsx_runtime.jsx)(Text.E,{align:"right",children:(0,jsx_runtime.jsxs)(TextLinkButton.W,{onClick:()=>onPagination({after:endCursor,before:null,first:pageSize,last:null}),children:["Next ",_IconChevron2||(_IconChevron2=(0,jsx_runtime.jsx)(IconChevron.V,{direction:"right"}))]})})}):null]})]}):null]})};var Tiles=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Tiles/Tiles.mjs"),Box=__webpack_require__("../node_modules/.pnpm/braid-design-system@33.3.0_@types+react@18.3.16_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/braid-design-system/dist/lib/components/Box/Box.mjs"),CopyableText=__webpack_require__("../node_modules/.pnpm/scoobie@19.0.0_babel-plugin-macros@3.1.0_braid-design-system@33.3.0_@types+react@18.3.16_babe_wvs52pfjknvtc5hvilttxoksrq/node_modules/scoobie/src/components/CopyableText.tsx");const CopyableOid=_ref=>{let{children,size}=_ref;return(0,jsx_runtime.jsx)(CopyableText.x,{copiedLabel:"Copied OID",copyLabel:"Copy OID",size,children})};var _Text,styles_css_brand="_1p476a84",selectableBrand="_1p476a85";const CoverImage=_ref=>{let{image,brandName}=_ref;return null!=image&&image.url?(0,jsx_runtime.jsx)(Box.l,{alt:`${brandName} cover image`,className:"_1p476a81 _1p476a80",component:"img",display:"block",src:image.url,width:"full"}):(0,jsx_runtime.jsx)(Box.l,{alignItems:"center",className:"_1p476a82 _1p476a80",display:"flex",justifyContent:"center",width:"full",children:_Text||(_Text=(0,jsx_runtime.jsx)(Text.E,{children:"No cover image"}))})},OriginalLogo=_ref2=>{let{image,brandName}=_ref2;return(0,jsx_runtime.jsx)(Box.l,{alt:`${brandName} original logo`,className:"_1p476a83",component:"img",display:"block",src:null==image?void 0:image.url,width:"full"})},BrandTile=_ref3=>{let{brand,isSelected,onSelect,showCopyableOid}=_ref3;return(0,jsx_runtime.jsxs)(Box.l,{borderRadius:"large",boxShadow:isSelected?"borderFormAccentLarge":void 0,cursor:onSelect?"pointer":"default",className:{[styles_css_brand]:!isSelected,[selectableBrand]:onSelect&&!isSelected},onClick:()=>null==onSelect?void 0:onSelect(brand),children:[(0,jsx_runtime.jsx)(CoverImage,{image:brand.images.find((image=>"CoverImage"===image.typeCode)),brandName:brand.name}),(0,jsx_runtime.jsx)(Box.l,{padding:"medium",children:(0,jsx_runtime.jsxs)(Stack.B,{space:"medium",children:[(0,jsx_runtime.jsx)(OriginalLogo,{image:brand.images.find((image=>"OriginalLogo"===image.typeCode)),brandName:brand.name}),(0,jsx_runtime.jsx)(Text.E,{children:brand.name}),showCopyableOid&&(0,jsx_runtime.jsx)(CopyableOid,{size:"small",children:brand.id.value})]})})]})},BrandTiles=_ref=>{let{edges,selectedBrandId,onSelect,showCopyableOid}=_ref;return(0,jsx_runtime.jsx)(Tiles.U,{columns:[1,2,2],space:"small",children:edges.map((_ref2=>{let{node}=_ref2;return(0,jsx_runtime.jsx)(BrandTile,{brand:node,isSelected:selectedBrandId===node.id.value,onSelect,showCopyableOid},node.id.value)}))})};var _Notice;const PaginatedBrands=_ref=>{var _data$advertisementBr;let{data,pageSize,selectedBrandId,onPagination,onSelect,showCopyableOid}=_ref;return(null==data||null===(_data$advertisementBr=data.advertisementBrandings)||void 0===_data$advertisementBr?void 0:_data$advertisementBr.edges.length)?(0,jsx_runtime.jsx)(ConnectionPagination,{connection:data.advertisementBrandings,onPagination,pageSize,children:edges=>(0,jsx_runtime.jsx)(BrandTiles,{edges,selectedBrandId,onSelect,showCopyableOid})}):_Notice||(_Notice=(0,jsx_runtime.jsx)(Notice.$,{tone:"info",children:(0,jsx_runtime.jsxs)(Text.E,{children:["You have no brands. Upload a new brand on the"," ",(0,jsx_runtime.jsx)(SmartTextLink.j,{href:"https://talent.seek.com.au/account/branding",children:"SEEK employer website"})," ","or contact SEEK."]})}))};var lib=__webpack_require__("../node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.10.0/node_modules/graphql-tag/lib/index.js");const ADVERTISEMENT_BRANDING_FIELDS=lib.J1`
  fragment advertisementBrandingFields on AdvertisementBranding {
    id {
      value
    }
    name
    images {
      typeCode
      url
    }
  }
`,ADVERTISEMENT_BRANDING_EDGE_FIELDS=lib.J1`
  fragment advertisementBrandingEdgeFields on AdvertisementBrandingEdge {
    node {
      ...advertisementBrandingFields
    }
  }
  ${ADVERTISEMENT_BRANDING_FIELDS}
`,ADVERTISEMENT_BRANDINGS=lib.J1`
  query AdvertisementBrandings(
    $after: String
    $before: String
    $first: Int
    $last: Int
    $hirerId: String!
  ) {
    advertisementBrandings(
      after: $after
      before: $before
      first: $first
      last: $last
      hirerId: $hirerId
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        ...advertisementBrandingEdgeFields
      }
    }
  }
  ${ADVERTISEMENT_BRANDING_EDGE_FIELDS}
`;var _Inline,_Heading,_FieldMessage;const BrandSelect=_ref=>{var _data$advertisementBr;let{client,context,hideLabel,hirerId,initialBrandId,showCopyableOid=!1,onSelect,onBrandingQueryResponse,pageSize=4}=_ref;const[variables,setVariables]=(0,react.useState)({hirerId,first:pageSize}),[hasPreselected,setHasPreselected]=(0,react.useState)(!1);(0,react.useEffect)((()=>setVariables({hirerId,first:pageSize})),[hirerId,pageSize]);const{data,previousData,loading,error}=(0,useQuery.IT)(ADVERTISEMENT_BRANDINGS,{...client&&{client},context,variables}),[selectedBrandId,setSelectedBrandId]=(0,react.useState)(initialBrandId);(0,react.useEffect)((()=>{initialBrandId&&setHasPreselected(!0),setSelectedBrandId(initialBrandId)}),[initialBrandId]);const firstBrandId=null==data||null===(_data$advertisementBr=data.advertisementBrandings.edges[0])||void 0===_data$advertisementBr?void 0:_data$advertisementBr.node.id.value;(0,react.useEffect)((()=>{firstBrandId&&!hasPreselected&&(setHasPreselected(!0),setSelectedBrandId(firstBrandId),null==onSelect||onSelect(firstBrandId))}),[firstBrandId,hasPreselected,onSelect]);const renderedData=data??previousData;return renderedData&&onBrandingQueryResponse&&onBrandingQueryResponse(renderedData),loading&&!renderedData?_Inline||(_Inline=(0,jsx_runtime.jsxs)(Inline.c,{space:"small",children:[(0,jsx_runtime.jsx)(Text.E,{children:"Loading brands"}),(0,jsx_runtime.jsx)(Loader.a,{size:"xsmall"})]})):(0,jsx_runtime.jsxs)(Stack.B,{space:"medium",children:[hideLabel?null:_Heading||(_Heading=(0,jsx_runtime.jsx)(Heading.D,{level:"4",children:"Branding"})),(0,jsx_runtime.jsx)(PaginatedBrands,{data:renderedData,pageSize,selectedBrandId,onPagination:args=>{setVariables({...args,hirerId})},onSelect:brand=>{const nextBrandId=brand.id.value===selectedBrandId?void 0:brand.id.value;onSelect&&onSelect(nextBrandId),setSelectedBrandId(nextBrandId)},showCopyableOid}),error&&(_FieldMessage||(_FieldMessage=(0,jsx_runtime.jsx)(FieldMessage.i,{id:"brandingSelectError",message:"Sorry, we couldn’t fetch brands. Please try again.",tone:"critical"})))]})},mockBrands=[{id:{value:"global:advertisementBranding:hirerBranding:MjHScMntyZKfPPKv37EqAn"},name:"SEEK logo - No cover image",images:[{typeCode:"OriginalLogo",url:"https://image-service-cdn.seek.com.au/27ecca452d06d960b596aa40380f0d06c56b6ba8"},{typeCode:"CoverImage",url:""}]},{id:{value:"global:advertisementBranding:hirerBranding:4pkLmqYhoSxSKmfcKMbDG6"},name:"SEEK logo - MacBook (green)",images:[{typeCode:"OriginalLogo",url:"https://image-service-cdn.seek.com.au/27ecca452d06d960b596aa40380f0d06c56b6ba8"},{typeCode:"CoverImage",url:"https://image-service-cdn.seek.com.au/7a2b5aa53d67c7c6d0eeae95bfa56d9b2f5ac228"}]},{id:{value:"global:advertisementBranding:hirerBranding:CNEHkUP51vvPyYuBwfQw7u"},name:"SEEK logo - Notebook",images:[{typeCode:"OriginalLogo",url:"https://image-service-cdn.seek.com.au/27ecca452d06d960b596aa40380f0d06c56b6ba8"},{typeCode:"CoverImage",url:"https://image-service-cdn.seek.com.au/3715be0437f2badc4c50f877396241b1f0af112e"}]},{id:{value:"global:advertisementBranding:hirerBranding:MD2FWYzmVd4p5Bs1pFEddd"},name:"SEEK logo - Laptop",images:[{typeCode:"OriginalLogo",url:"https://image-service-cdn.seek.com.au/27ecca452d06d960b596aa40380f0d06c56b6ba8"},{typeCode:"CoverImage",url:"https://image-service-cdn.seek.com.au/f33d107cd083880157439477e7790edd629ed50a"}]},{id:{value:"global:advertisementBranding:hirerBranding:4YsFiFRekSvuKjLzRUtmZH"},name:"SEEK logo - Pens",images:[{typeCode:"OriginalLogo",url:"https://image-service-cdn.seek.com.au/27ecca452d06d960b596aa40380f0d06c56b6ba8"},{typeCode:"CoverImage",url:"https://image-service-cdn.seek.com.au/dfa45197f30daae1985dc0b7abcfdd72c264e18f/"}]},{id:{value:"global:advertisementBranding:hirerBranding:2P8WhewQF4dnZNYRKMDv1r"},name:"SEEK logo - Blue cover",images:[{typeCode:"OriginalLogo",url:"https://image-service-cdn.seek.com.au/27ecca452d06d960b596aa40380f0d06c56b6ba8"},{typeCode:"CoverImage",url:"https://image-service-cdn.seek.com.au/092f3e7154538e84fbc39b169f8e6e74d9c3655e"}]},{id:{value:"global:advertisementBranding:hirerBranding:VQ9aAzkhogAMSw3AF31stC"},name:"SEEK blue logo - Backpack",images:[{typeCode:"OriginalLogo",url:"https://image-service-cdn.seek.com.au/f154d446456c99cc3100df6df37676935f8bc340"},{typeCode:"CoverImage",url:"https://image-service-cdn.seek.com.au/870108007f0cf52865e3213ff6bc43a83b7948a1"}]},{id:{value:"global:advertisementBranding:hirerBranding:D557J8rpyMKpP9DxrWg2s"},name:"SEEK blue logo - Sunset",images:[{typeCode:"OriginalLogo",url:"https://image-service-cdn.seek.com.au/f154d446456c99cc3100df6df37676935f8bc340"},{typeCode:"CoverImage",url:"https://image-service-cdn.seek.com.au/bfe8d1571d426699af6d26742ffb835b27e279e2"}]},{id:{value:"global:advertisementBranding:hirerBranding:qVe8DCsXJP9zNHsmcmEyL"},name:"SEEK logo - Town",images:[{typeCode:"OriginalLogo",url:"https://image-service-cdn.seek.com.au/27ecca452d06d960b596aa40380f0d06c56b6ba8"},{typeCode:"CoverImage",url:"https://image-service-cdn.seek.com.au/2df39384e6fe569f73073fe138027b6c0a1e7658"}]},{id:{value:"global:advertisementBranding:hirerBranding:7yQLDLdqz9phfe9j1GHDgn"},name:"SEEK logo - Beach",images:[{typeCode:"OriginalLogo",url:"https://image-service-cdn.seek.com.au/27ecca452d06d960b596aa40380f0d06c56b6ba8"},{typeCode:"CoverImage",url:"https://image-service-cdn.seek.com.au/02eb0c5634bb43fccaac3adafef4e13a8d4fc1e8"}]},{id:{value:"global:advertisementBranding:hirerBranding:33Y863h6sCnrCFk97w9bvg"},name:"SEEK logo - Flower",images:[{typeCode:"OriginalLogo",url:"https://image-service-cdn.seek.com.au/27ecca452d06d960b596aa40380f0d06c56b6ba8"},{typeCode:"CoverImage",url:"https://image-service-cdn.seek.com.au/8aa4053b6236031aaa2c2082b304e20adc6c61ba"}]}].map(((node,index)=>({cursor:`global:advertisementBrandingCursor:indirectBranding:${index+1}`,node}))),BrandSelect_stories={title:"Job Posting/Branding/BrandSelect",component:_ref=>{let{client:_client,showStorybookAction,pageSize,variant="multiple-brands",...props}=_ref;return(0,jsx_runtime.jsx)(ApolloMockProvider.f,{resolvers:{Query:{advertisementBrandings:(_root,args)=>createCursorConnection("multiple-brands"===variant?mockBrands:[],args)}},children:(0,jsx_runtime.jsx)(MockComponentActions.B,{space:"medium",showStorybookAction,storybookPath:`/story/job-posting-branding-brandselect--${variant}`,sourcePath:"lib/components/BrandSelect",children:(0,jsx_runtime.jsx)(BrandSelect,{...props,pageSize})})})},args:{hirerId:"seekAnzPublicTest:organization:seek:93WyyF1h",initialBrandId:"global:advertisementBranding:hirerBranding:4pkLmqYhoSxSKmfcKMbDG6",pageSize:4},argTypes:{showStorybookAction:preview.defaultArgTypes.showStorybookAction}},MultipleBrands={args:{variant:"multiple-brands"},name:"Multiple brands"},NoInitialBrandId={args:{variant:"multiple-brands",initialBrandId:void 0},name:"No initial brand ID"},NoBrands={args:{variant:"no-brands"},name:"No brands"};MultipleBrands.parameters={...MultipleBrands.parameters,docs:{...MultipleBrands.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'multiple-brands'\n  },\n  name: 'Multiple brands'\n}",...MultipleBrands.parameters?.docs?.source}}},NoInitialBrandId.parameters={...NoInitialBrandId.parameters,docs:{...NoInitialBrandId.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'multiple-brands',\n    initialBrandId: undefined\n  },\n  name: 'No initial brand ID'\n}",...NoInitialBrandId.parameters?.docs?.source}}},NoBrands.parameters={...NoBrands.parameters,docs:{...NoBrands.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'no-brands'\n  },\n  name: 'No brands'\n}",...NoBrands.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-BrandSelect-BrandSelect-stories.53a42877.iframe.bundle.js.map