"use strict";(self.webpackChunkentornos_spa=self.webpackChunkentornos_spa||[]).push([[592],{3686:(h,c,e)=>{e.d(c,{M:()=>O});var s=e(5861),n=e(5e3),_=e(6518),a=e(1083),u=e(4834),g=e(9808),l=e(7423),p=e(5245);function m(o,i){1&o&&(n.TgZ(0,"a",19)(1,"mat-icon",20),n._uU(2,"add"),n.qZA(),n.TgZ(3,"span"),n._uU(4,"Nueva Vacante"),n.qZA()())}function f(o,i){1&o&&(n.TgZ(0,"a",21)(1,"mat-icon",22),n._uU(2,"supervised_user_circle"),n.qZA(),n.TgZ(3,"span"),n._uU(4,"Gestionar Usuarios"),n.qZA()())}function d(o,i){1&o&&(n.TgZ(0,"a",23)(1,"mat-icon",24),n._uU(2,"perm_contact_calendar"),n.qZA(),n.TgZ(3,"span"),n._uU(4,"Mis Postulaciones"),n.qZA()())}function M(o,i){if(1&o){const t=n.EpF();n.TgZ(0,"div")(1,"div",4)(2,"div",5)(3,"button",6),n._uU(4),n.qZA()(),n.TgZ(5,"span",7),n._uU(6),n.qZA(),n.TgZ(7,"span",8),n._uU(8),n.qZA()(),n._UZ(9,"mat-divider"),n.TgZ(10,"div",9)(11,"a",10)(12,"mat-icon",11),n._uU(13,"list"),n.qZA(),n.TgZ(14,"span"),n._uU(15,"Ver Vacantes"),n.qZA()(),n.YNc(16,m,5,0,"a",12),n.YNc(17,f,5,0,"a",13),n.YNc(18,d,5,0,"a",14),n.TgZ(19,"a",15)(20,"mat-icon",16),n._uU(21,"account_circle"),n.qZA(),n.TgZ(22,"span"),n._uU(23,"Mi Cuenta"),n.qZA()(),n.TgZ(24,"a",17),n.NdJ("click",function(){return n.CHM(t),n.oxw().logout()}),n.TgZ(25,"mat-icon",18),n._uU(26,"exit_to_app"),n.qZA(),n.TgZ(27,"span"),n._uU(28,"Cerrar Sesi\xf3n"),n.qZA()()()()}if(2&o){const t=n.oxw();n.xp6(4),n.hij(" ",t.nombre.substr(0,1).toUpperCase()," "),n.xp6(2),n.Oqu(t.nombre),n.xp6(2),n.Oqu(t.rolDescripcion),n.xp6(8),n.Q6J("ngIf",2==t.rol),n.xp6(1),n.Q6J("ngIf",2==t.rol),n.xp6(1),n.Q6J("ngIf",3==t.rol)}}function C(o,i){1&o&&(n.TgZ(0,"div",25)(1,"button",26),n._uU(2," Iniciar sesi\xf3n "),n.qZA(),n.TgZ(3,"button",27),n._uU(4," Registro "),n.qZA()())}let O=(()=>{class o{constructor(t,r){this.authService=t,this.router=r,this.rol=0,this.nombre="",this.rolDescripcion=""}ngOnInit(){this.establecerUsuario()}establecerUsuario(){this.authService.getCurrentUser().then(t=>{null!=t?(this.nombre=t.nombre,this.rolDescripcion=t.rol_relacion.nombre,this.rol=t.rol_relacion.id):this.rol=0})}logout(){var t=this;return(0,s.Z)(function*(){yield t.authService.logout(),t.router.navigateByUrl("/"),t.establecerUsuario()})()}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(_.e),n.Y36(a.F0))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-menu"]],decls:5,vars:2,consts:[[1,"container"],["alt","logo-utn","src","../../../../assets/images/logo.png"],[4,"ngIf"],["class","usuario-deslogueado",4,"ngIf"],[1,"usuario"],[1,"logo"],["mat-fab",""],[1,"nombre"],[1,"rol"],[1,"accesos"],["routerLink","/",1,"acceso"],["alt","icono-ver-vacantes"],["class","acceso","routerLink","/crear",4,"ngIf"],["class","acceso","routerLink","/usuarios",4,"ngIf"],["class","acceso","routerLink","/mis-postulaciones",4,"ngIf"],["routerLink","/usuarios/editar",1,"acceso"],["alt","icono-mi-cuenta"],[1,"acceso",3,"click"],["alt","icono-cerrar-sesion"],["routerLink","/crear",1,"acceso"],["alt","icono-nueva-vacante"],["routerLink","/usuarios",1,"acceso"],["alt","icono-gestionar-usuarios"],["routerLink","/mis-postulaciones",1,"acceso"],["alt","mis-postulaciones"],[1,"usuario-deslogueado"],["type","submit","routerLink","/auth/login",1,"login-registro"],["type","submit","routerLink","/auth/register",1,"login-registro"]],template:function(t,r){1&t&&(n.TgZ(0,"div",0),n._UZ(1,"img",1)(2,"mat-divider"),n.YNc(3,M,29,6,"div",2),n.YNc(4,C,5,0,"div",3),n.qZA()),2&t&&(n.xp6(3),n.Q6J("ngIf",0!=r.rol),n.xp6(1),n.Q6J("ngIf",0==r.rol))},directives:[u.d,g.O5,l.lW,a.yS,p.Hw,a.rH],styles:[".container[_ngcontent-%COMP%]{width:270px;min-height:100vh;height:100%;background:linear-gradient(173.85deg,#1C819F 0%,#019234 100%);display:flex;flex-direction:column}.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:70px;margin:36px 10px}.container[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%]{border-top-color:#fff}.container[_ngcontent-%COMP%]   .usuario[_ngcontent-%COMP%]{margin-top:25px;margin-bottom:25px;margin-left:25px;display:flex;flex-direction:column}.container[_ngcontent-%COMP%]   .usuario[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#fff;width:51px;height:51px;cursor:unset;color:#1c819f}.container[_ngcontent-%COMP%]   .usuario[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     .mat-button-wrapper{font-size:32px;line-height:18px}.container[_ngcontent-%COMP%]   .usuario[_ngcontent-%COMP%]   .nombre[_ngcontent-%COMP%]{margin-top:10px;color:#fff;font-weight:600;font-size:16.48px;line-height:118.9%}.container[_ngcontent-%COMP%]   .usuario[_ngcontent-%COMP%]   .rol[_ngcontent-%COMP%]{margin-top:5px;color:#fff;font-weight:400;font-size:14.48px;line-height:118.9%}.container[_ngcontent-%COMP%]   .accesos[_ngcontent-%COMP%]{margin-top:25px;margin-left:25px;display:flex;flex-direction:column;gap:15px}.container[_ngcontent-%COMP%]   .accesos[_ngcontent-%COMP%]   .acceso[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;text-decoration:none;cursor:pointer}.container[_ngcontent-%COMP%]   .accesos[_ngcontent-%COMP%]   .acceso[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-bottom:5px;color:#fff;margin-right:10px}.container[_ngcontent-%COMP%]   .accesos[_ngcontent-%COMP%]   .acceso[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;font-size:16.48px;line-height:118.9%;color:#fff}.container[_ngcontent-%COMP%]   .usuario-deslogueado[_ngcontent-%COMP%]{margin-top:25px;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:25px}.container[_ngcontent-%COMP%]   .usuario-deslogueado[_ngcontent-%COMP%]   .login-registro[_ngcontent-%COMP%]{height:40px;width:200px;background:#0A3066;border-radius:8px;cursor:pointer;border:0;color:#fff;font-weight:600;font-size:14px;line-height:140%}"]}),o})()}}]);