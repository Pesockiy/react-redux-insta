export const updateEndigDayString = (count) => {
    let updatedStr = "";
    if ((count % 10 === 2 || count % 10 === 3 || count % 10 === 4) && count) {
        updatedStr = "раза";
    } else {
        updatedStr = "раз";
    }
    return updatedStr;
};