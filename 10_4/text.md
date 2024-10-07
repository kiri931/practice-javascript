> 10月4日
# 
## 前回の復習

前回は、生年月日を入力するためのページとエラー確認用のログの表示ボタンを作成しました。

### index.htmlについて
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
        <button onclick="errorInput()">入力</button>
    </body>
</html>
~~~


- **html**

    ` lang="ja"`の部分の意味は、このhtmlファイルは日本語ベース「ja」で書かれていますよ

    - **head**
    基本的に本文に表示しない情報を記述します

        - *meta*
        メタ情報を記述します。
        この場合、文字エンコード（文字の保存形式のようなもの）をUTF-8にしますという内容です。
    
        - *title*
        ブラウザ上部にタブページの中にタイトルが記述されている

        - *script*
        JavaScriptを使用したい場合に記述する。`src=""`は ソース(source)の略で、ファイルの場所を示す。同一のフォルダ内にソースファイルがある場合は、ファイル名だけを記述したらよい。

    - **body**
    ウェブページに表示される部分です。

        - *h1*
        表題１のスタイルを適用しますよ。ちなみに、cssでスタイルは変更できます。
        - *input*
        入力用の箱(input box)を表示します
        `id`はタグに任意のIDを持たせることで、JavaScriptやCSSファイルから操作するときの目印にします。
        `placeholder`は何も入力されていない状態で、表示する言葉を記述します。
        - *button*
        ボタンを表示します
        `onclick`はクリックされたときそのあとに記述されている関数を実行します。

### main.jsについて

~~~js
function errorInput(){
    console.log(document.getElementById("month").value)
    console.log(document.getElementById("day").value)

    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value
    
    console.log("month:",month,"day:",day)

}
//document.getElementById("month")はタグを確認するだけ
//valueはそのタグの値を示す

/*
javaScriptのプログラムとHTMLファイルはどこで対応しているか
タグについているIDで紐づく
タグの中にある付加情報のことを属性という
console.log()はc言語でいうところのprintf();です
*/
~~~

main.jsには一つの関数しか記述されていません。関数とは、functionで始まる小さなプログラムです。

今回の場合は、`function errorInput()`がそれに当たります。
`errorInput()`の役割は、入力ボックスに値が入っている場合、それを表示します。
プログラムの中身を見ていきましょう。

~~~js
console.log(document.getElementById("month").value)
console.log(document.getElementById("day").value)
~~~

一文が長いプログラムだと、少し読み取りづらいですが、２つに分けて考えましょう。
~~~js
console.log()
document.getElementById("month").value
~~~
`console.log()`は、ブラウザのコンソール画面に「( )」の中に記述されている内容を表示します。

`document.getElementById("month").value`は、

`document`はhtmlで記述されている文章を指します。

`getElementById("month")`はmonthという`id`のタグを探す命令

`value`は、そのタグが保持している値を読み取る命令

そのため、

`console.log(document.getElementById("month").value)`

これを読み取ると、
**今書いているHTMLファイルの`id`がmonthとなっているタグの値をコンソール画面に表示しなさい**
という命令です。


<span style="color:red">しかし、一般的にプログラミングにおいて、分割した方が読みやすくなることが多く、今回も分割のために次のような記述をしています。</span>

~~~js
const month = document.getElementById("month").value;
const day = document.getElementById("day").value
    
console.log("month:",month,"day:",day)
~~~

これは、先ほど言ったタグの値を**定数**に代入することで、分割しています。

`const month`はmonthという定数を準備しています。`=`でこの定数にタグの値を代入しています。

こうすることで、monthの値をコンソールに表示するためには`console.log(month)`で表示することができるようになります。

### console.log()
ここで、`console.log()`の特徴を知っておきましょう。

これは、先ほど言ったように「( )」の情報をコンソールに表示するための関数です。

そのため、中に、変数や定数、文字列を記述することで表示することができます。

さらに、今回のように、定数、変数、文字列を同時に表示することも可能であり、

~~~js
const a = 10;
let b = 15;

console.log( a , b , "c" )
~~~

のように記述することができます。ただし、この`c`は文字列ですので、そのまま`c`が出力されます。
そのため、出力結果は`10 15 c`となります。


