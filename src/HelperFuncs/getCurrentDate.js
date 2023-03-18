function getCurrentDate() {
    let today = new Date();
    let dd = today.getDate()
    let mm = today.getMonth() + 1
    let yyyy = today.getFullYear();


    return {
        day: dd,
        month: mm,
        year: yyyy
    }
}

export default getCurrentDate