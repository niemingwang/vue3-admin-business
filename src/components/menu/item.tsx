export default defineComponent({
  name: 'MenuItem',
  props: {
    /**
     * @zh 菜单项的标题
     * @en The title of the menu item
     */
    title: {
      type: String
    }
  },
  setup(props) {
    const { title } = toRefs(props)
    return () => <li>{title}</li>
  }
})
