import{G as a,r as d,U as h,u as x,j as e,l as _}from"./index-f43ef311.js";const m="_info_19pgo_1",p="_card_19pgo_21",f="_table_19pgo_39",j="_avt_19pgo_57",u="_verification_19pgo_89",g="_create_profile_19pgo_151",v="_card_info_19pgo_211",N="_countTime_19pgo_235",b="_email_19pgo_281",s={info:m,card:p,table:f,avt:j,verification:u,create_profile:g,card_info:v,countTime:N,email:b};function M(t){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}}]})(t)}function y(t){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44.91-1.29.4-3.7-2.18-3.7-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41.7 1.15 1.11 3.3.03 4.9-1.2 1.77-2.35 2.31-2.97 3.45-.25.46-.35.76-.35 2.24h-2.89c-.01-.78-.13-2.05.48-3.15zM14 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"}}]})(t)}function C(){const{user:t,ready:i}=d.useContext(h),n=x(),o=()=>{const r=Date.parse(new Date),c=Date.parse(t.timeCreate),l=r-c;return Math.floor(l/864e5)+1};return i&&!t?n("/account/login"):i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:s.info,children:[e.jsxs("section",{className:s.card,children:[e.jsxs("div",{className:s.card_info,children:[e.jsx("div",{className:s.avt,children:e.jsx("img",{src:_,alt:""})}),e.jsxs("div",{className:s.countTime,children:[e.jsxs("div",{children:[e.jsx("h3",{children:t.name}),e.jsx("p",{children:"Guest"})]}),e.jsxs("div",{children:[e.jsx("span",{children:o()}),e.jsx("p",{children:" days on Airbnb!"})," "]})]})]}),e.jsxs("div",{className:s.verification,children:[e.jsxs("div",{className:s.email,children:[e.jsx("h3",{children:"Your confirmed infomation "}),e.jsxs("span",{children:[e.jsx(M,{color:"green",size:20}),e.jsx("p",{children:"Email address"})]})]}),e.jsxs("div",{className:s.email,children:[e.jsx("h3",{children:"Verify your identity "}),e.jsxs("span",{children:[e.jsx(y,{size:28,color:"#f9375a"}),e.jsx("p",{children:"Before you book or Host on Airbnb, you’ll need to complete this step"})]})]})]})]}),e.jsx("section",{className:s.table})]}),e.jsx("div",{className:s.action})]}):e.jsx("p",{children:"Loading..."})}export{C as default};
