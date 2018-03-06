import { types } from "mobx-state-tree"

export const MenuItem = types
  .model("MenuItem", {
    id: types.identifier(types.number),
    text: types.optional(types.string, ''),
    url: types.maybe(types.string),
    items: types.maybe(types.array(types.late(() => MenuItem))),
    root: types.optional(types.boolean, false)
  })

export const Menu = types
  .model("MenuStore", {
    levels: types.optional(types.array(MenuItem), []),
    level: types.optional(types.number, 0)
  })
  .views(self => ({

  }))
  .actions(self => ({

    /**
     * Fetches the menu from the server
     */
    load() {
      if (!self.levels.length) {
        fetch('/api/nav', { credentials: 'same-origin' })
          .then(response => response.json())
          .then(root => self.setRoot(root))
      }
    },

    /**
     * Updates the root node
     * @param {Object} root 
     */
    setRoot(root) {
      self.levels[0] = MenuItem.create(root)
    },

    /**
     * Selects an item in the menu
     * @param {MenuItem} item 
     */
    setSelected(item) {
      item = MenuItem.create(item.toJSON())
      
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

