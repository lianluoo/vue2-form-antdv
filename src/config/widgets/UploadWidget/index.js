/**
 * Created by Liu.Jun on 2020/11/26 10:01 下午.
 */

// mock
// https://run.mocky.io/v3/518d7af7-204f-45ab-9628-a6e121dab8ca


export default {
    name: 'UploadWidget',
    props: {
        value: {
            default: null,
            type: [String, Array]
        },
        responseFileUrl: {
            default: res => (res ? (res.url || (res.data && res.data.url)) : ''),
            type: [Function]
        },
        btnText: {
            type: String,
            default: '点击上传'
        },
        // 传入 VNode
        slots: {
            type: null,
            default: null
        }
    },
    data() {
        // 设置默认 fileList
        const value = this.value;
        const isArrayValue = Array.isArray(value);

        const fileList = this.$attrs.fileList || (() => {
            if (isArrayValue) {
                return value.map((item, index) => ({
                    name: `已上传文件（${index + 1}）`,
                    url: item
                }));
            }
            if (value) {
                return [{
                    name: '已上传文件',
                    url: value
                }];
            }

            return [];
        })();


        return {
            isArrayValue,
            fileList
        };
    },
    methods: {
        getUrl(fileItem) {
            return (
                fileItem
                && ((fileItem.response && this.responseFileUrl(fileItem.response)) || fileItem.url))
                || '';
        },
        emitValue(fileList) {
            // v-model
            let value;

            if (this.isArrayValue) {
                value = fileList.length ? fileList.reduce((pre, item) => {
                    const url = this.getUrl(item);
                    if (url) pre.push(url);
                    return pre;
                }, []) : [];
            } else {
                const fileItem = fileList[fileList.length - 1];
                value = this.getUrl(fileItem);
            }

            this.$emit('input', value);
        }
    },
    render() {
        const h = this.$createElement;
        const attrs = this.$attrs;

        const {
            slots,
        } = this.$props;
        console.log('object :>> ', this);
        const data = {
            attrs: {
                ...attrs,
                fileList: this.fileList,
                'list-type': 'picture',
                showUploadList: true,

            },
            on: {
                change: (val) => {
                    if (val.file.status !== 'uploading') {
                        this.emitValue(val.fileList)
                    }
                    if (attrs.onChange) {
                        attrs.onChange.call(this, val)
                    }
                }
            }
        }

        if (!this.isArrayValue) data.attrs.limit = 1;

        const childVNode = [];

        if (slots && slots.default) {
            childVNode.push(h('template', {
                slot: 'default',
            }, [typeof slots.default === 'function' ? slots.default(h) : slots.default]));
        } else {
            childVNode.push(h('a-button', {
                props: {
                    type: 'primary'
                },
            }, [this.btnText]));
        }

        if (slots && slots.tip) {
            childVNode.push(h('template', {
                slot: 'tip',
            }, [typeof slots.tip === 'function' ? slots.tip(h) : slots.tip]));
        }


        return h('a-upload', data, childVNode);

    }
};
