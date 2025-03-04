'use strict';

// form
const formField = document.getElementById('form_field');
// input text
const textUserId = document.getElementById('user_id');
const textUserPassword = document.getElementById('user_password');
const textUserPasswordCheck = document.getElementById('user_password_check');
const textEmailId = document.getElementById('email_id');
const textEmailDns = document.getElementById('email_dns');
const textUserName = document.getElementById('user_name');
const textDetailAddress = document.getElementById('text_detail_address');
const textUserBirth = document.getElementById('user_birth');
// input textarea
const textareaUserIntro = document.getElementById('user_intro');
// div
const divPrivacyAgreement = document.getElementById('privacy_agreement');
// input tel
const telPhoneNumber = document.getElementById('tel_phone_number');
// input number
const numberPostCode = document.getElementById('post_code');
const numberUserAge = document.getElementById('user_age');
// input radio
const radioChoiceGender = document.getElementsByName('choiceGender');
const radioChoicePrivacyAgree = document.getElementsByName('choicePrivacyAgree');
// input checkbox
const checkboxUserInterests = document.getElementsByName('userInterest');
const checkboxPrivacyAgree = document.getElementById('privacy_checkbox_agree');
// input date
const dateDatePicker = document.getElementById('datepicker');
// input file
const fileUserUploadImage = document.getElementById('user_upload_image');
// select, multiple
const selectEmailAddress = document.querySelector('.email-address');
const multipleUserHobbys = document.getElementById('user_hobby');
const selectAddressSido = document.querySelector('#select_address_sido');
const selectAddressGungu = document.querySelector('#select_address_gungu');
// querySelectAll
const blurEventList = document.querySelectorAll('input, textarea');
const changeEventList = document.querySelectorAll('select, #datepicker, #user_upload_image, #privacy_checkbox_agree');
const keyupEventList = document.querySelectorAll('#tel_phone_number, #user_birth, #user_age');
const windowEventList = document.querySelectorAll('#privacy_agreement');
// property
const gungu = {
    seoulsi : ["강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구"],
    incheonsi : ["계양구","남구","남동구","동구","부평구","서구","연수구","중구","강화군","옹진군"],
    daejeonsi : ["대덕구","동구","서구","유성구","중구"],
    gwangjusi : ["광산구","남구","동구","북구","서구"],
    daegusi : ["남구","달서구","동구","북구","서구","수성구","중구","달성군"],
    ulsansi : ["남구","동구","북구","중구","울주군"],
    busansi : ["강서구","금정구","남구","동구","동래구","부산진구","북구","사상구","사하구","서구","수영구","연제구","영도구","중구","해운대구","기장군"],
    gyeonggido : ["고양시","과천시","광명시","광주시","구리시","군포시","김포시","남양주시","동두천시","부천시","성남시","수원시","시흥시","안산시","안성시","안양시","양주시","오산시","용인시","의왕시","의정부시","이천시","파주시","평택시","포천시","하남시","화성시","가평군","양평군","여주군","연천군"],
    kwangwondo : ["강릉시","동해시","삼척시","속초시","원주시","춘천시","태백시","고성군","양구군","양양군","영월군","인제군","정선군","철원군","평창군","홍천군","화천군","횡성군"],
    chungcheongbukdo : ["제천시","청주시","충주시","괴산군","단양군","보은군","영동군","옥천군","음성군","증평군","진천군","청원군"],
    chungcheongnamdo : ["계룡시","공주시","논산시","보령시","서산시","아산시","천안시","금산군","당진군","부여군","서천군","연기군","예산군","청양군","태안군","홍성군"],
    jeonrabukdo : ["군산시","김제시","남원시","익산시","전주시","정읍시","고창군","무주군","부안군","순창군","완주군","임실군","장수군","진안군"],
    jeonranamdo : ["광양시","나주시","목포시","순천시","여수시","강진군","고흥군","곡성군","구례군","담양군","무안군","보성군","신안군","영광군","영암군","완도군","장성군","장흥군","진도군","함평군","해남군","화순군"],
    gyeungsangbukdo : ["경산시","경주시","구미시","김천시","문경시","상주시","안동시","영주시","영천시","포항시","고령군","군위군","봉화군","성주군","영덕군","영양군","예천군","울릉군","울진군","의성군","청도군","청송군","칠곡군"],
    gyeungsangnamdo : ["거제시","김해시","마산시","밀양시","사천시","양산시","진주시","진해시","창원시","통영시","거창군","고성군","남해군","산청군","의령군","창녕군","하동군","함안군","함양군","합천군"],
    jejudo : ["서귀포시","제주시","남제주군","북제주군"],
};


