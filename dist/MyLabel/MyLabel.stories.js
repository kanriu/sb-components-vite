"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFontColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var MyLabel_1 = require("./MyLabel");
var meta = {
    title: "UI/MyLabel",
    component: MyLabel_1.MyLabel,
    tags: ["autodocs"],
    argTypes: {
        color: { control: "select" },
        //backgroundColor: { control: "color" },
    },
};
exports.default = meta;
exports.Basic = {
    args: {
        label: "Basic",
        size: "normal",
    },
};
exports.AllCaps = {
    args: {
        label: "Allcaps",
        allCaps: true,
        size: "normal",
    },
};
exports.Secondary = {
    args: {
        label: "Secondary",
        size: "normal",
        color: "secondary", //
    },
};
exports.Tertiary = {
    args: {
        label: "Tertiary",
        size: "normal",
        color: "tertiary",
    },
};
exports.CustomFontColor = {
    args: {
        fontColor: "#5517ac",
        size: "h1",
        label: "CustomFontColor",
    },
};
