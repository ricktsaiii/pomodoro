(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["list"],{"1a33":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"list"}},[n("b-container",[n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("h1",{staticClass:"text-center"},[t._v("待辦事項")])]),n("b-col",{attrs:{cols:"12"}},[n("b-form-group",{attrs:{label:"新增事項","label-for":"newinput","invalid-feedback":"字數太少"}},[n("b-form-input",{attrs:{id:"newinput",state:t.newinputstate},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.additem.apply(null,arguments)}},model:{value:t.newinput,callback:function(e){t.newinput=e},expression:"newinput"}})],1),n("b-btn",{staticClass:"w-25 d-block mx-auto",attrs:{variant:"success",block:""},on:{click:t.additem}},[t._v("新增")])],1),n("b-col",{staticClass:"my-3",attrs:{cols:"12"}},[n("b-table",{attrs:{items:t.items,fields:t.fields,"show-empty":"",striped:"",hover:""},scopedSlots:t._u([{key:"empty",fn:function(){return[n("p",{staticClass:"text-center"},[t._v("沒有項目")])]},proxy:!0},{key:"cell(name)",fn:function(e){return[e.item.edit?n("b-form-input",{attrs:{state:e.item.state},on:{keydown:[function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.submitedit(e.index)},function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"esc",27,n.key,["Esc","Escape"])?null:t.canceledit(e.index)}]},model:{value:e.item.model,callback:function(n){t.$set(e.item,"model",n)},expression:"data.item.model"}}):n("span",[t._v(t._s(e.value))])]}},{key:"cell(action)",fn:function(e){return[e.item.edit?n("span",[n("b-btn",{staticClass:"mx-1",attrs:{variant:"success"}},[n("b-icon",{attrs:{icon:"check"},on:{click:function(n){return t.submitedit(e.index)}}})],1),n("b-btn",{staticClass:"mx-1",attrs:{variant:"danger"}},[n("b-icon",{attrs:{icon:"arrow-counterclockwise"},on:{click:function(n){return t.canceledit(e.index)}}})],1)],1):n("span",[n("b-btn",{staticClass:"mx-1",attrs:{variant:"success"}},[n("b-icon",{attrs:{icon:"pencil"},on:{click:function(n){return t.edititem(e.index)}}})],1),n("b-btn",{staticClass:"mx-1",attrs:{variant:"danger"}},[n("b-icon",{attrs:{icon:"trash"},on:{click:function(n){return t.delitem(e.index)}}})],1)],1)]}}])})],1),n("b-col",{attrs:{cols:"12"}},[n("h1",{staticClass:"text-center"},[t._v("已完成")])]),n("b-col",{attrs:{cols:"12"}},[n("b-table-simple",[n("thead",[n("th",[t._v("名稱")]),n("th",[t._v("操作")])]),n("tbody",t._l(t.finished,(function(e,i){return n("tr",[n("td",[t._v(t._s(e))]),n("td",[n("b-btn",{attrs:{variant:"danger"},on:{click:function(e){return t.delfinish(i)}}},[n("b-icon",{attrs:{icon:"trash"}})],1)],1)])})),0)])],1)],1)],1)],1)},s=[],c=(n("d81d"),{data:function(){return{newinput:"",fields:[{key:"name",label:"名稱"},{key:"action",label:"操作"}]}},computed:{newinputstate:function(){return this.newinput.length>2||0===this.newinput.length&&null},items:function(){return this.$store.state.items.map((function(t){return t.state=t.model.length>2,t}))},finished:function(){return this.$store.state.finished}},methods:{additem:function(){this.newinput.length>2&&(this.$store.commit("additem",this.newinput),this.newinput="")},edititem:function(t){this.$store.commit("edititem",t)},delitem:function(t){this.$store.commit("delitem",t)},submitedit:function(t){this.items[t].state&&this.$store.commit("submitedit",t)},canceledit:function(t){this.$store.commit("canceledit",t)},delfinish:function(t){this.$store.commit("delfinish",t)}}}),r=c,a=n("2877"),o=Object(a["a"])(r,i,s,!1,null,null,null);e["default"]=o.exports},b727:function(t,e,n){var i=n("0366"),s=n("e330"),c=n("44ad"),r=n("7b0b"),a=n("07fa"),o=n("65f0"),l=s([].push),u=function(t){var e=1==t,n=2==t,s=3==t,u=4==t,d=6==t,f=7==t,m=5==t||d;return function(b,p,h,k){for(var v,w,y=r(b),x=c(y),_=i(p,h),C=a(x),g=0,$=k||o,E=e?$(b,C):n||f?$(b,0):void 0;C>g;g++)if((m||g in x)&&(v=x[g],w=_(v,g,y),t))if(e)E[g]=w;else if(w)switch(t){case 3:return!0;case 5:return v;case 6:return g;case 2:l(E,v)}else switch(t){case 4:return!1;case 7:l(E,v)}return d?-1:s||u?u:E}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},d81d:function(t,e,n){"use strict";var i=n("23e7"),s=n("b727").map,c=n("1dde"),r=c("map");i({target:"Array",proto:!0,forced:!r},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=list.254167db.js.map