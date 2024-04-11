/**
 * @generated SignedSource<<f03377e46bd6289de3c1cdccd654ce8f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { UpdatableFragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoItemCheckMutation_optimisticResponse$data = {
  readonly id: string | null | undefined;
  get attributes(): {
    completed: boolean | null | undefined;
    content: string | null | undefined;
  } | null | undefined;
  set attributes(value: null | undefined);
  readonly " $fragmentType": "TodoItemCheckMutation_optimisticResponse";
};
export type TodoItemCheckMutation_optimisticResponse$key = {
  readonly " $data"?: TodoItemCheckMutation_optimisticResponse$data;
  readonly $updatableFragmentSpreads: FragmentRefs<"TodoItemCheckMutation_optimisticResponse">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoItemCheckMutation_optimisticResponse",
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

(node as any).hash = "77302caf182b882f270646cdf9b659ae";

export default node;