## 入力規則を作成しよう
JavaScriptを使用して、入力規則を作成しよう。
実は、いろいろな方法がありますが、最も安直な方法で実装します。
### 最も安直な方法
~~~js
function errorInput(){
    const month = document.getElementById("month").value.trim();
    const day = document.getElementById("day").value.trim();
    if(month<1 || month>12){
        alert("適切な値ではありません");
        return
    }
    console.log("Month:", month, "Day:", day);
}
~~~

if文での分岐です。記述方法がC言語と同じですので、詳しくは説明しませんが、これで、異常値をはじけます。

`alert()`はポップアップ警告を出します。この警告は、リアクションをするまで、他の操作を一時的に中断します。


これで、一見するとイケてるような気がしますが、実は、適当な文字を打っても実行できてしまいます。
そのため、次は、htmlで入力のルールを作成することにします。

### htmlでルールを追加する

次のプログラムを記述してください

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

        <label for="month">月:</label>
        <input type="number" id="month" placeholder="月を入力してください" min="1" max="12">
        <label for="day">日:</label>
        <input type="number" id="day" placeholder="日を入力してください" min="1" max="31">
        
        <button onclick="errorInput()">入力</button>
    </body>
</html>
~~~

新しく`label`タグを追加していますが、なにか別のタグと一緒に使うタグで、ボタンや入力ボックスなどと一緒に使うことができます。
`for`で記述されているidを持つタグにカーソルを移動します。

`input`タグに新たな属性を加えました。

**type**属性は、その入力ボックスに記述できる値を設定しています。*number*であれば、数字以外を入力できないようにしています。

また、入力規則を設定できます。*max*と*min*属性で、最小値と最大値を設定しています。

このように、HTMLのみで、入力ルールを設けて、値を制御することができます。

### 入力する方法を変える

先程の方法は、大前提入力ボックスを使用する方法でしたので、キーボードで入力する前提でした。

しかし、キーボードで入力することは、スマートフォンなどでは、煩わしい方法です。また、HP作成の際に入力規則をつけ忘れるなんて、ありそうな話ですよね。

そこで、別の入力方式を実装します。

**ドロップダウンメニュー**

クリックすると、選択肢が複数出てきて、その中から選択するという方式です。

次のコードを今のindex.htmlに追加で記述してみてください。

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

このように、**select**タグと**option**タグで追加することができます。

### 日付のプルダウンリストを作成しよう

では、実際に作成していきましょう。
といっても、以下のように変更するだけで簡単に実装できます。

~~~html
<label for="month2">月:</label>

<select id="month2">
  <option value="">選択してください</option>
  <option value=1>1</option>
  <option value=2>2</option>
  <option value=3>3</option>
  <option value=4>4</option>
  <option value=5>5</option>
  <option value=6>6</option>
  <option value=7>7</option>
  <option value=8>8</option>
  <option value=9>9</option>
  <option value=10>10</option>
  <option value=11>11</option>
  <option value=12>12</option>
</select>
~~~

では、次は日についても同様に作成して下さい。

と言われても時間がかかるし、少し面倒ですよね。

このようなときは、JavaScriptでHTMLのタグを作成することができます。

## HTMLタグをJavaScriptで作成しよう

以下のように入力してください。


~~~html
<!--index.html-->
<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="UTF-8">
        <title>HTMLエレメント作成</title>
        <script src="main.js" defer></script>
    </head>
    <body>
        <h1>文字を追加してみよう</h1>
        <p id = "pTag">HTMLのタグのことをエレメント(要素)という</p>
    </body>
</html>
~~~

~~~js
//main.js
const txt = document.createElement('strong');
txt.textContent = "追加される文字";
document.querySelector("body").appendChild(txt);
~~~

では、連続的にエレメントを追加しよう

~~~js
const pTag = document.getElementById("pTag");

for(let i = 0; i<100;i++){
    const num = document.createElement("span");
    num.textContent=i;
    pTag.appendChild(num);
}
~~~

一見わかりにくいように見えるので、

~~~css
span {
    display: inline-block;
    padding: 5px 10px;
    margin: 2px;
    background-color: #f1f1f1;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    color: #555;
    transition: background-color 0.3s, color 0.3s;
}
~~~