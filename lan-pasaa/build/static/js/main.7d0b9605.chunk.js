(this["webpackJsonpla-pasaa"]=this["webpackJsonpla-pasaa"]||[]).push([[0],Array(20).concat([function(e,t,a){e.exports=a.p+"static/media/fabrics.b01ff9ba.jpg"},,,,,,,,,,,,,,function(e,t,a){var n={"./Pants-01.jpg":72,"./Pants-02.jpg":73,"./Pants-03.jpg":74,"./Pants-04.jpg":75,"./Pants-05.jpg":76,"./belt-01.jpg":77,"./belt-02.jpg":78,"./fabrics-2.jpg":79,"./fabrics.jpg":20,"./jacket-01.jpg":80,"./jacket-02.jpg":81,"./shirt-01.jpg":82,"./shirt-02.jpg":83,"./shirt-03.jpg":84,"./shirt-04.jpg":85,"./shirt-05.jpg":86,"./shirt-06.jpg":87,"./shirt-07.jpg":88,"./shirt-08.jpg":89,"./shoes-01.jpg":90,"./shoes-02.jpg":91,"./shoes-03.jpg":92,"./shorts-01.jpg":93,"./shorts-02.jpg":94,"./shorts-03.jpg":95,"./shorts-04.jpg":96,"./shorts-05.jpg":97,"./shorts-06.jpg":98};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=34},,,,,function(e,t,a){e.exports=a.p+"static/media/drw-facebook.a6ecc58b.png"},function(e,t,a){e.exports=a.p+"static/media/drw-twitter.b615b554.png"},function(e,t,a){e.exports=a.p+"static/media/drw-youtube.9f59cf1f.png"},function(e,t,a){e.exports=a.p+"static/media/drw-linkedIn.26f72523.png"},function(e,t,a){e.exports=a(99)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/Pants-01.f007aaf0.jpg"},function(e,t,a){e.exports=a.p+"static/media/Pants-02.6235d72d.jpg"},function(e,t,a){e.exports=a.p+"static/media/Pants-03.df1dcd41.jpg"},function(e,t,a){e.exports=a.p+"static/media/Pants-04.37a9de11.jpg"},function(e,t,a){e.exports=a.p+"static/media/Pants-05.03310589.jpg"},function(e,t,a){e.exports=a.p+"static/media/belt-01.efb60db3.jpg"},function(e,t,a){e.exports=a.p+"static/media/belt-02.1cccca3d.jpg"},function(e,t,a){e.exports=a.p+"static/media/fabrics-2.00222232.jpg"},function(e,t,a){e.exports=a.p+"static/media/jacket-01.516b7a38.jpg"},function(e,t,a){e.exports=a.p+"static/media/jacket-02.ce7ea70a.jpg"},function(e,t,a){e.exports=a.p+"static/media/shirt-01.b70172d4.jpg"},function(e,t,a){e.exports=a.p+"static/media/shirt-02.3b80bf65.jpg"},function(e,t,a){e.exports=a.p+"static/media/shirt-03.7b9d3f8a.jpg"},function(e,t,a){e.exports=a.p+"static/media/shirt-04.083b9558.jpg"},function(e,t,a){e.exports=a.p+"static/media/shirt-05.2b7f0f5d.jpg"},function(e,t,a){e.exports=a.p+"static/media/shirt-06.1c3136c0.jpg"},function(e,t,a){e.exports=a.p+"static/media/shirt-07.9308f016.jpg"},function(e,t,a){e.exports=a.p+"static/media/shirt-08.2774ab2d.jpg"},function(e,t,a){e.exports=a.p+"static/media/shoes-01.8d71f9fd.jpg"},function(e,t,a){e.exports=a.p+"static/media/shoes-02.a72b3a40.jpg"},function(e,t,a){e.exports=a.p+"static/media/shoes-03.e5bf7cc5.jpg"},function(e,t,a){e.exports=a.p+"static/media/shorts-01.1a1c56ca.jpg"},function(e,t,a){e.exports=a.p+"static/media/shorts-02.5298c500.jpg"},function(e,t,a){e.exports=a.p+"static/media/shorts-03.c0f8f340.jpg"},function(e,t,a){e.exports=a.p+"static/media/shorts-04.bbc059ca.jpg"},function(e,t,a){e.exports=a.p+"static/media/shorts-05.59da1aea.jpg"},function(e,t,a){e.exports=a.p+"static/media/shorts-06.1ecf0141.jpg"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),i=a.n(c),l=(a(48),a(49),a(5)),o=a(1),m=a(12),u=a(36),s=a(37),d=a(8),p="FETCH_LAN_PASAA_DATA_START",E="FETCH_LAN_PASAA_DATA_RECEIVED",f="FETCH_LAN_PASAA_DATA_ERROR",b="FETCH_LAN_PASAA_CATEGORIES_START",g="FETCH_LAN_PASAA_CATEGORIES_RECEIVED",v="FETCH_LAN_PASAA_CATEGORIES_ERROR",h="FETCH_LAN_PASAA_PRODUCTS_START",j="FETCH_LAN_PASAA_PRODUCTS_RECEIVED",N="FETCH_LAN_PASAA_PRODUCTS_ERROR",A="CATEGORY_NAV",y="ITEM_DETAILS",C="ITEM_DETAILS_CLEAR",x="ADD_TO_CART",O="ADD_QTY",P="MINUS_QTY",q="DELETE_FROM_CART",I="CLEAR_CART",T="VIEW_CART",_="ADD_ANIMATION_TO_TITLE",F={fetching:!1,fetched:!1,error:null,data:[]},S={products:[],prdFetching:!1,prdFetched:!1,error:null},k={category:"",itemId:0,itemName:"",itemPrice:0,itemImage:"",titleAnimation:!1},R=a(24),w={cart:[],totalPrice:0,cartProductId:[],viewCart:!1,set:[]},L=Object(m.c)({reducerFetchProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return e={prdFetched:!1,prdFetching:!0};case j:return e={products:t.payload,prdFetched:!0,prdFetching:!1};case N:return e={products:t.payload,prdFetching:!1,prdFetched:!1,error:t.error};default:return e}},reducerFetchData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(d.a)({},e,{fetching:!0,fetched:!1});case E:return console.log("REDUCER: DATA RECEIVED"),Object(d.a)({},e,{data:t.payload,fetched:!0,fetching:!1,error:null});case f:return Object(d.a)({},e,{data:t.payload,fetched:!1,fetching:!1,error:t.payload});default:return e}},reducerNavigation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return{category:t.payload,itemId:0};case y:return{category:e.category,itemId:t.itemId,itemName:t.itemName,itemPrice:t.itemPrice,itemImage:t.itemImage};case C:return{category:e.category,itemId:0,itemName:"",itemPrice:0,itemImage:""};case _:return{category:e.category,itemId:e.itemId,itemName:e.itemName,itemPrice:e.itemPrice,titleAnimation:!0};default:return e}},reducerCart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return e=Object(d.a)({},e,{cart:[].concat(Object(R.a)(e.cart),[t.payload]),cartProductId:[].concat(Object(R.a)(e.cartProductId),[t.payload.id]),totalPrice:e.totalPrice+t.payload.price});case O:return e=Object(d.a)({},e,{state:[e.cart[t.cartIndex].qty+=1,e.cart[t.cartIndex].amount+=t.price],totalPrice:e.totalPrice+t.price});case P:return e=Object(d.a)({},e,{state:1===e.cart[t.cartIndex].qty?e.cart.splice(t.cartIndex,1):[e.cart[t.cartIndex].qty-=1,e.cart[t.cartIndex].amount-=t.price],totalPrice:e.totalPrice-t.price});case q:return e=Object(d.a)({},e,{state:e.cart.splice(t.cartIndex,1),totalPrice:Math.round(e.totalPrice)-Math.round(t.amount)});case I:return e=Object(d.a)({},e,{cart:[],totalPrice:0});case T:return e=Object(d.a)({},e,{viewCart:!e.viewCart});default:return e}}}),D=Object(m.a)(s.a,Object(u.createLogger)()),M=Object(m.d)(L,D),H=a(17),U=[{id:1,name:"Home",path:"/"},{id:2,name:"Shop",path:"lanpasaa-shop"},{id:3,name:"About",path:"lanpasaa-about"},{id:4,name:"Contact",path:"lanpasaa-contact"}],V=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"navmainlanpasaa"},r.a.createElement("ul",null,U.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(l.b,{to:e.path,className:"group-name"},e.name))})))))},Q=function(e){return r.a.createElement("div",{className:"lanpasaatitle"},r.a.createElement("h1",{className:e.animation},"Lan Pasaa"))};function G(){var e=Object(o.c)((function(e){return e.reducerNavigation.titleAnimation})),t=Object(n.useState)("false"),a=Object(H.a)(t,2),c=a[0],i=a[1];return Object(n.useEffect)((function(){i(!0===e?"dropdown-animation":"text-animation")}),[e]),r.a.createElement("div",{className:"lanpasaa"},r.a.createElement("div",{className:"landing-page"},r.a.createElement(Q,{animation:c}),r.a.createElement(V,null)))}var Y=a(20),J=a.n(Y),W=function(){return r.a.createElement("div",{className:"lanpasaa-aboutus"},r.a.createElement("div",null,r.a.createElement("h1",null,"About us")),r.a.createElement("div",null,r.a.createElement("p",null,"Ipsum dolor sit amet consectetur adipisicing elit. Recusandae asperiores error cupiditate neque animi ipsam beatae laboriosam vitae repudiandae ut doloribus enim eveniet sapiente, nulla fugit eos aspernatur quisquam deleniti!"),r.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facilis quaerat quidem earum nemo consectetur numquam voluptates doloremque est in explicabo laboriosam  impedit quos iusto, omnis tempora ducimus. quaerat quidem earum nemo consectetur numquam voluptates doloremque  explicabo laboriosam rem impedit quos iusto, omnis tempora ducimus!quaerat quidem earum nemo constetur numquam voluptates doloremque est in explicabo laboriosam rem impedit quos iusto, omnis tempora ducimus at quidem earum nemo consectetur numquam voluptates doloremque  explicabo rem impedit quos iusto, omnis tempora ducimus!quaerat quidem earum nemo consectetur numquam voluptates e est in expcabo labriosam rem impedit quos iusto, omnis tempora ducimus!quaerat quidem earum nemo consectetur numquam voluptates doloremque est in explicabo laboriosam rem impedit quos iusto, omnis tempora ducimus!"),r.a.createElement("p",null,"omnis tempora ducimus quaerat quidem earum nemo cnsectetur numquam voluptates doloremque est in explicabo labiosam rem impedit quos iusto, omnis tempora ducim! quaerat quidem earum nemo consectetur numquam voluptates doloremque est in explicabo laboriosam rem imp quos iusto, omnis tempa quaerat quidem earum nemo consectetur numquam voluptates doloremque est in explicabo Uoriosam rem impedit quos iusto, omnis tempora ducimus!")),r.a.createElement("div",null,r.a.createElement("img",{src:J.a,alt:"aboutus"})))},B=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"subscription-lanpasaa"},r.a.createElement("div",{className:"header"},"About us"),r.a.createElement("div",null,r.a.createElement("h1",null,"subscribe",r.a.createElement("br",null)," to our newsletter")),r.a.createElement("form",null,r.a.createElement("input",{type:"text",name:"subscription",placeholder:"Your email"}),r.a.createElement("button",{className:"btn"},"Subscribe")),r.a.createElement("div",null,r.a.createElement("p",null,"Tolor sit amet consectetur adipisicing elit. Ea dolore maiores in voluptate tenetur amet consequuntur modi aliquid. Possimus, at. Asperiores"))))},K=function(){return r.a.createElement("div",{className:"lanpasaa"},r.a.createElement(Q,null),r.a.createElement(V,null),r.a.createElement(W,null),r.a.createElement(B,null))},X=function(){return r.a.createElement("div",{className:"contactform-lanpasaa"},r.a.createElement("h2",null,"Contact: "),r.a.createElement("form",{action:""},r.a.createElement("div",{className:"firstname"},r.a.createElement("label",{htmlFor:"name"},"First Name"),r.a.createElement("input",{type:"text",name:"firstname",id:""})),r.a.createElement("div",{className:"lastname"},r.a.createElement("label",{htmlFor:"lastname"},"Last Name"),r.a.createElement("input",{type:"text",name:"lastname",id:""})),r.a.createElement("div",{className:"phone"},r.a.createElement("label",{htmlFor:"phone"},"Phone"),r.a.createElement("input",{type:"text",name:"phone",id:""})),r.a.createElement("div",{className:"email"},r.a.createElement("label",{htmlFor:"Email"},"Email"),r.a.createElement("input",{type:"email",name:"email",id:""})),r.a.createElement("div",{className:"text"},r.a.createElement("label",{htmlFor:"message"},"Message"),r.a.createElement("textarea",{name:"text",id:"",cols:"30",rows:"10"})),r.a.createElement("div",{className:"button"},r.a.createElement("button",{type:"submit",className:"btn"},"Submit"))))},$=function(){return r.a.createElement("div",{className:"contact-lanpasaa"},r.a.createElement("div",null,r.a.createElement("h3",null,"Location"),r.a.createElement("p",null,"24 High Street"),r.a.createElement("p",null,"200 Red House"),r.a.createElement("p",null,"London, UK")),r.a.createElement("div",null,r.a.createElement("h3",null,"Opening Hours"),r.a.createElement("p",null,"Monday - Friday"),r.a.createElement("p",null,"09:00 AM - 05:00 PM"),r.a.createElement("p",null,"Saturday - Sunday"),r.a.createElement("p",null,"09:00 AM - 11:00 AM")),r.a.createElement("div",null,r.a.createElement("h3",null,"Quick Contact"),r.a.createElement("h2",null,"+44(0)0000-000-000"),r.a.createElement("p",null,"callmeback@example.com")))},z=a(39),Z=a.n(z),ee=a(40),te=a.n(ee),ae=a(41),ne=a.n(ae),re=a(42),ce=a.n(re),ie=function(){return r.a.createElement("div",{className:"socialmedia-lanpasaa"},r.a.createElement("div",{className:"title"},r.a.createElement("p",null,"follow us")),r.a.createElement("div",{className:"socialmedia"},r.a.createElement("span",{className:"facebook"},r.a.createElement(l.b,{to:"#"},r.a.createElement("img",{src:Z.a,alt:"facebook"}))),r.a.createElement("span",{className:"twitter"},r.a.createElement(l.b,{to:"#"},r.a.createElement("img",{src:te.a,alt:"twitter"}))),r.a.createElement("span",{className:"youtube"},r.a.createElement(l.b,{to:"#"},r.a.createElement("img",{src:ne.a,alt:"youtube"}))),r.a.createElement("span",{className:"linkedIn"},r.a.createElement(l.b,{to:"#"},r.a.createElement("img",{src:ce.a,alt:"linkedin"})))))},le=function(){return r.a.createElement("div",{className:"lanpasaa"},r.a.createElement(Q,null),r.a.createElement(V,null),r.a.createElement("div",{className:"contact-page"},r.a.createElement("div",{className:"page-title"},r.a.createElement("h1",null,"Contact")),r.a.createElement("div",{className:"page-text"},r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et impedit porro omnis culpa, quam reprehenderit commodi nemo aut obcaecati maiores pariatur amet vero voluptates, quos nesciunt excepturi cupiditate itaque quia Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugit expedita error culpa atque id, laborum, optio neque unde, voluptatem cumque! Deleniti commodi unde temporibus."),r.a.createElement("p",null,"quidem laudantium obcaecati accusamus libero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, repellat praesentium adipisci numquam, architecto atque dolor debitis totam fugit animi laboriosam? Id quasi totam illo? Ad, sit expedita! Quibusdam, ullam.")),r.a.createElement("div",{className:"page-form"},r.a.createElement(X,null)),r.a.createElement("div",{className:"contact-detail"},r.a.createElement($,null)),r.a.createElement("div",{className:"page-sl-media"},r.a.createElement(ie,null))))},oe=[{id:1,name:"All",path:"lanpasaa-all"},{id:2,name:"Women",path:"lanpasaa-women"},{id:3,name:"Men",path:"lanpasaa-men"},{id:4,name:"Sale",path:"lanpasaa-sale"}],me=function(){var e=Object(o.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"navshoplanpasaa"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/",onClick:function(){return e({type:_})},className:"group-name"},"Home")),oe.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(l.b,{to:"#",className:"group-name"},e.name))})))))},ue=a(16),se=a.n(ue);var de=function(e){console.log("SHOP-CATEGORY JS");var t=Object(n.useState)("up"),a=Object(H.a)(t,2),c=a[0],i=a[1],l=Object(o.b)();Object(n.useEffect)((function(){l((function(e){e({type:b}),se.a.get("https://my-json-server.typicode.com/rajjubajra/json-server/LanPasaa").then((function(t){console.log("ACTION CATEGORY:",t.data[0].products),e({type:g,catgFetched:!0,catgFetching:!1,categories:t.data})})).catch((function(t){e({type:v,error:t,catgFetched:!1,catgFetching:!1})}))}))}),[l]);var m=function(){return i("up"===c?"down":"up")};return r.a.createElement("div",{className:"category"},r.a.createElement("h3",null,"Category ",r.a.createElement("i",{onClick:function(){return m()},className:"shop-updown-arrow ".concat(c)})),r.a.createElement("ul",{className:c,onClick:function(){return m()}},e.prod.map((function(e,t){return r.a.createElement("li",{key:t,onClick:function(){return l((t=e.name,{type:A,payload:t}));var t}},e.name)}))))},pe=function(e,t,a,n,r){return{type:x,payload:{id:e,name:t,price:a,qty:n,amount:r}}},Ee=function(e,t,a){return{type:O,cartIndex:e,price:a}},fe=function(e){var t=e.item,n=Object(o.b)(),c=Object(o.c)((function(e){return e.reducerCart.cart})).findIndex((function(e){return e.id===t.id}));return r.a.createElement("div",{key:t.id,className:"product-item"},r.a.createElement("div",{className:"product-image"},r.a.createElement("img",{src:a(34)("./".concat(t.img)),alt:t.name})),r.a.createElement("div",{className:"product-name"},r.a.createElement("div",{className:"name"},t.name),r.a.createElement("div",{className:"rate"},"\xa3 ",Number(t.price).toFixed(2))),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:function(){return n((e=t.id,a=t.name,r=t.price,c=t.img,{type:y,itemId:e,itemName:a,itemPrice:r,itemImage:c}));var e,a,r,c}},"View"),-1===c?r.a.createElement("button",{onClick:function(){return n(pe(t.id,t.name,t.price,1,t.price))}},"Add to cart"):r.a.createElement("button",{onClick:function(){return n(Ee(c,t.name,t.price,t.price))}}," Add Quantity ")))},be=function(e){var t=Object(o.c)((function(e){return e.reducerNavigation.category}));return r.a.createElement(r.a.Fragment,null,e.prod.map((function(e){return e.products.map((function(a){return function(e,t,a){return""===e||e===a.name?r.a.createElement(fe,{item:t}):void 0}(t,a,e)}))})))},ge=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.reducerNavigation.itemId})),n=Object(o.c)((function(e){return e.reducerNavigation.itemName})),c=Object(o.c)((function(e){return e.reducerNavigation.itemPrice})),i=Object(o.c)((function(e){return e.reducerNavigation.itemImage}));console.log(t,i);var l=Object(o.c)((function(e){return e.reducerCart.cart})).findIndex((function(e){return e.id===t}));return r.a.createElement("div",{className:"product-item"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{className:"sale-item",src:a(34)("./".concat(i)),alt:n})),r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"product-code"},"Product Code: ",t),r.a.createElement("div",{className:"product-name"},"Product: ",n),r.a.createElement("div",{className:"rate"},"Price: \xa3 ",Number(c).toFixed(2)),r.a.createElement("div",{className:"description"},r.a.createElement("p",null,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro doloribus, natus iste a nulla suscipit totam eos iure, deserunt, molestiae impedit veniam. Fuga non iste in consequuntur a nemo dicta!")),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:function(){return e({type:C})}},"BACK"),-1===l?r.a.createElement("button",{onClick:function(){return e(pe(t,n,c,1,c))}},"Add to cart"):r.a.createElement("button",{onClick:function(){return e(Ee(l,0,c))}}," Add Quantity "))))},ve=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.reducerCart.cart}));console.log("CART-ITEMS",t);var a=Object(o.c)((function(e){return e.reducerCart.multipleItems}));console.log("MULTIPLE ITEMS",a);var n=Object(o.c)((function(e){return e.reducerCart.prdId}));console.log("PRD ID ITEMS",n);var c=Object(o.c)((function(e){return e.reducerCart.totalPrice}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"cart-title"},r.a.createElement("h3",null,"Cart Items")),r.a.createElement("div",{className:"cart-details"},r.a.createElement("div",{className:"cart-header"},r.a.createElement("div",null,"Code"),r.a.createElement("div",null,"Product"),r.a.createElement("div",null,"Qty"),r.a.createElement("div",null,"Price"),r.a.createElement("div",null,"Amount"),r.a.createElement("div",null)),r.a.createElement("div",{className:"cart-items"},t.map((function(t,a){return r.a.createElement("div",{key:a,className:"items"},r.a.createElement("div",null,t.id),r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.qty),r.a.createElement("div",null,Number(t.price).toFixed(2)),r.a.createElement("div",null,Number(t.amount).toFixed(2)),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("button",{onClick:function(){return e((n=a,r=t.price,{type:P,cartIndex:n,price:r}));var n,r},title:"minus item"}," - "),r.a.createElement("button",{onClick:function(){return e(Ee(a,t.name,t.price,t.price))},title:"add item"}," + "),r.a.createElement("button",{onClick:function(){return e((n=a,r=t.amount,{type:q,cartIndex:n,amount:r}));var n,r},title:"remove all"},"X")))}))),r.a.createElement("div",{className:"cart-footer"},r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement("b",null,"Total Price:")),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement("b",null,Number(c).toFixed(2))),r.a.createElement("div",null))))},he=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.reducerCart.cart.length})),a=Object(o.c)((function(e){return e.reducerCart.totalPrice})),n=Object(o.c)((function(e){return e.reducerCart.viewCart}));return r.a.createElement("div",{className:"cart-summary"},r.a.createElement("div",null,"Numebr of Items: ",t),r.a.createElement("div",null,"Total Price: ",Number(a).toFixed(2)),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:function(){return e({type:I})}},"Clear Cart"),r.a.createElement("button",{onClick:function(){return e({type:T})}},n?"Hide Cart":"View Cart")))},je=function(){console.log("SHOP JS");var e=Object(o.c)((function(e){return e.reducerFetchData.data})),t=Object(o.c)((function(e){return e.reducerFetchProducts}));console.log("SHOP JS: ",e,t);var a=Object(o.c)((function(e){return e.reducerNavigation.itemId})),n=Object(o.c)((function(e){return e.reducerCart.totalPrice})),c=Object(o.c)((function(e){return e.reducerCart.viewCart})),i=Object(o.c)((function(e){return e.reducerNavigation.category}));return r.a.createElement("div",{className:"shop"},r.a.createElement("section",{className:"categories"},r.a.createElement(de,{prod:e})),r.a.createElement("section",{className:"product"},0===n?r.a.createElement("p",{className:"cart-empty-message"},"Cart is empty"):r.a.createElement(he,null),!0===c&&n>0?r.a.createElement(ve,null):"",0===a?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Product List: ",r.a.createElement("b",null,i)),r.a.createElement("div",{className:"product-list"},r.a.createElement(be,{prod:e}))):"",0===a?"":r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Product List: ",r.a.createElement("b",null,i)),r.a.createElement("div",{className:"product-details"},r.a.createElement(ge,null)))))};var Ne=function(){var e=Object(o.b)();return Object(n.useEffect)((function(){e((function(e){e({type:p}),se.a.get("https://my-json-server.typicode.com/rajjubajra/json-server/LanPasaa").then((function(t){e({type:E,feched:!0,fetching:!1,payload:t.data})})).catch((function(t){e({type:f,fetching:!1,fetched:!1,error:t})}))}))}),[e]),r.a.createElement("div",{className:"lanpasaa"},r.a.createElement(Q,null),r.a.createElement(me,null),r.a.createElement("div",{className:"divider"}),r.a.createElement(je,null))},Ae=a(10),ye=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ae.c,null,r.a.createElement(Ae.a,{exact:!0,path:"/",component:G}),r.a.createElement(Ae.a,{path:"/lanpasaa-shop",component:Ne}),r.a.createElement(Ae.a,{path:"/lanpasaa-about",component:K}),r.a.createElement(Ae.a,{path:"/lanpasaa-contact",component:le})))},Ce=function(){return r.a.createElement(o.a,{store:M},r.a.createElement(ye,null))};var xe=function(){return r.a.createElement(l.a,null,r.a.createElement(Ce,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(xe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[43,1,2]]]);
//# sourceMappingURL=main.7d0b9605.chunk.js.map