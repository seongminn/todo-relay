/**
 * @generated SignedSource<<569392bf8f52d69fa0031512366dd4e0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoItem_todo$data = {
  readonly attributes: {
    readonly completed: boolean | null | undefined;
    readonly content: string | null | undefined;
  } | null | undefined;
  readonly id: string | null | undefined;
  readonly " $fragmentType": "TodoItem_todo";
};
export type TodoItem_todo$key = {
  readonly " $data"?: TodoItem_todo$data;
  readonly " $fragmentSpreads": FragmentRefs<"TodoItem_todo">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoItem_todo",
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
  "type": "TodoEntity",
  "abstractKey": null
};

(node as any).hash = "d9c3610acabbff808d50bf03a081d6a3";

export default node;
