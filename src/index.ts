
async function main() {
  const { libReady, isMasterApp } = await import('hel-lib-proxy');
  const { LIB_NAME } = await import('./configs/subApp');
  // 如有其他远程包依赖并且需要在内部使用静态导入的语法，可使用 preFetchLib 来加载这些包体
  // const { preFetchLib } = await import('hel-micro');
  // await preFetchLib('other-lib');
  // await Promise.all([preFetchLib('lib1'), preFetchLib('lib2')]);

  const libProperties = await import('./entrance/libProperties');
  // !!!注意这句话不能删掉，否则会导致使用方无法获取到模块
  libReady(LIB_NAME, libProperties.default);

  // 这里可根据自己的情况做调整或删除（仅为了本地启动模块时可以以web项目的形式做一些自定义验证逻辑），
  // 被别的使用方载入当前模块时并不会触发 if 块里的逻辑
  if (isMasterApp()) {
    await import('./loadApp');
  }
};

main().catch(console.error);

// avoid isolatedModules warning
export default 'HEL REMOTE MOD';
