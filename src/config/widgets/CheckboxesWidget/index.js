
export default {
    functional: true,
    render(h, context) {
        let { enumOptions } = context.data.attrs

        enumOptions = Array.isArray(enumOptions) ? enumOptions : []

        return h('a-checkbox-group', context.data, {
            default() {
                return enumOptions.map((item, i) => h('a-checkbox', {
                    key: i,
                    value: item.value
                }, {
                    default: () => item.label
                }))
            }
        })
    }
}