module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    "indent": [2, 4],
    "no-cond-assign": ["error", "always"], // 禁止条件表达式中出现赋值操作符
    "no-console": "off", // 禁用 console
    "no-constant-condition": ["error", { "checkLoops": true }], // 禁止在条件中使用常量表达式
    "no-control-regex": ["error"], // 禁止在正则表达式中使用控制字符
    "no-debugger": ["error"], // 禁用 debugger
    "no-dupe-args": ["error"], // 禁止 function 定义中出现重名参数
    "no-dupe-keys": ["error"], // 禁止对象字面量中出现重复的 key
    "no-duplicate-case": ["error"], // 禁止出现重复的 case 标签
    "no-empty": ["error", { "allowEmptyCatch": true }], // 禁止出现空语句块
    "no-empty-character-class": ["error"], // 禁止在正则表达式中使用空字符集
    "no-ex-assign": ["error"], // 禁止对 catch 子句的参数重新赋值
    "no-extra-boolean-cast": ["error"], // 禁止不必要的布尔转换
    "no-extra-semi": ["error"], // 禁止不必要的分号
    'semi': 0,
    "no-func-assign": ["warn"], // 禁止对 function 声明重新赋值
    "no-inner-declarations": ["error"], // 禁止在嵌套的块中出现变量声明或 function 声明
    "no-invalid-regexp": ["error", { "allowConstructorFlags": [] }], // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    "no-irregular-whitespace": ["error"], // 禁止在字符串和注释之外不规则的空白
    "no-obj-calls": ["error"], // 禁止把全局对象作为函数调用
    "no-regex-spaces": ["error"], // 禁止正则表达式字面量中出现多个空格
    "no-sparse-arrays": ["error"], // 禁用稀疏数组
    "no-unexpected-multiline": ["error"], // 禁止出现令人困惑的多行表达式
    "no-unsafe-finally": ["error"], // 禁止在 finally 语句块中出现控制流语句
    "no-unsafe-negation": ["error"], // 禁止对关系运算符的左操作数使用否定操作符
    "use-isnan": ["error"], // 要求使用 isNaN() 检查 NaN
    "array-bracket-newline": ["error", { "multiline": true }], // 在数组开括号后和闭括号前强制换行
    "array-bracket-spacing": ["error", "never"], // 强制数组方括号中使用一致的空2
    "block-spacing": ["error", "never"], // 禁止或强制在代码块中开括号前和闭括号后有空格
    "brace-style": ["error", "1tbs",], // 强制在代码块中使用一致的大括号风格
    "comma-dangle": ["error", "never"], // 要求或禁止末尾逗号
    "comma-spacing": ["error", { "before": false, "after": true }], // 强制在逗号前后使用一致的空格
    "comma-style": ["error", "last"], // 强制使用一致的逗号风格
    "computed-property-spacing": ["error", "never"], // 强制在计算的属性的方括号中使用一致的空格
    "consistent-this": ["error", "that"], // 当获取当前执行环境的上下文时，强制使用一致的命名
    "eol-last": ["error", "always"], // 要求或禁止文件末尾存在空行
    "func-call-spacing": ["error", "never"], // 要求或禁止在函数标识符和其调用之间有空格
    "func-names": ["error", "always"], // 要求或禁止使用命名的 function 表达式
    "func-style": ["error", "declaration", { "allowArrowFunctions": true }], // 强制一致地使用 function 声明或表达式
    "function-paren-newline": ["error", "multiline"], // 强制在函数括号内使用一致的换行
    "implicit-arrow-linebreak": ["error", "beside"], // 强制隐式返回的箭头函数体的位置
    "indent": ["error", 2, { "SwitchCase": 1 }], // 两个空格缩进
    "jsx-quotes": ["error", "prefer-double"], // 强制在 JSX 属性中一致地使用双引号或单引号
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }], // 强制在对象字面量的属性中键和值之间使用一致的间距
    "line-comment-position": ["error", { "position": "above", "ignorePattern": "ETC" }], // 强制行注释的位置
    "max-depth": ["error", 4], // 强制可嵌套的块的最大深度
    "max-nested-callbacks": ["error", 3], // 强制回调函数最大嵌套深度
    "max-params": ["error", 6], // 强制函数定义中最多允许的参数数量
    "linebreak-style": ["off", "windows"],
    'max-len': ["error", { code: 300 }]
  },
};
