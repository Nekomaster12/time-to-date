import { format, intervalToDuration} from "./node_modules/date-fns/esm/index.js"
const HTML_ELEMENTS = {
    date: document.querySelector(".date"),
    button: document.querySelector(".button"),
    result: document.querySelector(".result")
}
function formatDate(){
    let date = new Date(HTML_ELEMENTS.date.value.split('-'))
    let now = new Date()
    let interval = intervalToDuration({
        start: now,
        end: date
    })
    HTML_ELEMENTS.result.textContent = `До этой даты осталось ${interval.years} лет ${interval.months} месяцев ${interval.days} дней ${interval.hours} часов ${interval.minutes} минут ${interval.seconds} секунд`
}
HTML_ELEMENTS.button.addEventListener("click", function(){formatDate()})