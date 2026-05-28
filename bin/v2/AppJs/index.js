import updateAppJs from "./UpdateAppJs/index.js";

export default ({ folderName = "", toPath }) => {
    const localToPath = toPath;

    const fromUpdate = updateAppJs({
        appJsPath: `${localToPath}/app.js`,
        endpoint: folderName
    });

    return true;
};