// amplify/functions/my-demo-function/resource.ts
import { defineFunction } from "@aws-amplify/backend";

export const mmiDemoJWTApiFunction = defineFunction({
  /*
    name?: string // optional parameter to specify a function name. In this case, it will default to "my-demo-function" (the name of the directory where the function is defined)
    entry?: string // optional path to the function code. Defaults to ./handler.ts
  */
});
