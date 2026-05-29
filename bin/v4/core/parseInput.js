export default function parseInput() {
    const [...args] = process.argv.slice(2);

    return {
        startRoute: args[0] || null,
        showLog: args[1] || false,
        toPath: process.cwd()
    };
};