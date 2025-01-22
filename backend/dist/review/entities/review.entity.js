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
exports.Review = void 0;
const activity_entity_1 = require("../../activity/entities/activity.entity");
const person_entity_1 = require("../../person/entities/person.entity");
const typeorm_1 = require("typeorm");
let Review = class Review {
};
exports.Review = Review;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Review.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => activity_entity_1.Activity, { eager: true }),
    __metadata("design:type", activity_entity_1.Activity)
], Review.prototype, "activity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => person_entity_1.Person, { eager: true }),
    __metadata("design:type", person_entity_1.Person)
], Review.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Review.prototype, "feedback", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Review.prototype, "timestamp", void 0);
exports.Review = Review = __decorate([
    (0, typeorm_1.Entity)()
], Review);
//# sourceMappingURL=review.entity.js.map