// Submit Button Click Event
formField.addEventListener('submit', e=> {
    e.preventDefault();
    // checkbox privacy agree validation
    if(checkboxPrivacyAgree.checked === false){
        showError(radioChoicePrivacyAgree[0], '개인정보 수집에 동의해야 원할한 사이트 이용이 가능합니다.');
    }else{
        showSuccess(radioChoicePrivacyAgree[0], '');
    }

    // radio privacy agree validation
    if(radioChoicePrivacyAgree[0].checked === false){
        showError(radioChoicePrivacyAgree[0], '개인정보 수집에 동의해야 원할한 사이트 이용이 가능합니다.');
    }else if(radioChoicePrivacyAgree[1].checked === true){
        showError(radioChoicePrivacyAgree[0], '개인정보 수집에 동의해야 원할한 사이트 이용이 가능합니다.');
    }else if(radioChoicePrivacyAgree[0].checked === true){
        showSuccess(radioChoicePrivacyAgree[0], '');
    }

    // file user upload image validation
    if(fileUserUploadImage.value === ''){
        showError(fileUserUploadImage, '프로필 사진을 업로드해주세요')
        fileUserUploadImage.scrollIntoView();
    }else{
        showSuccess(fileUserUploadImage, '');
    }

    // number user age validation
    if(numberUserAge.value === ''){
        showError(numberUserAge, '나이를 입력해주세요');
        numberUserAge.scrollIntoView();
    }else{
        showSuccess(numberUserAge,'');
    }

    // date user birth validation
    if(textUserBirth.value === ''){
        showError(textUserBirth, '생년월일을 입력해주세요');
        textUserBirth.scrollIntoView();
    }else{
        showSuccess(textUserBirth,'');
    }

    // textarea user intro validation
    if(textareaUserIntro.value.length < 10){
        showError(textareaUserIntro, '자기소개를 최소 10글자 이상 입력해주세요');
        textareaUserIntro.scrollIntoView();
    }else if(textareaUserIntro.value.length > 100){
        showError(textareaUserIntro, '자기소개는 최대 100글자 까지 입력 할 수 있습니다');
        textareaUserIntro.scrollIntoView();
    }else{
        showSuccess(textareaUserIntro, '');
    }

    // tel phone number validation
    if(telPhoneNumber.value === ''){
        showError(telPhoneNumber, '휴대전화번호를 입력해주세요');
        telPhoneNumber.scrollIntoView();
    }else{
        showSuccess(telPhoneNumber, '');
    }

    // adress validation
    if(!numberPostCode.value){// number postcode validation
        showError(numberPostCode, '우편번호를 입력해주세요');
        numberPostCode.scrollIntoView();
    }else if(!selectAddressSido.value){// select sido validation
        showError(selectAddressSido, '시/도를 선택해주세요');
        selectAddressSido.scrollIntoView();
    }else if(selectAddressGungu.value === '군/구 선택'){// select gungu validation
        showError(selectAddressGungu, '군/구를 선택해주세요');
        selectAddressGungu.scrollIntoView();
    }else if(!textDetailAddress.value){// text detail adress validation
        showError(textDetailAddress, '상세주소를 입력해주세요');
        textDetailAddress.scrollIntoView();
    }else{
        showSuccess(textDetailAddress, '');
    }

    // hobby vallidation
    if(multipleUserHobbys.options.selectedIndex === -1){
        showError(multipleUserHobbys, '취미를 최소 1개이상 선택해주세요');
        multipleUserHobbys.scrollIntoView();
    }else{
        showSuccess(multipleUserHobbys, '');
    }

    // interest validation
    if(checkboxUserInterests[0].checked === false &&
        checkboxUserInterests[1].checked === false &&
        checkboxUserInterests[2].checked === false &&
        checkboxUserInterests[3].checked === false){
        showError(checkboxUserInterests[0], '관심사를 최소 1개이상 선택해주세요');
        checkboxUserInterests[0].scrollIntoView();
    }else{
        showSuccess(checkboxUserInterests[0], '');
    }

    // gender validation
    if(radioChoiceGender[0].checked === false && radioChoiceGender[1].checked === false){
        showError(radioChoiceGender[0], '성별을 선택해 주세요');
        radioChoiceGender[0].scrollIntoView();
    }else{
        showSuccess(radioChoiceGender[0], '');
    }
    
    // name validation
    if(textUserName.value === ''){
        showError(textUserName, '이름을 입력해주세요');
        textUserName.scrollIntoView();
    }else{
        showSuccess(textUserName, '');
    }

    // email validation
    if(textEmailId.value === '' || textEmailDns === ''){
        showError(textEmailDns, '이메일을 입력해주세요');
        textEmailDns.scrollIntoView();
    }else{
        showSuccess(textEmailDns, '');
    }

    // password check validation
    if(textUserPasswordCheck.value === ''){
        showError(textUserPasswordCheck, '비밀번호 확인을 입력해주세요');
        textUserPasswordCheck.scrollIntoView();
    }else{
        showSuccess(textUserPasswordCheck, '');
    }
    // password validation
    if(textUserPassword.value === ''){
        showError(textUserPassword, '비밀번호를 입력해주세요');
        textUserPassword.scrollIntoView();
    }else{
        showSuccess(textUserPassword, '');
    }
    // id validation
    if(textUserId.value === ''){
        showError(textUserId, '아이디를 입력해주세요');
        textUserId.scrollIntoView();
    }else{
        showSuccess(textUserId, '');
    }

});

