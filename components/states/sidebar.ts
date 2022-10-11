import { atom, selector } from "recoil";

const sidebarState = atom({
    key: 'loader-state',
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
