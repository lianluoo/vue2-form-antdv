
export default {
  name: 'DatePickerWidget',
  functional: true,
  render(h, context) {
    context.data.domAttrs = {
      ...context.data.domAttrs,
      type: 'email',
    }
    const oldinput = context.data.on.input
    context.data.on = {
      ...context.data.on,
      input(val) {
        oldinput.apply(context.data.on, val)
      }
    }
  }
}