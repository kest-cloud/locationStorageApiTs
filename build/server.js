"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./config/db"));
// load env vars
dotenv_1.default.config({ path: '../config/config.env' });
// Connect to database
(0, db_1.default)();
const app = (0, express_1.default)();
// Body parser
app.use(express_1.default.json());
// Enable cors
app.use((0, cors_1.default)());
// Set static folder
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Routes
app.use('/api/v1/location', require('./routes/locations'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
