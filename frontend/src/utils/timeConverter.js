
const timeConverter = (arg) => {
  const now = new Date()
  const custom = new Date(arg)
  let result = arg

  const sec = Math.floor((now - custom) / 1000)
  const min = Math.floor(sec / 60 )
  const hour = Math.floor(min / 60)
  const day = Math.floor(hour / 24)
  const week = Math.floor(day / 7)
  const month = Math.floor(day/30)
  const year = Math.floor(month/12)

  if(day > 0){
    if(week > 0) result = 1 === week ? `${week} week ago` : `${week} weeks ago`
    if(month > 0) result = 1 === month ? `${month} month ago` : `${month} months ago`
    if(year > 0) result = 1 === year ? `${year} year ago`: `${year} years ago`
    result= 1 === day ? `${day} day ago` : `${day} days ago`
  }else if(hour > 0){
    result = 1 === hour ? `${hour} hour ago` : `${hour} hours ago`
  }else if(min > 0){
    result = `${min} min ago`
  }else{
    result = 'now'
  }

  return { date: custom, sec, min, hour, day, week, month, year, result }
}

export default timeConverter
