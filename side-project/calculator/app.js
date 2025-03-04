'use strict';

// Variables
const answerScreen = document.querySelector('.answer-screen');
const currentInput = document.querySelector('.current-input');
const buttons = document.querySelectorAll('button');
const eraseBtn = document.querySelector('#erase');
const clearBtn = document.querySelector('#clear');
const equalBtn = document.querySelector('#equal_button');
const historyBtn = document.querySelector('#history');

const history = document.querySelector('.history');
const historyList = document.querySelector('.history-list');
const historyClearBtn = document.querySelector('.history-clear-button');

// Settings
const decimalPoint = 2;
const operatorList = ['+', '-', '/', '*'];
const numberList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
let previousNum = "";
let currentNum = "";
let currentOperator = "";
let isOperator = false;
let historyResult;

let resultValue;
let arrayHistoryList = [];

// Click Event
clearBtn.addEventListener("click", clearDisplay);
eraseBtn.addEventListener("click", eraseDisplay);
equalBtn.addEventListener("click", calculate);
historyBtn.addEventListener('click', historyDisplay);
historyClearBtn.addEventListener('click', historyClear);
buttons.forEach((btn) => {
    btn.addEventListener("click", classifyClickOrKeydownEvent);
});

// Keydown Event
document.addEventListener('keydown', keydownEvent);

// Keydown Event
function keydownEvent(e) {
    let keyValue = e.key;
    
    if(hasKeyEnter(keyValue)){
        calculate();
    };

    if (hasKeyNumberOrOperator(keyValue)){
        classifyClickOrKeydownEvent(e);
    };

    if(hasKeyBackspace(keyValue)){
        eraseDisplay();
    };

    if(hasKeyEscape(keyValue)){
        clearDisplay();
    };
}

// Classify Click Or Keydown Event 
function classifyClickOrKeydownEvent(e) {   
    let targetValue = confirmTargetEvent(e) === 'click' ? e.target.value : e.key;

    calculateTargetNumber(targetValue);

    calculateTargetOperator(targetValue);
}

function calculateTargetNumber(targetValue) {

    let pointCnt = countPointCnt(currentNum);

    if (numberList.includes(targetValue)) {
        let numberValue = targetValue;

        if (!(pointCnt === 1 && numberValue === '.')) {
            if (!currentNum && !isOperator || !currentNum && isOperator) {
                currentNum += numberValue;
                // 처음에 점만 들어오는 경우 0을 붙여준다.
                if (numberValue === '.') {
                    currentNum = '0.';
                }
            } else if (currentNum && !isOperator || currentNum && isOperator) {
                currentNum += numberValue;
            }
        }

        displayCurrentView(currentNum);
    }
}

function calculateTargetOperator(targetValue) {

    if (operatorList.includes(targetValue)) {
        let operatorValue = targetValue;
        if(currentNum && !isOperator){
            //set previousNum and currentOperator
            setOperatorValueAndView(operatorValue);
        } else if (currentNum && isOperator) {
            calculate();
            //set previousNum and currentOperator
            setOperatorValueAndView(operatorValue);
        }
    }
}

function hasKeyEscape(keyValue) {
    return keyValue === 'Escape' ? true : false;
}

function hasKeyBackspace(keyValue) {
    return (keyValue === 'Backspace') ? true : false;    
}

function hasKeyNumberOrOperator(keyValue) {
    return (operatorList.includes(keyValue) || numberList.includes(keyValue)) ? true : false;
        
}

function hasKeyEnter(keyValue) {
    return keyValue === 'Enter' || keyValue === '=' ? true : false;
}

function confirmTargetEvent(e) {
    let targetEvent;
    
    if (e.type === 'click') {
        targetEvent = 'click';
    }

    if (e.type === 'keydown'){
        targetEvent = 'keydown';
    }

    return targetEvent;

}

function setOperatorValueAndView(operatorValue) {
    previousNum = currentNum;
    currentOperator = operatorValue;

    //set view
    displayAnswerView(previousNum + currentOperator);
    displayCurrentView('');

    //set isOperator = true, currentNum clear
    isOperator = true;
    currentNum = '';
}

