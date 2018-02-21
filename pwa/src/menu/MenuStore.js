import { types } from "mobx-state-tree"

export const MenuItem = types
  .model("MenuItem", {
    id: types.identifier(),
    text: types.optional(types.string, ''),
    url: types.maybe(types.string),
    items: types.maybe(types.array(types.late(() => MenuItem))),
    root: types.optional(types.boolean, false)
  })

export const Menu = types
  .model("MenuStore", {
    levels: types.optional(types.array(types.reference(MenuItem)), []),
    level: types.optional(types.number, 0)
  })
  .views(self => ({

  }))
  .actions(self => ({

    /**
     * Fetches the menu from the server
     */
    load() {
      fetch('/data/menu')
        .then(response => response.json())
        .then(root => self.setRoot(root))
    },

    /**
     * Updates the root node
     * @param {Object} root 
     */
    setRoot(root) {
      self.levels[0] = MenuItem.create({
        id: '0',
        root: true,
        ...root
      })
    },

    /**
     * Selects an item in the menu
     * @param {MenuItem} item 
     */
    setSelected(item) {
      self.level++
      if (self.levels.length <= self.level) {
        self.levels.push(item)
      } else {
        self.levels[self.level] = item
      }
    },

    /**
     * Goes back one level
     */
    goBack() {
      self.level = Math.max(0, self.level - 1)
    }

  }))

export const menuStore = Menu.create()
