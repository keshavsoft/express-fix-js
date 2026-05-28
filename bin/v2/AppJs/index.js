import updateAppJs from "./UpdateAppJs/index.js";

export default ({ startRoute = "", toPath }) => {
    const localToPath = toPath;

    const fromUpdate = updateAppJs({
        appJsPath: `${localToPath}/app.js`,
        endpoint: startRoute
    });

    return true;
};