"use strict";(self.webpackChunksc_user=self.webpackChunksc_user||[]).push([[745],{6745:(D,c,i)=>{i.r(c),i.d(c,{DeviceListComponent:()=>b});var e=i(6689),d=i(6814),_=i(9862),l=i(95),o=i(6565),g=i(4974),p=i(4670);const h=function(a){return{"bg-blue-100":a}};function m(a,s){if(1&a){const t=e.EpF();e.ynx(0),e.TgZ(1,"tr",11)(2,"td",6),e._uU(3),e.qZA(),e.TgZ(4,"td",6),e._uU(5),e.qZA(),e.TgZ(6,"td",6),e._uU(7),e.qZA(),e.TgZ(8,"td",6),e._uU(9),e.qZA(),e.TgZ(10,"td",6),e._uU(11),e.qZA(),e.TgZ(12,"td",6)(13,"button",12),e.NdJ("click",function(){const r=e.CHM(t).$implicit,x=e.oxw();return e.KtG(x.detail(r.id))}),e._uU(14,"Detail"),e.qZA()()(),e.BQk()}if(2&a){const t=s.$implicit,n=s.index;e.xp6(1),e.Q6J("ngClass",e.VKq(6,h,n%2!=0)),e.xp6(2),e.Oqu(t.id),e.xp6(2),e.Oqu(t.model),e.xp6(2),e.Oqu(t.address.address),e.xp6(2),e.Oqu(t.address.city),e.xp6(2),e.Oqu(t.address.province)}}function f(a,s){1&a&&(e.TgZ(0,"tr")(1,"td",13),e._uU(2," No Device "),e.qZA()())}function v(a,s){1&a&&(e.TgZ(0,"tr")(1,"td",13),e._UZ(2,"i",14),e.qZA()())}function Z(a,s){1&a&&(e.TgZ(0,"button",15),e._UZ(1,"i",16),e.qZA())}function T(a,s){1&a&&(e.TgZ(0,"button",15),e._UZ(1,"i",17),e.qZA())}let b=(()=>{class a{constructor(){this.service=(0,e.f3M)(g.U8),this.router=(0,e.f3M)(p.F0),this.form=new l.NI(""),this.status=o.q.initial,this.rawStatus=o.q,this.dataParams={page:1,limit:10,search:""}}ngOnInit(){this.read(),this.form.valueChanges.subscribe(t=>this.search(t))}changePage(t){switch(t){case o.u.increment:this.dataParams.page+=1;break;case o.u.decrement:this.dataParams.page-=1}this.read()}detail(t){this.router.navigateByUrl("/device/detail/"+t)}limitChange(t){this.dataParams.limit=t,this.read()}search(t){this.dataParams.search=t??"",this.read()}read(){this.status=o.q.loading,this.service.read(this.params).subscribe({next:t=>{this.devices=t,this.status=o.q.initial},error:t=>{this.devices=void 0,this.status=o.q.error}})}get params(){return(new _.LE).set("page",this.dataParams.page??1).append("limit",this.dataParams.limit??10).append("search",this.dataParams.search??"")}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-device-list"]],standalone:!0,features:[e.jDz],decls:30,vars:7,consts:[[1,"bg-white","shadow","rounded-lg","p-5"],[1,"flex","flex-col","gap-5","overflow-x-auto"],[1,"flex","flex-row","justify-between","place-items-center"],[1,"font-bold","text-lg"],["type","text","placeholder","Cari",1,"focus:outline-none","focus:ring-0","focus:border-none","border-none","bg-gray-100","rounded",3,"formControl"],[1,"text-left","bg-blue-500","text-white"],[1,"px-4","py-2"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"flex","flex-row","place-items-center","gap-3"],["class","px-3 py-2 bg-gray-100 text-gray-400 hover:bg-blue-500 hover:text-white rounded",4,"ngIf"],[3,"ngClass"],[1,"px-4","py-2","rounded","bg-blue-500","text-white","hover:bg-blue-600",3,"click"],["colspan","6",1,"text-center","font-bold","px-4","py-2"],[1,"fa-solid","fa-spinner","animate-spin","text-xl"],[1,"px-3","py-2","bg-gray-100","text-gray-400","hover:bg-blue-500","hover:text-white","rounded"],[1,"fa-solid","fa-chevron-left","text-sm"],[1,"fa-solid","fa-chevron-right","text-sm"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),e._uU(4,"Tabel Daftar Perangkat"),e.qZA(),e._UZ(5,"input",4),e.qZA(),e.TgZ(6,"table")(7,"thead",5)(8,"th",6),e._uU(9,"ID"),e.qZA(),e.TgZ(10,"th",6),e._uU(11,"Model"),e.qZA(),e.TgZ(12,"th",6),e._uU(13,"Alamat"),e.qZA(),e.TgZ(14,"th",6),e._uU(15,"Kota"),e.qZA(),e.TgZ(16,"th",6),e._uU(17,"Provinsi"),e.qZA(),e.TgZ(18,"th",6),e._uU(19,"Detail"),e.qZA()(),e.TgZ(20,"tbody"),e.YNc(21,m,15,8,"ng-container",7),e.YNc(22,f,3,0,"tr",8),e.YNc(23,v,3,0,"tr",8),e.qZA()(),e.TgZ(24,"div",9)(25,"div",9),e.YNc(26,Z,2,0,"button",10),e.TgZ(27,"span"),e._uU(28),e.qZA(),e.YNc(29,T,2,0,"button",10),e.qZA()()()()),2&t){let u,r;e.xp6(5),e.Q6J("formControl",n.form),e.xp6(16),e.Q6J("ngForOf",null==n.devices?null:n.devices.data),e.xp6(1),e.Q6J("ngIf",0==(null==n.devices||null==n.devices.data?null:n.devices.data.length)),e.xp6(1),e.Q6J("ngIf",n.status==n.rawStatus.loading),e.xp6(3),e.Q6J("ngIf",(null!==(u=null==n.devices?null:n.devices.page)&&void 0!==u?u:0)>1),e.xp6(2),e.Oqu("page "+(null==n.devices?null:n.devices.page)+" of "+(null==n.devices?null:n.devices.total)),e.xp6(1),e.Q6J("ngIf",(null!==(r=null==n.devices?null:n.devices.page)&&void 0!==r?r:0)<(null!==(r=null==n.devices?null:n.devices.total)&&void 0!==r?r:0))}},dependencies:[d.ez,d.mk,d.sg,d.O5,_.JF,l.UX,l.Fj,l.JJ,l.oH]}),a})()}}]);