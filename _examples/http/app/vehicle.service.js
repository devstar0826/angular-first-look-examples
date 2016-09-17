System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Rx_1;
    var Vehicle, VehicleService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            Vehicle = (function () {
                function Vehicle(id, name) {
                    this.id = id;
                    this.name = name;
                }
                return Vehicle;
            }());
            exports_1("Vehicle", Vehicle);
            VehicleService = (function () {
                function VehicleService(_http) {
                    this._http = _http;
                }
                VehicleService.prototype.getVehicles = function () {
                    return this._http.get('api/vehicles.json')
                        .map(function (response) { return response.json().data; })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handleError);
                };
                VehicleService.prototype.handleError = function (error) {
                    console.error(error);
                    return Rx_1.Observable.throw(error.json().error || 'Server error');
                };
                VehicleService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], VehicleService);
                return VehicleService;
            }());
            exports_1("VehicleService", VehicleService);
        }
    }
});
//# sourceMappingURL=vehicle.service.js.map