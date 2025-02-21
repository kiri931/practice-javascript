## JavaScriptのforEachについて

`forEach`メソッドは、配列の各要素に対して一度ずつ提供された関数を実行するためのメソッドです。このメソッドは、配列の要素を繰り返し処理するための簡潔な方法を提供します。

### 構文
```javascript
array.forEach(function(currentValue, index, array) {
    // 実行するコード
});
```

- `currentValue`: 配列の現在の要素
- `index` (オプション): 現在の要素のインデックス
- `array` (オプション): `forEach`が呼び出された配列

### 具体例

以下は、配列の各要素をコンソールに出力する例です。

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number);
});
```

このコードは、次のように出力します:
```
1
2
3
4
5
```

インデックスを使用する例も見てみましょう。

```javascript
const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach(function(fruit, index) {
    console.log(`${index}: ${fruit}`);
});
```

このコードは、次のように出力します:
```
0: apple
1: banana
2: cherry
```

`forEach`メソッドは、配列の各要素に対して副作用を伴う操作を行う場合に便利です。ただし、`forEach`は新しい配列を返さないため、要素を変換して新しい配列を作成する場合には`map`メソッドを使用する方が適しています。

### アロー関数を使用した書き方

`forEach`メソッドは、アロー関数を使用してより簡潔に記述することもできます。以下に段階的に示します。

#### 通常の関数を使用した書き方
```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number);
});
```

#### アロー関数を使用した書き方
```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
    console.log(number);
});
```

#### さらに簡潔にした書き方
アロー関数の本体が1行の場合、中括弧と`return`を省略できます。
```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => console.log(number));
```

インデックスを使用する例もアロー関数で書き直してみましょう。

#### 通常の関数を使用した書き方
```javascript
const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach(function(fruit, index) {
    console.log(`${index}: ${fruit}`);
});
```

#### アロー関数を使用した書き方
```javascript
const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});
```

#### さらに簡潔にした書き方
```javascript
const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach((fruit, index) => console.log(`${index}: ${fruit}`));
```

### 練習問題

以下のコードは、`forEach`メソッドを使用して配列の各要素を処理する例です。このコードをアロー関数を使用してより簡潔に書き直してください。

#### 問題1
```javascript
const names = ['Alice', 'Bob', 'Charlie'];

names.forEach(function(name) {
    console.log(name);
});
```

#### 問題2
```javascript
const scores = [10, 20, 30, 40, 50];

scores.forEach(function(score, index) {
    console.log(`Score ${index}: ${score}`);
});
```

#### 問題3
```javascript
const cities = ['Tokyo', 'Kyoto', 'Osaka'];

cities.forEach(function(city, index) {
    console.log(`${index + 1}: ${city}`);
});
```

### 解答例

#### 問題1
```javascript
const names = ['Alice', 'Bob', 'Charlie'];

names.forEach(name => console.log(name));
```

#### 問題2
```javascript
const scores = [10, 20, 30, 40, 50];

scores.forEach((score, index) => console.log(`Score ${index}: ${score}`));
```

#### 問題3
```javascript
const cities = ['Tokyo', 'Kyoto', 'Osaka'];

cities.forEach((city, index) => console.log(`${index + 1}: ${city}`));
```


## JavaScriptのmapについて

`map`メソッドは、配列の各要素に対して提供された関数を呼び出し、その結果から新しい配列を生成するためのメソッドです。このメソッドは、元の配列を変更せずに新しい配列を作成するために使用されます。

### 構文
```javascript
const newArray = array.map(function(currentValue, index, array) {
    // 新しい配列の要素を生成するコード
});
```

- `currentValue`: 配列の現在の要素
- `index` (オプション): 現在の要素のインデックス
- `array` (オプション): `map`が呼び出された配列

### 具体例

以下は、配列の各要素を2倍にする例です。

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function(number) {
    return number * 2;
});

console.log(doubled);
```

このコードは、次のように出力します:
```
[2, 4, 6, 8, 10]
```

インデックスを使用する例も見てみましょう。

```javascript
const fruits = ['apple', 'banana', 'cherry'];

const indexedFruits = fruits.map(function(fruit, index) {
    return `${index}: ${fruit}`;
});

console.log(indexedFruits);
```

このコードは、次のように出力します:
```
["0: apple", "1: banana", "2: cherry"]
```

### アロー関数を使用した書き方

`map`メソッドは、アロー関数を使用してより簡潔に記述することもできます。以下に段階的に示します。

#### 通常の関数を使用した書き方
```javascript
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function(number) {
    return number * 2;
});
```

#### アロー関数を使用した書き方
```javascript
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((number) => {
    return number * 2;
});
```

#### さらに簡潔にした書き方
アロー関数の本体が1行の場合、中括弧と`return`を省略できます。
```javascript
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(number => number * 2);
```

インデックスを使用する例もアロー関数で書き直してみましょう。

#### 通常の関数を使用した書き方
```javascript
const fruits = ['apple', 'banana', 'cherry'];

const indexedFruits = fruits.map(function(fruit, index) {
    return `${index}: ${fruit}`;
});
```

#### アロー関数を使用した書き方
```javascript
const fruits = ['apple', 'banana', 'cherry'];

const indexedFruits = fruits.map((fruit, index) => {
    return `${index}: ${fruit}`;
});
```

#### さらに簡潔にした書き方
```javascript
const fruits = ['apple', 'banana', 'cherry'];

const indexedFruits = fruits.map((fruit, index) => `${index}: ${fruit}`);
```

### 練習問題

以下のコードは、`map`メソッドを使用して配列の各要素を処理する例です。このコードをアロー関数を使用してより簡潔に書き直してください。

#### 問題1
```javascript
const names = ['Alice', 'Bob', 'Charlie'];

const uppercasedNames = names.map(function(name) {
    return name.toUpperCase();
});
```

#### 問題2
```javascript
const scores = [10, 20, 30, 40, 50];

const doubledScores = scores.map(function(score) {
    return score * 2;
});
```

#### 問題3
```javascript
const cities = ['Tokyo', 'Kyoto', 'Osaka'];

const cityLengths = cities.map(function(city) {
    return city.length;
});
```

### 解答例

#### 問題1
```javascript
const names = ['Alice', 'Bob', 'Charlie'];

const uppercasedNames = names.map(name => name.toUpperCase());
```

#### 問題2
```javascript
const scores = [10, 20, 30, 40, 50];

const doubledScores = scores.map(score => score * 2);
```

#### 問題3
```javascript
const cities = ['Tokyo', 'Kyoto', 'Osaka'];

const cityLengths = cities.map(city => city.length);
```

