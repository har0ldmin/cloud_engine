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
  ListGroupPoliciesRequest,
  ListGroupPoliciesResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListGroupPoliciesCommandInput
  extends ListGroupPoliciesRequest {}
export interface ListGroupPoliciesCommandOutput
  extends ListGroupPoliciesResponse,
    __MetadataBearer {}
export declare class ListGroupPoliciesCommand extends $Command<
  ListGroupPoliciesCommandInput,
  ListGroupPoliciesCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: ListGroupPoliciesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListGroupPoliciesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListGroupPoliciesCommandInput, ListGroupPoliciesCommandOutput>;
  private serialize;
  private deserialize;
}
