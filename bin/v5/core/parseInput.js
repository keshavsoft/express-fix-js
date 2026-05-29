export default function parseInput({ endpoint, toPath, showLog }) {
    const [...args] = process.argv.slice(2);

    return {
        endpoint: args[0] || endpoint,
        showLog: args[1] || showLog,
        toPath: process.cwd() || endpoint
    };
};