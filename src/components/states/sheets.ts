import { atom, GetRecoilValue, selector } from "recoil";

const fileDataState = atom({
    key: 'fileDataState',
    default: {
        items: [],
        fileName: '',
        timeUploaded: '',
        isFileUploaded: false,
        errorState: false,
        errorMessage: "",
        loading: false,
        sheets: 0,
    }
})

const fileDataStateSelector = selector({
    key: 'fileDataStateSelector',
    get: ({ get }) => {
        return get(fileDataState)
    },
    set(opts, newValue) {
        const { set } = opts
        set(fileDataState, newValue)
    },
})


export { fileDataStateSelector, fileDataState }
