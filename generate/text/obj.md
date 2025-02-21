# JavaScriptにおけるオブジェクト

JavaScriptにおけるオブジェクトは、キーと値のペアのコレクションです。オブジェクトは、プロパティとメソッドを持つことができます。

## オブジェクトの作成

オブジェクトを作成するには、オブジェクトリテラルを使用する方法と、`new Object()`を使用する方法があります。

### オブジェクトリテラル

```javascript
const person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello!");
    }
};
```

### `new Object()`を使用

```javascript
const person = new Object();
person.name = "John";
person.age = 30;
person.greet = function() {
    console.log("Hello!");
};
```

## プロパティのアクセス

オブジェクトのプロパティには、ドット記法またはブラケット記法でアクセスできます。

```javascript
console.log(person.name); // ドット記法
console.log(person["age"]); // ブラケット記法
```

## メソッドの呼び出し

オブジェクトのメソッドは、プロパティと同様にアクセスして呼び出すことができます。

```javascript
person.greet(); // "Hello!"と表示されます
```

## まとめ

JavaScriptのオブジェクトは、データと機能をまとめて管理するための強力な手段です。オブジェクトリテラルや`new Object()`を使って簡単に作成でき、プロパティやメソッドを通じて操作することができます。