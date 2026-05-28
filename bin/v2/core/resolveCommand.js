import StartEndPoint from "../AppJs/index.js";
import AddSubRoute from "../AddSubRoute/index.js";
import AddTableName from "../Tables/index.js";

// resolveCommand.js
const map = {
    StartEndPoint,
    AddSubRoute,
    AddTableName
};

export default function resolveCommand(cmd) {
    return map[cmd] || null;
};