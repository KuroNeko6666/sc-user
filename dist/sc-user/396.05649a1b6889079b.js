"use strict";(self.webpackChunksc_user=self.webpackChunksc_user||[]).push([[396],{5396:(U,p,a)=>{a.r(p),a.d(p,{OrderListComponent:()=>b});var t=a(6689),u=a(6814),l=a(9862),o=a(95),g=a(4670),d=a(6565),i=a(9564),h=a(5516);let y=(()=>{class e{constructor(n){this.client=n,this.host=h.N.api.host,this.path=h.N.api.path.order}read(n){let s=[this.host,this.path].join("");return this.client.get(s,{params:n})}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(l.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const x=function(e){return{"bg-blue-100":e}};function m(e,r){if(1&e&&(t.ynx(0),t.TgZ(1,"tr",9)(2,"td",6),t._uU(3),t.qZA(),t.TgZ(4,"td",6),t._uU(5),t.qZA(),t.TgZ(6,"td",6)(7,"div",10),t._uU(8),t.qZA()()(),t.BQk()),2&e){const n=r.$implicit,s=r.index;t.xp6(1),t.Q6J("ngClass",t.VKq(5,x,s%2!=0)),t.xp6(2),t.Oqu(n.id),t.xp6(2),t.Oqu(n.items.length),t.xp6(2),t.Q6J("ngClass","accepted"==n.status?"bg-green-500":"rejected"==n.status?"bg-red-500":"bg-blue-500"),t.xp6(1),t.hij(" ","accepted"==n.status?"BERHASIL":"rejected"==n.status?"DITOLAK":"DIPROSES"," ")}}function v(e,r){1&e&&(t.TgZ(0,"tr")(1,"td",11),t._uU(2," No Device "),t.qZA()())}function f(e,r){1&e&&(t.TgZ(0,"tr")(1,"td",11),t._UZ(2,"i",12),t.qZA()())}let b=(()=>{class e{constructor(){this.service=(0,t.f3M)(y),this.router=(0,t.f3M)(g.F0),this.notif=(0,t.f3M)(i.g),this.form=new o.NI(""),this.status=d.q.initial,this.rawStatus=d.q,this.dataParams={page:1,limit:10,search:""}}ngOnInit(){this.read(),this.form.valueChanges.subscribe(n=>this.search(n))}changePage(n){switch(n){case d.u.increment:this.dataParams.page+=1;break;case d.u.decrement:this.dataParams.page-=1}this.read()}limitChange(n){this.dataParams.limit=n,this.read()}search(n){this.dataParams.search=n??"",this.read()}read(){this.status=d.q.loading,this.service.read(this.params).subscribe({next:n=>{this.devices=n,this.status=d.q.initial},error:n=>{this.devices=void 0,this.status=d.q.error}})}get params(){return(new l.LE).set("page",this.dataParams.page??1).append("limit",this.dataParams.limit??10).append("search",this.dataParams.search??"")}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-order-list"]],standalone:!0,features:[t.jDz],decls:18,vars:4,consts:[[1,"bg-white","shadow","rounded-lg","p-5"],[1,"flex","flex-col","gap-5","overflow-x-auto"],[1,"flex","flex-row","justify-between","place-items-center"],[1,"font-bold","text-lg"],["type","text","placeholder","Cari",1,"focus:outline-none","focus:ring-0","focus:border-none","border-none","bg-gray-100","rounded",3,"formControl"],[1,"text-left","bg-blue-500","text-white"],[1,"px-4","py-2"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"ngClass"],[1,"px-4","py-2","font-bold","text-white","rounded-lg",3,"ngClass"],["colspan","6",1,"text-center","font-bold","px-4","py-2"],[1,"fa-solid","fa-spinner","animate-spin","text-xl"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._uU(4,"Tabel Daftar Pesanan"),t.qZA(),t._UZ(5,"input",4),t.qZA(),t.TgZ(6,"table")(7,"thead",5)(8,"th",6),t._uU(9,"ID"),t.qZA(),t.TgZ(10,"th",6),t._uU(11,"Total"),t.qZA(),t.TgZ(12,"th",6),t._uU(13,"Status"),t.qZA()(),t.TgZ(14,"tbody"),t.YNc(15,m,9,7,"ng-container",7),t.YNc(16,v,3,0,"tr",8),t.YNc(17,f,3,0,"tr",8),t.qZA()()()()),2&n&&(t.xp6(5),t.Q6J("formControl",s.form),t.xp6(10),t.Q6J("ngForOf",null==s.devices?null:s.devices.data),t.xp6(1),t.Q6J("ngIf",0==(null==s.devices||null==s.devices.data?null:s.devices.data.length)),t.xp6(1),t.Q6J("ngIf",s.status==s.rawStatus.loading))},dependencies:[u.ez,u.mk,u.sg,u.O5,o.UX,o.Fj,o.JJ,o.oH]}),e})()},9564:(U,p,a)=>{a.d(p,{g:()=>b});var t=a(5619);const l={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let o;const g=new Uint8Array(16);function d(){if(!o&&(o=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!o))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(g)}const i=[];for(let e=0;e<256;++e)i.push((e+256).toString(16).slice(1));const v=function m(e,r,n){if(l.randomUUID&&!r&&!e)return l.randomUUID();const s=(e=e||{}).random||(e.rng||d)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,r){n=n||0;for(let c=0;c<16;++c)r[n+c]=s[c];return r}return function h(e,r=0){return(i[e[r+0]]+i[e[r+1]]+i[e[r+2]]+i[e[r+3]]+"-"+i[e[r+4]]+i[e[r+5]]+"-"+i[e[r+6]]+i[e[r+7]]+"-"+i[e[r+8]]+i[e[r+9]]+"-"+i[e[r+10]]+i[e[r+11]]+i[e[r+12]]+i[e[r+13]]+i[e[r+14]]+i[e[r+15]]).toLowerCase()}(s)};var f=a(6689);let b=(()=>{class e{constructor(){this.subject=new t.X([]),this.observable=this.subject.asObservable()}push(n){n.id=v();let s=this.subject.getValue();s.push(n),this.subject.next(s),setInterval(()=>this.delete(n.id),3e3)}delete(n){let c=this.subject.getValue().filter(Z=>Z.id!=n);this.subject.next(c)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=f.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);