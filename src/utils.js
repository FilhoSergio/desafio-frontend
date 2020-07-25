const filter_key_word = (arr, searchKey) => {
    return arr.filter(obj => Object.keys(obj).some(key => contains(obj[key], searchKey)));
}

export { filter_key_word }
