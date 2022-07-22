"use strict";(self.webpackChunkfood_delivery_frontend_part=self.webpackChunkfood_delivery_frontend_part||[]).push([[810],{6810:function(n,e,r){r.r(e),r.d(e,{default:function(){return o}});var t=r(7602),i=r(184);function o(n){var e=n.setOrder;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.CK,{setOrder:e})})}},7602:function(n,e,r){r.d(e,{CK:function(){return Un},W2:function(){return I},h4:function(){return J},lX:function(){return qn},$0:function(){return G},zY:function(){return hn},NY:function(){return rn},Fg:function(){return L},V2:function(){return Dn}});var t,i,o,d,a,c,s,l,p,u,x,h,g,b,f,m,Z,j,v,k,w,y,C,q,F,_,D,N,S,O,$,z,A,U,Y,K,P,V=r(168),B=r(2499),E=r(3504),G=B.Z.section(t||(t=(0,V.Z)(["\n    padding: 30px 0;\n    background-color: #DADEDB;\n    max-width: 1400px;\n"]))),I=B.Z.div(i||(i=(0,V.Z)(["\n    margin: 0 auto;\n    max-width: 1100px;\n    display: flex;\n    position: relative;\n"]))),L=(0,B.Z)(E.rU)(o||(o=(0,V.Z)(["\n    text-decoration: none;\n    color: white;\n"]))),Q=B.Z.div(d||(d=(0,V.Z)(["\n    width: 330px;\n    height: 220px;\n    background-color: #FFF;\n    display: flex;\n    justify-content: center;\n"]))),R=B.Z.header(a||(a=(0,V.Z)(["\n    padding: 10px 0 20px 0;\n    background-color: #000;\n    \n"]))),T=B.Z.ul(c||(c=(0,V.Z)(["\n    display: flex;\n    width: 180px;\n    justify-content: space-between;\n    align-items: center;\n"]))),W=B.Z.li(s||(s=(0,V.Z)(["\n    font-weight: 600;\n"]))),X=B.Z.div(l||(l=(0,V.Z)(["\n    height: 20px;\n    width: 1px;\n    background-color: white;\n    border: none;\n    position: absolute;\n    top: 0;\n    left: 55px;\n"]))),H=r(184),J=function(){return(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(R,{children:(0,H.jsx)(I,{children:(0,H.jsxs)("nav",{children:[(0,H.jsxs)(T,{children:[(0,H.jsx)(W,{children:(0,H.jsx)(L,{to:"/",children:"Shop"})}),(0,H.jsx)(W,{children:(0,H.jsx)(L,{to:"order",children:"Shopping Cart"})})]}),(0,H.jsx)(X,{})]})})})})},M=B.Z.ul(p||(p=(0,V.Z)(["\n    padding: 10px;\n    border-radius: 10px;\n    border: 1px solid black;\n    margin-right: 30px;\n"]))),nn=B.Z.li(u||(u=(0,V.Z)(["\n    margin-bottom: 30px;\n"]))),en=B.Z.button(x||(x=(0,V.Z)(["\n    width: 200px;\n    height: 50px;\n    border-radius: 7px;\n    background: white;\n    border: none;\n    &:hover {\n        background: #C8C4C5;\n    }\n"]))),rn=function(n){var e=n.storesData,r=n.setCurrentShop;function t(n){var e=n.target.dataset.currentshop;r(e)}return(0,H.jsx)(M,{children:null!==e&&e.map((function(n){return(0,H.jsx)(nn,{children:(0,H.jsx)(en,{type:"button","data-currentshop":n.shop,onClick:t,children:n.shop})},n.shop)}))})},tn=r(9405),on=B.Z.div(h||(h=(0,V.Z)(["\n    width: 100%;\n    height: 80vh;\n    background-image: url('https://food-delivery-backend-project.herokuapp.com/","');\n    border-radius: 10px;\n\n"])),(function(n){return n.image})),dn=B.Z.div(g||(g=(0,V.Z)(["\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-image: linear-gradient(rgba(0, 16, 56, 0.45), rgba(0, 16, 56, 0.45)), url('","');\n    overflow: hidden;\n    border-radius: 10px;\n"])),tn),an=B.Z.div(b||(b=(0,V.Z)(["\nbox-sizing: border-box;\nheight: 100%;\noverflow-y: scroll;\npadding: 10px;\n"]))),cn=B.Z.ul(f||(f=(0,V.Z)(["\n    padding-left: 35px;\n    padding-right: 35px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    \n"]))),sn=B.Z.li(m||(m=(0,V.Z)(["\n    border-radius: 10px;\n    overflow: hidden;\n    margin-bottom: 20px;\n"]))),ln=B.Z.div(Z||(Z=(0,V.Z)(["\n    padding: 0 10px 10px 10px;\n   display: flex;\n   justify-content: space-between;\n   background-color: rgba(255, 255, 255, 0.8);\n"]))),pn=B.Z.div(j||(j=(0,V.Z)(["\n   display: flex;\n   margin-top: 10px;\n"]))),un=B.Z.button(v||(v=(0,V.Z)(["\n    width: 100px;\n    height: 35px;\n    background: rgb(227, 6, 19);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: white;\n    border-radius: 5px;\n    border: none;\n    margin-top: 30px;\n"]))),xn=B.Z.span(k||(k=(0,V.Z)(["\n    margin-left: 10px;\n    font-weight: 700;\n"]))),hn=function(n){var e=n.productionData,r=n.orderCreator;return(0,H.jsxs)(on,{image:null!==e&&e.wallpaper,children:[null===e&&(0,H.jsx)(dn,{children:(0,H.jsxs)("h1",{children:["Select a store ",(0,H.jsx)("br",{}),"and view ",(0,H.jsx)("br",{}),"the list of its products"]})}),null!==e&&(0,H.jsx)(an,{children:(0,H.jsx)(cn,{children:e.products.map((function(n){var t=n.name,i=n.price,o=n.image,d=n.id;return(0,H.jsxs)(sn,{children:[(0,H.jsx)(Q,{children:(0,H.jsx)("img",{className:"meal-image",src:"https://food-delivery-backend-project.herokuapp.com//".concat(o),alt:"fast-food",height:"100%"})}),(0,H.jsxs)(ln,{children:[(0,H.jsxs)(pn,{children:[(0,H.jsx)("p",{className:"meal-title",children:t}),(0,H.jsxs)(xn,{className:"meal-price",children:[i,"$"]})]}),(0,H.jsx)(un,{onClick:function(){r({id:d,shop:e.shop,name:t,price:i,imageUrl:o})},children:"Add to card"})]})]},d)}))})})]})},gn=r(5705),bn=B.Z.ul(w||(w=(0,V.Z)(["\n    width: 100%;\n    background: #fff;\n    margin-left: 30px;\n    border: 1px solid black;\n    border-radius: 10px;\n    height: 70vh;\n    overflow-y: scroll;\n    padding: 10px;\n"]))),fn=B.Z.li(y||(y=(0,V.Z)(["\n    padding: 10px 0 20px 10px;\n    display: flex;\n    border: 1px solid black;\n    border-radius: 10px;\n    margin-bottom: 10px;\n    justify-content: space-between;\n    align-items: flex-end;\n    background-color: white;\n"]))),mn=B.Z.div(C||(C=(0,V.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n"]))),Zn=B.Z.span(q||(q=(0,V.Z)(["\n\n"]))),jn=(B.Z.span(F||(F=(0,V.Z)(["\n    margin-top: 10px;\n"]))),B.Z.span(_||(_=(0,V.Z)(["\n    margin-top: 10px;\n"])))),vn=B.Z.div(D||(D=(0,V.Z)(["\n    margin-top: 100px;\n    margin-right: 20px;\n    position: relative;\n"]))),kn=(0,B.Z)(gn.gN)(N||(N=(0,V.Z)(["\n    width: 100px;\n    height: 25px;\n    border: none;\n    border-radius: 5px;\n    text-align: center;\n    cursor: pointer;\n    border: 1px solid black;\n"]))),wn=B.Z.div(S||(S=(0,V.Z)(["\n    //border: 1px solid black;\n    width: 90px;\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n    position: absolute;\n    top: 5px;\n    left: 8px;\n"]))),yn=B.Z.button(O||(O=(0,V.Z)(["\n    width: 28px;\n    height: 18px;\n    border: none;\n    border-radius: 5px;\n    background: ",";\n"])),(function(n){return"decrement"===n.appointment?"rgb(227, 6, 19)":"green"})),Cn=B.Z.button($||($=(0,V.Z)(["\n    border: none;\n    font-weight: bolder;\n    background: none;\n    color: rgb(227, 6, 19);\n    position: absolute;\n    top: -200px;\n    right: -10px;\n    transition: color 500ms ease;\n    &:hover {\n        color: rgb(168, 5, 14);\n    }\n"]))),qn=function(n){var e=n.order,r=n.setOrder,t=n.onOrderInputChange;return(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(bn,{children:e&&e.map((function(n){return(0,H.jsxs)(fn,{children:[(0,H.jsx)(Q,{children:(0,H.jsx)("img",{src:"https://food-delivery-backend-project.herokuapp.com/".concat(n.imageUrl),alt:"fast-food",height:"100%"})}),(0,H.jsxs)(mn,{children:[(0,H.jsx)(Zn,{children:n.name}),(0,H.jsxs)(jn,{children:["Price: ",n.totalPrice,"$"]}),(0,H.jsxs)(vn,{children:[(0,H.jsx)(kn,{type:"text",name:n.id,value:n.count}),(0,H.jsxs)(wn,{children:[(0,H.jsx)(yn,{type:"button",appointment:"increment",onClick:function(){t("increment",n.id)},children:"+"}),n.count>1&&(0,H.jsx)(yn,{type:"button",appointment:"decrement",onClick:function(){t("decrement",n.id)},children:"-"}),(0,H.jsx)(Cn,{type:"button",onClick:function(){r(e.filter((function(e){return e.id!==n.id})))},children:"Remove"})]})]})]})]},n.id)}))})})},Fn=B.Z.div(z||(z=(0,V.Z)(["\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    padding-top: 10px;\n    padding-bottom: 10px;\n"]))),_n=B.Z.button(A||(A=(0,V.Z)(["\n    margin-left: 30px;\n    width: 150px;\n    height: 40px;\n    border: none;\n    border-radius: 5px;\n    background: rgb(227, 6, 19);\n    transition: background 500ms ease;\n    transition: color 500ms ease;\n    &:hover {\n        background: rgb(168, 5, 14);\n        color: white;\n    }\n"]))),Dn=function(n){var e=n.total;return(0,H.jsxs)(Fn,{children:[(0,H.jsxs)("p",{children:["Total price: ",e,"$"]}),(0,H.jsx)(_n,{type:"submit",children:"Submit"})]})},Nn=r(7170),Sn=B.Z.div(U||(U=(0,V.Z)(["\n    width: 100%;\n    padding: 50px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-image: url('","');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain;\n\n"])),Nn),On=B.Z.h2(Y||(Y=(0,V.Z)(["\n    margin-bottom: 50px;\n"]))),$n=B.Z.div(K||(K=(0,V.Z)(["\n    display: flex;\n    width: 500px;\n    margin-bottom: 40px;\n"]))),zn=B.Z.button(P||(P=(0,V.Z)(["\n    border: none;\n    background: none;\n    font-weight: bolder;\n"]))),An=r(6871),Un=function(){var n=(0,An.s0)();return(0,H.jsxs)(Sn,{children:[(0,H.jsx)(On,{children:"Your order is accepted"}),(0,H.jsx)($n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias qui vel provident quisquam voluptas ex similique quia animi, aliquam ab a atque consectetur est ratione? Veniam, error nobis. Quae, laboriosam."}),(0,H.jsx)(zn,{onClick:function(){n("/")},children:"Go to home page"})]})}},7170:function(n,e,r){n.exports=r.p+"static/media/acess-icon.5b0c5ec0685c6d813dd2.png"},9405:function(n,e,r){n.exports=r.p+"static/media/main-background.7eb20ed70be74b0d66ab.jpg"}}]);
//# sourceMappingURL=810.d2545005.chunk.js.map