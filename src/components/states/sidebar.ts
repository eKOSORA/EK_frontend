import { atom, selector } from "recoil";

const sidebarState = atom({
    key: 'sidebar-state-selector',
    default: false
})

const sidebarStateSelector = selector({
    key: 'sidebar-state-selector',
    get: ({ get }) => {
        return get(sidebarState)
    },
    set(opts, newValue) {
        const { set } = opts
        set(sidebarState, newValue)
    }
})

export { sidebarStateSelector, sidebarState }
