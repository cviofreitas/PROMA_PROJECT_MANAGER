const reversedArray = (array) => {
    let reversedArray = []
    for (let i = array.length - 1; i >= 0; i--) {
        const valueAtIndex = array[i]

        reversedArray.push(valueAtIndex)
    }
    return reversedArray
}

export default reversedArray