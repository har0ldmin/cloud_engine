import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  ListInstanceProfilesRequest,
  ListInstanceProfilesResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListInstanceProfilesCommandInput
  extends ListInstanceProfilesRequest {}
export interface ListInstanceProfilesCommandOutput
  extends ListInstanceProfilesResponse,
    __MetadataBearer {}
export declare class ListInstanceProfilesCommand extends $Command<
  ListInstanceProfilesCommandInput,
  ListInstanceProfilesCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: ListInstanceProfilesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListInstanceProfilesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListInstanceProfilesCommandInput,
    ListInstanceProfilesCommandOutput
  >;
  private serialize;
  private deserialize;
}
