"use strict";(self.webpackChunkwingman_fe=self.webpackChunkwingman_fe||[]).push([[615],{"./lib/components/JobCategorySelect/JobCategorySelect.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{JobCategorySelect:()=>JobCategorySelect_stories_JobCategorySelect,default:()=>JobCategorySelect_stories});var preview=__webpack_require__("./.storybook/preview.tsx"),react=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),MockComponentActions=__webpack_require__("./lib/private/MockComponentActions/MockComponentActions.tsx"),ApolloMockProvider=__webpack_require__("./lib/components/ApolloMockProvider/ApolloMockProvider.tsx"),JobCategorySelect=__webpack_require__("./lib/components/JobCategorySelect/JobCategorySelect.tsx"),jobCategories=__webpack_require__("./lib/components/JobCategorySelect/__fixtures__/jobCategories.ts"),jsx_runtime=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const JobCategorySelect_stories={title:"Job Posting/Job categories/JobCategorySelect",component:(0,react.forwardRef)(((_ref,ref)=>{let{client:_client,showStorybookAction,...props}=_ref;return(0,jsx_runtime.jsx)(ApolloMockProvider.f,{resolvers:{Query:{jobCategories:()=>jobCategories.S}},children:(0,jsx_runtime.jsx)(MockComponentActions.B,{space:"medium",showStorybookAction,storybookPath:"/story/job-posting-job-categories-jobcategoryselect--job-category-select",sourcePath:"lib/components/JobCategorySelect",children:(0,jsx_runtime.jsx)(JobCategorySelect.w,{...props,ref})})})})),args:{id:"jobCategories",label:"Category",message:"undefined",reserveMessageSpace:!1,schemeId:"seekAnz",tone:preview.defaultArgs.tone},argTypes:{message:{control:{type:"radio"},mapping:{undefined:void 0,requiredValidation:"Select a category"},options:["undefined","requiredValidation"]},showStorybookAction:preview.defaultArgTypes.showStorybookAction,tone:preview.defaultArgTypes.tone}},JobCategorySelect_stories_JobCategorySelect={};JobCategorySelect_stories_JobCategorySelect.parameters={...JobCategorySelect_stories_JobCategorySelect.parameters,docs:{...JobCategorySelect_stories_JobCategorySelect.parameters?.docs,source:{originalSource:"{}",...JobCategorySelect_stories_JobCategorySelect.parameters?.docs?.source}}}}}]);