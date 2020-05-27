"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const app = express_1.default();
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { start, stop, first_name } = req.query;
    try {
        const cars = yield prisma.car_owners.findMany({
            orderBy: { first_name: 'asc' },
            first: +start, last: +stop,
            where: {
                first_name: first_name.toString()
            }
        });
        return res.status(200).json({ data: cars });
    }
    catch (error) {
        console.error(error);
    }
}));
const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
    error ? console.error(error) : console.log(`Drone running on post [${PORT}]`);
});
//# sourceMappingURL=server.js.map