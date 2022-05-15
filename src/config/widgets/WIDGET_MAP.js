/**
 * Created by Liu.Jun on 2020/4/21 18:23.
 */

// widget 组件对应elementUi 配置表

import widgetComponents from './index';

const {
    CheckboxesWidget,
    RadioWidget,
    SelectWidget,
    TimePickerWidget,
    DatePickerWidget,
    DateTimePickerWidget,
    ColorWidget,
    InputNumber,
    InputWidget,
    EmailWidget,
    SwitchWidget
} = widgetComponents;

export default {
    types: {
        boolean: SwitchWidget,
        string: InputWidget,
        
        number: InputNumber,
        integer: InputNumber,
    },
    formats: {
        color: ColorWidget,
        time: TimePickerWidget, // 20:20:39+00:00
        date: DatePickerWidget, // 2018-11-13
        'date-time': DateTimePickerWidget, // 2018-11-13T20:20:39+00:00,
        email: EmailWidget,
    },
    common: {
        select: SelectWidget,
        radioGroup: RadioWidget,
        checkboxGroup: CheckboxesWidget,
    },
    widgetComponents
};
