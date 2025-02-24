export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // type 不允许为空
    'type-empty': [
      2, // 触发这条规则时 error 提示
      'never' // 满足这条规则时，则根据(level=2)进行 error 提示
    ],
    // type 允许的类型
    'type-enum': [
      2, // 触发这条规则时 error 提示
      'always', // 违背这条规则时，则根据 (level) 进行提示
      [
        'feat', // 新功能
        'fix', // bug 修复
        'build', // 项目构建相关
        'docs', // 文档更新
        'style', // 样式调整
        'refactor', // 代码重构
        'test', // 编写测试用例
        'revert', // 代码回滚
        'chore', // 项目配置更新
        'perf', // 性能优化
        'improvement' // 改进/改善
      ]
    ],
    'type-case': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72],
    // body 至少包含4个字符
    'body-min-length': [2, 'always', 4]
  }
}
