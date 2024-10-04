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
そのため、次は、htmlで入力のルールを作成することにします。以下のように書き換えてください。

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
        <input type="number" id="month" placeholder="例: 1" min="1" max="12">
        <label for="day">日:</label>
        <input type="number" id="day" placeholder="例: 1" min="1" max="31">
        
        <button onclick="errorInput()">入力</button>
    </body>
</html>
~~~

新しく出てきたタグは、
