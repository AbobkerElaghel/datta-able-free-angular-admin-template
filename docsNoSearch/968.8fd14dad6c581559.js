"use strict";(self.webpackChunkdatta_able_free_angular_admin_template=self.webpackChunkdatta_able_free_angular_admin_template||[]).push([[968],{2356:(M,g,t)=>{t.d(g,{n:()=>h});var p=t(4412),m=t(6496),s=t(8141),a=t(3471),e=t(1025),v=t(3953),u=t(3197),c=t(5842);let h=(()=>{class E{constructor(l,i){this.sharedFacade=l,this.EmployeesServices=i,this.employeeSubject$=new p.t([]),this.employee$=this.employeeSubject$.asObservable(),this.employeePageSubject$=new p.t([]),this.employeePage$=this.employeePageSubject$.asObservable()}deleteEmployee(l){const i=this.EmployeesServices.DeleteEmployee(l).pipe((0,s.M)(d=>{if(d.type==a.yl.Success){this.sharedFacade.showMessage(a.Go.success," \u062d\u0630\u0641 \u0645\u0633\u062a\u062e\u062f\u0645",["\u062a\u0645 \u062d\u0630\u0641 \u0628\u0646\u062c\u0627\u062d"]);const f=this.employeeSubject$.getValue().filter(b=>b.id!=l);this.employeeSubject$.next(f),this.employeeSubject$.subscribe()}else this.sharedFacade.showMessage(a.Go.error,"\u0644\u0645 \u062a\u062a\u0645 \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u062d\u0630\u0641",d.messages)}),(0,m.t)());this.sharedFacade.showLoaderUntilCompleted(i).pipe().subscribe()}GetEmployee(){const l=this.EmployeesServices.GetEmployee().pipe((0,s.M)(i=>{i.type==a.yl.Success?this.employeeSubject$.next(i.content):(this.employeeSubject$.next([]),this.sharedFacade.showMessage(a.Go.error,"\u062e\u0637\u0623 \u0641\u064a \u0639\u0645\u0644\u064a\u0629 \u062c\u0644\u0628 \u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646",i.messages))}),(0,m.t)());this.sharedFacade.showLoaderUntilCompleted(l).pipe().subscribe()}GetEmployeePage(l,i){const d=this.EmployeesServices.GetEmployeePage(l,i).pipe((0,s.M)(F=>{F.type==a.yl.Success?this.employeePageSubject$.next(F.content):(this.employeePageSubject$.next([]),this.sharedFacade.showMessage(a.Go.error,"\u062e\u0637\u0623 \u0641\u064a \u0639\u0645\u0644\u064a\u0629 \u062c\u0644\u0628 \u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646",F.messages))}),(0,m.t)());this.sharedFacade.showLoaderUntilCompleted(d).pipe().subscribe()}UpdateEmployee(l){const i=this.EmployeesServices.UpdateEmployee(l).pipe((0,s.M)(d=>{if(d.type==a.yl.Success){this.sharedFacade.showMessage(a.Go.success,"\u062a\u0645 \u062a\u0639\u062f\u064a\u0644 \u0628\u0646\u062c\u0627\u062d",d.messages);const F=this.employeeSubject$.getValue();this.employeeSubject$.next((0,e.jM)(F,f=>{const b=f.findIndex($=>$.id===l.id);f[b]=l})),this.employeeSubject$.subscribe()}else this.sharedFacade.showMessage(a.Go.error,"\u0644\u0645 \u062a\u062a\u0645 \u0639\u0645\u0644\u064a\u0629 \u062a\u0639\u062f\u064a\u0644",d.messages)}),(0,m.t)());this.sharedFacade.showLoaderUntilCompleted(i).pipe().subscribe()}static#e=this.\u0275fac=function(i){return new(i||E)(v.KVO(u.I),v.KVO(c.v))};static#t=this.\u0275prov=v.jDH({token:E,factory:E.\u0275fac})}return E})()},6968:(M,g,t)=>{t.r(g),t.d(g,{EmployeeModule:()=>N});var p=t(177),m=t(7062),s=t(9417),a=t(3471),e=t(3953),v=t(2356),u=t(3197),c=t(2016),h=t(2702),E=t(9947),P=t(8834);function l(r,C){if(1&r&&(e.j41(0,"option",21),e.EFF(1),e.k0s()),2&r){const o=C.$implicit;e.Y8G("value",o.name),e.R7$(),e.SpI("",o.name," ")}}function i(r,C){if(1&r){const o=e.RV6();e.j41(0,"tr")(1,"td"),e.EFF(2),e.k0s(),e.j41(3,"td"),e.EFF(4),e.k0s(),e.j41(5,"td"),e.EFF(6),e.k0s(),e.j41(7,"td"),e.EFF(8),e.k0s(),e.j41(9,"td"),e.EFF(10),e.k0s(),e.j41(11,"td"),e.EFF(12),e.k0s(),e.j41(13,"td",22)(14,"a",23),e.bIt("click",function(){const y=e.eBV(o).$implicit,j=e.XpG();return e.Njj(j.onDelete(y.id))}),e.j41(15,"i",24),e.EFF(16,"close"),e.k0s()()()()}if(2&r){const o=C.$implicit;e.R7$(2),e.JRh(o.employeeCode),e.R7$(2),e.JRh(o.positionCode),e.R7$(2),e.JRh(o.name),e.R7$(2),e.JRh(o.nameEn),e.R7$(2),e.JRh(o.phoneNumber),e.R7$(2),e.JRh(o.financialNumber)}}const F=[{path:"",component:(()=>{class r{constructor(o,n,y,j){this.employeeFacade=o,this.fb=n,this.sharedFacade=y,this.cdr=j,this.edit=!1,this.phoneNumberPattern="[0][9]{1}[1,2,4,3,5]{1}[0-9]{7}",this.registerForm=this.fb.group({searchType:["",s.k0.required],value:["",s.k0.required],code:[""],phoneNumber:["",[s.k0.minLength(10),s.k0.maxLength(10),s.k0.pattern(this.phoneNumberPattern)]],employeeName:[""]}),this.onSubmit()}ngOnInit(){this.edit=!1}onSubmit(){this.employeeFacade.GetEmployeePage("",""),this.employeeFacade.GetEmployee()}onDelete(o){this.edit=!1,this.employeeFacade.deleteEmployee(o),this.registerForm.reset()}onReset(){this.registerForm.reset(),this.registerForm.setErrors(null),this.employeeFacade.GetEmployeePage("","")}onSearch(){""!=this.registerForm.value.code&&null!=this.registerForm.value.code||""!=this.registerForm.value.employeeName&&null!=this.registerForm.value.employeeName||""!=this.registerForm.value.phoneNumber&&null!=this.registerForm.value.phoneNumber?this.registerForm.controls.phoneNumber.invalid&&""!=this.registerForm.value.phoneNumber&&null!=this.registerForm.value.phoneNumber?this.sharedFacade.showMessage(a.Go.warning,"\u0639\u0641\u0648\u0627\u064b\u060c \u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u062f\u062e\u0627\u0644  \u0631\u0642\u0645 \u0647\u0627\u062a\u0641 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0628\u0635\u064a\u063a\u0629 \u0635\u062d\u064a\u062d\u0629  ",[""]):(this.employeeFacade.GetEmployeePage(""!=this.registerForm.controls.employeeName.value&&null!=this.registerForm.controls.employeeName.value?"2":""!=this.registerForm.controls.code.value&&null!=this.registerForm.controls.code.value?"1":"3",""!=this.registerForm.controls.employeeName.value&&null!=this.registerForm.controls.employeeName.value?this.registerForm.value.employeeName:""!=this.registerForm.controls.code.value&&null!=this.registerForm.controls.code.value?this.registerForm.value.code:this.registerForm.value.phoneNumber),this.cdr.detectChanges()):this.sharedFacade.showMessage(a.Go.warning,"\u0639\u0641\u0648\u0627\u064b\u060c \u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u062f\u062e\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0644\u0644\u0628\u062d\u062b   ",[""])}static#e=this.\u0275fac=function(n){return new(n||r)(e.rXU(v.n),e.rXU(s.ok),e.rXU(u.I),e.rXU(e.gRc))};static#t=this.\u0275cmp=e.VBU({type:r,selectors:[["app-employee"]],decls:52,vars:8,consts:[[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-body"],["action","javascript:",3,"formGroup"],[1,"col-md-2"],["formControlName","employeeName","required","","aria-label","select example",1,"form-select"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["type","text","required","","formControlName","code","id","employeeCode",1,"form-control"],[1,"col-md-3"],["type","text","required","","formControlName","phoneNumber","id","phoneNumber",1,"form-control"],[1,"col-md-3","align-self-end"],["type","button",1,"btn","btn-outline-info",3,"click"],[1,"feather","icon-info"],["type","button",1,"btn","btn-md","btn-themeNew","has-ripple",3,"click"],[1,"col-xl-12"],["cardTitle","\u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646 ","blockClass","table-border-style",3,"options"],[1,"table-responsive"],[1,"table","table-striped","table-hover"],[4,"ngFor","ngForOf"],[3,"value"],[1,"td-actions","text-right"],["mat-button","","type","button","aria-hidden","true","data-notify","dismiss",1,"close","mat-button",3,"click"],[1,"material-icons","text-danger"]],template:function(n,y){1&n&&(e.j41(0,"div",0),e.nrm(1,"app-loading")(2,"app-messages"),e.j41(3,"div",1)(4,"div",2)(5,"div",3)(6,"form",4)(7,"div",0)(8,"div",5)(9,"label"),e.EFF(10," \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645"),e.k0s(),e.j41(11,"select",6)(12,"option",7),e.EFF(13,"\u0627\u062e\u062a\u0631 ..."),e.k0s(),e.DNE(14,l,2,2,"option",8),e.nI1(15,"async"),e.k0s()(),e.j41(16,"div",5)(17,"label"),e.EFF(18," \u0631\u0642\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645"),e.k0s(),e.nrm(19,"input",9),e.k0s(),e.j41(20,"div",10)(21,"label"),e.EFF(22," \u0631\u0642\u0645 \u0647\u0627\u062a\u0641 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645"),e.k0s(),e.nrm(23,"input",11),e.k0s(),e.j41(24,"div",12)(25,"button",13),e.bIt("click",function(){return y.onSearch()}),e.EFF(26," \u0628\u062d\u062b "),e.nrm(27,"i",14),e.k0s()()()(),e.nrm(28,"br"),e.j41(29,"button",15),e.bIt("click",function(){return y.onReset()}),e.EFF(30,"\u062c\u062f\u064a\u062f"),e.k0s()()()(),e.j41(31,"div",16)(32,"app-card",17)(33,"div",18)(34,"table",19)(35,"thead")(36,"th"),e.EFF(37,"\u0631\u0645\u0632 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645"),e.k0s(),e.j41(38,"th"),e.EFF(39,"\u0631\u0642\u0645 \u0627\u0644\u0648\u0638\u064a\u0641\u0629"),e.k0s(),e.j41(40,"th"),e.EFF(41,"\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064a"),e.k0s(),e.j41(42,"th"),e.EFF(43,"\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0628\u0627\u0644\u0627\u0646\u062c\u0644\u064a\u0632\u064a"),e.k0s(),e.j41(44,"th"),e.EFF(45,"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641"),e.k0s(),e.j41(46,"th"),e.EFF(47,"\u0631\u0642\u0645 \u0627\u0644\u0645\u0627\u0644\u064a"),e.k0s(),e.nrm(48,"th"),e.k0s(),e.j41(49,"tbody"),e.DNE(50,i,17,6,"tr",20),e.nI1(51,"async"),e.k0s()()()()()()),2&n&&(e.R7$(6),e.Y8G("formGroup",y.registerForm),e.R7$(8),e.Y8G("ngForOf",e.bMT(15,4,y.employeeFacade.employee$)),e.R7$(18),e.Y8G("options",!1),e.R7$(18),e.Y8G("ngForOf",e.bMT(51,6,y.employeeFacade.employeePage$)))},dependencies:[p.Sq,s.qT,s.xH,s.y7,s.me,s.wz,s.BC,s.cb,s.YS,s.j4,s.JD,c.q,h.y,E.i,P.It,p.Jj]})}return r})(),data:{breadcrumb:"\u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646"}}];let f=(()=>{class r{static#e=this.\u0275fac=function(n){return new(n||r)};static#t=this.\u0275mod=e.$C({type:r});static#s=this.\u0275inj=e.G2t({imports:[m.iI.forChild(F),m.iI]})}return r})();var b=t(5842),$=t(1786),D=t(3719),R=t(9631),O=t(9183),G=t(6600),S=t(2798);let N=(()=>{class r{static#e=this.\u0275fac=function(n){return new(n||r)};static#t=this.\u0275mod=e.$C({type:r});static#s=this.\u0275inj=e.G2t({providers:[v.n,b.v],imports:[p.MD,f,s.X1,$.G,D.RG,E.i,P.Hl,R.fS,O.D6,G.Sy,S.Ve]})}return r})()},5842:(M,g,t)=>{t.d(g,{v:()=>a});var p=t(1626),m=t(3953),s=t(1441);let a=(()=>{class e{constructor(u,c){this.http=u,this.appConfig=c,this.url=this.appConfig.defaultUrl}UpdateEmployee(u){return this.http.put(`${this.url}/api/Employee/UpdateEmployee?culture=ar-LY`,u)}DeleteEmployee(u){return this.http.delete(`${this.url}/api/Employee/DeleteEmployee?Id=${u}&culture=ar-LY`)}GetEmployeePage(u,c){let h=(new p.Nl).set("culture","ar-LY");return""!=u&&null!=u&&""!=c&&null!=c&&(h=h.set("SearchType",u),h=h.set("Value",c)),this.http.get(`${this.url}/api/Employee/GetAllEmployee`,{params:h})}GetEmployee(){return this.http.get(`${this.url}/api/Employee/GetEmployees?culture=ar-LY`)}static#e=this.\u0275fac=function(c){return new(c||e)(m.KVO(p.Qq),m.KVO(s.o))};static#t=this.\u0275prov=m.jDH({token:e,factory:e.\u0275fac})}return e})()}}]);
