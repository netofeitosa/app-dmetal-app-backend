
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model VW_AUTORIZACOES_WEB_DEV
 * 
 */
export type VW_AUTORIZACOES_WEB_DEV = $Result.DefaultSelection<Prisma.$VW_AUTORIZACOES_WEB_DEVPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more VW_AUTORIZACOES_WEB_DEVS
 * const vW_AUTORIZACOES_WEB_DEVS = await prisma.vW_AUTORIZACOES_WEB_DEV.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more VW_AUTORIZACOES_WEB_DEVS
   * const vW_AUTORIZACOES_WEB_DEVS = await prisma.vW_AUTORIZACOES_WEB_DEV.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.vW_AUTORIZACOES_WEB_DEV`: Exposes CRUD operations for the **VW_AUTORIZACOES_WEB_DEV** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VW_AUTORIZACOES_WEB_DEVS
    * const vW_AUTORIZACOES_WEB_DEVS = await prisma.vW_AUTORIZACOES_WEB_DEV.findMany()
    * ```
    */
  get vW_AUTORIZACOES_WEB_DEV(): Prisma.VW_AUTORIZACOES_WEB_DEVDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    VW_AUTORIZACOES_WEB_DEV: 'VW_AUTORIZACOES_WEB_DEV'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'vW_AUTORIZACOES_WEB_DEV'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      VW_AUTORIZACOES_WEB_DEV: {
        payload: Prisma.$VW_AUTORIZACOES_WEB_DEVPayload<ExtArgs>
        fields: Prisma.VW_AUTORIZACOES_WEB_DEVFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VW_AUTORIZACOES_WEB_DEVFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_WEB_DEVPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VW_AUTORIZACOES_WEB_DEVFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_WEB_DEVPayload>
          }
          findFirst: {
            args: Prisma.VW_AUTORIZACOES_WEB_DEVFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_WEB_DEVPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VW_AUTORIZACOES_WEB_DEVFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_WEB_DEVPayload>
          }
          findMany: {
            args: Prisma.VW_AUTORIZACOES_WEB_DEVFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_WEB_DEVPayload>[]
          }
          create: {
            args: Prisma.VW_AUTORIZACOES_WEB_DEVCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_WEB_DEVPayload>
          }
          createMany: {
            args: Prisma.VW_AUTORIZACOES_WEB_DEVCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VW_AUTORIZACOES_WEB_DEVDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_WEB_DEVPayload>
          }
          update: {
            args: Prisma.VW_AUTORIZACOES_WEB_DEVUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_WEB_DEVPayload>
          }
          deleteMany: {
            args: Prisma.VW_AUTORIZACOES_WEB_DEVDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VW_AUTORIZACOES_WEB_DEVUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VW_AUTORIZACOES_WEB_DEVUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_WEB_DEVPayload>
          }
          aggregate: {
            args: Prisma.VW_AUTORIZACOES_WEB_DEVAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVW_AUTORIZACOES_WEB_DEV>
          }
          groupBy: {
            args: Prisma.VW_AUTORIZACOES_WEB_DEVGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VW_AUTORIZACOES_WEB_DEVGroupByOutputType>[]
          }
          count: {
            args: Prisma.VW_AUTORIZACOES_WEB_DEVCountArgs<ExtArgs>,
            result: $Utils.Optional<VW_AUTORIZACOES_WEB_DEVCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model VW_AUTORIZACOES_WEB_DEV
   */

  export type AggregateVW_AUTORIZACOES_WEB_DEV = {
    _count: VW_AUTORIZACOES_WEB_DEVCountAggregateOutputType | null
    _avg: VW_AUTORIZACOES_WEB_DEVAvgAggregateOutputType | null
    _sum: VW_AUTORIZACOES_WEB_DEVSumAggregateOutputType | null
    _min: VW_AUTORIZACOES_WEB_DEVMinAggregateOutputType | null
    _max: VW_AUTORIZACOES_WEB_DEVMaxAggregateOutputType | null
  }

  export type VW_AUTORIZACOES_WEB_DEVAvgAggregateOutputType = {
    id: number | null
    despesas: number | null
    descontos: number | null
    saidas: number | null
    cancelamentos: number | null
  }

  export type VW_AUTORIZACOES_WEB_DEVSumAggregateOutputType = {
    id: number | null
    despesas: number | null
    descontos: number | null
    saidas: number | null
    cancelamentos: number | null
  }

  export type VW_AUTORIZACOES_WEB_DEVMinAggregateOutputType = {
    id: number | null
    despesas: number | null
    descontos: number | null
    saidas: number | null
    cancelamentos: number | null
  }

  export type VW_AUTORIZACOES_WEB_DEVMaxAggregateOutputType = {
    id: number | null
    despesas: number | null
    descontos: number | null
    saidas: number | null
    cancelamentos: number | null
  }

  export type VW_AUTORIZACOES_WEB_DEVCountAggregateOutputType = {
    id: number
    despesas: number
    descontos: number
    saidas: number
    cancelamentos: number
    _all: number
  }


  export type VW_AUTORIZACOES_WEB_DEVAvgAggregateInputType = {
    id?: true
    despesas?: true
    descontos?: true
    saidas?: true
    cancelamentos?: true
  }

  export type VW_AUTORIZACOES_WEB_DEVSumAggregateInputType = {
    id?: true
    despesas?: true
    descontos?: true
    saidas?: true
    cancelamentos?: true
  }

  export type VW_AUTORIZACOES_WEB_DEVMinAggregateInputType = {
    id?: true
    despesas?: true
    descontos?: true
    saidas?: true
    cancelamentos?: true
  }

  export type VW_AUTORIZACOES_WEB_DEVMaxAggregateInputType = {
    id?: true
    despesas?: true
    descontos?: true
    saidas?: true
    cancelamentos?: true
  }

  export type VW_AUTORIZACOES_WEB_DEVCountAggregateInputType = {
    id?: true
    despesas?: true
    descontos?: true
    saidas?: true
    cancelamentos?: true
    _all?: true
  }

  export type VW_AUTORIZACOES_WEB_DEVAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VW_AUTORIZACOES_WEB_DEV to aggregate.
     */
    where?: VW_AUTORIZACOES_WEB_DEVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VW_AUTORIZACOES_WEB_DEVS to fetch.
     */
    orderBy?: VW_AUTORIZACOES_WEB_DEVOrderByWithRelationInput | VW_AUTORIZACOES_WEB_DEVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VW_AUTORIZACOES_WEB_DEVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VW_AUTORIZACOES_WEB_DEVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VW_AUTORIZACOES_WEB_DEVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VW_AUTORIZACOES_WEB_DEVS
    **/
    _count?: true | VW_AUTORIZACOES_WEB_DEVCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VW_AUTORIZACOES_WEB_DEVAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VW_AUTORIZACOES_WEB_DEVSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VW_AUTORIZACOES_WEB_DEVMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VW_AUTORIZACOES_WEB_DEVMaxAggregateInputType
  }

  export type GetVW_AUTORIZACOES_WEB_DEVAggregateType<T extends VW_AUTORIZACOES_WEB_DEVAggregateArgs> = {
        [P in keyof T & keyof AggregateVW_AUTORIZACOES_WEB_DEV]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVW_AUTORIZACOES_WEB_DEV[P]>
      : GetScalarType<T[P], AggregateVW_AUTORIZACOES_WEB_DEV[P]>
  }




  export type VW_AUTORIZACOES_WEB_DEVGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VW_AUTORIZACOES_WEB_DEVWhereInput
    orderBy?: VW_AUTORIZACOES_WEB_DEVOrderByWithAggregationInput | VW_AUTORIZACOES_WEB_DEVOrderByWithAggregationInput[]
    by: VW_AUTORIZACOES_WEB_DEVScalarFieldEnum[] | VW_AUTORIZACOES_WEB_DEVScalarFieldEnum
    having?: VW_AUTORIZACOES_WEB_DEVScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VW_AUTORIZACOES_WEB_DEVCountAggregateInputType | true
    _avg?: VW_AUTORIZACOES_WEB_DEVAvgAggregateInputType
    _sum?: VW_AUTORIZACOES_WEB_DEVSumAggregateInputType
    _min?: VW_AUTORIZACOES_WEB_DEVMinAggregateInputType
    _max?: VW_AUTORIZACOES_WEB_DEVMaxAggregateInputType
  }

  export type VW_AUTORIZACOES_WEB_DEVGroupByOutputType = {
    id: number
    despesas: number
    descontos: number
    saidas: number
    cancelamentos: number
    _count: VW_AUTORIZACOES_WEB_DEVCountAggregateOutputType | null
    _avg: VW_AUTORIZACOES_WEB_DEVAvgAggregateOutputType | null
    _sum: VW_AUTORIZACOES_WEB_DEVSumAggregateOutputType | null
    _min: VW_AUTORIZACOES_WEB_DEVMinAggregateOutputType | null
    _max: VW_AUTORIZACOES_WEB_DEVMaxAggregateOutputType | null
  }

  type GetVW_AUTORIZACOES_WEB_DEVGroupByPayload<T extends VW_AUTORIZACOES_WEB_DEVGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VW_AUTORIZACOES_WEB_DEVGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VW_AUTORIZACOES_WEB_DEVGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VW_AUTORIZACOES_WEB_DEVGroupByOutputType[P]>
            : GetScalarType<T[P], VW_AUTORIZACOES_WEB_DEVGroupByOutputType[P]>
        }
      >
    >


  export type VW_AUTORIZACOES_WEB_DEVSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    despesas?: boolean
    descontos?: boolean
    saidas?: boolean
    cancelamentos?: boolean
  }, ExtArgs["result"]["vW_AUTORIZACOES_WEB_DEV"]>

  export type VW_AUTORIZACOES_WEB_DEVSelectScalar = {
    id?: boolean
    despesas?: boolean
    descontos?: boolean
    saidas?: boolean
    cancelamentos?: boolean
  }



  export type $VW_AUTORIZACOES_WEB_DEVPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VW_AUTORIZACOES_WEB_DEV"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      despesas: number
      descontos: number
      saidas: number
      cancelamentos: number
    }, ExtArgs["result"]["vW_AUTORIZACOES_WEB_DEV"]>
    composites: {}
  }


  type VW_AUTORIZACOES_WEB_DEVGetPayload<S extends boolean | null | undefined | VW_AUTORIZACOES_WEB_DEVDefaultArgs> = $Result.GetResult<Prisma.$VW_AUTORIZACOES_WEB_DEVPayload, S>

  type VW_AUTORIZACOES_WEB_DEVCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VW_AUTORIZACOES_WEB_DEVFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VW_AUTORIZACOES_WEB_DEVCountAggregateInputType | true
    }

  export interface VW_AUTORIZACOES_WEB_DEVDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VW_AUTORIZACOES_WEB_DEV'], meta: { name: 'VW_AUTORIZACOES_WEB_DEV' } }
    /**
     * Find zero or one VW_AUTORIZACOES_WEB_DEV that matches the filter.
     * @param {VW_AUTORIZACOES_WEB_DEVFindUniqueArgs} args - Arguments to find a VW_AUTORIZACOES_WEB_DEV
     * @example
     * // Get one VW_AUTORIZACOES_WEB_DEV
     * const vW_AUTORIZACOES_WEB_DEV = await prisma.vW_AUTORIZACOES_WEB_DEV.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VW_AUTORIZACOES_WEB_DEVFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VW_AUTORIZACOES_WEB_DEVFindUniqueArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_WEB_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_WEB_DEVPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VW_AUTORIZACOES_WEB_DEV that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VW_AUTORIZACOES_WEB_DEVFindUniqueOrThrowArgs} args - Arguments to find a VW_AUTORIZACOES_WEB_DEV
     * @example
     * // Get one VW_AUTORIZACOES_WEB_DEV
     * const vW_AUTORIZACOES_WEB_DEV = await prisma.vW_AUTORIZACOES_WEB_DEV.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VW_AUTORIZACOES_WEB_DEVFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VW_AUTORIZACOES_WEB_DEVFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_WEB_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_WEB_DEVPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VW_AUTORIZACOES_WEB_DEV that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_WEB_DEVFindFirstArgs} args - Arguments to find a VW_AUTORIZACOES_WEB_DEV
     * @example
     * // Get one VW_AUTORIZACOES_WEB_DEV
     * const vW_AUTORIZACOES_WEB_DEV = await prisma.vW_AUTORIZACOES_WEB_DEV.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VW_AUTORIZACOES_WEB_DEVFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VW_AUTORIZACOES_WEB_DEVFindFirstArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_WEB_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_WEB_DEVPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VW_AUTORIZACOES_WEB_DEV that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_WEB_DEVFindFirstOrThrowArgs} args - Arguments to find a VW_AUTORIZACOES_WEB_DEV
     * @example
     * // Get one VW_AUTORIZACOES_WEB_DEV
     * const vW_AUTORIZACOES_WEB_DEV = await prisma.vW_AUTORIZACOES_WEB_DEV.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VW_AUTORIZACOES_WEB_DEVFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VW_AUTORIZACOES_WEB_DEVFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_WEB_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_WEB_DEVPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VW_AUTORIZACOES_WEB_DEVS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_WEB_DEVFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VW_AUTORIZACOES_WEB_DEVS
     * const vW_AUTORIZACOES_WEB_DEVS = await prisma.vW_AUTORIZACOES_WEB_DEV.findMany()
     * 
     * // Get first 10 VW_AUTORIZACOES_WEB_DEVS
     * const vW_AUTORIZACOES_WEB_DEVS = await prisma.vW_AUTORIZACOES_WEB_DEV.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vW_AUTORIZACOES_WEB_DEVWithIdOnly = await prisma.vW_AUTORIZACOES_WEB_DEV.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VW_AUTORIZACOES_WEB_DEVFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VW_AUTORIZACOES_WEB_DEVFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VW_AUTORIZACOES_WEB_DEVPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VW_AUTORIZACOES_WEB_DEV.
     * @param {VW_AUTORIZACOES_WEB_DEVCreateArgs} args - Arguments to create a VW_AUTORIZACOES_WEB_DEV.
     * @example
     * // Create one VW_AUTORIZACOES_WEB_DEV
     * const VW_AUTORIZACOES_WEB_DEV = await prisma.vW_AUTORIZACOES_WEB_DEV.create({
     *   data: {
     *     // ... data to create a VW_AUTORIZACOES_WEB_DEV
     *   }
     * })
     * 
    **/
    create<T extends VW_AUTORIZACOES_WEB_DEVCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VW_AUTORIZACOES_WEB_DEVCreateArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_WEB_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_WEB_DEVPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many VW_AUTORIZACOES_WEB_DEVS.
     * @param {VW_AUTORIZACOES_WEB_DEVCreateManyArgs} args - Arguments to create many VW_AUTORIZACOES_WEB_DEVS.
     * @example
     * // Create many VW_AUTORIZACOES_WEB_DEVS
     * const vW_AUTORIZACOES_WEB_DEV = await prisma.vW_AUTORIZACOES_WEB_DEV.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends VW_AUTORIZACOES_WEB_DEVCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VW_AUTORIZACOES_WEB_DEVCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VW_AUTORIZACOES_WEB_DEV.
     * @param {VW_AUTORIZACOES_WEB_DEVDeleteArgs} args - Arguments to delete one VW_AUTORIZACOES_WEB_DEV.
     * @example
     * // Delete one VW_AUTORIZACOES_WEB_DEV
     * const VW_AUTORIZACOES_WEB_DEV = await prisma.vW_AUTORIZACOES_WEB_DEV.delete({
     *   where: {
     *     // ... filter to delete one VW_AUTORIZACOES_WEB_DEV
     *   }
     * })
     * 
    **/
    delete<T extends VW_AUTORIZACOES_WEB_DEVDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VW_AUTORIZACOES_WEB_DEVDeleteArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_WEB_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_WEB_DEVPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VW_AUTORIZACOES_WEB_DEV.
     * @param {VW_AUTORIZACOES_WEB_DEVUpdateArgs} args - Arguments to update one VW_AUTORIZACOES_WEB_DEV.
     * @example
     * // Update one VW_AUTORIZACOES_WEB_DEV
     * const vW_AUTORIZACOES_WEB_DEV = await prisma.vW_AUTORIZACOES_WEB_DEV.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VW_AUTORIZACOES_WEB_DEVUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VW_AUTORIZACOES_WEB_DEVUpdateArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_WEB_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_WEB_DEVPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VW_AUTORIZACOES_WEB_DEVS.
     * @param {VW_AUTORIZACOES_WEB_DEVDeleteManyArgs} args - Arguments to filter VW_AUTORIZACOES_WEB_DEVS to delete.
     * @example
     * // Delete a few VW_AUTORIZACOES_WEB_DEVS
     * const { count } = await prisma.vW_AUTORIZACOES_WEB_DEV.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VW_AUTORIZACOES_WEB_DEVDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VW_AUTORIZACOES_WEB_DEVDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VW_AUTORIZACOES_WEB_DEVS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_WEB_DEVUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VW_AUTORIZACOES_WEB_DEVS
     * const vW_AUTORIZACOES_WEB_DEV = await prisma.vW_AUTORIZACOES_WEB_DEV.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VW_AUTORIZACOES_WEB_DEVUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VW_AUTORIZACOES_WEB_DEVUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VW_AUTORIZACOES_WEB_DEV.
     * @param {VW_AUTORIZACOES_WEB_DEVUpsertArgs} args - Arguments to update or create a VW_AUTORIZACOES_WEB_DEV.
     * @example
     * // Update or create a VW_AUTORIZACOES_WEB_DEV
     * const vW_AUTORIZACOES_WEB_DEV = await prisma.vW_AUTORIZACOES_WEB_DEV.upsert({
     *   create: {
     *     // ... data to create a VW_AUTORIZACOES_WEB_DEV
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VW_AUTORIZACOES_WEB_DEV we want to update
     *   }
     * })
    **/
    upsert<T extends VW_AUTORIZACOES_WEB_DEVUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VW_AUTORIZACOES_WEB_DEVUpsertArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_WEB_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_WEB_DEVPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of VW_AUTORIZACOES_WEB_DEVS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_WEB_DEVCountArgs} args - Arguments to filter VW_AUTORIZACOES_WEB_DEVS to count.
     * @example
     * // Count the number of VW_AUTORIZACOES_WEB_DEVS
     * const count = await prisma.vW_AUTORIZACOES_WEB_DEV.count({
     *   where: {
     *     // ... the filter for the VW_AUTORIZACOES_WEB_DEVS we want to count
     *   }
     * })
    **/
    count<T extends VW_AUTORIZACOES_WEB_DEVCountArgs>(
      args?: Subset<T, VW_AUTORIZACOES_WEB_DEVCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VW_AUTORIZACOES_WEB_DEVCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VW_AUTORIZACOES_WEB_DEV.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_WEB_DEVAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VW_AUTORIZACOES_WEB_DEVAggregateArgs>(args: Subset<T, VW_AUTORIZACOES_WEB_DEVAggregateArgs>): Prisma.PrismaPromise<GetVW_AUTORIZACOES_WEB_DEVAggregateType<T>>

    /**
     * Group by VW_AUTORIZACOES_WEB_DEV.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_WEB_DEVGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VW_AUTORIZACOES_WEB_DEVGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VW_AUTORIZACOES_WEB_DEVGroupByArgs['orderBy'] }
        : { orderBy?: VW_AUTORIZACOES_WEB_DEVGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VW_AUTORIZACOES_WEB_DEVGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVW_AUTORIZACOES_WEB_DEVGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VW_AUTORIZACOES_WEB_DEV model
   */
  readonly fields: VW_AUTORIZACOES_WEB_DEVFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VW_AUTORIZACOES_WEB_DEV.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VW_AUTORIZACOES_WEB_DEVClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the VW_AUTORIZACOES_WEB_DEV model
   */ 
  interface VW_AUTORIZACOES_WEB_DEVFieldRefs {
    readonly id: FieldRef<"VW_AUTORIZACOES_WEB_DEV", 'Int'>
    readonly despesas: FieldRef<"VW_AUTORIZACOES_WEB_DEV", 'Int'>
    readonly descontos: FieldRef<"VW_AUTORIZACOES_WEB_DEV", 'Int'>
    readonly saidas: FieldRef<"VW_AUTORIZACOES_WEB_DEV", 'Int'>
    readonly cancelamentos: FieldRef<"VW_AUTORIZACOES_WEB_DEV", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * VW_AUTORIZACOES_WEB_DEV findUnique
   */
  export type VW_AUTORIZACOES_WEB_DEVFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_WEB_DEV
     */
    select?: VW_AUTORIZACOES_WEB_DEVSelect<ExtArgs> | null
    /**
     * Filter, which VW_AUTORIZACOES_WEB_DEV to fetch.
     */
    where: VW_AUTORIZACOES_WEB_DEVWhereUniqueInput
  }

  /**
   * VW_AUTORIZACOES_WEB_DEV findUniqueOrThrow
   */
  export type VW_AUTORIZACOES_WEB_DEVFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_WEB_DEV
     */
    select?: VW_AUTORIZACOES_WEB_DEVSelect<ExtArgs> | null
    /**
     * Filter, which VW_AUTORIZACOES_WEB_DEV to fetch.
     */
    where: VW_AUTORIZACOES_WEB_DEVWhereUniqueInput
  }

  /**
   * VW_AUTORIZACOES_WEB_DEV findFirst
   */
  export type VW_AUTORIZACOES_WEB_DEVFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_WEB_DEV
     */
    select?: VW_AUTORIZACOES_WEB_DEVSelect<ExtArgs> | null
    /**
     * Filter, which VW_AUTORIZACOES_WEB_DEV to fetch.
     */
    where?: VW_AUTORIZACOES_WEB_DEVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VW_AUTORIZACOES_WEB_DEVS to fetch.
     */
    orderBy?: VW_AUTORIZACOES_WEB_DEVOrderByWithRelationInput | VW_AUTORIZACOES_WEB_DEVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VW_AUTORIZACOES_WEB_DEVS.
     */
    cursor?: VW_AUTORIZACOES_WEB_DEVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VW_AUTORIZACOES_WEB_DEVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VW_AUTORIZACOES_WEB_DEVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VW_AUTORIZACOES_WEB_DEVS.
     */
    distinct?: VW_AUTORIZACOES_WEB_DEVScalarFieldEnum | VW_AUTORIZACOES_WEB_DEVScalarFieldEnum[]
  }

  /**
   * VW_AUTORIZACOES_WEB_DEV findFirstOrThrow
   */
  export type VW_AUTORIZACOES_WEB_DEVFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_WEB_DEV
     */
    select?: VW_AUTORIZACOES_WEB_DEVSelect<ExtArgs> | null
    /**
     * Filter, which VW_AUTORIZACOES_WEB_DEV to fetch.
     */
    where?: VW_AUTORIZACOES_WEB_DEVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VW_AUTORIZACOES_WEB_DEVS to fetch.
     */
    orderBy?: VW_AUTORIZACOES_WEB_DEVOrderByWithRelationInput | VW_AUTORIZACOES_WEB_DEVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VW_AUTORIZACOES_WEB_DEVS.
     */
    cursor?: VW_AUTORIZACOES_WEB_DEVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VW_AUTORIZACOES_WEB_DEVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VW_AUTORIZACOES_WEB_DEVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VW_AUTORIZACOES_WEB_DEVS.
     */
    distinct?: VW_AUTORIZACOES_WEB_DEVScalarFieldEnum | VW_AUTORIZACOES_WEB_DEVScalarFieldEnum[]
  }

  /**
   * VW_AUTORIZACOES_WEB_DEV findMany
   */
  export type VW_AUTORIZACOES_WEB_DEVFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_WEB_DEV
     */
    select?: VW_AUTORIZACOES_WEB_DEVSelect<ExtArgs> | null
    /**
     * Filter, which VW_AUTORIZACOES_WEB_DEVS to fetch.
     */
    where?: VW_AUTORIZACOES_WEB_DEVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VW_AUTORIZACOES_WEB_DEVS to fetch.
     */
    orderBy?: VW_AUTORIZACOES_WEB_DEVOrderByWithRelationInput | VW_AUTORIZACOES_WEB_DEVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VW_AUTORIZACOES_WEB_DEVS.
     */
    cursor?: VW_AUTORIZACOES_WEB_DEVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VW_AUTORIZACOES_WEB_DEVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VW_AUTORIZACOES_WEB_DEVS.
     */
    skip?: number
    distinct?: VW_AUTORIZACOES_WEB_DEVScalarFieldEnum | VW_AUTORIZACOES_WEB_DEVScalarFieldEnum[]
  }

  /**
   * VW_AUTORIZACOES_WEB_DEV create
   */
  export type VW_AUTORIZACOES_WEB_DEVCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_WEB_DEV
     */
    select?: VW_AUTORIZACOES_WEB_DEVSelect<ExtArgs> | null
    /**
     * The data needed to create a VW_AUTORIZACOES_WEB_DEV.
     */
    data: XOR<VW_AUTORIZACOES_WEB_DEVCreateInput, VW_AUTORIZACOES_WEB_DEVUncheckedCreateInput>
  }

  /**
   * VW_AUTORIZACOES_WEB_DEV createMany
   */
  export type VW_AUTORIZACOES_WEB_DEVCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VW_AUTORIZACOES_WEB_DEVS.
     */
    data: VW_AUTORIZACOES_WEB_DEVCreateManyInput | VW_AUTORIZACOES_WEB_DEVCreateManyInput[]
  }

  /**
   * VW_AUTORIZACOES_WEB_DEV update
   */
  export type VW_AUTORIZACOES_WEB_DEVUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_WEB_DEV
     */
    select?: VW_AUTORIZACOES_WEB_DEVSelect<ExtArgs> | null
    /**
     * The data needed to update a VW_AUTORIZACOES_WEB_DEV.
     */
    data: XOR<VW_AUTORIZACOES_WEB_DEVUpdateInput, VW_AUTORIZACOES_WEB_DEVUncheckedUpdateInput>
    /**
     * Choose, which VW_AUTORIZACOES_WEB_DEV to update.
     */
    where: VW_AUTORIZACOES_WEB_DEVWhereUniqueInput
  }

  /**
   * VW_AUTORIZACOES_WEB_DEV updateMany
   */
  export type VW_AUTORIZACOES_WEB_DEVUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VW_AUTORIZACOES_WEB_DEVS.
     */
    data: XOR<VW_AUTORIZACOES_WEB_DEVUpdateManyMutationInput, VW_AUTORIZACOES_WEB_DEVUncheckedUpdateManyInput>
    /**
     * Filter which VW_AUTORIZACOES_WEB_DEVS to update
     */
    where?: VW_AUTORIZACOES_WEB_DEVWhereInput
  }

  /**
   * VW_AUTORIZACOES_WEB_DEV upsert
   */
  export type VW_AUTORIZACOES_WEB_DEVUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_WEB_DEV
     */
    select?: VW_AUTORIZACOES_WEB_DEVSelect<ExtArgs> | null
    /**
     * The filter to search for the VW_AUTORIZACOES_WEB_DEV to update in case it exists.
     */
    where: VW_AUTORIZACOES_WEB_DEVWhereUniqueInput
    /**
     * In case the VW_AUTORIZACOES_WEB_DEV found by the `where` argument doesn't exist, create a new VW_AUTORIZACOES_WEB_DEV with this data.
     */
    create: XOR<VW_AUTORIZACOES_WEB_DEVCreateInput, VW_AUTORIZACOES_WEB_DEVUncheckedCreateInput>
    /**
     * In case the VW_AUTORIZACOES_WEB_DEV was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VW_AUTORIZACOES_WEB_DEVUpdateInput, VW_AUTORIZACOES_WEB_DEVUncheckedUpdateInput>
  }

  /**
   * VW_AUTORIZACOES_WEB_DEV delete
   */
  export type VW_AUTORIZACOES_WEB_DEVDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_WEB_DEV
     */
    select?: VW_AUTORIZACOES_WEB_DEVSelect<ExtArgs> | null
    /**
     * Filter which VW_AUTORIZACOES_WEB_DEV to delete.
     */
    where: VW_AUTORIZACOES_WEB_DEVWhereUniqueInput
  }

  /**
   * VW_AUTORIZACOES_WEB_DEV deleteMany
   */
  export type VW_AUTORIZACOES_WEB_DEVDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VW_AUTORIZACOES_WEB_DEVS to delete
     */
    where?: VW_AUTORIZACOES_WEB_DEVWhereInput
  }

  /**
   * VW_AUTORIZACOES_WEB_DEV without action
   */
  export type VW_AUTORIZACOES_WEB_DEVDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_WEB_DEV
     */
    select?: VW_AUTORIZACOES_WEB_DEVSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const VW_AUTORIZACOES_WEB_DEVScalarFieldEnum: {
    id: 'id',
    despesas: 'despesas',
    descontos: 'descontos',
    saidas: 'saidas',
    cancelamentos: 'cancelamentos'
  };

  export type VW_AUTORIZACOES_WEB_DEVScalarFieldEnum = (typeof VW_AUTORIZACOES_WEB_DEVScalarFieldEnum)[keyof typeof VW_AUTORIZACOES_WEB_DEVScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type VW_AUTORIZACOES_WEB_DEVWhereInput = {
    AND?: VW_AUTORIZACOES_WEB_DEVWhereInput | VW_AUTORIZACOES_WEB_DEVWhereInput[]
    OR?: VW_AUTORIZACOES_WEB_DEVWhereInput[]
    NOT?: VW_AUTORIZACOES_WEB_DEVWhereInput | VW_AUTORIZACOES_WEB_DEVWhereInput[]
    id?: IntFilter<"VW_AUTORIZACOES_WEB_DEV"> | number
    despesas?: IntFilter<"VW_AUTORIZACOES_WEB_DEV"> | number
    descontos?: IntFilter<"VW_AUTORIZACOES_WEB_DEV"> | number
    saidas?: IntFilter<"VW_AUTORIZACOES_WEB_DEV"> | number
    cancelamentos?: IntFilter<"VW_AUTORIZACOES_WEB_DEV"> | number
  }

  export type VW_AUTORIZACOES_WEB_DEVOrderByWithRelationInput = {
    id?: SortOrder
    despesas?: SortOrder
    descontos?: SortOrder
    saidas?: SortOrder
    cancelamentos?: SortOrder
  }

  export type VW_AUTORIZACOES_WEB_DEVWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VW_AUTORIZACOES_WEB_DEVWhereInput | VW_AUTORIZACOES_WEB_DEVWhereInput[]
    OR?: VW_AUTORIZACOES_WEB_DEVWhereInput[]
    NOT?: VW_AUTORIZACOES_WEB_DEVWhereInput | VW_AUTORIZACOES_WEB_DEVWhereInput[]
    despesas?: IntFilter<"VW_AUTORIZACOES_WEB_DEV"> | number
    descontos?: IntFilter<"VW_AUTORIZACOES_WEB_DEV"> | number
    saidas?: IntFilter<"VW_AUTORIZACOES_WEB_DEV"> | number
    cancelamentos?: IntFilter<"VW_AUTORIZACOES_WEB_DEV"> | number
  }, "id">

  export type VW_AUTORIZACOES_WEB_DEVOrderByWithAggregationInput = {
    id?: SortOrder
    despesas?: SortOrder
    descontos?: SortOrder
    saidas?: SortOrder
    cancelamentos?: SortOrder
    _count?: VW_AUTORIZACOES_WEB_DEVCountOrderByAggregateInput
    _avg?: VW_AUTORIZACOES_WEB_DEVAvgOrderByAggregateInput
    _max?: VW_AUTORIZACOES_WEB_DEVMaxOrderByAggregateInput
    _min?: VW_AUTORIZACOES_WEB_DEVMinOrderByAggregateInput
    _sum?: VW_AUTORIZACOES_WEB_DEVSumOrderByAggregateInput
  }

  export type VW_AUTORIZACOES_WEB_DEVScalarWhereWithAggregatesInput = {
    AND?: VW_AUTORIZACOES_WEB_DEVScalarWhereWithAggregatesInput | VW_AUTORIZACOES_WEB_DEVScalarWhereWithAggregatesInput[]
    OR?: VW_AUTORIZACOES_WEB_DEVScalarWhereWithAggregatesInput[]
    NOT?: VW_AUTORIZACOES_WEB_DEVScalarWhereWithAggregatesInput | VW_AUTORIZACOES_WEB_DEVScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VW_AUTORIZACOES_WEB_DEV"> | number
    despesas?: IntWithAggregatesFilter<"VW_AUTORIZACOES_WEB_DEV"> | number
    descontos?: IntWithAggregatesFilter<"VW_AUTORIZACOES_WEB_DEV"> | number
    saidas?: IntWithAggregatesFilter<"VW_AUTORIZACOES_WEB_DEV"> | number
    cancelamentos?: IntWithAggregatesFilter<"VW_AUTORIZACOES_WEB_DEV"> | number
  }

  export type VW_AUTORIZACOES_WEB_DEVCreateInput = {
    id: number
    despesas: number
    descontos: number
    saidas: number
    cancelamentos: number
  }

  export type VW_AUTORIZACOES_WEB_DEVUncheckedCreateInput = {
    id: number
    despesas: number
    descontos: number
    saidas: number
    cancelamentos: number
  }

  export type VW_AUTORIZACOES_WEB_DEVUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    despesas?: IntFieldUpdateOperationsInput | number
    descontos?: IntFieldUpdateOperationsInput | number
    saidas?: IntFieldUpdateOperationsInput | number
    cancelamentos?: IntFieldUpdateOperationsInput | number
  }

  export type VW_AUTORIZACOES_WEB_DEVUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    despesas?: IntFieldUpdateOperationsInput | number
    descontos?: IntFieldUpdateOperationsInput | number
    saidas?: IntFieldUpdateOperationsInput | number
    cancelamentos?: IntFieldUpdateOperationsInput | number
  }

  export type VW_AUTORIZACOES_WEB_DEVCreateManyInput = {
    id: number
    despesas: number
    descontos: number
    saidas: number
    cancelamentos: number
  }

  export type VW_AUTORIZACOES_WEB_DEVUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    despesas?: IntFieldUpdateOperationsInput | number
    descontos?: IntFieldUpdateOperationsInput | number
    saidas?: IntFieldUpdateOperationsInput | number
    cancelamentos?: IntFieldUpdateOperationsInput | number
  }

  export type VW_AUTORIZACOES_WEB_DEVUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    despesas?: IntFieldUpdateOperationsInput | number
    descontos?: IntFieldUpdateOperationsInput | number
    saidas?: IntFieldUpdateOperationsInput | number
    cancelamentos?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type VW_AUTORIZACOES_WEB_DEVCountOrderByAggregateInput = {
    id?: SortOrder
    despesas?: SortOrder
    descontos?: SortOrder
    saidas?: SortOrder
    cancelamentos?: SortOrder
  }

  export type VW_AUTORIZACOES_WEB_DEVAvgOrderByAggregateInput = {
    id?: SortOrder
    despesas?: SortOrder
    descontos?: SortOrder
    saidas?: SortOrder
    cancelamentos?: SortOrder
  }

  export type VW_AUTORIZACOES_WEB_DEVMaxOrderByAggregateInput = {
    id?: SortOrder
    despesas?: SortOrder
    descontos?: SortOrder
    saidas?: SortOrder
    cancelamentos?: SortOrder
  }

  export type VW_AUTORIZACOES_WEB_DEVMinOrderByAggregateInput = {
    id?: SortOrder
    despesas?: SortOrder
    descontos?: SortOrder
    saidas?: SortOrder
    cancelamentos?: SortOrder
  }

  export type VW_AUTORIZACOES_WEB_DEVSumOrderByAggregateInput = {
    id?: SortOrder
    despesas?: SortOrder
    descontos?: SortOrder
    saidas?: SortOrder
    cancelamentos?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use VW_AUTORIZACOES_WEB_DEVDefaultArgs instead
     */
    export type VW_AUTORIZACOES_WEB_DEVArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VW_AUTORIZACOES_WEB_DEVDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}