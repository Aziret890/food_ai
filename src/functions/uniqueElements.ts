let tmpArray: any = []

const itemCheck = (item: any) => {
    if (tmpArray.indexOf(item.id) === -1) {
        tmpArray.push(item.id)
        return true
    }
    return false
}

export default itemCheck
