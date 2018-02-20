import { types } from "mobx-state-tree"

export const MenuItem = types
  .model("MenuItem", {
    id: types.identifier(),
    text: types.string,
    items: types.maybe(types.array(types.late(() => MenuItem)))
  })

export const Menu = types
  .model("MenuStore", {
    items: types.array(MenuItem),
    level: types.number,
    selected: types.maybe(types.reference(MenuItem))
  })
  .views(self => ({

  }))
  .actions(self => ({
    setSelected(item) {
      self.selected = item
      self.level = 2
    },
    goBack() {
      self.level = 1
    }
  }));

export const menuStore = Menu.create({
  level: 1,
  items: [{
    id: '1',
    text: 'Rugs',
    items: [
      { id: '2', text: 'Featured Rugs' },
      { id: '3', text: 'Shop Rugs by Material' },
      { id: '4', text: 'Shop Rugs by Size' }
    ]
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