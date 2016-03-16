# angular-flat-ui
使用angular实现的表单控件组
包括slider、switch、radiocheck等

####安装方式
```javascript
bower install angular-flat-ui --save
```
##### 使用switch控件
引入对应的文件
```html
<link rel="stylesheet" href="../dist/switch/css/flat-switch.css">
<script type="text/javascript" src="../dist/switch/js/an-switch.js"></script>
```
###### 加载模块
```javascript
angular.module("myApp", ['an-switch']);
```
###### 在页面上使用该指令
```html
<input type="checkbox" an-switch/>
```
##### 使用slider控件
###### 引入对应文件
```html
<link rel="stylesheet" href="../dist/slider/css/flat-slider.min.css">
<script src="../src/slider/slider.jquery.js"></script>
<script src="../src/slider/an-slider.js"></script>
```
###### 加载模块
```javascript
angular.moudle('myApp', ['an-slider']);
```
###### 在页面上使用指令
```html
<div an-slider ng-model="vm.sliderValue" an-max="60" an-min="10" an-step="5" an-segments="false"></div>
```
##### 全部控件都使用的话，可直接引用一个合成包
```html
<link rel="stylesheet" type="text/css" href="../dist/all-form/an-form.min.css">
<script src="../dist/all-form/js/an-form.min.js"></script>
```
###### 加载对应模块
```javascript
angular.module('myApp', ['an-form'])
```
###### 在页面上就可以使用每个控件的指令了
```javascript
<input type="checkbox" an-radiocheck ng-model="vm.checkbox">
<input type="radio" an-radiocheck ng-model="vm.radiocheck">
<input type="checkbox" an-switch ng-model="vm.switch">
<div an-slider ng-model="vm.slider" an-max="40"></div>
```
