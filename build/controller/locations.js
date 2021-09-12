"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addLocation = exports.getLocation = void 0;
const locations_1 = __importDefault(require("../models/locations"));
// @access Public
const getLocation = async (req, res, next) => {
    try {
        const locations = await locations_1.default.find();
        return res.status(200).json({
            success: true,
            count: locations.length,
            data: locations
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};
exports.getLocation = getLocation;
// @desc  Create a store
// @route POST /api/v1/stores
// @access Public
const addLocation = async (req, res, next) => {
    try {
        const location = await locations_1.default.create(req.body);
        return res.status(201).json({
            success: true,
            data: location
        });
    }
    catch (err) {
        console.error(err);
        if (err.code === 11000) {
            return res.status(400).json({ error: 'This Point already exists' });
        }
        res.status(500).json({ error: 'Server error' });
    }
    next();
};
exports.addLocation = addLocation;
