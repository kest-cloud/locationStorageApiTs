"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const locations_1 = require("../controller/locations");
const router = express_1.default.Router();
router
    .route('/')
    .get(locations_1.getLocation)
    .post(locations_1.addLocation);
module.exports = router;
