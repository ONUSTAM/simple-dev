# FACTORY
## TESTについて
MochaやJasmineというテストフレームワークを使う  
今回選んだのはMocha。  

## テストの種類  
今回は、「単体テスト」「統合テスト」を対象にします
- **単体テスト**  
入力をモック化し、個々の関数やクラスをテストし、出力結果が予想通りであることを確認するテストです。

- **統合テスト**  
いくつかのモジュールを組み合わせて予想通りに動作することを保証するテストです。

- **機能テスト**  
製品自体を使って（例えばブラウザを使って）、あるシナリオをテストします。確実に想定した動作をするかといった内部構造は考慮しません。

## テストツールの種類
テストツールは次の2つの機能に分けられます。単一の機能を提供するツールもあれば、複数の機能の組み合わせを提供するツールもあります。

理論的には単一のツールで同じ成果を出せるとしても、よりニーズに合った機能を入手するために、複数のツールを組み合わせて使用するのが一般的です。

テストの環境を提供する  
`Mocha` `Jasmine` `Jest` `Karma`

テストの構造を提供する  
`Mocha` `Jasmine` `Jest` `Cucumber`

アサーション機能を提供する  
`Chai` `Jasmine` `Jest` `Unexpected`

生成、表示、テスト結果をウォッチする  
`Mocha` `Jasmine` `Jest` `Karma`

以前の実行時からの変更が意図されたものであることを確認するために、  
コンポーネントやデータ構造を生成し、スナップショットを比較する  
`Jest` `Ava`

モック、スパイ、スタブを提供する  
`Sinon` `Jasmine` `enzyme` `Jest` `testdouble`

コードカバレッジのレポートを生成する  
`Istanbul` `Jest`

シナリオ実行の管理ができるブラウザ、または疑似ブラウザの環境を提供する  
`Protractor` `Nightwatch` `Phantom` `Casper`

### 参考
[2017年JavaScriptのテスト概論](http://postd.cc/a-complete-guide-to-testing-javascript-in-2017/)  

[test mocha ES6](http://akabeko.me/blog/2016/04/espower-babel-to-babel-preset-power-assert/)
