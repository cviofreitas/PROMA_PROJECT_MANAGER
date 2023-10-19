import { useSelector } from "react-redux"
import { DateObject } from "../models/project.model";

type RootState = {
    date: DateObject
}
function useIsOverdue(dueDate:DateObject) {
    const currentDate = useSelector((state:RootState) => state.date)

    function numericalDate(date:DateObject) {
        let dd = String(date.day).padStart(2, '0');
        let mm = String(date.month).padStart(2, '0');
        let yyyy = String(date.year);

        let result:string|number = yyyy + mm + dd
        result = +result
        return result
    }
    if (numericalDate(currentDate) >= numericalDate(dueDate)) {
        return true
    }
    else return false
}

export default useIsOverdue