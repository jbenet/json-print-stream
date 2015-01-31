# json-print-stream

It's [json-print](https://www.npmjs.org/package/json-print) as a stream. Comes with a bin so you can json-print in the cli.

### Lib Example

```js
var ndjson = require('ndjson')
var jpstream = require('json-pretty-stream')

process.stdin
  .pipe(ndjson.parse({strict:false}))
  .pipe(jpstream())
  .pipe(process.stdout)
```

### Cli Example

Note: this has colors in my term.

```sh
> npm install -g json-print-stream
> cat sample.ndjson
{"GetBlockRequest":"6249d3d1-6be8-4b2f-a94f-83b0882c519b","duration":60005019996,"event":"GetBlockRequest","key":"QmWi1oNpAbi41J7HP5Rg3Rr6QqhbVaKMzbi124pSKfyzMF","system":"bitswap","time":"2015-01-31T07:22:16.609384666Z"}
{"GetBlockRequest":"1017771f-9c19-4038-a5ae-703765ae7d01","event":"GetBlockRequestBegin","key":"QmWi1oNpAbi41J7HP5Rg3Rr6QqhbVaKMzbi124pSKfyzMF","system":"bitswap","time":"2015-01-31T07:22:17.615877815Z"}
{"event":"connLifetimeBegin","localAddr":"/ip4/0.0.0.0/tcp/4001","localPeer":"QmbdMn9tehTu9hdBtyhECstXPq1q3tF92GsP6H7pxmaLeu","remoteAddr":"/ip4/10.0.1.10/tcp/4001","subsystem":"conn","system":"conn","time":"2015-01-31T07:22:48.06066292Z"}
> cat sample.ndjson | json-print
{
    "GetBlockRequest": "6249d3d1-6be8-4b2f-a94f-83b0882c519b",
    "duration": 60005019996,
    "event": "GetBlockRequest",
    "key": "QmWi1oNpAbi41J7HP5Rg3Rr6QqhbVaKMzbi124pSKfyzMF",
    "system": "bitswap",
    "time": "2015-01-31T07:22:16.609384666Z"
}
{
    "GetBlockRequest": "1017771f-9c19-4038-a5ae-703765ae7d01",
    "event": "GetBlockRequestBegin",
    "key": "QmWi1oNpAbi41J7HP5Rg3Rr6QqhbVaKMzbi124pSKfyzMF",
    "system": "bitswap",
    "time": "2015-01-31T07:22:17.615877815Z"
}
{
    "event": "connLifetimeBegin",
    "localAddr": "/ip4/0.0.0.0/tcp/4001",
    "localPeer": "QmbdMn9tehTu9hdBtyhECstXPq1q3tF92GsP6H7pxmaLeu",
    "remoteAddr": "/ip4/10.0.1.10/tcp/4001",
    "subsystem": "conn",
    "system": "conn",
    "time": "2015-01-31T07:22:48.06066292Z"
}
```
