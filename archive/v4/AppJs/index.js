import updateAppJs from "./UpdateAppJs/index.js";

export default ({ startRoute = "", toPath, showLog }) => {
    const localToPath = toPath;

    const fromUpdate = updateAppJs({
        appJsPath: `${localToPath}/app.js`,
        endpoint: startRoute,
        showLog
    });

    return true;
};