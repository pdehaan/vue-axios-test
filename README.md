# vue-axios-test

The secret to [**vue-axios**](https://www.npmjs.com/package/vue-axios) greatness is the following snippet from [/src/main.js](https://github.com/pdehaan/vue-axios-test/blob/b292abc6e770742af1abf2fe06784f566231ff5f/src/main.js#L1-L7) which will allow you to use **axios** using `Vue.axios.get()`, `this.axios.get()`, or `this.$http.get()`:

```js
import axios from "axios";
import Vue from "vue";
import VueAxios from "vue-axios";
 
Vue.use(VueAxios, axios);
```

You can see an example of this in [/src/components/BreachList.vue](https://github.com/pdehaan/vue-axios-test/blob/b292abc6e770742af1abf2fe06784f566231ff5f/src/components/BreachList.vue#L32-L39) with the following snippet:

```js
  async mounted() {
    try {
      const res = await this.$http.get("https://haveibeenpwned.com/api/v2/breaches");
      this.breaches = res.data;
    } catch (err) {
      console.error(err);
    }
  }
```



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
