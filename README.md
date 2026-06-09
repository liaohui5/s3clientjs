## 介绍

兼容 [@aws-sdk/client-s3](https://github.com/aws/aws-sdk-js-v3) 和 [ali-oss](https://github.com/ali-sdk/ali-oss) 的 s3 API 客户端

由于服务商不兼容 Virtual Host-Style 的链接地址, 所有需要封装


## 安装

```npm
npm i s3clientjs
```

## 快速开始

```js
import S3Storage from "s3clientjs";
import {type S3Config} from "s3clientjs";

(async () => {
  // use rustfs as s3 server
  const s3 = new S3Storage({
    endpoint: "http://127.0.0.1:9000",
    region: "cn",
    bucket: "example",              // 注意这个 bucket 必须存在
    accessKeyId: "rustfsadmin",     // 注意这是登录用户名
    secretAccessKey: "rustfsadmin", // 这是登录密码
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
```

