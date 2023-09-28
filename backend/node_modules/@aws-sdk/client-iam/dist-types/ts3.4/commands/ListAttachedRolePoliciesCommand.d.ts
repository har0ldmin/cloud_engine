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
  ListAttachedRolePoliciesRequest,
  ListAttachedRolePoliciesResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListAttachedRolePoliciesCommandInput
  extends ListAttachedRolePoliciesRequest {}
export interface ListAttachedRolePoliciesCommandOutput
  extends ListAttachedRolePoliciesResponse,
    __MetadataBearer {}
export declare class ListAttachedRolePoliciesCommand extends $Command<
  ListAttachedRolePoliciesCommandInput,
  ListAttachedRolePoliciesCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: ListAttachedRolePoliciesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListAttachedRolePoliciesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListAttachedRolePoliciesCommandInput,
    ListAttachedRolePoliciesCommandOutput
  >;
  private serialize;
  private deserialize;
}
