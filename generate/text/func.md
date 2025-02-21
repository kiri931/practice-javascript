# JavaScriptにおける関数の定義方法

JavaScriptでは、関数を定義する方法はいくつかあります。以下に代表的な方法を示します。

## 関数宣言 (Function Declaration)

関数宣言は、`function`キーワードを使用して関数を定義します。

```javascript
function greet() {
    console.log("Hello, world!");
}
```

## 関数式 (Function Expression)

関数式は、変数に関数を代入する方法です。

```javascript
const greet = function() {
    console.log("Hello, world!");
};
```

## アロー関数 (Arrow Function)

アロー関数は、より短い構文で関数を定義する方法です。

```javascript
const greet = () => {
    console.log("Hello, world!");
};
```

## 引数ありの関数

関数に引数を渡すことができます。

```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Alice"); // "Hello, Alice!"
```

## デフォルト引数

引数にデフォルト値を設定することができます。

```javascript
function greet(name = "world") {
    console.log(`Hello, ${name}!`);
}

greet(); // "Hello, world!"
greet("Alice"); // "Hello, Alice!"
```

## 可変長引数 (Rest Parameters)

可変長引数を使用して、任意の数の引数を受け取ることができます。

```javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
```

## 関数の戻り値

関数は値を返すことができます。

```javascript
function add(a, b) {
    return a + b;
}

const result = add(2, 3);
console.log(result); // 5
```

## 無名関数 (Anonymous Function)

無名関数は名前を持たない関数です。関数式やコールバック関数として使用されます。

```javascript
setTimeout(function() {
    console.log("This is an anonymous function.");
}, 1000);
```

## 即時実行関数 (Immediately Invoked Function Expression, IIFE)

即時実行関数は、定義と同時に実行される関数です。

```javascript
(function() {
    console.log("This is an IIFE.");
})();
```

以上がJavaScriptにおける関数の定義方法や引数の扱い方の基本です。

## 練習問題

以下の問題を解いて、JavaScriptの関数に関する知識を確認しましょう。

### 問題1: 関数宣言

次の関数`multiply`を関数宣言を使って定義してください。この関数は2つの引数を取り、それらの積を返します。

```javascript
function multiply(a, b) {
    return a * b;
}
```

### 問題2: 関数式

次の関数`divide`を関数式を使って定義してください。この関数は2つの引数を取り、最初の引数を2番目の引数で割った結果を返します。

```javascript
const divide = function(a, b) {
    return a / b;
};
```

### 問題3: アロー関数

次の関数`subtract`をアロー関数を使って定義してください。この関数は2つの引数を取り、最初の引数から2番目の引数を引いた結果を返します。

```javascript
const subtract = (a, b) => {
    return a - b;
};
```

### 問題4: デフォルト引数

次の関数`greet`を定義してください。この関数は1つの引数`name`を取り、`name`が指定されていない場合はデフォルトで"world"を使用して挨拶を表示します。

```javascript
function greet(name = "world") {
    console.log(`Hello, ${name}!`);
}
```

### 問題5: 可変長引数

次の関数`average`を定義してください。この関数は任意の数の数値を引数として取り、それらの平均を返します。

```javascript
function average(...numbers) {
    const total = numbers.reduce((sum, num) => sum + num, 0);
    return total / numbers.length;
}
```

### 問題6: 即時実行関数

次の即時実行関数を記述してください。この関数はコンソールに"Hello, IIFE!"と表示します。

```javascript
(function() {
    console.log("Hello, IIFE!");
})();
```

これらの問題を解くことで、JavaScriptの関数に関する理解を深めることができます。頑張ってください！