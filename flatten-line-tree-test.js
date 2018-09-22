const test = require('tape');
const flattenLineTree = require('./build');


test("Flatten Line Tree - shallow", function(t) {
  const input =  [[1, 2], [2, 5]];
  const output = [[1, 2], [2, 5]];

  t.deepEqual(flattenLineTree(input), output);
  t.end();
});

test("Flatten Line Tree - medium", function(t) {
  const input = [
    [ [ 1,  2], [ 2,  5] ],
    [ [-6,  1], [ 5, -1] ],
    [ [ 2,  5], [ 3,  1] ],
    [ [-6,  2], [-7, -3] ],
    [ [-5, -2], [-7, -7] ]
  ];
  const output = [
    [ [ 1,  2], [ 2,  5] ],
    [ [-6,  1], [ 5, -1] ],
    [ [ 2,  5], [ 3,  1] ],
    [ [-6,  2], [-7, -3] ],
    [ [-5, -2], [-7, -7] ]
  ];

  t.deepEqual(flattenLineTree(input), output);
  t.end();
});

test("Flatten Line Tree - single element array", function(t) {
  const input = [[
    [ [ 1,  2], [ 2,  5] ],
    [ [-6,  1], [ 5, -1] ],
    [ [ 2,  5], [ 3,  1] ],
    [ [-6,  2], [-7, -3] ],
    [ [-5, -2], [-7, -7] ]
  ]];
  const output = [
    [ [ 1,  2], [ 2,  5] ],
    [ [-6,  1], [ 5, -1] ],
    [ [ 2,  5], [ 3,  1] ],
    [ [-6,  2], [-7, -3] ],
    [ [-5, -2], [-7, -7] ]
  ];

  t.deepEqual(flattenLineTree(input), output);
  t.end();
});

test("Flatten Line Tree - deep", function(t) {
  const input = [ 
    [
      [ [ 1,  2], [ 2,  5] ],
      [ [-6,  1], [ 5, -1] ]
    ],
    [
      [ [ 2,  5], [ 3,  1] ],
      [ [-6,  2], [-7, -3] ],
      [ [-5, -2], [-7, -7] ]
    ]
  ];
  const output = [
    [ [ 1,  2], [ 2,  5] ],
    [ [-6,  1], [ 5, -1] ],
    [ [ 2,  5], [ 3,  1] ],
    [ [-6,  2], [-7, -3] ],
    [ [-5, -2], [-7, -7] ]
  ];

  t.deepEqual(flattenLineTree(input), output);
  t.end();
});

test("Flatten Line Tree - deeper", function(t) {
  const input = [ 
    [
      [ [ 1,  2], [ 2,  5] ],
      [ [-6,  1], [ 5, -1] ]
    ],
    [
      [
        [ [ 1,  2], [ 2,  5] ],
        [ [-6,  1], [ 5, -1] ]
      ],
      [ [ 2,  5], [ 3,  1] ],
      [ [-6,  2], [-7, -3] ],
      [ [-5, -2], [-7, -7] ]
    ]
  ];
  const output = [
    [ [ 1,  2], [ 2,  5] ],
    [ [-6,  1], [ 5, -1] ],
    [ [ 1,  2], [ 2,  5] ],
    [ [-6,  1], [ 5, -1] ],
    [ [ 2,  5], [ 3,  1] ],
    [ [-6,  2], [-7, -3] ],
    [ [-5, -2], [-7, -7] ]
  ];

  t.deepEqual(flattenLineTree(input), output);
  t.end();
});