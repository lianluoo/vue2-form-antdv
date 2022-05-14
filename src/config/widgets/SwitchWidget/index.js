export default {
  functional: true,
  render(h, context) {

    const oldinput = context.data.on.input

    context.data.on = {
      ...context.data.on,
      change(val) {
        oldinput.apply(context.data.on, [val])
      }
    }

    return h('a-switch', context.data, context.children)
  }
}