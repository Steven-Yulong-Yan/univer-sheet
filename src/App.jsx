import { useEffect, useRef, useState } from 'react';
import UniverSheet from './components/UniverSheet';
import { getDefaultWorkbookData } from './assets/default-workbook-data';

function App () {
  const [data, setData] = useState(() => getDefaultWorkbookData());
  const univerRef = useRef();

  useEffect(() => {
    console.log(JSON.stringify(data, null, 2))
    /** @type { import("@univerjs/facade").FUniver } */
    // const univerAPI = univerRef.current.univerAPI.current;

    // const { dispose } = univerAPI.onCommandExecuted((command) => {
    //   [command]
    //     .filter(
    //       // Filter by type, only show the following types
    //       (cmd) =>
    //         /**
    //          * @see https://univer.ai/guides/architecture/architecture/#%E5%91%BD%E4%BB%A4%E7%B3%BB%E7%BB%9F
    //          */
    //         [
    //           0, // Command
    //           1, // Operation
    //           2, // Mutation
    //         ].indexOf(cmd.type) !== -1
    //     )
    //     .filter(
    //       // Filter by id, only show the following ids
    //       (cmd) =>
    //         ![
    //           /^doc./, // doc
    //           /^formula-ui./, // formula-ui
    //           /formula/, //  formula
    //           /set-selections/, // selection change
    //           /set-activate-cell-edit/, // change cell edit
    //           // /set-cell-edit-visible/, // floating cell edit
    //         ].find((rule) => {
    //           if (rule instanceof RegExp) {
    //             return rule.test(cmd.id);
    //           } else {
    //             return rule === cmd.id;
    //           }
    //         })
    //     )
    //     .map((cmd) => console.log('Command:', cmd.id, 'Params:', cmd.params));
    // });
    //
    // return () => {
    //   dispose();
    // };
  }, [data]);

  // increment cell value
  // const increment = () => {
  //   /** @type { import("@univerjs/facade").FUniver } */
  //   const univerAPI = univerRef.current?.univerAPI?.current;
  //   if (!univerAPI) throw Error('univerAPI undone');
  //   const range = univerAPI.getActiveWorkbook().getActiveSheet().getRange(0, 0);
  //   const oldVal = isNaN(Number(range.getValue()))
  //     ? 0
  //     : Number(range.getValue());
  //   range.setValue(oldVal + 1);
  // };

  // const logSelection = () => {
  //   /** @type { import("@univerjs/facade").FUniver } */
  //   const univerAPI = univerRef.current?.univerAPI?.current;
  //   if (!univerAPI) throw Error('univerAPI undone');
  //   const selection = univerAPI
  //     .getActiveWorkbook()
  //     .getActiveSheet()
  //     .getSelection();
  //   const range = selection.getActiveRange();
  //   console.log(
  //     'current selection:',
  //     'x',
  //     range.getColumn(),
  //     'y',
  //     range.getRow(),
  //     'cell width',
  //     range.getWidth(),
  //     'cell height',
  //     range.getHeight()
  //   );
  // };

  // const reloadData = () => {
  //   setData(getDefaultWorkbookData(Math.random().toString()));
  // };

  return (
    <div id="root">
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div className="bar" style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => {
              console.log(univerRef.current?.getData());
            }}
            title="Get workbook data output in console"
          >
            Get Data
          </button>
          {/*<button*/}
          {/*  onClick={increment}*/}
          {/*  title="Increment the value of the first cell"*/}
          {/*>Increment</button>*/}
          {/*<button*/}
          {/*  onClick={reloadData}*/}
          {/*  title='Reload data by random'*/}
          {/*>reloadData</button>*/}
        </div>
        <UniverSheet
          style={{ flex: 1 }}
          ref={univerRef}
          data={data}
          onClick={() => {
            console.log('click');
            // logSelection();
          }}
          onDbClick={() => {
            console.log('dbClick');
            // logSelection();
          }}
        />
      </div>
    </div>
  );
}

export default App;
