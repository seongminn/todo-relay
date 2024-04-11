/**
 * @generated SignedSource<<e9f201c3b59c6d9bc33d9dad95fe2dcb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { UpdatableFragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoItemCheckUpdatableMutation$data = {
  readonly id: string | null | undefined;
  get attributes(): {
    completed: boolean | null | undefined;
  } | null | undefined;
  set attributes(value: null | undefined);
  readonly " $fragmentType": "TodoItemCheckUpdatableMutation";
};
export type TodoItemCheckUpdatableMutation$key = {
  readonly " $data"?: TodoItemCheckUpdatableMutation$data;
  readonly $updatableFragmentSpreads: FragmentRefs<"TodoItemCheckUpdatableMutation">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoItemCheckUpdatableMutation",
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

(node as any).hash = "14f67a99b74a13570b8095b358a1b594";

export default node;
