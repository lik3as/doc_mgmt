"use strict";(self.webpackChunkable_pro_material_react_ts=self.webpackChunkable_pro_material_react_ts||[]).push([[850],{6233:function(e,r,i){var n=i(3967),t=i(4554),s=i(3536),o=i(184);r.Z=function(){var e=(0,n.Z)();return(0,o.jsxs)(t.Z,{sx:{position:"absolute",filter:"blur(140px)",zIndex:-1,bottom:0,left:0,top:0,right:0,overflow:"hidden","&:before":{content:'" "',width:300,height:300,borderRadius:"50%",bgcolor:"warning.lighter",position:"absolute",top:0,right:0,opacity:e.palette.mode===s.hY.DARK?.6:1}},children:[(0,o.jsx)(t.Z,{sx:{width:250,height:250,borderRadius:"50%",bgcolor:e.palette.success.lighter,ml:20,position:"absolute",bottom:180,opacity:e.palette.mode===s.hY.DARK?.8:1}}),(0,o.jsx)(t.Z,{sx:{width:200,height:200,borderRadius:"50%",bgcolor:e.palette.error.light,position:"absolute",bottom:0,left:-50,opacity:e.palette.mode===s.hY.DARK?.8:1}})]})}},9678:function(e,r,i){var n=i(2791);r.Z=function(){var e=(0,n.useRef)(!0);return(0,n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1850:function(e,r,i){i.r(r),i.d(r,{default:function(){return z}});var n=i(1087),t=i(1889),s=i(890),o=i(6314),a=i(4224),l=i(4371),c=i(3172),d=i(1181),h=i(4634),x=i(4165),u=i(5861),m=i(9439),p=i(2791),Z=i(4925),g=i(8029),j=i(7071),f=i(3466),b=i(5523),v=i(9174),w=i(533),y=i(6151),P=i(8007),k=i(6277),C=i(9678),S=i(8975),I=i(4914),_=i(9769),R=i(5640),F=i(184),D=function(e){var r=e.forgot,i=(0,p.useState)(!1),a=(0,m.Z)(i,2),c=a[0],d=a[1],h=(0,l.Z)(),D=h.isLoggedIn,E=h.login,A=(0,C.Z)(),B=(0,p.useState)(!1),z=(0,m.Z)(B,2),W=z[0],q=z[1],K=function(){q(!W)},L=function(e){e.preventDefault()};return(0,F.jsx)(F.Fragment,{children:(0,F.jsx)(k.J9,{initialValues:{email:"info@phoenixcoded.co",password:"123456",submit:null},validationSchema:P.Ry().shape({email:P.Z_().email("Must be a valid email").max(255).required("Email is required"),password:P.Z_().max(255).required("Password is required")}),onSubmit:function(){var e=(0,u.Z)((0,x.Z)().mark((function e(r,i){var n,t,s;return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.setErrors,t=i.setStatus,s=i.setSubmitting,e.prev=1,e.next=4,E(r.email,r.password);case 4:A.current&&(t({success:!0}),s(!1)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0),A.current&&(t({success:!1}),n({submit:e.t0.message}),s(!1));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(r,i){return e.apply(this,arguments)}}(),children:function(e){var i=e.errors,a=e.handleBlur,l=e.handleChange,h=e.handleSubmit,x=e.isSubmitting,u=e.touched,m=e.values;return(0,F.jsx)("form",{noValidate:!0,onSubmit:h,children:(0,F.jsxs)(t.ZP,{container:!0,spacing:3,children:[(0,F.jsx)(t.ZP,{item:!0,xs:12,children:(0,F.jsxs)(o.Z,{spacing:1,children:[(0,F.jsx)(Z.Z,{htmlFor:"email-login",children:"Email Address"}),(0,F.jsx)(g.Z,{id:"email-login",type:"email",value:m.email,name:"email",onBlur:a,onChange:l,placeholder:"Enter email address",fullWidth:!0,error:Boolean(u.email&&i.email)}),u.email&&i.email&&(0,F.jsx)(j.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:i.email})]})}),(0,F.jsx)(t.ZP,{item:!0,xs:12,children:(0,F.jsxs)(o.Z,{spacing:1,children:[(0,F.jsx)(Z.Z,{htmlFor:"password-login",children:"Password"}),(0,F.jsx)(g.Z,{fullWidth:!0,error:Boolean(u.password&&i.password),id:"-password-login",type:W?"text":"password",value:m.password,name:"password",onBlur:a,onChange:l,endAdornment:(0,F.jsx)(f.Z,{position:"end",children:(0,F.jsx)(S.Z,{"aria-label":"toggle password visibility",onClick:K,onMouseDown:L,edge:"end",color:"secondary",children:W?(0,F.jsx)(_.Z,{}):(0,F.jsx)(R.Z,{})})}),placeholder:"Enter password"}),u.password&&i.password&&(0,F.jsx)(j.Z,{error:!0,id:"standard-weight-helper-text-password-login",children:i.password})]})}),(0,F.jsx)(t.ZP,{item:!0,xs:12,sx:{mt:-1},children:(0,F.jsxs)(o.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,F.jsx)(b.Z,{control:(0,F.jsx)(v.Z,{checked:c,onChange:function(e){return d(e.target.checked)},name:"checked",color:"primary",size:"small"}),label:(0,F.jsx)(s.Z,{variant:"h6",children:"Keep me sign in"})}),(0,F.jsx)(w.Z,{variant:"h6",component:n.rU,to:D&&r?r:"/forgot-password",color:"text.primary",children:"Forgot Password?"})]})}),i.submit&&(0,F.jsx)(t.ZP,{item:!0,xs:12,children:(0,F.jsx)(j.Z,{error:!0,children:i.submit})}),(0,F.jsx)(t.ZP,{item:!0,xs:12,children:(0,F.jsx)(I.Z,{children:(0,F.jsx)(y.Z,{disableElevation:!0,disabled:x,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Login"})})})]})})}})})},E=i(103),A=i(5632),B=i(3631),z=function(){var e=(0,l.Z)().isLoggedIn;return(0,F.jsx)(h.Z,{children:(0,F.jsxs)(t.ZP,{container:!0,spacing:3,children:[(0,F.jsx)(t.ZP,{item:!0,xs:12,sx:{textAlign:"center"},children:(0,F.jsx)(a.Z,{})}),(0,F.jsx)(t.ZP,{item:!0,xs:12,children:(0,F.jsxs)(t.ZP,{container:!0,spacing:1,children:[(0,F.jsx)(t.ZP,{item:!0,xs:12,children:(0,F.jsxs)(c.Z,{children:[(0,F.jsx)("img",{src:E.Z,alt:"Facebook",style:{margin:"0 10px"}})," Sign In with Facebook"]})}),(0,F.jsx)(t.ZP,{item:!0,xs:12,children:(0,F.jsxs)(c.Z,{children:[(0,F.jsx)("img",{src:A.Z,alt:"Facebook",style:{margin:"0 10px"}})," Sign In with Twitter"]})}),(0,F.jsx)(t.ZP,{item:!0,xs:12,children:(0,F.jsxs)(c.Z,{children:[(0,F.jsx)("img",{src:B.Z,alt:"Facebook",style:{margin:"0 10px"}})," Sign In with Google"]})})]})}),(0,F.jsx)(t.ZP,{item:!0,xs:12,children:(0,F.jsx)(d.Z,{children:(0,F.jsx)(s.Z,{variant:"body1",children:"OR"})})}),(0,F.jsx)(t.ZP,{item:!0,xs:12,children:(0,F.jsxs)(o.Z,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:[(0,F.jsx)(s.Z,{variant:"h3",children:"Login"}),(0,F.jsx)(s.Z,{component:n.rU,to:e?"/auth/register":"/register",variant:"body1",sx:{textDecoration:"none"},color:"primary",children:"Don't have an account?"})]})}),(0,F.jsx)(t.ZP,{item:!0,xs:12,children:(0,F.jsx)(D,{forgot:"/auth/forgot-password"})})]})})}},1181:function(e,r,i){var n=i(4554),t=i(3967),s=i(184);r.Z=function(e){var r=e.children,i=(0,t.Z)();return(0,s.jsx)(n.Z,{sx:{position:"relative",display:"flex","&:after":{content:'""',position:"absolute",top:"50%",left:0,width:"100%",height:"1px",zIndex:1,background:i.palette.divider},"& .MuiTypography-root":{background:i.palette.background.paper,position:"relative",padding:"8px 20px",margin:"0 auto",zIndex:5}},children:r})}},3172:function(e,r,i){var n=i(1413),t=i(5987),s=i(6151),o=i(3967),a=i(184),l=["children"];r.Z=function(e){var r=e.children,i=(0,t.Z)(e,l),c=(0,o.Z)();return(0,a.jsx)(s.Z,(0,n.Z)((0,n.Z)({variant:"outlined",fullWidth:!0,sx:{backgroundColor:c.palette.secondary[100],borderColor:c.palette.secondary[200],color:c.palette.secondary.main,"&:hover,&:focus":{backgroundColor:c.palette.secondary[100],borderColor:c.palette.primary.main}}},i),{},{children:r}))}},4634:function(e,r,i){i.d(r,{Z:function(){return x}});var n=i(4554),t=i(1889),s=i(1413),o=i(5987),a=i(651),l=i(184),c=["children"],d=function(e){var r=e.children,i=(0,o.Z)(e,c);return(0,l.jsx)(a.Z,(0,s.Z)((0,s.Z)({sx:{maxWidth:{xs:400,md:480},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},i),{},{children:(0,l.jsx)(n.Z,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:r})}))},h=i(6233),x=function(e){var r=e.children;return(0,l.jsxs)(n.Z,{sx:{minHeight:"100vh"},children:[(0,l.jsx)(h.Z,{}),(0,l.jsx)(t.ZP,{container:!0,direction:"column",justifyContent:"center",sx:{minHeight:"100vh"},children:(0,l.jsx)(t.ZP,{item:!0,xs:12,children:(0,l.jsx)(t.ZP,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:{xs:"calc(100vh - 210px)",sm:"calc(100vh - 134px)",md:"calc(100vh - 112px)"}},children:(0,l.jsx)(t.ZP,{item:!0,children:(0,l.jsx)(d,{children:r})})})})})]})}},103:function(e,r,i){i(2791);r.Z=i.p+"static/media/facebook.5b823a6232805871728da1033d817609.svg"},3631:function(e,r,i){i(2791);r.Z=i.p+"static/media/google.9f927c6322f531ec12cfc1f457d746dd.svg"},5632:function(e,r,i){i(2791);r.Z=i.p+"static/media/twitter.5b9c9738bc8e86846c91f27886cebacf.svg"}}]);
//# sourceMappingURL=850.67d2192e.chunk.js.map