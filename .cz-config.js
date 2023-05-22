module.exports = {
  types: [
    {
      value: 'feat',
      name: 'feat: A new feature【新增功能或特性】',
    },
    { value: 'fix', name: 'fix: A bug fix【bug修复】' },
    { value: 'docs', name: 'docs: Documentation changes【文档修改】' },
    {
      value: 'style',
      name: 'style: Changes code style, such as white-space, formatting, missing semi-colons, etc【代码格式修改】',
    },
    {
      value: 'refactor',
      name: 'refactor: A code Refactoring【代码重构】',
    },
    { value: 'test', name: 'test: Adding missing tests【增加/修改测试用例】' },
    {
      value: 'chore',
      name: 'chore: Changes to the build process, tools, dependencies or devDependencies【工具配置、构建过程或依赖库的更改】',
    },
  ],

  usePreparedCommit: true,

  messages: {
    type: 'Select the type of this committing【选择commit类型】:',
    subject: 'Write a description of the change (max:70)【补充更改描述(长度限制:70)】:\n',
    breaking: 'List any BREAKING CHANGES (optional, enter to skip)【是否有不可兼容性更新(enter跳过)】:\n',
    footer:
      'List any ISSUES CLOSED by this change (optional, enter to skip). E.g.: #31, #34【是否修复存在issues(enter跳过)】:\n',
    confirmCommit: 'Are you sure to commit? (enter to confirm)【确认提交？(enter提交)】',
  },

  allowBreakingChanges: ['feat', 'fix', 'refactor', 'chore'],
  skipQuestions: ['scope', 'body'],

  subjectLimit: 70,
  footerPrefix: 'ISSUES CLOSED:',
};
