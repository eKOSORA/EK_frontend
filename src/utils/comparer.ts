export function arrayComparer(arr1: Array<string>, arr2: Array<string>) {

    if (arr1.length !== arr2.length) return false

    const res = arr1.map((elt, index) => {
        if (elt !== arr2[index]) return false
        return true
    })
    return !res.includes(false)
}


export const ValidateEmail = (mail: string) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    return (false)
}
