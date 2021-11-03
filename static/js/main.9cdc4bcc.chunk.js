(this["webpackJsonpefarn-admin-frontend"]=this["webpackJsonpefarn-admin-frontend"]||[]).push([[0],{165:function(e,t,a){e.exports={profileCard:"FarmProfile_profileCard__tNcTI"}},186:function(e,t,a){},237:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(41),c=a.n(r),o=(a(186),a(23)),s=a(20),l=a(290),d=a(296),j=a(282),p=a(274),u=a(288),m=a(281),b=a(92),h=a.n(b),x=a.p+"static/media/navLogo.1bf254b4.png",g=a(1);var f=function(){var e=localStorage.getItem("user_name");return Object(g.jsx)(j.a,{collapseOnSelect:!0,variant:"dark",expand:"lg",className:"nav-bg",children:Object(g.jsxs)(p.a,{children:[Object(g.jsx)(j.a.Brand,{href:"",className:h.a.NavBrand,children:Object(g.jsx)("img",{src:x,alt:"logo",style:{maxHeight:"55px"}})}),Object(g.jsx)(j.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(g.jsxs)(j.a.Collapse,{id:"responsive-navbar-nav",children:[Object(g.jsxs)(u.a,{className:"me-auto",children:[Object(g.jsx)(o.c,{to:"/dashboard",className:h.a.navList,children:"Dashboard"}),Object(g.jsx)(o.c,{to:"/vegetables",className:h.a.navList,children:"Vegetables"}),Object(g.jsx)(o.c,{to:"/trees",className:h.a.navList,children:"Trees"})]}),Object(g.jsxs)(m.a,{title:e,id:"basic-nav-dropdown",children:[Object(g.jsx)(m.a.Item,{as:o.c,to:"/profile",style:{textAlign:"center"},children:"Edit profile"}),Object(g.jsx)(m.a.Divider,{}),Object(g.jsx)(m.a.Item,{href:"#action/3.1",children:Object(g.jsx)(d.a,{color:"error",fullWidth:!0,size:"small",children:"Logout"})})]})]})]})})};var O=function(e){return Object(g.jsxs)("section",{className:"layout-section",children:[Object(g.jsx)(f,{}),Object(g.jsx)(l.a,{container:!0,children:Object(g.jsx)(p.a,{children:e.children})})]})};var v=function(){return Object(g.jsx)(O,{children:Object(g.jsx)("p",{children:"This is the dashboard page"})})},y=a(7),w=a(298),_=a(301),A=a(300),N=a(303),F=a(304),T=a(302),C=a(293),k=a(284),q=a(297),I=a(56),L=a.n(I),S=a(116),E=a.n(S),z=a(45),P=a.n(z),D="https://efarm.ml/api",R={headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer "+localStorage.getItem("access_token")}},B={checkLogin:function(e){return P.a.post("".concat(D,"/login"),e)},checkSignup:function(e){return P.a.post("".concat(D,"/register"),e)},getFarmerVegetables:function(){return P.a.get("".concat(D,"/get_vegetables"),R)},getFarmerTrees:function(){return P.a.get("".concat(D,"/get_trees"),R)},getFarmerProfile:function(){return P.a.get("".concat(D,"/profile"),R)},editFarmerProfile:function(e){return P.a.post("".concat(D,"/edit_profile"),e,R)},addVegetable:function(e){return P.a.post("".concat(D,"/add_vegetables"),e,R)},deleteVegetable:function(e){return P.a.post("".concat(D,"/delete_vegetable"),e,R)},addTree:function(e){return P.a.post("".concat(D,"/add_trees"),e,R)},deleteTree:function(e){return P.a.post("".concat(D,"/delete_tree"),e,R)},getCustomerFarms:function(){return P.a.get("".concat(D,"/user_get_farms"),R)}};var W=function(e){var t=Object(n.useRef)(),a=Object(n.useRef)(),i=Object(n.useRef)(),r=Object(n.useRef)();return Object(g.jsx)("div",{className:L.a.formContainer,children:Object(g.jsxs)("form",{className:L.a.form,onSubmit:function(n){n.preventDefault();var c={name:t.current.value,location:a.current.value,image:i.current.value,description:r.current.value};console.log(c),B.editFarmerProfile(c,{headers:{Accept:"application/json","content-type":"application/json"}}).then((function(t){t.data.status&&(e.submitAction(),e.action())})).catch((function(e){console.log(e.response.data.errors),alert("Invalid data")}))},children:[Object(g.jsx)("div",{className:L.a.formTitle,children:Object(g.jsx)("h4",{children:"EDIT PROFILE"})}),Object(g.jsx)("div",{className:L.a.closeAction,children:Object(g.jsx)(q.a,{onClick:e.action,"aria-label":"close",sx:{position:"absolute",top:"1rem",right:"1rem",padding:"0px"},color:"error",size:"small",children:Object(g.jsx)(E.a,{fontSize:"small",sx:{width:"30px",height:"30px"}})})}),Object(g.jsxs)("div",{className:L.a.control,children:[Object(g.jsx)("label",{htmlFor:"name",children:"Farm Name"}),Object(g.jsx)("input",{type:"text",required:!0,id:"name",placeholder:"Enter farm name",ref:t})]}),Object(g.jsxs)("div",{className:L.a.control,children:[Object(g.jsx)("label",{htmlFor:"location",children:"Farm Location"}),Object(g.jsx)("input",{type:"text",required:!0,id:"location",placeholder:"Enter farm location",ref:a})]}),Object(g.jsxs)("div",{className:L.a.control,children:[Object(g.jsx)("label",{htmlFor:"picture",children:"Farm Picture"}),Object(g.jsx)("input",{type:"text",required:!0,id:"picture",ref:i})]}),Object(g.jsxs)("div",{className:L.a.control,children:[Object(g.jsx)("label",{htmlFor:"description",children:"Description"}),Object(g.jsx)("textarea",{id:"description",required:!0,rows:"5",placeholder:"Enter farm description",ref:r})]}),Object(g.jsx)("div",{className:L.a.actions,children:Object(g.jsx)("button",{type:"submit",children:"EDIT PROFILE"})})]})})},H={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"70%",maxWidth:"800px",bgcolor:"background.paper",borderRadius:"5px",boxShadow:24,p:4};var V=function(e){var t=n.useState(!1),a=Object(y.a)(t,2),i=a[0],r=a[1],c=function(){return r(!1)};return Object(g.jsxs)("div",{children:[Object(g.jsx)(d.a,{"aria-label":"Add",color:"success",size:"large",onClick:function(){return r(!0)},children:"Edit"}),Object(g.jsx)(k.a,{open:i,onClose:c,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(g.jsx)(C.a,{sx:H,children:Object(g.jsx)(W,{action:c,submitAction:e.editAction})})})]})};var $=function(e){return Object(g.jsx)(l.a,{item:!0,xs:12,children:Object(g.jsxs)(w.a,{elevation:7,children:[Object(g.jsx)(A.a,{component:"img",height:"194",image:e.image,alt:e.name}),Object(g.jsx)(_.a,{title:e.name,subheader:e.owner,action:Object(g.jsx)(T.a,{style:{paddingTop:"34px",paddingRight:"15px"},children:e.location})}),Object(g.jsx)(N.a,{children:Object(g.jsx)(T.a,{variant:"body2",color:"text.secondary",children:e.description})}),Object(g.jsx)(F.a,{children:Object(g.jsx)(V,{editAction:e.getFunction})})]})})};var M=function(){var e=Object(n.useState)([]),t=Object(y.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(""),c=Object(y.a)(r,2),o=c[0],s=c[1],l=function(){B.getFarmerProfile().then((function(e){i(e.data[0]),s(e.data.owner_name)})).catch((function(e){console.log(e)}))};return Object(n.useEffect)((function(){l()}),[]),Object(g.jsx)(O,{children:Object(g.jsx)($,{description:a?a.description:"Description",name:a?a.name:"Farm name",image:a?a.image:"Image",location:a?a.location:"Location",owner:o,getFunction:l})})},U=a(291);var G=function(e){return Object(g.jsx)(l.a,{item:!0,xs:12,sm:6,lg:4,children:Object(g.jsxs)(w.a,{elevation:7,children:[Object(g.jsx)(A.a,{component:"img",height:"194",image:e.image,alt:e.name}),Object(g.jsx)(_.a,{title:e.name,subheader:"$"+e.price,action:Object(g.jsx)(U.a,{sx:{bgcolor:"#F2AB50"},"aria-label":"recipe",children:Object(g.jsx)(T.a,{children:e.quantity})})}),Object(g.jsx)(N.a,{children:Object(g.jsx)(T.a,{variant:"body2",color:"text.secondary",children:e.description})}),Object(g.jsx)(F.a,{children:Object(g.jsx)(d.a,{size:"medium",color:"error",fullWidth:!0,variant:"contained",onClick:function(){console.log(e.type),console.log(parseInt(e.id));var t={id:parseInt(e.id)};"1"===e.type?B.deleteVegetable(t,{headers:{Accept:"application/json","content-type":"application/json"}}).then((function(t){t.data.status&&e.deleteAction()})):B.deleteTree(t,{headers:{Accept:"application/json","content-type":"application/json"}}).then((function(t){t.data.status&&e.deleteAction()}))},children:"Delete"})})]})})};var J=function(e){return Object(g.jsx)(l.a,{container:!0,spacing:3,children:e.items.map((function(t){return Object(g.jsx)(G,{id:t.id,image:t.image,description:t.description,price:t.price,quantity:t.quantity,name:t.name,type:e.itemType,deleteAction:e.getFunction},t.id)}))})},K=a(164),Q=a.n(K),X=a(50),Y=a.n(X);var Z=function(e){var t=Object(n.useRef)(),a=Object(n.useRef)(),i=Object(n.useRef)(),r=Object(n.useRef)(),c=Object(n.useRef)(),o=e.itemData.isVegetable;return Object(g.jsx)("div",{className:Y.a.formContainer,children:Object(g.jsxs)("form",{className:Y.a.form,onSubmit:function(n){n.preventDefault();var s={name:t.current.value,quantity:a.current.value,price:i.current.value,description:r.current.value,image:c.current.value};"1"===o?B.addVegetable(s,{headers:{Accept:"application/json","content-type":"application/json"}}).then((function(t){t.data.status&&(e.addAction(),e.closeAction())})).catch((function(e){console.log(e.response.data.errors),alert("Invalid data")})):B.addTree(s,{headers:{Accept:"application/json","content-type":"application/json"}}).then((function(t){t.data.status&&(e.addAction(),e.closeAction())})).catch((function(e){console.log(e.response.data.errors),alert("Invalid data")}))},children:[Object(g.jsx)("div",{className:Y.a.formTitle,children:Object(g.jsx)("h4",{children:e.itemData.title})}),Object(g.jsx)("div",{className:Y.a.closeAction,children:Object(g.jsx)(q.a,{onClick:e.closeAction,"aria-label":"close",sx:{position:"absolute",top:"1rem",right:"1rem",padding:"0px"},color:"error",size:"small",children:Object(g.jsx)(E.a,{fontSize:"small",sx:{width:"30px",height:"30px"}})})}),Object(g.jsxs)("div",{className:Y.a.control,children:[Object(g.jsx)("label",{htmlFor:"name",children:e.itemData.nameLabel}),Object(g.jsx)("input",{placeholder:e.itemData.namePlaceHolder,type:"text",required:!0,id:"name",ref:t})]}),Object(g.jsxs)("div",{className:Y.a.control,children:[Object(g.jsx)("label",{htmlFor:"quantity",children:e.itemData.quantityLabel}),Object(g.jsx)("input",{placeholder:e.itemData.quantityPlaceHolder,type:"quantity",required:!0,id:"quantity",ref:a})]}),Object(g.jsxs)("div",{className:Y.a.control,children:[Object(g.jsx)("label",{htmlFor:"price",children:e.itemData.priceLabel}),Object(g.jsx)("input",{placeholder:e.itemData.pricePlaceHolder,type:"number",required:!0,id:"price",ref:i})]}),Object(g.jsxs)("div",{className:Y.a.control,children:[Object(g.jsx)("label",{htmlFor:"picture",children:e.itemData.pictureLabel}),Object(g.jsx)("input",{type:"text",required:!0,id:"picture",ref:c})]}),Object(g.jsxs)("div",{className:Y.a.control,children:[Object(g.jsx)("label",{htmlFor:"description",children:e.itemData.descriptionLabel}),Object(g.jsx)("textarea",{placeholder:e.itemData.descriptionPlaceHolder,id:"description",required:!0,rows:"5",ref:r})]}),Object(g.jsx)("div",{className:Y.a.actions,children:Object(g.jsx)("button",{type:"submit",children:e.itemData.buttonLabel})})]})})},ee={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"70%",maxWidth:"800px",bgcolor:"background.paper",borderRadius:"5px",boxShadow:24,p:4};var te=function(e){var t=n.useState(!1),a=Object(y.a)(t,2),i=a[0],r=a[1],c=function(){return r(!1)};return Object(g.jsxs)("div",{children:[Object(g.jsx)(q.a,{sx:{color:"#72B750",position:"fixed",bottom:"10%",right:"10%"},"aria-label":"Add",color:"success",size:"large",onClick:function(){return r(!0)},children:Object(g.jsx)(Q.a,{sx:{width:"2.2em",height:"2.2em"},fontSize:"large"})}),Object(g.jsx)(k.a,{open:i,onClose:c,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(g.jsx)(C.a,{sx:ee,children:Object(g.jsx)(Z,{itemData:e.data,closeAction:c,addAction:e.getFunction})})})]})};var ae=function(){var e=Object(s.g)(),t=Object(n.useState)([]),a=Object(y.a)(t,2),i=a[0],r=a[1],c=function(){B.getFarmerTrees().then((function(e){r(e.data)})).catch((function(t){console.log(t),e.push("/")}))};return Object(n.useEffect)((function(){c()}),[e]),Object(g.jsxs)(O,{children:[Object(g.jsx)(J,{items:i,getFunction:c}),Object(g.jsx)(te,{data:{title:"ADD TREES",nameLabel:"Tree Name",namePlaceHolder:"Insert tree name",quantityLabel:"Available Quantity",quantityPlaceHolder:"Insert number of trees",priceLabel:"Price per tree",pricePlaceHolder:"Insert price per tree",pictureLabel:"Tree Picture",descriptionLabel:"Description",descriptionPlaceHolder:"Insert a brief description",buttonLabel:"ADD TREE"},getFunction:c})]})};var ne=function(){var e=Object(s.g)(),t=Object(n.useState)([]),a=Object(y.a)(t,2),i=a[0],r=a[1],c=function(){B.getFarmerVegetables().then((function(e){r(e.data)})).catch((function(t){console.log(t),e.push("/")}))};Object(n.useEffect)((function(){c()}),[e]);var o={title:"ADD VEGETABLES",nameLabel:"Vegetable Name",namePlaceHolder:"Insert vegetable name",quantityLabel:"Box Weight",quantityPlaceHolder:"Insert vegetable weight per box",priceLabel:"Price per Kg",pricePlaceHolder:"Insert price per box",pictureLabel:"Vegetable Picture",descriptionLabel:"Description",descriptionPlaceHolder:"Insert a brief description",buttonLabel:"ADD VEGETABLE",isVegetable:"1"};return Object(g.jsxs)(O,{children:[Object(g.jsx)(J,{items:i,itemType:o.isVegetable,getFunction:c}),Object(g.jsx)(te,{data:o,getFunction:c})]})},ie=(a(217),a(93)),re=a.n(ie);var ce=function(){var e=localStorage.getItem("user_name");return Object(g.jsx)(j.a,{collapseOnSelect:!0,variant:"dark",expand:"lg",className:"nav-bg",children:Object(g.jsxs)(p.a,{children:[Object(g.jsx)(j.a.Brand,{href:"",className:re.a.NavBrand,children:Object(g.jsx)("img",{src:x,alt:"logo",style:{maxHeight:"60px"}})}),Object(g.jsx)(j.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(g.jsxs)(j.a.Collapse,{id:"responsive-navbar-nav",children:[Object(g.jsxs)(u.a,{className:"me-auto",children:[Object(g.jsx)(o.c,{to:"/home",className:re.a.navList,children:"Home"}),Object(g.jsx)(o.c,{to:"/adoptions",className:re.a.navList,children:"Adoptions"}),Object(g.jsx)(o.c,{to:"/orders",className:re.a.navList,children:"Orders"})]}),Object(g.jsx)(m.a,{title:e,id:"basic-nav-dropdown",children:Object(g.jsx)(m.a.Item,{href:"#action/3.1",children:Object(g.jsx)(d.a,{color:"error",fullWidth:!0,size:"small",children:"Logout"})})})]})]})})};var oe=function(e){return Object(g.jsxs)("section",{children:[Object(g.jsx)(ce,{}),Object(g.jsx)(l.a,{container:!0,style:{padding:"0px"},children:Object(g.jsx)(p.a,{children:e.children})})]})},se=a(305);var le=function(e){var t=Object(s.g)();return Object(g.jsx)(l.a,{item:!0,xs:12,sm:6,lg:4,children:Object(g.jsx)(w.a,{elevation:7,children:Object(g.jsxs)(se.a,{onClick:function(){var a=e.id;t.push(Object(s.e)("/farm/:farmId",{farmId:a}))},children:[Object(g.jsx)(A.a,{component:"img",image:e.image,alt:e.name}),Object(g.jsx)(_.a,{title:e.name,subheader:e.owner,action:Object(g.jsx)(T.a,{style:{paddingTop:"34px"},children:"Tannourine"})})]},e.id)})})};var de=function(e){return Object(g.jsx)(l.a,{container:!0,spacing:3,children:e.farms.map((function(e){return Object(g.jsx)(le,{id:e.id,image:e.image,description:e.description,name:e.name,owner:e.first_name+" "+e.last_name},e.id)}))})};var je=function(){var e=Object(n.useState)([]),t=Object(y.a)(e,2),a=t[0],i=t[1],r=Object(s.g)();return Object(n.useEffect)((function(){B.getCustomerFarms().then((function(e){i(e.data)})).catch((function(e){console.log(e),r.push("/")}))}),[r]),Object(g.jsx)(oe,{children:Object(g.jsx)(de,{farms:a})})},pe=a(5),ue=a(15),me=a(118),be=a.n(me),he=a(37),xe=a(294),ge=a(285),fe=a(295);var Oe=function(e){return Object(g.jsx)(l.a,{item:!0,xs:12,sm:6,lg:4,children:Object(g.jsxs)(w.a,{elevation:7,children:[Object(g.jsx)(A.a,{component:"img",height:"194",image:e.image,alt:e.name}),Object(g.jsx)(_.a,{title:e.name,subheader:e.price,action:Object(g.jsx)(U.a,{sx:{bgcolor:"#F2AB50"},"aria-label":"recipe",children:Object(g.jsx)(T.a,{children:e.quantity})})}),Object(g.jsx)(N.a,{children:Object(g.jsx)(T.a,{variant:"body2",color:"text.secondary",children:e.description})}),Object(g.jsx)(F.a,{children:Object(g.jsx)(d.a,{color:"success",variant:"contained",disableRipple:!1,size:"medium",fullWidth:!0,sx:{bgcolor:"#72B750"},children:"Adopt Tree"})})]})})};var ve=function(e){return Object(g.jsx)(l.a,{item:!0,xs:12,sm:6,lg:4,children:Object(g.jsxs)(w.a,{elevation:7,children:[Object(g.jsx)(A.a,{component:"img",height:"194",image:e.image,alt:e.name}),Object(g.jsx)(_.a,{title:e.name,subheader:e.price,action:Object(g.jsx)(U.a,{sx:{bgcolor:"#F2AB50"},"aria-label":"recipe",children:Object(g.jsx)(T.a,{children:e.quantity})})}),Object(g.jsx)(N.a,{children:Object(g.jsx)(T.a,{variant:"body2",color:"text.secondary",children:e.description})}),Object(g.jsx)(F.a,{children:Object(g.jsx)(d.a,{color:"success",variant:"contained",size:"medium",fullWidth:!0,sx:{bgcolor:"#72B750"},children:"Order Box"})})]})})},ye=["children","value","index"];function we(e){var t=e.children,a=e.value,n=e.index,i=Object(ue.a)(e,ye);return Object(g.jsx)("div",Object(pe.a)(Object(pe.a)({role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},i),{},{children:a===n&&Object(g.jsx)(C.a,{sx:{p:3},children:Object(g.jsx)(T.a,{component:"div",children:t})})}))}function _e(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var Ae=function(e){var t=Object(he.a)(),a=n.useState(0),i=Object(y.a)(a,2),r=i[0],c=i[1];return Object(g.jsxs)(C.a,{sx:{bgcolor:"background.black",width:"100%"},children:[Object(g.jsx)(xe.a,{position:"sticky",children:Object(g.jsxs)(ge.a,{value:r,onChange:function(e,t){c(t)},textColor:"inherit",variant:"fullWidth","aria-label":"full width tab",children:[Object(g.jsx)(fe.a,Object(pe.a)({label:"Adopt Trees"},_e(0))),Object(g.jsx)(fe.a,Object(pe.a)({label:"Shop Vegetables"},_e(1)))]})}),Object(g.jsxs)(be.a,{axis:"rtl"===t.direction?"x-reverse":"x",index:r,onChangeIndex:function(e){c(e)},children:[Object(g.jsx)(we,{value:r,index:0,dir:t.direction,children:Object(g.jsx)(l.a,{container:!0,spacing:3,children:[{id:"1",name:"Apple trees",image:"https://www.nature-and-garden.com/wp-content/uploads/sites/4/2018/10/apple-tree.jpg",price:"$25",description:"These Apple trees are raised outdoors and fed organic fertilizers only",quantity:"24"},{id:"2",name:"Cherry trees",image:"https://gardenerspath.com/wp-content/uploads/2019/07/How-to-Grow-and-Care-for-Fruiting-Cherry-Trees-Cover.jpg",price:"$27",description:"National Cherry trees outdoor drown on 1500m elevation with minimum pesticides",quantity:"13"},{id:"3",name:"Peach trees",image:"https://www.garden.eco/wp-content/uploads/2018/06/how-to-grow-a-peach-tree.jpg",price:"$25",description:"Medium sized potatoes, with no additional fertilizers",quantity:"37"},{id:"4",name:"Olive trees",image:"https://www.trees.com/wp-content/uploads/2019/11/olive-tree.jpg",price:"$12",description:"Round reddish onions that are fertilizer fed",quantity:"70"}].map((function(e){return Object(g.jsx)(Oe,{id:e.id,image:e.image,description:e.description,price:e.price,quantity:e.quantity,name:e.name},e.id)}))})}),Object(g.jsx)(we,{value:r,index:1,dir:t.direction,children:Object(g.jsx)(l.a,{container:!0,spacing:3,children:[{id:"1",name:"Cucumbers",image:"https://cdn.plantssparkjoy.com/wp-content/uploads/2021/09/02071046/growing-cucumbers-with-plants-spark-joy.jpeg",price:"$12",description:"These Cucumbers are raised outdoors and fed organic fertilizers only",quantity:"5kg"},{id:"2",name:"Tomatoes",image:"https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",price:"$15",description:"National tomatoes outdoor drown on 1500m elevation with minimum pesticides",quantity:"4kg"},{id:"3",name:"Potatoes",image:"https://www.vanmeuwen.com/static-images/master/static-images/how-to-grow-potatoes/how-to-plant-grow-potatoes.jpg",price:"$10",description:"Medium sized potatoes, with no additional fertilizers",quantity:"10kg"},{id:"4",name:"Onions",image:"https://jainsusa.com/wp-content/uploads/2015/02/5tips_to_grow_great_onions.jpg",price:"$12",description:"Round reddish onions that are fertilizer fed",quantity:"7kg"}].map((function(e){return Object(g.jsx)(ve,{id:e.id,image:e.image,description:e.description,price:e.price,quantity:e.quantity,name:e.name},e.id)}))})})]})]})},Ne=a(165),Fe=a.n(Ne);var Te=function(e){return console.log(e.data),Object(g.jsx)(l.a,{item:!0,xs:12,children:Object(g.jsxs)(w.a,{className:Fe.a.profileCard,children:[Object(g.jsx)(A.a,{component:"img",height:"194",image:e.data.image,alt:e.data.name}),Object(g.jsx)(_.a,{title:Object(g.jsx)(T.a,{variant:"h3",children:e.data.name}),subheader:e.data.owner,action:Object(g.jsx)(T.a,{style:{paddingTop:"25px"},children:"Tannourine"})}),Object(g.jsx)(N.a,{children:Object(g.jsx)(T.a,{variant:"body2",color:"text.secondary",children:e.data.description})})]})})};var Ce=function(){for(var e=Object(s.h)().farmId,t=[],a=0,n=[{id:"1",name:"Mike's Farm",image:"https://www.economist.com/img/b/1280/720/90/sites/default/files/images/print-edition/20200530_MAP004_0.jpg",description:"Mike's Farm is a Vegetables and trees farm that is located at the highlands of North Lebanon. At an altitude of 1800m, with no pollution sources of any kind, Mike's Farm drinks the most clean waters and we emphasise on that by growing our goods organically",owner:"Mike Ayoub"},{id:"2",name:"Ray's",image:"https://www.borgenmagazine.com/wp-content/uploads/2014/07/benin.jpg",description:"Raymond's farm is a mix between organic products and others that are fed industrial fertilizers according to the minimum standards",owner:"Raymond Ayoub"},{id:"3",name:"Dani Farms",image:"https://www.annahar.com/ContentFilesArchive/469869Image1-1180x677_d.jpg?version=3857312",description:"In the valley of Tannourine, or fields drink the waters of the Whalenuts river and grow organically outdoor",owner:"Dani Ayoub"},{id:"4",name:"Jnaynet Tansa",image:"https://agrytech.org/wp-content/uploads/2019/08/Hackathon-Challenges-2019-1080x628.jpg",description:"A traditional farm ran by 70 years old Tansa who carries on the culture and habbits of our elders, guarenteeing the mosst authentic products",owner:"Tansa Nakwar"}];a<n.length;a++){var i=n[a];i.id===e&&(t=i)}return Object(g.jsxs)(oe,{children:[Object(g.jsx)(Te,{data:t}),Object(g.jsx)(Ae,{})]})},ke=a(299),qe=a(283),Ie=a.p+"static/media/loginLogo.bba5023c.png";var Le=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(s.g)();return Object(g.jsxs)(ke.a,{elevation:10,style:{padding:20,height:"70vh",maxWidth:380},children:[Object(g.jsxs)(l.a,{align:"center",children:[Object(g.jsx)("img",{src:Ie,alt:"logo",style:{maxHeight:"100px",marginTop:"-25px"}}),Object(g.jsx)("h3",{style:{color:"#516C66"},children:"Efarm"}),Object(g.jsx)("h2",{style:{marginTop:10,color:"#72B750"},children:"Sign in"})]}),Object(g.jsxs)("form",{onSubmit:function(n){n.preventDefault();var i=e.current.value,r=t.current.value,c={email:i,password:r};B.checkLogin(c,{headers:{Accept:"application/json","content-type":"application/json"}}).then((function(e){var t=e.data.user.first_name+" "+e.data.user.last_name;1===e.data.user.user_type_id?(localStorage.setItem("user_name",t),localStorage.setItem("access_token",e.data.access_token),localStorage.setItem("user_type",e.data.user.user_type_id),a.push("/profile")):(localStorage.setItem("user_name",t),localStorage.setItem("access_token",e.data.access_token),localStorage.setItem("user_type",e.data.user.user_type_id),a.push("/home"))})).catch((function(e){console.log(e),""===i||""===r?alert("Please Enter your information"):alert("incorrect email or password")}))},children:[Object(g.jsx)(qe.a,{sx:{paddingBottom:"10px"},label:"Email",type:"email",placeholder:"Enter email address",inputRef:e,variant:"standard",color:"success",size:"small",fullWidth:!0,required:!0}),Object(g.jsx)(qe.a,{sx:{paddingBottom:"15px"},label:"Password",type:"password",placeholder:"Enter password",inputRef:t,variant:"standard",color:"success",size:"small",fullWidth:!0,required:!0}),Object(g.jsx)(d.a,{color:"success",sx:{backgroundColor:"#72b750",margin:"10px 0px"},variant:"contained",type:"submit",fullWidth:!0,children:"Sign in"})]})]})},Se=a(287),Ee=a(292),ze=a(307),Pe=a(306),De=a(280);var Re=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),i=Object(n.useRef)(),r=n.useState("0"),c=Object(y.a)(r,2),o=c[0],s=c[1];return Object(g.jsxs)(ke.a,{elevation:20,style:{padding:20,maxWidth:380},children:[Object(g.jsxs)(l.a,{align:"center",children:[Object(g.jsx)("img",{src:Ie,alt:"logo",style:{maxHeight:"100px",marginTop:"-25px"}}),Object(g.jsx)("h3",{style:{color:"#516C66"},children:"Efarm"}),Object(g.jsx)("h2",{style:{marginTop:10,color:"#72B750"},children:"Sign Up"})]}),Object(g.jsxs)("form",{onSubmit:function(n){n.preventDefault();var r=e.current.value,c=t.current.value,s=a.current.value,l=i.current.value,d={first_name:r,last_name:c,user_type_id:o,email:s,password:l};B.checkSignup(d,{headers:{Accept:"application/json","content-type":"application/json"}}).then((function(e){e.data.status&&alert("Account is successfully created")})).catch((function(e){console.log(e),""===s||""===l?alert("Please Enter your information"):alert("Email exists already")}))},children:[Object(g.jsx)(qe.a,{sx:{paddingBottom:"10px"},label:"First Name",type:"text",placeholder:"Enter your first name",inputRef:e,variant:"standard",color:"success",size:"small",fullWidth:!0,required:!0}),Object(g.jsx)(qe.a,{sx:{paddingBottom:"10px"},label:"Last Name",type:"text",placeholder:"Enter your last name",inputRef:t,variant:"standard",color:"success",size:"small",fullWidth:!0,required:!0}),Object(g.jsxs)(Pe.a,{component:"fieldset",children:[Object(g.jsx)(De.a,{color:"success",component:"legend",style:{margin:"0px"},children:"Register as:"}),Object(g.jsxs)(Ee.a,{style:{display:"initial"},"aria-label":"user type",defaultValue:"Customer",name:"user-type",value:o,onChange:function(e){s(e.target.value)},children:[Object(g.jsx)(ze.a,{value:"0",control:Object(g.jsx)(Se.a,{color:"success",size:"small"}),label:"Customer"}),Object(g.jsx)(ze.a,{value:"1",control:Object(g.jsx)(Se.a,{color:"success",size:"small"}),label:"Farmer"})]})]}),Object(g.jsx)(qe.a,{sx:{paddingBottom:"10px"},label:"Email",type:"email",placeholder:"Enter your email",inputRef:a,variant:"standard",color:"success",size:"small",fullWidth:!0,required:!0}),Object(g.jsx)(qe.a,{sx:{paddingBottom:"10px"},label:"Password",type:"password",placeholder:"Create a password",inputRef:i,variant:"standard",color:"success",size:"small",fullWidth:!0,required:!0}),Object(g.jsx)(d.a,{color:"success",sx:{backgroundColor:"#72b750",margin:"10px 0px"},variant:"contained",type:"submit",fullWidth:!0,children:"Sign Up"})]})]})},Be=["children","value","index"];function We(e){var t=e.children,a=e.value,n=e.index,i=Object(ue.a)(e,Be);return Object(g.jsx)("div",Object(pe.a)(Object(pe.a)({role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},i),{},{children:a===n&&Object(g.jsx)(C.a,{children:t})}))}function He(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var Ve=function(){var e=Object(he.a)(),t=i.a.useState(0),a=Object(y.a)(t,2),n=a[0],r=a[1];return Object(g.jsx)(ke.a,{style:{maxWidth:380,margin:"6vh auto"},elevation:7,children:Object(g.jsxs)(C.a,{sx:{bgcolor:"background.paper",maxWidth:380},children:[Object(g.jsx)(xe.a,{position:"static",children:Object(g.jsxs)(ge.a,{value:n,onChange:function(e,t){r(t)},indicatorColor:"secondary",textColor:"inherit",variant:"fullWidth","aria-label":"full width tabs example",children:[Object(g.jsx)(fe.a,Object(pe.a)({label:"Sign In"},He(0))),Object(g.jsx)(fe.a,Object(pe.a)({label:"Sign Up"},He(1)))]})}),Object(g.jsxs)(be.a,{axis:"rtl"===e.direction?"x-reverse":"x",index:n,onChangeIndex:function(e){r(e)},children:[Object(g.jsx)(We,{value:n,index:0,dir:e.direction,children:Object(g.jsx)(Le,{})}),Object(g.jsx)(We,{value:n,index:1,dir:e.direction,children:Object(g.jsx)(Re,{})})]})]})})};var $e=function(e){return Object(g.jsxs)(l.a,{container:!0,sx:{marginTop:"-25px"},children:[e.items.map((function(e){return Object(g.jsx)(l.a,{item:!0,xs:12,children:Object(g.jsxs)(w.a,{sx:{display:"flex"},elevation:7,children:[Object(g.jsx)(A.a,{component:"img",sx:{width:"35%"},image:e.image,alt:"Live from space album cover"}),Object(g.jsxs)(C.a,{sx:{width:"65%",display:"flex",flexDirection:"column"},children:[Object(g.jsx)(_.a,{sx:{backgroundColor:"#ffffff"},title:e.name,subheader:e.price,action:Object(g.jsx)(U.a,{sx:{bgcolor:"#F2AB50",marginTop:"70%"},"aria-label":"recipe",children:Object(g.jsx)(T.a,{children:e.quantity})})}),Object(g.jsxs)(N.a,{sx:{flex:"1 0 auto",backgroundColor:"#ffffff"},children:[Object(g.jsx)(T.a,{component:"div",style:{color:"#516c66"},variant:"h6",children:e.farm}),Object(g.jsx)(T.a,{variant:"body1",color:"text.secondary",component:"div",children:e.description})]})]})]})},e.id)})),";"]})};var Me=function(){return Object(g.jsx)(oe,{children:Object(g.jsx)($e,{items:[{id:"1",name:"Cucumbers",image:"https://cdn.plantssparkjoy.com/wp-content/uploads/2021/09/02071046/growing-cucumbers-with-plants-spark-joy.jpeg",price:"$12",description:"These Cucumbers are raised outdoors and fed organic fertilizers only",quantity:"5",farm:"Mike's farm"},{id:"2",name:"Tomatoes",image:"https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",price:"$15",description:"National tomatoes outdoor drown on 1500m elevation with minimum pesticides",quantity:"1",farm:"Jnaynet Tansa"},{id:"3",name:"Potatoes",image:"https://www.vanmeuwen.com/static-images/master/static-images/how-to-grow-potatoes/how-to-plant-grow-potatoes.jpg",price:"$10",description:"Medium sized potatoes, with no additional fertilizers",quantity:"3",farm:"Ray's"},{id:"4",name:"Onions",image:"https://jainsusa.com/wp-content/uploads/2015/02/5tips_to_grow_great_onions.jpg",price:"$12",description:"Round reddish onions that are fertilizer fed",quantity:"2",farm:"Dany's farm"}]})})};var Ue=function(){return Object(g.jsx)(oe,{children:Object(g.jsx)($e,{items:[{id:"1",name:"Apple trees",image:"https://www.nature-and-garden.com/wp-content/uploads/sites/4/2018/10/apple-tree.jpg",price:"$25",description:"These Apple trees are raised outdoors and fed organic fertilizers only",quantity:"2",farm:"Dani's farm"},{id:"2",name:"Cherry trees",image:"https://gardenerspath.com/wp-content/uploads/2019/07/How-to-Grow-and-Care-for-Fruiting-Cherry-Trees-Cover.jpg",price:"$27",description:"National Cherry trees outdoor drown on 1500m elevation with minimum pesticides",quantity:"1",farm:"Ray's"},{id:"3",name:"Peach trees",image:"https://www.garden.eco/wp-content/uploads/2018/06/how-to-grow-a-peach-tree.jpg",price:"$25",description:"Medium sized potatoes, with no additional fertilizers",quantity:"3",farm:"Mike's farm"},{id:"4",name:"Olive trees",image:"https://www.trees.com/wp-content/uploads/2019/11/olive-tree.jpg",price:"$12",description:"Round reddish onions that are fertilizer fed",quantity:"7",farm:"Jnaynet Tansa"}]})})},Ge=["component"];var Je=function(e){var t=e.component,a=Object(ue.a)(e,Ge),n=localStorage.getItem("user_type");return Object(g.jsx)(s.b,Object(pe.a)(Object(pe.a)({},a),{},{render:function(e){return"1"===n?Object(g.jsx)(t,Object(pe.a)({},e)):Object(g.jsx)(s.a,{to:"/"})}}))},Ke=["component"];var Qe=function(e){var t=e.component,a=Object(ue.a)(e,Ke),n=localStorage.getItem("user_type");return Object(g.jsx)(s.b,Object(pe.a)(Object(pe.a)({},a),{},{render:function(e){return"0"===n?Object(g.jsx)(t,Object(pe.a)({},e)):Object(g.jsx)(s.a,{to:"/"})}}))};var Xe=function(){return Object(g.jsxs)(o.b,{children:[Object(g.jsx)(s.b,{path:"/",exact:!0,component:Ve}),Object(g.jsx)(Je,{path:"/profile",component:M}),Object(g.jsx)(Je,{path:"/dashboard",component:v}),Object(g.jsx)(Je,{path:"/vegetables",component:ne}),Object(g.jsx)(Je,{path:"/trees",component:ae}),Object(g.jsx)(Qe,{path:"/home",component:je}),Object(g.jsx)(Qe,{path:"/farm/:farmId",component:Ce}),Object(g.jsx)(Qe,{path:"/orders",component:Me}),Object(g.jsx)(Qe,{path:"/adoptions",component:Ue})]})};c.a.render(Object(g.jsx)(o.a,{basename:"/efarm",children:Object(g.jsx)(Xe,{})}),document.getElementById("root"))},50:function(e,t,a){e.exports={actions:"AddItemForm_actions__27gYe",control:"AddItemForm_control__1PH2q",form:"AddItemForm_form__2paK7",formTitle:"AddItemForm_formTitle__1anUS",formContainer:"AddItemForm_formContainer__xDTdA"}},56:function(e,t,a){e.exports={actions:"EditProfileForm_actions__FRjVb",control:"EditProfileForm_control__2e7fW",form:"EditProfileForm_form__13Giy",formTitle:"EditProfileForm_formTitle__3EPoB",formContainer:"EditProfileForm_formContainer__n7f2g"}},92:function(e,t,a){e.exports={logoutLink:"AdminNavigation_logoutLink__En7Fw",navList:"AdminNavigation_navList__1ryNN",active:"AdminNavigation_active__2TV8j",NavBrand:"AdminNavigation_NavBrand___PmO8",profileLink:"AdminNavigation_profileLink__2fQrw"}},93:function(e,t,a){e.exports={navList:"UserNavigation_navList__3pzkG",active:"UserNavigation_active__2zZ_o",NavBrand:"UserNavigation_NavBrand__1WNjX"}}},[[237,1,2]]]);
//# sourceMappingURL=main.9cdc4bcc.chunk.js.map