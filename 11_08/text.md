# practice-javascript

> 9月6日

## Javascriptについて

ウェブサイトに対話性を追加するプログラミング言語です。

ウェブサイトでボタンを押したり、フォームに入力したり、ゲームしたり、動作したりを制御するために用いられているプログラミング言語です。

### 〇特徴
* 汎用性が高く、初心者にもやさしい。
* インタプリタ言語
    コンピュータが解釈・実行できる形式に変換しながら同時に少しずつ実行していくソフトウェア。C言語などは、コンパイラ言語

> 10月3日

## inputタグに属性を追加してみよう

例えば、生年月日を入力させるページを考える。

以下のプログラムを写してください。
~~~html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>生年月日入力</title>
    <script src="main.js" defer></script>
</head>
<body>
    <h1>生年月日の入力</h1>
    <input id="month" placeholder="月を入力してください">
    <input id="day" placeholder="日を入力してください">
    <button onclick="">入力</button>
</body>
</html>
~~~


### ボタンを押したら文字が出るようにしよう

main.jsで表示する部分を作る

ついでに簡単なデバッグを行えるようにする。




### イレギュラーの値を判別しよう
















## 星座を表示するプログラムを作ろう
~~~html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>星座判定</title>
    <script src="main.js" defer></script>
</head>
<body>
    <h1>生年月日で星座を判定しよう</h1>

    <label for="month">月:</label>
    <input type="number" id="month" placeholder="例: 1" min="1" max="12">

    <label for="day">日:</label>
    <input type="number" id="day" placeholder="例: 1" min="1" max="31">

    <button onclick="getZodiacSign()">星座を表示</button>

    <p id="result"></p>
</body>
</html>

~~~

~~~javascript
// 星座を表示する関数
window.getZodiacSign = function() {
    const year = document.getElementById('year').value.trim();
    const month = parseInt(document.getElementById('month').value.trim());
    const day = parseInt(document.getElementById('day').value.trim());

    // 入力のバリデーション
    if (isNaN(year) || isNaN(month) || isNaN(day) || month < 1 || month > 12 || day < 1 || day > 31) {
        document.getElementById('result').textContent = '正しい日付を入力してください。';
        return;
    }

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

~~~

### 新しく使うタグ

**labelタグ**
labelタグは、なにか別のタグと一緒に使うタグで、ボタンなどと一緒に使うことができます。

**selectタグ**
selectタグはドロップダウンリストを作成するときに使います。

~~~html
<label for="pet-select">あなたの飼いたいペットは？:</label>

<select name="pets" id="pet-select">
  <option value="">選択してください</option>
  <option value="dog">犬</option>
  <option value="cat">猫</option>
  <option value="hamster">ハムスター</option>
  <option value="parrot">インコ</option>
  <option value="spider">蜘蛛</option>
  <option value="goldfish">金魚</option>
</select>
~~~




> 日付

## 