// Reset Button Click Event
formField.addEventListener('reset', e=>{
    
    const allSmallElement = document.querySelectorAll('small');
    const allFormValidationView = document.querySelectorAll('.form-validation-view');
    const imgUserPreviewImage = document.getElementById('user_preview_image');

    const isResetConfirm = confirm('리셋 하시겠습니까?');

    if(!isResetConfirm){
        e.preventDefault();

    }else{
        allSmallElement.forEach((element)=>{
            element.innerText = '';
        });
    
        allFormValidationView.forEach((element)=>{
            element.classList.remove('input-error');
        });
        
        imgUserPreviewImage.src = '';

        const divPrivacyAgreement = document.getElementById('privacy_agreement');
        divPrivacyAgreement.style.visibility = 'hidden';
    }

});

// Change Event(Select, Date, File, Checkbox)
changeEventList.forEach(selectElements => selectElements.addEventListener('change', e=>{
    let targetInput = e.target;
    let eventValue = e.currentTarget.value;
    
    // email validation
    if(targetInput === selectEmailAddress){
        if(eventValue === ''){
            textEmailDns.value = '';
            textEmailDns.readOnly = false;
        }else{
            textEmailDns.value = eventValue;
            textEmailDns.readOnly = true;
        }
    }else if(targetInput === selectAddressSido){// sido validation

        if(eventValue === ''){
            deleteGunguOption();
            createGunguDefualt();

        }else if(eventValue === selectAddressSido.value){
            deleteGunguOption();
            createGunguDefualt();
            createGunguOptions(eventValue);
        }
    }else if(targetInput === dateDatePicker){// datepicker validation

        if(eventValue === ''){
            textUserBirth.value = '';
            showError(dateDatePicker, '생년월일을 입력해주세요')
        }else {
            textUserBirth.value = eventValue;
            showSuccess(dateDatePicker, '');
        }

    }else if(targetInput === fileUserUploadImage){ // file upload validation
        loadFileUserUploadImage(e);
        showSuccess(fileUserUploadImage, '');
    }else if(targetInput === checkboxPrivacyAgree){ // checkbox agree validation
        
        if(checkboxPrivacyAgree.checked === true){
            const divPrivacyAgreement = document.getElementById('privacy_agreement');
            divPrivacyAgreement.style.visibility = 'visible';
        }else{
            const divPrivacyAgreement = document.getElementById('privacy_agreement');
            divPrivacyAgreement.style.visibility = 'hidden';
        }
    }

}));

