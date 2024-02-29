// create tree and tree2 from nodes.

const nodes = [
  { id: 1, parentId: null },
  { id: 2, parentId: 1 },
  { id: 3, parentId: 1 },
  { id: 4, parentId: 2 },
  { id: 5, parentId: 2 },
  { id: 6, parentId: 3 },
  { id: 7, parentId: 4 },
  { id: 8, parentId: 7 },
  { id: 9, parentId: 8 },
];

function makeTree(nodes, parentId) {
  const result = {};
  const matchingNodes = nodes.filter(function (node) {
    return node.parentId === parentId;
  });
  matchingNodes.forEach(function (node) {
    result[node.id] = makeTree(nodes, node.id);
  });
  return result;
}

const tree = makeTree(nodes, null);
console.log(tree);
