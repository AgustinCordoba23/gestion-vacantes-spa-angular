"use strict";(self.webpackChunkentornos_spa=self.webpackChunkentornos_spa||[]).push([[566],{3566:(X,_,l)=>{l.r(_),l.d(_,{UsuariosModule:()=>$});var h=l(9808),p=l(1083),C=l(5861),a=l(3075),t=l(5e3),x=l(2803),T=l(6518),b=l(3949),v=l(3686),Z=l(4834),u=l(7322),P=l(7531),w=l(7423),M=l(5245);let A=(()=>{class n{constructor(o,e,r,s){this.snackBar=o,this.authService=e,this.apiService=r,this.router=s,this.hidePassword=!0,this.hideConfirmPassword=!0}ngOnInit(){this.setForm()}setForm(){this.authService.getCurrentUser().then(o=>{this.form=new a.cw({nombre:new a.NI(o.nombre),email:new a.NI(o.email),password:new a.NI(""),confirmarPassword:new a.NI(""),rol:new a.NI(o.rol_relacion.nombre)})})}submit(){var o=this;return(0,C.Z)(function*(){var e,r,s,m;(null===(e=o.form.get("password"))||void 0===e?void 0:e.value)==(null===(r=o.form.get("confirmarPassword"))||void 0===r?void 0:r.value)?(null===(s=o.form.get("password"))||void 0===s?void 0:s.value.length)<6?o.snackBar.show("La contrase\xf1a debe tener m\xe1s de 6 caracteres."):(yield o.apiService.post("/cambiar-password",{nueva_password:null===(m=o.form.get("password"))||void 0===m?void 0:m.value}),o.snackBar.show("Cambios guardados con \xe9xito."),o.router.navigateByUrl("/")):o.snackBar.show("Las contrase\xf1as no coinciden.")})()}volver(){this.router.navigateByUrl("/")}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(x.c),t.Y36(T.e),t.Y36(b.s),t.Y36(p.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-editar"]],decls:47,vars:6,consts:[[1,"pagina"],[1,"contenido"],[1,"titulo"],[1,"form-box",3,"formGroup","autocomplete","ngSubmit"],["appearance","fill"],["for","nombre","hidden",""],["id","nombre","name","nombre","formControlName","nombre","matInput","","readonly",""],["for","email","hidden",""],["id","email","name","email","formControlName","email","matInput","","readonly",""],["appearance","outline"],["for","nueva-password","hidden",""],["id","nueva-password","name","nueva-password","formControlName","password","matInput","","required","",3,"type"],["mat-icon-button","","matSuffix","","type","button",3,"click"],["alt","icono-password"],["for","confirmar-nueva-password","hidden",""],["id","confirmar-nueva-password","name","confirmar-nueva-password","formControlName","confirmarPassword","matInput","","required","",3,"type"],["for","rol","hidden",""],["id","rol","name","rol","formControlName","rol","matInput","","readonly",""],["type","submit",1,"submit-button"],["type","button",1,"volver-button",3,"click"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"app-menu"),t.TgZ(2,"div",1)(3,"span",2),t._uU(4,"Mi cuenta"),t.qZA(),t._UZ(5,"mat-divider"),t.TgZ(6,"form",3),t.NdJ("ngSubmit",function(){return e.submit()}),t.TgZ(7,"mat-form-field",4)(8,"mat-label"),t._uU(9,"Nombre completo"),t.qZA(),t.TgZ(10,"label",5),t._uU(11,"Nombre completo"),t.qZA(),t._UZ(12,"input",6),t.qZA(),t.TgZ(13,"mat-form-field",4)(14,"mat-label"),t._uU(15,"Email"),t.qZA(),t.TgZ(16,"label",7),t._uU(17,"Email"),t.qZA(),t._UZ(18,"input",8),t.qZA(),t.TgZ(19,"mat-form-field",9)(20,"mat-label"),t._uU(21,"Nueva contrase\xf1a"),t.qZA(),t.TgZ(22,"label",10),t._uU(23,"Nueva contrase\xf1a"),t.qZA(),t._UZ(24,"input",11),t.TgZ(25,"button",12),t.NdJ("click",function(){return e.hidePassword=!e.hidePassword}),t.TgZ(26,"mat-icon",13),t._uU(27),t.qZA()()(),t.TgZ(28,"mat-form-field",9)(29,"mat-label"),t._uU(30,"Confirmar nueva contrase\xf1a"),t.qZA(),t.TgZ(31,"label",14),t._uU(32,"Confirmar nueva contrase\xf1a"),t.qZA(),t._UZ(33,"input",15),t.TgZ(34,"button",12),t.NdJ("click",function(){return e.hideConfirmPassword=!e.hideConfirmPassword}),t.TgZ(35,"mat-icon",13),t._uU(36),t.qZA()()(),t.TgZ(37,"mat-form-field",4)(38,"mat-label"),t._uU(39,"Rol"),t.qZA(),t.TgZ(40,"label",16),t._uU(41,"Rol"),t.qZA(),t._UZ(42,"input",17),t.qZA(),t.TgZ(43,"button",18),t._uU(44," Guardar Cambios "),t.qZA(),t.TgZ(45,"button",19),t.NdJ("click",function(){return e.volver()}),t._uU(46," Volver "),t.qZA()()()()),2&o&&(t.xp6(6),t.Q6J("formGroup",e.form)("autocomplete",!1),t.xp6(18),t.Q6J("type",e.hidePassword?"password":"text"),t.xp6(3),t.Oqu(e.hidePassword?"visibility_off":"visibility"),t.xp6(6),t.Q6J("type",e.hideConfirmPassword?"password":"text"),t.xp6(3),t.Oqu(e.hidePassword?"visibility_off":"visibility"))},directives:[v.M,Z.d,a._Y,a.JL,a.sg,u.KE,u.hX,a.Fj,P.Nt,a.JJ,a.u,a.Q7,w.lW,u.R9,M.Hw],styles:[".pagina[_ngcontent-%COMP%]{display:flex;flex-direction:row}.pagina[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}.pagina[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]{margin-left:50px;font-weight:400;font-size:40px;line-height:118.9%;color:#666;margin-top:50px;margin-bottom:45px}.pagina[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%]{border-top-color:#a6aac780}.pagina[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin-left:50px;margin-top:50px;display:flex;flex-direction:column;gap:13px}.pagina[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:360px;height:40px;margin-bottom:25px}.pagina[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .mat-form-field-underline{display:none}.pagina[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]{width:360px;height:40px;background:linear-gradient(180deg,#1A7F9D 0%,#019234 100%);border-radius:8px;border:0;margin-bottom:10px;font-weight:700;font-size:14px;line-height:140%;color:#fff;cursor:pointer}.pagina[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .volver-button[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-content:center;justify-content:center;align-items:center;gap:10px;width:360px;height:40px;background:#0A3066;border-radius:8px;border:0;margin-bottom:10px;font-weight:700;font-size:14px;line-height:140%;color:#fff;cursor:pointer}"]}),n})();var O=l(9062),c=l(4999),U=l(4107),N=l(508);function y(n,i){1&n&&(t.TgZ(0,"th",28),t._uU(1,"Nombre Completo"),t.qZA())}function L(n,i){if(1&n&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&n){const o=i.$implicit;t.xp6(1),t.hij(" ",o.nombre," ")}}function q(n,i){1&n&&(t.TgZ(0,"th",28),t._uU(1,"Email"),t.qZA())}function J(n,i){if(1&n&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&n){const o=i.$implicit;t.xp6(1),t.hij(" ",o.email," ")}}function I(n,i){1&n&&(t.TgZ(0,"th",28),t._uU(1,"Rol"),t.qZA())}function E(n,i){if(1&n&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&n){const o=i.$implicit;t.xp6(1),t.hij(" ",o.rol," ")}}function S(n,i){1&n&&(t.TgZ(0,"th",28),t._uU(1,"Estado"),t.qZA())}function F(n,i){if(1&n&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&n){const o=i.$implicit;t.xp6(1),t.hij(" ",o.estado," ")}}function D(n,i){1&n&&(t.TgZ(0,"th",28),t._uU(1,"Acciones"),t.qZA())}function Q(n,i){if(1&n){const o=t.EpF();t.TgZ(0,"button",32),t.NdJ("click",function(){t.CHM(o);const r=t.oxw().$implicit;return t.oxw().cambiarEstado("deshabilitar",r.id)}),t._uU(1,"DESHABILITAR"),t.qZA()}}function B(n,i){if(1&n){const o=t.EpF();t.TgZ(0,"button",33),t.NdJ("click",function(){t.CHM(o);const r=t.oxw().$implicit;return t.oxw().cambiarEstado("habilitar",r.id)}),t._uU(1,"HABILITAR"),t.qZA()}}function R(n,i){if(1&n&&(t.TgZ(0,"td",29),t.YNc(1,Q,2,0,"button",30),t.YNc(2,B,2,0,"button",31),t.qZA()),2&n){const o=i.$implicit;t.xp6(1),t.Q6J("ngIf","HABILITADO"==o.estado),t.xp6(1),t.Q6J("ngIf","HABILITADO"!=o.estado)}}function k(n,i){1&n&&t._UZ(0,"tr",34)}function Y(n,i){1&n&&t._UZ(0,"tr",35)}const z=function(){return[5,10,15,20]},H=[{path:"",pathMatch:"full",component:(()=>{class n{constructor(o){this.apiService=o,this.columnas=["Nombre Completo","Email","Rol","Estado","Acciones"],this.usuarios=[]}ngOnInit(){this.setForm(),this.setListado({}),this.paginator._intl.itemsPerPageLabel="Registros por p\xe1gina"}setForm(){this.form=new a.cw({nombre:new a.NI,rol:new a.NI,estado:new a.NI})}setListado(o){var e=this;return(0,C.Z)(function*(){e.usuarios=[],(yield e.apiService.getData("/usuarios/listar",{filtros:o})).forEach(s=>{0!=s.rol&&e.usuarios.push({id:s.id,nombre:s.nombre,email:s.email,rol:1==s.rol?"Jefe de C\xe1tedra":2==s.rol?"Responsable Administrativo":"Usuario",estado:s.estado})}),e.dataSource=new c.by(e.usuarios),e.dataSource.paginator=e.paginator})()}filtrar(){var o,e,r,s,m,g,f;let d={};(null===(o=this.form.get("nombre"))||void 0===o?void 0:o.value)&&(d.nombre=null===(e=this.form.get("nombre"))||void 0===e?void 0:e.value),(null===(r=this.form.get("rol"))||void 0===r?void 0:r.value)&&(d.rol=null===(s=this.form.get("rol"))||void 0===s?void 0:s.value),(null===(m=this.form.get("estado"))||void 0===m?void 0:m.value)&&(d.estado=1==(null===(g=this.form.get("estado"))||void 0===g?void 0:g.value)?"HABILITADO":2==(null===(f=this.form.get("estado"))||void 0===f?void 0:f.value)?"PENDIENTE":"DESHABILITADO"),this.setListado(d)}limpiar(){this.setListado({}),this.form.controls.nombre.setValue(null),this.form.controls.rol.setValue(null),this.form.controls.estado.setValue(null)}cambiarEstado(o,e){this.apiService.post(`/usuarios/${e}/${o}`,{}),this.limpiar()}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(b.s))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-listar"]],viewQuery:function(o,e){if(1&o&&t.Gf(O.NW,7),2&o){let r;t.iGM(r=t.CRH())&&(e.paginator=r.first)}},decls:67,vars:14,consts:[[1,"pagina"],[1,"contenido"],[1,"titulo"],[1,"container-filtros"],[1,"titulo-filtros"],["alt","filtrar"],[3,"formGroup","autocomplete","ngSubmit"],["appearance","outline"],["for","nombre","hidden",""],["id","nombre","name","nombre","formControlName","nombre","matInput",""],["for","rol","hidden",""],["title","rol","name","rol","id","rol","formControlName","rol"],[3,"value"],["for","estado","hidden",""],["id","estado","name","estado","formControlName","estado"],["type","submit",1,"filtrar-button"],["type","button",1,"limpiar-button",3,"click"],["mat-table","",3,"dataSource"],["matColumnDef","Nombre Completo"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Email"],["matColumnDef","Rol"],["matColumnDef","Estado"],["matColumnDef","Acciones"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions","pageSize"],["mat-header-cell",""],["mat-cell",""],["class","button-deshabilitar",3,"click",4,"ngIf"],["class","button-habilitar",3,"click",4,"ngIf"],[1,"button-deshabilitar",3,"click"],[1,"button-habilitar",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(o,e){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"app-menu"),t.TgZ(2,"div",1)(3,"span",2),t._uU(4,"Gestionar Usuarios"),t.qZA(),t._UZ(5,"mat-divider"),t.TgZ(6,"div",3)(7,"div",4)(8,"mat-icon",5),t._uU(9,"filter_list"),t.qZA(),t.TgZ(10,"span"),t._uU(11,"Filtros"),t.qZA()(),t.TgZ(12,"form",6),t.NdJ("ngSubmit",function(){return e.filtrar()}),t.TgZ(13,"mat-form-field",7)(14,"mat-label"),t._uU(15,"Nombre completo"),t.qZA(),t.TgZ(16,"label",8),t._uU(17,"Nombre completo"),t.qZA(),t._UZ(18,"input",9),t.qZA(),t.TgZ(19,"mat-form-field",7)(20,"mat-label"),t._uU(21,"Rol"),t.qZA(),t.TgZ(22,"label",10),t._uU(23,"Rol"),t.qZA(),t.TgZ(24,"mat-select",11)(25,"mat-option",12),t._uU(26,"Jefe de C\xe1tedra"),t.qZA(),t.TgZ(27,"mat-option",12),t._uU(28,"Responsable Administrativo"),t.qZA(),t.TgZ(29,"mat-option",12),t._uU(30,"Usuario"),t.qZA()()(),t.TgZ(31,"mat-form-field",7)(32,"mat-label"),t._uU(33,"Estado"),t.qZA(),t.TgZ(34,"label",13),t._uU(35,"Estado"),t.qZA(),t.TgZ(36,"mat-select",14)(37,"mat-option",12),t._uU(38,"Habilitado"),t.qZA(),t.TgZ(39,"mat-option",12),t._uU(40,"Pendiente"),t.qZA(),t.TgZ(41,"mat-option",12),t._uU(42,"Deshabilitado"),t.qZA()()(),t.TgZ(43,"button",15),t._uU(44," Filtrar "),t.qZA(),t.TgZ(45,"button",16),t.NdJ("click",function(){return e.limpiar()}),t._uU(46," Limpiar "),t.qZA()()(),t._UZ(47,"mat-divider"),t.TgZ(48,"table",17),t.ynx(49,18),t.YNc(50,y,2,0,"th",19),t.YNc(51,L,2,1,"td",20),t.BQk(),t.ynx(52,21),t.YNc(53,q,2,0,"th",19),t.YNc(54,J,2,1,"td",20),t.BQk(),t.ynx(55,22),t.YNc(56,I,2,0,"th",19),t.YNc(57,E,2,1,"td",20),t.BQk(),t.ynx(58,23),t.YNc(59,S,2,0,"th",19),t.YNc(60,F,2,1,"td",20),t.BQk(),t.ynx(61,24),t.YNc(62,D,2,0,"th",19),t.YNc(63,R,3,2,"td",20),t.BQk(),t.YNc(64,k,1,0,"tr",25),t.YNc(65,Y,1,0,"tr",26),t.qZA(),t._UZ(66,"mat-paginator",27),t.qZA()()),2&o&&(t.xp6(12),t.Q6J("formGroup",e.form)("autocomplete",!1),t.xp6(13),t.Q6J("value",1),t.xp6(2),t.Q6J("value",2),t.xp6(2),t.Q6J("value",3),t.xp6(8),t.Q6J("value",1),t.xp6(2),t.Q6J("value",2),t.xp6(2),t.Q6J("value",3),t.xp6(7),t.Q6J("dataSource",e.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",e.columnas),t.xp6(1),t.Q6J("matRowDefColumns",e.columnas),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(13,z))("pageSize",10))},directives:[v.M,Z.d,M.Hw,a._Y,a.JL,a.sg,u.KE,u.hX,a.Fj,P.Nt,a.JJ,a.u,U.gD,N.ey,c.BZ,c.w1,c.fO,c.ge,c.Dz,c.ev,h.O5,c.as,c.XQ,c.nj,c.Gk,O.NW],styles:[".pagina[_ngcontent-%COMP%]{display:flex;flex-direction:row}.pagina[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}.pagina[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]{margin-left:50px;font-weight:400;font-size:40px;line-height:118.9%;color:#666;margin-top:50px;margin-bottom:45px}.pagina[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%]{border-top-color:#a6aac780}.pagina[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]   .container-filtros[_ngcontent-%COMP%]{padding-top:20px;padding-bottom:20px;margin-left:50px;height:113px}.pagina[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]   .container-filtros[_ngcontent-%COMP%]   .titulo-filtros[_ngcontent-%COMP%]{display:flex;gap:10px}.pagina[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]   .container-filtros[_ngcontent-%COMP%]   .titulo-filtros[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;font-size:20px;line-height:24px}.pagina[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]   .container-filtros[_ngcontent-%COMP%]   .titulo-filtros[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-weight:600;height:15px}.pagina[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]   .container-filtros[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin-top:20px;display:flex;flex-direction:row;gap:40px;align-items:center}.pagina[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]   .container-filtros[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .mat-form-field-wrapper{padding:0}.pagina[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]   .container-filtros[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .filtrar-button[_ngcontent-%COMP%]{width:100px;height:40px;background:linear-gradient(180deg,#1C819F 0%,#00CA48 100%);border-radius:8px;border:0;font-weight:700;font-size:18px;line-height:140%;color:#fff;text-align:center;cursor:pointer}.pagina[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]   .container-filtros[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .limpiar-button[_ngcontent-%COMP%]{width:100px;height:40px;border:0;background:#1C819F;border-radius:8px;font-weight:700;font-size:18px;line-height:140%;color:#fff;text-align:center;cursor:pointer}.pagina[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.pagina[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:600;font-size:16.48px;line-height:118.9%}.pagina[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-weight:400;font-size:16px;line-height:118.9%}.pagina[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .button-habilitar[_ngcontent-%COMP%]{width:80px;height:30px;background:#0A3066;border-radius:8px;border:0;font-weight:700;font-size:12px;line-height:140%;text-align:center;color:#fff;cursor:pointer}.pagina[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .button-deshabilitar[_ngcontent-%COMP%]{width:80px;height:30px;background:#660A36;border:0;border-radius:8px;font-weight:700;font-size:9px;line-height:140%;text-align:center;color:#fff;cursor:pointer}.pagina[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(even){background:#F5F7F7}"]}),n})()},{path:"editar",component:A}];let j=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[p.Bz.forChild(H)],p.Bz]}),n})();var G=l(7826);let $=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[h.ez,j,G.m]]}),n})()}}]);