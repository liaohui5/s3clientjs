// import fs from "node:fs";
import type { S3Config } from "./s3client";
import S3Storage from "./s3client";

(async () => {
  // use rustfs as s3 server
  const s3 = new S3Storage({
    endpoint: "http://127.0.0.1:9000",
    region: "cn",
    bucket: "example",
    accessKeyId: "rustfsadmin",
    secretAccessKey: "rustfsadmin",
    skipBackupFile: true,
  } as S3Config);

  const isConnected = await s3.checkConnection();
  if (!isConnected) {
    console.error("server connection failed");
    return;
  }

  // list files
  const items = await s3.listFiles();
  console.log(items);

  // upload file
  // const data = fs.readFileSync("./test.png");
  // const file = await s3.putFileContents("test.png", data);
  // console.log("[upload]", file);

  // download file
  // const file = await s3.getFileContents("test.png");
  // fs.writeFileSync("./rust.png", file);
  // console.log("[download]", file.length);

  // delete file
  // const file = await s3.deleteFile("test.png");
  // console.log("[delete]", file);
})();
