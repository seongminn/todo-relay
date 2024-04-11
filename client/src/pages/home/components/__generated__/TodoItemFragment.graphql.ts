/**
 * @generated SignedSource<<8b5fb1ac8b5bcc3f8953bac0dedfda99>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoItemFragment$data = {
  readonly attributes: {
    readonly completed: boolean | null | undefined;
    readonly content: string | null | undefined;
  } | null | undefined;
  readonly id: string | null | undefined;
  readonly " $fragmentType": "TodoItemFragment";
};
export type TodoItemFragment$key = {
  readonly " $data"?: TodoItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TodoItemFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoItemFragment",
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

(node as any).hash = "6cd6f41dbfc97e2edd97138097a22477";

export default node;