// Clear Function
function clearDisplay() {
    // setDefault
    setDefault();
    displayAnswerView('');
    displayCurrentView('');
    resultValue = '';
}

// Erase Function
function eraseDisplay() {
    currentNum = currentNum.slice(0, -1);
    displayCurrentView(currentNum);
}

// Click History Display
function historyDisplay(){
    history.classList.toggle("show-container");
}

// Clear History Function
function historyClear(){
    // history-item 전체삭제
    const items = document.querySelectorAll('.history-item');

    if(items.length > 0){
        items.forEach(function(item){
            historyList.removeChild(item);
        });
    }

    // history 화면 종료
    history.classList.remove("show-container");
    
    // array history list 초기화
    arrayHistoryList=[];
    
}

// Create History Item
function createHistoryListItem(id, value){
    // create element
    const element = document.createElement('article');
    // add class
    element.classList.add('history-item');
    // add attribute
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="history-formula">${value}</p>
                        <button type="button" class="delete-history-button">
                            <i class="fas fa-trash"></i>
                        </button>`;
    const historyDeleteBtn = element.querySelector('.delete-history-button');
    historyDeleteBtn.addEventListener('click', deleteHistoryItem);
    // append child
    historyList.appendChild(element);
}

// Delete History Item
function deleteHistoryItem(e){
    let element = e.currentTarget.parentElement; // article
    let id = element.dataset.id; // attr 'data-id'
    historyList.removeChild(element); // delete article
    
    //배열에서 id에 해당하는 값 또한 삭제할것
    arrayHistoryList = arrayHistoryList.filter(function(item){
        return item.id != id;
    });
    
    // list에 자식태그가 없을겨우 history display 종료
    if(historyList.children.length === 0){
        history.classList.remove("show-container");
    }
}

// Calculate Function
function calculate() {
    // previouseNum과 currentNum 값이 존재하는 경우 실행
    if (previousNum && currentNum) {
        //점으로 끝나는 수가 currentNum에서 들어올 경우 점 삭제
        if (currentNum.slice(-1) === '.') {
            currentNum = currentNum.slice(0, -1);
        }

        calculateOperator(currentOperator);

        // save arrayHistoryList
        const id = new Date().getTime().toString();
        historyResult = previousNum + currentOperator + currentNum + '=' + resultValue;
        saveHistory(id, historyResult);
        
        //history item 만들기
        createHistoryListItem(id, historyResult);

        // setDefault
        setDefault();

        // currentNum reset result
        currentNum = resultValue + "";

        // set result view
        displayAnswerView();
        displayCurrentView(resultValue);
    }
}

// Save History
function saveHistory(id, value){
    arrayHistoryList.push({id, value});
    console.log(arrayHistoryList);
}

// Reset Function
function setDefault() {
    previousNum = "";
    currentNum = "";
    currentOperator = "";
    isOperator = false;
    historyResult = "";
}

// Display Answer View
function displayAnswerView(value) {
    answerScreen.textContent = value;
}

// Display Current View
function displayCurrentView(value) {
    currentInput.textContent = value;
}

// Count Point Function
function countPointCnt(string) {
    let search = '.';
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== search) continue;
        count++;
    }
    return count;
}

// Operator
function calculateOperator(currentOperator){
    switch (currentOperator) {
        case '+': resultValue = parseFloat(previousNum) + parseFloat(currentNum); break;
        case '-': resultValue = parseFloat(previousNum) - parseFloat(currentNum); break;
        case '*': resultValue = parseFloat(previousNum) * parseFloat(currentNum); break;
        case '/': resultValue = parseFloat(previousNum) / parseFloat(currentNum); break;
    }
    
    // 소수점 검사
    if(countPointCnt(previousNum) == 1 || countPointCnt(currentNum) == 1 || countPointCnt(resultValue.toString()) == 1){
        resultValue = parseFloat(resultValue).toFixed(decimalPoint);
        previousNum = parseFloat(previousNum).toFixed(decimalPoint);
        currentNum = parseFloat(currentNum).toFixed(decimalPoint);
    }
    // view
    displayAnswerView('');
    displayCurrentView(resultValue);
}

