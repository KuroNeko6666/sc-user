"use strict";(self.webpackChunksc_user=self.webpackChunksc_user||[]).push([[784],{6784:(M,u,a)=>{a.r(u),a.d(u,{MarketListComponent:()=>r});var t=a(6689),l=a(6814),g=a(9862),c=a(95),p=a(4670),d=a(6565),s=a(4974),_=a(6286),x=a(9564);function y(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){t.CHM(e);const f=t.oxw().$implicit,E=t.oxw();return t.KtG(E.addCart(f.id))}),t.TgZ(1,"span"),t._uU(2,"KERANJANG"),t.qZA()()}}function h(n,i){1&n&&(t.TgZ(0,"div",13)(1,"span",14),t._uU(2,"BERLANGGANAN"),t.qZA()())}function m(n,i){1&n&&(t.TgZ(0,"div",13)(1,"span",14),t._uU(2,"SUDAH DITAMBAHKAN"),t.qZA()())}function v(n,i){1&n&&(t.TgZ(0,"div",13)(1,"span",14),t._uU(2,"SEDANG DIPROSES"),t.qZA()())}function b(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"div",5)(2,"div",6)(3,"div",7)(4,"span",8),t._uU(5),t.qZA(),t.TgZ(6,"span",9),t._uU(7),t.qZA()()(),t.YNc(8,y,3,0,"button",10),t.YNc(9,h,3,0,"div",11),t.YNc(10,m,3,0,"div",11),t.YNc(11,v,3,0,"div",11),t.qZA(),t.BQk()),2&n){const e=i.$implicit;t.xp6(5),t.Oqu(e.id),t.xp6(2),t.Oqu(e.address.city+", "+e.address.province),t.xp6(1),t.Q6J("ngIf",!e.subcribe&&!e.cart&&!e.order),t.xp6(1),t.Q6J("ngIf",e.subcribe),t.xp6(1),t.Q6J("ngIf",e.cart),t.xp6(1),t.Q6J("ngIf",e.order&&!e.subcribe)}}let r=(()=>{class n{constructor(){this.service=(0,t.f3M)(s.U8),this.cart=(0,t.f3M)(_.N),this.router=(0,t.f3M)(p.F0),this.notif=(0,t.f3M)(x.g),this.form=new c.NI(""),this.status=d.q.initial,this.rawStatus=d.q,this.dataParams={page:1,limit:10,search:""}}ngOnInit(){this.read(),this.form.valueChanges.subscribe(e=>this.search(e))}changePage(e){switch(e){case d.u.increment:this.dataParams.page+=1;break;case d.u.decrement:this.dataParams.page-=1}this.read()}detail(e){this.router.navigateByUrl("/device/detail/"+e)}limitChange(e){this.dataParams.limit=e,this.read()}search(e){this.dataParams.search=e??"",this.read()}read(){this.status=d.q.loading,this.service.readMarket(this.params).subscribe({next:e=>{console.log(e),this.devices=e,this.status=d.q.initial},error:e=>{this.devices=void 0,this.status=d.q.error}})}addCart(e){this.cart.add(e).subscribe({next:o=>{this.notif.push({message:"Perangkat berhasil ditambahkan",status:"success"}),this.read()},error:o=>{console.log(o),this.notif.push({message:"Perangkat gagal ditambahkan",status:"failure"})}})}get params(){return(new g.LE).set("page",this.dataParams.page??1).append("limit",this.dataParams.limit??50).append("search",this.dataParams.search??"")}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-market-list"]],standalone:!0,features:[t.jDz],decls:5,vars:2,consts:[[1,"bg-white","rounded-lg","shadow","p-5"],[1,"flex","flex-col","gap-5"],["type","text","placeholder","Cari",1,"focus:outline-none","focus:ring-0","focus:border-none","border-none","bg-gray-100","rounded",3,"formControl"],[1,"grid","grid-cols-1","md:grid-cols-2","lg:grid-cols-3","xl:grid-cols-4","gap-5"],[4,"ngFor","ngForOf"],[1,"hover:scale-105","duration-200","transition-all","flex","flex-col"],[1,"bg-gray-200","rounded-t-lg","col-span-1","p-5"],[1,"flex","flex-col"],[1,"font-bold","text-lg"],[1,"text-sm"],["class","px-4 py-2 rounded-b-lg bg-blue-500 hover:bg-blue-600 text-white",3,"click",4,"ngIf"],["class","px-4 py-2 rounded-b-lg bg-gray-500 hover:bg-gray-600 text-white text-center",4,"ngIf"],[1,"px-4","py-2","rounded-b-lg","bg-blue-500","hover:bg-blue-600","text-white",3,"click"],[1,"px-4","py-2","rounded-b-lg","bg-gray-500","hover:bg-gray-600","text-white","text-center"],[1,"text-center"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"input",2),t.TgZ(3,"div",3),t.YNc(4,b,12,6,"ng-container",4),t.qZA()()()),2&e&&(t.xp6(2),t.Q6J("formControl",o.form),t.xp6(2),t.Q6J("ngForOf",null==o.devices?null:o.devices.data))},dependencies:[l.ez,l.sg,l.O5,c.UX,c.Fj,c.JJ,c.oH]}),n})()},9564:(M,u,a)=>{a.d(u,{g:()=>b});var t=a(5619);const g={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let c;const p=new Uint8Array(16);function d(){if(!c&&(c=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!c))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return c(p)}const s=[];for(let r=0;r<256;++r)s.push((r+256).toString(16).slice(1));const m=function h(r,n,i){if(g.randomUUID&&!n&&!r)return g.randomUUID();const e=(r=r||{}).random||(r.rng||d)();if(e[6]=15&e[6]|64,e[8]=63&e[8]|128,n){i=i||0;for(let o=0;o<16;++o)n[i+o]=e[o];return n}return function _(r,n=0){return(s[r[n+0]]+s[r[n+1]]+s[r[n+2]]+s[r[n+3]]+"-"+s[r[n+4]]+s[r[n+5]]+"-"+s[r[n+6]]+s[r[n+7]]+"-"+s[r[n+8]]+s[r[n+9]]+"-"+s[r[n+10]]+s[r[n+11]]+s[r[n+12]]+s[r[n+13]]+s[r[n+14]]+s[r[n+15]]).toLowerCase()}(e)};var v=a(6689);let b=(()=>{class r{constructor(){this.subject=new t.X([]),this.observable=this.subject.asObservable()}push(i){i.id=m();let e=this.subject.getValue();e.push(i),this.subject.next(e),setInterval(()=>this.delete(i.id),3e3)}delete(i){let o=this.subject.getValue().filter(f=>f.id!=i);this.subject.next(o)}}return r.\u0275fac=function(i){return new(i||r)},r.\u0275prov=v.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);