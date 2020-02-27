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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("./users.service");
let AuthService = class AuthService {
    constructor(userService, jwtSevice) {
        this.userService = userService;
        this.jwtSevice = jwtSevice;
    }
    async validation(userdata) {
        return await this.userService.findUser(userdata.email, userdata.password);
    }
    async checkavailable(userdata) {
        return await this.userService.findEmail(userdata.email);
    }
    async login(user) {
        return this.validation(user).then((userdata) => {
            if (!userdata) {
                return { status: 404, login: 'login failed user is not registered' };
            }
            let payload = `${userdata.name}`;
            const accessToken = this.jwtSevice.sign(payload);
            return {
                status: 200,
                login: "login successfull",
                token: accessToken
            };
        });
    }
    async register(user) {
        return this.checkavailable(user).then((userdata) => {
            if (!userdata) {
                this.userService.creteUser(user);
                return { status: 200, message: 'registered succefull' };
            }
            return { status: 404, message: 'user already registered' };
        });
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map