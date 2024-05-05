import React, { useCallback } from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import {
  nodes as initialNodes,
  edges as initialEdges,
} from './initial-elements';
import AnnotationNode from './AnnotationNode';
import ToolbarNode from './ToolbarNode';
import ResizerNode from './ResizerNode';
import CircleNode from './CircleNode';
import TextNode from './TextNode';
import ButtonEdge from './ButtonEdge';

import 'reactflow/dist/style.css';
import './overview.css';

const nodeTypes = {
  annotation: AnnotationNode,
  tools: ToolbarNode,
  resizer: ResizerNode,
  circle: CircleNode,
  textinput: TextNode,
};

const edgeTypes = {
  button: ButtonEdge,
};

const nodeClassName = (node) => node.type;

const Dashboard = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  return (
    <div className="main-panel">
        <div className="content-wrapper">
          {/* <!-- Page Title Header Starts--> */}
          <div className="row page-title-header">
            <div className="col-12">
              <div className="page-header">
                <h4 className="page-title">Dashboard</h4>
               
              </div>
            </div>

          </div>
          {/* <!-- Page Title Header Ends--> */}
          <div className="row">
            <div className="col-md-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                    <div  style={{ width: '100%', height: '500px' }}>
           <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      attributionPosition="top-right"
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      className="overview"
    >
      <MiniMap zoomable pannable nodeClassName={nodeClassName} />
      <Controls />
      <Background />
    </ReactFlow>
    </div>
                     

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



       

        </div>
        {/* <!-- content-wrapper ends -->
      <!-- partial:partials/_footer.html --> */}
        <footer className="footer">
          <div className="container-fluid clearfix">
            <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">Email Marketing</span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"> ©  <a href="" target="_blank">Email Marketing</a> 2024</span>
          </div>
        </footer>
        {/* <!-- partial --> */}
      </div>
    
   
  );
};

export default Dashboard;
