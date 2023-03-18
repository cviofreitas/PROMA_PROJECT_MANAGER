
function useDisplayDate(date) {

    let dd = String(date.day).padStart(2, '0');
    let mm = String(date.month).padStart(2, '0');
    let yyyy = String(date.year);

    const result = mm + '-' + dd + '-' + yyyy;
    return result
}

export default useDisplayDate