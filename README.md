https://scrapbox.io/forme/firebase_cloud_functions

## memo
`firebase functions:config:set someservice.key="THE API KEY" someservice.id="THE CLIENT ID"`で環境変数を設定する


設定した環境変数は`firebase functions:config:get`で確認できる

cloud functions内部で環境変数にアクセスしたい場合は、`functions.config()`でアクセスできる

## 特定の関数のみデプロイする

```
firebase deploy --only functions:<function name>
```

### 環境変数に配列を設定する

↓のようにインデックスを指定する

```
firebase functions:config:set \ api.urls.0="https:sample.com/v1/api/post" \
api.urls.1="https:sample.com/v1/api/get"
```

以下のような形で環境変数にアクセスする

```
const urls = functions.config().urls
```

### reqestBody関数はこれで検証する

`url -X POST -H "Content-Type:application/json"  -d '{"message":"hello world!"}' https://us-central1-fir-cloudfunctions-test.cloudfunctions.net/requestBody`

### checkEmailsはこんな感じで試す

`curl https://us-central1-fir-cloudfunctions-test.cloudfunctions.net/checkEmails?mail=hogehgoe`
