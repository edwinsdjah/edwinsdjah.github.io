const cityContainer = document.getElementById('option-city');
const timeContainer = document.getElementById('option-time');
const tableContainer = document.querySelector('.table tbody');
const errorContainer = document.querySelector('.errorGPS');
const gpsFilterOption = document.querySelector('#gps-option-time');
const animationContainer = document.querySelector('.loading-state')
let gpsfilter = document.querySelector('.gpsFilterContainer');
let citybyGps
let cityText = gpsfilter.querySelector('.cityText');
let cityValue
let timeValue
const btnSearch = document.querySelector('.btn-search');
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
if (month < 10) {
    month = `0${month}`
}
let currentDate = `${day}-${month}-${year}`;
console.log(currentDate)

function generateCities() {
    cities.sort((a, b) => a.localeCompare(b));
    cities.forEach(e => {
        const option = document.createElement('option');
        option.value = e;
        option.textContent = e;
        cityContainer.appendChild(option)
    })
}

function getSchedule(city, time) {
    fetch(`https://api.aladhan.com/v1/hijriCalendarByCity/1444/9?city=${city}&country=indonesia&method=11&tune=3,3,3,3,3,3,3,3`)
        .then(response => response.json())
        .then(jsonResponse => {
            let startingIndex
            let elementstoKeep
            let cards = ''
            switch (time) {
                case '7':
                    elementstoKeep = time
                    for (i = 0; i < jsonResponse.data.length; i++) {
                        if (jsonResponse.data[i].date.gregorian.date === currentDate) {
                            startingIndex = i
                        }
                    }
                    jsonResponse.data.splice(0, startingIndex)
                    jsonResponse.data.splice(time)
                    // let newArray = jsonResponse.data.slice(startingIndex, startingIndex + elementstoKeep);
                    console.log(jsonResponse.data)
                    for (i = 0; i < jsonResponse.data.length; i++) {
                        cards += getContent(jsonResponse.data);
                    }
                    tableContainer.innerHTML = cards
                    searchToday();
                    break;
                case '1':
                    elementstoKeep = time
                    for (i = 0; i < jsonResponse.data.length; i++) {
                        if (jsonResponse.data[i].date.gregorian.date === currentDate) {
                            startingIndex = i
                        }
                    }
                    tableContainer.innerHTML = `<tr class="schedule-list">
                    <td>${jsonResponse.data[startingIndex].date.hijri.day} Ramadhan</td>
                    <td class='gregorian'>${jsonResponse.data[startingIndex].date.readable}</td>
                    <td>${jsonResponse.data[startingIndex].timings.Imsak}</td>
                    <td>${jsonResponse.data[startingIndex].timings.Fajr}</td>
                    <td>${jsonResponse.data[startingIndex].timings.Dhuhr}</td>
                    <td>${jsonResponse.data[startingIndex].timings.Asr}</td>
                    <td>${jsonResponse.data[startingIndex].timings.Maghrib}</td>
                    <td>${jsonResponse.data[startingIndex].timings.Isha}</td>
                  </tr>`
                  searchToday();
                    break;
                case '30':
                    for (i = 0; i < jsonResponse.data.length; i++) {
                        cards += getContent(jsonResponse.data)
                    }
                    tableContainer.innerHTML = cards
                    searchToday();
            }

            console.log(jsonResponse.data)
        })
        .catch(error => console.error(error));
}

function getContent(arr) {
    return `<tr class="schedule-list">
    <td>${arr[i].date.hijri.day} Ramadhan</td>
    <td class='gregorian'>${arr[i].date.readable}</td>
    <td>${arr[i].timings.Imsak}</td>
    <td>${arr[i].timings.Fajr}</td>
    <td>${arr[i].timings.Dhuhr}</td>
    <td>${arr[i].timings.Asr}</td>
    <td>${arr[i].timings.Maghrib}</td>
    <td>${arr[i].timings.Isha}</td>
  </tr>`
}

function gpsCheck() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(getGPSlocation,function(error){
            errorContainer.classList.remove('hide');
            errorContainer.classList.add('fade-in');
            animationContainer.classList.add('fade-out');
            animationContainer.classList.add('hide');
        })
    }
}

function getGPSlocation(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude)
    console.log(longitude)
    const apiUrl = `https://api.aladhan.com/v1/hijriCalendar/1444/9?latitude=${latitude}&longitude=${longitude}&method=11&tune=3,3,3,3,3,3,3,3`;
    fetch(apiUrl)
        .finally(function () {
            gpsfilter.classList.remove('hide')
            gpsfilter.classList.add('fade-in')
            let table = document.querySelector('table tbody')
            table.classList.add('fade-in')
            animationContainer.classList.add('fade-out')
            animationContainer.classList.add('hide')
        })
        .then(response => response.json())
        .then(jsonResponse => {
            let cards = ''
            for (i = 0; i < jsonResponse.data.length; i++) {
                cards += getContent(jsonResponse.data)
            }
            tableContainer.innerHTML = cards
            searchToday();
            let citySplit = jsonResponse.data[0].meta.timezone.split('/')
            citybyGps = citySplit[1]
            cityText.innerHTML = `Anda terdeteksi berada di ${citybyGps} <br> Berikut adalah jadwal Imsakiyah untuk wilayah ${citybyGps} dan sekitarnya`
        })
        .catch(error => console.log(error))
}

function searchToday(){
    const dateRow = document.querySelectorAll('tbody tr .gregorian')
    for(i = 0; i < dateRow.length ; i++){
        let temp = dateRow[i].innerHTML.split(' ');
        let dateSplit = temp[0]
        if (dateSplit == day ){
            dateRow[i].parentNode.classList.add('today')
        }
    }
}

cityContainer.addEventListener('change', e => {
    cityValue = e.target.value;
})

timeContainer.addEventListener('change', e => {
    timeValue = e.target.value;
    console.log(timeValue)
})

gpsFilterOption.addEventListener('change', e => {
    timeValue = e.target.value
    getSchedule(citybyGps, timeValue)
})


btnSearch.addEventListener('click', function () {
    if (cityValue && timeValue) {
        if (!gpsfilter.classList.contains('hide')) {
            gpsfilter.classList.add('hide')
        }
        if(!errorContainer.classList.contains('hide')){
            errorContainer.classList.add('hide')
        }
        getSchedule(cityValue, timeValue)
    }
})


gpsCheck();
generateCities();
