(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{330:function(t,e,n){"use strict";n(12),n(10),n(5),n(4),n(9);var r=n(2),o=(n(31),n(32),n(16)),c=n(24),l=n(17),d=n(19),f=n(20),h=n(11),m=n(0),v=n(26),y=n(45),O=n(146);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var x=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},_=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(c.a)(e,[{key:"resetAppbar",value:function(){this.setAppbar({title:"",style:"",show:!0,back:!0,home:!1,dark:!0,color:"#111"})}},{key:"setLang",value:function(){var t="en",e=navigator.language;e.includes("zh")?t=e.includes("zh-TW")||e.includes("zh-HK")?"zhTW":"zh":e.includes("es")?t="es":e.includes("ja")?t="ja":e.includes("de")&&(t="de"),this.$i18n.locale=t,document.title=this.title}},{key:"setPage",value:function(){this.setAppbar(function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({title:this.title},this.appbar)),setTimeout((function(){Object(O.b)()}),50)}},{key:"beforeDestroy",value:function(){this.resetAppbar()}},{key:"title",get:function(){return""}},{key:"description",get:function(){return""}},{key:"appbar",get:function(){return{}}}]),e}(m.a);x([Object(y.a)("app/SET_APPBAR")],_.prototype,"setAppbar",void 0),_=x([Object(v.a)({head:function(){return{title:this.title,meta:[{hid:"theme-color",name:"theme-color",content:"#040C11"}]}},beforeRouteEnter:function(t,e,n){n((function(t){t.setLang(),t.setPage()}))}})],_),e.a=_},331:function(t,e,n){var content=n(341);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("2294ae7c",content,!0,{sourceMap:!1})},332:function(t,e,n){var content=n(343);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("b6f8104a",content,!0,{sourceMap:!1})},340:function(t,e,n){"use strict";var r=n(331);n.n(r).a},341:function(t,e,n){(e=n(13)(!1)).push([t.i,".room-card[data-v-15d664be]{border-radius:20px;width:100%;background:hsla(0,0%,100%,.2);box-shadow:0 0 20px hsla(0,0%,100%,.08);position:relative}.room-card .delete-button[data-v-15d664be]{position:absolute;top:4px;right:4px;z-index:1}.room-card .top[data-v-15d664be]{text-align:center;justify-content:space-between}.room-card .top .nickname[data-v-15d664be]{text-align:left}",""]),t.exports=e},342:function(t,e,n){"use strict";var r=n(332);n.n(r).a},343:function(t,e,n){(e=n(13)(!1)).push([t.i,".intro[data-v-547b2c87]{margin-top:40px}.intro .start-field-wrapper[data-v-547b2c87]{align-items:center;margin-top:40px;max-width:600px}.intro .start-field-wrapper[data-v-547b2c87]  .v-input__append-inner{margin-top:2px}.intro .start-field-wrapper .room-field[data-v-547b2c87]{margin-right:16px}.intro .start-field-wrapper .start-btn[data-v-547b2c87]{min-width:180px}.hint[data-v-547b2c87]{color:hsla(0,0%,100%,.7)}.hint p[data-v-547b2c87]{line-height:1.3;margin-bottom:1em}.domain[data-v-547b2c87]{color:#2196f3}.rooms[data-v-547b2c87]{display:flex;flex-direction:row;flex-wrap:wrap}@media only screen and (max-width:736px){.start-field-wrapper[data-v-547b2c87]{width:100%;align-items:flex-start!important;justify-content:flex-start;flex-direction:column}.start-field-wrapper[data-v-547b2c87]  .v-input__append-inner{margin-top:2px}.start-field-wrapper .room-field[data-v-547b2c87]{width:100%}.start-field-wrapper .start-btn[data-v-547b2c87]{margin-top:14px}}.faq[data-v-547b2c87]{margin-top:40px;padding-right:20px!important}.faq .faq-item[data-v-547b2c87]{margin:0 0 20px;opacity:.8}.faq .faq-item .anwser[data-v-547b2c87],.faq .faq-item .question[data-v-547b2c87]{margin:4px 0}.footer[data-v-547b2c87]{color:hsla(0,0%,100%,.7);margin-top:60px;padding:16px}",""]),t.exports=e},346:function(t,e,n){var content=n(347);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("e8b41e5e",content,!0,{sourceMap:!1})},347:function(t,e,n){(e=n(13)(!1)).push([t.i,".theme--light.v-subheader{color:rgba(0,0,0,.6)}.theme--dark.v-subheader{color:hsla(0,0%,100%,.7)}.v-subheader{align-items:center;display:flex;height:48px;font-size:.875rem;font-weight:400;padding:0 16px}.v-subheader--inset{margin-left:56px}",""]),t.exports=e},370:function(t,e,n){"use strict";n.r(e);n(5),n(4),n(197),n(42);var r=n(16),o=n(24),c=n(17),l=n(19),d=n(20),f=n(11),h=n(26),m=n(45),v=n(335),y=n(330),O=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},j=function(t){function e(){return Object(r.a)(this,e),Object(c.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(o.a)(e,[{key:"mounted",value:function(){}},{key:"join",value:function(){this.$emit("join",this.room)}}]),e}(h.d);O([Object(h.c)()],j.prototype,"room",void 0);var x=j=O([h.a],j),_=(n(340),n(34)),w=n(47),k=n.n(w),R=n(324),P=n(135),component=Object(_.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.room?n("div",{staticClass:"room-card pb-2 px-4"},[n("div",{staticClass:"top d-flex py-2"},[n("div",{staticClass:"nickname font-weight-bold"},[t._v("\n      #"+t._s(t.room.room)+"\n    ")])]),t._v(" "),n("v-btn",{staticClass:"delete-button",attrs:{icon:"",color:"#bb1312"},on:{click:function(e){return t.$emit("delete",t.room)}}},[n("v-icon",[t._v("\n      "+t._s(t.$icons.mdiClose)+"\n    ")])],1),t._v(" "),n("div",{staticClass:"d-flex"},[n("v-btn",{attrs:{text:"",block:"",rounded:"",color:"primary"},on:{click:function(e){return t.$emit("join",t.room)}}},[t._v("\n      "+t._s(t.$t("com.room_card.join_btn"))+"\n    ")])],1)],1):t._e()}),[],!1,null,"15d664be",null),C=component.exports;k()(component,{VBtn:R.a,VIcon:P.a});var $=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},D={dictionaries:[v.a,v.b],separator:"-",length:2},A=function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(c.a)(this,Object(l.a)(e).apply(this,arguments))).showJoinDialog=!1,t.loading=!1,t.channelName="",t.faqItems=[],t}return Object(d.a)(e,t),Object(o.a)(e,[{key:"mounted",value:function(){for(var t=this,e=0;e<9;e++)this.faqItems.push({q:this.$i18n.t("faq.q".concat(e+1)),a:this.$i18n.t("faq.a".concat(e+1))});setTimeout((function(){t.reload()}),100)}},{key:"reload",value:function(){this.setAppbar({color:"rgba(0,0,0,0.0)",title:"free4.chat",animation:!0,back:!1})}},{key:"genRandomChannelName",value:function(){var t=Object(v.d)(D);this.channelName=t.toLowerCase().replace(/[^a-zA-Z0-9\-_]/g,"")}},{key:"deleteRoom",value:function(t){this.removeRoom({room:t.room})}},{key:"joinRoom",value:function(t){this.$router.push("/".concat(t.room))}},{key:"createOrJoin",value:function(){this.$router.push("/".concat(this.channelName))}},{key:"title",get:function(){return"free4.chat"}},{key:"cardWidth",get:function(){var t=window.innerWidth;return t<600?"".concat(t-12-16,"px"):"240px"}},{key:"recentRooms",get:function(){return this.chat.rooms}},{key:"noRecentRooms",get:function(){return 0===Object.values(this.recentRooms).length}},{key:"validated",get:function(){return 0!==this.channelName.trim().length&&/^[a-zA-Z0-9\-_]+$/.test(this.channelName)}}]),e}(Object(h.b)(y.a));$([Object(m.b)((function(t){return t.app.profile}))],A.prototype,"profile",void 0),$([Object(m.b)((function(t){return t.app.chat}))],A.prototype,"chat",void 0),$([Object(m.a)("app/SET_APPBAR")],A.prototype,"setAppbar",void 0),$([Object(m.a)("app/REMOVE_ROOM")],A.prototype,"removeRoom",void 0);var E=A=$([Object(h.a)({head:function(){return{title:this.title}},components:{RoomCard:C}})],A),N=(n(342),n(367)),z=(n(12),n(10),n(9),n(2)),T=(n(346),n(28)),S=n(6);function V(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function M(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?V(Object(source),!0).forEach((function(e){Object(z.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):V(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var B=Object(S.a)(T.a).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:M({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}}),J=n(371),L=Object(_.a)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("normal-page-layout",[n("v-container",{staticClass:"room-page"},[n("f-loading",{attrs:{loading:t.loading,fullscreen:!0}}),t._v(" "),[n("div",{staticClass:"intro pa-4"},[n("p",{staticClass:"display-1 font-weight-bold"},[t._v(t._s(t.$t("index.headline_1")))]),t._v(" "),n("p",{staticClass:"title font-weight-normal"},[t._v(t._s(t.$t("index.headline_2")))]),t._v(" "),n("div",{staticClass:"d-flex py-5 start-field-wrapper"},[n("v-text-field",{staticClass:"room-field",attrs:{prefix:"#",label:"Room Name",solo:"","hide-details":!0},scopedSlots:t._u([{key:"append",fn:function(){return[n("v-btn",{attrs:{icon:""},on:{click:t.genRandomChannelName}},[n("v-icon",[t._v("\n                  "+t._s(t.$icons.mdiDice3)+"\n                ")])],1)]},proxy:!0}]),model:{value:t.channelName,callback:function(e){t.channelName=e},expression:"channelName"}}),t._v(" "),n("v-btn",{staticClass:"start-btn",attrs:{large:"",color:"primary",rounded:"",disabled:!t.validated},on:{click:t.createOrJoin}},[t._v("\n            "+t._s(t.$t("index.create_room_btn"))+"\n          ")])],1),t._v(" "),n("div",{staticClass:"hint"},[n("p",{staticClass:"caption",domProps:{innerHTML:t._s(t.$t("index.create_room_dialog_hint_1"))}}),t._v(" "),n("p",{staticClass:"caption",domProps:{innerHTML:t._s(t.$t("index.create_room_dialog_hint_2"))}})])]),t._v(" "),t.noRecentRooms?t._e():[n("v-subheader",{staticClass:"body-2 ml-2"},[t._v(t._s(t.$t("index.recent_room_label")))]),t._v(" "),n("div",{staticClass:"rooms"},t._l(t.recentRooms,(function(e){return n("div",{key:e.room+"-"+e.nickname,staticClass:"rooms-card-wrapper ma-2",style:{width:t.cardWidth}},[n("room-card",{attrs:{room:e},on:{join:t.joinRoom,delete:t.deleteRoom}})],1)})),0)]]],2)],1)}),[],!1,null,"547b2c87",null);e.default=L.exports;k()(L,{VBtn:R.a,VContainer:N.a,VIcon:P.a,VSubheader:B,VTextField:J.a})}}]);