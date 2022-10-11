import { atom, selector } from "recoil";

const loaderState = atom({
    key: 'loader-state',
    default: 20
})

const loaderStateSelector = selector({
    key: 'loader-state-selector',
    get: ({ get }) => {
        return get(loaderState)
    },
    set(opts, newValue) {
        const { set } = opts
        set(loaderState, newValue)
    }
})

export { loaderStateSelector, loaderState }
