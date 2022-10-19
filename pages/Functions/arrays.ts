export function removeItem<T>(arr: Array<T>, index: number): Array<T> {
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}
