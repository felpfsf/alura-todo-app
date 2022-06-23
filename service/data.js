export const removeRepeatedDates = dates => {
  const uniqueDates = []
  dates.forEach(date => {
    if (uniqueDates.indexOf(date.formatedDate) === -1) {
      uniqueDates.push(date.formatedDate)
    }
  })
  return uniqueDates
}

export const sortDate = date => {
  date.sort((a, b) => {
    const firstDate = moment(a, 'DD/MM/YYYY').format('YYYYMMDD')
    const secondDate = moment(b, 'DD/MM/YYYY').format('YYYYMMDD')
    return firstDate - secondDate
  })
}
