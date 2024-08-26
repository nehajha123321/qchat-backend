"use client";
import cytoscape from 'cytoscape';
import fcose from 'cytoscape-fcose';
import COSEBilkent from 'cytoscape-cose-bilkent';
import CytoscapeComponent from 'react-cytoscapejs'
import ec2Image from './_assets/ec2.png';
import { useEffect, useState } from 'react';
import { useUser } from '../UserContext';
import klay from 'cytoscape-klay';
import cola from 'cytoscape-cola';
import FlowLogsFilter from './(components)/flowLogsFilter';
import { useFilter } from './context/FilterContext';
import TopBarFilter from './(components)/topBarFilter';

export default function Page() {
  //let elements: any[] = [];
  const { dispatch } = useUser();
  const { dataFilters, vpcFlowLogData } = useFilter();
  console.log(vpcFlowLogData.length)
  useEffect(() => {
    dispatch({ type: "SETPROJECT", payload: { projectName: "Project Acumen" } })
  }, [])

  let myCyRef;
  useEffect(() => {
    if (myCyRef) myCyRef.layout(layout).run()
  }, [dataFilters, vpcFlowLogData])

  cytoscape.use(fcose)
  cytoscape.use(COSEBilkent)
  cytoscape.use(klay);
  cytoscape.use(cola);
  // default layout options
  var defaults = {
    animate: true, // whether to show the layout as it's running
    refresh: 10, // number of ticks per frame; higher is faster but more jerky
    maxSimulationTime: 20000, // max length in ms to run the layout
    ungrabifyWhileSimulating: false, // so you can't drag nodes during layout
    fit: false, // on every layout reposition of nodes, fit the viewport
    padding: 30, // padding around the simulation
    boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
    nodeDimensionsIncludeLabels: false, // whether labels should be included in determining the space used by a node

    // layout event callbacks
    ready: function () { }, // on layoutready
    stop: function () { }, // on layoutstop

    // positioning options
    randomize: true, // use random node positions at beginning of layout
    avoidOverlap: true, // if true, prevents overlap of node bounding boxes
    handleDisconnected: true, // if true, avoids disconnected components from overlapping
    convergenceThreshold: 0.01, // when the alpha value (system energy) falls below this value, the layout stops
    nodeSpacing: function (node) { return 10; }, // extra spacing around nodes
    flow: undefined, // use DAG/tree flow layout if specified, e.g. { axis: 'y', minSeparation: 30 }
    alignment: undefined, // relative alignment constraints on nodes, e.g. {vertical: [[{node: node1, offset: 0}, {node: node2, offset: 5}]], horizontal: [[{node: node3}, {node: node4}], [{node: node5}, {node: node6}]]}
    gapInequalities: undefined, // list of inequality constraints for the gap between the nodes, e.g. [{"axis":"y", "left":node1, "right":node2, "gap":25}]
    centerGraph: true, // adjusts the node positions initially to center the graph (pass false if you want to start the layout from the current position)

    // different methods of specifying edge length
    // each can be a constant numerical value or a function like `function( edge ){ return 2; }`
    edgeLength: undefined, // sets edge length directly in simulation
    edgeSymDiffLength: undefined, // symmetric diff edge length in simulation
    edgeJaccardLength: undefined, // jaccard edge length in simulation

    // iterations of cola algorithm; uses default values on undefined
    unconstrIter: undefined, // unconstrained initial layout iterations
    userConstIter: undefined, // initial layout iterations with user-specified constraints
    allConstIter: undefined, // initial layout iterations with all constraints including non-overlap
  };
  //const layout = { name: 'cose-bilkent' };
  const layout = {
    name: 'cola',
    fit: true,
    randomize: true,
    nodeSpacing: function (node) { return 20; }
  }

  return (

    <main>
      <div className='flex justify-between gap-4 mb-2'>
        {/* <Button onClick={() => handleLoadData2(filter, reverseFilter)}>Load Data...</Button> */}
        <TopBarFilter />
        {dataFilters.length > 0 && `Filters Applied: ${dataFilters.length}`}
        <FlowLogsFilter />
      </div>
      {vpcFlowLogData &&
        <CytoscapeComponent className="min-h-400 min-w-96 w-full h-lvh bg-stone-400"
          stylesheet={[
            {
              selector: 'node',
              style: {
                'content': 'data(label)',
                'text-valign': 'center',
                'text-halign': 'center',
                'min-zoomed-font-size': '24px',
                'border-color': 'gray',
                'border-width': 1,
              }
            },
            {
              selector: ':parent',
              style: {
                'text-valign': 'top',
                'text-halign': 'center',
                'font-size': '64px'
              }
            },
            {
              selector: 'edge',
              style: {
                'curve-style': 'haystack',
                'width': 1,
                'target-arrow-shape': 'circle-triangle',
                'target-arrow-color': 'red',
                'min-zoomed-font-size': '48px',
                'line-color': 'lightblue'
              }
            },
            {

              selector: '#ec2',
              style: {
                'background-color': 'lightyellow',
                'background-image': `url(${ec2Image.src})`,
                'background-fit': 'cover',
                'height': '64px',
                'width': '64px'
              }
            },
            {
              selector: '.node-size-1',
              style: {
                'height': '16px',
                'width': '16px',
                'background-color': `hsla(0, 100%, ${Math.round(10 / 10 * 80)}%, 1)`
              }
            },
            {
              selector: '.node-size-2',
              style: {
                'height': '24px',
                'width': '24px',
                'background-color': `hsla(100, 100%, ${Math.round(9 / 10 * 80)}%, 1)`
              }
            },
            {
              selector: '.node-size-3',
              style: {
                'height': '32px',
                'width': '32px',
                'font-size': '24px',
                'background-color': `hsla(200, 100%, ${Math.round(8 / 10 * 80)}%, 1)`
              }
            },
            {
              selector: '.node-size-4',
              style: {
                'height': '48px',
                'width': '48px',
                'font-size': '32px',
                'background-color': `hsla(300, 100%, ${Math.round(7 / 10 * 80)}%, 1)`
              }
            },
            {
              selector: '.node-size-5',
              style: {
                'height': '64px',
                'width': '64px',
                'font-size': '32px',
                'background-color': `hsla(150, 100%, ${Math.round(6 / 10 * 80)}%, 1)`
              }
            },
            {
              selector: '.node-size-6',
              style: {
                'height': '96px',
                'width': '96px',
                'font-size': '32px',
                'background-color': `hsla(200, 100%, ${Math.round(5 / 10 * 80)}%, 1)`
              }
            },
            {
              selector: '.node-size-7',
              style: {
                'height': '128px',
                'width': '128px',
                'font-size': '48px',
                'background-color': `hsla(100, 100%, ${Math.round(4 / 10 * 80)}%, 1)`
              }
            },
            {
              selector: '.node-size-8',
              style: {
                'height': '256px',
                'width': '256px',
                'font-size': '48px',
                'background-color': `hsla(50, 100%, ${Math.round(3 / 10 * 80)}%, 1)`
              }
            },
            {
              selector: '.node-size-9',
              style: {
                'height': '512px',
                'width': '512px',
                'font-size': '48px',
                'background-color': `hsla(30, 100%, ${Math.round(2 / 10 * 80)}%, 1)`
              }
            },
            {
              selector: '.node-size-10',
              style: {
                'height': '1024px',
                'width': '1024px',
                'font-size': '48px',
                'background-color': `hsla(0, 100%, ${Math.round(1 / 10 * 80)}%, 1)`
              }
            },
            {
              selector: '.parent-1',
              style: {
                'background-color': `hsla(${1 / 5 * 360}, 100%, 80%, 1)`
              }
            },
            {
              selector: '.parent-2',
              style: {
                'background-color': `hsla(${2 / 5 * 360}, 100%, 80%, 1)`
              }
            },
            {
              selector: '.parent-3',
              style: {
                'background-color': `hsla(${3 / 5 * 360}, 100%, 80%, 1)`
              }
            },
            {
              selector: '.parent-4',
              style: {
                'background-color': `hsla(${4 / 5 * 360}, 100%, 80%, 1)`
              }
            },
            {
              selector: '.parent-5',
              style: {
                'background-color': `hsla(${5 / 5 * 360}, 100%, 80%, 1)`
              }
            },
            {
              selector: '#VPC',
              style: {
                'background-color': `hsla(50, 100%, 95%, .4)`
              }
            },
            {
              selector: '#-',
              style: {
                'background-color': `hsla(0, 100%, 30%, 1)`
              }
            },
            {
              selector: '.subnet-parent',
              style: {
                'font-size': '48px',
              }
            }
          ]}

          elements={vpcFlowLogData}
          layout={layout}
          pan={{ x: 100, y: 200 }}
          zoom={.5}
          fit={true}

          cy={cy => {
            myCyRef = cy;

            /* console.log("EVT", cy);
    
            cy.on("tap", "node", evt => {
              var node = evt.target;
              console.log("EVT", evt);
              console.log("TARGET", node.data());
              console.log("TARGET TYPE", typeof node[0]);
            }); */
          }}

        />}
    </main>
  );
}