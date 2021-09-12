"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const LocationSchema = new mongoose_1.default.Schema({
    coordinates: {
        type: [Number],
        index: { type: '2dsphere', sparse: false },
    },
});
LocationSchema.pre('save', async function (next) {
    const Location = LocationSchema;
    this.location = {
        type: 'Point',
        coordinates: Location.coordinates, //[Location.longitude, Location.latitude],
    };
});
const Location = mongoose_1.default.model('Location', LocationSchema);
exports.default = Location;
//export { 'Location', LocationSchema };
