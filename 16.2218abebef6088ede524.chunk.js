webpackJsonp([16],{1008:function(e,t,n){"use strict";var o=n(0),r=n(156);n(242);var i=n(686),a=function(){function GetAllProductService(e){this.http=e,this.urlService=new i.ServiceUrl}return GetAllProductService.prototype.getAllMedicineName=function(e,t){var n=(JSON.stringify({}),new r.Headers({"Content-Type":"application/json"})),o=new r.RequestOptions({method:"get",headers:n});return this.http.get(this.urlService.baseUrl+"Chemist/getAllProductsByChemistId?ChemistId="+e+"&ProductType="+t,o).map(function(e){return e.json()})},GetAllProductService.prototype.GetPharmacyNameService=function(e,t){var n=(JSON.stringify({}),new r.Headers({"Content-Type":"application/json"})),o=new r.RequestOptions({method:"get",headers:n});return this.http.get(this.urlService.baseUrl+"Chemist/getAllProductsByChemistId?ChemistId="+e+"&ProductType="+t,o).map(function(e){return e.json()})},GetAllProductService=__decorate([o.Injectable(),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.Http&&r.Http)&&e||Object])],GetAllProductService);var e}();t.GetAllProductService=a},1041:function(e,t){e.exports=".login-page {\n  background-color: #ddd; }\n\n.login-page .page-footer {\n  margin-bottom: 25px;\n  font-size: 13px;\n  color: #818a91;\n  text-align: center; }\n  @media (min-height: 600px) {\n    .login-page .page-footer {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0; } }\n\n#MedicineCategory {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 139px;\n  margin-left: 29px;\n  margin-bottom: 14px; }\n\n.AddMeasurement {\n  position: relative;\n  color: white;\n  text-align: center;\n  background-color: grey;\n  float: left; }\n\n#AddMeasurement button {\n  background: none;\n  border: 1px solid #ccc;\n  padding: 8px;\n  font-weight: bold;\n  width: auto;\n  display: inline-block;\n  margin-right: 10px;\n  margin-top: 10px; }\n\n.addbtn:hover {\n  color: white !important; }\n\n#MedicineDosage {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 139px;\n  margin-left: 37px; }\n\n#dosageValue {\n  margin-bottom: 12px;\n  border: 1px solid black;\n  padding-top: 12px;\n  padding-bottom: 12px; }\n\n#SelectDosageValue {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 126px;\n  margin-left: 2px; }\n\n#MedicineMeasurement {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 158px;\n  margin-left: 11px;\n  margin-top: -5px; }\n\n.addbtnMeasurement {\n  background-color: white;\n  width: 124px !important;\n  height: 30px;\n  margin-left: 22px; }\n\n#MedicineSubCategory {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 167px;\n  margin-left: 25px; }\n\n#measurementName {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 100%;\n  margin-bottom: 14px; }\n\n.addbtn {\n  width: 235px;\n  color: white !important; }\n\n.widget-login-container {\n  padding-top: 10%; }\n\n.widget-login-logo {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: 400; }\n  .widget-login-logo .fa-circle {\n    font-size: 13px;\n    margin: 0 20px; }\n\n.widget-login {\n  padding: 30px; }\n  .widget-login > header h1, .widget-login > header h2, .widget-login > header h3, .widget-login > header h4, .widget-login > header h5, .widget-login > header h6 {\n    font-weight: 400;\n    text-align: center; }\n\n.widget-login-info {\n  font-size: 13px;\n  color: #888;\n  margin-top: 1px;\n  margin-bottom: 0;\n  text-align: center; }\n  .widget-login-info.abc-checkbox {\n    margin-left: -25px; }\n\n.login-form .form-control {\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef; }\n  .login-form .form-control:focus {\n    background-color: #ddd; }\n\n#snackbar1 {\n  visibility: hidden;\n  /* Hidden by default. Visible on click */\n  min-width: 250px;\n  /* Set a default minimum width */\n  margin-left: -125px;\n  /* Divide value of min-width by 2 */\n  background-color: #333;\n  /* Black background color */\n  color: #fff;\n  /* White text color */\n  text-align: center;\n  /* Centered text */\n  border-radius: 2px;\n  /* Rounded borders */\n  padding: 16px;\n  /* Padding */\n  position: fixed;\n  /* Sit on top of the screen */\n  z-index: 1;\n  /* Add a z-index if needed */\n  left: 50%;\n  /* Center the snackbar */\n  bottom: 30px;\n  /* 30px from the bottom */ }\n\n#SelectMeasurement {\n  display: inline-flex;\n  margin-bottom: 3px; }\n\n#SelectDosage {\n  display: inline-block; }\n\n#SelectCategory {\n  display: inline-flex; }\n\n#SelectSubCategory {\n  display: inline-flex; }\n\n.AddMedicine {\n  max-width: 600px;\n  min-width: 300px;\n  margin: 0 auto; }\n\n.AddDosage {\n  width: 297px; }\n\n.AddSize {\n  width: 297px; }\n\n#ProductName {\n  width: 100%;\n  height: 30px;\n  background-color: #eceeef;\n  margin-bottom: 13px; }\n\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\n#snackbar1.show {\n  visibility: visible;\n  /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar. \r\nHowever, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n\n/* Animations to fade the snackbar in and out */\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n"},1077:function(e,t){e.exports='<div id="snackbar"></div>\r\n\r\n<div class="container">\r\n  <main id="content" class="widget-login-container" role="main">\r\n    <div class="row">\r\n  \r\n        <h5 class="widget-login-logo animated  fadeInUp">\r\n          <i class="fa fa-circle text-gray"></i>\r\n          Pharma\r\n          <i class="fa fa-circle text-warning"></i>\r\n        </h5>\r\n        <section class="widget widget-login AddMedicine animated fadeInUp">\r\n          <header>\r\n            <h3 style="font-size:36px;font-weight:900">Products Data</h3>\r\n          </header>\r\n          <div class="widget-body">\r\n            <p class="widget-login-info">\r\n             \r\n            </p>\r\n            <p class="widget-login-info">\r\n           \r\n            </p>\r\n            <form class="login-form mt-lg">\r\n                <select id="ProductName"(change)="getProductName($event.target.value)">\r\n                    <option disabled selected value> -- select an option -- </option>\r\n                \r\n                    <option *ngFor="let MedicineName of GetAllProductModelArraySingle" value="{{MedicineName.Id}}">{{MedicineName.ChemistName}}</option>\r\n\r\n                  </select>\r\n        \r\n              <table class="table table-hover">\r\n                  \r\n                      <tr>\r\n                      \r\n                          <td>Dosage</td>\r\n                          <td>Value</td>\r\n                          <td>Measurement Name</td>\r\n                          <td>Quantity</td>\r\n                          <td>Price</td>\r\n                      </tr>\r\n                     \r\n                    <ng-container *ngFor=" let row1 of GetAllProductModelArrayDosage">\r\n                     \r\n                       <p style="border: 1px solid black;font-weight: 600; text-align: center;">{{row1.Name}}</p>\r\n                        <tr *ngFor="let row2 of row1.WebDosageAndValuesDTOList">\r\n                        <td>{{row2.DosageName}}</td>\r\n                        <td>{{row2.DosageValue}}</td>\r\n                        <td>{{row2.MeasurementName}}</td>\r\n                        <td>{{row2.Quantity}}</td>\r\n                        <td>{{row2.Price}}</td>\r\n                      </tr>\r\n\r\n                    </ng-container>\r\n                  \r\n                     \r\n                  \r\n                  \r\n              </table> \r\n              <div class="clearfix">\r\n                  <div class="btn-toolbar pull-xs-right m-t-1">\r\n                  <!--   <button type="button" class="btn btn-secondary btn-sm">Create an Account</button> -->\r\n                    <a class="btn addbtn btn-inverse btn-sm" (click)="GetChemistData()">Add</a>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n\r\n\r\n              \r\n               </form>\r\n              </div>\r\n             </section>\r\n     \r\n        </div>\r\n  </main>\r\n      </div>\r\n    \r\n  \r\n  \r\n\r\n'},686:function(e,t){"use strict";var n=function(){function ServiceUrl(){this.baseUrl="http://pharmaideo.azurewebsites.net/api/"}return ServiceUrl.prototype.getUrl=function(){return this.baseUrl},ServiceUrl}();t.ServiceUrl=n},736:function(e,t,n){"use strict";var o=n(0),r=n(156);n(242);var i=n(686),a=function(){function AddMedicineService(e){this.http=e,this.urlService=new i.ServiceUrl}return AddMedicineService.prototype.getAllCategoryValues=function(e){var t=(JSON.stringify({}),new r.Headers({"Content-Type":"application/json"})),n=new r.RequestOptions({method:"get",headers:t});return this.http.get(this.urlService.baseUrl+"Chemist/getCategoriesByChemistId?chemistId="+e,n).map(function(e){return e.json()})},AddMedicineService.prototype.getAllSubCategoryValues=function(){var e=(JSON.stringify({}),new r.Headers({"Content-Type":"application/json"})),t=new r.RequestOptions({method:"get",headers:e});return this.http.get(this.urlService.baseUrl+"Chemist/getAllCategoriesAndSubCategories",t).map(function(e){return e.json()})},AddMedicineService.prototype.getAllDosageValues=function(){var e=(JSON.stringify({}),new r.Headers({"Content-Type":"application/json"})),t=new r.RequestOptions({method:"get",headers:e});return this.http.get(this.urlService.baseUrl+"Chemist/getAllChemistUnits",t).map(function(e){return e.json()})},AddMedicineService.prototype.getSubcategoryByCategoryID=function(e,t){var n=(JSON.stringify({}),new r.Headers({"Content-Type":"application/json"})),o=new r.RequestOptions({method:"get",headers:n});return this.http.get(this.urlService.baseUrl+"Chemist/getSubCategoriesByChemistIdByCategoryId?chemistId="+e+"&categoryId="+t,o).map(function(e){return e.json()})},AddMedicineService.prototype.getAllMeasurementValues=function(){var e=(JSON.stringify({}),new r.Headers({"Content-Type":"application/json"})),t=new r.RequestOptions({method:"get",headers:e});return this.http.get(this.urlService.baseUrl+"Chemist/getAllChemistMeasurements",t).map(function(e){return e.json()})},AddMedicineService.prototype.AddMedicineAndDosageService=function(e,t){var n=JSON.stringify({ChemistId:e.ChemistId,DosageSizeAndValues:e.DosageSizeAndValues,Name:e.MedicineName,MeasurementIds:e.MeasurementModel,SubCategoryId:e.SubCategoryId,AddProductDaosageAndSizeMappingDTO:t});console.log(n);var o=new r.Headers({"Content-Type":"application/json"}),i=new r.RequestOptions({method:"post",headers:o});return this.http.post(this.urlService.baseUrl+"Chemist/addProduct",n,i).map(function(e){return e.json()})},AddMedicineService=__decorate([o.Injectable(),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.Http&&r.Http)&&e||Object])],AddMedicineService);var e}();t.AddMedicineService=a},737:function(e,t,n){"use strict";var o=n(0),r=n(156);n(242);var i=n(686),a=function(){function AddDosageService(e){this.http=e,this.urlService=new i.ServiceUrl}return AddDosageService.prototype.getDosageValue=function(e){var t=(JSON.stringify({Id:e}),new r.Headers({"Content-Type":"application/json"})),n=new r.RequestOptions({method:"get",headers:t});return this.http.get(this.urlService.baseUrl+"Chemist/getAllUnitValues",n).map(function(e){return e.json()})},AddDosageService.prototype.addunit=function(e,t){var n=JSON.stringify({UnitName:e,UnitSymbol:t}),o=new r.Headers({"Content-Type":"application/json"}),i=new r.RequestOptions({method:"post",headers:o});return this.http.post(this.urlService.baseUrl+"Chemist/addUnit",n,i).map(function(e){return e.json()})},AddDosageService.prototype.getAllUnitValues=function(){var e=JSON.stringify({});console.log(e);var t=new r.Headers({"Content-Type":"application/json"}),n=new r.RequestOptions({method:"get",headers:t});return this.http.get(this.urlService.baseUrl+"Chemist/getAllChemistUnits",n).map(function(e){return e.json()})},AddDosageService.prototype.addUnitValues=function(e,t){var n=JSON.stringify({DosageAndSizesId:e,Value:t}),o=new r.Headers({"Content-Type":"application/json"}),i=new r.RequestOptions({method:"post",headers:o});return this.http.post(this.urlService.baseUrl+"Chemist/addUnitValue",n,i).map(function(e){return e.json()})},AddDosageService=__decorate([o.Injectable(),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.Http&&r.Http)&&e||Object])],AddDosageService);var e}();t.AddDosageService=a},933:function(e,t,n){"use strict";var o=n(0),r=n(107),i=n(736),a=n(737),d=n(1008),s=function(){function GetProductComponent(e,t,n){var o=this;this._GetProductService=e,this._addDosageService=n,this.GetAllProductModelArray=[],this.GetAllProductModelArraySingle=[],this.GetAllProductModelArrayDosage=[],this.GetAllProductDosageValue=[],this.GetChemistDataModelArray=[],this.router=t,this.ProductType=100,this.ChemistId=localStorage.getItem("GetChemistId"),this._GetProductService.GetPharmacyNameService(this.ChemistId,this.ProductType).subscribe(function(e){console.log(e.data),o.GetAllProductModelArraySingle=e.data,console.log("chemistName",o.GetAllProductModelArraySingle)})}return GetProductComponent.prototype.getProductName=function(e){var t=this;console.log("Inside"),this._GetProductService.getAllMedicineName(this.ChemistId,this.ProductType).subscribe(function(n){console.log(t.GetAllProductModelArrayDosage);for(var o=0;o<n.data.length;o++)n.data[o].Id==e&&(t.GetAllProductModelArrayDosage=n.data),t.GetAllProductModelArrayDosage=[]})},GetProductComponent.prototype.getSubCategoryName=function(){},GetProductComponent.prototype.myFunction=function(){var e=document.getElementById("snackbar1");e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},GetProductComponent=__decorate([o.Component({selector:"GetProduct",providers:[i.AddMedicineService,a.AddDosageService,d.GetAllProductService],styles:[n(1041)],template:n(1077),encapsulation:o.ViewEncapsulation.None,host:{"class":"dosage-page app"}}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof d.GetAllProductService&&d.GetAllProductService)&&e||Object,"function"==typeof(t="undefined"!=typeof r.Router&&r.Router)&&t||Object,"function"==typeof(s="undefined"!=typeof a.AddDosageService&&a.AddDosageService)&&s||Object])],GetProductComponent);var e,t,s}();t.GetProductComponent=s},934:function(e,t,n){"use strict";var o=n(74),r=n(155),i=n(0),a=n(107),d=n(933);t.routes=[{path:"",component:d.GetProductComponent,pathMatch:"full"}];var s=function(){function GetProductModule(){}return GetProductModule.routes=t.routes,GetProductModule=__decorate([i.NgModule({declarations:[d.GetProductComponent],imports:[o.CommonModule,r.FormsModule,a.RouterModule.forChild(t.routes)]}),__metadata("design:paramtypes",[])],GetProductModule)}();Object.defineProperty(t,"__esModule",{value:!0}),t.default=s}});