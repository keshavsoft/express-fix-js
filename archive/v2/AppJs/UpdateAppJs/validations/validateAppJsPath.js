// v2/AppJs/validations/validateAppJsPath.js

import fs from "fs";

const validateAppJsPath = ({ appJsPath }) => {
    if (!fs.existsSync(appJsPath)) {
        throw new Error("app.js file not found");
    };
};

export default validateAppJsPath;