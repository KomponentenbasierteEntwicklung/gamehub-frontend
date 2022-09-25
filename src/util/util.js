export function formatArrayDateToString(dateAsArrayYMD) {
    const year = dateAsArrayYMD[0]
    const month = dateAsArrayYMD[1]
    const date = dateAsArrayYMD[2]
    return `${date}-${month}-${year}`
}
