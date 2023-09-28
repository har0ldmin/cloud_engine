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
  ListPolicyVersionsRequest,
  ListPolicyVersionsResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListPolicyVersionsCommandInput
  extends ListPolicyVersionsRequest {}
export interface ListPolicyVersionsCommandOutput
  extends ListPolicyVersionsResponse,
    __MetadataBearer {}
export declare class ListPolicyVersionsCommand extends $Command<
  ListPolicyVersionsCommandInput,
  ListPolicyVersionsCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: ListPolicyVersionsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListPolicyVersionsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPolicyVersionsCommandInput, ListPolicyVersionsCommandOutput>;
  private serialize;
  private deserialize;
}
