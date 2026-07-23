import { TaleemAdminClient } from "./TaleemAdminClient.js";

const taleem = new TaleemAdminClient(
    "http://127.0.0.1:9000"
);

await taleem.login(
    "admin@example.com",
    "12345678"
);

console.log(
    taleem.isLoggedIn()
);

console.log(
    await taleem.verify()
);