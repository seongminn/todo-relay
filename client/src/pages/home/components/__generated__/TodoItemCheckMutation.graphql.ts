/**
 * @generated SignedSource<<13d33fdf03c0686b66117288986d1b97>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoInput = {
  completed?: boolean | null | undefined;
  content?: string | null | undefined;
};
export type TodoItemCheckMutation$variables = {
  data: TodoInput;
  id: string;
};
export type TodoItemCheckMutation$data = {
  readonly updateTodo: {
    readonly data: {
      readonly " $fragmentSpreads": FragmentRefs<"TodoItemFragment">;
    } | null | undefined;
  } | null | undefined;
};
export type TodoItemCheckMutation = {
  response: TodoItemCheckMutation$data;
  variables: TodoItemCheckMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "data"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = [
  {
    "kind": "Variable",
    "name": "data",
    "variableName": "data"
  },
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoItemCheckMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "TodoEntityResponse",
        "kind": "LinkedField",
        "name": "updateTodo",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TodoEntity",
            "kind": "LinkedField",
            "name": "data",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "TodoItemFragment"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "TodoItemCheckMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "TodoEntityResponse",
        "kind": "LinkedField",
        "name": "updateTodo",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TodoEntity",
            "kind": "LinkedField",
            "name": "data",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Todo",
                "kind": "LinkedField",
                "name": "attributes",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "content",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "completed",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1b6f929cf3ac29198fc908725044da07",
    "id": null,
    "metadata": {},
    "name": "TodoItemCheckMutation",
    "operationKind": "mutation",
    "text": "mutation TodoItemCheckMutation(\n  $id: ID!\n  $data: TodoInput!\n) {\n  updateTodo(id: $id, data: $data) {\n    data {\n      ...TodoItemFragment\n      id\n    }\n  }\n}\n\nfragment TodoItemFragment on TodoEntity {\n  id\n  attributes {\n    content\n    completed\n  }\n}\n"
  }
};
})();

(node as any).hash = "c0d137c3f15205446c46607e0baa850e";

export default node;
