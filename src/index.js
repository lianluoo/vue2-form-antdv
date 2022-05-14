/**
 * Created by Liu.Jun on 2019/11/29 11:25.
 */

 import createVue2Core, { fieldProps, SchemaField } from '@lljj/vue2-form-core';

 import i18n from '@lljj/vjsf-utils/i18n';
 import * as vueUtils from '@lljj/vjsf-utils/vueUtils';
 import * as formUtils from '@lljj/vjsf-utils/formUtils';
 import * as schemaValidate from '@lljj/vjsf-utils/schema/validate';
 import getDefaultFormState from '@lljj/vjsf-utils/schema/getDefaultFormState';
 

import WIDGET_MAP from './config/widgets/WIDGET_MAP.js';

import './style.css';

const globalOptions = Object.freeze({
    WIDGET_MAP: Object.freeze(WIDGET_MAP),
    COMPONENT_MAP: Object.freeze({
        form: {
            functional: true,
            render(h, context) {
    
    
                console.log('form', context.slots());
                // 处理 labelPosition 参数和layout之间转换
                const labelPositionMap = {
                    top: {
                        layout: 'vertical'
                    },
                    left: {
                        layout: 'horizontal',
                        labelAlign: 'left'
                    },
                    right: {
                        layout: 'horizontal',
                        labelAlign: 'right'
                    }
                };
    
                context.data.props = {
                    ...context.data.props,
                    ...labelPositionMap[context.data.props.labelPosition || 'top']
                   
                };
    
    
                return h('a-form-model', context.data, context.children);
            }
        },
        formItem: {
            functional: true,
            render(h, context) {
               
        
                // https://github.com/vuejs/vue/issues/8380
                // 具名插槽需要重新显示的指定，无法直接透传 Orz...
                return h('a-form-model-item', context.data, context.children);
            }
        },
        button: 'a-button',
        popover: {
            functional: true,
            render(h, context) {
    
                console.log('popover', context)
        
                // 交换 slot
                return h('a-popover', context.data, [
                    h('template',{ slot: 'defalut'}, context.slots().default ),
                    h('template',{ slot: 'content'}, context.slots().reference )
                ]);
            }
        }
    }),
    HELPERS: {
        // 是否mini显示 description
        isMiniDes(formProps) {
            return formProps && ['left', 'right'].includes(formProps.labelPosition);
        }
    }
});

const JsonSchemaForm = createVue2Core(globalOptions);

// 存在Vue 全局变量默认注册 VueForm 组件
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component('VueForm', JsonSchemaForm);
}

export default JsonSchemaForm;

export {
    globalOptions,
    SchemaField,
    getDefaultFormState,
    fieldProps,
    vueUtils,
    formUtils,
    schemaValidate,
    i18n
};
