import './App.css';

import Tooltip from './Tooltip';

function App() {
  return (
    <div className="App">
      <Tooltip position="top" content="lorem ipsum dolor sit amet" animationDuration={600}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, iste hic ducimus perspiciatis quae quibusdam voluptates repellendus reiciendis consequatur nulla necessitatibus velit ex. Earum cupiditate nesciunt saepe alias ad quas ex doloribus at quae amet optio iste facilis, eaque dicta. Maxime dolorem, enim ducimus natus perferendis dolor voluptate velit dignissimos.</p>
      </Tooltip>
      <Tooltip position="top" content="top">
        <button>top</button>
      </Tooltip>
      <Tooltip position="bottom" content="bottom">
        <button>bottom</button>
      </Tooltip>
      <Tooltip position="left" content="left">
        <button>left</button>
      </Tooltip>
      <Tooltip position="right" content="right">
        <button>right</button>
      </Tooltip>
      <Tooltip position="top-left" content="top-left">
        <button>top left</button>
      </Tooltip>
      <Tooltip position="top-right" content="top-right">
        <button>top right</button>
      </Tooltip>
      <Tooltip position="bottom-left" content="bottom-left">
        <button>bottom left</button>
      </Tooltip>
      <Tooltip position="bottom-right" content="bottom-right">
        <button>bottom right</button>
      </Tooltip>
      <Tooltip position="left-top" content="left-top">
        <button>left top</button>
      </Tooltip>
      <Tooltip position="left-bottom" content="left-bottom">
        <button>left bottom</button>
      </Tooltip>
      <Tooltip position="right-top" content="right-top">
        <button>right top</button>
      </Tooltip>
      <Tooltip position="right-bottom" content="right-bottom">
        <button>right bottom</button>
      </Tooltip>
    </div>
  );
}

export default App;