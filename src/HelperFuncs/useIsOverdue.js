import { useSelector } from "react-redux"

function useIsOverdue(dueDate) {
    const currentDate = useSelector(state => state.date)

    function numericalDate(date) {
        let dd = String(date.day).padStart(2, '0');
        let mm = String(date.month).padStart(2, '0');
        let yyyy = String(date.year);

        let result = yyyy + mm + dd
        result = +result
        return result
    }
    if (numericalDate(currentDate) >= numericalDate(dueDate)) {
        return true
    }
    else return false
}

export default useIsOverdue