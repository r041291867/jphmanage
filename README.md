# jphmanage

本專案使用vue-cli3所建構 [Demo](https://r041291867.github.io/jphmanage/)
## yarn安裝vue-cli3

```
yarn global add @vue/cli
```

## 創建新專案

```
vue create my-app
```

## 安裝vuetify

```
vue add vuetify
```

## 使用vuetify 
```                                                    main.js
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
})
```

## 使用webpack

修改檔案儲存後，網頁會立即產生修改後的結果
```
vue add webpack
```

## 安裝相關依賴
```
yarn install
```

### 本地端測試 網址`localhost:8080`
```
yarn serve
```

### 打包 （會產生dist資料夾，部署網站時需要）
```
yarn build
```

### Lints and fixes files
```
yarn lint
```
