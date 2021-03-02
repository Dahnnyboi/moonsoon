import moment from 'moment'

function useConvertReadableTimeFormat(date) {
    const dateToFormat = moment(date)

    return dateToFormat.format("MMMM D")
}

export default useConvertReadableTimeFormat