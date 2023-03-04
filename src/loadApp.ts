/**
 * 该文件仅用于演示，可删除或者根据自己想在本地启动时做一些其他工作而调整
 */
import { LIB_NAME } from 'configs/subApp';
import { random } from 'utils/num';

function __callMethod__() {
  const num = random(100);
  forceRender(`${num}_${Date.now()}`);
}
// @ts-ignore
window.__callMethod__ = __callMethod__;

const usageSnippet = `
    <span style="color:#c62d31">---> lazy load mode</span>
    <pre style="background-color:lightgray;padding-top:12px">
    import helMicro from 'hel-micro';

    export async function callRemoteMethod(){
      const remoteLib = await helMicro.preFetchLib('${LIB_NAME}');
      // now you can call the remote lib by 'remoteLib' reference
    }
    </pre>
    <span style="color:#c62d31">---> preload mode</span>
    <pre style="background-color:lightgray;padding-top:12px">
    // call preFetchLib at entry js file
    (async function(){
      const helMicro = await import('hel-micro');
      await helMicro.preFetchLib('${LIB_NAME}');
      import('./loadApp'); // move your app original entry file content to this file and load it
    })();

    /** --------------------------------------------------------------------------- */
    import remoteLib from '${LIB_NAME}';
    remoteLib.num.random(19); // now you can call the remote safely just like local module
    </pre>
`;

function forceRender(result = '') {
  let con = document.querySelector('#container');
  if (!con) {
    con = document.createElement('div');
    con.id = 'container';
    document.body.append(con);
  }
  con.innerHTML = `
    <div style="padding:60px;">
      <h1>Cool, as you see this is your hel remote module
        <a style="color:blue" href="https://github.com/hel-eco/hel-tpl-remote-lib" target="_blank" rel="noopener noreferrer">${LIB_NAME}</a>
      </h1>
      <span style="color:red;">you can delete or edit this file, It will only run at master-app mode</span>,
      see the <a href="https://www.bilibili.com/video/BV1Dd4y1y7Wj/?vd_source=51bc50bf5f860e0d778c49b00d192cee" target="_blank" rel="noopener noreferrer">video</a>
      if you want to use local debug feature.
      <br />
      <h2>
        <button onclick="__callMethod__()" style="font-size:20px;background-color:#ff9800;color:white;border:none;padding:6px;">click me</button>
        to see changed result : ${result}
      </h2>
      <fieldset>
        <legend>usage snippet</legend>
        ${usageSnippet}
      </fieldset>
      <p style="font-size:20px">
        <img width="30px" style="vertical-align:middle" src="https://tnfe.gtimg.com/image/1k4xi9izbk_1651642720099.png"></img>
        <a href="https://github.com/tnfe/hel" target="_blank" rel="noopener noreferrer">hel-micro</a>,
        a module federation SDK which is unrelated to tool，more details see
        <a href="https://tnfe.github.io/hel/" target="_blank" rel="noopener noreferrer">doc</a>.
      </p>
    </div>
  `;
}

forceRender();
