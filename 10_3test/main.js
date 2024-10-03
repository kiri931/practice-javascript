const monthSelect = document.getElementById('month');
const daySelect = document.getElementById('day');

populateMonthSelect();
populateDaySelect();

function populateMonthSelect() {
    for (let i = 1; i <= 12; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        monthSelect.appendChild(option);
    }
}

function populateDaySelect() {
    for (let i = 1; i <= 31; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }
}

// 星座を表示する関数
window.getZodiacSign = function() {
    const month = parseInt(monthSelect.value);
    const day = parseInt(daySelect.value);
    const zodiacSign = calculateZodiacSign(month, day);

    document.getElementById('result').textContent = `あなたの星座は「${zodiacSign}」です！`;
}

// 入力された月日で星座を判定する関数
function calculateZodiacSign(month, day) {
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return '水瓶座';
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        return '魚座';
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return '牡羊座';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return '牡牛座';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return '双子座';
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return '蟹座';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return '獅子座';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return '乙女座';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return '天秤座';
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return '蠍座';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return '射手座';
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return '山羊座';
    } else {
        return '不明';
    }
}