// Blur Event(Input, Textarea)
blurEventList.forEach(inputElements => inputElements.addEventListener('blur', function(e){
    let targetInput = e.currentTarget;
    let value = targetInput.value;
    
    if(targetInput === textUserId){// id validation
        if(textUserId.value.length == 0){
            showError(targetInput, '아이디를 입력해 주세요');
        } else if(textUserId.value.length < 5 || textUserId.value.length > 12){
            showError(targetInput, '5~12자의 영문 대소문자와 숫자로만 입력해주세요');
        }else {
            showSuccess(targetInput, '사용가능한 아이디 입니다.');
        }
    }else if(targetInput === textUserPassword){// password validation
        let num = value.search(/[0-9]/g);
        let eng = value.search(/[a-z]/ig);
        let spe = value.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

        if(value.length == 0){
            showError(targetInput, '비밀번호를 입력해 주세요');
        }else if(value.length < 8 || value.length > 20){
            showError(targetInput, '8자리~20자 이내로 입력해주세요');
        }else if(value.search(/\s/) != -1){
            showError(targetInput, '비밀번호는 공백없이 입력해주세요');
        }else if(num < 0 || eng < 0 || spe < 0){
            showError(targetInput, '영문, 숫자, 특수문자를 혼합하여 입력해주세요');
        }else {
            showSuccess(targetInput, '사용가능한 비밀번호 입니다');
        }
    }else if(targetInput === textUserPasswordCheck){// password check validation

        if(textUserPassword.parentElement.classList.contains('input-error')){
            textUserPassword.focus();
            showError(textUserPassword, '사용불가능한 비밀번호 입니다.');
            showError(targetInput, '');
        } else if(value.length == 0){
            showError(targetInput, '비밀번호를 입력해 주세요');
        } else if(targetInput.value !== textUserPassword.value){
            showError(targetInput, '비밀번호가 일치하지 않습니다');
        }else if(value.length == 0){
            showError(targetInput, '비밀번호를 입력해 주세요');
        }else {
            showSuccess(targetInput, '비밀번호가 일치합니다');
        }
    }else if(targetInput === numberPostCode){// postcode validation

        if(value.length == 0){
            showError(targetInput, '우편번호를 입력해 주세요');
        }else if(value.length > 5){
            showError(targetInput, '우편번호는 5자리 이하로 입력해주세요');
        }else{
            showSuccess(targetInput, '');
        }
    }else if(targetInput === textDetailAddress){// detail address validation
        
        if(value.length == 0){
            showError(targetInput, '주소를 입력해주세요');
        }
    }else if(targetInput === textareaUserIntro){// user intro validation
        
        if(value.length<10){
            showError(targetInput, '자기소개를 최소 10글자 이상 입력해주세요')
        }else if(value.length>100){
            showError(targetInput, '자기소개는 최대 100글자까지 입력 할 수 있습니다')
        }else{
            showSuccess(targetInput, '');
        }
    }else if(targetInput === telPhoneNumber){// tel phone number validation
        let num = value.search(/^\d{3}-\d{3,4}-\d{4}$/);
        
        if(value.length == 0){
            showError(targetInput, '휴대전화번호를 입력해주세요')
        }else if(num === -1){
            showError(targetInput, '자리수가 알맞지 않습니다');
        }else{
            showError(targetInput, '')
        }
    }else if(targetInput === textUserBirth){// text user birth validation
        let pattern = /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/;
        if(!(value.match(pattern))){
            showError(targetInput, '날짜형식이 알맞지 않습니다')
        }else{
            showSuccess(targetInput, '');
        }
    }else if(targetInput === numberUserAge){// number user age validation
        if(value.length == 0){
            showError(targetInput, ' 나이를 입력해주세요');
        }else if(value == 0){
            showError(targetInput, '나이를 입력해주세요');
        }else{
            showSuccess(targetInput, '');
        }
    }
}));

// Keyup Event(Text, Tel, Number)
keyupEventList.forEach(inputElements => inputElements.addEventListener('keyup', function(e){
    const targetInput = e.currentTarget;
    let value = targetInput.value.trim();
    e = e || window.e;
    
    if(targetInput === telPhoneNumber){
        telPhoneNumber.value = autoHypenTel(value);
    }else if(targetInput === textUserBirth){
        autoDateFormat(e, targetInput);
    }else if(targetInput === numberUserAge){
        e = e || window.event;
        let keyID = (e.which) ? e.which : e.keyCode;

        if ( keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 ) {
            return;
        } else {
            //숫자만 입력
            e.target.value = e.target.value.replace(/[^0-9]/g, "");
        }

        maxLengthCheck(targetInput);
    }

}));

