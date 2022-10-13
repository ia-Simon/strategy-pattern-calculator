"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpSqRoot = void 0;
const prompt_1 = __importDefault(require("prompt"));
const config_1 = require("../config");
class OpSqRoot {
    constructor() {
        this.radicand = 0;
    }
    async collectOperands(lastAnswer) {
        const resp = await prompt_1.default.get([
            {
                name: 'radicand',
                description: 'Radicando',
                required: true,
                pattern: config_1.Configuration.operand_validation_regex,
                message: config_1.Configuration.operand_validation_error_msg,
            }
        ]);
        this.radicand = (resp["radicand"] === config_1.Configuration.last_answer_keyword) ? lastAnswer : parseFloat(resp["radicand"]);
    }
    execute() {
        if (this.radicand < 0) {
            throw new Error("radicando não pode ser menor que zero");
        }
        return Math.sqrt(this.radicand);
    }
}
exports.OpSqRoot = OpSqRoot;
