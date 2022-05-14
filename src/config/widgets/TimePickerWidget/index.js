

export default {
    name: 'TimePickerWidget',
    functional: true,
    render(h, context) {

        context.data.attrs = {
            valueFormat: 'HH:mm:ss',

            ...context.data.attrs
        }
        const oldinput = context.data.on.input;
        context.data.on = {
            ...context.data.on,
            change(val) {
                oldinput.apply(context.data.on, [val])

            }

        }
        return h('a-time-picker', context.data, context.children)
    }
}
