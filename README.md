# flatten-line-tree
This is a tool used to turn a hierarchical tree structure of vector paths stored in list format. A line is a list of one or more vectors.

```
vector = [x, y]
line   = [ ...vector]
```

## Example
```js
const flattenLineTree = require('flatten-line-tree');

const line_tree = [
  [ // Line 1
    [1, 4],
    [1, 3],
    [2, 2]
  ],

  [ // Group of two lines
    [ // Line 2
      [1, 0],
      [2, 0]
    ],
    [ // Line 3
      [0, 1],
      [0, 2]
    ]
  ],
];

const lines = flattenLineTree(line_tree);

// 'lines' Output : line hierarchy is removed
[
  [ // Line 1
    [1, 4],
    [1, 3],
    [2, 2]
  ],
  [ // Line 2
    [1, 0],
    [2, 0]
  ],
  [ // Line 3
    [0, 1],
    [0, 2]
  ]
]
```
