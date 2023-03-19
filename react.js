const date_contain_ele = document.querySelector('#dates_container')
const month_header_ele = document.querySelector('#month_display')
const current_info_ele = document.querySelector('#current_info_display')
const head_ele = document.querySelector('head')

const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const month_names = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function calen_info_find(){
    const temp_d = new Date()
    let month = temp_d.getMonth()
    let month_name = month_names[month]
    let day = temp_d.getDay()
    let day_name = weekday[day]
    const date = temp_d.getDate()
    let year = temp_d.getFullYear()
    const leap_check = checkLeapYear(year)
    let max_date = null
    if (month%2 == 0 && month != 'February'){
        max_date = 31
    }
    else if (month_name == 'February'){
        if(leap_check == true){
            max_date = 29
        }
        else{
            max_date = 28
        }
    }
    else{
        max_date = 30
    }
    if (date < 10){
        date = `0${date}`
    }
    return [date,day_name,month_name,year,max_date]
}

// program to check leap year
function checkLeapYear(year) {
    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true
    } else {
        return false
    }
}


function add_info(){
    let info_arr = calen_info_find()
    month_header_ele.innerText = info_arr[2]
    current_info_ele.innerText = `${info_arr[1]} ${info_arr[0]} ${info_arr[3]}`
    const d = new Date()
    let firstDay = new Date(d.getFullYear(), d.getMonth(), 1);
    for (let i=2;i<=info_arr[4];i++){
        const temp_dates_div = document.createElement('p')
        temp_dates_div.setAttribute('class','date_nums')
        temp_dates_div.innerText = i
        date_contain_ele.appendChild(temp_dates_div)
    }
    console.log(firstDay)
    info_arr[0] = Number(info_arr[0])
    let date_child = date_contain_ele.children
    date_child[0].style = `grid-column-start:${firstDay.getDay()}`
    date_child[info_arr[0]-1].setAttribute('class','date_nums current')
}

add_info()