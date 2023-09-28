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
  ListUserPoliciesRequest,
  ListUserPoliciesResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListUserPoliciesCommandInput extends ListUserPoliciesRequest {}
export interface ListUserPoliciesCommandOutput
  extends ListUserPoliciesResponse,
    __MetadataBearer {}
export declare class ListUserPoliciesCommand extends $Command<
  ListUserPoliciesCommandInput,
  ListUserPoliciesCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: ListUserPoliciesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListUserPoliciesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListUserPoliciesCommandInput, ListUserPoliciesCommandOutput>;
  private serialize;
  private deserialize;
}
