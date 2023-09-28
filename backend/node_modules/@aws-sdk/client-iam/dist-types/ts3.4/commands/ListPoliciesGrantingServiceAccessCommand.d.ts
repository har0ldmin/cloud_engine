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
  ListPoliciesGrantingServiceAccessRequest,
  ListPoliciesGrantingServiceAccessResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListPoliciesGrantingServiceAccessCommandInput
  extends ListPoliciesGrantingServiceAccessRequest {}
export interface ListPoliciesGrantingServiceAccessCommandOutput
  extends ListPoliciesGrantingServiceAccessResponse,
    __MetadataBearer {}
export declare class ListPoliciesGrantingServiceAccessCommand extends $Command<
  ListPoliciesGrantingServiceAccessCommandInput,
  ListPoliciesGrantingServiceAccessCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: ListPoliciesGrantingServiceAccessCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListPoliciesGrantingServiceAccessCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListPoliciesGrantingServiceAccessCommandInput,
    ListPoliciesGrantingServiceAccessCommandOutput
  >;
  private serialize;
  private deserialize;
}
