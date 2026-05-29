import index from "../index.js";

const startFunc = async () => {
    const fn = await index();

    await fn({
        showLog: true
    });
};

startFunc().then();