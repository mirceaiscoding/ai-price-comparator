import { Graph } from '@antv/g6';

let currentId = 2;

const graph = new Graph({
  container: 'container',
  data: {
    nodes: [
      { id: 'node-1', style: { x: 50, y: 50 } }],
    edges: [],
  },
  node: {
    style: {
      fill: 'pink',
    },
  },
  edge: {
    style: {
      stroke: 'lightgreen',
    },
  },
  behaviors: ['drag-canvas', 'zoom-canvas']
});

graph.render();

const addButton = document.getElementById('add');
addButton?.addEventListener('click', () => {
    console.log('add button clicked');
    addStepNode();
    graph.render();
});

function addStepNode() {
    const lastNodeId = `node-${currentId-1}`;
    const newNodeId = `node-${currentId}`;
    graph.addNodeData([{ id: newNodeId, style: { x: 50, y: 50*currentId } }]);
    graph.addEdgeData([{ source: lastNodeId, target: newNodeId }]);
    currentId++;
}

// Fetch initial data from /data endpoint and update the graph
fetch('http://127.0.0.1:5000/data')
  .then(response => response.json())
  .then(data => {
    graph.setData({nodes: [
        { id: 'node-1', style: { x: 50, y: 50 } }],
      edges: [],});
    for (const step of data) {
        addStepNode();
    }
    
    graph.render();
  })
  .catch(error => console.error('Error fetching data:', error));
