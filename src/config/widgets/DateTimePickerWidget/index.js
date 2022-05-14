// /**
//  * Created by Liu.Jun on 2020/7/22 13:21.
//  */
//  import moment from 'moment';


export default {
    name: 'DatePickerWidget',
    functional: true,
    render(h, context) {
        const { isNumberValue, isRange, ...otherProps } = context.data.attrs || {};
        context.data.attrs = {
            valueFormat: isNumberValue ? 'x' : 'YYYY-MM-DDTHH:mm:ssZ',

            ...otherProps
        }
        const oldinput = context.data.on.input;
        context.data.on = {
            ...context.data.on,
            change(val) {
                oldinput.apply(context.data.on, [val])

            }

        }
        return h(isRange ? 'a-range-picker' : 'a-date-picker', context.data, context.children)
    }
}
