import { Paginator } from "@smithy/types";
import {
  ListPoliciesCommandInput,
  ListPoliciesCommandOutput,
} from "../commands/ListPoliciesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
export declare function paginateListPolicies(
  config: IAMPaginationConfiguration,
  input: ListPoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListPoliciesCommandOutput>;
