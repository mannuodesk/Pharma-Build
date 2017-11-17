webpackJsonp([16],{1032:function(n,e){n.exports=".login-page {\n  background-color: #ddd; }\n\n.login-page .page-footer {\n  margin-bottom: 25px;\n  font-size: 13px;\n  color: #818a91;\n  text-align: center; }\n  @media (min-height: 600px) {\n    .login-page .page-footer {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0; } }\n\n#measurementName {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 100%;\n  margin-bottom: 14px; }\n\n.addbtn {\n  width: 235px;\n  color: white !important; }\n\n.widget-login-container {\n  padding-top: 10%; }\n\n.widget-login-logo {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: 400; }\n  .widget-login-logo .fa-circle {\n    font-size: 13px;\n    margin: 0 20px; }\n\n.widget-login {\n  padding: 30px; }\n  .widget-login > header h1, .widget-login > header h2, .widget-login > header h3, .widget-login > header h4, .widget-login > header h5, .widget-login > header h6 {\n    font-weight: 400;\n    text-align: center; }\n\n.widget-login-info {\n  font-size: 13px;\n  color: #888;\n  margin-top: 1px;\n  margin-bottom: 0;\n  text-align: center; }\n  .widget-login-info.abc-checkbox {\n    margin-left: -25px; }\n\n.login-form .form-control {\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef; }\n  .login-form .form-control:focus {\n    background-color: #ddd; }\n\n#snackbar1 {\n  visibility: hidden;\n  /* Hidden by default. Visible on click */\n  min-width: 250px;\n  /* Set a default minimum width */\n  margin-left: -125px;\n  /* Divide value of min-width by 2 */\n  background-color: #333;\n  /* Black background color */\n  color: #fff;\n  /* White text color */\n  text-align: center;\n  /* Centered text */\n  border-radius: 2px;\n  /* Rounded borders */\n  padding: 16px;\n  /* Padding */\n  position: fixed;\n  /* Sit on top of the screen */\n  z-index: 1;\n  /* Add a z-index if needed */\n  left: 50%;\n  /* Center the snackbar */\n  bottom: 30px;\n  /* 30px from the bottom */ }\n\n.AddDosage {\n  width: 297px; }\n\n.AddSize {\n  width: 297px; }\n\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\n#snackbar1.show {\n  visibility: visible;\n  /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar. \r\nHowever, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n\n/* Animations to fade the snackbar in and out */\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n"},1064:function(n,e){n.exports='<div id="snackbar1"></div>\r\n<div class="row">\r\n<div class="col-md-6">\r\n<div class="container">\r\n  <main id="content" class="widget-login-container" role="main">\r\n    <div class="row">\r\n      <div class="col-xl-4 col-md-6 col-xs-10 offset-xl-4 offset-md-3 offset-xs-1">\r\n        <h5 class="widget-login-logo animated  fadeInUp">\r\n          <i class="fa fa-circle text-gray"></i>\r\n          Pharma\r\n          <i class="fa fa-circle text-warning"></i>\r\n        </h5>\r\n        <section class="widget widget-login AddDosage animated fadeInUp">\r\n          <header>\r\n            <h3 style="font-size:36px;font-weight:900">ADD UNIT</h3>\r\n          </header>\r\n          <div class="widget-body">\r\n            <p class="widget-login-info">\r\n             \r\n            </p>\r\n            <p class="widget-login-info">\r\n           \r\n            </p>\r\n            <form class="login-form mt-lg">\r\n              <div class="form-group">\r\n                <input type="text" class="form-control" [(ngModel)]="unitname" name="Unitname" id="exampleInputEmail1" placeholder="Enter Name">\r\n              </div>\r\n              <div class="form-group">\r\n                <input class="form-control" id="pswd" [(ngModel)]="unitvalue" name="unitvalue" type="text" placeholder="Enter Symbol">\r\n              </div>\r\n \r\n              <div class="clearfix">\r\n                <div class="btn-toolbar pull-xs-right m-t-1">\r\n                <!--   <button type="button" class="btn btn-secondary btn-sm">Create an Account</button> -->\r\n                  <a class="btn addbtn btn-inverse btn-sm" (click)="addUnit()">Add</a>\r\n                </div>\r\n              </div>\r\n              <div class="row m-t-1">\r\n                <div class="col-md-6 push-md-6">\r\n                  <div class="clearfix">\r\n                   <!--  <div class="abc-checkbox widget-login-info pull-xs-right">\r\n                      <input type="checkbox" id="checkbox1" value="1">\r\n                      <label for="checkbox1">Keep me signed in </label>\r\n                    </div> -->\r\n                  </div>\r\n                </div>\r\n\r\n               <!--  <div class="col-md-6 pull-md-6">\r\n                  <a class="mr-n-lg" href="#">Trouble with account?</a>\r\n                </div> -->\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n  </main>\r\n <!--  <footer class="page-footer">\r\n    2016 &copy; Sing. Admin Dashboard Template.\r\n  </footer> -->\r\n</div>\r\n</div>\r\n\r\n<div id="snackbar1"></div>\r\n<div class="col-md-6">\r\n<div class="container">\r\n  <main id="content" class="widget-login-container" role="main">\r\n    <div class="row">\r\n      <div class="col-xl-4 col-md-6 col-xs-10 offset-xl-4 offset-md-3 offset-xs-1">\r\n        <h5 class="widget-login-logo animated  fadeInUp">\r\n          <i class="fa fa-circle text-gray"></i>\r\n          Pharma\r\n          <i class="fa fa-circle text-warning"></i>\r\n        </h5>\r\n        <section class="widget widget-login  AddSize animated fadeInUp">\r\n          <header>\r\n            <h3 style="font-size:36px;font-weight:900">ADD DOSAGE</h3>\r\n          </header>\r\n          <div class="widget-body">\r\n            <p class="widget-login-info">\r\n             \r\n            </p>\r\n            <p class="widget-login-info">\r\n           \r\n            </p>\r\n            <form class="login-form mt-lg">\r\n             <select id="measurementName" (change)="getmeasurementId($event.target.value)"> \r\n                <option *ngFor="let units of GetDosageModel" value="{{units.Id}}">{{units.UnitName}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n              <div class="form-group">\r\n                <input class="form-control" id="pswd" [(ngModel)]="dosagevalue" name="dosagevalue" type="text" placeholder="Enter Value">\r\n              </div>\r\n \r\n              <div class="clearfix">\r\n                <div class="btn-toolbar pull-xs-right m-t-1">\r\n                <!--   <button type="button" class="btn btn-secondary btn-sm">Create an Account</button> -->\r\n                  <a class="btn addbtn btn-inverse btn-sm" (click)="getmeasurementvalue()">Add</a>\r\n                </div>\r\n              </div>\r\n              <div class="row m-t-1">\r\n                <div class="col-md-6 push-md-6">\r\n                  <div class="clearfix">\r\n                   <!--  <div class="abc-checkbox widget-login-info pull-xs-right">\r\n                      <input type="checkbox" id="checkbox1" value="1">\r\n                      <label for="checkbox1">Keep me signed in </label>\r\n                    </div> -->\r\n                  </div>\r\n                </div>\r\n\r\n               <!--  <div class="col-md-6 pull-md-6">\r\n                  <a class="mr-n-lg" href="#">Trouble with account?</a>\r\n                </div> -->\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n  </main>\r\n <!--  <footer class="page-footer">\r\n    2016 &copy; Sing. Admin Dashboard Template.\r\n  </footer> -->\r\n</div>\r\n</div>\r\n</div>'},686:function(n,e){"use strict";var t=function(){function ServiceUrl(){this.baseUrl="http://pharmaideo.azurewebsites.net/api/"}return ServiceUrl.prototype.getUrl=function(){return this.baseUrl},ServiceUrl}();e.ServiceUrl=t},951:function(n,e,t){"use strict";(function(n){var o=t(0),i=t(107),a=t(996),r=function(){function DosageComponent(n,e){var t=this;this._addUnitService=n,this.router=e,this._addUnitService.getAllUnitValues().subscribe(function(n){t.GetDosageModel=n.data,console.log(t.GetDosageModel)})}return DosageComponent.prototype.getmeasurementId=function(n){this.unitId=n},DosageComponent.prototype.getmeasurementvalue=function(e){var t=this;void 0!==this.unitId&&void 0!==this.dosagevalue?this._addUnitService.addUnitValues(this.unitId,this.dosagevalue).subscribe(function(e){console.log(e),n("#snackbar1").html(e.message),t.myFunction(),t.unitId=void 0,t.dosagevalue=void 0,t._addUnitService.getAllUnitValues().subscribe(function(n){t.GetDosageModel=n.data,console.log(t.GetDosageModel)})}):(n("#snackbar1").html("Invalid Credenntials"),this.myFunction())},DosageComponent.prototype.addUnit=function(){var e=this;void 0==this.unitname&&void 0==this.unitvalue?alert("please fill empty fields"):void 0!==this.unitname&&void 0!==this.unitvalue?this._addUnitService.addunit(this.unitname,this.unitvalue).subscribe(function(t){console.log(t),n("#snackbar1").html(t.message),e.myFunction(),e._addUnitService.getAllUnitValues().subscribe(function(n){e.unitModel=n.data})}):(n("#snackbar1").html("Invalid Credenntials"),this.myFunction())},DosageComponent.prototype.searchResult=function(){this.router.navigate(["/app","extra","search"])},DosageComponent.prototype.myFunction=function(){var n=document.getElementById("snackbar1");n.className="show",setTimeout(function(){n.className=n.className.replace("show","")},3e3)},DosageComponent=__decorate([o.Component({selector:"dosage",providers:[a.AddDosageService],styles:[t(1032)],template:t(1064),encapsulation:o.ViewEncapsulation.None,host:{"class":"dosage-page app"}}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.AddDosageService&&a.AddDosageService)&&e||Object,"function"==typeof(r="undefined"!=typeof i.Router&&i.Router)&&r||Object])],DosageComponent);var e,r}();e.DosageComponent=r}).call(e,t(35))},952:function(n,e,t){"use strict";var o=t(74),i=t(155),a=t(0),r=t(107),s=t(951);e.routes=[{path:"",component:s.DosageComponent,pathMatch:"full"}];var d=function(){function DosageModule(){}return DosageModule.routes=e.routes,DosageModule=__decorate([a.NgModule({declarations:[s.DosageComponent],imports:[o.CommonModule,i.FormsModule,r.RouterModule.forChild(e.routes)]}),__metadata("design:paramtypes",[])],DosageModule)}();Object.defineProperty(e,"__esModule",{value:!0}),e.default=d},996:function(n,e,t){"use strict";var o=t(0),i=t(156);t(242);var a=t(686),r=function(){function AddDosageService(n){this.http=n,this.urlService=new a.ServiceUrl}return AddDosageService.prototype.getDosageValue=function(n){var e=(JSON.stringify({Id:n}),new i.Headers({"Content-Type":"application/json"})),t=new i.RequestOptions({method:"get",headers:e});return this.http.get(this.urlService.baseUrl+"Chemist/getAllUnitValues",t).map(function(n){return n.json()})},AddDosageService.prototype.addunit=function(n,e){var t=JSON.stringify({UnitName:n,UnitSymbol:e}),o=new i.Headers({"Content-Type":"application/json"}),a=new i.RequestOptions({method:"post",headers:o});return this.http.post(this.urlService.baseUrl+"Chemist/addUnit",t,a).map(function(n){return n.json()})},AddDosageService.prototype.getAllUnitValues=function(){var n=JSON.stringify({});console.log(n);var e=new i.Headers({"Content-Type":"application/json"}),t=new i.RequestOptions({method:"get",headers:e});return this.http.get(this.urlService.baseUrl+"Chemist/getAllChemistUnits",t).map(function(n){return n.json()})},AddDosageService.prototype.addUnitValues=function(n,e){var t=JSON.stringify({DosageAndSizesId:n,Value:e}),o=new i.Headers({"Content-Type":"application/json"}),a=new i.RequestOptions({method:"post",headers:o});return this.http.post(this.urlService.baseUrl+"Chemist/addUnitValue",t,a).map(function(n){return n.json()})},AddDosageService=__decorate([o.Injectable(),__metadata("design:paramtypes",["function"==typeof(n="undefined"!=typeof i.Http&&i.Http)&&n||Object])],AddDosageService);var n}();e.AddDosageService=r}});