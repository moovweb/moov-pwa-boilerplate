import { types } from "mobx-state-tree"

export const MenuItem = types
  .model("MenuItem", {
    id: types.identifier(),
    text: types.optional(types.string, ''),
    items: types.maybe(types.array(types.late(() => MenuItem))),
    root: types.optional(types.boolean, false)
  })

export const Menu = types
  .model("MenuStore", {
    levels: types.array(types.reference(MenuItem)),
    level: types.number
  })
  .views(self => ({

  }))
  .actions(self => ({
    setSelected(item) {
      self.level++
      if (self.levels.length <= self.level) {
        self.levels.push(item)
      } else {
        self.levels[self.level] = item
      }
    },
    goBack() {
      self.level = Math.max(0, self.level - 1)
    }
  }))

const root = MenuItem.create({
  id: '0',
  root: true,
  items: [{
    id: '1',
    text: 'Home',
    url: '/'
  }, {
    id: '5',
    text: 'Bedding',
    items: [
      { id: '6', text: 'Shop by Category' },
      { id: '7', text: 'Shop by Color' },
      { id: '8', text: 'Featured Bedding' }
    ]
  }]
})

export const menuStore = Menu.create({
  level: 1,
  levels: [root]
})