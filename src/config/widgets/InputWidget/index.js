export default {
  functional: true,
  render(h, context) {

      const oldinput = context.data.on.input

      let { type } = context.props 
      context.data.on = {
         ...context.data.on,
         input(e){
             oldinput( e.target.value)
         },
          change(e){
            oldinput(e.target.value)
          }
         

      }
      if(type === 'textarea'){
          return h('a-textarea', context.data, context.children)
      }
      return h('a-input', context.data)
  }
}


  

// export default {
//   props: {
//     type: String,
//   },
//   render(){
//     const h = this.$createElement
//     console.log('this :>> ', this);
//     let {attrs} = this.$attrs 
//     let data = {
//         attrs,
//         on: {
//           change(val){
//             console.log('val')
//             this.$emit('input', val)
//           }
//         }
//       }

//     if(this.type === 'texarea'){
//       return h('a-textarea', data)
//     }
//     return h('a-input', data)
//   }
// }

// <template>

//   <a-textarea v-if="type === 'textarea'" v-bind="$attrs" v-on="$listeners" @change="(val) => $emit('input', val)"></a-textarea>
//   <a-input v-else v-bind="$attrs" v-on="$listeners" @change="(val) => $emit('input', val)" ></a-input>

// </template>

// <script>
// export default {
//   props: {
//     type: String ,
//   }
// }
// </script>