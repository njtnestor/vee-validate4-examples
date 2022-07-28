// src/types/yup.d.ts
import * as yup from "yup";
import { AnyObject, Maybe } from "yup/lib/types";

declare module "yup" {
  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
  > extends yup.BaseSchema<TType, TContext, TOut> {
    noIncludeTest(msg: string): StringSchema<TType, TContext>;
    cp(msg: string): StringSchema<TType, TContext>;
  }
}

export default yup;