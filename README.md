# @lljj/vue-json-schema-form

基于 [Antdv](https://1x.antdv.com//) 、Vue2、 [JSON Schema](https://json-schema.org/understanding-json-schema/index.html) 生成表单

> 通过 [@lljj/vue2-form-core](https://github.com/lljj-x/vue-json-schema-form/tree/master/packages/lib/vue2/vue2-core) 适配 Antdv 1x 库

## 安装

本包没有经过测试, 有什么问题自己解决吧~

```ssh
## npm
npm install --save @lianluoo/vue2-form-antdv

## yarn
yarn add @lianluoo/vue2-form-antdv
```

## 使用
```html
<VueForm
    v-model="formData"
    :schema="schema"
>
</VueForm>
```

```js
//  使用
import VueForm from '@lianluoo/vue2-form-antdv';

export default {
    name: 'Demo',
    components: {
        VueForm
    },
    data() {
        return {
            formData: {},
            schema: {
                type: 'object',
                required: [
                    'userName',
                    'age',
                ],
                properties: {
                    userName: {
                        type: 'string',
                        title: '用户名',
                        default: 'Liu.Jun',
                    },
                    age: {
                        type: 'number',
                        title: '年龄'
                    },
                    bio: {
                        type: 'string',
                        title: '签名',
                        minLength: 10,
                        default: '知道的越多、就知道的越少',
                        'ui:options': {
                            placeholder: '请输入你的签名',
                            type: 'textarea',
                            rows: 1
                        }
                    }
                }
            }
        };
    }
};
```

## License
Apache-2.0
