import { Paginator } from "@smithy/types";
import {
  ListMFADevicesCommandInput,
  ListMFADevicesCommandOutput,
} from "../commands/ListMFADevicesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
export declare function paginateListMFADevices(
  config: IAMPaginationConfiguration,
  input: ListMFADevicesCommandInput,
  ...additionalArguments: any
): Paginator<ListMFADevicesCommandOutput>;
