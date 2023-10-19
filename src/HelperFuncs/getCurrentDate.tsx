import { DateObject } from "../models/project.model";

function getCurrentDate():DateObject {
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