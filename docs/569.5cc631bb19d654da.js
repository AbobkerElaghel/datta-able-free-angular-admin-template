"use strict";(self.webpackChunkdatta_able_free_angular_admin_template=self.webpackChunkdatta_able_free_angular_admin_template||[]).push([[569],{2208:(M,y,o)=>{o.d(y,{HH:()=>F,PE:()=>f,QJ:()=>v,UH:()=>i,VF:()=>e,Vy:()=>c,a8:()=>b,ez:()=>B,oz:()=>T});let c=[{value:!0,label:"\u0646\u0639\u0645"},{value:!1,label:"\u0644\u0627"}],v=[{value:"A",label:"\u0639\u0644\u064a\u0627"},{value:"B",label:"\u062a\u0646\u0641\u064a\u0630\u064a\u0647"},{value:"C",label:"\u0623\u0633\u0627\u0633\u064a\u0629"}],b=[{value:1,label:"\u0630\u0643\u0631"},{value:2,label:"\u0627\u0646\u062b\u064a"}],T=[{value:1,label:"\u0645\u0648\u0638\u0641"},{value:2,label:"\u0645\u062f\u064a\u0631 \u0625\u062f\u0627\u0631\u0629"},{value:3,label:"\u0631\u0626\u064a\u0633 \u0642\u0633\u0645"},{value:4,label:"\u0631\u0626\u064a\u0633 \u0648\u062d\u062f\u0629"},{value:5,label:"\u0645\u062f\u064a\u0631 \u0639\u0627\u0645"},{value:6,label:"\u0645\u062f\u064a\u0631 \u0645\u0643\u062a\u0628"}],f=[{value:1,label:"\u0645\u0645\u062a\u0627\u0632"},{value:2,label:"\u062c\u064a\u062f \u062c\u062f\u0627"},{value:3,label:"\u062c\u064a\u062f"},{value:4,label:"\u0645\u062a\u0648\u0633\u0637 "},{value:5,label:"\u0636\u0639\u064a\u0641 "},{value:6,label:"\u0625\u064a\u0641\u0627\u062f "},{value:7,label:"\u0644\u0627\u064a\u0648\u062c\u062f "}],i=[{value:1,label:"\u0623\u0639\u0632\u0628"},{value:2,label:"\u0645\u062a\u0632\u0648\u062c"},{value:3,label:"\u0645\u062a\u0632\u0648\u062c \u0648\u064a\u0639\u0648\u0644"}],e=[{value:1,label:"\u0645\u0646\u0633\u0628"},{value:2,label:"\u062a\u0639\u064a\u064a\u0646"},{value:3,label:"\u0625\u0639\u0627\u062f\u0629 \u062a\u0639\u064a\u064a\u0646"},{value:4,label:"\u0646\u0642\u0644"},{value:6,label:"\u062a\u0639\u064a\u064a\u0646 \u0628\u0645\u0648\u0627\u0641\u0642\u0629 \u0627\u0644\u0645\u0624\u0633\u0633\u0629"}],B=[{value:1,label:"\u062f\u0627\u062e\u0644"},{value:2,label:"\u062e\u0627\u0631\u062c"}],F=[{value:1,label:"\u0623\u0645"},{value:2,label:"\u0623\u0628"},{value:3,label:"\u0632\u0648\u062c\u0629_\u0632\u0648\u062c"},{value:4,label:"\u0627\u0628\u0646"},{value:5,label:"\u0627\u0628\u0646\u0629"}]},569:(M,y,o)=>{o.r(y),o.d(y,{BonusesTypesModule:()=>H});var c=o(177),v=o(8834),b=o(3719),T=o(9631),f=o(4823),i=o(9417),e=o(3953),B=o(1626),F=o(1441);let $=(()=>{class t{constructor(s,a){this.http=s,this.appConfig=a,this.url=this.appConfig.defaultUrl}AddBonusesTypes(s){return this.http.post(`${this.url}/api/BonusTypes/AddBonusType?culture=ar-LY`,s)}UpdateBonusesTypes(s){return this.http.put(`${this.url}/api/BonusTypes/UpdateBonusType?culture=ar-LY`,s)}DeleteBonusesTypes(s){return this.http.delete(`${this.url}/api/BonusTypes/DeleteBonusType?Id=${s}&culture=ar-LY`)}GetBonusesTypes(s){return this.http.get(`${this.url}/api/BonusTypes/GetBonusTypes?IsActive=${s}&culture=ar-LY`)}ActivateBonusesTypes(s,a){return this.http.put(`${this.url}/api/BonusTypes/ActiveDeActiveBonusType?Id=${s}&IsActive=${a}&culture=ar-LY`,null)}static#e=this.\u0275fac=function(a){return new(a||t)(e.KVO(B.Qq),e.KVO(F.o))};static#s=this.\u0275prov=e.jDH({token:t,factory:t.\u0275fac})}return t})();var A=o(9183),V=o(1786),E=o(4412),d=o(6496),h=o(8141),l=o(3471),g=o(1025),G=o(3197);let S=(()=>{class t{constructor(s,a){this.sharedFacade=s,this.bonusesTypesServices=a,this.BonusesTypeSubject$=new E.t([]),this.BonusesType$=this.BonusesTypeSubject$.asObservable()}deleteBonusesType(s){const a=this.bonusesTypesServices.DeleteBonusesTypes(s).pipe((0,h.M)(n=>{if(n.type==l.yl.Success){this.sharedFacade.showMessage(l.Go.success," \u062d\u0630\u0641 \u0646\u0648\u0639 \u0639\u0644\u0627\u0648\u0629",["\u062a\u0645 \u062d\u0630\u0641 \u0628\u0646\u062c\u0627\u062d"]);const r=this.BonusesTypeSubject$.getValue().filter(p=>p.id!=s);this.BonusesTypeSubject$.next(r),this.BonusesTypeSubject$.subscribe()}else this.sharedFacade.showMessage(l.Go.error,"\u0644\u0645 \u062a\u062a\u0645 \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u062d\u0630\u0641",n.messages)}),(0,d.t)());this.sharedFacade.showLoaderUntilCompleted(a).pipe().subscribe()}activateBonusesTypes(s,a){const n=this.bonusesTypesServices.ActivateBonusesTypes(s,a).pipe((0,h.M)(u=>{if(u.type==l.yl.Success){this.sharedFacade.showMessage(l.Go.success," \u062a\u063a\u064a\u064a\u0631 \u062d\u0627\u0644\u0629 \u0639\u0644\u0627\u0648\u0629",["\u062a\u0645 \u062a\u063a\u064a\u064a\u0631 \u062d\u0627\u0644\u0629 \u0628\u0646\u062c\u0627\u062d"]);const r=this.BonusesTypeSubject$.getValue();this.BonusesTypeSubject$.next((0,g.jM)(r,p=>{const j=p.findIndex(P=>P.id===s);p[j].isActive=a})),this.BonusesTypeSubject$.subscribe()}else this.sharedFacade.showMessage(l.Go.error,"\u0644\u0645 \u062a\u062a\u0645 \u0639\u0645\u0644\u064a\u0629 \u0628\u0646\u062c\u0627\u062d",u.messages)}),(0,d.t)());this.sharedFacade.showLoaderUntilCompleted(n).pipe().subscribe()}GetBonusesType(){const s=this.bonusesTypesServices.GetBonusesTypes(0).pipe((0,h.M)(a=>{a.type==l.yl.Success?this.BonusesTypeSubject$.next(a.content):(this.BonusesTypeSubject$.next([]),this.sharedFacade.showMessage(l.Go.error,"\u062e\u0637\u0623 \u0641\u064a \u0639\u0645\u0644\u064a\u0629 \u062c\u0644\u0628 \u0627\u0644\u0639\u0644\u0627\u0648\u0627\u062a",a.messages))}),(0,d.t)());this.sharedFacade.showLoaderUntilCompleted(s).pipe().subscribe()}AddBonusesType(s){const a=this.bonusesTypesServices.AddBonusesTypes(s).pipe((0,h.M)(n=>{if(n.type==l.yl.Success){this.sharedFacade.showMessage(l.Go.success,"\u062a\u0645\u062a \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0628\u0646\u062c\u0627\u062d",n.messages);const u=this.BonusesTypeSubject$.getValue();this.BonusesTypeSubject$.next((0,g.jM)(u,r=>{s.id=n.content,r.unshift(s)}))}else this.sharedFacade.showMessage(l.Go.error,"\u0644\u0645 \u062a\u062a\u0645 \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u0625\u0636\u0627\u0641\u0629",n.messages)}),(0,d.t)());this.sharedFacade.showLoaderUntilCompleted(a).pipe().subscribe()}UpdateBonusesType(s){const a=this.bonusesTypesServices.UpdateBonusesTypes(s).pipe((0,h.M)(n=>{if(n.type==l.yl.Success){this.sharedFacade.showMessage(l.Go.success,"\u062a\u0645 \u062a\u0639\u062f\u064a\u0644 \u0628\u0646\u062c\u0627\u062d",n.messages);const u=this.BonusesTypeSubject$.getValue();this.BonusesTypeSubject$.next((0,g.jM)(u,r=>{const p=r.findIndex(j=>j.id===s.id);r[p]=s})),this.BonusesTypeSubject$.subscribe()}else this.sharedFacade.showMessage(l.Go.error,"\u0644\u0645 \u062a\u062a\u0645 \u0639\u0645\u0644\u064a\u0629 \u062a\u0639\u062f\u064a\u0644",n.messages)}),(0,d.t)());this.sharedFacade.showLoaderUntilCompleted(a).pipe().subscribe()}static#e=this.\u0275fac=function(a){return new(a||t)(e.KVO(G.I),e.KVO($))};static#s=this.\u0275prov=e.jDH({token:t,factory:t.\u0275fac})}return t})();var C=o(7062),k=o(2208),R=o(2016),x=o(2702),I=o(9947);function D(t,m){if(1&t&&(e.j41(0,"option",19),e.EFF(1),e.k0s()),2&t){const s=m.$implicit;e.Y8G("value",s.value),e.R7$(),e.SpI("",s.label," ")}}function U(t,m){if(1&t){const s=e.RV6();e.j41(0,"a",24),e.bIt("click",function(){e.eBV(s);const n=e.XpG().$implicit,u=e.XpG();return e.Njj(u.activateBonusesType(n))}),e.j41(1,"i",25),e.EFF(2,"close"),e.k0s()()}}function Y(t,m){if(1&t){const s=e.RV6();e.j41(0,"a",24),e.bIt("click",function(){e.eBV(s);const n=e.XpG().$implicit,u=e.XpG();return e.Njj(u.activateBonusesType(n))}),e.j41(1,"i",26),e.EFF(2,"check"),e.k0s()()}}function O(t,m){if(1&t){const s=e.RV6();e.j41(0,"tr")(1,"td"),e.EFF(2),e.k0s(),e.j41(3,"td",20)(4,"a",21),e.bIt("click",function(){const n=e.eBV(s).$implicit,u=e.XpG();return e.Njj(u.onEdit(n))}),e.j41(5,"i",22),e.EFF(6,"edit"),e.k0s()(),e.DNE(7,U,3,0,"a",23)(8,Y,3,0,"a",23),e.k0s()()}if(2&t){const s=m.$implicit;e.R7$(2),e.SpI('"',s.name,'"'),e.R7$(5),e.Y8G("ngIf",1==s.isActive),e.R7$(),e.Y8G("ngIf",0==s.isActive)}}const N=[{path:"",component:(()=>{class t{constructor(s,a,n){this.fb=s,this.bonusesTypesFacade=a,this.sharedFacade=n,this.edit=!1,this.registerForm=this.fb.group({id:[""],name:["",i.k0.required],isFamilyBonuse:["",i.k0.required]}),this.optionsBooleanGeneral=k.Vy,this.onSubmit()}ngOnInit(){this.edit=!1}ngOnDestroy(){}onSubmit(){this.registerForm.controls.id.setValue(""),this.bonusesTypesFacade.GetBonusesType()}onDelete(s){this.edit=!1,this.bonusesTypesFacade.deleteBonusesType(s),this.registerForm.reset()}activateBonusesType(s){this.bonusesTypesFacade.activateBonusesTypes(s.id,!s.isActive),this.registerForm.reset()}onReset(){this.edit=!1,this.registerForm.reset(),this.registerForm.setErrors(null)}onAdd(){if(this.registerForm.valid)this.edit?(this.bonusesTypesFacade.UpdateBonusesType(this.registerForm?.value),this.onReset()):(this.bonusesTypesFacade.AddBonusesType(this.registerForm?.value),this.onReset());else{if(""==this.registerForm.value.name||this.registerForm.controls.name.invalid)return void this.sharedFacade.showMessage(l.Go.warning,"\u0639\u0641\u0648\u0627\u064b\u060c \u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u062f\u062e\u0627\u0644 \u0627\u0633\u0645 \u0627\u0644\u0639\u0644\u0627\u0648\u0629 ",[""]);if(this.registerForm.controls.isFamilyBonuse.invalid)return void this.sharedFacade.showMessage(l.Go.warning,"\u0639\u0641\u0648\u0627\u064b\u060c \u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u062f\u062e\u0627\u0644 \u0639\u0644\u0627\u0648\u0629 \u0639\u0627\u0626\u0644\u0629",[""])}}onEdit(s){this.registerForm.patchValue(s),this.edit=!0}static#e=this.\u0275fac=function(a){return new(a||t)(e.rXU(i.ok),e.rXU(S),e.rXU(G.I))};static#s=this.\u0275cmp=e.VBU({type:t,selectors:[["app-rewards-types"]],decls:34,vars:6,consts:[[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-body"],["action","javascript:",1,"row","g-3","align-items-center",3,"formGroup"],[1,"col-md-3"],["for","inlineFormInputName"],["type","text","required","","formControlName","name","id","inlineFormInputName",1,"form-control"],["formControlName","isFamilyBonuse","required","","aria-label","select example",1,"form-select"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],[1,"col-12"],["type","button",1,"btn","btn-md","btn-themeAdd","has-ripple",3,"click"],["type","button",1,"btn","btn-md","btn-themeNew","has-ripple",3,"click"],[1,"col-xl-12"],["cardTitle","\u0627\u0644\u0639\u0644\u0627\u0648\u0627\u062a","blockClass","table-border-style",3,"options"],[1,"table-responsive"],[1,"table","table-striped","table-hover"],[4,"ngFor","ngForOf"],[3,"value"],[1,"td-actions"],["mat-button","","type","button","aria-hidden","true","data-notify","dismiss",1,"edit","mat-button",3,"click"],[1,"material-icons","text-warning"],["mat-button","","type","button","aria-hidden","true","class","close mat-button","data-notify","dismiss",3,"click",4,"ngIf"],["mat-button","","type","button","aria-hidden","true","data-notify","dismiss",1,"close","mat-button",3,"click"],[1,"material-icons","text-danger"],[1,"material-icons","text-success"]],template:function(a,n){1&a&&(e.j41(0,"div",0),e.nrm(1,"app-loading")(2,"app-messages"),e.j41(3,"div",1)(4,"div",2)(5,"div",3)(6,"form",4)(7,"div",5)(8,"label",6),e.EFF(9,"\u0627\u0633\u0645 \u0627\u0644\u0639\u0644\u0627\u0648\u0629"),e.k0s(),e.nrm(10,"input",7),e.k0s(),e.j41(11,"div",5)(12,"label"),e.EFF(13,"\u0639\u0644\u0627\u0648\u0629 \u0639\u0627\u0626\u0644\u0629"),e.k0s(),e.j41(14,"select",8)(15,"option",9),e.EFF(16,"\u0627\u062e\u062a\u0631 ..."),e.k0s(),e.DNE(17,D,2,2,"option",10),e.k0s()(),e.j41(18,"div",11)(19,"button",12),e.bIt("click",function(){return n.onAdd()}),e.EFF(20,"\u062d\u0641\u0638"),e.k0s(),e.j41(21,"button",13),e.bIt("click",function(){return n.onReset()}),e.EFF(22,"\u062c\u062f\u064a\u062f"),e.k0s()()()()()(),e.j41(23,"div",14)(24,"app-card",15)(25,"div",16)(26,"table",17)(27,"thead")(28,"th"),e.EFF(29,"\u0627\u0633\u0645 \u0627\u0644\u0639\u0644\u0627\u0648\u0629"),e.k0s(),e.nrm(30,"th"),e.k0s(),e.j41(31,"tbody"),e.DNE(32,O,9,3,"tr",18),e.nI1(33,"async"),e.k0s()()()()()()),2&a&&(e.R7$(6),e.Y8G("formGroup",n.registerForm),e.R7$(11),e.Y8G("ngForOf",n.optionsBooleanGeneral),e.R7$(7),e.Y8G("options",!1),e.R7$(8),e.Y8G("ngForOf",e.bMT(33,4,n.bonusesTypesFacade.BonusesType$)))},dependencies:[c.Sq,c.bT,v.It,i.qT,i.xH,i.y7,i.me,i.wz,i.BC,i.cb,i.YS,i.j4,i.JD,R.q,x.y,I.i,c.Jj]})}return t})(),data:{breadcrumb:"\u0627\u0646\u0648\u0627\u0639 \u0627\u0644\u0639\u0644\u0627\u0648\u0627\u062a"}}];let L=(()=>{class t{static#e=this.\u0275fac=function(a){return new(a||t)};static#s=this.\u0275mod=e.$C({type:t});static#t=this.\u0275inj=e.G2t({imports:[C.iI.forChild(N),C.iI]})}return t})();var X=o(6600),w=o(2798);let H=(()=>{class t{static#e=this.\u0275fac=function(a){return new(a||t)};static#s=this.\u0275mod=e.$C({type:t});static#t=this.\u0275inj=e.G2t({providers:[S,$],imports:[c.MD,v.Hl,b.RG,T.fS,f.uc,i.X1,L,A.D6,V.G,X.Sy,w.Ve,I.i]})}return t})()}}]);