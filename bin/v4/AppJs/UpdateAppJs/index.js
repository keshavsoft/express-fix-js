// v2/AppJs/index.js

import fs from "fs";

// import updateImports from "./updateImports/index.js";
import updateAppUse from "./updateUse/index.js";

import updateImports from "./common/AlterFile/index.js";

import validateEndpoint from "./validations/validateEndpoint.js";
import validateAppJsPath from "./validations/validateAppJsPath.js";

const updateAppJs = ({ appJsPath, endpoint, showLog = false }) => {
    validateEndpoint({ endpoint });

    validateAppJsPath({
        appJsPath,
        fs
    });

    const fromImports = updateImports({
        appJsPath,
        endpoint,
        showLog
    });

    if (showLog) console.log("fromImports : ", fromImports);

    updateAppUse({
        appJsPath,
        endpoint
    });

    return false;
};

export default updateAppJs;