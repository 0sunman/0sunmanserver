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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let ContentService = class ContentService {
    constructor(contentRepository) {
        this.contentRepository = contentRepository;
    }
    async create(createContentDto) {
        this.contentRepository.save(createContentDto);
        return 'This action adds a new content';
    }
    async findAll() {
        return this.contentRepository.find();
    }
    findOne(id) {
        return `This action returns a #${id} content`;
    }
    update(id, updateContentDto) {
        return `This action updates a #${id} content`;
    }
    remove(id) {
        return `This action removes a #${id} content`;
    }
};
exports.ContentService = ContentService;
exports.ContentService = ContentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("CONTENT_REPOSITORY")),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ContentService);
//# sourceMappingURL=content.service.js.map