
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
 * Model VW_AUTORIZACOES_DESPESAS_COFRE_DEV
 * 
 */
export type VW_AUTORIZACOES_DESPESAS_COFRE_DEV = $Result.DefaultSelection<Prisma.$VW_AUTORIZACOES_DESPESAS_COFRE_DEVPayload>
/**
 * Model VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV
 * 
 */
export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV = $Result.DefaultSelection<Prisma.$VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVPayload>
/**
 * Model VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV
 * 
 */
export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV = $Result.DefaultSelection<Prisma.$VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVPayload>
/**
 * Model VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV
 * 
 */
export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV = $Result.DefaultSelection<Prisma.$VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVPayload>
/**
 * Model AUTORIZACOES_WEB_BARRAMENTOS_DEV
 * 
 */
export type AUTORIZACOES_WEB_BARRAMENTOS_DEV = $Result.DefaultSelection<Prisma.$AUTORIZACOES_WEB_BARRAMENTOS_DEVPayload>

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

  /**
   * `prisma.vW_AUTORIZACOES_DESPESAS_COFRE_DEV`: Exposes CRUD operations for the **VW_AUTORIZACOES_DESPESAS_COFRE_DEV** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VW_AUTORIZACOES_DESPESAS_COFRE_DEVS
    * const vW_AUTORIZACOES_DESPESAS_COFRE_DEVS = await prisma.vW_AUTORIZACOES_DESPESAS_COFRE_DEV.findMany()
    * ```
    */
  get vW_AUTORIZACOES_DESPESAS_COFRE_DEV(): Prisma.VW_AUTORIZACOES_DESPESAS_COFRE_DEVDelegate<ExtArgs>;

  /**
   * `prisma.vW_AUTORIZACOES_DESCONTOS_LOJAS_DEV`: Exposes CRUD operations for the **VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS
    * const vW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS = await prisma.vW_AUTORIZACOES_DESCONTOS_LOJAS_DEV.findMany()
    * ```
    */
  get vW_AUTORIZACOES_DESCONTOS_LOJAS_DEV(): Prisma.VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVDelegate<ExtArgs>;

  /**
   * `prisma.vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV`: Exposes CRUD operations for the **VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS
    * const vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS = await prisma.vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV.findMany()
    * ```
    */
  get vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV(): Prisma.VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVDelegate<ExtArgs>;

  /**
   * `prisma.vW_AUTORIZACOES_SAIDAS_AVULSAS_DEV`: Exposes CRUD operations for the **VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS
    * const vW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS = await prisma.vW_AUTORIZACOES_SAIDAS_AVULSAS_DEV.findMany()
    * ```
    */
  get vW_AUTORIZACOES_SAIDAS_AVULSAS_DEV(): Prisma.VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVDelegate<ExtArgs>;

  /**
   * `prisma.aUTORIZACOES_WEB_BARRAMENTOS_DEV`: Exposes CRUD operations for the **AUTORIZACOES_WEB_BARRAMENTOS_DEV** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AUTORIZACOES_WEB_BARRAMENTOS_DEVS
    * const aUTORIZACOES_WEB_BARRAMENTOS_DEVS = await prisma.aUTORIZACOES_WEB_BARRAMENTOS_DEV.findMany()
    * ```
    */
  get aUTORIZACOES_WEB_BARRAMENTOS_DEV(): Prisma.AUTORIZACOES_WEB_BARRAMENTOS_DEVDelegate<ExtArgs>;
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
    VW_AUTORIZACOES_WEB_DEV: 'VW_AUTORIZACOES_WEB_DEV',
    VW_AUTORIZACOES_DESPESAS_COFRE_DEV: 'VW_AUTORIZACOES_DESPESAS_COFRE_DEV',
    VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV: 'VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV',
    VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV: 'VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV',
    VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV: 'VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV',
    AUTORIZACOES_WEB_BARRAMENTOS_DEV: 'AUTORIZACOES_WEB_BARRAMENTOS_DEV'
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
      modelProps: 'vW_AUTORIZACOES_WEB_DEV' | 'vW_AUTORIZACOES_DESPESAS_COFRE_DEV' | 'vW_AUTORIZACOES_DESCONTOS_LOJAS_DEV' | 'vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV' | 'vW_AUTORIZACOES_SAIDAS_AVULSAS_DEV' | 'aUTORIZACOES_WEB_BARRAMENTOS_DEV'
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
      VW_AUTORIZACOES_DESPESAS_COFRE_DEV: {
        payload: Prisma.$VW_AUTORIZACOES_DESPESAS_COFRE_DEVPayload<ExtArgs>
        fields: Prisma.VW_AUTORIZACOES_DESPESAS_COFRE_DEVFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VW_AUTORIZACOES_DESPESAS_COFRE_DEVFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_DESPESAS_COFRE_DEVPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VW_AUTORIZACOES_DESPESAS_COFRE_DEVFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_DESPESAS_COFRE_DEVPayload>
          }
          findFirst: {
            args: Prisma.VW_AUTORIZACOES_DESPESAS_COFRE_DEVFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_DESPESAS_COFRE_DEVPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VW_AUTORIZACOES_DESPESAS_COFRE_DEVFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_DESPESAS_COFRE_DEVPayload>
          }
          findMany: {
            args: Prisma.VW_AUTORIZACOES_DESPESAS_COFRE_DEVFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_DESPESAS_COFRE_DEVPayload>[]
          }
          create: {
            args: Prisma.VW_AUTORIZACOES_DESPESAS_COFRE_DEVCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_DESPESAS_COFRE_DEVPayload>
          }
          createMany: {
            args: Prisma.VW_AUTORIZACOES_DESPESAS_COFRE_DEVCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VW_AUTORIZACOES_DESPESAS_COFRE_DEVDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_DESPESAS_COFRE_DEVPayload>
          }
          update: {
            args: Prisma.VW_AUTORIZACOES_DESPESAS_COFRE_DEVUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_DESPESAS_COFRE_DEVPayload>
          }
          deleteMany: {
            args: Prisma.VW_AUTORIZACOES_DESPESAS_COFRE_DEVDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VW_AUTORIZACOES_DESPESAS_COFRE_DEVUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VW_AUTORIZACOES_DESPESAS_COFRE_DEVUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_DESPESAS_COFRE_DEVPayload>
          }
          aggregate: {
            args: Prisma.VW_AUTORIZACOES_DESPESAS_COFRE_DEVAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVW_AUTORIZACOES_DESPESAS_COFRE_DEV>
          }
          groupBy: {
            args: Prisma.VW_AUTORIZACOES_DESPESAS_COFRE_DEVGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VW_AUTORIZACOES_DESPESAS_COFRE_DEVGroupByOutputType>[]
          }
          count: {
            args: Prisma.VW_AUTORIZACOES_DESPESAS_COFRE_DEVCountArgs<ExtArgs>,
            result: $Utils.Optional<VW_AUTORIZACOES_DESPESAS_COFRE_DEVCountAggregateOutputType> | number
          }
        }
      }
      VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV: {
        payload: Prisma.$VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVPayload<ExtArgs>
        fields: Prisma.VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVPayload>
          }
          findFirst: {
            args: Prisma.VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVPayload>
          }
          findMany: {
            args: Prisma.VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVPayload>[]
          }
          create: {
            args: Prisma.VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVPayload>
          }
          createMany: {
            args: Prisma.VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVPayload>
          }
          update: {
            args: Prisma.VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVPayload>
          }
          deleteMany: {
            args: Prisma.VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVPayload>
          }
          aggregate: {
            args: Prisma.VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVW_AUTORIZACOES_DESCONTOS_LOJAS_DEV>
          }
          groupBy: {
            args: Prisma.VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVGroupByOutputType>[]
          }
          count: {
            args: Prisma.VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVCountArgs<ExtArgs>,
            result: $Utils.Optional<VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVCountAggregateOutputType> | number
          }
        }
      }
      VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV: {
        payload: Prisma.$VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVPayload<ExtArgs>
        fields: Prisma.VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVPayload>
          }
          findFirst: {
            args: Prisma.VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVPayload>
          }
          findMany: {
            args: Prisma.VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVPayload>[]
          }
          create: {
            args: Prisma.VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVPayload>
          }
          createMany: {
            args: Prisma.VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVPayload>
          }
          update: {
            args: Prisma.VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVPayload>
          }
          deleteMany: {
            args: Prisma.VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVPayload>
          }
          aggregate: {
            args: Prisma.VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV>
          }
          groupBy: {
            args: Prisma.VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVGroupByOutputType>[]
          }
          count: {
            args: Prisma.VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVCountArgs<ExtArgs>,
            result: $Utils.Optional<VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVCountAggregateOutputType> | number
          }
        }
      }
      VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV: {
        payload: Prisma.$VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVPayload<ExtArgs>
        fields: Prisma.VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVPayload>
          }
          findFirst: {
            args: Prisma.VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVPayload>
          }
          findMany: {
            args: Prisma.VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVPayload>[]
          }
          create: {
            args: Prisma.VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVPayload>
          }
          createMany: {
            args: Prisma.VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVPayload>
          }
          update: {
            args: Prisma.VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVPayload>
          }
          deleteMany: {
            args: Prisma.VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVPayload>
          }
          aggregate: {
            args: Prisma.VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVW_AUTORIZACOES_SAIDAS_AVULSAS_DEV>
          }
          groupBy: {
            args: Prisma.VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVGroupByOutputType>[]
          }
          count: {
            args: Prisma.VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVCountArgs<ExtArgs>,
            result: $Utils.Optional<VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVCountAggregateOutputType> | number
          }
        }
      }
      AUTORIZACOES_WEB_BARRAMENTOS_DEV: {
        payload: Prisma.$AUTORIZACOES_WEB_BARRAMENTOS_DEVPayload<ExtArgs>
        fields: Prisma.AUTORIZACOES_WEB_BARRAMENTOS_DEVFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AUTORIZACOES_WEB_BARRAMENTOS_DEVFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AUTORIZACOES_WEB_BARRAMENTOS_DEVPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AUTORIZACOES_WEB_BARRAMENTOS_DEVFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AUTORIZACOES_WEB_BARRAMENTOS_DEVPayload>
          }
          findFirst: {
            args: Prisma.AUTORIZACOES_WEB_BARRAMENTOS_DEVFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AUTORIZACOES_WEB_BARRAMENTOS_DEVPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AUTORIZACOES_WEB_BARRAMENTOS_DEVFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AUTORIZACOES_WEB_BARRAMENTOS_DEVPayload>
          }
          findMany: {
            args: Prisma.AUTORIZACOES_WEB_BARRAMENTOS_DEVFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AUTORIZACOES_WEB_BARRAMENTOS_DEVPayload>[]
          }
          create: {
            args: Prisma.AUTORIZACOES_WEB_BARRAMENTOS_DEVCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AUTORIZACOES_WEB_BARRAMENTOS_DEVPayload>
          }
          createMany: {
            args: Prisma.AUTORIZACOES_WEB_BARRAMENTOS_DEVCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AUTORIZACOES_WEB_BARRAMENTOS_DEVDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AUTORIZACOES_WEB_BARRAMENTOS_DEVPayload>
          }
          update: {
            args: Prisma.AUTORIZACOES_WEB_BARRAMENTOS_DEVUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AUTORIZACOES_WEB_BARRAMENTOS_DEVPayload>
          }
          deleteMany: {
            args: Prisma.AUTORIZACOES_WEB_BARRAMENTOS_DEVDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AUTORIZACOES_WEB_BARRAMENTOS_DEVUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AUTORIZACOES_WEB_BARRAMENTOS_DEVUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AUTORIZACOES_WEB_BARRAMENTOS_DEVPayload>
          }
          aggregate: {
            args: Prisma.AUTORIZACOES_WEB_BARRAMENTOS_DEVAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAUTORIZACOES_WEB_BARRAMENTOS_DEV>
          }
          groupBy: {
            args: Prisma.AUTORIZACOES_WEB_BARRAMENTOS_DEVGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AUTORIZACOES_WEB_BARRAMENTOS_DEVGroupByOutputType>[]
          }
          count: {
            args: Prisma.AUTORIZACOES_WEB_BARRAMENTOS_DEVCountArgs<ExtArgs>,
            result: $Utils.Optional<AUTORIZACOES_WEB_BARRAMENTOS_DEVCountAggregateOutputType> | number
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
   * Model VW_AUTORIZACOES_DESPESAS_COFRE_DEV
   */

  export type AggregateVW_AUTORIZACOES_DESPESAS_COFRE_DEV = {
    _count: VW_AUTORIZACOES_DESPESAS_COFRE_DEVCountAggregateOutputType | null
    _avg: VW_AUTORIZACOES_DESPESAS_COFRE_DEVAvgAggregateOutputType | null
    _sum: VW_AUTORIZACOES_DESPESAS_COFRE_DEVSumAggregateOutputType | null
    _min: VW_AUTORIZACOES_DESPESAS_COFRE_DEVMinAggregateOutputType | null
    _max: VW_AUTORIZACOES_DESPESAS_COFRE_DEVMaxAggregateOutputType | null
  }

  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVAvgAggregateOutputType = {
    key: number | null
    despesa: number | null
    loja: number | null
    valor_2: Decimal | null
    ged: number | null
  }

  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVSumAggregateOutputType = {
    key: number | null
    despesa: number | null
    loja: number | null
    valor_2: Decimal | null
    ged: number | null
  }

  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVMinAggregateOutputType = {
    key: number | null
    despesa: number | null
    loja: number | null
    data: string | null
    movimento: string | null
    nome_fantasia: string | null
    valor: string | null
    valor_2: Decimal | null
    observacao: string | null
    ged: number | null
  }

  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVMaxAggregateOutputType = {
    key: number | null
    despesa: number | null
    loja: number | null
    data: string | null
    movimento: string | null
    nome_fantasia: string | null
    valor: string | null
    valor_2: Decimal | null
    observacao: string | null
    ged: number | null
  }

  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVCountAggregateOutputType = {
    key: number
    despesa: number
    loja: number
    data: number
    movimento: number
    nome_fantasia: number
    valor: number
    valor_2: number
    observacao: number
    ged: number
    _all: number
  }


  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVAvgAggregateInputType = {
    key?: true
    despesa?: true
    loja?: true
    valor_2?: true
    ged?: true
  }

  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVSumAggregateInputType = {
    key?: true
    despesa?: true
    loja?: true
    valor_2?: true
    ged?: true
  }

  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVMinAggregateInputType = {
    key?: true
    despesa?: true
    loja?: true
    data?: true
    movimento?: true
    nome_fantasia?: true
    valor?: true
    valor_2?: true
    observacao?: true
    ged?: true
  }

  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVMaxAggregateInputType = {
    key?: true
    despesa?: true
    loja?: true
    data?: true
    movimento?: true
    nome_fantasia?: true
    valor?: true
    valor_2?: true
    observacao?: true
    ged?: true
  }

  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVCountAggregateInputType = {
    key?: true
    despesa?: true
    loja?: true
    data?: true
    movimento?: true
    nome_fantasia?: true
    valor?: true
    valor_2?: true
    observacao?: true
    ged?: true
    _all?: true
  }

  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VW_AUTORIZACOES_DESPESAS_COFRE_DEV to aggregate.
     */
    where?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VW_AUTORIZACOES_DESPESAS_COFRE_DEVS to fetch.
     */
    orderBy?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVOrderByWithRelationInput | VW_AUTORIZACOES_DESPESAS_COFRE_DEVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VW_AUTORIZACOES_DESPESAS_COFRE_DEVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VW_AUTORIZACOES_DESPESAS_COFRE_DEVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VW_AUTORIZACOES_DESPESAS_COFRE_DEVS
    **/
    _count?: true | VW_AUTORIZACOES_DESPESAS_COFRE_DEVCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVMaxAggregateInputType
  }

  export type GetVW_AUTORIZACOES_DESPESAS_COFRE_DEVAggregateType<T extends VW_AUTORIZACOES_DESPESAS_COFRE_DEVAggregateArgs> = {
        [P in keyof T & keyof AggregateVW_AUTORIZACOES_DESPESAS_COFRE_DEV]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVW_AUTORIZACOES_DESPESAS_COFRE_DEV[P]>
      : GetScalarType<T[P], AggregateVW_AUTORIZACOES_DESPESAS_COFRE_DEV[P]>
  }




  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVWhereInput
    orderBy?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVOrderByWithAggregationInput | VW_AUTORIZACOES_DESPESAS_COFRE_DEVOrderByWithAggregationInput[]
    by: VW_AUTORIZACOES_DESPESAS_COFRE_DEVScalarFieldEnum[] | VW_AUTORIZACOES_DESPESAS_COFRE_DEVScalarFieldEnum
    having?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVCountAggregateInputType | true
    _avg?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVAvgAggregateInputType
    _sum?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVSumAggregateInputType
    _min?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVMinAggregateInputType
    _max?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVMaxAggregateInputType
  }

  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVGroupByOutputType = {
    key: number
    despesa: number
    loja: number
    data: string
    movimento: string
    nome_fantasia: string
    valor: string
    valor_2: Decimal
    observacao: string
    ged: number
    _count: VW_AUTORIZACOES_DESPESAS_COFRE_DEVCountAggregateOutputType | null
    _avg: VW_AUTORIZACOES_DESPESAS_COFRE_DEVAvgAggregateOutputType | null
    _sum: VW_AUTORIZACOES_DESPESAS_COFRE_DEVSumAggregateOutputType | null
    _min: VW_AUTORIZACOES_DESPESAS_COFRE_DEVMinAggregateOutputType | null
    _max: VW_AUTORIZACOES_DESPESAS_COFRE_DEVMaxAggregateOutputType | null
  }

  type GetVW_AUTORIZACOES_DESPESAS_COFRE_DEVGroupByPayload<T extends VW_AUTORIZACOES_DESPESAS_COFRE_DEVGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VW_AUTORIZACOES_DESPESAS_COFRE_DEVGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VW_AUTORIZACOES_DESPESAS_COFRE_DEVGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VW_AUTORIZACOES_DESPESAS_COFRE_DEVGroupByOutputType[P]>
            : GetScalarType<T[P], VW_AUTORIZACOES_DESPESAS_COFRE_DEVGroupByOutputType[P]>
        }
      >
    >


  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    despesa?: boolean
    loja?: boolean
    data?: boolean
    movimento?: boolean
    nome_fantasia?: boolean
    valor?: boolean
    valor_2?: boolean
    observacao?: boolean
    ged?: boolean
  }, ExtArgs["result"]["vW_AUTORIZACOES_DESPESAS_COFRE_DEV"]>

  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVSelectScalar = {
    key?: boolean
    despesa?: boolean
    loja?: boolean
    data?: boolean
    movimento?: boolean
    nome_fantasia?: boolean
    valor?: boolean
    valor_2?: boolean
    observacao?: boolean
    ged?: boolean
  }



  export type $VW_AUTORIZACOES_DESPESAS_COFRE_DEVPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VW_AUTORIZACOES_DESPESAS_COFRE_DEV"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: number
      despesa: number
      loja: number
      data: string
      movimento: string
      nome_fantasia: string
      valor: string
      valor_2: Prisma.Decimal
      observacao: string
      ged: number
    }, ExtArgs["result"]["vW_AUTORIZACOES_DESPESAS_COFRE_DEV"]>
    composites: {}
  }


  type VW_AUTORIZACOES_DESPESAS_COFRE_DEVGetPayload<S extends boolean | null | undefined | VW_AUTORIZACOES_DESPESAS_COFRE_DEVDefaultArgs> = $Result.GetResult<Prisma.$VW_AUTORIZACOES_DESPESAS_COFRE_DEVPayload, S>

  type VW_AUTORIZACOES_DESPESAS_COFRE_DEVCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VW_AUTORIZACOES_DESPESAS_COFRE_DEVFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVCountAggregateInputType | true
    }

  export interface VW_AUTORIZACOES_DESPESAS_COFRE_DEVDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VW_AUTORIZACOES_DESPESAS_COFRE_DEV'], meta: { name: 'VW_AUTORIZACOES_DESPESAS_COFRE_DEV' } }
    /**
     * Find zero or one VW_AUTORIZACOES_DESPESAS_COFRE_DEV that matches the filter.
     * @param {VW_AUTORIZACOES_DESPESAS_COFRE_DEVFindUniqueArgs} args - Arguments to find a VW_AUTORIZACOES_DESPESAS_COFRE_DEV
     * @example
     * // Get one VW_AUTORIZACOES_DESPESAS_COFRE_DEV
     * const vW_AUTORIZACOES_DESPESAS_COFRE_DEV = await prisma.vW_AUTORIZACOES_DESPESAS_COFRE_DEV.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VW_AUTORIZACOES_DESPESAS_COFRE_DEVFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VW_AUTORIZACOES_DESPESAS_COFRE_DEVFindUniqueArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_DESPESAS_COFRE_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_DESPESAS_COFRE_DEVPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VW_AUTORIZACOES_DESPESAS_COFRE_DEV that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VW_AUTORIZACOES_DESPESAS_COFRE_DEVFindUniqueOrThrowArgs} args - Arguments to find a VW_AUTORIZACOES_DESPESAS_COFRE_DEV
     * @example
     * // Get one VW_AUTORIZACOES_DESPESAS_COFRE_DEV
     * const vW_AUTORIZACOES_DESPESAS_COFRE_DEV = await prisma.vW_AUTORIZACOES_DESPESAS_COFRE_DEV.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VW_AUTORIZACOES_DESPESAS_COFRE_DEVFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VW_AUTORIZACOES_DESPESAS_COFRE_DEVFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_DESPESAS_COFRE_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_DESPESAS_COFRE_DEVPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VW_AUTORIZACOES_DESPESAS_COFRE_DEV that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_DESPESAS_COFRE_DEVFindFirstArgs} args - Arguments to find a VW_AUTORIZACOES_DESPESAS_COFRE_DEV
     * @example
     * // Get one VW_AUTORIZACOES_DESPESAS_COFRE_DEV
     * const vW_AUTORIZACOES_DESPESAS_COFRE_DEV = await prisma.vW_AUTORIZACOES_DESPESAS_COFRE_DEV.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VW_AUTORIZACOES_DESPESAS_COFRE_DEVFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VW_AUTORIZACOES_DESPESAS_COFRE_DEVFindFirstArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_DESPESAS_COFRE_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_DESPESAS_COFRE_DEVPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VW_AUTORIZACOES_DESPESAS_COFRE_DEV that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_DESPESAS_COFRE_DEVFindFirstOrThrowArgs} args - Arguments to find a VW_AUTORIZACOES_DESPESAS_COFRE_DEV
     * @example
     * // Get one VW_AUTORIZACOES_DESPESAS_COFRE_DEV
     * const vW_AUTORIZACOES_DESPESAS_COFRE_DEV = await prisma.vW_AUTORIZACOES_DESPESAS_COFRE_DEV.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VW_AUTORIZACOES_DESPESAS_COFRE_DEVFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VW_AUTORIZACOES_DESPESAS_COFRE_DEVFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_DESPESAS_COFRE_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_DESPESAS_COFRE_DEVPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VW_AUTORIZACOES_DESPESAS_COFRE_DEVS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_DESPESAS_COFRE_DEVFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VW_AUTORIZACOES_DESPESAS_COFRE_DEVS
     * const vW_AUTORIZACOES_DESPESAS_COFRE_DEVS = await prisma.vW_AUTORIZACOES_DESPESAS_COFRE_DEV.findMany()
     * 
     * // Get first 10 VW_AUTORIZACOES_DESPESAS_COFRE_DEVS
     * const vW_AUTORIZACOES_DESPESAS_COFRE_DEVS = await prisma.vW_AUTORIZACOES_DESPESAS_COFRE_DEV.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const vW_AUTORIZACOES_DESPESAS_COFRE_DEVWithKeyOnly = await prisma.vW_AUTORIZACOES_DESPESAS_COFRE_DEV.findMany({ select: { key: true } })
     * 
    **/
    findMany<T extends VW_AUTORIZACOES_DESPESAS_COFRE_DEVFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VW_AUTORIZACOES_DESPESAS_COFRE_DEVFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VW_AUTORIZACOES_DESPESAS_COFRE_DEVPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VW_AUTORIZACOES_DESPESAS_COFRE_DEV.
     * @param {VW_AUTORIZACOES_DESPESAS_COFRE_DEVCreateArgs} args - Arguments to create a VW_AUTORIZACOES_DESPESAS_COFRE_DEV.
     * @example
     * // Create one VW_AUTORIZACOES_DESPESAS_COFRE_DEV
     * const VW_AUTORIZACOES_DESPESAS_COFRE_DEV = await prisma.vW_AUTORIZACOES_DESPESAS_COFRE_DEV.create({
     *   data: {
     *     // ... data to create a VW_AUTORIZACOES_DESPESAS_COFRE_DEV
     *   }
     * })
     * 
    **/
    create<T extends VW_AUTORIZACOES_DESPESAS_COFRE_DEVCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VW_AUTORIZACOES_DESPESAS_COFRE_DEVCreateArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_DESPESAS_COFRE_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_DESPESAS_COFRE_DEVPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many VW_AUTORIZACOES_DESPESAS_COFRE_DEVS.
     * @param {VW_AUTORIZACOES_DESPESAS_COFRE_DEVCreateManyArgs} args - Arguments to create many VW_AUTORIZACOES_DESPESAS_COFRE_DEVS.
     * @example
     * // Create many VW_AUTORIZACOES_DESPESAS_COFRE_DEVS
     * const vW_AUTORIZACOES_DESPESAS_COFRE_DEV = await prisma.vW_AUTORIZACOES_DESPESAS_COFRE_DEV.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends VW_AUTORIZACOES_DESPESAS_COFRE_DEVCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VW_AUTORIZACOES_DESPESAS_COFRE_DEVCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VW_AUTORIZACOES_DESPESAS_COFRE_DEV.
     * @param {VW_AUTORIZACOES_DESPESAS_COFRE_DEVDeleteArgs} args - Arguments to delete one VW_AUTORIZACOES_DESPESAS_COFRE_DEV.
     * @example
     * // Delete one VW_AUTORIZACOES_DESPESAS_COFRE_DEV
     * const VW_AUTORIZACOES_DESPESAS_COFRE_DEV = await prisma.vW_AUTORIZACOES_DESPESAS_COFRE_DEV.delete({
     *   where: {
     *     // ... filter to delete one VW_AUTORIZACOES_DESPESAS_COFRE_DEV
     *   }
     * })
     * 
    **/
    delete<T extends VW_AUTORIZACOES_DESPESAS_COFRE_DEVDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VW_AUTORIZACOES_DESPESAS_COFRE_DEVDeleteArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_DESPESAS_COFRE_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_DESPESAS_COFRE_DEVPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VW_AUTORIZACOES_DESPESAS_COFRE_DEV.
     * @param {VW_AUTORIZACOES_DESPESAS_COFRE_DEVUpdateArgs} args - Arguments to update one VW_AUTORIZACOES_DESPESAS_COFRE_DEV.
     * @example
     * // Update one VW_AUTORIZACOES_DESPESAS_COFRE_DEV
     * const vW_AUTORIZACOES_DESPESAS_COFRE_DEV = await prisma.vW_AUTORIZACOES_DESPESAS_COFRE_DEV.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VW_AUTORIZACOES_DESPESAS_COFRE_DEVUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VW_AUTORIZACOES_DESPESAS_COFRE_DEVUpdateArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_DESPESAS_COFRE_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_DESPESAS_COFRE_DEVPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VW_AUTORIZACOES_DESPESAS_COFRE_DEVS.
     * @param {VW_AUTORIZACOES_DESPESAS_COFRE_DEVDeleteManyArgs} args - Arguments to filter VW_AUTORIZACOES_DESPESAS_COFRE_DEVS to delete.
     * @example
     * // Delete a few VW_AUTORIZACOES_DESPESAS_COFRE_DEVS
     * const { count } = await prisma.vW_AUTORIZACOES_DESPESAS_COFRE_DEV.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VW_AUTORIZACOES_DESPESAS_COFRE_DEVDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VW_AUTORIZACOES_DESPESAS_COFRE_DEVDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VW_AUTORIZACOES_DESPESAS_COFRE_DEVS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_DESPESAS_COFRE_DEVUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VW_AUTORIZACOES_DESPESAS_COFRE_DEVS
     * const vW_AUTORIZACOES_DESPESAS_COFRE_DEV = await prisma.vW_AUTORIZACOES_DESPESAS_COFRE_DEV.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VW_AUTORIZACOES_DESPESAS_COFRE_DEVUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VW_AUTORIZACOES_DESPESAS_COFRE_DEVUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VW_AUTORIZACOES_DESPESAS_COFRE_DEV.
     * @param {VW_AUTORIZACOES_DESPESAS_COFRE_DEVUpsertArgs} args - Arguments to update or create a VW_AUTORIZACOES_DESPESAS_COFRE_DEV.
     * @example
     * // Update or create a VW_AUTORIZACOES_DESPESAS_COFRE_DEV
     * const vW_AUTORIZACOES_DESPESAS_COFRE_DEV = await prisma.vW_AUTORIZACOES_DESPESAS_COFRE_DEV.upsert({
     *   create: {
     *     // ... data to create a VW_AUTORIZACOES_DESPESAS_COFRE_DEV
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VW_AUTORIZACOES_DESPESAS_COFRE_DEV we want to update
     *   }
     * })
    **/
    upsert<T extends VW_AUTORIZACOES_DESPESAS_COFRE_DEVUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VW_AUTORIZACOES_DESPESAS_COFRE_DEVUpsertArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_DESPESAS_COFRE_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_DESPESAS_COFRE_DEVPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of VW_AUTORIZACOES_DESPESAS_COFRE_DEVS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_DESPESAS_COFRE_DEVCountArgs} args - Arguments to filter VW_AUTORIZACOES_DESPESAS_COFRE_DEVS to count.
     * @example
     * // Count the number of VW_AUTORIZACOES_DESPESAS_COFRE_DEVS
     * const count = await prisma.vW_AUTORIZACOES_DESPESAS_COFRE_DEV.count({
     *   where: {
     *     // ... the filter for the VW_AUTORIZACOES_DESPESAS_COFRE_DEVS we want to count
     *   }
     * })
    **/
    count<T extends VW_AUTORIZACOES_DESPESAS_COFRE_DEVCountArgs>(
      args?: Subset<T, VW_AUTORIZACOES_DESPESAS_COFRE_DEVCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VW_AUTORIZACOES_DESPESAS_COFRE_DEVCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VW_AUTORIZACOES_DESPESAS_COFRE_DEV.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_DESPESAS_COFRE_DEVAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VW_AUTORIZACOES_DESPESAS_COFRE_DEVAggregateArgs>(args: Subset<T, VW_AUTORIZACOES_DESPESAS_COFRE_DEVAggregateArgs>): Prisma.PrismaPromise<GetVW_AUTORIZACOES_DESPESAS_COFRE_DEVAggregateType<T>>

    /**
     * Group by VW_AUTORIZACOES_DESPESAS_COFRE_DEV.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_DESPESAS_COFRE_DEVGroupByArgs} args - Group by arguments.
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
      T extends VW_AUTORIZACOES_DESPESAS_COFRE_DEVGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VW_AUTORIZACOES_DESPESAS_COFRE_DEVGroupByArgs['orderBy'] }
        : { orderBy?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VW_AUTORIZACOES_DESPESAS_COFRE_DEVGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVW_AUTORIZACOES_DESPESAS_COFRE_DEVGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VW_AUTORIZACOES_DESPESAS_COFRE_DEV model
   */
  readonly fields: VW_AUTORIZACOES_DESPESAS_COFRE_DEVFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VW_AUTORIZACOES_DESPESAS_COFRE_DEV.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VW_AUTORIZACOES_DESPESAS_COFRE_DEVClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VW_AUTORIZACOES_DESPESAS_COFRE_DEV model
   */ 
  interface VW_AUTORIZACOES_DESPESAS_COFRE_DEVFieldRefs {
    readonly key: FieldRef<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV", 'Int'>
    readonly despesa: FieldRef<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV", 'Int'>
    readonly loja: FieldRef<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV", 'Int'>
    readonly data: FieldRef<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV", 'String'>
    readonly movimento: FieldRef<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV", 'String'>
    readonly nome_fantasia: FieldRef<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV", 'String'>
    readonly valor: FieldRef<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV", 'String'>
    readonly valor_2: FieldRef<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV", 'Decimal'>
    readonly observacao: FieldRef<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV", 'String'>
    readonly ged: FieldRef<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * VW_AUTORIZACOES_DESPESAS_COFRE_DEV findUnique
   */
  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_DESPESAS_COFRE_DEV
     */
    select?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVSelect<ExtArgs> | null
    /**
     * Filter, which VW_AUTORIZACOES_DESPESAS_COFRE_DEV to fetch.
     */
    where: VW_AUTORIZACOES_DESPESAS_COFRE_DEVWhereUniqueInput
  }

  /**
   * VW_AUTORIZACOES_DESPESAS_COFRE_DEV findUniqueOrThrow
   */
  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_DESPESAS_COFRE_DEV
     */
    select?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVSelect<ExtArgs> | null
    /**
     * Filter, which VW_AUTORIZACOES_DESPESAS_COFRE_DEV to fetch.
     */
    where: VW_AUTORIZACOES_DESPESAS_COFRE_DEVWhereUniqueInput
  }

  /**
   * VW_AUTORIZACOES_DESPESAS_COFRE_DEV findFirst
   */
  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_DESPESAS_COFRE_DEV
     */
    select?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVSelect<ExtArgs> | null
    /**
     * Filter, which VW_AUTORIZACOES_DESPESAS_COFRE_DEV to fetch.
     */
    where?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VW_AUTORIZACOES_DESPESAS_COFRE_DEVS to fetch.
     */
    orderBy?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVOrderByWithRelationInput | VW_AUTORIZACOES_DESPESAS_COFRE_DEVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VW_AUTORIZACOES_DESPESAS_COFRE_DEVS.
     */
    cursor?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VW_AUTORIZACOES_DESPESAS_COFRE_DEVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VW_AUTORIZACOES_DESPESAS_COFRE_DEVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VW_AUTORIZACOES_DESPESAS_COFRE_DEVS.
     */
    distinct?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVScalarFieldEnum | VW_AUTORIZACOES_DESPESAS_COFRE_DEVScalarFieldEnum[]
  }

  /**
   * VW_AUTORIZACOES_DESPESAS_COFRE_DEV findFirstOrThrow
   */
  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_DESPESAS_COFRE_DEV
     */
    select?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVSelect<ExtArgs> | null
    /**
     * Filter, which VW_AUTORIZACOES_DESPESAS_COFRE_DEV to fetch.
     */
    where?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VW_AUTORIZACOES_DESPESAS_COFRE_DEVS to fetch.
     */
    orderBy?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVOrderByWithRelationInput | VW_AUTORIZACOES_DESPESAS_COFRE_DEVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VW_AUTORIZACOES_DESPESAS_COFRE_DEVS.
     */
    cursor?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VW_AUTORIZACOES_DESPESAS_COFRE_DEVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VW_AUTORIZACOES_DESPESAS_COFRE_DEVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VW_AUTORIZACOES_DESPESAS_COFRE_DEVS.
     */
    distinct?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVScalarFieldEnum | VW_AUTORIZACOES_DESPESAS_COFRE_DEVScalarFieldEnum[]
  }

  /**
   * VW_AUTORIZACOES_DESPESAS_COFRE_DEV findMany
   */
  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_DESPESAS_COFRE_DEV
     */
    select?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVSelect<ExtArgs> | null
    /**
     * Filter, which VW_AUTORIZACOES_DESPESAS_COFRE_DEVS to fetch.
     */
    where?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VW_AUTORIZACOES_DESPESAS_COFRE_DEVS to fetch.
     */
    orderBy?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVOrderByWithRelationInput | VW_AUTORIZACOES_DESPESAS_COFRE_DEVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VW_AUTORIZACOES_DESPESAS_COFRE_DEVS.
     */
    cursor?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VW_AUTORIZACOES_DESPESAS_COFRE_DEVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VW_AUTORIZACOES_DESPESAS_COFRE_DEVS.
     */
    skip?: number
    distinct?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVScalarFieldEnum | VW_AUTORIZACOES_DESPESAS_COFRE_DEVScalarFieldEnum[]
  }

  /**
   * VW_AUTORIZACOES_DESPESAS_COFRE_DEV create
   */
  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_DESPESAS_COFRE_DEV
     */
    select?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVSelect<ExtArgs> | null
    /**
     * The data needed to create a VW_AUTORIZACOES_DESPESAS_COFRE_DEV.
     */
    data: XOR<VW_AUTORIZACOES_DESPESAS_COFRE_DEVCreateInput, VW_AUTORIZACOES_DESPESAS_COFRE_DEVUncheckedCreateInput>
  }

  /**
   * VW_AUTORIZACOES_DESPESAS_COFRE_DEV createMany
   */
  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VW_AUTORIZACOES_DESPESAS_COFRE_DEVS.
     */
    data: VW_AUTORIZACOES_DESPESAS_COFRE_DEVCreateManyInput | VW_AUTORIZACOES_DESPESAS_COFRE_DEVCreateManyInput[]
  }

  /**
   * VW_AUTORIZACOES_DESPESAS_COFRE_DEV update
   */
  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_DESPESAS_COFRE_DEV
     */
    select?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVSelect<ExtArgs> | null
    /**
     * The data needed to update a VW_AUTORIZACOES_DESPESAS_COFRE_DEV.
     */
    data: XOR<VW_AUTORIZACOES_DESPESAS_COFRE_DEVUpdateInput, VW_AUTORIZACOES_DESPESAS_COFRE_DEVUncheckedUpdateInput>
    /**
     * Choose, which VW_AUTORIZACOES_DESPESAS_COFRE_DEV to update.
     */
    where: VW_AUTORIZACOES_DESPESAS_COFRE_DEVWhereUniqueInput
  }

  /**
   * VW_AUTORIZACOES_DESPESAS_COFRE_DEV updateMany
   */
  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VW_AUTORIZACOES_DESPESAS_COFRE_DEVS.
     */
    data: XOR<VW_AUTORIZACOES_DESPESAS_COFRE_DEVUpdateManyMutationInput, VW_AUTORIZACOES_DESPESAS_COFRE_DEVUncheckedUpdateManyInput>
    /**
     * Filter which VW_AUTORIZACOES_DESPESAS_COFRE_DEVS to update
     */
    where?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVWhereInput
  }

  /**
   * VW_AUTORIZACOES_DESPESAS_COFRE_DEV upsert
   */
  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_DESPESAS_COFRE_DEV
     */
    select?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVSelect<ExtArgs> | null
    /**
     * The filter to search for the VW_AUTORIZACOES_DESPESAS_COFRE_DEV to update in case it exists.
     */
    where: VW_AUTORIZACOES_DESPESAS_COFRE_DEVWhereUniqueInput
    /**
     * In case the VW_AUTORIZACOES_DESPESAS_COFRE_DEV found by the `where` argument doesn't exist, create a new VW_AUTORIZACOES_DESPESAS_COFRE_DEV with this data.
     */
    create: XOR<VW_AUTORIZACOES_DESPESAS_COFRE_DEVCreateInput, VW_AUTORIZACOES_DESPESAS_COFRE_DEVUncheckedCreateInput>
    /**
     * In case the VW_AUTORIZACOES_DESPESAS_COFRE_DEV was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VW_AUTORIZACOES_DESPESAS_COFRE_DEVUpdateInput, VW_AUTORIZACOES_DESPESAS_COFRE_DEVUncheckedUpdateInput>
  }

  /**
   * VW_AUTORIZACOES_DESPESAS_COFRE_DEV delete
   */
  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_DESPESAS_COFRE_DEV
     */
    select?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVSelect<ExtArgs> | null
    /**
     * Filter which VW_AUTORIZACOES_DESPESAS_COFRE_DEV to delete.
     */
    where: VW_AUTORIZACOES_DESPESAS_COFRE_DEVWhereUniqueInput
  }

  /**
   * VW_AUTORIZACOES_DESPESAS_COFRE_DEV deleteMany
   */
  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VW_AUTORIZACOES_DESPESAS_COFRE_DEVS to delete
     */
    where?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVWhereInput
  }

  /**
   * VW_AUTORIZACOES_DESPESAS_COFRE_DEV without action
   */
  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_DESPESAS_COFRE_DEV
     */
    select?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVSelect<ExtArgs> | null
  }


  /**
   * Model VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV
   */

  export type AggregateVW_AUTORIZACOES_DESCONTOS_LOJAS_DEV = {
    _count: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVCountAggregateOutputType | null
    _avg: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVAvgAggregateOutputType | null
    _sum: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVSumAggregateOutputType | null
    _min: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVMinAggregateOutputType | null
    _max: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVMaxAggregateOutputType | null
  }

  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVAvgAggregateOutputType = {
    key: number | null
    registro: number | null
    documento: number | null
    empresa: number | null
    valor_2: Decimal | null
    desconto_perc: number | null
    valor_liquido_2: Decimal | null
  }

  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVSumAggregateOutputType = {
    key: number | null
    registro: number | null
    documento: number | null
    empresa: number | null
    valor_2: Decimal | null
    desconto_perc: number | null
    valor_liquido_2: Decimal | null
  }

  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVMinAggregateOutputType = {
    key: number | null
    registro: number | null
    documento: number | null
    data: string | null
    cliente: string | null
    empresa: number | null
    nome_fantasia: string | null
    total_bruto: string | null
    desconto_comercial: string | null
    valor: string | null
    valor_2: Decimal | null
    desconto: string | null
    desconto_perc: number | null
    valor_liquido: string | null
    valor_liquido_2: Decimal | null
    desconto_total: string | null
    observacao: string | null
  }

  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVMaxAggregateOutputType = {
    key: number | null
    registro: number | null
    documento: number | null
    data: string | null
    cliente: string | null
    empresa: number | null
    nome_fantasia: string | null
    total_bruto: string | null
    desconto_comercial: string | null
    valor: string | null
    valor_2: Decimal | null
    desconto: string | null
    desconto_perc: number | null
    valor_liquido: string | null
    valor_liquido_2: Decimal | null
    desconto_total: string | null
    observacao: string | null
  }

  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVCountAggregateOutputType = {
    key: number
    registro: number
    documento: number
    data: number
    cliente: number
    empresa: number
    nome_fantasia: number
    total_bruto: number
    desconto_comercial: number
    valor: number
    valor_2: number
    desconto: number
    desconto_perc: number
    valor_liquido: number
    valor_liquido_2: number
    desconto_total: number
    observacao: number
    _all: number
  }


  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVAvgAggregateInputType = {
    key?: true
    registro?: true
    documento?: true
    empresa?: true
    valor_2?: true
    desconto_perc?: true
    valor_liquido_2?: true
  }

  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVSumAggregateInputType = {
    key?: true
    registro?: true
    documento?: true
    empresa?: true
    valor_2?: true
    desconto_perc?: true
    valor_liquido_2?: true
  }

  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVMinAggregateInputType = {
    key?: true
    registro?: true
    documento?: true
    data?: true
    cliente?: true
    empresa?: true
    nome_fantasia?: true
    total_bruto?: true
    desconto_comercial?: true
    valor?: true
    valor_2?: true
    desconto?: true
    desconto_perc?: true
    valor_liquido?: true
    valor_liquido_2?: true
    desconto_total?: true
    observacao?: true
  }

  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVMaxAggregateInputType = {
    key?: true
    registro?: true
    documento?: true
    data?: true
    cliente?: true
    empresa?: true
    nome_fantasia?: true
    total_bruto?: true
    desconto_comercial?: true
    valor?: true
    valor_2?: true
    desconto?: true
    desconto_perc?: true
    valor_liquido?: true
    valor_liquido_2?: true
    desconto_total?: true
    observacao?: true
  }

  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVCountAggregateInputType = {
    key?: true
    registro?: true
    documento?: true
    data?: true
    cliente?: true
    empresa?: true
    nome_fantasia?: true
    total_bruto?: true
    desconto_comercial?: true
    valor?: true
    valor_2?: true
    desconto?: true
    desconto_perc?: true
    valor_liquido?: true
    valor_liquido_2?: true
    desconto_total?: true
    observacao?: true
    _all?: true
  }

  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV to aggregate.
     */
    where?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS to fetch.
     */
    orderBy?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVOrderByWithRelationInput | VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS
    **/
    _count?: true | VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVMaxAggregateInputType
  }

  export type GetVW_AUTORIZACOES_DESCONTOS_LOJAS_DEVAggregateType<T extends VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVAggregateArgs> = {
        [P in keyof T & keyof AggregateVW_AUTORIZACOES_DESCONTOS_LOJAS_DEV]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVW_AUTORIZACOES_DESCONTOS_LOJAS_DEV[P]>
      : GetScalarType<T[P], AggregateVW_AUTORIZACOES_DESCONTOS_LOJAS_DEV[P]>
  }




  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVWhereInput
    orderBy?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVOrderByWithAggregationInput | VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVOrderByWithAggregationInput[]
    by: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVScalarFieldEnum[] | VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVScalarFieldEnum
    having?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVCountAggregateInputType | true
    _avg?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVAvgAggregateInputType
    _sum?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVSumAggregateInputType
    _min?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVMinAggregateInputType
    _max?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVMaxAggregateInputType
  }

  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVGroupByOutputType = {
    key: number
    registro: number
    documento: number
    data: string
    cliente: string
    empresa: number
    nome_fantasia: string
    total_bruto: string
    desconto_comercial: string
    valor: string
    valor_2: Decimal
    desconto: string
    desconto_perc: number
    valor_liquido: string
    valor_liquido_2: Decimal
    desconto_total: string
    observacao: string
    _count: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVCountAggregateOutputType | null
    _avg: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVAvgAggregateOutputType | null
    _sum: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVSumAggregateOutputType | null
    _min: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVMinAggregateOutputType | null
    _max: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVMaxAggregateOutputType | null
  }

  type GetVW_AUTORIZACOES_DESCONTOS_LOJAS_DEVGroupByPayload<T extends VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVGroupByOutputType[P]>
            : GetScalarType<T[P], VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVGroupByOutputType[P]>
        }
      >
    >


  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    registro?: boolean
    documento?: boolean
    data?: boolean
    cliente?: boolean
    empresa?: boolean
    nome_fantasia?: boolean
    total_bruto?: boolean
    desconto_comercial?: boolean
    valor?: boolean
    valor_2?: boolean
    desconto?: boolean
    desconto_perc?: boolean
    valor_liquido?: boolean
    valor_liquido_2?: boolean
    desconto_total?: boolean
    observacao?: boolean
  }, ExtArgs["result"]["vW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"]>

  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVSelectScalar = {
    key?: boolean
    registro?: boolean
    documento?: boolean
    data?: boolean
    cliente?: boolean
    empresa?: boolean
    nome_fantasia?: boolean
    total_bruto?: boolean
    desconto_comercial?: boolean
    valor?: boolean
    valor_2?: boolean
    desconto?: boolean
    desconto_perc?: boolean
    valor_liquido?: boolean
    valor_liquido_2?: boolean
    desconto_total?: boolean
    observacao?: boolean
  }



  export type $VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: number
      registro: number
      documento: number
      data: string
      cliente: string
      empresa: number
      nome_fantasia: string
      total_bruto: string
      desconto_comercial: string
      valor: string
      valor_2: Prisma.Decimal
      desconto: string
      desconto_perc: number
      valor_liquido: string
      valor_liquido_2: Prisma.Decimal
      desconto_total: string
      observacao: string
    }, ExtArgs["result"]["vW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"]>
    composites: {}
  }


  type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVGetPayload<S extends boolean | null | undefined | VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVDefaultArgs> = $Result.GetResult<Prisma.$VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVPayload, S>

  type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVCountAggregateInputType | true
    }

  export interface VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV'], meta: { name: 'VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV' } }
    /**
     * Find zero or one VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV that matches the filter.
     * @param {VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVFindUniqueArgs} args - Arguments to find a VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV
     * @example
     * // Get one VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV
     * const vW_AUTORIZACOES_DESCONTOS_LOJAS_DEV = await prisma.vW_AUTORIZACOES_DESCONTOS_LOJAS_DEV.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVFindUniqueArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVFindUniqueOrThrowArgs} args - Arguments to find a VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV
     * @example
     * // Get one VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV
     * const vW_AUTORIZACOES_DESCONTOS_LOJAS_DEV = await prisma.vW_AUTORIZACOES_DESCONTOS_LOJAS_DEV.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVFindFirstArgs} args - Arguments to find a VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV
     * @example
     * // Get one VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV
     * const vW_AUTORIZACOES_DESCONTOS_LOJAS_DEV = await prisma.vW_AUTORIZACOES_DESCONTOS_LOJAS_DEV.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVFindFirstArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVFindFirstOrThrowArgs} args - Arguments to find a VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV
     * @example
     * // Get one VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV
     * const vW_AUTORIZACOES_DESCONTOS_LOJAS_DEV = await prisma.vW_AUTORIZACOES_DESCONTOS_LOJAS_DEV.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS
     * const vW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS = await prisma.vW_AUTORIZACOES_DESCONTOS_LOJAS_DEV.findMany()
     * 
     * // Get first 10 VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS
     * const vW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS = await prisma.vW_AUTORIZACOES_DESCONTOS_LOJAS_DEV.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const vW_AUTORIZACOES_DESCONTOS_LOJAS_DEVWithKeyOnly = await prisma.vW_AUTORIZACOES_DESCONTOS_LOJAS_DEV.findMany({ select: { key: true } })
     * 
    **/
    findMany<T extends VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV.
     * @param {VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVCreateArgs} args - Arguments to create a VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV.
     * @example
     * // Create one VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV
     * const VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV = await prisma.vW_AUTORIZACOES_DESCONTOS_LOJAS_DEV.create({
     *   data: {
     *     // ... data to create a VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV
     *   }
     * })
     * 
    **/
    create<T extends VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVCreateArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS.
     * @param {VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVCreateManyArgs} args - Arguments to create many VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS.
     * @example
     * // Create many VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS
     * const vW_AUTORIZACOES_DESCONTOS_LOJAS_DEV = await prisma.vW_AUTORIZACOES_DESCONTOS_LOJAS_DEV.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV.
     * @param {VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVDeleteArgs} args - Arguments to delete one VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV.
     * @example
     * // Delete one VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV
     * const VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV = await prisma.vW_AUTORIZACOES_DESCONTOS_LOJAS_DEV.delete({
     *   where: {
     *     // ... filter to delete one VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV
     *   }
     * })
     * 
    **/
    delete<T extends VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVDeleteArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV.
     * @param {VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVUpdateArgs} args - Arguments to update one VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV.
     * @example
     * // Update one VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV
     * const vW_AUTORIZACOES_DESCONTOS_LOJAS_DEV = await prisma.vW_AUTORIZACOES_DESCONTOS_LOJAS_DEV.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVUpdateArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS.
     * @param {VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVDeleteManyArgs} args - Arguments to filter VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS to delete.
     * @example
     * // Delete a few VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS
     * const { count } = await prisma.vW_AUTORIZACOES_DESCONTOS_LOJAS_DEV.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS
     * const vW_AUTORIZACOES_DESCONTOS_LOJAS_DEV = await prisma.vW_AUTORIZACOES_DESCONTOS_LOJAS_DEV.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV.
     * @param {VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVUpsertArgs} args - Arguments to update or create a VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV.
     * @example
     * // Update or create a VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV
     * const vW_AUTORIZACOES_DESCONTOS_LOJAS_DEV = await prisma.vW_AUTORIZACOES_DESCONTOS_LOJAS_DEV.upsert({
     *   create: {
     *     // ... data to create a VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV we want to update
     *   }
     * })
    **/
    upsert<T extends VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVUpsertArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVCountArgs} args - Arguments to filter VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS to count.
     * @example
     * // Count the number of VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS
     * const count = await prisma.vW_AUTORIZACOES_DESCONTOS_LOJAS_DEV.count({
     *   where: {
     *     // ... the filter for the VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS we want to count
     *   }
     * })
    **/
    count<T extends VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVCountArgs>(
      args?: Subset<T, VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVAggregateArgs>(args: Subset<T, VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVAggregateArgs>): Prisma.PrismaPromise<GetVW_AUTORIZACOES_DESCONTOS_LOJAS_DEVAggregateType<T>>

    /**
     * Group by VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVGroupByArgs} args - Group by arguments.
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
      T extends VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVGroupByArgs['orderBy'] }
        : { orderBy?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVW_AUTORIZACOES_DESCONTOS_LOJAS_DEVGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV model
   */
  readonly fields: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV model
   */ 
  interface VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVFieldRefs {
    readonly key: FieldRef<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV", 'Int'>
    readonly registro: FieldRef<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV", 'Int'>
    readonly documento: FieldRef<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV", 'Int'>
    readonly data: FieldRef<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV", 'String'>
    readonly cliente: FieldRef<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV", 'String'>
    readonly empresa: FieldRef<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV", 'Int'>
    readonly nome_fantasia: FieldRef<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV", 'String'>
    readonly total_bruto: FieldRef<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV", 'String'>
    readonly desconto_comercial: FieldRef<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV", 'String'>
    readonly valor: FieldRef<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV", 'String'>
    readonly valor_2: FieldRef<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV", 'Decimal'>
    readonly desconto: FieldRef<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV", 'String'>
    readonly desconto_perc: FieldRef<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV", 'Int'>
    readonly valor_liquido: FieldRef<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV", 'String'>
    readonly valor_liquido_2: FieldRef<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV", 'Decimal'>
    readonly desconto_total: FieldRef<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV", 'String'>
    readonly observacao: FieldRef<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV findUnique
   */
  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV
     */
    select?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVSelect<ExtArgs> | null
    /**
     * Filter, which VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV to fetch.
     */
    where: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVWhereUniqueInput
  }

  /**
   * VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV findUniqueOrThrow
   */
  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV
     */
    select?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVSelect<ExtArgs> | null
    /**
     * Filter, which VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV to fetch.
     */
    where: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVWhereUniqueInput
  }

  /**
   * VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV findFirst
   */
  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV
     */
    select?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVSelect<ExtArgs> | null
    /**
     * Filter, which VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV to fetch.
     */
    where?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS to fetch.
     */
    orderBy?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVOrderByWithRelationInput | VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS.
     */
    cursor?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS.
     */
    distinct?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVScalarFieldEnum | VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVScalarFieldEnum[]
  }

  /**
   * VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV findFirstOrThrow
   */
  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV
     */
    select?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVSelect<ExtArgs> | null
    /**
     * Filter, which VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV to fetch.
     */
    where?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS to fetch.
     */
    orderBy?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVOrderByWithRelationInput | VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS.
     */
    cursor?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS.
     */
    distinct?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVScalarFieldEnum | VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVScalarFieldEnum[]
  }

  /**
   * VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV findMany
   */
  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV
     */
    select?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVSelect<ExtArgs> | null
    /**
     * Filter, which VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS to fetch.
     */
    where?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS to fetch.
     */
    orderBy?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVOrderByWithRelationInput | VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS.
     */
    cursor?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS.
     */
    skip?: number
    distinct?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVScalarFieldEnum | VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVScalarFieldEnum[]
  }

  /**
   * VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV create
   */
  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV
     */
    select?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVSelect<ExtArgs> | null
    /**
     * The data needed to create a VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV.
     */
    data: XOR<VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVCreateInput, VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVUncheckedCreateInput>
  }

  /**
   * VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV createMany
   */
  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS.
     */
    data: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVCreateManyInput | VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVCreateManyInput[]
  }

  /**
   * VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV update
   */
  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV
     */
    select?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVSelect<ExtArgs> | null
    /**
     * The data needed to update a VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV.
     */
    data: XOR<VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVUpdateInput, VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVUncheckedUpdateInput>
    /**
     * Choose, which VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV to update.
     */
    where: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVWhereUniqueInput
  }

  /**
   * VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV updateMany
   */
  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS.
     */
    data: XOR<VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVUpdateManyMutationInput, VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVUncheckedUpdateManyInput>
    /**
     * Filter which VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS to update
     */
    where?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVWhereInput
  }

  /**
   * VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV upsert
   */
  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV
     */
    select?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVSelect<ExtArgs> | null
    /**
     * The filter to search for the VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV to update in case it exists.
     */
    where: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVWhereUniqueInput
    /**
     * In case the VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV found by the `where` argument doesn't exist, create a new VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV with this data.
     */
    create: XOR<VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVCreateInput, VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVUncheckedCreateInput>
    /**
     * In case the VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVUpdateInput, VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVUncheckedUpdateInput>
  }

  /**
   * VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV delete
   */
  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV
     */
    select?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVSelect<ExtArgs> | null
    /**
     * Filter which VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV to delete.
     */
    where: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVWhereUniqueInput
  }

  /**
   * VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV deleteMany
   */
  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVS to delete
     */
    where?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVWhereInput
  }

  /**
   * VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV without action
   */
  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV
     */
    select?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVSelect<ExtArgs> | null
  }


  /**
   * Model VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV
   */

  export type AggregateVW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV = {
    _count: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVCountAggregateOutputType | null
    _avg: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVAvgAggregateOutputType | null
    _sum: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVSumAggregateOutputType | null
    _min: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVMinAggregateOutputType | null
    _max: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVMaxAggregateOutputType | null
  }

  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVAvgAggregateOutputType = {
    key: number | null
    registro: number | null
    empresa: number | null
    prevenda: number | null
    valor_2: Decimal | null
  }

  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVSumAggregateOutputType = {
    key: number | null
    registro: number | null
    empresa: number | null
    prevenda: number | null
    valor_2: Decimal | null
  }

  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVMinAggregateOutputType = {
    key: number | null
    registro: number | null
    empresa: number | null
    nome_fantasia: string | null
    data_hora: Date | null
    movimento: string | null
    prevenda: number | null
    valor: string | null
    valor_2: Decimal | null
    observacao: string | null
  }

  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVMaxAggregateOutputType = {
    key: number | null
    registro: number | null
    empresa: number | null
    nome_fantasia: string | null
    data_hora: Date | null
    movimento: string | null
    prevenda: number | null
    valor: string | null
    valor_2: Decimal | null
    observacao: string | null
  }

  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVCountAggregateOutputType = {
    key: number
    registro: number
    empresa: number
    nome_fantasia: number
    data_hora: number
    movimento: number
    prevenda: number
    valor: number
    valor_2: number
    observacao: number
    _all: number
  }


  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVAvgAggregateInputType = {
    key?: true
    registro?: true
    empresa?: true
    prevenda?: true
    valor_2?: true
  }

  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVSumAggregateInputType = {
    key?: true
    registro?: true
    empresa?: true
    prevenda?: true
    valor_2?: true
  }

  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVMinAggregateInputType = {
    key?: true
    registro?: true
    empresa?: true
    nome_fantasia?: true
    data_hora?: true
    movimento?: true
    prevenda?: true
    valor?: true
    valor_2?: true
    observacao?: true
  }

  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVMaxAggregateInputType = {
    key?: true
    registro?: true
    empresa?: true
    nome_fantasia?: true
    data_hora?: true
    movimento?: true
    prevenda?: true
    valor?: true
    valor_2?: true
    observacao?: true
  }

  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVCountAggregateInputType = {
    key?: true
    registro?: true
    empresa?: true
    nome_fantasia?: true
    data_hora?: true
    movimento?: true
    prevenda?: true
    valor?: true
    valor_2?: true
    observacao?: true
    _all?: true
  }

  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV to aggregate.
     */
    where?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS to fetch.
     */
    orderBy?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVOrderByWithRelationInput | VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS
    **/
    _count?: true | VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVMaxAggregateInputType
  }

  export type GetVW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVAggregateType<T extends VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVAggregateArgs> = {
        [P in keyof T & keyof AggregateVW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV[P]>
      : GetScalarType<T[P], AggregateVW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV[P]>
  }




  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVWhereInput
    orderBy?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVOrderByWithAggregationInput | VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVOrderByWithAggregationInput[]
    by: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVScalarFieldEnum[] | VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVScalarFieldEnum
    having?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVCountAggregateInputType | true
    _avg?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVAvgAggregateInputType
    _sum?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVSumAggregateInputType
    _min?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVMinAggregateInputType
    _max?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVMaxAggregateInputType
  }

  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVGroupByOutputType = {
    key: number
    registro: number
    empresa: number
    nome_fantasia: string
    data_hora: Date
    movimento: string
    prevenda: number
    valor: string
    valor_2: Decimal
    observacao: string
    _count: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVCountAggregateOutputType | null
    _avg: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVAvgAggregateOutputType | null
    _sum: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVSumAggregateOutputType | null
    _min: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVMinAggregateOutputType | null
    _max: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVMaxAggregateOutputType | null
  }

  type GetVW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVGroupByPayload<T extends VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVGroupByOutputType[P]>
            : GetScalarType<T[P], VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVGroupByOutputType[P]>
        }
      >
    >


  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    registro?: boolean
    empresa?: boolean
    nome_fantasia?: boolean
    data_hora?: boolean
    movimento?: boolean
    prevenda?: boolean
    valor?: boolean
    valor_2?: boolean
    observacao?: boolean
  }, ExtArgs["result"]["vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV"]>

  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVSelectScalar = {
    key?: boolean
    registro?: boolean
    empresa?: boolean
    nome_fantasia?: boolean
    data_hora?: boolean
    movimento?: boolean
    prevenda?: boolean
    valor?: boolean
    valor_2?: boolean
    observacao?: boolean
  }



  export type $VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: number
      registro: number
      empresa: number
      nome_fantasia: string
      data_hora: Date
      movimento: string
      prevenda: number
      valor: string
      valor_2: Prisma.Decimal
      observacao: string
    }, ExtArgs["result"]["vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV"]>
    composites: {}
  }


  type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVGetPayload<S extends boolean | null | undefined | VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVDefaultArgs> = $Result.GetResult<Prisma.$VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVPayload, S>

  type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVCountAggregateInputType | true
    }

  export interface VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV'], meta: { name: 'VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV' } }
    /**
     * Find zero or one VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV that matches the filter.
     * @param {VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVFindUniqueArgs} args - Arguments to find a VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV
     * @example
     * // Get one VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV
     * const vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV = await prisma.vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVFindUniqueArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVFindUniqueOrThrowArgs} args - Arguments to find a VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV
     * @example
     * // Get one VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV
     * const vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV = await prisma.vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVFindFirstArgs} args - Arguments to find a VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV
     * @example
     * // Get one VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV
     * const vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV = await prisma.vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVFindFirstArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVFindFirstOrThrowArgs} args - Arguments to find a VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV
     * @example
     * // Get one VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV
     * const vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV = await prisma.vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS
     * const vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS = await prisma.vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV.findMany()
     * 
     * // Get first 10 VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS
     * const vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS = await prisma.vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVWithKeyOnly = await prisma.vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV.findMany({ select: { key: true } })
     * 
    **/
    findMany<T extends VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV.
     * @param {VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVCreateArgs} args - Arguments to create a VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV.
     * @example
     * // Create one VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV
     * const VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV = await prisma.vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV.create({
     *   data: {
     *     // ... data to create a VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV
     *   }
     * })
     * 
    **/
    create<T extends VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVCreateArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS.
     * @param {VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVCreateManyArgs} args - Arguments to create many VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS.
     * @example
     * // Create many VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS
     * const vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV = await prisma.vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV.
     * @param {VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVDeleteArgs} args - Arguments to delete one VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV.
     * @example
     * // Delete one VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV
     * const VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV = await prisma.vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV.delete({
     *   where: {
     *     // ... filter to delete one VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV
     *   }
     * })
     * 
    **/
    delete<T extends VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVDeleteArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV.
     * @param {VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVUpdateArgs} args - Arguments to update one VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV.
     * @example
     * // Update one VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV
     * const vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV = await prisma.vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVUpdateArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS.
     * @param {VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVDeleteManyArgs} args - Arguments to filter VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS to delete.
     * @example
     * // Delete a few VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS
     * const { count } = await prisma.vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS
     * const vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV = await prisma.vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV.
     * @param {VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVUpsertArgs} args - Arguments to update or create a VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV.
     * @example
     * // Update or create a VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV
     * const vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV = await prisma.vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV.upsert({
     *   create: {
     *     // ... data to create a VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV we want to update
     *   }
     * })
    **/
    upsert<T extends VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVUpsertArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVCountArgs} args - Arguments to filter VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS to count.
     * @example
     * // Count the number of VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS
     * const count = await prisma.vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV.count({
     *   where: {
     *     // ... the filter for the VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS we want to count
     *   }
     * })
    **/
    count<T extends VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVCountArgs>(
      args?: Subset<T, VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVAggregateArgs>(args: Subset<T, VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVAggregateArgs>): Prisma.PrismaPromise<GetVW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVAggregateType<T>>

    /**
     * Group by VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVGroupByArgs} args - Group by arguments.
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
      T extends VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVGroupByArgs['orderBy'] }
        : { orderBy?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV model
   */
  readonly fields: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV model
   */ 
  interface VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVFieldRefs {
    readonly key: FieldRef<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV", 'Int'>
    readonly registro: FieldRef<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV", 'Int'>
    readonly empresa: FieldRef<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV", 'Int'>
    readonly nome_fantasia: FieldRef<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV", 'String'>
    readonly data_hora: FieldRef<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV", 'DateTime'>
    readonly movimento: FieldRef<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV", 'String'>
    readonly prevenda: FieldRef<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV", 'Int'>
    readonly valor: FieldRef<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV", 'String'>
    readonly valor_2: FieldRef<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV", 'Decimal'>
    readonly observacao: FieldRef<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV findUnique
   */
  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV
     */
    select?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVSelect<ExtArgs> | null
    /**
     * Filter, which VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV to fetch.
     */
    where: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVWhereUniqueInput
  }

  /**
   * VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV findUniqueOrThrow
   */
  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV
     */
    select?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVSelect<ExtArgs> | null
    /**
     * Filter, which VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV to fetch.
     */
    where: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVWhereUniqueInput
  }

  /**
   * VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV findFirst
   */
  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV
     */
    select?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVSelect<ExtArgs> | null
    /**
     * Filter, which VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV to fetch.
     */
    where?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS to fetch.
     */
    orderBy?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVOrderByWithRelationInput | VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS.
     */
    cursor?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS.
     */
    distinct?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVScalarFieldEnum | VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVScalarFieldEnum[]
  }

  /**
   * VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV findFirstOrThrow
   */
  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV
     */
    select?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVSelect<ExtArgs> | null
    /**
     * Filter, which VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV to fetch.
     */
    where?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS to fetch.
     */
    orderBy?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVOrderByWithRelationInput | VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS.
     */
    cursor?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS.
     */
    distinct?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVScalarFieldEnum | VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVScalarFieldEnum[]
  }

  /**
   * VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV findMany
   */
  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV
     */
    select?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVSelect<ExtArgs> | null
    /**
     * Filter, which VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS to fetch.
     */
    where?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS to fetch.
     */
    orderBy?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVOrderByWithRelationInput | VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS.
     */
    cursor?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS.
     */
    skip?: number
    distinct?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVScalarFieldEnum | VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVScalarFieldEnum[]
  }

  /**
   * VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV create
   */
  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV
     */
    select?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVSelect<ExtArgs> | null
    /**
     * The data needed to create a VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV.
     */
    data: XOR<VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVCreateInput, VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVUncheckedCreateInput>
  }

  /**
   * VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV createMany
   */
  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS.
     */
    data: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVCreateManyInput | VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVCreateManyInput[]
  }

  /**
   * VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV update
   */
  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV
     */
    select?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVSelect<ExtArgs> | null
    /**
     * The data needed to update a VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV.
     */
    data: XOR<VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVUpdateInput, VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVUncheckedUpdateInput>
    /**
     * Choose, which VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV to update.
     */
    where: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVWhereUniqueInput
  }

  /**
   * VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV updateMany
   */
  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS.
     */
    data: XOR<VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVUpdateManyMutationInput, VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVUncheckedUpdateManyInput>
    /**
     * Filter which VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS to update
     */
    where?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVWhereInput
  }

  /**
   * VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV upsert
   */
  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV
     */
    select?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVSelect<ExtArgs> | null
    /**
     * The filter to search for the VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV to update in case it exists.
     */
    where: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVWhereUniqueInput
    /**
     * In case the VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV found by the `where` argument doesn't exist, create a new VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV with this data.
     */
    create: XOR<VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVCreateInput, VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVUncheckedCreateInput>
    /**
     * In case the VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVUpdateInput, VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVUncheckedUpdateInput>
  }

  /**
   * VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV delete
   */
  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV
     */
    select?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVSelect<ExtArgs> | null
    /**
     * Filter which VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV to delete.
     */
    where: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVWhereUniqueInput
  }

  /**
   * VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV deleteMany
   */
  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVS to delete
     */
    where?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVWhereInput
  }

  /**
   * VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV without action
   */
  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV
     */
    select?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVSelect<ExtArgs> | null
  }


  /**
   * Model VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV
   */

  export type AggregateVW_AUTORIZACOES_SAIDAS_AVULSAS_DEV = {
    _count: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVCountAggregateOutputType | null
    _avg: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVAvgAggregateOutputType | null
    _sum: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVSumAggregateOutputType | null
    _min: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVMinAggregateOutputType | null
    _max: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVMaxAggregateOutputType | null
  }

  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVAvgAggregateOutputType = {
    key: number | null
    registro: number | null
    empresa: number | null
    filial: number | null
    id_usuario: number | null
    quantidade: number | null
  }

  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVSumAggregateOutputType = {
    key: number | null
    registro: number | null
    empresa: number | null
    filial: number | null
    id_usuario: number | null
    quantidade: number | null
  }

  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVMinAggregateOutputType = {
    key: number | null
    registro: number | null
    data: string | null
    centro_estoque: string | null
    empresa: number | null
    filial: number | null
    id_usuario: number | null
    usuario: string | null
    quantidade: number | null
    observacao: string | null
  }

  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVMaxAggregateOutputType = {
    key: number | null
    registro: number | null
    data: string | null
    centro_estoque: string | null
    empresa: number | null
    filial: number | null
    id_usuario: number | null
    usuario: string | null
    quantidade: number | null
    observacao: string | null
  }

  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVCountAggregateOutputType = {
    key: number
    registro: number
    data: number
    centro_estoque: number
    empresa: number
    filial: number
    id_usuario: number
    usuario: number
    quantidade: number
    observacao: number
    _all: number
  }


  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVAvgAggregateInputType = {
    key?: true
    registro?: true
    empresa?: true
    filial?: true
    id_usuario?: true
    quantidade?: true
  }

  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVSumAggregateInputType = {
    key?: true
    registro?: true
    empresa?: true
    filial?: true
    id_usuario?: true
    quantidade?: true
  }

  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVMinAggregateInputType = {
    key?: true
    registro?: true
    data?: true
    centro_estoque?: true
    empresa?: true
    filial?: true
    id_usuario?: true
    usuario?: true
    quantidade?: true
    observacao?: true
  }

  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVMaxAggregateInputType = {
    key?: true
    registro?: true
    data?: true
    centro_estoque?: true
    empresa?: true
    filial?: true
    id_usuario?: true
    usuario?: true
    quantidade?: true
    observacao?: true
  }

  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVCountAggregateInputType = {
    key?: true
    registro?: true
    data?: true
    centro_estoque?: true
    empresa?: true
    filial?: true
    id_usuario?: true
    usuario?: true
    quantidade?: true
    observacao?: true
    _all?: true
  }

  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV to aggregate.
     */
    where?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS to fetch.
     */
    orderBy?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVOrderByWithRelationInput | VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS
    **/
    _count?: true | VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVMaxAggregateInputType
  }

  export type GetVW_AUTORIZACOES_SAIDAS_AVULSAS_DEVAggregateType<T extends VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVAggregateArgs> = {
        [P in keyof T & keyof AggregateVW_AUTORIZACOES_SAIDAS_AVULSAS_DEV]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVW_AUTORIZACOES_SAIDAS_AVULSAS_DEV[P]>
      : GetScalarType<T[P], AggregateVW_AUTORIZACOES_SAIDAS_AVULSAS_DEV[P]>
  }




  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVWhereInput
    orderBy?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVOrderByWithAggregationInput | VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVOrderByWithAggregationInput[]
    by: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVScalarFieldEnum[] | VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVScalarFieldEnum
    having?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVCountAggregateInputType | true
    _avg?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVAvgAggregateInputType
    _sum?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVSumAggregateInputType
    _min?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVMinAggregateInputType
    _max?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVMaxAggregateInputType
  }

  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVGroupByOutputType = {
    key: number
    registro: number
    data: string
    centro_estoque: string
    empresa: number
    filial: number
    id_usuario: number
    usuario: string
    quantidade: number
    observacao: string
    _count: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVCountAggregateOutputType | null
    _avg: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVAvgAggregateOutputType | null
    _sum: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVSumAggregateOutputType | null
    _min: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVMinAggregateOutputType | null
    _max: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVMaxAggregateOutputType | null
  }

  type GetVW_AUTORIZACOES_SAIDAS_AVULSAS_DEVGroupByPayload<T extends VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVGroupByOutputType[P]>
            : GetScalarType<T[P], VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVGroupByOutputType[P]>
        }
      >
    >


  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    registro?: boolean
    data?: boolean
    centro_estoque?: boolean
    empresa?: boolean
    filial?: boolean
    id_usuario?: boolean
    usuario?: boolean
    quantidade?: boolean
    observacao?: boolean
  }, ExtArgs["result"]["vW_AUTORIZACOES_SAIDAS_AVULSAS_DEV"]>

  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVSelectScalar = {
    key?: boolean
    registro?: boolean
    data?: boolean
    centro_estoque?: boolean
    empresa?: boolean
    filial?: boolean
    id_usuario?: boolean
    usuario?: boolean
    quantidade?: boolean
    observacao?: boolean
  }



  export type $VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: number
      registro: number
      data: string
      centro_estoque: string
      empresa: number
      filial: number
      id_usuario: number
      usuario: string
      quantidade: number
      observacao: string
    }, ExtArgs["result"]["vW_AUTORIZACOES_SAIDAS_AVULSAS_DEV"]>
    composites: {}
  }


  type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVGetPayload<S extends boolean | null | undefined | VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVDefaultArgs> = $Result.GetResult<Prisma.$VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVPayload, S>

  type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVCountAggregateInputType | true
    }

  export interface VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV'], meta: { name: 'VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV' } }
    /**
     * Find zero or one VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV that matches the filter.
     * @param {VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVFindUniqueArgs} args - Arguments to find a VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV
     * @example
     * // Get one VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV
     * const vW_AUTORIZACOES_SAIDAS_AVULSAS_DEV = await prisma.vW_AUTORIZACOES_SAIDAS_AVULSAS_DEV.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVFindUniqueArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVFindUniqueOrThrowArgs} args - Arguments to find a VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV
     * @example
     * // Get one VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV
     * const vW_AUTORIZACOES_SAIDAS_AVULSAS_DEV = await prisma.vW_AUTORIZACOES_SAIDAS_AVULSAS_DEV.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVFindFirstArgs} args - Arguments to find a VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV
     * @example
     * // Get one VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV
     * const vW_AUTORIZACOES_SAIDAS_AVULSAS_DEV = await prisma.vW_AUTORIZACOES_SAIDAS_AVULSAS_DEV.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVFindFirstArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVFindFirstOrThrowArgs} args - Arguments to find a VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV
     * @example
     * // Get one VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV
     * const vW_AUTORIZACOES_SAIDAS_AVULSAS_DEV = await prisma.vW_AUTORIZACOES_SAIDAS_AVULSAS_DEV.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS
     * const vW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS = await prisma.vW_AUTORIZACOES_SAIDAS_AVULSAS_DEV.findMany()
     * 
     * // Get first 10 VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS
     * const vW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS = await prisma.vW_AUTORIZACOES_SAIDAS_AVULSAS_DEV.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const vW_AUTORIZACOES_SAIDAS_AVULSAS_DEVWithKeyOnly = await prisma.vW_AUTORIZACOES_SAIDAS_AVULSAS_DEV.findMany({ select: { key: true } })
     * 
    **/
    findMany<T extends VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV.
     * @param {VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVCreateArgs} args - Arguments to create a VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV.
     * @example
     * // Create one VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV
     * const VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV = await prisma.vW_AUTORIZACOES_SAIDAS_AVULSAS_DEV.create({
     *   data: {
     *     // ... data to create a VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV
     *   }
     * })
     * 
    **/
    create<T extends VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVCreateArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS.
     * @param {VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVCreateManyArgs} args - Arguments to create many VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS.
     * @example
     * // Create many VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS
     * const vW_AUTORIZACOES_SAIDAS_AVULSAS_DEV = await prisma.vW_AUTORIZACOES_SAIDAS_AVULSAS_DEV.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV.
     * @param {VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVDeleteArgs} args - Arguments to delete one VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV.
     * @example
     * // Delete one VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV
     * const VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV = await prisma.vW_AUTORIZACOES_SAIDAS_AVULSAS_DEV.delete({
     *   where: {
     *     // ... filter to delete one VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV
     *   }
     * })
     * 
    **/
    delete<T extends VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVDeleteArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV.
     * @param {VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVUpdateArgs} args - Arguments to update one VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV.
     * @example
     * // Update one VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV
     * const vW_AUTORIZACOES_SAIDAS_AVULSAS_DEV = await prisma.vW_AUTORIZACOES_SAIDAS_AVULSAS_DEV.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVUpdateArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS.
     * @param {VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVDeleteManyArgs} args - Arguments to filter VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS to delete.
     * @example
     * // Delete a few VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS
     * const { count } = await prisma.vW_AUTORIZACOES_SAIDAS_AVULSAS_DEV.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS
     * const vW_AUTORIZACOES_SAIDAS_AVULSAS_DEV = await prisma.vW_AUTORIZACOES_SAIDAS_AVULSAS_DEV.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV.
     * @param {VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVUpsertArgs} args - Arguments to update or create a VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV.
     * @example
     * // Update or create a VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV
     * const vW_AUTORIZACOES_SAIDAS_AVULSAS_DEV = await prisma.vW_AUTORIZACOES_SAIDAS_AVULSAS_DEV.upsert({
     *   create: {
     *     // ... data to create a VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV we want to update
     *   }
     * })
    **/
    upsert<T extends VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVUpsertArgs<ExtArgs>>
    ): Prisma__VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVClient<$Result.GetResult<Prisma.$VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVCountArgs} args - Arguments to filter VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS to count.
     * @example
     * // Count the number of VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS
     * const count = await prisma.vW_AUTORIZACOES_SAIDAS_AVULSAS_DEV.count({
     *   where: {
     *     // ... the filter for the VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS we want to count
     *   }
     * })
    **/
    count<T extends VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVCountArgs>(
      args?: Subset<T, VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVAggregateArgs>(args: Subset<T, VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVAggregateArgs>): Prisma.PrismaPromise<GetVW_AUTORIZACOES_SAIDAS_AVULSAS_DEVAggregateType<T>>

    /**
     * Group by VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVGroupByArgs} args - Group by arguments.
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
      T extends VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVGroupByArgs['orderBy'] }
        : { orderBy?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVW_AUTORIZACOES_SAIDAS_AVULSAS_DEVGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV model
   */
  readonly fields: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV model
   */ 
  interface VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVFieldRefs {
    readonly key: FieldRef<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV", 'Int'>
    readonly registro: FieldRef<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV", 'Int'>
    readonly data: FieldRef<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV", 'String'>
    readonly centro_estoque: FieldRef<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV", 'String'>
    readonly empresa: FieldRef<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV", 'Int'>
    readonly filial: FieldRef<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV", 'Int'>
    readonly id_usuario: FieldRef<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV", 'Int'>
    readonly usuario: FieldRef<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV", 'String'>
    readonly quantidade: FieldRef<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV", 'Int'>
    readonly observacao: FieldRef<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV findUnique
   */
  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV
     */
    select?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVSelect<ExtArgs> | null
    /**
     * Filter, which VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV to fetch.
     */
    where: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVWhereUniqueInput
  }

  /**
   * VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV findUniqueOrThrow
   */
  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV
     */
    select?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVSelect<ExtArgs> | null
    /**
     * Filter, which VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV to fetch.
     */
    where: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVWhereUniqueInput
  }

  /**
   * VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV findFirst
   */
  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV
     */
    select?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVSelect<ExtArgs> | null
    /**
     * Filter, which VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV to fetch.
     */
    where?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS to fetch.
     */
    orderBy?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVOrderByWithRelationInput | VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS.
     */
    cursor?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS.
     */
    distinct?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVScalarFieldEnum | VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVScalarFieldEnum[]
  }

  /**
   * VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV findFirstOrThrow
   */
  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV
     */
    select?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVSelect<ExtArgs> | null
    /**
     * Filter, which VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV to fetch.
     */
    where?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS to fetch.
     */
    orderBy?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVOrderByWithRelationInput | VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS.
     */
    cursor?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS.
     */
    distinct?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVScalarFieldEnum | VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVScalarFieldEnum[]
  }

  /**
   * VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV findMany
   */
  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV
     */
    select?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVSelect<ExtArgs> | null
    /**
     * Filter, which VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS to fetch.
     */
    where?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS to fetch.
     */
    orderBy?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVOrderByWithRelationInput | VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS.
     */
    cursor?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS.
     */
    skip?: number
    distinct?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVScalarFieldEnum | VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVScalarFieldEnum[]
  }

  /**
   * VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV create
   */
  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV
     */
    select?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVSelect<ExtArgs> | null
    /**
     * The data needed to create a VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV.
     */
    data: XOR<VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVCreateInput, VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVUncheckedCreateInput>
  }

  /**
   * VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV createMany
   */
  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS.
     */
    data: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVCreateManyInput | VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVCreateManyInput[]
  }

  /**
   * VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV update
   */
  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV
     */
    select?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVSelect<ExtArgs> | null
    /**
     * The data needed to update a VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV.
     */
    data: XOR<VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVUpdateInput, VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVUncheckedUpdateInput>
    /**
     * Choose, which VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV to update.
     */
    where: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVWhereUniqueInput
  }

  /**
   * VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV updateMany
   */
  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS.
     */
    data: XOR<VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVUpdateManyMutationInput, VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVUncheckedUpdateManyInput>
    /**
     * Filter which VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS to update
     */
    where?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVWhereInput
  }

  /**
   * VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV upsert
   */
  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV
     */
    select?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVSelect<ExtArgs> | null
    /**
     * The filter to search for the VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV to update in case it exists.
     */
    where: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVWhereUniqueInput
    /**
     * In case the VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV found by the `where` argument doesn't exist, create a new VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV with this data.
     */
    create: XOR<VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVCreateInput, VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVUncheckedCreateInput>
    /**
     * In case the VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVUpdateInput, VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVUncheckedUpdateInput>
  }

  /**
   * VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV delete
   */
  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV
     */
    select?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVSelect<ExtArgs> | null
    /**
     * Filter which VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV to delete.
     */
    where: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVWhereUniqueInput
  }

  /**
   * VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV deleteMany
   */
  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVS to delete
     */
    where?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVWhereInput
  }

  /**
   * VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV without action
   */
  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV
     */
    select?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVSelect<ExtArgs> | null
  }


  /**
   * Model AUTORIZACOES_WEB_BARRAMENTOS_DEV
   */

  export type AggregateAUTORIZACOES_WEB_BARRAMENTOS_DEV = {
    _count: AUTORIZACOES_WEB_BARRAMENTOS_DEVCountAggregateOutputType | null
    _avg: AUTORIZACOES_WEB_BARRAMENTOS_DEVAvgAggregateOutputType | null
    _sum: AUTORIZACOES_WEB_BARRAMENTOS_DEVSumAggregateOutputType | null
    _min: AUTORIZACOES_WEB_BARRAMENTOS_DEVMinAggregateOutputType | null
    _max: AUTORIZACOES_WEB_BARRAMENTOS_DEVMaxAggregateOutputType | null
  }

  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVAvgAggregateOutputType = {
    id: number | null
    registro: number | null
    cod_origem: number | null
    autorizado: number | null
    usuario: number | null
  }

  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVSumAggregateOutputType = {
    id: number | null
    registro: number | null
    cod_origem: number | null
    autorizado: number | null
    usuario: number | null
  }

  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVMinAggregateOutputType = {
    id: number | null
    registro: number | null
    cod_origem: number | null
    origem: string | null
    data_hora: Date | null
    autorizado: number | null
    importado: string | null
    data_hora_importado: Date | null
    mensagem: string | null
    data_hora_mensagem: Date | null
    usuario: number | null
  }

  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVMaxAggregateOutputType = {
    id: number | null
    registro: number | null
    cod_origem: number | null
    origem: string | null
    data_hora: Date | null
    autorizado: number | null
    importado: string | null
    data_hora_importado: Date | null
    mensagem: string | null
    data_hora_mensagem: Date | null
    usuario: number | null
  }

  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVCountAggregateOutputType = {
    id: number
    registro: number
    cod_origem: number
    origem: number
    data_hora: number
    autorizado: number
    importado: number
    data_hora_importado: number
    mensagem: number
    data_hora_mensagem: number
    usuario: number
    _all: number
  }


  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVAvgAggregateInputType = {
    id?: true
    registro?: true
    cod_origem?: true
    autorizado?: true
    usuario?: true
  }

  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVSumAggregateInputType = {
    id?: true
    registro?: true
    cod_origem?: true
    autorizado?: true
    usuario?: true
  }

  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVMinAggregateInputType = {
    id?: true
    registro?: true
    cod_origem?: true
    origem?: true
    data_hora?: true
    autorizado?: true
    importado?: true
    data_hora_importado?: true
    mensagem?: true
    data_hora_mensagem?: true
    usuario?: true
  }

  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVMaxAggregateInputType = {
    id?: true
    registro?: true
    cod_origem?: true
    origem?: true
    data_hora?: true
    autorizado?: true
    importado?: true
    data_hora_importado?: true
    mensagem?: true
    data_hora_mensagem?: true
    usuario?: true
  }

  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVCountAggregateInputType = {
    id?: true
    registro?: true
    cod_origem?: true
    origem?: true
    data_hora?: true
    autorizado?: true
    importado?: true
    data_hora_importado?: true
    mensagem?: true
    data_hora_mensagem?: true
    usuario?: true
    _all?: true
  }

  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AUTORIZACOES_WEB_BARRAMENTOS_DEV to aggregate.
     */
    where?: AUTORIZACOES_WEB_BARRAMENTOS_DEVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AUTORIZACOES_WEB_BARRAMENTOS_DEVS to fetch.
     */
    orderBy?: AUTORIZACOES_WEB_BARRAMENTOS_DEVOrderByWithRelationInput | AUTORIZACOES_WEB_BARRAMENTOS_DEVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AUTORIZACOES_WEB_BARRAMENTOS_DEVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AUTORIZACOES_WEB_BARRAMENTOS_DEVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AUTORIZACOES_WEB_BARRAMENTOS_DEVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AUTORIZACOES_WEB_BARRAMENTOS_DEVS
    **/
    _count?: true | AUTORIZACOES_WEB_BARRAMENTOS_DEVCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AUTORIZACOES_WEB_BARRAMENTOS_DEVAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AUTORIZACOES_WEB_BARRAMENTOS_DEVSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AUTORIZACOES_WEB_BARRAMENTOS_DEVMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AUTORIZACOES_WEB_BARRAMENTOS_DEVMaxAggregateInputType
  }

  export type GetAUTORIZACOES_WEB_BARRAMENTOS_DEVAggregateType<T extends AUTORIZACOES_WEB_BARRAMENTOS_DEVAggregateArgs> = {
        [P in keyof T & keyof AggregateAUTORIZACOES_WEB_BARRAMENTOS_DEV]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAUTORIZACOES_WEB_BARRAMENTOS_DEV[P]>
      : GetScalarType<T[P], AggregateAUTORIZACOES_WEB_BARRAMENTOS_DEV[P]>
  }




  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AUTORIZACOES_WEB_BARRAMENTOS_DEVWhereInput
    orderBy?: AUTORIZACOES_WEB_BARRAMENTOS_DEVOrderByWithAggregationInput | AUTORIZACOES_WEB_BARRAMENTOS_DEVOrderByWithAggregationInput[]
    by: AUTORIZACOES_WEB_BARRAMENTOS_DEVScalarFieldEnum[] | AUTORIZACOES_WEB_BARRAMENTOS_DEVScalarFieldEnum
    having?: AUTORIZACOES_WEB_BARRAMENTOS_DEVScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AUTORIZACOES_WEB_BARRAMENTOS_DEVCountAggregateInputType | true
    _avg?: AUTORIZACOES_WEB_BARRAMENTOS_DEVAvgAggregateInputType
    _sum?: AUTORIZACOES_WEB_BARRAMENTOS_DEVSumAggregateInputType
    _min?: AUTORIZACOES_WEB_BARRAMENTOS_DEVMinAggregateInputType
    _max?: AUTORIZACOES_WEB_BARRAMENTOS_DEVMaxAggregateInputType
  }

  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVGroupByOutputType = {
    id: number
    registro: number
    cod_origem: number
    origem: string
    data_hora: Date | null
    autorizado: number
    importado: string | null
    data_hora_importado: Date | null
    mensagem: string | null
    data_hora_mensagem: Date | null
    usuario: number
    _count: AUTORIZACOES_WEB_BARRAMENTOS_DEVCountAggregateOutputType | null
    _avg: AUTORIZACOES_WEB_BARRAMENTOS_DEVAvgAggregateOutputType | null
    _sum: AUTORIZACOES_WEB_BARRAMENTOS_DEVSumAggregateOutputType | null
    _min: AUTORIZACOES_WEB_BARRAMENTOS_DEVMinAggregateOutputType | null
    _max: AUTORIZACOES_WEB_BARRAMENTOS_DEVMaxAggregateOutputType | null
  }

  type GetAUTORIZACOES_WEB_BARRAMENTOS_DEVGroupByPayload<T extends AUTORIZACOES_WEB_BARRAMENTOS_DEVGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AUTORIZACOES_WEB_BARRAMENTOS_DEVGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AUTORIZACOES_WEB_BARRAMENTOS_DEVGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AUTORIZACOES_WEB_BARRAMENTOS_DEVGroupByOutputType[P]>
            : GetScalarType<T[P], AUTORIZACOES_WEB_BARRAMENTOS_DEVGroupByOutputType[P]>
        }
      >
    >


  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registro?: boolean
    cod_origem?: boolean
    origem?: boolean
    data_hora?: boolean
    autorizado?: boolean
    importado?: boolean
    data_hora_importado?: boolean
    mensagem?: boolean
    data_hora_mensagem?: boolean
    usuario?: boolean
  }, ExtArgs["result"]["aUTORIZACOES_WEB_BARRAMENTOS_DEV"]>

  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVSelectScalar = {
    id?: boolean
    registro?: boolean
    cod_origem?: boolean
    origem?: boolean
    data_hora?: boolean
    autorizado?: boolean
    importado?: boolean
    data_hora_importado?: boolean
    mensagem?: boolean
    data_hora_mensagem?: boolean
    usuario?: boolean
  }



  export type $AUTORIZACOES_WEB_BARRAMENTOS_DEVPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AUTORIZACOES_WEB_BARRAMENTOS_DEV"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      registro: number
      cod_origem: number
      origem: string
      data_hora: Date | null
      autorizado: number
      importado: string | null
      data_hora_importado: Date | null
      mensagem: string | null
      data_hora_mensagem: Date | null
      usuario: number
    }, ExtArgs["result"]["aUTORIZACOES_WEB_BARRAMENTOS_DEV"]>
    composites: {}
  }


  type AUTORIZACOES_WEB_BARRAMENTOS_DEVGetPayload<S extends boolean | null | undefined | AUTORIZACOES_WEB_BARRAMENTOS_DEVDefaultArgs> = $Result.GetResult<Prisma.$AUTORIZACOES_WEB_BARRAMENTOS_DEVPayload, S>

  type AUTORIZACOES_WEB_BARRAMENTOS_DEVCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AUTORIZACOES_WEB_BARRAMENTOS_DEVFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AUTORIZACOES_WEB_BARRAMENTOS_DEVCountAggregateInputType | true
    }

  export interface AUTORIZACOES_WEB_BARRAMENTOS_DEVDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AUTORIZACOES_WEB_BARRAMENTOS_DEV'], meta: { name: 'AUTORIZACOES_WEB_BARRAMENTOS_DEV' } }
    /**
     * Find zero or one AUTORIZACOES_WEB_BARRAMENTOS_DEV that matches the filter.
     * @param {AUTORIZACOES_WEB_BARRAMENTOS_DEVFindUniqueArgs} args - Arguments to find a AUTORIZACOES_WEB_BARRAMENTOS_DEV
     * @example
     * // Get one AUTORIZACOES_WEB_BARRAMENTOS_DEV
     * const aUTORIZACOES_WEB_BARRAMENTOS_DEV = await prisma.aUTORIZACOES_WEB_BARRAMENTOS_DEV.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AUTORIZACOES_WEB_BARRAMENTOS_DEVFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AUTORIZACOES_WEB_BARRAMENTOS_DEVFindUniqueArgs<ExtArgs>>
    ): Prisma__AUTORIZACOES_WEB_BARRAMENTOS_DEVClient<$Result.GetResult<Prisma.$AUTORIZACOES_WEB_BARRAMENTOS_DEVPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AUTORIZACOES_WEB_BARRAMENTOS_DEV that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AUTORIZACOES_WEB_BARRAMENTOS_DEVFindUniqueOrThrowArgs} args - Arguments to find a AUTORIZACOES_WEB_BARRAMENTOS_DEV
     * @example
     * // Get one AUTORIZACOES_WEB_BARRAMENTOS_DEV
     * const aUTORIZACOES_WEB_BARRAMENTOS_DEV = await prisma.aUTORIZACOES_WEB_BARRAMENTOS_DEV.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AUTORIZACOES_WEB_BARRAMENTOS_DEVFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AUTORIZACOES_WEB_BARRAMENTOS_DEVFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AUTORIZACOES_WEB_BARRAMENTOS_DEVClient<$Result.GetResult<Prisma.$AUTORIZACOES_WEB_BARRAMENTOS_DEVPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AUTORIZACOES_WEB_BARRAMENTOS_DEV that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AUTORIZACOES_WEB_BARRAMENTOS_DEVFindFirstArgs} args - Arguments to find a AUTORIZACOES_WEB_BARRAMENTOS_DEV
     * @example
     * // Get one AUTORIZACOES_WEB_BARRAMENTOS_DEV
     * const aUTORIZACOES_WEB_BARRAMENTOS_DEV = await prisma.aUTORIZACOES_WEB_BARRAMENTOS_DEV.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AUTORIZACOES_WEB_BARRAMENTOS_DEVFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AUTORIZACOES_WEB_BARRAMENTOS_DEVFindFirstArgs<ExtArgs>>
    ): Prisma__AUTORIZACOES_WEB_BARRAMENTOS_DEVClient<$Result.GetResult<Prisma.$AUTORIZACOES_WEB_BARRAMENTOS_DEVPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AUTORIZACOES_WEB_BARRAMENTOS_DEV that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AUTORIZACOES_WEB_BARRAMENTOS_DEVFindFirstOrThrowArgs} args - Arguments to find a AUTORIZACOES_WEB_BARRAMENTOS_DEV
     * @example
     * // Get one AUTORIZACOES_WEB_BARRAMENTOS_DEV
     * const aUTORIZACOES_WEB_BARRAMENTOS_DEV = await prisma.aUTORIZACOES_WEB_BARRAMENTOS_DEV.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AUTORIZACOES_WEB_BARRAMENTOS_DEVFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AUTORIZACOES_WEB_BARRAMENTOS_DEVFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AUTORIZACOES_WEB_BARRAMENTOS_DEVClient<$Result.GetResult<Prisma.$AUTORIZACOES_WEB_BARRAMENTOS_DEVPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AUTORIZACOES_WEB_BARRAMENTOS_DEVS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AUTORIZACOES_WEB_BARRAMENTOS_DEVFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AUTORIZACOES_WEB_BARRAMENTOS_DEVS
     * const aUTORIZACOES_WEB_BARRAMENTOS_DEVS = await prisma.aUTORIZACOES_WEB_BARRAMENTOS_DEV.findMany()
     * 
     * // Get first 10 AUTORIZACOES_WEB_BARRAMENTOS_DEVS
     * const aUTORIZACOES_WEB_BARRAMENTOS_DEVS = await prisma.aUTORIZACOES_WEB_BARRAMENTOS_DEV.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aUTORIZACOES_WEB_BARRAMENTOS_DEVWithIdOnly = await prisma.aUTORIZACOES_WEB_BARRAMENTOS_DEV.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AUTORIZACOES_WEB_BARRAMENTOS_DEVFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AUTORIZACOES_WEB_BARRAMENTOS_DEVFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AUTORIZACOES_WEB_BARRAMENTOS_DEVPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AUTORIZACOES_WEB_BARRAMENTOS_DEV.
     * @param {AUTORIZACOES_WEB_BARRAMENTOS_DEVCreateArgs} args - Arguments to create a AUTORIZACOES_WEB_BARRAMENTOS_DEV.
     * @example
     * // Create one AUTORIZACOES_WEB_BARRAMENTOS_DEV
     * const AUTORIZACOES_WEB_BARRAMENTOS_DEV = await prisma.aUTORIZACOES_WEB_BARRAMENTOS_DEV.create({
     *   data: {
     *     // ... data to create a AUTORIZACOES_WEB_BARRAMENTOS_DEV
     *   }
     * })
     * 
    **/
    create<T extends AUTORIZACOES_WEB_BARRAMENTOS_DEVCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AUTORIZACOES_WEB_BARRAMENTOS_DEVCreateArgs<ExtArgs>>
    ): Prisma__AUTORIZACOES_WEB_BARRAMENTOS_DEVClient<$Result.GetResult<Prisma.$AUTORIZACOES_WEB_BARRAMENTOS_DEVPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AUTORIZACOES_WEB_BARRAMENTOS_DEVS.
     * @param {AUTORIZACOES_WEB_BARRAMENTOS_DEVCreateManyArgs} args - Arguments to create many AUTORIZACOES_WEB_BARRAMENTOS_DEVS.
     * @example
     * // Create many AUTORIZACOES_WEB_BARRAMENTOS_DEVS
     * const aUTORIZACOES_WEB_BARRAMENTOS_DEV = await prisma.aUTORIZACOES_WEB_BARRAMENTOS_DEV.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends AUTORIZACOES_WEB_BARRAMENTOS_DEVCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AUTORIZACOES_WEB_BARRAMENTOS_DEVCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AUTORIZACOES_WEB_BARRAMENTOS_DEV.
     * @param {AUTORIZACOES_WEB_BARRAMENTOS_DEVDeleteArgs} args - Arguments to delete one AUTORIZACOES_WEB_BARRAMENTOS_DEV.
     * @example
     * // Delete one AUTORIZACOES_WEB_BARRAMENTOS_DEV
     * const AUTORIZACOES_WEB_BARRAMENTOS_DEV = await prisma.aUTORIZACOES_WEB_BARRAMENTOS_DEV.delete({
     *   where: {
     *     // ... filter to delete one AUTORIZACOES_WEB_BARRAMENTOS_DEV
     *   }
     * })
     * 
    **/
    delete<T extends AUTORIZACOES_WEB_BARRAMENTOS_DEVDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AUTORIZACOES_WEB_BARRAMENTOS_DEVDeleteArgs<ExtArgs>>
    ): Prisma__AUTORIZACOES_WEB_BARRAMENTOS_DEVClient<$Result.GetResult<Prisma.$AUTORIZACOES_WEB_BARRAMENTOS_DEVPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AUTORIZACOES_WEB_BARRAMENTOS_DEV.
     * @param {AUTORIZACOES_WEB_BARRAMENTOS_DEVUpdateArgs} args - Arguments to update one AUTORIZACOES_WEB_BARRAMENTOS_DEV.
     * @example
     * // Update one AUTORIZACOES_WEB_BARRAMENTOS_DEV
     * const aUTORIZACOES_WEB_BARRAMENTOS_DEV = await prisma.aUTORIZACOES_WEB_BARRAMENTOS_DEV.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AUTORIZACOES_WEB_BARRAMENTOS_DEVUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AUTORIZACOES_WEB_BARRAMENTOS_DEVUpdateArgs<ExtArgs>>
    ): Prisma__AUTORIZACOES_WEB_BARRAMENTOS_DEVClient<$Result.GetResult<Prisma.$AUTORIZACOES_WEB_BARRAMENTOS_DEVPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AUTORIZACOES_WEB_BARRAMENTOS_DEVS.
     * @param {AUTORIZACOES_WEB_BARRAMENTOS_DEVDeleteManyArgs} args - Arguments to filter AUTORIZACOES_WEB_BARRAMENTOS_DEVS to delete.
     * @example
     * // Delete a few AUTORIZACOES_WEB_BARRAMENTOS_DEVS
     * const { count } = await prisma.aUTORIZACOES_WEB_BARRAMENTOS_DEV.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AUTORIZACOES_WEB_BARRAMENTOS_DEVDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AUTORIZACOES_WEB_BARRAMENTOS_DEVDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AUTORIZACOES_WEB_BARRAMENTOS_DEVS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AUTORIZACOES_WEB_BARRAMENTOS_DEVUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AUTORIZACOES_WEB_BARRAMENTOS_DEVS
     * const aUTORIZACOES_WEB_BARRAMENTOS_DEV = await prisma.aUTORIZACOES_WEB_BARRAMENTOS_DEV.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AUTORIZACOES_WEB_BARRAMENTOS_DEVUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AUTORIZACOES_WEB_BARRAMENTOS_DEVUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AUTORIZACOES_WEB_BARRAMENTOS_DEV.
     * @param {AUTORIZACOES_WEB_BARRAMENTOS_DEVUpsertArgs} args - Arguments to update or create a AUTORIZACOES_WEB_BARRAMENTOS_DEV.
     * @example
     * // Update or create a AUTORIZACOES_WEB_BARRAMENTOS_DEV
     * const aUTORIZACOES_WEB_BARRAMENTOS_DEV = await prisma.aUTORIZACOES_WEB_BARRAMENTOS_DEV.upsert({
     *   create: {
     *     // ... data to create a AUTORIZACOES_WEB_BARRAMENTOS_DEV
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AUTORIZACOES_WEB_BARRAMENTOS_DEV we want to update
     *   }
     * })
    **/
    upsert<T extends AUTORIZACOES_WEB_BARRAMENTOS_DEVUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AUTORIZACOES_WEB_BARRAMENTOS_DEVUpsertArgs<ExtArgs>>
    ): Prisma__AUTORIZACOES_WEB_BARRAMENTOS_DEVClient<$Result.GetResult<Prisma.$AUTORIZACOES_WEB_BARRAMENTOS_DEVPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AUTORIZACOES_WEB_BARRAMENTOS_DEVS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AUTORIZACOES_WEB_BARRAMENTOS_DEVCountArgs} args - Arguments to filter AUTORIZACOES_WEB_BARRAMENTOS_DEVS to count.
     * @example
     * // Count the number of AUTORIZACOES_WEB_BARRAMENTOS_DEVS
     * const count = await prisma.aUTORIZACOES_WEB_BARRAMENTOS_DEV.count({
     *   where: {
     *     // ... the filter for the AUTORIZACOES_WEB_BARRAMENTOS_DEVS we want to count
     *   }
     * })
    **/
    count<T extends AUTORIZACOES_WEB_BARRAMENTOS_DEVCountArgs>(
      args?: Subset<T, AUTORIZACOES_WEB_BARRAMENTOS_DEVCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AUTORIZACOES_WEB_BARRAMENTOS_DEVCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AUTORIZACOES_WEB_BARRAMENTOS_DEV.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AUTORIZACOES_WEB_BARRAMENTOS_DEVAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AUTORIZACOES_WEB_BARRAMENTOS_DEVAggregateArgs>(args: Subset<T, AUTORIZACOES_WEB_BARRAMENTOS_DEVAggregateArgs>): Prisma.PrismaPromise<GetAUTORIZACOES_WEB_BARRAMENTOS_DEVAggregateType<T>>

    /**
     * Group by AUTORIZACOES_WEB_BARRAMENTOS_DEV.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AUTORIZACOES_WEB_BARRAMENTOS_DEVGroupByArgs} args - Group by arguments.
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
      T extends AUTORIZACOES_WEB_BARRAMENTOS_DEVGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AUTORIZACOES_WEB_BARRAMENTOS_DEVGroupByArgs['orderBy'] }
        : { orderBy?: AUTORIZACOES_WEB_BARRAMENTOS_DEVGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AUTORIZACOES_WEB_BARRAMENTOS_DEVGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAUTORIZACOES_WEB_BARRAMENTOS_DEVGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AUTORIZACOES_WEB_BARRAMENTOS_DEV model
   */
  readonly fields: AUTORIZACOES_WEB_BARRAMENTOS_DEVFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AUTORIZACOES_WEB_BARRAMENTOS_DEV.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AUTORIZACOES_WEB_BARRAMENTOS_DEVClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AUTORIZACOES_WEB_BARRAMENTOS_DEV model
   */ 
  interface AUTORIZACOES_WEB_BARRAMENTOS_DEVFieldRefs {
    readonly id: FieldRef<"AUTORIZACOES_WEB_BARRAMENTOS_DEV", 'Int'>
    readonly registro: FieldRef<"AUTORIZACOES_WEB_BARRAMENTOS_DEV", 'Int'>
    readonly cod_origem: FieldRef<"AUTORIZACOES_WEB_BARRAMENTOS_DEV", 'Int'>
    readonly origem: FieldRef<"AUTORIZACOES_WEB_BARRAMENTOS_DEV", 'String'>
    readonly data_hora: FieldRef<"AUTORIZACOES_WEB_BARRAMENTOS_DEV", 'DateTime'>
    readonly autorizado: FieldRef<"AUTORIZACOES_WEB_BARRAMENTOS_DEV", 'Int'>
    readonly importado: FieldRef<"AUTORIZACOES_WEB_BARRAMENTOS_DEV", 'String'>
    readonly data_hora_importado: FieldRef<"AUTORIZACOES_WEB_BARRAMENTOS_DEV", 'DateTime'>
    readonly mensagem: FieldRef<"AUTORIZACOES_WEB_BARRAMENTOS_DEV", 'String'>
    readonly data_hora_mensagem: FieldRef<"AUTORIZACOES_WEB_BARRAMENTOS_DEV", 'DateTime'>
    readonly usuario: FieldRef<"AUTORIZACOES_WEB_BARRAMENTOS_DEV", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AUTORIZACOES_WEB_BARRAMENTOS_DEV findUnique
   */
  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AUTORIZACOES_WEB_BARRAMENTOS_DEV
     */
    select?: AUTORIZACOES_WEB_BARRAMENTOS_DEVSelect<ExtArgs> | null
    /**
     * Filter, which AUTORIZACOES_WEB_BARRAMENTOS_DEV to fetch.
     */
    where: AUTORIZACOES_WEB_BARRAMENTOS_DEVWhereUniqueInput
  }

  /**
   * AUTORIZACOES_WEB_BARRAMENTOS_DEV findUniqueOrThrow
   */
  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AUTORIZACOES_WEB_BARRAMENTOS_DEV
     */
    select?: AUTORIZACOES_WEB_BARRAMENTOS_DEVSelect<ExtArgs> | null
    /**
     * Filter, which AUTORIZACOES_WEB_BARRAMENTOS_DEV to fetch.
     */
    where: AUTORIZACOES_WEB_BARRAMENTOS_DEVWhereUniqueInput
  }

  /**
   * AUTORIZACOES_WEB_BARRAMENTOS_DEV findFirst
   */
  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AUTORIZACOES_WEB_BARRAMENTOS_DEV
     */
    select?: AUTORIZACOES_WEB_BARRAMENTOS_DEVSelect<ExtArgs> | null
    /**
     * Filter, which AUTORIZACOES_WEB_BARRAMENTOS_DEV to fetch.
     */
    where?: AUTORIZACOES_WEB_BARRAMENTOS_DEVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AUTORIZACOES_WEB_BARRAMENTOS_DEVS to fetch.
     */
    orderBy?: AUTORIZACOES_WEB_BARRAMENTOS_DEVOrderByWithRelationInput | AUTORIZACOES_WEB_BARRAMENTOS_DEVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AUTORIZACOES_WEB_BARRAMENTOS_DEVS.
     */
    cursor?: AUTORIZACOES_WEB_BARRAMENTOS_DEVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AUTORIZACOES_WEB_BARRAMENTOS_DEVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AUTORIZACOES_WEB_BARRAMENTOS_DEVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AUTORIZACOES_WEB_BARRAMENTOS_DEVS.
     */
    distinct?: AUTORIZACOES_WEB_BARRAMENTOS_DEVScalarFieldEnum | AUTORIZACOES_WEB_BARRAMENTOS_DEVScalarFieldEnum[]
  }

  /**
   * AUTORIZACOES_WEB_BARRAMENTOS_DEV findFirstOrThrow
   */
  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AUTORIZACOES_WEB_BARRAMENTOS_DEV
     */
    select?: AUTORIZACOES_WEB_BARRAMENTOS_DEVSelect<ExtArgs> | null
    /**
     * Filter, which AUTORIZACOES_WEB_BARRAMENTOS_DEV to fetch.
     */
    where?: AUTORIZACOES_WEB_BARRAMENTOS_DEVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AUTORIZACOES_WEB_BARRAMENTOS_DEVS to fetch.
     */
    orderBy?: AUTORIZACOES_WEB_BARRAMENTOS_DEVOrderByWithRelationInput | AUTORIZACOES_WEB_BARRAMENTOS_DEVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AUTORIZACOES_WEB_BARRAMENTOS_DEVS.
     */
    cursor?: AUTORIZACOES_WEB_BARRAMENTOS_DEVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AUTORIZACOES_WEB_BARRAMENTOS_DEVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AUTORIZACOES_WEB_BARRAMENTOS_DEVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AUTORIZACOES_WEB_BARRAMENTOS_DEVS.
     */
    distinct?: AUTORIZACOES_WEB_BARRAMENTOS_DEVScalarFieldEnum | AUTORIZACOES_WEB_BARRAMENTOS_DEVScalarFieldEnum[]
  }

  /**
   * AUTORIZACOES_WEB_BARRAMENTOS_DEV findMany
   */
  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AUTORIZACOES_WEB_BARRAMENTOS_DEV
     */
    select?: AUTORIZACOES_WEB_BARRAMENTOS_DEVSelect<ExtArgs> | null
    /**
     * Filter, which AUTORIZACOES_WEB_BARRAMENTOS_DEVS to fetch.
     */
    where?: AUTORIZACOES_WEB_BARRAMENTOS_DEVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AUTORIZACOES_WEB_BARRAMENTOS_DEVS to fetch.
     */
    orderBy?: AUTORIZACOES_WEB_BARRAMENTOS_DEVOrderByWithRelationInput | AUTORIZACOES_WEB_BARRAMENTOS_DEVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AUTORIZACOES_WEB_BARRAMENTOS_DEVS.
     */
    cursor?: AUTORIZACOES_WEB_BARRAMENTOS_DEVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AUTORIZACOES_WEB_BARRAMENTOS_DEVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AUTORIZACOES_WEB_BARRAMENTOS_DEVS.
     */
    skip?: number
    distinct?: AUTORIZACOES_WEB_BARRAMENTOS_DEVScalarFieldEnum | AUTORIZACOES_WEB_BARRAMENTOS_DEVScalarFieldEnum[]
  }

  /**
   * AUTORIZACOES_WEB_BARRAMENTOS_DEV create
   */
  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AUTORIZACOES_WEB_BARRAMENTOS_DEV
     */
    select?: AUTORIZACOES_WEB_BARRAMENTOS_DEVSelect<ExtArgs> | null
    /**
     * The data needed to create a AUTORIZACOES_WEB_BARRAMENTOS_DEV.
     */
    data: XOR<AUTORIZACOES_WEB_BARRAMENTOS_DEVCreateInput, AUTORIZACOES_WEB_BARRAMENTOS_DEVUncheckedCreateInput>
  }

  /**
   * AUTORIZACOES_WEB_BARRAMENTOS_DEV createMany
   */
  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AUTORIZACOES_WEB_BARRAMENTOS_DEVS.
     */
    data: AUTORIZACOES_WEB_BARRAMENTOS_DEVCreateManyInput | AUTORIZACOES_WEB_BARRAMENTOS_DEVCreateManyInput[]
  }

  /**
   * AUTORIZACOES_WEB_BARRAMENTOS_DEV update
   */
  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AUTORIZACOES_WEB_BARRAMENTOS_DEV
     */
    select?: AUTORIZACOES_WEB_BARRAMENTOS_DEVSelect<ExtArgs> | null
    /**
     * The data needed to update a AUTORIZACOES_WEB_BARRAMENTOS_DEV.
     */
    data: XOR<AUTORIZACOES_WEB_BARRAMENTOS_DEVUpdateInput, AUTORIZACOES_WEB_BARRAMENTOS_DEVUncheckedUpdateInput>
    /**
     * Choose, which AUTORIZACOES_WEB_BARRAMENTOS_DEV to update.
     */
    where: AUTORIZACOES_WEB_BARRAMENTOS_DEVWhereUniqueInput
  }

  /**
   * AUTORIZACOES_WEB_BARRAMENTOS_DEV updateMany
   */
  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AUTORIZACOES_WEB_BARRAMENTOS_DEVS.
     */
    data: XOR<AUTORIZACOES_WEB_BARRAMENTOS_DEVUpdateManyMutationInput, AUTORIZACOES_WEB_BARRAMENTOS_DEVUncheckedUpdateManyInput>
    /**
     * Filter which AUTORIZACOES_WEB_BARRAMENTOS_DEVS to update
     */
    where?: AUTORIZACOES_WEB_BARRAMENTOS_DEVWhereInput
  }

  /**
   * AUTORIZACOES_WEB_BARRAMENTOS_DEV upsert
   */
  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AUTORIZACOES_WEB_BARRAMENTOS_DEV
     */
    select?: AUTORIZACOES_WEB_BARRAMENTOS_DEVSelect<ExtArgs> | null
    /**
     * The filter to search for the AUTORIZACOES_WEB_BARRAMENTOS_DEV to update in case it exists.
     */
    where: AUTORIZACOES_WEB_BARRAMENTOS_DEVWhereUniqueInput
    /**
     * In case the AUTORIZACOES_WEB_BARRAMENTOS_DEV found by the `where` argument doesn't exist, create a new AUTORIZACOES_WEB_BARRAMENTOS_DEV with this data.
     */
    create: XOR<AUTORIZACOES_WEB_BARRAMENTOS_DEVCreateInput, AUTORIZACOES_WEB_BARRAMENTOS_DEVUncheckedCreateInput>
    /**
     * In case the AUTORIZACOES_WEB_BARRAMENTOS_DEV was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AUTORIZACOES_WEB_BARRAMENTOS_DEVUpdateInput, AUTORIZACOES_WEB_BARRAMENTOS_DEVUncheckedUpdateInput>
  }

  /**
   * AUTORIZACOES_WEB_BARRAMENTOS_DEV delete
   */
  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AUTORIZACOES_WEB_BARRAMENTOS_DEV
     */
    select?: AUTORIZACOES_WEB_BARRAMENTOS_DEVSelect<ExtArgs> | null
    /**
     * Filter which AUTORIZACOES_WEB_BARRAMENTOS_DEV to delete.
     */
    where: AUTORIZACOES_WEB_BARRAMENTOS_DEVWhereUniqueInput
  }

  /**
   * AUTORIZACOES_WEB_BARRAMENTOS_DEV deleteMany
   */
  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AUTORIZACOES_WEB_BARRAMENTOS_DEVS to delete
     */
    where?: AUTORIZACOES_WEB_BARRAMENTOS_DEVWhereInput
  }

  /**
   * AUTORIZACOES_WEB_BARRAMENTOS_DEV without action
   */
  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AUTORIZACOES_WEB_BARRAMENTOS_DEV
     */
    select?: AUTORIZACOES_WEB_BARRAMENTOS_DEVSelect<ExtArgs> | null
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


  export const VW_AUTORIZACOES_DESPESAS_COFRE_DEVScalarFieldEnum: {
    key: 'key',
    despesa: 'despesa',
    loja: 'loja',
    data: 'data',
    movimento: 'movimento',
    nome_fantasia: 'nome_fantasia',
    valor: 'valor',
    valor_2: 'valor_2',
    observacao: 'observacao',
    ged: 'ged'
  };

  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVScalarFieldEnum = (typeof VW_AUTORIZACOES_DESPESAS_COFRE_DEVScalarFieldEnum)[keyof typeof VW_AUTORIZACOES_DESPESAS_COFRE_DEVScalarFieldEnum]


  export const VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVScalarFieldEnum: {
    key: 'key',
    registro: 'registro',
    documento: 'documento',
    data: 'data',
    cliente: 'cliente',
    empresa: 'empresa',
    nome_fantasia: 'nome_fantasia',
    total_bruto: 'total_bruto',
    desconto_comercial: 'desconto_comercial',
    valor: 'valor',
    valor_2: 'valor_2',
    desconto: 'desconto',
    desconto_perc: 'desconto_perc',
    valor_liquido: 'valor_liquido',
    valor_liquido_2: 'valor_liquido_2',
    desconto_total: 'desconto_total',
    observacao: 'observacao'
  };

  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVScalarFieldEnum = (typeof VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVScalarFieldEnum)[keyof typeof VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVScalarFieldEnum]


  export const VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVScalarFieldEnum: {
    key: 'key',
    registro: 'registro',
    empresa: 'empresa',
    nome_fantasia: 'nome_fantasia',
    data_hora: 'data_hora',
    movimento: 'movimento',
    prevenda: 'prevenda',
    valor: 'valor',
    valor_2: 'valor_2',
    observacao: 'observacao'
  };

  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVScalarFieldEnum = (typeof VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVScalarFieldEnum)[keyof typeof VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVScalarFieldEnum]


  export const VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVScalarFieldEnum: {
    key: 'key',
    registro: 'registro',
    data: 'data',
    centro_estoque: 'centro_estoque',
    empresa: 'empresa',
    filial: 'filial',
    id_usuario: 'id_usuario',
    usuario: 'usuario',
    quantidade: 'quantidade',
    observacao: 'observacao'
  };

  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVScalarFieldEnum = (typeof VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVScalarFieldEnum)[keyof typeof VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVScalarFieldEnum]


  export const AUTORIZACOES_WEB_BARRAMENTOS_DEVScalarFieldEnum: {
    id: 'id',
    registro: 'registro',
    cod_origem: 'cod_origem',
    origem: 'origem',
    data_hora: 'data_hora',
    autorizado: 'autorizado',
    importado: 'importado',
    data_hora_importado: 'data_hora_importado',
    mensagem: 'mensagem',
    data_hora_mensagem: 'data_hora_mensagem',
    usuario: 'usuario'
  };

  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVScalarFieldEnum = (typeof AUTORIZACOES_WEB_BARRAMENTOS_DEVScalarFieldEnum)[keyof typeof AUTORIZACOES_WEB_BARRAMENTOS_DEVScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


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

  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVWhereInput = {
    AND?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVWhereInput | VW_AUTORIZACOES_DESPESAS_COFRE_DEVWhereInput[]
    OR?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVWhereInput[]
    NOT?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVWhereInput | VW_AUTORIZACOES_DESPESAS_COFRE_DEVWhereInput[]
    key?: IntFilter<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV"> | number
    despesa?: IntFilter<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV"> | number
    loja?: IntFilter<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV"> | number
    data?: StringFilter<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV"> | string
    movimento?: StringFilter<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV"> | string
    nome_fantasia?: StringFilter<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV"> | string
    valor?: StringFilter<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV"> | string
    valor_2?: DecimalFilter<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV"> | Decimal | DecimalJsLike | number | string
    observacao?: StringFilter<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV"> | string
    ged?: IntFilter<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV"> | number
  }

  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVOrderByWithRelationInput = {
    key?: SortOrder
    despesa?: SortOrder
    loja?: SortOrder
    data?: SortOrder
    movimento?: SortOrder
    nome_fantasia?: SortOrder
    valor?: SortOrder
    valor_2?: SortOrder
    observacao?: SortOrder
    ged?: SortOrder
  }

  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVWhereUniqueInput = Prisma.AtLeast<{
    key?: number
    AND?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVWhereInput | VW_AUTORIZACOES_DESPESAS_COFRE_DEVWhereInput[]
    OR?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVWhereInput[]
    NOT?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVWhereInput | VW_AUTORIZACOES_DESPESAS_COFRE_DEVWhereInput[]
    despesa?: IntFilter<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV"> | number
    loja?: IntFilter<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV"> | number
    data?: StringFilter<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV"> | string
    movimento?: StringFilter<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV"> | string
    nome_fantasia?: StringFilter<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV"> | string
    valor?: StringFilter<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV"> | string
    valor_2?: DecimalFilter<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV"> | Decimal | DecimalJsLike | number | string
    observacao?: StringFilter<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV"> | string
    ged?: IntFilter<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV"> | number
  }, "key">

  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVOrderByWithAggregationInput = {
    key?: SortOrder
    despesa?: SortOrder
    loja?: SortOrder
    data?: SortOrder
    movimento?: SortOrder
    nome_fantasia?: SortOrder
    valor?: SortOrder
    valor_2?: SortOrder
    observacao?: SortOrder
    ged?: SortOrder
    _count?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVCountOrderByAggregateInput
    _avg?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVAvgOrderByAggregateInput
    _max?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVMaxOrderByAggregateInput
    _min?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVMinOrderByAggregateInput
    _sum?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVSumOrderByAggregateInput
  }

  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVScalarWhereWithAggregatesInput = {
    AND?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVScalarWhereWithAggregatesInput | VW_AUTORIZACOES_DESPESAS_COFRE_DEVScalarWhereWithAggregatesInput[]
    OR?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVScalarWhereWithAggregatesInput[]
    NOT?: VW_AUTORIZACOES_DESPESAS_COFRE_DEVScalarWhereWithAggregatesInput | VW_AUTORIZACOES_DESPESAS_COFRE_DEVScalarWhereWithAggregatesInput[]
    key?: IntWithAggregatesFilter<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV"> | number
    despesa?: IntWithAggregatesFilter<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV"> | number
    loja?: IntWithAggregatesFilter<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV"> | number
    data?: StringWithAggregatesFilter<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV"> | string
    movimento?: StringWithAggregatesFilter<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV"> | string
    nome_fantasia?: StringWithAggregatesFilter<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV"> | string
    valor?: StringWithAggregatesFilter<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV"> | string
    valor_2?: DecimalWithAggregatesFilter<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV"> | Decimal | DecimalJsLike | number | string
    observacao?: StringWithAggregatesFilter<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV"> | string
    ged?: IntWithAggregatesFilter<"VW_AUTORIZACOES_DESPESAS_COFRE_DEV"> | number
  }

  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVWhereInput = {
    AND?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVWhereInput | VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVWhereInput[]
    OR?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVWhereInput[]
    NOT?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVWhereInput | VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVWhereInput[]
    key?: IntFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | number
    registro?: IntFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | number
    documento?: IntFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | number
    data?: StringFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | string
    cliente?: StringFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | string
    empresa?: IntFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | number
    nome_fantasia?: StringFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | string
    total_bruto?: StringFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | string
    desconto_comercial?: StringFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | string
    valor?: StringFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | string
    valor_2?: DecimalFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | Decimal | DecimalJsLike | number | string
    desconto?: StringFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | string
    desconto_perc?: IntFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | number
    valor_liquido?: StringFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | string
    valor_liquido_2?: DecimalFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | Decimal | DecimalJsLike | number | string
    desconto_total?: StringFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | string
    observacao?: StringFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | string
  }

  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVOrderByWithRelationInput = {
    key?: SortOrder
    registro?: SortOrder
    documento?: SortOrder
    data?: SortOrder
    cliente?: SortOrder
    empresa?: SortOrder
    nome_fantasia?: SortOrder
    total_bruto?: SortOrder
    desconto_comercial?: SortOrder
    valor?: SortOrder
    valor_2?: SortOrder
    desconto?: SortOrder
    desconto_perc?: SortOrder
    valor_liquido?: SortOrder
    valor_liquido_2?: SortOrder
    desconto_total?: SortOrder
    observacao?: SortOrder
  }

  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVWhereUniqueInput = Prisma.AtLeast<{
    key?: number
    AND?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVWhereInput | VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVWhereInput[]
    OR?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVWhereInput[]
    NOT?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVWhereInput | VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVWhereInput[]
    registro?: IntFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | number
    documento?: IntFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | number
    data?: StringFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | string
    cliente?: StringFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | string
    empresa?: IntFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | number
    nome_fantasia?: StringFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | string
    total_bruto?: StringFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | string
    desconto_comercial?: StringFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | string
    valor?: StringFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | string
    valor_2?: DecimalFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | Decimal | DecimalJsLike | number | string
    desconto?: StringFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | string
    desconto_perc?: IntFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | number
    valor_liquido?: StringFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | string
    valor_liquido_2?: DecimalFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | Decimal | DecimalJsLike | number | string
    desconto_total?: StringFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | string
    observacao?: StringFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | string
  }, "key">

  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVOrderByWithAggregationInput = {
    key?: SortOrder
    registro?: SortOrder
    documento?: SortOrder
    data?: SortOrder
    cliente?: SortOrder
    empresa?: SortOrder
    nome_fantasia?: SortOrder
    total_bruto?: SortOrder
    desconto_comercial?: SortOrder
    valor?: SortOrder
    valor_2?: SortOrder
    desconto?: SortOrder
    desconto_perc?: SortOrder
    valor_liquido?: SortOrder
    valor_liquido_2?: SortOrder
    desconto_total?: SortOrder
    observacao?: SortOrder
    _count?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVCountOrderByAggregateInput
    _avg?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVAvgOrderByAggregateInput
    _max?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVMaxOrderByAggregateInput
    _min?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVMinOrderByAggregateInput
    _sum?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVSumOrderByAggregateInput
  }

  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVScalarWhereWithAggregatesInput = {
    AND?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVScalarWhereWithAggregatesInput | VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVScalarWhereWithAggregatesInput[]
    OR?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVScalarWhereWithAggregatesInput[]
    NOT?: VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVScalarWhereWithAggregatesInput | VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVScalarWhereWithAggregatesInput[]
    key?: IntWithAggregatesFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | number
    registro?: IntWithAggregatesFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | number
    documento?: IntWithAggregatesFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | number
    data?: StringWithAggregatesFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | string
    cliente?: StringWithAggregatesFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | string
    empresa?: IntWithAggregatesFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | number
    nome_fantasia?: StringWithAggregatesFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | string
    total_bruto?: StringWithAggregatesFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | string
    desconto_comercial?: StringWithAggregatesFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | string
    valor?: StringWithAggregatesFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | string
    valor_2?: DecimalWithAggregatesFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | Decimal | DecimalJsLike | number | string
    desconto?: StringWithAggregatesFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | string
    desconto_perc?: IntWithAggregatesFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | number
    valor_liquido?: StringWithAggregatesFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | string
    valor_liquido_2?: DecimalWithAggregatesFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | Decimal | DecimalJsLike | number | string
    desconto_total?: StringWithAggregatesFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | string
    observacao?: StringWithAggregatesFilter<"VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV"> | string
  }

  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVWhereInput = {
    AND?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVWhereInput | VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVWhereInput[]
    OR?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVWhereInput[]
    NOT?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVWhereInput | VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVWhereInput[]
    key?: IntFilter<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV"> | number
    registro?: IntFilter<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV"> | number
    empresa?: IntFilter<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV"> | number
    nome_fantasia?: StringFilter<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV"> | string
    data_hora?: DateTimeFilter<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV"> | Date | string
    movimento?: StringFilter<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV"> | string
    prevenda?: IntFilter<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV"> | number
    valor?: StringFilter<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV"> | string
    valor_2?: DecimalFilter<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV"> | Decimal | DecimalJsLike | number | string
    observacao?: StringFilter<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV"> | string
  }

  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVOrderByWithRelationInput = {
    key?: SortOrder
    registro?: SortOrder
    empresa?: SortOrder
    nome_fantasia?: SortOrder
    data_hora?: SortOrder
    movimento?: SortOrder
    prevenda?: SortOrder
    valor?: SortOrder
    valor_2?: SortOrder
    observacao?: SortOrder
  }

  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVWhereUniqueInput = Prisma.AtLeast<{
    key?: number
    AND?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVWhereInput | VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVWhereInput[]
    OR?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVWhereInput[]
    NOT?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVWhereInput | VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVWhereInput[]
    registro?: IntFilter<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV"> | number
    empresa?: IntFilter<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV"> | number
    nome_fantasia?: StringFilter<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV"> | string
    data_hora?: DateTimeFilter<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV"> | Date | string
    movimento?: StringFilter<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV"> | string
    prevenda?: IntFilter<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV"> | number
    valor?: StringFilter<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV"> | string
    valor_2?: DecimalFilter<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV"> | Decimal | DecimalJsLike | number | string
    observacao?: StringFilter<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV"> | string
  }, "key">

  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVOrderByWithAggregationInput = {
    key?: SortOrder
    registro?: SortOrder
    empresa?: SortOrder
    nome_fantasia?: SortOrder
    data_hora?: SortOrder
    movimento?: SortOrder
    prevenda?: SortOrder
    valor?: SortOrder
    valor_2?: SortOrder
    observacao?: SortOrder
    _count?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVCountOrderByAggregateInput
    _avg?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVAvgOrderByAggregateInput
    _max?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVMaxOrderByAggregateInput
    _min?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVMinOrderByAggregateInput
    _sum?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVSumOrderByAggregateInput
  }

  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVScalarWhereWithAggregatesInput = {
    AND?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVScalarWhereWithAggregatesInput | VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVScalarWhereWithAggregatesInput[]
    OR?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVScalarWhereWithAggregatesInput[]
    NOT?: VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVScalarWhereWithAggregatesInput | VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVScalarWhereWithAggregatesInput[]
    key?: IntWithAggregatesFilter<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV"> | number
    registro?: IntWithAggregatesFilter<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV"> | number
    empresa?: IntWithAggregatesFilter<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV"> | number
    nome_fantasia?: StringWithAggregatesFilter<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV"> | string
    data_hora?: DateTimeWithAggregatesFilter<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV"> | Date | string
    movimento?: StringWithAggregatesFilter<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV"> | string
    prevenda?: IntWithAggregatesFilter<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV"> | number
    valor?: StringWithAggregatesFilter<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV"> | string
    valor_2?: DecimalWithAggregatesFilter<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV"> | Decimal | DecimalJsLike | number | string
    observacao?: StringWithAggregatesFilter<"VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV"> | string
  }

  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVWhereInput = {
    AND?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVWhereInput | VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVWhereInput[]
    OR?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVWhereInput[]
    NOT?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVWhereInput | VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVWhereInput[]
    key?: IntFilter<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV"> | number
    registro?: IntFilter<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV"> | number
    data?: StringFilter<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV"> | string
    centro_estoque?: StringFilter<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV"> | string
    empresa?: IntFilter<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV"> | number
    filial?: IntFilter<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV"> | number
    id_usuario?: IntFilter<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV"> | number
    usuario?: StringFilter<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV"> | string
    quantidade?: IntFilter<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV"> | number
    observacao?: StringFilter<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV"> | string
  }

  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVOrderByWithRelationInput = {
    key?: SortOrder
    registro?: SortOrder
    data?: SortOrder
    centro_estoque?: SortOrder
    empresa?: SortOrder
    filial?: SortOrder
    id_usuario?: SortOrder
    usuario?: SortOrder
    quantidade?: SortOrder
    observacao?: SortOrder
  }

  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVWhereUniqueInput = Prisma.AtLeast<{
    key?: number
    AND?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVWhereInput | VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVWhereInput[]
    OR?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVWhereInput[]
    NOT?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVWhereInput | VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVWhereInput[]
    registro?: IntFilter<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV"> | number
    data?: StringFilter<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV"> | string
    centro_estoque?: StringFilter<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV"> | string
    empresa?: IntFilter<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV"> | number
    filial?: IntFilter<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV"> | number
    id_usuario?: IntFilter<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV"> | number
    usuario?: StringFilter<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV"> | string
    quantidade?: IntFilter<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV"> | number
    observacao?: StringFilter<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV"> | string
  }, "key">

  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVOrderByWithAggregationInput = {
    key?: SortOrder
    registro?: SortOrder
    data?: SortOrder
    centro_estoque?: SortOrder
    empresa?: SortOrder
    filial?: SortOrder
    id_usuario?: SortOrder
    usuario?: SortOrder
    quantidade?: SortOrder
    observacao?: SortOrder
    _count?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVCountOrderByAggregateInput
    _avg?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVAvgOrderByAggregateInput
    _max?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVMaxOrderByAggregateInput
    _min?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVMinOrderByAggregateInput
    _sum?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVSumOrderByAggregateInput
  }

  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVScalarWhereWithAggregatesInput = {
    AND?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVScalarWhereWithAggregatesInput | VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVScalarWhereWithAggregatesInput[]
    OR?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVScalarWhereWithAggregatesInput[]
    NOT?: VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVScalarWhereWithAggregatesInput | VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVScalarWhereWithAggregatesInput[]
    key?: IntWithAggregatesFilter<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV"> | number
    registro?: IntWithAggregatesFilter<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV"> | number
    data?: StringWithAggregatesFilter<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV"> | string
    centro_estoque?: StringWithAggregatesFilter<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV"> | string
    empresa?: IntWithAggregatesFilter<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV"> | number
    filial?: IntWithAggregatesFilter<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV"> | number
    id_usuario?: IntWithAggregatesFilter<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV"> | number
    usuario?: StringWithAggregatesFilter<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV"> | string
    quantidade?: IntWithAggregatesFilter<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV"> | number
    observacao?: StringWithAggregatesFilter<"VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV"> | string
  }

  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVWhereInput = {
    AND?: AUTORIZACOES_WEB_BARRAMENTOS_DEVWhereInput | AUTORIZACOES_WEB_BARRAMENTOS_DEVWhereInput[]
    OR?: AUTORIZACOES_WEB_BARRAMENTOS_DEVWhereInput[]
    NOT?: AUTORIZACOES_WEB_BARRAMENTOS_DEVWhereInput | AUTORIZACOES_WEB_BARRAMENTOS_DEVWhereInput[]
    id?: IntFilter<"AUTORIZACOES_WEB_BARRAMENTOS_DEV"> | number
    registro?: IntFilter<"AUTORIZACOES_WEB_BARRAMENTOS_DEV"> | number
    cod_origem?: IntFilter<"AUTORIZACOES_WEB_BARRAMENTOS_DEV"> | number
    origem?: StringFilter<"AUTORIZACOES_WEB_BARRAMENTOS_DEV"> | string
    data_hora?: DateTimeNullableFilter<"AUTORIZACOES_WEB_BARRAMENTOS_DEV"> | Date | string | null
    autorizado?: IntFilter<"AUTORIZACOES_WEB_BARRAMENTOS_DEV"> | number
    importado?: StringNullableFilter<"AUTORIZACOES_WEB_BARRAMENTOS_DEV"> | string | null
    data_hora_importado?: DateTimeNullableFilter<"AUTORIZACOES_WEB_BARRAMENTOS_DEV"> | Date | string | null
    mensagem?: StringNullableFilter<"AUTORIZACOES_WEB_BARRAMENTOS_DEV"> | string | null
    data_hora_mensagem?: DateTimeNullableFilter<"AUTORIZACOES_WEB_BARRAMENTOS_DEV"> | Date | string | null
    usuario?: IntFilter<"AUTORIZACOES_WEB_BARRAMENTOS_DEV"> | number
  }

  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVOrderByWithRelationInput = {
    id?: SortOrder
    registro?: SortOrder
    cod_origem?: SortOrder
    origem?: SortOrder
    data_hora?: SortOrderInput | SortOrder
    autorizado?: SortOrder
    importado?: SortOrderInput | SortOrder
    data_hora_importado?: SortOrderInput | SortOrder
    mensagem?: SortOrderInput | SortOrder
    data_hora_mensagem?: SortOrderInput | SortOrder
    usuario?: SortOrder
  }

  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AUTORIZACOES_WEB_BARRAMENTOS_DEVWhereInput | AUTORIZACOES_WEB_BARRAMENTOS_DEVWhereInput[]
    OR?: AUTORIZACOES_WEB_BARRAMENTOS_DEVWhereInput[]
    NOT?: AUTORIZACOES_WEB_BARRAMENTOS_DEVWhereInput | AUTORIZACOES_WEB_BARRAMENTOS_DEVWhereInput[]
    registro?: IntFilter<"AUTORIZACOES_WEB_BARRAMENTOS_DEV"> | number
    cod_origem?: IntFilter<"AUTORIZACOES_WEB_BARRAMENTOS_DEV"> | number
    origem?: StringFilter<"AUTORIZACOES_WEB_BARRAMENTOS_DEV"> | string
    data_hora?: DateTimeNullableFilter<"AUTORIZACOES_WEB_BARRAMENTOS_DEV"> | Date | string | null
    autorizado?: IntFilter<"AUTORIZACOES_WEB_BARRAMENTOS_DEV"> | number
    importado?: StringNullableFilter<"AUTORIZACOES_WEB_BARRAMENTOS_DEV"> | string | null
    data_hora_importado?: DateTimeNullableFilter<"AUTORIZACOES_WEB_BARRAMENTOS_DEV"> | Date | string | null
    mensagem?: StringNullableFilter<"AUTORIZACOES_WEB_BARRAMENTOS_DEV"> | string | null
    data_hora_mensagem?: DateTimeNullableFilter<"AUTORIZACOES_WEB_BARRAMENTOS_DEV"> | Date | string | null
    usuario?: IntFilter<"AUTORIZACOES_WEB_BARRAMENTOS_DEV"> | number
  }, "id">

  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVOrderByWithAggregationInput = {
    id?: SortOrder
    registro?: SortOrder
    cod_origem?: SortOrder
    origem?: SortOrder
    data_hora?: SortOrderInput | SortOrder
    autorizado?: SortOrder
    importado?: SortOrderInput | SortOrder
    data_hora_importado?: SortOrderInput | SortOrder
    mensagem?: SortOrderInput | SortOrder
    data_hora_mensagem?: SortOrderInput | SortOrder
    usuario?: SortOrder
    _count?: AUTORIZACOES_WEB_BARRAMENTOS_DEVCountOrderByAggregateInput
    _avg?: AUTORIZACOES_WEB_BARRAMENTOS_DEVAvgOrderByAggregateInput
    _max?: AUTORIZACOES_WEB_BARRAMENTOS_DEVMaxOrderByAggregateInput
    _min?: AUTORIZACOES_WEB_BARRAMENTOS_DEVMinOrderByAggregateInput
    _sum?: AUTORIZACOES_WEB_BARRAMENTOS_DEVSumOrderByAggregateInput
  }

  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVScalarWhereWithAggregatesInput = {
    AND?: AUTORIZACOES_WEB_BARRAMENTOS_DEVScalarWhereWithAggregatesInput | AUTORIZACOES_WEB_BARRAMENTOS_DEVScalarWhereWithAggregatesInput[]
    OR?: AUTORIZACOES_WEB_BARRAMENTOS_DEVScalarWhereWithAggregatesInput[]
    NOT?: AUTORIZACOES_WEB_BARRAMENTOS_DEVScalarWhereWithAggregatesInput | AUTORIZACOES_WEB_BARRAMENTOS_DEVScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AUTORIZACOES_WEB_BARRAMENTOS_DEV"> | number
    registro?: IntWithAggregatesFilter<"AUTORIZACOES_WEB_BARRAMENTOS_DEV"> | number
    cod_origem?: IntWithAggregatesFilter<"AUTORIZACOES_WEB_BARRAMENTOS_DEV"> | number
    origem?: StringWithAggregatesFilter<"AUTORIZACOES_WEB_BARRAMENTOS_DEV"> | string
    data_hora?: DateTimeNullableWithAggregatesFilter<"AUTORIZACOES_WEB_BARRAMENTOS_DEV"> | Date | string | null
    autorizado?: IntWithAggregatesFilter<"AUTORIZACOES_WEB_BARRAMENTOS_DEV"> | number
    importado?: StringNullableWithAggregatesFilter<"AUTORIZACOES_WEB_BARRAMENTOS_DEV"> | string | null
    data_hora_importado?: DateTimeNullableWithAggregatesFilter<"AUTORIZACOES_WEB_BARRAMENTOS_DEV"> | Date | string | null
    mensagem?: StringNullableWithAggregatesFilter<"AUTORIZACOES_WEB_BARRAMENTOS_DEV"> | string | null
    data_hora_mensagem?: DateTimeNullableWithAggregatesFilter<"AUTORIZACOES_WEB_BARRAMENTOS_DEV"> | Date | string | null
    usuario?: IntWithAggregatesFilter<"AUTORIZACOES_WEB_BARRAMENTOS_DEV"> | number
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

  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVCreateInput = {
    key: number
    despesa: number
    loja: number
    data: string
    movimento: string
    nome_fantasia: string
    valor: string
    valor_2: Decimal | DecimalJsLike | number | string
    observacao: string
    ged: number
  }

  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVUncheckedCreateInput = {
    key: number
    despesa: number
    loja: number
    data: string
    movimento: string
    nome_fantasia: string
    valor: string
    valor_2: Decimal | DecimalJsLike | number | string
    observacao: string
    ged: number
  }

  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVUpdateInput = {
    key?: IntFieldUpdateOperationsInput | number
    despesa?: IntFieldUpdateOperationsInput | number
    loja?: IntFieldUpdateOperationsInput | number
    data?: StringFieldUpdateOperationsInput | string
    movimento?: StringFieldUpdateOperationsInput | string
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    valor_2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacao?: StringFieldUpdateOperationsInput | string
    ged?: IntFieldUpdateOperationsInput | number
  }

  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVUncheckedUpdateInput = {
    key?: IntFieldUpdateOperationsInput | number
    despesa?: IntFieldUpdateOperationsInput | number
    loja?: IntFieldUpdateOperationsInput | number
    data?: StringFieldUpdateOperationsInput | string
    movimento?: StringFieldUpdateOperationsInput | string
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    valor_2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacao?: StringFieldUpdateOperationsInput | string
    ged?: IntFieldUpdateOperationsInput | number
  }

  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVCreateManyInput = {
    key: number
    despesa: number
    loja: number
    data: string
    movimento: string
    nome_fantasia: string
    valor: string
    valor_2: Decimal | DecimalJsLike | number | string
    observacao: string
    ged: number
  }

  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVUpdateManyMutationInput = {
    key?: IntFieldUpdateOperationsInput | number
    despesa?: IntFieldUpdateOperationsInput | number
    loja?: IntFieldUpdateOperationsInput | number
    data?: StringFieldUpdateOperationsInput | string
    movimento?: StringFieldUpdateOperationsInput | string
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    valor_2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacao?: StringFieldUpdateOperationsInput | string
    ged?: IntFieldUpdateOperationsInput | number
  }

  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVUncheckedUpdateManyInput = {
    key?: IntFieldUpdateOperationsInput | number
    despesa?: IntFieldUpdateOperationsInput | number
    loja?: IntFieldUpdateOperationsInput | number
    data?: StringFieldUpdateOperationsInput | string
    movimento?: StringFieldUpdateOperationsInput | string
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    valor_2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacao?: StringFieldUpdateOperationsInput | string
    ged?: IntFieldUpdateOperationsInput | number
  }

  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVCreateInput = {
    key: number
    registro: number
    documento: number
    data: string
    cliente: string
    empresa: number
    nome_fantasia: string
    total_bruto: string
    desconto_comercial: string
    valor: string
    valor_2: Decimal | DecimalJsLike | number | string
    desconto: string
    desconto_perc: number
    valor_liquido: string
    valor_liquido_2: Decimal | DecimalJsLike | number | string
    desconto_total: string
    observacao: string
  }

  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVUncheckedCreateInput = {
    key: number
    registro: number
    documento: number
    data: string
    cliente: string
    empresa: number
    nome_fantasia: string
    total_bruto: string
    desconto_comercial: string
    valor: string
    valor_2: Decimal | DecimalJsLike | number | string
    desconto: string
    desconto_perc: number
    valor_liquido: string
    valor_liquido_2: Decimal | DecimalJsLike | number | string
    desconto_total: string
    observacao: string
  }

  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVUpdateInput = {
    key?: IntFieldUpdateOperationsInput | number
    registro?: IntFieldUpdateOperationsInput | number
    documento?: IntFieldUpdateOperationsInput | number
    data?: StringFieldUpdateOperationsInput | string
    cliente?: StringFieldUpdateOperationsInput | string
    empresa?: IntFieldUpdateOperationsInput | number
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    total_bruto?: StringFieldUpdateOperationsInput | string
    desconto_comercial?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    valor_2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    desconto?: StringFieldUpdateOperationsInput | string
    desconto_perc?: IntFieldUpdateOperationsInput | number
    valor_liquido?: StringFieldUpdateOperationsInput | string
    valor_liquido_2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    desconto_total?: StringFieldUpdateOperationsInput | string
    observacao?: StringFieldUpdateOperationsInput | string
  }

  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVUncheckedUpdateInput = {
    key?: IntFieldUpdateOperationsInput | number
    registro?: IntFieldUpdateOperationsInput | number
    documento?: IntFieldUpdateOperationsInput | number
    data?: StringFieldUpdateOperationsInput | string
    cliente?: StringFieldUpdateOperationsInput | string
    empresa?: IntFieldUpdateOperationsInput | number
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    total_bruto?: StringFieldUpdateOperationsInput | string
    desconto_comercial?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    valor_2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    desconto?: StringFieldUpdateOperationsInput | string
    desconto_perc?: IntFieldUpdateOperationsInput | number
    valor_liquido?: StringFieldUpdateOperationsInput | string
    valor_liquido_2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    desconto_total?: StringFieldUpdateOperationsInput | string
    observacao?: StringFieldUpdateOperationsInput | string
  }

  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVCreateManyInput = {
    key: number
    registro: number
    documento: number
    data: string
    cliente: string
    empresa: number
    nome_fantasia: string
    total_bruto: string
    desconto_comercial: string
    valor: string
    valor_2: Decimal | DecimalJsLike | number | string
    desconto: string
    desconto_perc: number
    valor_liquido: string
    valor_liquido_2: Decimal | DecimalJsLike | number | string
    desconto_total: string
    observacao: string
  }

  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVUpdateManyMutationInput = {
    key?: IntFieldUpdateOperationsInput | number
    registro?: IntFieldUpdateOperationsInput | number
    documento?: IntFieldUpdateOperationsInput | number
    data?: StringFieldUpdateOperationsInput | string
    cliente?: StringFieldUpdateOperationsInput | string
    empresa?: IntFieldUpdateOperationsInput | number
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    total_bruto?: StringFieldUpdateOperationsInput | string
    desconto_comercial?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    valor_2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    desconto?: StringFieldUpdateOperationsInput | string
    desconto_perc?: IntFieldUpdateOperationsInput | number
    valor_liquido?: StringFieldUpdateOperationsInput | string
    valor_liquido_2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    desconto_total?: StringFieldUpdateOperationsInput | string
    observacao?: StringFieldUpdateOperationsInput | string
  }

  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVUncheckedUpdateManyInput = {
    key?: IntFieldUpdateOperationsInput | number
    registro?: IntFieldUpdateOperationsInput | number
    documento?: IntFieldUpdateOperationsInput | number
    data?: StringFieldUpdateOperationsInput | string
    cliente?: StringFieldUpdateOperationsInput | string
    empresa?: IntFieldUpdateOperationsInput | number
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    total_bruto?: StringFieldUpdateOperationsInput | string
    desconto_comercial?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    valor_2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    desconto?: StringFieldUpdateOperationsInput | string
    desconto_perc?: IntFieldUpdateOperationsInput | number
    valor_liquido?: StringFieldUpdateOperationsInput | string
    valor_liquido_2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    desconto_total?: StringFieldUpdateOperationsInput | string
    observacao?: StringFieldUpdateOperationsInput | string
  }

  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVCreateInput = {
    key: number
    registro: number
    empresa: number
    nome_fantasia: string
    data_hora: Date | string
    movimento: string
    prevenda: number
    valor: string
    valor_2: Decimal | DecimalJsLike | number | string
    observacao: string
  }

  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVUncheckedCreateInput = {
    key: number
    registro: number
    empresa: number
    nome_fantasia: string
    data_hora: Date | string
    movimento: string
    prevenda: number
    valor: string
    valor_2: Decimal | DecimalJsLike | number | string
    observacao: string
  }

  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVUpdateInput = {
    key?: IntFieldUpdateOperationsInput | number
    registro?: IntFieldUpdateOperationsInput | number
    empresa?: IntFieldUpdateOperationsInput | number
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    movimento?: StringFieldUpdateOperationsInput | string
    prevenda?: IntFieldUpdateOperationsInput | number
    valor?: StringFieldUpdateOperationsInput | string
    valor_2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacao?: StringFieldUpdateOperationsInput | string
  }

  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVUncheckedUpdateInput = {
    key?: IntFieldUpdateOperationsInput | number
    registro?: IntFieldUpdateOperationsInput | number
    empresa?: IntFieldUpdateOperationsInput | number
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    movimento?: StringFieldUpdateOperationsInput | string
    prevenda?: IntFieldUpdateOperationsInput | number
    valor?: StringFieldUpdateOperationsInput | string
    valor_2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacao?: StringFieldUpdateOperationsInput | string
  }

  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVCreateManyInput = {
    key: number
    registro: number
    empresa: number
    nome_fantasia: string
    data_hora: Date | string
    movimento: string
    prevenda: number
    valor: string
    valor_2: Decimal | DecimalJsLike | number | string
    observacao: string
  }

  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVUpdateManyMutationInput = {
    key?: IntFieldUpdateOperationsInput | number
    registro?: IntFieldUpdateOperationsInput | number
    empresa?: IntFieldUpdateOperationsInput | number
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    movimento?: StringFieldUpdateOperationsInput | string
    prevenda?: IntFieldUpdateOperationsInput | number
    valor?: StringFieldUpdateOperationsInput | string
    valor_2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacao?: StringFieldUpdateOperationsInput | string
  }

  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVUncheckedUpdateManyInput = {
    key?: IntFieldUpdateOperationsInput | number
    registro?: IntFieldUpdateOperationsInput | number
    empresa?: IntFieldUpdateOperationsInput | number
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    movimento?: StringFieldUpdateOperationsInput | string
    prevenda?: IntFieldUpdateOperationsInput | number
    valor?: StringFieldUpdateOperationsInput | string
    valor_2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacao?: StringFieldUpdateOperationsInput | string
  }

  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVCreateInput = {
    key: number
    registro: number
    data: string
    centro_estoque: string
    empresa: number
    filial: number
    id_usuario: number
    usuario: string
    quantidade: number
    observacao: string
  }

  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVUncheckedCreateInput = {
    key: number
    registro: number
    data: string
    centro_estoque: string
    empresa: number
    filial: number
    id_usuario: number
    usuario: string
    quantidade: number
    observacao: string
  }

  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVUpdateInput = {
    key?: IntFieldUpdateOperationsInput | number
    registro?: IntFieldUpdateOperationsInput | number
    data?: StringFieldUpdateOperationsInput | string
    centro_estoque?: StringFieldUpdateOperationsInput | string
    empresa?: IntFieldUpdateOperationsInput | number
    filial?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    observacao?: StringFieldUpdateOperationsInput | string
  }

  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVUncheckedUpdateInput = {
    key?: IntFieldUpdateOperationsInput | number
    registro?: IntFieldUpdateOperationsInput | number
    data?: StringFieldUpdateOperationsInput | string
    centro_estoque?: StringFieldUpdateOperationsInput | string
    empresa?: IntFieldUpdateOperationsInput | number
    filial?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    observacao?: StringFieldUpdateOperationsInput | string
  }

  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVCreateManyInput = {
    key: number
    registro: number
    data: string
    centro_estoque: string
    empresa: number
    filial: number
    id_usuario: number
    usuario: string
    quantidade: number
    observacao: string
  }

  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVUpdateManyMutationInput = {
    key?: IntFieldUpdateOperationsInput | number
    registro?: IntFieldUpdateOperationsInput | number
    data?: StringFieldUpdateOperationsInput | string
    centro_estoque?: StringFieldUpdateOperationsInput | string
    empresa?: IntFieldUpdateOperationsInput | number
    filial?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    observacao?: StringFieldUpdateOperationsInput | string
  }

  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVUncheckedUpdateManyInput = {
    key?: IntFieldUpdateOperationsInput | number
    registro?: IntFieldUpdateOperationsInput | number
    data?: StringFieldUpdateOperationsInput | string
    centro_estoque?: StringFieldUpdateOperationsInput | string
    empresa?: IntFieldUpdateOperationsInput | number
    filial?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    observacao?: StringFieldUpdateOperationsInput | string
  }

  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVCreateInput = {
    registro: number
    cod_origem: number
    origem: string
    data_hora?: Date | string | null
    autorizado: number
    importado?: string | null
    data_hora_importado?: Date | string | null
    mensagem?: string | null
    data_hora_mensagem?: Date | string | null
    usuario: number
  }

  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVUncheckedCreateInput = {
    id?: number
    registro: number
    cod_origem: number
    origem: string
    data_hora?: Date | string | null
    autorizado: number
    importado?: string | null
    data_hora_importado?: Date | string | null
    mensagem?: string | null
    data_hora_mensagem?: Date | string | null
    usuario: number
  }

  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVUpdateInput = {
    registro?: IntFieldUpdateOperationsInput | number
    cod_origem?: IntFieldUpdateOperationsInput | number
    origem?: StringFieldUpdateOperationsInput | string
    data_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autorizado?: IntFieldUpdateOperationsInput | number
    importado?: NullableStringFieldUpdateOperationsInput | string | null
    data_hora_importado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    data_hora_mensagem?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: IntFieldUpdateOperationsInput | number
  }

  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    registro?: IntFieldUpdateOperationsInput | number
    cod_origem?: IntFieldUpdateOperationsInput | number
    origem?: StringFieldUpdateOperationsInput | string
    data_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autorizado?: IntFieldUpdateOperationsInput | number
    importado?: NullableStringFieldUpdateOperationsInput | string | null
    data_hora_importado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    data_hora_mensagem?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: IntFieldUpdateOperationsInput | number
  }

  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVCreateManyInput = {
    registro: number
    cod_origem: number
    origem: string
    data_hora?: Date | string | null
    autorizado: number
    importado?: string | null
    data_hora_importado?: Date | string | null
    mensagem?: string | null
    data_hora_mensagem?: Date | string | null
    usuario: number
  }

  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVUpdateManyMutationInput = {
    registro?: IntFieldUpdateOperationsInput | number
    cod_origem?: IntFieldUpdateOperationsInput | number
    origem?: StringFieldUpdateOperationsInput | string
    data_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autorizado?: IntFieldUpdateOperationsInput | number
    importado?: NullableStringFieldUpdateOperationsInput | string | null
    data_hora_importado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    data_hora_mensagem?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: IntFieldUpdateOperationsInput | number
  }

  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    registro?: IntFieldUpdateOperationsInput | number
    cod_origem?: IntFieldUpdateOperationsInput | number
    origem?: StringFieldUpdateOperationsInput | string
    data_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autorizado?: IntFieldUpdateOperationsInput | number
    importado?: NullableStringFieldUpdateOperationsInput | string | null
    data_hora_importado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    data_hora_mensagem?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: IntFieldUpdateOperationsInput | number
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

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVCountOrderByAggregateInput = {
    key?: SortOrder
    despesa?: SortOrder
    loja?: SortOrder
    data?: SortOrder
    movimento?: SortOrder
    nome_fantasia?: SortOrder
    valor?: SortOrder
    valor_2?: SortOrder
    observacao?: SortOrder
    ged?: SortOrder
  }

  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVAvgOrderByAggregateInput = {
    key?: SortOrder
    despesa?: SortOrder
    loja?: SortOrder
    valor_2?: SortOrder
    ged?: SortOrder
  }

  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVMaxOrderByAggregateInput = {
    key?: SortOrder
    despesa?: SortOrder
    loja?: SortOrder
    data?: SortOrder
    movimento?: SortOrder
    nome_fantasia?: SortOrder
    valor?: SortOrder
    valor_2?: SortOrder
    observacao?: SortOrder
    ged?: SortOrder
  }

  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVMinOrderByAggregateInput = {
    key?: SortOrder
    despesa?: SortOrder
    loja?: SortOrder
    data?: SortOrder
    movimento?: SortOrder
    nome_fantasia?: SortOrder
    valor?: SortOrder
    valor_2?: SortOrder
    observacao?: SortOrder
    ged?: SortOrder
  }

  export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVSumOrderByAggregateInput = {
    key?: SortOrder
    despesa?: SortOrder
    loja?: SortOrder
    valor_2?: SortOrder
    ged?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVCountOrderByAggregateInput = {
    key?: SortOrder
    registro?: SortOrder
    documento?: SortOrder
    data?: SortOrder
    cliente?: SortOrder
    empresa?: SortOrder
    nome_fantasia?: SortOrder
    total_bruto?: SortOrder
    desconto_comercial?: SortOrder
    valor?: SortOrder
    valor_2?: SortOrder
    desconto?: SortOrder
    desconto_perc?: SortOrder
    valor_liquido?: SortOrder
    valor_liquido_2?: SortOrder
    desconto_total?: SortOrder
    observacao?: SortOrder
  }

  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVAvgOrderByAggregateInput = {
    key?: SortOrder
    registro?: SortOrder
    documento?: SortOrder
    empresa?: SortOrder
    valor_2?: SortOrder
    desconto_perc?: SortOrder
    valor_liquido_2?: SortOrder
  }

  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVMaxOrderByAggregateInput = {
    key?: SortOrder
    registro?: SortOrder
    documento?: SortOrder
    data?: SortOrder
    cliente?: SortOrder
    empresa?: SortOrder
    nome_fantasia?: SortOrder
    total_bruto?: SortOrder
    desconto_comercial?: SortOrder
    valor?: SortOrder
    valor_2?: SortOrder
    desconto?: SortOrder
    desconto_perc?: SortOrder
    valor_liquido?: SortOrder
    valor_liquido_2?: SortOrder
    desconto_total?: SortOrder
    observacao?: SortOrder
  }

  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVMinOrderByAggregateInput = {
    key?: SortOrder
    registro?: SortOrder
    documento?: SortOrder
    data?: SortOrder
    cliente?: SortOrder
    empresa?: SortOrder
    nome_fantasia?: SortOrder
    total_bruto?: SortOrder
    desconto_comercial?: SortOrder
    valor?: SortOrder
    valor_2?: SortOrder
    desconto?: SortOrder
    desconto_perc?: SortOrder
    valor_liquido?: SortOrder
    valor_liquido_2?: SortOrder
    desconto_total?: SortOrder
    observacao?: SortOrder
  }

  export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVSumOrderByAggregateInput = {
    key?: SortOrder
    registro?: SortOrder
    documento?: SortOrder
    empresa?: SortOrder
    valor_2?: SortOrder
    desconto_perc?: SortOrder
    valor_liquido_2?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVCountOrderByAggregateInput = {
    key?: SortOrder
    registro?: SortOrder
    empresa?: SortOrder
    nome_fantasia?: SortOrder
    data_hora?: SortOrder
    movimento?: SortOrder
    prevenda?: SortOrder
    valor?: SortOrder
    valor_2?: SortOrder
    observacao?: SortOrder
  }

  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVAvgOrderByAggregateInput = {
    key?: SortOrder
    registro?: SortOrder
    empresa?: SortOrder
    prevenda?: SortOrder
    valor_2?: SortOrder
  }

  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVMaxOrderByAggregateInput = {
    key?: SortOrder
    registro?: SortOrder
    empresa?: SortOrder
    nome_fantasia?: SortOrder
    data_hora?: SortOrder
    movimento?: SortOrder
    prevenda?: SortOrder
    valor?: SortOrder
    valor_2?: SortOrder
    observacao?: SortOrder
  }

  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVMinOrderByAggregateInput = {
    key?: SortOrder
    registro?: SortOrder
    empresa?: SortOrder
    nome_fantasia?: SortOrder
    data_hora?: SortOrder
    movimento?: SortOrder
    prevenda?: SortOrder
    valor?: SortOrder
    valor_2?: SortOrder
    observacao?: SortOrder
  }

  export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVSumOrderByAggregateInput = {
    key?: SortOrder
    registro?: SortOrder
    empresa?: SortOrder
    prevenda?: SortOrder
    valor_2?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVCountOrderByAggregateInput = {
    key?: SortOrder
    registro?: SortOrder
    data?: SortOrder
    centro_estoque?: SortOrder
    empresa?: SortOrder
    filial?: SortOrder
    id_usuario?: SortOrder
    usuario?: SortOrder
    quantidade?: SortOrder
    observacao?: SortOrder
  }

  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVAvgOrderByAggregateInput = {
    key?: SortOrder
    registro?: SortOrder
    empresa?: SortOrder
    filial?: SortOrder
    id_usuario?: SortOrder
    quantidade?: SortOrder
  }

  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVMaxOrderByAggregateInput = {
    key?: SortOrder
    registro?: SortOrder
    data?: SortOrder
    centro_estoque?: SortOrder
    empresa?: SortOrder
    filial?: SortOrder
    id_usuario?: SortOrder
    usuario?: SortOrder
    quantidade?: SortOrder
    observacao?: SortOrder
  }

  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVMinOrderByAggregateInput = {
    key?: SortOrder
    registro?: SortOrder
    data?: SortOrder
    centro_estoque?: SortOrder
    empresa?: SortOrder
    filial?: SortOrder
    id_usuario?: SortOrder
    usuario?: SortOrder
    quantidade?: SortOrder
    observacao?: SortOrder
  }

  export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVSumOrderByAggregateInput = {
    key?: SortOrder
    registro?: SortOrder
    empresa?: SortOrder
    filial?: SortOrder
    id_usuario?: SortOrder
    quantidade?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVCountOrderByAggregateInput = {
    id?: SortOrder
    registro?: SortOrder
    cod_origem?: SortOrder
    origem?: SortOrder
    data_hora?: SortOrder
    autorizado?: SortOrder
    importado?: SortOrder
    data_hora_importado?: SortOrder
    mensagem?: SortOrder
    data_hora_mensagem?: SortOrder
    usuario?: SortOrder
  }

  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVAvgOrderByAggregateInput = {
    id?: SortOrder
    registro?: SortOrder
    cod_origem?: SortOrder
    autorizado?: SortOrder
    usuario?: SortOrder
  }

  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVMaxOrderByAggregateInput = {
    id?: SortOrder
    registro?: SortOrder
    cod_origem?: SortOrder
    origem?: SortOrder
    data_hora?: SortOrder
    autorizado?: SortOrder
    importado?: SortOrder
    data_hora_importado?: SortOrder
    mensagem?: SortOrder
    data_hora_mensagem?: SortOrder
    usuario?: SortOrder
  }

  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVMinOrderByAggregateInput = {
    id?: SortOrder
    registro?: SortOrder
    cod_origem?: SortOrder
    origem?: SortOrder
    data_hora?: SortOrder
    autorizado?: SortOrder
    importado?: SortOrder
    data_hora_importado?: SortOrder
    mensagem?: SortOrder
    data_hora_mensagem?: SortOrder
    usuario?: SortOrder
  }

  export type AUTORIZACOES_WEB_BARRAMENTOS_DEVSumOrderByAggregateInput = {
    id?: SortOrder
    registro?: SortOrder
    cod_origem?: SortOrder
    autorizado?: SortOrder
    usuario?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use VW_AUTORIZACOES_WEB_DEVDefaultArgs instead
     */
    export type VW_AUTORIZACOES_WEB_DEVArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VW_AUTORIZACOES_WEB_DEVDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VW_AUTORIZACOES_DESPESAS_COFRE_DEVDefaultArgs instead
     */
    export type VW_AUTORIZACOES_DESPESAS_COFRE_DEVArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VW_AUTORIZACOES_DESPESAS_COFRE_DEVDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVDefaultArgs instead
     */
    export type VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVDefaultArgs instead
     */
    export type VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVDefaultArgs instead
     */
    export type VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AUTORIZACOES_WEB_BARRAMENTOS_DEVDefaultArgs instead
     */
    export type AUTORIZACOES_WEB_BARRAMENTOS_DEVArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AUTORIZACOES_WEB_BARRAMENTOS_DEVDefaultArgs<ExtArgs>

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