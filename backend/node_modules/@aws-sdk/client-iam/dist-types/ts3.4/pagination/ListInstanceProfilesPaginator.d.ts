import { Paginator } from "@smithy/types";
import {
  ListInstanceProfilesCommandInput,
  ListInstanceProfilesCommandOutput,
} from "../commands/ListInstanceProfilesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
export declare function paginateListInstanceProfiles(
  config: IAMPaginationConfiguration,
  input: ListInstanceProfilesCommandInput,
  ...additionalArguments: any
): Paginator<ListInstanceProfilesCommandOutput>;
