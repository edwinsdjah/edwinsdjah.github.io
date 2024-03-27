const container = document.querySelector('.tableContainer');
let card = '';
let arrayState = [];

function saveState(id,element){
    let type = element.getAttribute('checkType');
    function StateObject(id,element){
        this.id = id;
        this.detail = {
            [type] : element.checked
        }   
    }
    let tempObject = new StateObject(id,element)
    arrayState.push(tempObject)
    saveToStorage();
}
function getContent(id){
    return `<tr class="inputRow" id="${id+1}">
    <td>${id+1} Ramadhan</td>
    <td>
        <div class="form-check">
            <input class="form-check-input " type="checkbox" value="" checkType="puasa" id="puasaCheck${id+1}">
        </div>
    </td>
    <td>
        <div class="form-check form-check-inline">
            <input class="form-check-input " type="checkbox" checkType="subuh" id="subuhCheck${id+1}" value="option1">
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input " type="checkbox" checkType="zuhur" id="zuhurCheck${id+1}" value="option1">
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input " type="checkbox" checkType="ashar" id="asharCheck${id+1}" value="option1">
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input " type="checkbox" checkType="maghrib" id="maghribCheck${id+1}" value="option1">
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input " type="checkbox" checkType="isya" id="isyaCheck${id+1}" value="option1">
        </div>
    </td>
    <td>
        <div class="form-check">
            <input class="form-check-input " type="checkbox" value="" checkType="tahajjud" id="tahajjudCheck${id+1}">
        </div>
    </td>
    <td>
        <div class="form-check">
            <input class="form-check-input " type="checkbox" value="" checkType="dhuha" id="dhuhaCheck${id+1}">
        </div>
    </td>
    <td>
        <div class="form-check">
            <input class="form-check-input " type="checkbox" value="" checkType="quran" id="quranCheck${id+1}">
        </div>
    </td>
    <td>
        <div class="form-check">
            <input class="form-check-input " type="checkbox" value="" checkType="tarawih" id="tarawihCheck${id+1}">
        </div>
    </td>
    <td>
        <div class="form-check">
            <input class="form-check-input " type="checkbox" value="" checkType="infaq" id="infaqCheck${id+1}">
        </div>
    </td>
</tr>`
}
function generateContent(){
    for (let i = 0; i <= 29; i++) {
        card += getContent(i) 
    }
    container.innerHTML = card;
}
function getId(e){
    let id = e.closest('.inputRow').getAttribute('id')
    return id
}
function isIndexExist(id){
    for (let i = 0; i < arrayState.length; i++) {
        if(arrayState[i].id === id){
            return true
        } 
    }
    return false
}
function isSaveExist(){
}
function updateObject(index, element){
    let type = element.getAttribute('checkType');
    for (let i = 0; i < arrayState.length; i++) {
        if (arrayState[i].id === index) {
            if (arrayState[i].detail[type] !== undefined) {
                delete arrayState[i].detail[type];
            }
            if (element.checked) {
                arrayState[i].detail[type] = element.checked;
            }
            saveToStorage();
        }
    }
}
function getValue(){
    let checkbox = document.querySelectorAll('.form-check-input');
    let valueId
    checkbox.forEach(e => {
        e.addEventListener('change',function(){
            valueId = getId(e);
            if(isIndexExist(valueId)){
                updateObject(valueId,e)
            } else {
                saveState(valueId,e)
            }
            
        });
    })
}
function saveToStorage(){
    localStorage.setItem('saveState', JSON.stringify(arrayState));
}
function loadData(){
    let savedData = localStorage.getItem('saveState');
    if(savedData){
        let parsed = JSON.parse(savedData);
        generateContent();
        isChecked(parsed);
        arrayState = parsed;
    } else {
        generateContent();
    }
}
function isChecked(data){
    let idRow = document.querySelectorAll('.inputRow');
    let arrayType = []
    for (let i = 0; i < data.length; i++) {
        idRow.forEach(e => {
            if(data[i].id === e.getAttribute('id')){
                for (const key in data[i].detail) {
                    arrayType.push(key)
                }
                let checkType = e.querySelectorAll('[checkType]');
                checkType.forEach(el => {
                    for (let i = 0; i < arrayType.length; i++) {
                        if(arrayType[i] === el.getAttribute('checkType')){
                            el.setAttribute('checked','')
                        }
                    }
                })
            }
        })
        arrayType.length = 0;
    }
}


loadData();
getValue();
