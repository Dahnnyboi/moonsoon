import moment from 'moment'

function useConvertUnix(unix_timestamp){
    const time = moment.unix(unix_timestamp)
    
    return time.format('h:mm a')
}

export default useConvertUnix