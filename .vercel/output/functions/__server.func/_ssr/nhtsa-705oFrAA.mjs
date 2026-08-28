import { t as createServerFn } from "./ssr.mjs";
import { t as createSsrRpc } from "./createSsrRpc-C1p7zOu_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nhtsa-705oFrAA.js
var decodeVin = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("6883b9cb4bad31f0243989045daee5f6cecad4d7529f675d01ed5bf2950e0243"));
var lookupRecalls = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("bebb09897503d422d8cd762dc118116bdd4d19a7f12b92ad4076451c4afe4925"));
//#endregion
export { lookupRecalls as n, decodeVin as t };