// Scroll Event(Div)
windowEventList.forEach(inputElements => inputElements.addEventListener('scroll', function(e){
    let targetInput = e.currentTarget;
    let value = targetInput.value;

    if(targetInput === divPrivacyAgreement){
        // console.log(`${targetInput.scrollTop} + ${targetInput.offsetHeight} >= ${targetInput.scrollHeight}`);        
        
        if(targetInput.scrollTop+targetInput.offsetHeight>=targetInput.scrollHeight){
            //라디오 활성
            radioChoicePrivacyAgree[0].disabled = false;
            radioChoicePrivacyAgree[1].disabled = false;
        }else{
            //라디오 비활성
            radioChoicePrivacyAgree[0].style.disabled = true;
            radioChoicePrivacyAgree[1].style.disabled = true;
        }
    }
}));

// Functions
const showError = (input, message) => {
    const formValidationView = input.parentElement;
    
    if(formValidationView.classList.contains('input-success')){
        formValidationView.classList.remove('input-success');
    }
    formValidationView.classList.add('input-error');
    const small = formValidationView.querySelector('small');
    small.innerText = message;
}

const showSuccess = (input, message) => {
    const formValidationView = input.parentElement;

    if(formValidationView.classList.contains('input-error')){
        formValidationView.classList.remove('input-error');
    }
    formValidationView.classList.add('input-success');
    const small = formValidationView.querySelector('small');
    small.innerText = message;
}

function deleteGunguOption(){
    while(selectAddressGungu.hasChildNodes()){
        selectAddressGungu.removeChild(selectAddressGungu.firstChild);
    }
}

function createGunguDefualt(){
    const element = document.createElement('option');
    element.innerHTML = '군/구 선택';
    selectAddressGungu.appendChild(element);
}

function createGunguOptions(sido){
    const arraySido = gungu[sido];

    arraySido.forEach((gungu)=>{
        let element = document.createElement('option');
        const attr = document.createAttribute('value');
        attr.value = gungu;
        element.setAttributeNode(attr);
        element.innerHTML = gungu;
        selectAddressGungu.appendChild(element);
    });
}

function autoHypenTel(str) {
    str = str.replace(/[^0-9]/g, '');
    let tmp = '';
  
    if (str.substring(0, 2) == '02') {
      // 서울 전화번호일 경우 10자리까지만 나타나고 그 이상의 자리수는 자동삭제
      if (str.length < 3) {
        return str;
      } else if (str.length < 6) {
        tmp += str.substr(0, 2);
        tmp += '-';
        tmp += str.substr(2);
        return tmp;
      } else if (str.length < 10) {
        tmp += str.substr(0, 2);
        tmp += '-';
        tmp += str.substr(2, 3);
        tmp += '-';
        tmp += str.substr(5);
        return tmp;
      } else {
        tmp += str.substr(0, 2);
        tmp += '-';
        tmp += str.substr(2, 4);
        tmp += '-';
        tmp += str.substr(6, 4);
        return tmp;
      }
    } else {
      // 핸드폰 및 다른 지역 전화번호 일 경우
      if (str.length < 4) {
        return str;
      } else if (str.length < 7) {
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3);
        return tmp;
      } else if (str.length < 11) {
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3, 3);
        tmp += '-';
        tmp += str.substr(6);
        return tmp;
      } else {
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3, 4);
        tmp += '-';
        tmp += str.substr(7);
        return tmp;
      }
    }
    return str;
}

function autoDateFormat( e, targetInput ){
        
    var num_arr = [ 
        97, 98, 99, 100, 101, 102, 103, 104, 105, 96,
        48, 49, 50, 51, 52, 53, 54, 55, 56, 57
    ]
    
    var key_code = ( e.which ) ? e.which : e.keyCode;
    if( num_arr.indexOf( Number( key_code ) ) != -1 ){

        var len = targetInput.value.length;
        if( len == 4 ) targetInput.value += "-";
        if( len == 7 ) targetInput.value += "-";
    }
}

function loadFileUserUploadImage(e){
    let reader = new FileReader();
    reader.onload = function(){
      const imgUserPreviewImage = document.getElementById('user_preview_image');
      imgUserPreviewImage.src = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);
}

function maxLengthCheck(targetInput){
    if (targetInput.value.length > targetInput.maxLength){
        targetInput.value = targetInput.value.slice(0, targetInput.maxLength);
    }    
  }