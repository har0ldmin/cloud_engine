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
  ListAttachedGroupPoliciesRequest,
  ListAttachedGroupPoliciesResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListAttachedGroupPoliciesCommandInput
  extends ListAttachedGroupPoliciesRequest {}
export interface ListAttachedGroupPoliciesCommandOutput
  extends ListAttachedGroupPoliciesResponse,
    __MetadataBearer {}
export declare class ListAttachedGroupPoliciesCommand extends $Command<
  ListAttachedGroupPoliciesCommandInput,
  ListAttachedGroupPoliciesCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: ListAttachedGroupPoliciesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListAttachedGroupPoliciesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListAttachedGroupPoliciesCommandInput,
    ListAttachedGroupPoliciesCommandOutput
  >;
  private serialize;
  private deserialize;
}
