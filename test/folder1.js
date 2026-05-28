import index from "../index.js";

const startFunc = async () => {
    const fn = await index();

    await fn({
        startRoute: "folder1",
        toPath: process.cwd(),
        showLog: true
    });
};

startFunc().then();