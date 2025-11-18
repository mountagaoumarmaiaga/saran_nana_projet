
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
 * Model Entreprise
 * 
 */
export type Entreprise = $Result.DefaultSelection<Prisma.$EntreprisePayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model SubCategory
 * 
 */
export type SubCategory = $Result.DefaultSelection<Prisma.$SubCategoryPayload>
/**
 * Model Destination
 * 
 */
export type Destination = $Result.DefaultSelection<Prisma.$DestinationPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const InvoiceStatus: {
  PAID: 'PAID',
  UNPAID: 'UNPAID',
  PENDING: 'PENDING'
};

export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus]


export const TransactionType: {
  SALE: 'SALE',
  PURCHASE: 'PURCHASE',
  RETURN: 'RETURN'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]

}

export type InvoiceStatus = $Enums.InvoiceStatus

export const InvoiceStatus: typeof $Enums.InvoiceStatus

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Entreprises
 * const entreprises = await prisma.entreprise.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Entreprises
   * const entreprises = await prisma.entreprise.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.entreprise`: Exposes CRUD operations for the **Entreprise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entreprises
    * const entreprises = await prisma.entreprise.findMany()
    * ```
    */
  get entreprise(): Prisma.EntrepriseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subCategory`: Exposes CRUD operations for the **SubCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubCategories
    * const subCategories = await prisma.subCategory.findMany()
    * ```
    */
  get subCategory(): Prisma.SubCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.destination`: Exposes CRUD operations for the **Destination** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Destinations
    * const destinations = await prisma.destination.findMany()
    * ```
    */
  get destination(): Prisma.DestinationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Entreprise: 'Entreprise',
    Client: 'Client',
    Invoice: 'Invoice',
    Product: 'Product',
    Category: 'Category',
    SubCategory: 'SubCategory',
    Destination: 'Destination',
    Transaction: 'Transaction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "entreprise" | "client" | "invoice" | "product" | "category" | "subCategory" | "destination" | "transaction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Entreprise: {
        payload: Prisma.$EntreprisePayload<ExtArgs>
        fields: Prisma.EntrepriseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntrepriseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntrepriseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          findFirst: {
            args: Prisma.EntrepriseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntrepriseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          findMany: {
            args: Prisma.EntrepriseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>[]
          }
          create: {
            args: Prisma.EntrepriseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          createMany: {
            args: Prisma.EntrepriseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EntrepriseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>[]
          }
          delete: {
            args: Prisma.EntrepriseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          update: {
            args: Prisma.EntrepriseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          deleteMany: {
            args: Prisma.EntrepriseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntrepriseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EntrepriseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>[]
          }
          upsert: {
            args: Prisma.EntrepriseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          aggregate: {
            args: Prisma.EntrepriseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntreprise>
          }
          groupBy: {
            args: Prisma.EntrepriseGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntrepriseGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntrepriseCountArgs<ExtArgs>
            result: $Utils.Optional<EntrepriseCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      SubCategory: {
        payload: Prisma.$SubCategoryPayload<ExtArgs>
        fields: Prisma.SubCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          findFirst: {
            args: Prisma.SubCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          findMany: {
            args: Prisma.SubCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>[]
          }
          create: {
            args: Prisma.SubCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          createMany: {
            args: Prisma.SubCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>[]
          }
          delete: {
            args: Prisma.SubCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          update: {
            args: Prisma.SubCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          deleteMany: {
            args: Prisma.SubCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>[]
          }
          upsert: {
            args: Prisma.SubCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          aggregate: {
            args: Prisma.SubCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubCategory>
          }
          groupBy: {
            args: Prisma.SubCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<SubCategoryCountAggregateOutputType> | number
          }
        }
      }
      Destination: {
        payload: Prisma.$DestinationPayload<ExtArgs>
        fields: Prisma.DestinationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DestinationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DestinationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          findFirst: {
            args: Prisma.DestinationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DestinationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          findMany: {
            args: Prisma.DestinationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>[]
          }
          create: {
            args: Prisma.DestinationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          createMany: {
            args: Prisma.DestinationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DestinationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>[]
          }
          delete: {
            args: Prisma.DestinationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          update: {
            args: Prisma.DestinationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          deleteMany: {
            args: Prisma.DestinationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DestinationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DestinationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>[]
          }
          upsert: {
            args: Prisma.DestinationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          aggregate: {
            args: Prisma.DestinationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDestination>
          }
          groupBy: {
            args: Prisma.DestinationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DestinationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DestinationCountArgs<ExtArgs>
            result: $Utils.Optional<DestinationCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    entreprise?: EntrepriseOmit
    client?: ClientOmit
    invoice?: InvoiceOmit
    product?: ProductOmit
    category?: CategoryOmit
    subCategory?: SubCategoryOmit
    destination?: DestinationOmit
    transaction?: TransactionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type EntrepriseCountOutputType
   */

  export type EntrepriseCountOutputType = {
    clients: number
    invoices: number
    products: number
    categories: number
    subCategories: number
    transactions: number
    destinations: number
  }

  export type EntrepriseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | EntrepriseCountOutputTypeCountClientsArgs
    invoices?: boolean | EntrepriseCountOutputTypeCountInvoicesArgs
    products?: boolean | EntrepriseCountOutputTypeCountProductsArgs
    categories?: boolean | EntrepriseCountOutputTypeCountCategoriesArgs
    subCategories?: boolean | EntrepriseCountOutputTypeCountSubCategoriesArgs
    transactions?: boolean | EntrepriseCountOutputTypeCountTransactionsArgs
    destinations?: boolean | EntrepriseCountOutputTypeCountDestinationsArgs
  }

  // Custom InputTypes
  /**
   * EntrepriseCountOutputType without action
   */
  export type EntrepriseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntrepriseCountOutputType
     */
    select?: EntrepriseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EntrepriseCountOutputType without action
   */
  export type EntrepriseCountOutputTypeCountClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
  }

  /**
   * EntrepriseCountOutputType without action
   */
  export type EntrepriseCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }

  /**
   * EntrepriseCountOutputType without action
   */
  export type EntrepriseCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * EntrepriseCountOutputType without action
   */
  export type EntrepriseCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * EntrepriseCountOutputType without action
   */
  export type EntrepriseCountOutputTypeCountSubCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoryWhereInput
  }

  /**
   * EntrepriseCountOutputType without action
   */
  export type EntrepriseCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * EntrepriseCountOutputType without action
   */
  export type EntrepriseCountOutputTypeCountDestinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinationWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    invoices: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | ClientCountOutputTypeCountInvoicesArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }


  /**
   * Count Type InvoiceCountOutputType
   */

  export type InvoiceCountOutputType = {
    transactions: number
  }

  export type InvoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | InvoiceCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceCountOutputType
     */
    select?: InvoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    transactions: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | ProductCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
    subCategories: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
    subCategories?: boolean | CategoryCountOutputTypeCountSubCategoriesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountSubCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoryWhereInput
  }


  /**
   * Count Type SubCategoryCountOutputType
   */

  export type SubCategoryCountOutputType = {
    products: number
  }

  export type SubCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | SubCategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * SubCategoryCountOutputType without action
   */
  export type SubCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoryCountOutputType
     */
    select?: SubCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubCategoryCountOutputType without action
   */
  export type SubCategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type DestinationCountOutputType
   */

  export type DestinationCountOutputType = {
    transactions: number
  }

  export type DestinationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | DestinationCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationCountOutputType
     */
    select?: DestinationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Entreprise
   */

  export type AggregateEntreprise = {
    _count: EntrepriseCountAggregateOutputType | null
    _avg: EntrepriseAvgAggregateOutputType | null
    _sum: EntrepriseSumAggregateOutputType | null
    _min: EntrepriseMinAggregateOutputType | null
    _max: EntrepriseMaxAggregateOutputType | null
  }

  export type EntrepriseAvgAggregateOutputType = {
    tvaRate: number | null
  }

  export type EntrepriseSumAggregateOutputType = {
    tvaRate: number | null
  }

  export type EntrepriseMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    address: string | null
    tvaRate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EntrepriseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    address: string | null
    tvaRate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EntrepriseCountAggregateOutputType = {
    id: number
    name: number
    email: number
    address: number
    tvaRate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EntrepriseAvgAggregateInputType = {
    tvaRate?: true
  }

  export type EntrepriseSumAggregateInputType = {
    tvaRate?: true
  }

  export type EntrepriseMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    address?: true
    tvaRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EntrepriseMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    address?: true
    tvaRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EntrepriseCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    address?: true
    tvaRate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EntrepriseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entreprise to aggregate.
     */
    where?: EntrepriseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entreprises to fetch.
     */
    orderBy?: EntrepriseOrderByWithRelationInput | EntrepriseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntrepriseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entreprises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entreprises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entreprises
    **/
    _count?: true | EntrepriseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntrepriseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntrepriseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntrepriseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntrepriseMaxAggregateInputType
  }

  export type GetEntrepriseAggregateType<T extends EntrepriseAggregateArgs> = {
        [P in keyof T & keyof AggregateEntreprise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntreprise[P]>
      : GetScalarType<T[P], AggregateEntreprise[P]>
  }




  export type EntrepriseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntrepriseWhereInput
    orderBy?: EntrepriseOrderByWithAggregationInput | EntrepriseOrderByWithAggregationInput[]
    by: EntrepriseScalarFieldEnum[] | EntrepriseScalarFieldEnum
    having?: EntrepriseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntrepriseCountAggregateInputType | true
    _avg?: EntrepriseAvgAggregateInputType
    _sum?: EntrepriseSumAggregateInputType
    _min?: EntrepriseMinAggregateInputType
    _max?: EntrepriseMaxAggregateInputType
  }

  export type EntrepriseGroupByOutputType = {
    id: string
    name: string
    email: string | null
    address: string | null
    tvaRate: number
    createdAt: Date
    updatedAt: Date
    _count: EntrepriseCountAggregateOutputType | null
    _avg: EntrepriseAvgAggregateOutputType | null
    _sum: EntrepriseSumAggregateOutputType | null
    _min: EntrepriseMinAggregateOutputType | null
    _max: EntrepriseMaxAggregateOutputType | null
  }

  type GetEntrepriseGroupByPayload<T extends EntrepriseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntrepriseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntrepriseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntrepriseGroupByOutputType[P]>
            : GetScalarType<T[P], EntrepriseGroupByOutputType[P]>
        }
      >
    >


  export type EntrepriseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    tvaRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clients?: boolean | Entreprise$clientsArgs<ExtArgs>
    invoices?: boolean | Entreprise$invoicesArgs<ExtArgs>
    products?: boolean | Entreprise$productsArgs<ExtArgs>
    categories?: boolean | Entreprise$categoriesArgs<ExtArgs>
    subCategories?: boolean | Entreprise$subCategoriesArgs<ExtArgs>
    transactions?: boolean | Entreprise$transactionsArgs<ExtArgs>
    destinations?: boolean | Entreprise$destinationsArgs<ExtArgs>
    _count?: boolean | EntrepriseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entreprise"]>

  export type EntrepriseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    tvaRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["entreprise"]>

  export type EntrepriseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    tvaRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["entreprise"]>

  export type EntrepriseSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    tvaRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EntrepriseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "address" | "tvaRate" | "createdAt" | "updatedAt", ExtArgs["result"]["entreprise"]>
  export type EntrepriseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | Entreprise$clientsArgs<ExtArgs>
    invoices?: boolean | Entreprise$invoicesArgs<ExtArgs>
    products?: boolean | Entreprise$productsArgs<ExtArgs>
    categories?: boolean | Entreprise$categoriesArgs<ExtArgs>
    subCategories?: boolean | Entreprise$subCategoriesArgs<ExtArgs>
    transactions?: boolean | Entreprise$transactionsArgs<ExtArgs>
    destinations?: boolean | Entreprise$destinationsArgs<ExtArgs>
    _count?: boolean | EntrepriseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EntrepriseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EntrepriseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EntreprisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entreprise"
    objects: {
      clients: Prisma.$ClientPayload<ExtArgs>[]
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
      products: Prisma.$ProductPayload<ExtArgs>[]
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      subCategories: Prisma.$SubCategoryPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      destinations: Prisma.$DestinationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string | null
      address: string | null
      tvaRate: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["entreprise"]>
    composites: {}
  }

  type EntrepriseGetPayload<S extends boolean | null | undefined | EntrepriseDefaultArgs> = $Result.GetResult<Prisma.$EntreprisePayload, S>

  type EntrepriseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EntrepriseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntrepriseCountAggregateInputType | true
    }

  export interface EntrepriseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entreprise'], meta: { name: 'Entreprise' } }
    /**
     * Find zero or one Entreprise that matches the filter.
     * @param {EntrepriseFindUniqueArgs} args - Arguments to find a Entreprise
     * @example
     * // Get one Entreprise
     * const entreprise = await prisma.entreprise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntrepriseFindUniqueArgs>(args: SelectSubset<T, EntrepriseFindUniqueArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entreprise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EntrepriseFindUniqueOrThrowArgs} args - Arguments to find a Entreprise
     * @example
     * // Get one Entreprise
     * const entreprise = await prisma.entreprise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntrepriseFindUniqueOrThrowArgs>(args: SelectSubset<T, EntrepriseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entreprise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseFindFirstArgs} args - Arguments to find a Entreprise
     * @example
     * // Get one Entreprise
     * const entreprise = await prisma.entreprise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntrepriseFindFirstArgs>(args?: SelectSubset<T, EntrepriseFindFirstArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entreprise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseFindFirstOrThrowArgs} args - Arguments to find a Entreprise
     * @example
     * // Get one Entreprise
     * const entreprise = await prisma.entreprise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntrepriseFindFirstOrThrowArgs>(args?: SelectSubset<T, EntrepriseFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entreprises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entreprises
     * const entreprises = await prisma.entreprise.findMany()
     * 
     * // Get first 10 Entreprises
     * const entreprises = await prisma.entreprise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entrepriseWithIdOnly = await prisma.entreprise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntrepriseFindManyArgs>(args?: SelectSubset<T, EntrepriseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entreprise.
     * @param {EntrepriseCreateArgs} args - Arguments to create a Entreprise.
     * @example
     * // Create one Entreprise
     * const Entreprise = await prisma.entreprise.create({
     *   data: {
     *     // ... data to create a Entreprise
     *   }
     * })
     * 
     */
    create<T extends EntrepriseCreateArgs>(args: SelectSubset<T, EntrepriseCreateArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entreprises.
     * @param {EntrepriseCreateManyArgs} args - Arguments to create many Entreprises.
     * @example
     * // Create many Entreprises
     * const entreprise = await prisma.entreprise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntrepriseCreateManyArgs>(args?: SelectSubset<T, EntrepriseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Entreprises and returns the data saved in the database.
     * @param {EntrepriseCreateManyAndReturnArgs} args - Arguments to create many Entreprises.
     * @example
     * // Create many Entreprises
     * const entreprise = await prisma.entreprise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Entreprises and only return the `id`
     * const entrepriseWithIdOnly = await prisma.entreprise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EntrepriseCreateManyAndReturnArgs>(args?: SelectSubset<T, EntrepriseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Entreprise.
     * @param {EntrepriseDeleteArgs} args - Arguments to delete one Entreprise.
     * @example
     * // Delete one Entreprise
     * const Entreprise = await prisma.entreprise.delete({
     *   where: {
     *     // ... filter to delete one Entreprise
     *   }
     * })
     * 
     */
    delete<T extends EntrepriseDeleteArgs>(args: SelectSubset<T, EntrepriseDeleteArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entreprise.
     * @param {EntrepriseUpdateArgs} args - Arguments to update one Entreprise.
     * @example
     * // Update one Entreprise
     * const entreprise = await prisma.entreprise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntrepriseUpdateArgs>(args: SelectSubset<T, EntrepriseUpdateArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entreprises.
     * @param {EntrepriseDeleteManyArgs} args - Arguments to filter Entreprises to delete.
     * @example
     * // Delete a few Entreprises
     * const { count } = await prisma.entreprise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntrepriseDeleteManyArgs>(args?: SelectSubset<T, EntrepriseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entreprises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entreprises
     * const entreprise = await prisma.entreprise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntrepriseUpdateManyArgs>(args: SelectSubset<T, EntrepriseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entreprises and returns the data updated in the database.
     * @param {EntrepriseUpdateManyAndReturnArgs} args - Arguments to update many Entreprises.
     * @example
     * // Update many Entreprises
     * const entreprise = await prisma.entreprise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Entreprises and only return the `id`
     * const entrepriseWithIdOnly = await prisma.entreprise.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EntrepriseUpdateManyAndReturnArgs>(args: SelectSubset<T, EntrepriseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Entreprise.
     * @param {EntrepriseUpsertArgs} args - Arguments to update or create a Entreprise.
     * @example
     * // Update or create a Entreprise
     * const entreprise = await prisma.entreprise.upsert({
     *   create: {
     *     // ... data to create a Entreprise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entreprise we want to update
     *   }
     * })
     */
    upsert<T extends EntrepriseUpsertArgs>(args: SelectSubset<T, EntrepriseUpsertArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entreprises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseCountArgs} args - Arguments to filter Entreprises to count.
     * @example
     * // Count the number of Entreprises
     * const count = await prisma.entreprise.count({
     *   where: {
     *     // ... the filter for the Entreprises we want to count
     *   }
     * })
    **/
    count<T extends EntrepriseCountArgs>(
      args?: Subset<T, EntrepriseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntrepriseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entreprise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EntrepriseAggregateArgs>(args: Subset<T, EntrepriseAggregateArgs>): Prisma.PrismaPromise<GetEntrepriseAggregateType<T>>

    /**
     * Group by Entreprise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseGroupByArgs} args - Group by arguments.
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
      T extends EntrepriseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntrepriseGroupByArgs['orderBy'] }
        : { orderBy?: EntrepriseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EntrepriseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntrepriseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entreprise model
   */
  readonly fields: EntrepriseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entreprise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntrepriseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clients<T extends Entreprise$clientsArgs<ExtArgs> = {}>(args?: Subset<T, Entreprise$clientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invoices<T extends Entreprise$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Entreprise$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends Entreprise$productsArgs<ExtArgs> = {}>(args?: Subset<T, Entreprise$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends Entreprise$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Entreprise$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subCategories<T extends Entreprise$subCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Entreprise$subCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Entreprise$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Entreprise$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    destinations<T extends Entreprise$destinationsArgs<ExtArgs> = {}>(args?: Subset<T, Entreprise$destinationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Entreprise model
   */
  interface EntrepriseFieldRefs {
    readonly id: FieldRef<"Entreprise", 'String'>
    readonly name: FieldRef<"Entreprise", 'String'>
    readonly email: FieldRef<"Entreprise", 'String'>
    readonly address: FieldRef<"Entreprise", 'String'>
    readonly tvaRate: FieldRef<"Entreprise", 'Float'>
    readonly createdAt: FieldRef<"Entreprise", 'DateTime'>
    readonly updatedAt: FieldRef<"Entreprise", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Entreprise findUnique
   */
  export type EntrepriseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * Filter, which Entreprise to fetch.
     */
    where: EntrepriseWhereUniqueInput
  }

  /**
   * Entreprise findUniqueOrThrow
   */
  export type EntrepriseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * Filter, which Entreprise to fetch.
     */
    where: EntrepriseWhereUniqueInput
  }

  /**
   * Entreprise findFirst
   */
  export type EntrepriseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * Filter, which Entreprise to fetch.
     */
    where?: EntrepriseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entreprises to fetch.
     */
    orderBy?: EntrepriseOrderByWithRelationInput | EntrepriseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entreprises.
     */
    cursor?: EntrepriseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entreprises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entreprises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entreprises.
     */
    distinct?: EntrepriseScalarFieldEnum | EntrepriseScalarFieldEnum[]
  }

  /**
   * Entreprise findFirstOrThrow
   */
  export type EntrepriseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * Filter, which Entreprise to fetch.
     */
    where?: EntrepriseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entreprises to fetch.
     */
    orderBy?: EntrepriseOrderByWithRelationInput | EntrepriseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entreprises.
     */
    cursor?: EntrepriseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entreprises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entreprises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entreprises.
     */
    distinct?: EntrepriseScalarFieldEnum | EntrepriseScalarFieldEnum[]
  }

  /**
   * Entreprise findMany
   */
  export type EntrepriseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * Filter, which Entreprises to fetch.
     */
    where?: EntrepriseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entreprises to fetch.
     */
    orderBy?: EntrepriseOrderByWithRelationInput | EntrepriseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entreprises.
     */
    cursor?: EntrepriseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entreprises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entreprises.
     */
    skip?: number
    distinct?: EntrepriseScalarFieldEnum | EntrepriseScalarFieldEnum[]
  }

  /**
   * Entreprise create
   */
  export type EntrepriseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * The data needed to create a Entreprise.
     */
    data: XOR<EntrepriseCreateInput, EntrepriseUncheckedCreateInput>
  }

  /**
   * Entreprise createMany
   */
  export type EntrepriseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entreprises.
     */
    data: EntrepriseCreateManyInput | EntrepriseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entreprise createManyAndReturn
   */
  export type EntrepriseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * The data used to create many Entreprises.
     */
    data: EntrepriseCreateManyInput | EntrepriseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entreprise update
   */
  export type EntrepriseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * The data needed to update a Entreprise.
     */
    data: XOR<EntrepriseUpdateInput, EntrepriseUncheckedUpdateInput>
    /**
     * Choose, which Entreprise to update.
     */
    where: EntrepriseWhereUniqueInput
  }

  /**
   * Entreprise updateMany
   */
  export type EntrepriseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entreprises.
     */
    data: XOR<EntrepriseUpdateManyMutationInput, EntrepriseUncheckedUpdateManyInput>
    /**
     * Filter which Entreprises to update
     */
    where?: EntrepriseWhereInput
    /**
     * Limit how many Entreprises to update.
     */
    limit?: number
  }

  /**
   * Entreprise updateManyAndReturn
   */
  export type EntrepriseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * The data used to update Entreprises.
     */
    data: XOR<EntrepriseUpdateManyMutationInput, EntrepriseUncheckedUpdateManyInput>
    /**
     * Filter which Entreprises to update
     */
    where?: EntrepriseWhereInput
    /**
     * Limit how many Entreprises to update.
     */
    limit?: number
  }

  /**
   * Entreprise upsert
   */
  export type EntrepriseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * The filter to search for the Entreprise to update in case it exists.
     */
    where: EntrepriseWhereUniqueInput
    /**
     * In case the Entreprise found by the `where` argument doesn't exist, create a new Entreprise with this data.
     */
    create: XOR<EntrepriseCreateInput, EntrepriseUncheckedCreateInput>
    /**
     * In case the Entreprise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntrepriseUpdateInput, EntrepriseUncheckedUpdateInput>
  }

  /**
   * Entreprise delete
   */
  export type EntrepriseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * Filter which Entreprise to delete.
     */
    where: EntrepriseWhereUniqueInput
  }

  /**
   * Entreprise deleteMany
   */
  export type EntrepriseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entreprises to delete
     */
    where?: EntrepriseWhereInput
    /**
     * Limit how many Entreprises to delete.
     */
    limit?: number
  }

  /**
   * Entreprise.clients
   */
  export type Entreprise$clientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    cursor?: ClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Entreprise.invoices
   */
  export type Entreprise$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Entreprise.products
   */
  export type Entreprise$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Entreprise.categories
   */
  export type Entreprise$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Entreprise.subCategories
   */
  export type Entreprise$subCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    where?: SubCategoryWhereInput
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    cursor?: SubCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }

  /**
   * Entreprise.transactions
   */
  export type Entreprise$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Entreprise.destinations
   */
  export type Entreprise$destinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    where?: DestinationWhereInput
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    cursor?: DestinationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Entreprise without action
   */
  export type EntrepriseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    entrepriseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    entrepriseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    address: number
    entrepriseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    entrepriseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    entrepriseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    entrepriseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    name: string
    email: string | null
    phone: string | null
    address: string
    entrepriseId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    entrepriseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invoices?: boolean | Client$invoicesArgs<ExtArgs>
    entreprise?: boolean | Client$entrepriseArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    entrepriseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entreprise?: boolean | Client$entrepriseArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    entrepriseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entreprise?: boolean | Client$entrepriseArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    entrepriseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "address" | "entrepriseId" | "createdAt" | "updatedAt", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | Client$invoicesArgs<ExtArgs>
    entreprise?: boolean | Client$entrepriseArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entreprise?: boolean | Client$entrepriseArgs<ExtArgs>
  }
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entreprise?: boolean | Client$entrepriseArgs<ExtArgs>
  }

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
      entreprise: Prisma.$EntreprisePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string | null
      phone: string | null
      address: string
      entrepriseId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoices<T extends Client$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Client$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    entreprise<T extends Client$entrepriseArgs<ExtArgs> = {}>(args?: Subset<T, Client$entrepriseArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly name: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly phone: FieldRef<"Client", 'String'>
    readonly address: FieldRef<"Client", 'String'>
    readonly entrepriseId: FieldRef<"Client", 'String'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.invoices
   */
  export type Client$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Client.entreprise
   */
  export type Client$entrepriseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    where?: EntrepriseWhereInput
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    subtotal: number | null
    tva: number | null
    totalAmount: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    subtotal: number | null
    tva: number | null
    totalAmount: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: string | null
    invoiceNumber: string | null
    date: Date | null
    status: $Enums.InvoiceStatus | null
    subtotal: number | null
    tva: number | null
    totalAmount: number | null
    clientId: string | null
    entrepriseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: string | null
    invoiceNumber: string | null
    date: Date | null
    status: $Enums.InvoiceStatus | null
    subtotal: number | null
    tva: number | null
    totalAmount: number | null
    clientId: string | null
    entrepriseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    invoiceNumber: number
    date: number
    status: number
    subtotal: number
    tva: number
    totalAmount: number
    clientId: number
    entrepriseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    subtotal?: true
    tva?: true
    totalAmount?: true
  }

  export type InvoiceSumAggregateInputType = {
    subtotal?: true
    tva?: true
    totalAmount?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    invoiceNumber?: true
    date?: true
    status?: true
    subtotal?: true
    tva?: true
    totalAmount?: true
    clientId?: true
    entrepriseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    invoiceNumber?: true
    date?: true
    status?: true
    subtotal?: true
    tva?: true
    totalAmount?: true
    clientId?: true
    entrepriseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    invoiceNumber?: true
    date?: true
    status?: true
    subtotal?: true
    tva?: true
    totalAmount?: true
    clientId?: true
    entrepriseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: string
    invoiceNumber: string
    date: Date
    status: $Enums.InvoiceStatus
    subtotal: number
    tva: number
    totalAmount: number
    clientId: string
    entrepriseId: string | null
    createdAt: Date
    updatedAt: Date
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceNumber?: boolean
    date?: boolean
    status?: boolean
    subtotal?: boolean
    tva?: boolean
    totalAmount?: boolean
    clientId?: boolean
    entrepriseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    entreprise?: boolean | Invoice$entrepriseArgs<ExtArgs>
    transactions?: boolean | Invoice$transactionsArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceNumber?: boolean
    date?: boolean
    status?: boolean
    subtotal?: boolean
    tva?: boolean
    totalAmount?: boolean
    clientId?: boolean
    entrepriseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    entreprise?: boolean | Invoice$entrepriseArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceNumber?: boolean
    date?: boolean
    status?: boolean
    subtotal?: boolean
    tva?: boolean
    totalAmount?: boolean
    clientId?: boolean
    entrepriseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    entreprise?: boolean | Invoice$entrepriseArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    id?: boolean
    invoiceNumber?: boolean
    date?: boolean
    status?: boolean
    subtotal?: boolean
    tva?: boolean
    totalAmount?: boolean
    clientId?: boolean
    entrepriseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoiceNumber" | "date" | "status" | "subtotal" | "tva" | "totalAmount" | "clientId" | "entrepriseId" | "createdAt" | "updatedAt", ExtArgs["result"]["invoice"]>
  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    entreprise?: boolean | Invoice$entrepriseArgs<ExtArgs>
    transactions?: boolean | Invoice$transactionsArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    entreprise?: boolean | Invoice$entrepriseArgs<ExtArgs>
  }
  export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    entreprise?: boolean | Invoice$entrepriseArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      entreprise: Prisma.$EntreprisePayload<ExtArgs> | null
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invoiceNumber: string
      date: Date
      status: $Enums.InvoiceStatus
      subtotal: number
      tva: number
      totalAmount: number
      clientId: string
      entrepriseId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {InvoiceUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
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
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    entreprise<T extends Invoice$entrepriseArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$entrepriseArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Invoice$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invoice model
   */
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'String'>
    readonly invoiceNumber: FieldRef<"Invoice", 'String'>
    readonly date: FieldRef<"Invoice", 'DateTime'>
    readonly status: FieldRef<"Invoice", 'InvoiceStatus'>
    readonly subtotal: FieldRef<"Invoice", 'Float'>
    readonly tva: FieldRef<"Invoice", 'Float'>
    readonly totalAmount: FieldRef<"Invoice", 'Float'>
    readonly clientId: FieldRef<"Invoice", 'String'>
    readonly entrepriseId: FieldRef<"Invoice", 'String'>
    readonly createdAt: FieldRef<"Invoice", 'DateTime'>
    readonly updatedAt: FieldRef<"Invoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoice updateManyAndReturn
   */
  export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoice.entreprise
   */
  export type Invoice$entrepriseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    where?: EntrepriseWhereInput
  }

  /**
   * Invoice.transactions
   */
  export type Invoice$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type ProductSumAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    reference: string | null
    name: string | null
    description: string | null
    quantity: number | null
    unit: string | null
    price: number | null
    imageUrl: string | null
    categoryId: string | null
    subCategoryId: string | null
    entrepriseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    reference: string | null
    name: string | null
    description: string | null
    quantity: number | null
    unit: string | null
    price: number | null
    imageUrl: string | null
    categoryId: string | null
    subCategoryId: string | null
    entrepriseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    reference: number
    name: number
    description: number
    quantity: number
    unit: number
    price: number
    imageUrl: number
    categoryId: number
    subCategoryId: number
    entrepriseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type ProductSumAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    reference?: true
    name?: true
    description?: true
    quantity?: true
    unit?: true
    price?: true
    imageUrl?: true
    categoryId?: true
    subCategoryId?: true
    entrepriseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    reference?: true
    name?: true
    description?: true
    quantity?: true
    unit?: true
    price?: true
    imageUrl?: true
    categoryId?: true
    subCategoryId?: true
    entrepriseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    reference?: true
    name?: true
    description?: true
    quantity?: true
    unit?: true
    price?: true
    imageUrl?: true
    categoryId?: true
    subCategoryId?: true
    entrepriseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    reference: string | null
    name: string
    description: string
    quantity: number
    unit: string
    price: number
    imageUrl: string
    categoryId: string
    subCategoryId: string | null
    entrepriseId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    unit?: boolean
    price?: boolean
    imageUrl?: boolean
    categoryId?: boolean
    subCategoryId?: boolean
    entrepriseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    subCategory?: boolean | Product$subCategoryArgs<ExtArgs>
    entreprise?: boolean | Product$entrepriseArgs<ExtArgs>
    transactions?: boolean | Product$transactionsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    unit?: boolean
    price?: boolean
    imageUrl?: boolean
    categoryId?: boolean
    subCategoryId?: boolean
    entrepriseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    subCategory?: boolean | Product$subCategoryArgs<ExtArgs>
    entreprise?: boolean | Product$entrepriseArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    unit?: boolean
    price?: boolean
    imageUrl?: boolean
    categoryId?: boolean
    subCategoryId?: boolean
    entrepriseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    subCategory?: boolean | Product$subCategoryArgs<ExtArgs>
    entreprise?: boolean | Product$entrepriseArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    reference?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    unit?: boolean
    price?: boolean
    imageUrl?: boolean
    categoryId?: boolean
    subCategoryId?: boolean
    entrepriseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reference" | "name" | "description" | "quantity" | "unit" | "price" | "imageUrl" | "categoryId" | "subCategoryId" | "entrepriseId" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    subCategory?: boolean | Product$subCategoryArgs<ExtArgs>
    entreprise?: boolean | Product$entrepriseArgs<ExtArgs>
    transactions?: boolean | Product$transactionsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    subCategory?: boolean | Product$subCategoryArgs<ExtArgs>
    entreprise?: boolean | Product$entrepriseArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    subCategory?: boolean | Product$subCategoryArgs<ExtArgs>
    entreprise?: boolean | Product$entrepriseArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      subCategory: Prisma.$SubCategoryPayload<ExtArgs> | null
      entreprise: Prisma.$EntreprisePayload<ExtArgs> | null
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reference: string | null
      name: string
      description: string
      quantity: number
      unit: string
      price: number
      imageUrl: string
      categoryId: string
      subCategoryId: string | null
      entrepriseId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subCategory<T extends Product$subCategoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$subCategoryArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    entreprise<T extends Product$entrepriseArgs<ExtArgs> = {}>(args?: Subset<T, Product$entrepriseArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Product$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Product$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly reference: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly quantity: FieldRef<"Product", 'Int'>
    readonly unit: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly imageUrl: FieldRef<"Product", 'String'>
    readonly categoryId: FieldRef<"Product", 'String'>
    readonly subCategoryId: FieldRef<"Product", 'String'>
    readonly entrepriseId: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.subCategory
   */
  export type Product$subCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    where?: SubCategoryWhereInput
  }

  /**
   * Product.entreprise
   */
  export type Product$entrepriseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    where?: EntrepriseWhereInput
  }

  /**
   * Product.transactions
   */
  export type Product$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    entrepriseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    entrepriseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    entrepriseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    entrepriseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    entrepriseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    entrepriseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    entrepriseId: string | null
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    entrepriseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entreprise?: boolean | Category$entrepriseArgs<ExtArgs>
    products?: boolean | Category$productsArgs<ExtArgs>
    subCategories?: boolean | Category$subCategoriesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    entrepriseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entreprise?: boolean | Category$entrepriseArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    entrepriseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entreprise?: boolean | Category$entrepriseArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    entrepriseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "entrepriseId" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entreprise?: boolean | Category$entrepriseArgs<ExtArgs>
    products?: boolean | Category$productsArgs<ExtArgs>
    subCategories?: boolean | Category$subCategoriesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entreprise?: boolean | Category$entrepriseArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entreprise?: boolean | Category$entrepriseArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      entreprise: Prisma.$EntreprisePayload<ExtArgs> | null
      products: Prisma.$ProductPayload<ExtArgs>[]
      subCategories: Prisma.$SubCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      entrepriseId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entreprise<T extends Category$entrepriseArgs<ExtArgs> = {}>(args?: Subset<T, Category$entrepriseArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subCategories<T extends Category$subCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Category$subCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly entrepriseId: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.entreprise
   */
  export type Category$entrepriseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    where?: EntrepriseWhereInput
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category.subCategories
   */
  export type Category$subCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    where?: SubCategoryWhereInput
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    cursor?: SubCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model SubCategory
   */

  export type AggregateSubCategory = {
    _count: SubCategoryCountAggregateOutputType | null
    _min: SubCategoryMinAggregateOutputType | null
    _max: SubCategoryMaxAggregateOutputType | null
  }

  export type SubCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    categoryId: string | null
    entrepriseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    categoryId: string | null
    entrepriseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubCategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    categoryId: number
    entrepriseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubCategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    categoryId?: true
    entrepriseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    categoryId?: true
    entrepriseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubCategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    categoryId?: true
    entrepriseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCategory to aggregate.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubCategories
    **/
    _count?: true | SubCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubCategoryMaxAggregateInputType
  }

  export type GetSubCategoryAggregateType<T extends SubCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSubCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubCategory[P]>
      : GetScalarType<T[P], AggregateSubCategory[P]>
  }




  export type SubCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoryWhereInput
    orderBy?: SubCategoryOrderByWithAggregationInput | SubCategoryOrderByWithAggregationInput[]
    by: SubCategoryScalarFieldEnum[] | SubCategoryScalarFieldEnum
    having?: SubCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubCategoryCountAggregateInputType | true
    _min?: SubCategoryMinAggregateInputType
    _max?: SubCategoryMaxAggregateInputType
  }

  export type SubCategoryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    categoryId: string
    entrepriseId: string | null
    createdAt: Date
    updatedAt: Date
    _count: SubCategoryCountAggregateOutputType | null
    _min: SubCategoryMinAggregateOutputType | null
    _max: SubCategoryMaxAggregateOutputType | null
  }

  type GetSubCategoryGroupByPayload<T extends SubCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], SubCategoryGroupByOutputType[P]>
        }
      >
    >


  export type SubCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    categoryId?: boolean
    entrepriseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    products?: boolean | SubCategory$productsArgs<ExtArgs>
    entreprise?: boolean | SubCategory$entrepriseArgs<ExtArgs>
    _count?: boolean | SubCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCategory"]>

  export type SubCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    categoryId?: boolean
    entrepriseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    entreprise?: boolean | SubCategory$entrepriseArgs<ExtArgs>
  }, ExtArgs["result"]["subCategory"]>

  export type SubCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    categoryId?: boolean
    entrepriseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    entreprise?: boolean | SubCategory$entrepriseArgs<ExtArgs>
  }, ExtArgs["result"]["subCategory"]>

  export type SubCategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    categoryId?: boolean
    entrepriseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "categoryId" | "entrepriseId" | "createdAt" | "updatedAt", ExtArgs["result"]["subCategory"]>
  export type SubCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    products?: boolean | SubCategory$productsArgs<ExtArgs>
    entreprise?: boolean | SubCategory$entrepriseArgs<ExtArgs>
    _count?: boolean | SubCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    entreprise?: boolean | SubCategory$entrepriseArgs<ExtArgs>
  }
  export type SubCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    entreprise?: boolean | SubCategory$entrepriseArgs<ExtArgs>
  }

  export type $SubCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubCategory"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      products: Prisma.$ProductPayload<ExtArgs>[]
      entreprise: Prisma.$EntreprisePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      categoryId: string
      entrepriseId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subCategory"]>
    composites: {}
  }

  type SubCategoryGetPayload<S extends boolean | null | undefined | SubCategoryDefaultArgs> = $Result.GetResult<Prisma.$SubCategoryPayload, S>

  type SubCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubCategoryCountAggregateInputType | true
    }

  export interface SubCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubCategory'], meta: { name: 'SubCategory' } }
    /**
     * Find zero or one SubCategory that matches the filter.
     * @param {SubCategoryFindUniqueArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubCategoryFindUniqueArgs>(args: SelectSubset<T, SubCategoryFindUniqueArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubCategoryFindUniqueOrThrowArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, SubCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryFindFirstArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubCategoryFindFirstArgs>(args?: SelectSubset<T, SubCategoryFindFirstArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryFindFirstOrThrowArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, SubCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubCategories
     * const subCategories = await prisma.subCategory.findMany()
     * 
     * // Get first 10 SubCategories
     * const subCategories = await prisma.subCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subCategoryWithIdOnly = await prisma.subCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubCategoryFindManyArgs>(args?: SelectSubset<T, SubCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubCategory.
     * @param {SubCategoryCreateArgs} args - Arguments to create a SubCategory.
     * @example
     * // Create one SubCategory
     * const SubCategory = await prisma.subCategory.create({
     *   data: {
     *     // ... data to create a SubCategory
     *   }
     * })
     * 
     */
    create<T extends SubCategoryCreateArgs>(args: SelectSubset<T, SubCategoryCreateArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubCategories.
     * @param {SubCategoryCreateManyArgs} args - Arguments to create many SubCategories.
     * @example
     * // Create many SubCategories
     * const subCategory = await prisma.subCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubCategoryCreateManyArgs>(args?: SelectSubset<T, SubCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubCategories and returns the data saved in the database.
     * @param {SubCategoryCreateManyAndReturnArgs} args - Arguments to create many SubCategories.
     * @example
     * // Create many SubCategories
     * const subCategory = await prisma.subCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubCategories and only return the `id`
     * const subCategoryWithIdOnly = await prisma.subCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, SubCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubCategory.
     * @param {SubCategoryDeleteArgs} args - Arguments to delete one SubCategory.
     * @example
     * // Delete one SubCategory
     * const SubCategory = await prisma.subCategory.delete({
     *   where: {
     *     // ... filter to delete one SubCategory
     *   }
     * })
     * 
     */
    delete<T extends SubCategoryDeleteArgs>(args: SelectSubset<T, SubCategoryDeleteArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubCategory.
     * @param {SubCategoryUpdateArgs} args - Arguments to update one SubCategory.
     * @example
     * // Update one SubCategory
     * const subCategory = await prisma.subCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubCategoryUpdateArgs>(args: SelectSubset<T, SubCategoryUpdateArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubCategories.
     * @param {SubCategoryDeleteManyArgs} args - Arguments to filter SubCategories to delete.
     * @example
     * // Delete a few SubCategories
     * const { count } = await prisma.subCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubCategoryDeleteManyArgs>(args?: SelectSubset<T, SubCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubCategories
     * const subCategory = await prisma.subCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubCategoryUpdateManyArgs>(args: SelectSubset<T, SubCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubCategories and returns the data updated in the database.
     * @param {SubCategoryUpdateManyAndReturnArgs} args - Arguments to update many SubCategories.
     * @example
     * // Update many SubCategories
     * const subCategory = await prisma.subCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubCategories and only return the `id`
     * const subCategoryWithIdOnly = await prisma.subCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, SubCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubCategory.
     * @param {SubCategoryUpsertArgs} args - Arguments to update or create a SubCategory.
     * @example
     * // Update or create a SubCategory
     * const subCategory = await prisma.subCategory.upsert({
     *   create: {
     *     // ... data to create a SubCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubCategory we want to update
     *   }
     * })
     */
    upsert<T extends SubCategoryUpsertArgs>(args: SelectSubset<T, SubCategoryUpsertArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryCountArgs} args - Arguments to filter SubCategories to count.
     * @example
     * // Count the number of SubCategories
     * const count = await prisma.subCategory.count({
     *   where: {
     *     // ... the filter for the SubCategories we want to count
     *   }
     * })
    **/
    count<T extends SubCategoryCountArgs>(
      args?: Subset<T, SubCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubCategoryAggregateArgs>(args: Subset<T, SubCategoryAggregateArgs>): Prisma.PrismaPromise<GetSubCategoryAggregateType<T>>

    /**
     * Group by SubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryGroupByArgs} args - Group by arguments.
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
      T extends SubCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubCategoryGroupByArgs['orderBy'] }
        : { orderBy?: SubCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubCategory model
   */
  readonly fields: SubCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends SubCategory$productsArgs<ExtArgs> = {}>(args?: Subset<T, SubCategory$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    entreprise<T extends SubCategory$entrepriseArgs<ExtArgs> = {}>(args?: Subset<T, SubCategory$entrepriseArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SubCategory model
   */
  interface SubCategoryFieldRefs {
    readonly id: FieldRef<"SubCategory", 'String'>
    readonly name: FieldRef<"SubCategory", 'String'>
    readonly description: FieldRef<"SubCategory", 'String'>
    readonly categoryId: FieldRef<"SubCategory", 'String'>
    readonly entrepriseId: FieldRef<"SubCategory", 'String'>
    readonly createdAt: FieldRef<"SubCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"SubCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubCategory findUnique
   */
  export type SubCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where: SubCategoryWhereUniqueInput
  }

  /**
   * SubCategory findUniqueOrThrow
   */
  export type SubCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where: SubCategoryWhereUniqueInput
  }

  /**
   * SubCategory findFirst
   */
  export type SubCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCategories.
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategories.
     */
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }

  /**
   * SubCategory findFirstOrThrow
   */
  export type SubCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCategories.
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategories.
     */
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }

  /**
   * SubCategory findMany
   */
  export type SubCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategories to fetch.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubCategories.
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }

  /**
   * SubCategory create
   */
  export type SubCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a SubCategory.
     */
    data: XOR<SubCategoryCreateInput, SubCategoryUncheckedCreateInput>
  }

  /**
   * SubCategory createMany
   */
  export type SubCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubCategories.
     */
    data: SubCategoryCreateManyInput | SubCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubCategory createManyAndReturn
   */
  export type SubCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many SubCategories.
     */
    data: SubCategoryCreateManyInput | SubCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubCategory update
   */
  export type SubCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a SubCategory.
     */
    data: XOR<SubCategoryUpdateInput, SubCategoryUncheckedUpdateInput>
    /**
     * Choose, which SubCategory to update.
     */
    where: SubCategoryWhereUniqueInput
  }

  /**
   * SubCategory updateMany
   */
  export type SubCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubCategories.
     */
    data: XOR<SubCategoryUpdateManyMutationInput, SubCategoryUncheckedUpdateManyInput>
    /**
     * Filter which SubCategories to update
     */
    where?: SubCategoryWhereInput
    /**
     * Limit how many SubCategories to update.
     */
    limit?: number
  }

  /**
   * SubCategory updateManyAndReturn
   */
  export type SubCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * The data used to update SubCategories.
     */
    data: XOR<SubCategoryUpdateManyMutationInput, SubCategoryUncheckedUpdateManyInput>
    /**
     * Filter which SubCategories to update
     */
    where?: SubCategoryWhereInput
    /**
     * Limit how many SubCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubCategory upsert
   */
  export type SubCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the SubCategory to update in case it exists.
     */
    where: SubCategoryWhereUniqueInput
    /**
     * In case the SubCategory found by the `where` argument doesn't exist, create a new SubCategory with this data.
     */
    create: XOR<SubCategoryCreateInput, SubCategoryUncheckedCreateInput>
    /**
     * In case the SubCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubCategoryUpdateInput, SubCategoryUncheckedUpdateInput>
  }

  /**
   * SubCategory delete
   */
  export type SubCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter which SubCategory to delete.
     */
    where: SubCategoryWhereUniqueInput
  }

  /**
   * SubCategory deleteMany
   */
  export type SubCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCategories to delete
     */
    where?: SubCategoryWhereInput
    /**
     * Limit how many SubCategories to delete.
     */
    limit?: number
  }

  /**
   * SubCategory.products
   */
  export type SubCategory$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * SubCategory.entreprise
   */
  export type SubCategory$entrepriseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    where?: EntrepriseWhereInput
  }

  /**
   * SubCategory without action
   */
  export type SubCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Destination
   */

  export type AggregateDestination = {
    _count: DestinationCountAggregateOutputType | null
    _min: DestinationMinAggregateOutputType | null
    _max: DestinationMaxAggregateOutputType | null
  }

  export type DestinationMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    entrepriseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DestinationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    entrepriseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DestinationCountAggregateOutputType = {
    id: number
    name: number
    description: number
    entrepriseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DestinationMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    entrepriseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DestinationMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    entrepriseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DestinationCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    entrepriseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DestinationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Destination to aggregate.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Destinations
    **/
    _count?: true | DestinationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DestinationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DestinationMaxAggregateInputType
  }

  export type GetDestinationAggregateType<T extends DestinationAggregateArgs> = {
        [P in keyof T & keyof AggregateDestination]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDestination[P]>
      : GetScalarType<T[P], AggregateDestination[P]>
  }




  export type DestinationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinationWhereInput
    orderBy?: DestinationOrderByWithAggregationInput | DestinationOrderByWithAggregationInput[]
    by: DestinationScalarFieldEnum[] | DestinationScalarFieldEnum
    having?: DestinationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DestinationCountAggregateInputType | true
    _min?: DestinationMinAggregateInputType
    _max?: DestinationMaxAggregateInputType
  }

  export type DestinationGroupByOutputType = {
    id: string
    name: string
    description: string | null
    entrepriseId: string | null
    createdAt: Date
    updatedAt: Date
    _count: DestinationCountAggregateOutputType | null
    _min: DestinationMinAggregateOutputType | null
    _max: DestinationMaxAggregateOutputType | null
  }

  type GetDestinationGroupByPayload<T extends DestinationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DestinationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DestinationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DestinationGroupByOutputType[P]>
            : GetScalarType<T[P], DestinationGroupByOutputType[P]>
        }
      >
    >


  export type DestinationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    entrepriseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entreprise?: boolean | Destination$entrepriseArgs<ExtArgs>
    transactions?: boolean | Destination$transactionsArgs<ExtArgs>
    _count?: boolean | DestinationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destination"]>

  export type DestinationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    entrepriseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entreprise?: boolean | Destination$entrepriseArgs<ExtArgs>
  }, ExtArgs["result"]["destination"]>

  export type DestinationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    entrepriseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entreprise?: boolean | Destination$entrepriseArgs<ExtArgs>
  }, ExtArgs["result"]["destination"]>

  export type DestinationSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    entrepriseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DestinationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "entrepriseId" | "createdAt" | "updatedAt", ExtArgs["result"]["destination"]>
  export type DestinationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entreprise?: boolean | Destination$entrepriseArgs<ExtArgs>
    transactions?: boolean | Destination$transactionsArgs<ExtArgs>
    _count?: boolean | DestinationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DestinationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entreprise?: boolean | Destination$entrepriseArgs<ExtArgs>
  }
  export type DestinationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entreprise?: boolean | Destination$entrepriseArgs<ExtArgs>
  }

  export type $DestinationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Destination"
    objects: {
      entreprise: Prisma.$EntreprisePayload<ExtArgs> | null
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      entrepriseId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["destination"]>
    composites: {}
  }

  type DestinationGetPayload<S extends boolean | null | undefined | DestinationDefaultArgs> = $Result.GetResult<Prisma.$DestinationPayload, S>

  type DestinationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DestinationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DestinationCountAggregateInputType | true
    }

  export interface DestinationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Destination'], meta: { name: 'Destination' } }
    /**
     * Find zero or one Destination that matches the filter.
     * @param {DestinationFindUniqueArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DestinationFindUniqueArgs>(args: SelectSubset<T, DestinationFindUniqueArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Destination that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DestinationFindUniqueOrThrowArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DestinationFindUniqueOrThrowArgs>(args: SelectSubset<T, DestinationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Destination that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindFirstArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DestinationFindFirstArgs>(args?: SelectSubset<T, DestinationFindFirstArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Destination that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindFirstOrThrowArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DestinationFindFirstOrThrowArgs>(args?: SelectSubset<T, DestinationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Destinations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Destinations
     * const destinations = await prisma.destination.findMany()
     * 
     * // Get first 10 Destinations
     * const destinations = await prisma.destination.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const destinationWithIdOnly = await prisma.destination.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DestinationFindManyArgs>(args?: SelectSubset<T, DestinationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Destination.
     * @param {DestinationCreateArgs} args - Arguments to create a Destination.
     * @example
     * // Create one Destination
     * const Destination = await prisma.destination.create({
     *   data: {
     *     // ... data to create a Destination
     *   }
     * })
     * 
     */
    create<T extends DestinationCreateArgs>(args: SelectSubset<T, DestinationCreateArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Destinations.
     * @param {DestinationCreateManyArgs} args - Arguments to create many Destinations.
     * @example
     * // Create many Destinations
     * const destination = await prisma.destination.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DestinationCreateManyArgs>(args?: SelectSubset<T, DestinationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Destinations and returns the data saved in the database.
     * @param {DestinationCreateManyAndReturnArgs} args - Arguments to create many Destinations.
     * @example
     * // Create many Destinations
     * const destination = await prisma.destination.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Destinations and only return the `id`
     * const destinationWithIdOnly = await prisma.destination.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DestinationCreateManyAndReturnArgs>(args?: SelectSubset<T, DestinationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Destination.
     * @param {DestinationDeleteArgs} args - Arguments to delete one Destination.
     * @example
     * // Delete one Destination
     * const Destination = await prisma.destination.delete({
     *   where: {
     *     // ... filter to delete one Destination
     *   }
     * })
     * 
     */
    delete<T extends DestinationDeleteArgs>(args: SelectSubset<T, DestinationDeleteArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Destination.
     * @param {DestinationUpdateArgs} args - Arguments to update one Destination.
     * @example
     * // Update one Destination
     * const destination = await prisma.destination.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DestinationUpdateArgs>(args: SelectSubset<T, DestinationUpdateArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Destinations.
     * @param {DestinationDeleteManyArgs} args - Arguments to filter Destinations to delete.
     * @example
     * // Delete a few Destinations
     * const { count } = await prisma.destination.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DestinationDeleteManyArgs>(args?: SelectSubset<T, DestinationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Destinations
     * const destination = await prisma.destination.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DestinationUpdateManyArgs>(args: SelectSubset<T, DestinationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Destinations and returns the data updated in the database.
     * @param {DestinationUpdateManyAndReturnArgs} args - Arguments to update many Destinations.
     * @example
     * // Update many Destinations
     * const destination = await prisma.destination.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Destinations and only return the `id`
     * const destinationWithIdOnly = await prisma.destination.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DestinationUpdateManyAndReturnArgs>(args: SelectSubset<T, DestinationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Destination.
     * @param {DestinationUpsertArgs} args - Arguments to update or create a Destination.
     * @example
     * // Update or create a Destination
     * const destination = await prisma.destination.upsert({
     *   create: {
     *     // ... data to create a Destination
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Destination we want to update
     *   }
     * })
     */
    upsert<T extends DestinationUpsertArgs>(args: SelectSubset<T, DestinationUpsertArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationCountArgs} args - Arguments to filter Destinations to count.
     * @example
     * // Count the number of Destinations
     * const count = await prisma.destination.count({
     *   where: {
     *     // ... the filter for the Destinations we want to count
     *   }
     * })
    **/
    count<T extends DestinationCountArgs>(
      args?: Subset<T, DestinationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DestinationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Destination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DestinationAggregateArgs>(args: Subset<T, DestinationAggregateArgs>): Prisma.PrismaPromise<GetDestinationAggregateType<T>>

    /**
     * Group by Destination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationGroupByArgs} args - Group by arguments.
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
      T extends DestinationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DestinationGroupByArgs['orderBy'] }
        : { orderBy?: DestinationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DestinationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDestinationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Destination model
   */
  readonly fields: DestinationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Destination.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DestinationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entreprise<T extends Destination$entrepriseArgs<ExtArgs> = {}>(args?: Subset<T, Destination$entrepriseArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Destination$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Destination$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Destination model
   */
  interface DestinationFieldRefs {
    readonly id: FieldRef<"Destination", 'String'>
    readonly name: FieldRef<"Destination", 'String'>
    readonly description: FieldRef<"Destination", 'String'>
    readonly entrepriseId: FieldRef<"Destination", 'String'>
    readonly createdAt: FieldRef<"Destination", 'DateTime'>
    readonly updatedAt: FieldRef<"Destination", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Destination findUnique
   */
  export type DestinationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination findUniqueOrThrow
   */
  export type DestinationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination findFirst
   */
  export type DestinationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Destinations.
     */
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Destination findFirstOrThrow
   */
  export type DestinationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Destinations.
     */
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Destination findMany
   */
  export type DestinationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destinations to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Destination create
   */
  export type DestinationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The data needed to create a Destination.
     */
    data: XOR<DestinationCreateInput, DestinationUncheckedCreateInput>
  }

  /**
   * Destination createMany
   */
  export type DestinationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Destinations.
     */
    data: DestinationCreateManyInput | DestinationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Destination createManyAndReturn
   */
  export type DestinationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * The data used to create many Destinations.
     */
    data: DestinationCreateManyInput | DestinationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Destination update
   */
  export type DestinationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The data needed to update a Destination.
     */
    data: XOR<DestinationUpdateInput, DestinationUncheckedUpdateInput>
    /**
     * Choose, which Destination to update.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination updateMany
   */
  export type DestinationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Destinations.
     */
    data: XOR<DestinationUpdateManyMutationInput, DestinationUncheckedUpdateManyInput>
    /**
     * Filter which Destinations to update
     */
    where?: DestinationWhereInput
    /**
     * Limit how many Destinations to update.
     */
    limit?: number
  }

  /**
   * Destination updateManyAndReturn
   */
  export type DestinationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * The data used to update Destinations.
     */
    data: XOR<DestinationUpdateManyMutationInput, DestinationUncheckedUpdateManyInput>
    /**
     * Filter which Destinations to update
     */
    where?: DestinationWhereInput
    /**
     * Limit how many Destinations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Destination upsert
   */
  export type DestinationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The filter to search for the Destination to update in case it exists.
     */
    where: DestinationWhereUniqueInput
    /**
     * In case the Destination found by the `where` argument doesn't exist, create a new Destination with this data.
     */
    create: XOR<DestinationCreateInput, DestinationUncheckedCreateInput>
    /**
     * In case the Destination was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DestinationUpdateInput, DestinationUncheckedUpdateInput>
  }

  /**
   * Destination delete
   */
  export type DestinationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter which Destination to delete.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination deleteMany
   */
  export type DestinationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Destinations to delete
     */
    where?: DestinationWhereInput
    /**
     * Limit how many Destinations to delete.
     */
    limit?: number
  }

  /**
   * Destination.entreprise
   */
  export type Destination$entrepriseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    where?: EntrepriseWhereInput
  }

  /**
   * Destination.transactions
   */
  export type Destination$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Destination without action
   */
  export type DestinationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    quantity: number | null
    price: number | null
    subtotal: number | null
  }

  export type TransactionSumAggregateOutputType = {
    quantity: number | null
    price: number | null
    subtotal: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    type: $Enums.TransactionType | null
    quantity: number | null
    price: number | null
    subtotal: number | null
    productId: string | null
    entrepriseId: string | null
    destinationId: string | null
    invoiceId: string | null
    createdAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    type: $Enums.TransactionType | null
    quantity: number | null
    price: number | null
    subtotal: number | null
    productId: string | null
    entrepriseId: string | null
    destinationId: string | null
    invoiceId: string | null
    createdAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    type: number
    quantity: number
    price: number
    subtotal: number
    productId: number
    entrepriseId: number
    destinationId: number
    invoiceId: number
    createdAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    quantity?: true
    price?: true
    subtotal?: true
  }

  export type TransactionSumAggregateInputType = {
    quantity?: true
    price?: true
    subtotal?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    type?: true
    quantity?: true
    price?: true
    subtotal?: true
    productId?: true
    entrepriseId?: true
    destinationId?: true
    invoiceId?: true
    createdAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    type?: true
    quantity?: true
    price?: true
    subtotal?: true
    productId?: true
    entrepriseId?: true
    destinationId?: true
    invoiceId?: true
    createdAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    type?: true
    quantity?: true
    price?: true
    subtotal?: true
    productId?: true
    entrepriseId?: true
    destinationId?: true
    invoiceId?: true
    createdAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    type: $Enums.TransactionType
    quantity: number
    price: number
    subtotal: number
    productId: string
    entrepriseId: string | null
    destinationId: string | null
    invoiceId: string | null
    createdAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    quantity?: boolean
    price?: boolean
    subtotal?: boolean
    productId?: boolean
    entrepriseId?: boolean
    destinationId?: boolean
    invoiceId?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    entreprise?: boolean | Transaction$entrepriseArgs<ExtArgs>
    destination?: boolean | Transaction$destinationArgs<ExtArgs>
    invoice?: boolean | Transaction$invoiceArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    quantity?: boolean
    price?: boolean
    subtotal?: boolean
    productId?: boolean
    entrepriseId?: boolean
    destinationId?: boolean
    invoiceId?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    entreprise?: boolean | Transaction$entrepriseArgs<ExtArgs>
    destination?: boolean | Transaction$destinationArgs<ExtArgs>
    invoice?: boolean | Transaction$invoiceArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    quantity?: boolean
    price?: boolean
    subtotal?: boolean
    productId?: boolean
    entrepriseId?: boolean
    destinationId?: boolean
    invoiceId?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    entreprise?: boolean | Transaction$entrepriseArgs<ExtArgs>
    destination?: boolean | Transaction$destinationArgs<ExtArgs>
    invoice?: boolean | Transaction$invoiceArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    type?: boolean
    quantity?: boolean
    price?: boolean
    subtotal?: boolean
    productId?: boolean
    entrepriseId?: boolean
    destinationId?: boolean
    invoiceId?: boolean
    createdAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "quantity" | "price" | "subtotal" | "productId" | "entrepriseId" | "destinationId" | "invoiceId" | "createdAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    entreprise?: boolean | Transaction$entrepriseArgs<ExtArgs>
    destination?: boolean | Transaction$destinationArgs<ExtArgs>
    invoice?: boolean | Transaction$invoiceArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    entreprise?: boolean | Transaction$entrepriseArgs<ExtArgs>
    destination?: boolean | Transaction$destinationArgs<ExtArgs>
    invoice?: boolean | Transaction$invoiceArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    entreprise?: boolean | Transaction$entrepriseArgs<ExtArgs>
    destination?: boolean | Transaction$destinationArgs<ExtArgs>
    invoice?: boolean | Transaction$invoiceArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      entreprise: Prisma.$EntreprisePayload<ExtArgs> | null
      destination: Prisma.$DestinationPayload<ExtArgs> | null
      invoice: Prisma.$InvoicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.TransactionType
      quantity: number
      price: number
      subtotal: number
      productId: string
      entrepriseId: string | null
      destinationId: string | null
      invoiceId: string | null
      createdAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    entreprise<T extends Transaction$entrepriseArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$entrepriseArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    destination<T extends Transaction$destinationArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$destinationArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    invoice<T extends Transaction$invoiceArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$invoiceArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly type: FieldRef<"Transaction", 'TransactionType'>
    readonly quantity: FieldRef<"Transaction", 'Int'>
    readonly price: FieldRef<"Transaction", 'Float'>
    readonly subtotal: FieldRef<"Transaction", 'Float'>
    readonly productId: FieldRef<"Transaction", 'String'>
    readonly entrepriseId: FieldRef<"Transaction", 'String'>
    readonly destinationId: FieldRef<"Transaction", 'String'>
    readonly invoiceId: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction.entreprise
   */
  export type Transaction$entrepriseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    where?: EntrepriseWhereInput
  }

  /**
   * Transaction.destination
   */
  export type Transaction$destinationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    where?: DestinationWhereInput
  }

  /**
   * Transaction.invoice
   */
  export type Transaction$invoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EntrepriseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    address: 'address',
    tvaRate: 'tvaRate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EntrepriseScalarFieldEnum = (typeof EntrepriseScalarFieldEnum)[keyof typeof EntrepriseScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    entrepriseId: 'entrepriseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    invoiceNumber: 'invoiceNumber',
    date: 'date',
    status: 'status',
    subtotal: 'subtotal',
    tva: 'tva',
    totalAmount: 'totalAmount',
    clientId: 'clientId',
    entrepriseId: 'entrepriseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    reference: 'reference',
    name: 'name',
    description: 'description',
    quantity: 'quantity',
    unit: 'unit',
    price: 'price',
    imageUrl: 'imageUrl',
    categoryId: 'categoryId',
    subCategoryId: 'subCategoryId',
    entrepriseId: 'entrepriseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    entrepriseId: 'entrepriseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const SubCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    categoryId: 'categoryId',
    entrepriseId: 'entrepriseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubCategoryScalarFieldEnum = (typeof SubCategoryScalarFieldEnum)[keyof typeof SubCategoryScalarFieldEnum]


  export const DestinationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    entrepriseId: 'entrepriseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DestinationScalarFieldEnum = (typeof DestinationScalarFieldEnum)[keyof typeof DestinationScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    type: 'type',
    quantity: 'quantity',
    price: 'price',
    subtotal: 'subtotal',
    productId: 'productId',
    entrepriseId: 'entrepriseId',
    destinationId: 'destinationId',
    invoiceId: 'invoiceId',
    createdAt: 'createdAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'InvoiceStatus'
   */
  export type EnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus'>
    


  /**
   * Reference to a field of type 'InvoiceStatus[]'
   */
  export type ListEnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    
  /**
   * Deep Input Types
   */


  export type EntrepriseWhereInput = {
    AND?: EntrepriseWhereInput | EntrepriseWhereInput[]
    OR?: EntrepriseWhereInput[]
    NOT?: EntrepriseWhereInput | EntrepriseWhereInput[]
    id?: StringFilter<"Entreprise"> | string
    name?: StringFilter<"Entreprise"> | string
    email?: StringNullableFilter<"Entreprise"> | string | null
    address?: StringNullableFilter<"Entreprise"> | string | null
    tvaRate?: FloatFilter<"Entreprise"> | number
    createdAt?: DateTimeFilter<"Entreprise"> | Date | string
    updatedAt?: DateTimeFilter<"Entreprise"> | Date | string
    clients?: ClientListRelationFilter
    invoices?: InvoiceListRelationFilter
    products?: ProductListRelationFilter
    categories?: CategoryListRelationFilter
    subCategories?: SubCategoryListRelationFilter
    transactions?: TransactionListRelationFilter
    destinations?: DestinationListRelationFilter
  }

  export type EntrepriseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    tvaRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clients?: ClientOrderByRelationAggregateInput
    invoices?: InvoiceOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
    categories?: CategoryOrderByRelationAggregateInput
    subCategories?: SubCategoryOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    destinations?: DestinationOrderByRelationAggregateInput
  }

  export type EntrepriseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: EntrepriseWhereInput | EntrepriseWhereInput[]
    OR?: EntrepriseWhereInput[]
    NOT?: EntrepriseWhereInput | EntrepriseWhereInput[]
    name?: StringFilter<"Entreprise"> | string
    address?: StringNullableFilter<"Entreprise"> | string | null
    tvaRate?: FloatFilter<"Entreprise"> | number
    createdAt?: DateTimeFilter<"Entreprise"> | Date | string
    updatedAt?: DateTimeFilter<"Entreprise"> | Date | string
    clients?: ClientListRelationFilter
    invoices?: InvoiceListRelationFilter
    products?: ProductListRelationFilter
    categories?: CategoryListRelationFilter
    subCategories?: SubCategoryListRelationFilter
    transactions?: TransactionListRelationFilter
    destinations?: DestinationListRelationFilter
  }, "id" | "email">

  export type EntrepriseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    tvaRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EntrepriseCountOrderByAggregateInput
    _avg?: EntrepriseAvgOrderByAggregateInput
    _max?: EntrepriseMaxOrderByAggregateInput
    _min?: EntrepriseMinOrderByAggregateInput
    _sum?: EntrepriseSumOrderByAggregateInput
  }

  export type EntrepriseScalarWhereWithAggregatesInput = {
    AND?: EntrepriseScalarWhereWithAggregatesInput | EntrepriseScalarWhereWithAggregatesInput[]
    OR?: EntrepriseScalarWhereWithAggregatesInput[]
    NOT?: EntrepriseScalarWhereWithAggregatesInput | EntrepriseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Entreprise"> | string
    name?: StringWithAggregatesFilter<"Entreprise"> | string
    email?: StringNullableWithAggregatesFilter<"Entreprise"> | string | null
    address?: StringNullableWithAggregatesFilter<"Entreprise"> | string | null
    tvaRate?: FloatWithAggregatesFilter<"Entreprise"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Entreprise"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Entreprise"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    email?: StringNullableFilter<"Client"> | string | null
    phone?: StringNullableFilter<"Client"> | string | null
    address?: StringFilter<"Client"> | string
    entrepriseId?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    invoices?: InvoiceListRelationFilter
    entreprise?: XOR<EntrepriseNullableScalarRelationFilter, EntrepriseWhereInput> | null
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrder
    entrepriseId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invoices?: InvoiceOrderByRelationAggregateInput
    entreprise?: EntrepriseOrderByWithRelationInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    phone?: StringNullableFilter<"Client"> | string | null
    address?: StringFilter<"Client"> | string
    entrepriseId?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    invoices?: InvoiceListRelationFilter
    entreprise?: XOR<EntrepriseNullableScalarRelationFilter, EntrepriseWhereInput> | null
  }, "id" | "email">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrder
    entrepriseId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    name?: StringWithAggregatesFilter<"Client"> | string
    email?: StringNullableWithAggregatesFilter<"Client"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Client"> | string | null
    address?: StringWithAggregatesFilter<"Client"> | string
    entrepriseId?: StringNullableWithAggregatesFilter<"Client"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: StringFilter<"Invoice"> | string
    invoiceNumber?: StringFilter<"Invoice"> | string
    date?: DateTimeFilter<"Invoice"> | Date | string
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    subtotal?: FloatFilter<"Invoice"> | number
    tva?: FloatFilter<"Invoice"> | number
    totalAmount?: FloatFilter<"Invoice"> | number
    clientId?: StringFilter<"Invoice"> | string
    entrepriseId?: StringNullableFilter<"Invoice"> | string | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    entreprise?: XOR<EntrepriseNullableScalarRelationFilter, EntrepriseWhereInput> | null
    transactions?: TransactionListRelationFilter
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    invoiceNumber?: SortOrder
    date?: SortOrder
    status?: SortOrder
    subtotal?: SortOrder
    tva?: SortOrder
    totalAmount?: SortOrder
    clientId?: SortOrder
    entrepriseId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
    entreprise?: EntrepriseOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    invoiceNumber?: string
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    date?: DateTimeFilter<"Invoice"> | Date | string
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    subtotal?: FloatFilter<"Invoice"> | number
    tva?: FloatFilter<"Invoice"> | number
    totalAmount?: FloatFilter<"Invoice"> | number
    clientId?: StringFilter<"Invoice"> | string
    entrepriseId?: StringNullableFilter<"Invoice"> | string | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    entreprise?: XOR<EntrepriseNullableScalarRelationFilter, EntrepriseWhereInput> | null
    transactions?: TransactionListRelationFilter
  }, "id" | "invoiceNumber">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceNumber?: SortOrder
    date?: SortOrder
    status?: SortOrder
    subtotal?: SortOrder
    tva?: SortOrder
    totalAmount?: SortOrder
    clientId?: SortOrder
    entrepriseId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invoice"> | string
    invoiceNumber?: StringWithAggregatesFilter<"Invoice"> | string
    date?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    status?: EnumInvoiceStatusWithAggregatesFilter<"Invoice"> | $Enums.InvoiceStatus
    subtotal?: FloatWithAggregatesFilter<"Invoice"> | number
    tva?: FloatWithAggregatesFilter<"Invoice"> | number
    totalAmount?: FloatWithAggregatesFilter<"Invoice"> | number
    clientId?: StringWithAggregatesFilter<"Invoice"> | string
    entrepriseId?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    reference?: StringNullableFilter<"Product"> | string | null
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    quantity?: IntFilter<"Product"> | number
    unit?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    imageUrl?: StringFilter<"Product"> | string
    categoryId?: StringFilter<"Product"> | string
    subCategoryId?: StringNullableFilter<"Product"> | string | null
    entrepriseId?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    subCategory?: XOR<SubCategoryNullableScalarRelationFilter, SubCategoryWhereInput> | null
    entreprise?: XOR<EntrepriseNullableScalarRelationFilter, EntrepriseWhereInput> | null
    transactions?: TransactionListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    reference?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    categoryId?: SortOrder
    subCategoryId?: SortOrderInput | SortOrder
    entrepriseId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    subCategory?: SubCategoryOrderByWithRelationInput
    entreprise?: EntrepriseOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reference?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    quantity?: IntFilter<"Product"> | number
    unit?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    imageUrl?: StringFilter<"Product"> | string
    categoryId?: StringFilter<"Product"> | string
    subCategoryId?: StringNullableFilter<"Product"> | string | null
    entrepriseId?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    subCategory?: XOR<SubCategoryNullableScalarRelationFilter, SubCategoryWhereInput> | null
    entreprise?: XOR<EntrepriseNullableScalarRelationFilter, EntrepriseWhereInput> | null
    transactions?: TransactionListRelationFilter
  }, "id" | "reference">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    reference?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    categoryId?: SortOrder
    subCategoryId?: SortOrderInput | SortOrder
    entrepriseId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    reference?: StringNullableWithAggregatesFilter<"Product"> | string | null
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    quantity?: IntWithAggregatesFilter<"Product"> | number
    unit?: StringWithAggregatesFilter<"Product"> | string
    price?: FloatWithAggregatesFilter<"Product"> | number
    imageUrl?: StringWithAggregatesFilter<"Product"> | string
    categoryId?: StringWithAggregatesFilter<"Product"> | string
    subCategoryId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    entrepriseId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    entrepriseId?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    entreprise?: XOR<EntrepriseNullableScalarRelationFilter, EntrepriseWhereInput> | null
    products?: ProductListRelationFilter
    subCategories?: SubCategoryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    entrepriseId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    entreprise?: EntrepriseOrderByWithRelationInput
    products?: ProductOrderByRelationAggregateInput
    subCategories?: SubCategoryOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    entrepriseId?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    entreprise?: XOR<EntrepriseNullableScalarRelationFilter, EntrepriseWhereInput> | null
    products?: ProductListRelationFilter
    subCategories?: SubCategoryListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    entrepriseId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    entrepriseId?: StringNullableWithAggregatesFilter<"Category"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type SubCategoryWhereInput = {
    AND?: SubCategoryWhereInput | SubCategoryWhereInput[]
    OR?: SubCategoryWhereInput[]
    NOT?: SubCategoryWhereInput | SubCategoryWhereInput[]
    id?: StringFilter<"SubCategory"> | string
    name?: StringFilter<"SubCategory"> | string
    description?: StringNullableFilter<"SubCategory"> | string | null
    categoryId?: StringFilter<"SubCategory"> | string
    entrepriseId?: StringNullableFilter<"SubCategory"> | string | null
    createdAt?: DateTimeFilter<"SubCategory"> | Date | string
    updatedAt?: DateTimeFilter<"SubCategory"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    products?: ProductListRelationFilter
    entreprise?: XOR<EntrepriseNullableScalarRelationFilter, EntrepriseWhereInput> | null
  }

  export type SubCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    entrepriseId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    products?: ProductOrderByRelationAggregateInput
    entreprise?: EntrepriseOrderByWithRelationInput
  }

  export type SubCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubCategoryWhereInput | SubCategoryWhereInput[]
    OR?: SubCategoryWhereInput[]
    NOT?: SubCategoryWhereInput | SubCategoryWhereInput[]
    name?: StringFilter<"SubCategory"> | string
    description?: StringNullableFilter<"SubCategory"> | string | null
    categoryId?: StringFilter<"SubCategory"> | string
    entrepriseId?: StringNullableFilter<"SubCategory"> | string | null
    createdAt?: DateTimeFilter<"SubCategory"> | Date | string
    updatedAt?: DateTimeFilter<"SubCategory"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    products?: ProductListRelationFilter
    entreprise?: XOR<EntrepriseNullableScalarRelationFilter, EntrepriseWhereInput> | null
  }, "id">

  export type SubCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    entrepriseId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubCategoryCountOrderByAggregateInput
    _max?: SubCategoryMaxOrderByAggregateInput
    _min?: SubCategoryMinOrderByAggregateInput
  }

  export type SubCategoryScalarWhereWithAggregatesInput = {
    AND?: SubCategoryScalarWhereWithAggregatesInput | SubCategoryScalarWhereWithAggregatesInput[]
    OR?: SubCategoryScalarWhereWithAggregatesInput[]
    NOT?: SubCategoryScalarWhereWithAggregatesInput | SubCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubCategory"> | string
    name?: StringWithAggregatesFilter<"SubCategory"> | string
    description?: StringNullableWithAggregatesFilter<"SubCategory"> | string | null
    categoryId?: StringWithAggregatesFilter<"SubCategory"> | string
    entrepriseId?: StringNullableWithAggregatesFilter<"SubCategory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SubCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SubCategory"> | Date | string
  }

  export type DestinationWhereInput = {
    AND?: DestinationWhereInput | DestinationWhereInput[]
    OR?: DestinationWhereInput[]
    NOT?: DestinationWhereInput | DestinationWhereInput[]
    id?: StringFilter<"Destination"> | string
    name?: StringFilter<"Destination"> | string
    description?: StringNullableFilter<"Destination"> | string | null
    entrepriseId?: StringNullableFilter<"Destination"> | string | null
    createdAt?: DateTimeFilter<"Destination"> | Date | string
    updatedAt?: DateTimeFilter<"Destination"> | Date | string
    entreprise?: XOR<EntrepriseNullableScalarRelationFilter, EntrepriseWhereInput> | null
    transactions?: TransactionListRelationFilter
  }

  export type DestinationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    entrepriseId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    entreprise?: EntrepriseOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type DestinationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DestinationWhereInput | DestinationWhereInput[]
    OR?: DestinationWhereInput[]
    NOT?: DestinationWhereInput | DestinationWhereInput[]
    name?: StringFilter<"Destination"> | string
    description?: StringNullableFilter<"Destination"> | string | null
    entrepriseId?: StringNullableFilter<"Destination"> | string | null
    createdAt?: DateTimeFilter<"Destination"> | Date | string
    updatedAt?: DateTimeFilter<"Destination"> | Date | string
    entreprise?: XOR<EntrepriseNullableScalarRelationFilter, EntrepriseWhereInput> | null
    transactions?: TransactionListRelationFilter
  }, "id">

  export type DestinationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    entrepriseId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DestinationCountOrderByAggregateInput
    _max?: DestinationMaxOrderByAggregateInput
    _min?: DestinationMinOrderByAggregateInput
  }

  export type DestinationScalarWhereWithAggregatesInput = {
    AND?: DestinationScalarWhereWithAggregatesInput | DestinationScalarWhereWithAggregatesInput[]
    OR?: DestinationScalarWhereWithAggregatesInput[]
    NOT?: DestinationScalarWhereWithAggregatesInput | DestinationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Destination"> | string
    name?: StringWithAggregatesFilter<"Destination"> | string
    description?: StringNullableWithAggregatesFilter<"Destination"> | string | null
    entrepriseId?: StringNullableWithAggregatesFilter<"Destination"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Destination"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Destination"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    quantity?: IntFilter<"Transaction"> | number
    price?: FloatFilter<"Transaction"> | number
    subtotal?: FloatFilter<"Transaction"> | number
    productId?: StringFilter<"Transaction"> | string
    entrepriseId?: StringNullableFilter<"Transaction"> | string | null
    destinationId?: StringNullableFilter<"Transaction"> | string | null
    invoiceId?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    entreprise?: XOR<EntrepriseNullableScalarRelationFilter, EntrepriseWhereInput> | null
    destination?: XOR<DestinationNullableScalarRelationFilter, DestinationWhereInput> | null
    invoice?: XOR<InvoiceNullableScalarRelationFilter, InvoiceWhereInput> | null
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    subtotal?: SortOrder
    productId?: SortOrder
    entrepriseId?: SortOrderInput | SortOrder
    destinationId?: SortOrderInput | SortOrder
    invoiceId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    entreprise?: EntrepriseOrderByWithRelationInput
    destination?: DestinationOrderByWithRelationInput
    invoice?: InvoiceOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    quantity?: IntFilter<"Transaction"> | number
    price?: FloatFilter<"Transaction"> | number
    subtotal?: FloatFilter<"Transaction"> | number
    productId?: StringFilter<"Transaction"> | string
    entrepriseId?: StringNullableFilter<"Transaction"> | string | null
    destinationId?: StringNullableFilter<"Transaction"> | string | null
    invoiceId?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    entreprise?: XOR<EntrepriseNullableScalarRelationFilter, EntrepriseWhereInput> | null
    destination?: XOR<DestinationNullableScalarRelationFilter, DestinationWhereInput> | null
    invoice?: XOR<InvoiceNullableScalarRelationFilter, InvoiceWhereInput> | null
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    subtotal?: SortOrder
    productId?: SortOrder
    entrepriseId?: SortOrderInput | SortOrder
    destinationId?: SortOrderInput | SortOrder
    invoiceId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    type?: EnumTransactionTypeWithAggregatesFilter<"Transaction"> | $Enums.TransactionType
    quantity?: IntWithAggregatesFilter<"Transaction"> | number
    price?: FloatWithAggregatesFilter<"Transaction"> | number
    subtotal?: FloatWithAggregatesFilter<"Transaction"> | number
    productId?: StringWithAggregatesFilter<"Transaction"> | string
    entrepriseId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    destinationId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    invoiceId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type EntrepriseCreateInput = {
    id?: string
    name: string
    email?: string | null
    address?: string | null
    tvaRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientCreateNestedManyWithoutEntrepriseInput
    invoices?: InvoiceCreateNestedManyWithoutEntrepriseInput
    products?: ProductCreateNestedManyWithoutEntrepriseInput
    categories?: CategoryCreateNestedManyWithoutEntrepriseInput
    subCategories?: SubCategoryCreateNestedManyWithoutEntrepriseInput
    transactions?: TransactionCreateNestedManyWithoutEntrepriseInput
    destinations?: DestinationCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseUncheckedCreateInput = {
    id?: string
    name: string
    email?: string | null
    address?: string | null
    tvaRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientUncheckedCreateNestedManyWithoutEntrepriseInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutEntrepriseInput
    products?: ProductUncheckedCreateNestedManyWithoutEntrepriseInput
    categories?: CategoryUncheckedCreateNestedManyWithoutEntrepriseInput
    subCategories?: SubCategoryUncheckedCreateNestedManyWithoutEntrepriseInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutEntrepriseInput
    destinations?: DestinationUncheckedCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    tvaRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUpdateManyWithoutEntrepriseNestedInput
    invoices?: InvoiceUpdateManyWithoutEntrepriseNestedInput
    products?: ProductUpdateManyWithoutEntrepriseNestedInput
    categories?: CategoryUpdateManyWithoutEntrepriseNestedInput
    subCategories?: SubCategoryUpdateManyWithoutEntrepriseNestedInput
    transactions?: TransactionUpdateManyWithoutEntrepriseNestedInput
    destinations?: DestinationUpdateManyWithoutEntrepriseNestedInput
  }

  export type EntrepriseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    tvaRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUncheckedUpdateManyWithoutEntrepriseNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutEntrepriseNestedInput
    products?: ProductUncheckedUpdateManyWithoutEntrepriseNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutEntrepriseNestedInput
    subCategories?: SubCategoryUncheckedUpdateManyWithoutEntrepriseNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutEntrepriseNestedInput
    destinations?: DestinationUncheckedUpdateManyWithoutEntrepriseNestedInput
  }

  export type EntrepriseCreateManyInput = {
    id?: string
    name: string
    email?: string | null
    address?: string | null
    tvaRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EntrepriseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    tvaRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntrepriseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    tvaRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceCreateNestedManyWithoutClientInput
    entreprise?: EntrepriseCreateNestedOneWithoutClientsInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    address: string
    entrepriseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUpdateManyWithoutClientNestedInput
    entreprise?: EntrepriseUpdateOneWithoutClientsNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    address: string
    entrepriseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateInput = {
    id?: string
    invoiceNumber: string
    date?: Date | string
    status?: $Enums.InvoiceStatus
    subtotal: number
    tva?: number
    totalAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutInvoicesInput
    entreprise?: EntrepriseCreateNestedOneWithoutInvoicesInput
    transactions?: TransactionCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: string
    invoiceNumber: string
    date?: Date | string
    status?: $Enums.InvoiceStatus
    subtotal: number
    tva?: number
    totalAmount: number
    clientId: string
    entrepriseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    tva?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutInvoicesNestedInput
    entreprise?: EntrepriseUpdateOneWithoutInvoicesNestedInput
    transactions?: TransactionUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    tva?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceCreateManyInput = {
    id?: string
    invoiceNumber: string
    date?: Date | string
    status?: $Enums.InvoiceStatus
    subtotal: number
    tva?: number
    totalAmount: number
    clientId: string
    entrepriseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    tva?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    tva?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    reference?: string | null
    name: string
    description: string
    quantity?: number
    unit: string
    price: number
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    subCategory?: SubCategoryCreateNestedOneWithoutProductsInput
    entreprise?: EntrepriseCreateNestedOneWithoutProductsInput
    transactions?: TransactionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    reference?: string | null
    name: string
    description: string
    quantity?: number
    unit: string
    price: number
    imageUrl: string
    categoryId: string
    subCategoryId?: string | null
    entrepriseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    subCategory?: SubCategoryUpdateOneWithoutProductsNestedInput
    entreprise?: EntrepriseUpdateOneWithoutProductsNestedInput
    transactions?: TransactionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    subCategoryId?: NullableStringFieldUpdateOperationsInput | string | null
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    reference?: string | null
    name: string
    description: string
    quantity?: number
    unit: string
    price: number
    imageUrl: string
    categoryId: string
    subCategoryId?: string | null
    entrepriseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    subCategoryId?: NullableStringFieldUpdateOperationsInput | string | null
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entreprise?: EntrepriseCreateNestedOneWithoutCategoriesInput
    products?: ProductCreateNestedManyWithoutCategoryInput
    subCategories?: SubCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    entrepriseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
    subCategories?: SubCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entreprise?: EntrepriseUpdateOneWithoutCategoriesNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
    subCategories?: SubCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
    subCategories?: SubCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    entrepriseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutSubCategoriesInput
    products?: ProductCreateNestedManyWithoutSubCategoryInput
    entreprise?: EntrepriseCreateNestedOneWithoutSubCategoriesInput
  }

  export type SubCategoryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    categoryId: string
    entrepriseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutSubCategoryInput
  }

  export type SubCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput
    products?: ProductUpdateManyWithoutSubCategoryNestedInput
    entreprise?: EntrepriseUpdateOneWithoutSubCategoriesNestedInput
  }

  export type SubCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutSubCategoryNestedInput
  }

  export type SubCategoryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    categoryId: string
    entrepriseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entreprise?: EntrepriseCreateNestedOneWithoutDestinationsInput
    transactions?: TransactionCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    entrepriseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entreprise?: EntrepriseUpdateOneWithoutDestinationsNestedInput
    transactions?: TransactionUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    entrepriseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DestinationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    type: $Enums.TransactionType
    quantity: number
    price: number
    subtotal: number
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutTransactionsInput
    entreprise?: EntrepriseCreateNestedOneWithoutTransactionsInput
    destination?: DestinationCreateNestedOneWithoutTransactionsInput
    invoice?: InvoiceCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    type: $Enums.TransactionType
    quantity: number
    price: number
    subtotal: number
    productId: string
    entrepriseId?: string | null
    destinationId?: string | null
    invoiceId?: string | null
    createdAt?: Date | string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutTransactionsNestedInput
    entreprise?: EntrepriseUpdateOneWithoutTransactionsNestedInput
    destination?: DestinationUpdateOneWithoutTransactionsNestedInput
    invoice?: InvoiceUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    destinationId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    type: $Enums.TransactionType
    quantity: number
    price: number
    subtotal: number
    productId: string
    entrepriseId?: string | null
    destinationId?: string | null
    invoiceId?: string | null
    createdAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    destinationId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ClientListRelationFilter = {
    every?: ClientWhereInput
    some?: ClientWhereInput
    none?: ClientWhereInput
  }

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type SubCategoryListRelationFilter = {
    every?: SubCategoryWhereInput
    some?: SubCategoryWhereInput
    none?: SubCategoryWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type DestinationListRelationFilter = {
    every?: DestinationWhereInput
    some?: DestinationWhereInput
    none?: DestinationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DestinationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EntrepriseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    tvaRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EntrepriseAvgOrderByAggregateInput = {
    tvaRate?: SortOrder
  }

  export type EntrepriseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    tvaRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EntrepriseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    tvaRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EntrepriseSumOrderByAggregateInput = {
    tvaRate?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EntrepriseNullableScalarRelationFilter = {
    is?: EntrepriseWhereInput | null
    isNot?: EntrepriseWhereInput | null
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    entrepriseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    entrepriseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    entrepriseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceNumber?: SortOrder
    date?: SortOrder
    status?: SortOrder
    subtotal?: SortOrder
    tva?: SortOrder
    totalAmount?: SortOrder
    clientId?: SortOrder
    entrepriseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    subtotal?: SortOrder
    tva?: SortOrder
    totalAmount?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceNumber?: SortOrder
    date?: SortOrder
    status?: SortOrder
    subtotal?: SortOrder
    tva?: SortOrder
    totalAmount?: SortOrder
    clientId?: SortOrder
    entrepriseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceNumber?: SortOrder
    date?: SortOrder
    status?: SortOrder
    subtotal?: SortOrder
    tva?: SortOrder
    totalAmount?: SortOrder
    clientId?: SortOrder
    entrepriseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    subtotal?: SortOrder
    tva?: SortOrder
    totalAmount?: SortOrder
  }

  export type EnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type SubCategoryNullableScalarRelationFilter = {
    is?: SubCategoryWhereInput | null
    isNot?: SubCategoryWhereInput | null
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    categoryId?: SortOrder
    subCategoryId?: SortOrder
    entrepriseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    categoryId?: SortOrder
    subCategoryId?: SortOrder
    entrepriseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    categoryId?: SortOrder
    subCategoryId?: SortOrder
    entrepriseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    entrepriseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    entrepriseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    entrepriseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    entrepriseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    entrepriseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    entrepriseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DestinationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    entrepriseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DestinationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    entrepriseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DestinationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    entrepriseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type DestinationNullableScalarRelationFilter = {
    is?: DestinationWhereInput | null
    isNot?: DestinationWhereInput | null
  }

  export type InvoiceNullableScalarRelationFilter = {
    is?: InvoiceWhereInput | null
    isNot?: InvoiceWhereInput | null
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    subtotal?: SortOrder
    productId?: SortOrder
    entrepriseId?: SortOrder
    destinationId?: SortOrder
    invoiceId?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    subtotal?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    subtotal?: SortOrder
    productId?: SortOrder
    entrepriseId?: SortOrder
    destinationId?: SortOrder
    invoiceId?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    subtotal?: SortOrder
    productId?: SortOrder
    entrepriseId?: SortOrder
    destinationId?: SortOrder
    invoiceId?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    subtotal?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type ClientCreateNestedManyWithoutEntrepriseInput = {
    create?: XOR<ClientCreateWithoutEntrepriseInput, ClientUncheckedCreateWithoutEntrepriseInput> | ClientCreateWithoutEntrepriseInput[] | ClientUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutEntrepriseInput | ClientCreateOrConnectWithoutEntrepriseInput[]
    createMany?: ClientCreateManyEntrepriseInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type InvoiceCreateNestedManyWithoutEntrepriseInput = {
    create?: XOR<InvoiceCreateWithoutEntrepriseInput, InvoiceUncheckedCreateWithoutEntrepriseInput> | InvoiceCreateWithoutEntrepriseInput[] | InvoiceUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutEntrepriseInput | InvoiceCreateOrConnectWithoutEntrepriseInput[]
    createMany?: InvoiceCreateManyEntrepriseInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutEntrepriseInput = {
    create?: XOR<ProductCreateWithoutEntrepriseInput, ProductUncheckedCreateWithoutEntrepriseInput> | ProductCreateWithoutEntrepriseInput[] | ProductUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutEntrepriseInput | ProductCreateOrConnectWithoutEntrepriseInput[]
    createMany?: ProductCreateManyEntrepriseInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type CategoryCreateNestedManyWithoutEntrepriseInput = {
    create?: XOR<CategoryCreateWithoutEntrepriseInput, CategoryUncheckedCreateWithoutEntrepriseInput> | CategoryCreateWithoutEntrepriseInput[] | CategoryUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutEntrepriseInput | CategoryCreateOrConnectWithoutEntrepriseInput[]
    createMany?: CategoryCreateManyEntrepriseInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type SubCategoryCreateNestedManyWithoutEntrepriseInput = {
    create?: XOR<SubCategoryCreateWithoutEntrepriseInput, SubCategoryUncheckedCreateWithoutEntrepriseInput> | SubCategoryCreateWithoutEntrepriseInput[] | SubCategoryUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutEntrepriseInput | SubCategoryCreateOrConnectWithoutEntrepriseInput[]
    createMany?: SubCategoryCreateManyEntrepriseInputEnvelope
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutEntrepriseInput = {
    create?: XOR<TransactionCreateWithoutEntrepriseInput, TransactionUncheckedCreateWithoutEntrepriseInput> | TransactionCreateWithoutEntrepriseInput[] | TransactionUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutEntrepriseInput | TransactionCreateOrConnectWithoutEntrepriseInput[]
    createMany?: TransactionCreateManyEntrepriseInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type DestinationCreateNestedManyWithoutEntrepriseInput = {
    create?: XOR<DestinationCreateWithoutEntrepriseInput, DestinationUncheckedCreateWithoutEntrepriseInput> | DestinationCreateWithoutEntrepriseInput[] | DestinationUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: DestinationCreateOrConnectWithoutEntrepriseInput | DestinationCreateOrConnectWithoutEntrepriseInput[]
    createMany?: DestinationCreateManyEntrepriseInputEnvelope
    connect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
  }

  export type ClientUncheckedCreateNestedManyWithoutEntrepriseInput = {
    create?: XOR<ClientCreateWithoutEntrepriseInput, ClientUncheckedCreateWithoutEntrepriseInput> | ClientCreateWithoutEntrepriseInput[] | ClientUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutEntrepriseInput | ClientCreateOrConnectWithoutEntrepriseInput[]
    createMany?: ClientCreateManyEntrepriseInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutEntrepriseInput = {
    create?: XOR<InvoiceCreateWithoutEntrepriseInput, InvoiceUncheckedCreateWithoutEntrepriseInput> | InvoiceCreateWithoutEntrepriseInput[] | InvoiceUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutEntrepriseInput | InvoiceCreateOrConnectWithoutEntrepriseInput[]
    createMany?: InvoiceCreateManyEntrepriseInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutEntrepriseInput = {
    create?: XOR<ProductCreateWithoutEntrepriseInput, ProductUncheckedCreateWithoutEntrepriseInput> | ProductCreateWithoutEntrepriseInput[] | ProductUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutEntrepriseInput | ProductCreateOrConnectWithoutEntrepriseInput[]
    createMany?: ProductCreateManyEntrepriseInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutEntrepriseInput = {
    create?: XOR<CategoryCreateWithoutEntrepriseInput, CategoryUncheckedCreateWithoutEntrepriseInput> | CategoryCreateWithoutEntrepriseInput[] | CategoryUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutEntrepriseInput | CategoryCreateOrConnectWithoutEntrepriseInput[]
    createMany?: CategoryCreateManyEntrepriseInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type SubCategoryUncheckedCreateNestedManyWithoutEntrepriseInput = {
    create?: XOR<SubCategoryCreateWithoutEntrepriseInput, SubCategoryUncheckedCreateWithoutEntrepriseInput> | SubCategoryCreateWithoutEntrepriseInput[] | SubCategoryUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutEntrepriseInput | SubCategoryCreateOrConnectWithoutEntrepriseInput[]
    createMany?: SubCategoryCreateManyEntrepriseInputEnvelope
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutEntrepriseInput = {
    create?: XOR<TransactionCreateWithoutEntrepriseInput, TransactionUncheckedCreateWithoutEntrepriseInput> | TransactionCreateWithoutEntrepriseInput[] | TransactionUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutEntrepriseInput | TransactionCreateOrConnectWithoutEntrepriseInput[]
    createMany?: TransactionCreateManyEntrepriseInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type DestinationUncheckedCreateNestedManyWithoutEntrepriseInput = {
    create?: XOR<DestinationCreateWithoutEntrepriseInput, DestinationUncheckedCreateWithoutEntrepriseInput> | DestinationCreateWithoutEntrepriseInput[] | DestinationUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: DestinationCreateOrConnectWithoutEntrepriseInput | DestinationCreateOrConnectWithoutEntrepriseInput[]
    createMany?: DestinationCreateManyEntrepriseInputEnvelope
    connect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClientUpdateManyWithoutEntrepriseNestedInput = {
    create?: XOR<ClientCreateWithoutEntrepriseInput, ClientUncheckedCreateWithoutEntrepriseInput> | ClientCreateWithoutEntrepriseInput[] | ClientUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutEntrepriseInput | ClientCreateOrConnectWithoutEntrepriseInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutEntrepriseInput | ClientUpsertWithWhereUniqueWithoutEntrepriseInput[]
    createMany?: ClientCreateManyEntrepriseInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutEntrepriseInput | ClientUpdateWithWhereUniqueWithoutEntrepriseInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutEntrepriseInput | ClientUpdateManyWithWhereWithoutEntrepriseInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type InvoiceUpdateManyWithoutEntrepriseNestedInput = {
    create?: XOR<InvoiceCreateWithoutEntrepriseInput, InvoiceUncheckedCreateWithoutEntrepriseInput> | InvoiceCreateWithoutEntrepriseInput[] | InvoiceUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutEntrepriseInput | InvoiceCreateOrConnectWithoutEntrepriseInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutEntrepriseInput | InvoiceUpsertWithWhereUniqueWithoutEntrepriseInput[]
    createMany?: InvoiceCreateManyEntrepriseInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutEntrepriseInput | InvoiceUpdateWithWhereUniqueWithoutEntrepriseInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutEntrepriseInput | InvoiceUpdateManyWithWhereWithoutEntrepriseInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutEntrepriseNestedInput = {
    create?: XOR<ProductCreateWithoutEntrepriseInput, ProductUncheckedCreateWithoutEntrepriseInput> | ProductCreateWithoutEntrepriseInput[] | ProductUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutEntrepriseInput | ProductCreateOrConnectWithoutEntrepriseInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutEntrepriseInput | ProductUpsertWithWhereUniqueWithoutEntrepriseInput[]
    createMany?: ProductCreateManyEntrepriseInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutEntrepriseInput | ProductUpdateWithWhereUniqueWithoutEntrepriseInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutEntrepriseInput | ProductUpdateManyWithWhereWithoutEntrepriseInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CategoryUpdateManyWithoutEntrepriseNestedInput = {
    create?: XOR<CategoryCreateWithoutEntrepriseInput, CategoryUncheckedCreateWithoutEntrepriseInput> | CategoryCreateWithoutEntrepriseInput[] | CategoryUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutEntrepriseInput | CategoryCreateOrConnectWithoutEntrepriseInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutEntrepriseInput | CategoryUpsertWithWhereUniqueWithoutEntrepriseInput[]
    createMany?: CategoryCreateManyEntrepriseInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutEntrepriseInput | CategoryUpdateWithWhereUniqueWithoutEntrepriseInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutEntrepriseInput | CategoryUpdateManyWithWhereWithoutEntrepriseInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type SubCategoryUpdateManyWithoutEntrepriseNestedInput = {
    create?: XOR<SubCategoryCreateWithoutEntrepriseInput, SubCategoryUncheckedCreateWithoutEntrepriseInput> | SubCategoryCreateWithoutEntrepriseInput[] | SubCategoryUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutEntrepriseInput | SubCategoryCreateOrConnectWithoutEntrepriseInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutEntrepriseInput | SubCategoryUpsertWithWhereUniqueWithoutEntrepriseInput[]
    createMany?: SubCategoryCreateManyEntrepriseInputEnvelope
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutEntrepriseInput | SubCategoryUpdateWithWhereUniqueWithoutEntrepriseInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutEntrepriseInput | SubCategoryUpdateManyWithWhereWithoutEntrepriseInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutEntrepriseNestedInput = {
    create?: XOR<TransactionCreateWithoutEntrepriseInput, TransactionUncheckedCreateWithoutEntrepriseInput> | TransactionCreateWithoutEntrepriseInput[] | TransactionUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutEntrepriseInput | TransactionCreateOrConnectWithoutEntrepriseInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutEntrepriseInput | TransactionUpsertWithWhereUniqueWithoutEntrepriseInput[]
    createMany?: TransactionCreateManyEntrepriseInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutEntrepriseInput | TransactionUpdateWithWhereUniqueWithoutEntrepriseInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutEntrepriseInput | TransactionUpdateManyWithWhereWithoutEntrepriseInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type DestinationUpdateManyWithoutEntrepriseNestedInput = {
    create?: XOR<DestinationCreateWithoutEntrepriseInput, DestinationUncheckedCreateWithoutEntrepriseInput> | DestinationCreateWithoutEntrepriseInput[] | DestinationUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: DestinationCreateOrConnectWithoutEntrepriseInput | DestinationCreateOrConnectWithoutEntrepriseInput[]
    upsert?: DestinationUpsertWithWhereUniqueWithoutEntrepriseInput | DestinationUpsertWithWhereUniqueWithoutEntrepriseInput[]
    createMany?: DestinationCreateManyEntrepriseInputEnvelope
    set?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    disconnect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    delete?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    connect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    update?: DestinationUpdateWithWhereUniqueWithoutEntrepriseInput | DestinationUpdateWithWhereUniqueWithoutEntrepriseInput[]
    updateMany?: DestinationUpdateManyWithWhereWithoutEntrepriseInput | DestinationUpdateManyWithWhereWithoutEntrepriseInput[]
    deleteMany?: DestinationScalarWhereInput | DestinationScalarWhereInput[]
  }

  export type ClientUncheckedUpdateManyWithoutEntrepriseNestedInput = {
    create?: XOR<ClientCreateWithoutEntrepriseInput, ClientUncheckedCreateWithoutEntrepriseInput> | ClientCreateWithoutEntrepriseInput[] | ClientUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutEntrepriseInput | ClientCreateOrConnectWithoutEntrepriseInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutEntrepriseInput | ClientUpsertWithWhereUniqueWithoutEntrepriseInput[]
    createMany?: ClientCreateManyEntrepriseInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutEntrepriseInput | ClientUpdateWithWhereUniqueWithoutEntrepriseInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutEntrepriseInput | ClientUpdateManyWithWhereWithoutEntrepriseInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutEntrepriseNestedInput = {
    create?: XOR<InvoiceCreateWithoutEntrepriseInput, InvoiceUncheckedCreateWithoutEntrepriseInput> | InvoiceCreateWithoutEntrepriseInput[] | InvoiceUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutEntrepriseInput | InvoiceCreateOrConnectWithoutEntrepriseInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutEntrepriseInput | InvoiceUpsertWithWhereUniqueWithoutEntrepriseInput[]
    createMany?: InvoiceCreateManyEntrepriseInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutEntrepriseInput | InvoiceUpdateWithWhereUniqueWithoutEntrepriseInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutEntrepriseInput | InvoiceUpdateManyWithWhereWithoutEntrepriseInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutEntrepriseNestedInput = {
    create?: XOR<ProductCreateWithoutEntrepriseInput, ProductUncheckedCreateWithoutEntrepriseInput> | ProductCreateWithoutEntrepriseInput[] | ProductUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutEntrepriseInput | ProductCreateOrConnectWithoutEntrepriseInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutEntrepriseInput | ProductUpsertWithWhereUniqueWithoutEntrepriseInput[]
    createMany?: ProductCreateManyEntrepriseInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutEntrepriseInput | ProductUpdateWithWhereUniqueWithoutEntrepriseInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutEntrepriseInput | ProductUpdateManyWithWhereWithoutEntrepriseInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutEntrepriseNestedInput = {
    create?: XOR<CategoryCreateWithoutEntrepriseInput, CategoryUncheckedCreateWithoutEntrepriseInput> | CategoryCreateWithoutEntrepriseInput[] | CategoryUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutEntrepriseInput | CategoryCreateOrConnectWithoutEntrepriseInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutEntrepriseInput | CategoryUpsertWithWhereUniqueWithoutEntrepriseInput[]
    createMany?: CategoryCreateManyEntrepriseInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutEntrepriseInput | CategoryUpdateWithWhereUniqueWithoutEntrepriseInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutEntrepriseInput | CategoryUpdateManyWithWhereWithoutEntrepriseInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type SubCategoryUncheckedUpdateManyWithoutEntrepriseNestedInput = {
    create?: XOR<SubCategoryCreateWithoutEntrepriseInput, SubCategoryUncheckedCreateWithoutEntrepriseInput> | SubCategoryCreateWithoutEntrepriseInput[] | SubCategoryUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutEntrepriseInput | SubCategoryCreateOrConnectWithoutEntrepriseInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutEntrepriseInput | SubCategoryUpsertWithWhereUniqueWithoutEntrepriseInput[]
    createMany?: SubCategoryCreateManyEntrepriseInputEnvelope
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutEntrepriseInput | SubCategoryUpdateWithWhereUniqueWithoutEntrepriseInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutEntrepriseInput | SubCategoryUpdateManyWithWhereWithoutEntrepriseInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutEntrepriseNestedInput = {
    create?: XOR<TransactionCreateWithoutEntrepriseInput, TransactionUncheckedCreateWithoutEntrepriseInput> | TransactionCreateWithoutEntrepriseInput[] | TransactionUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutEntrepriseInput | TransactionCreateOrConnectWithoutEntrepriseInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutEntrepriseInput | TransactionUpsertWithWhereUniqueWithoutEntrepriseInput[]
    createMany?: TransactionCreateManyEntrepriseInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutEntrepriseInput | TransactionUpdateWithWhereUniqueWithoutEntrepriseInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutEntrepriseInput | TransactionUpdateManyWithWhereWithoutEntrepriseInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type DestinationUncheckedUpdateManyWithoutEntrepriseNestedInput = {
    create?: XOR<DestinationCreateWithoutEntrepriseInput, DestinationUncheckedCreateWithoutEntrepriseInput> | DestinationCreateWithoutEntrepriseInput[] | DestinationUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: DestinationCreateOrConnectWithoutEntrepriseInput | DestinationCreateOrConnectWithoutEntrepriseInput[]
    upsert?: DestinationUpsertWithWhereUniqueWithoutEntrepriseInput | DestinationUpsertWithWhereUniqueWithoutEntrepriseInput[]
    createMany?: DestinationCreateManyEntrepriseInputEnvelope
    set?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    disconnect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    delete?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    connect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    update?: DestinationUpdateWithWhereUniqueWithoutEntrepriseInput | DestinationUpdateWithWhereUniqueWithoutEntrepriseInput[]
    updateMany?: DestinationUpdateManyWithWhereWithoutEntrepriseInput | DestinationUpdateManyWithWhereWithoutEntrepriseInput[]
    deleteMany?: DestinationScalarWhereInput | DestinationScalarWhereInput[]
  }

  export type InvoiceCreateNestedManyWithoutClientInput = {
    create?: XOR<InvoiceCreateWithoutClientInput, InvoiceUncheckedCreateWithoutClientInput> | InvoiceCreateWithoutClientInput[] | InvoiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutClientInput | InvoiceCreateOrConnectWithoutClientInput[]
    createMany?: InvoiceCreateManyClientInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type EntrepriseCreateNestedOneWithoutClientsInput = {
    create?: XOR<EntrepriseCreateWithoutClientsInput, EntrepriseUncheckedCreateWithoutClientsInput>
    connectOrCreate?: EntrepriseCreateOrConnectWithoutClientsInput
    connect?: EntrepriseWhereUniqueInput
  }

  export type InvoiceUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<InvoiceCreateWithoutClientInput, InvoiceUncheckedCreateWithoutClientInput> | InvoiceCreateWithoutClientInput[] | InvoiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutClientInput | InvoiceCreateOrConnectWithoutClientInput[]
    createMany?: InvoiceCreateManyClientInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type InvoiceUpdateManyWithoutClientNestedInput = {
    create?: XOR<InvoiceCreateWithoutClientInput, InvoiceUncheckedCreateWithoutClientInput> | InvoiceCreateWithoutClientInput[] | InvoiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutClientInput | InvoiceCreateOrConnectWithoutClientInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutClientInput | InvoiceUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: InvoiceCreateManyClientInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutClientInput | InvoiceUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutClientInput | InvoiceUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type EntrepriseUpdateOneWithoutClientsNestedInput = {
    create?: XOR<EntrepriseCreateWithoutClientsInput, EntrepriseUncheckedCreateWithoutClientsInput>
    connectOrCreate?: EntrepriseCreateOrConnectWithoutClientsInput
    upsert?: EntrepriseUpsertWithoutClientsInput
    disconnect?: EntrepriseWhereInput | boolean
    delete?: EntrepriseWhereInput | boolean
    connect?: EntrepriseWhereUniqueInput
    update?: XOR<XOR<EntrepriseUpdateToOneWithWhereWithoutClientsInput, EntrepriseUpdateWithoutClientsInput>, EntrepriseUncheckedUpdateWithoutClientsInput>
  }

  export type InvoiceUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<InvoiceCreateWithoutClientInput, InvoiceUncheckedCreateWithoutClientInput> | InvoiceCreateWithoutClientInput[] | InvoiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutClientInput | InvoiceCreateOrConnectWithoutClientInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutClientInput | InvoiceUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: InvoiceCreateManyClientInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutClientInput | InvoiceUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutClientInput | InvoiceUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<ClientCreateWithoutInvoicesInput, ClientUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutInvoicesInput
    connect?: ClientWhereUniqueInput
  }

  export type EntrepriseCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<EntrepriseCreateWithoutInvoicesInput, EntrepriseUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: EntrepriseCreateOrConnectWithoutInvoicesInput
    connect?: EntrepriseWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<TransactionCreateWithoutInvoiceInput, TransactionUncheckedCreateWithoutInvoiceInput> | TransactionCreateWithoutInvoiceInput[] | TransactionUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutInvoiceInput | TransactionCreateOrConnectWithoutInvoiceInput[]
    createMany?: TransactionCreateManyInvoiceInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<TransactionCreateWithoutInvoiceInput, TransactionUncheckedCreateWithoutInvoiceInput> | TransactionCreateWithoutInvoiceInput[] | TransactionUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutInvoiceInput | TransactionCreateOrConnectWithoutInvoiceInput[]
    createMany?: TransactionCreateManyInvoiceInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type EnumInvoiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvoiceStatus
  }

  export type ClientUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<ClientCreateWithoutInvoicesInput, ClientUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutInvoicesInput
    upsert?: ClientUpsertWithoutInvoicesInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutInvoicesInput, ClientUpdateWithoutInvoicesInput>, ClientUncheckedUpdateWithoutInvoicesInput>
  }

  export type EntrepriseUpdateOneWithoutInvoicesNestedInput = {
    create?: XOR<EntrepriseCreateWithoutInvoicesInput, EntrepriseUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: EntrepriseCreateOrConnectWithoutInvoicesInput
    upsert?: EntrepriseUpsertWithoutInvoicesInput
    disconnect?: EntrepriseWhereInput | boolean
    delete?: EntrepriseWhereInput | boolean
    connect?: EntrepriseWhereUniqueInput
    update?: XOR<XOR<EntrepriseUpdateToOneWithWhereWithoutInvoicesInput, EntrepriseUpdateWithoutInvoicesInput>, EntrepriseUncheckedUpdateWithoutInvoicesInput>
  }

  export type TransactionUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<TransactionCreateWithoutInvoiceInput, TransactionUncheckedCreateWithoutInvoiceInput> | TransactionCreateWithoutInvoiceInput[] | TransactionUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutInvoiceInput | TransactionCreateOrConnectWithoutInvoiceInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutInvoiceInput | TransactionUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: TransactionCreateManyInvoiceInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutInvoiceInput | TransactionUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutInvoiceInput | TransactionUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<TransactionCreateWithoutInvoiceInput, TransactionUncheckedCreateWithoutInvoiceInput> | TransactionCreateWithoutInvoiceInput[] | TransactionUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutInvoiceInput | TransactionCreateOrConnectWithoutInvoiceInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutInvoiceInput | TransactionUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: TransactionCreateManyInvoiceInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutInvoiceInput | TransactionUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutInvoiceInput | TransactionUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type SubCategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<SubCategoryCreateWithoutProductsInput, SubCategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SubCategoryCreateOrConnectWithoutProductsInput
    connect?: SubCategoryWhereUniqueInput
  }

  export type EntrepriseCreateNestedOneWithoutProductsInput = {
    create?: XOR<EntrepriseCreateWithoutProductsInput, EntrepriseUncheckedCreateWithoutProductsInput>
    connectOrCreate?: EntrepriseCreateOrConnectWithoutProductsInput
    connect?: EntrepriseWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutProductInput = {
    create?: XOR<TransactionCreateWithoutProductInput, TransactionUncheckedCreateWithoutProductInput> | TransactionCreateWithoutProductInput[] | TransactionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutProductInput | TransactionCreateOrConnectWithoutProductInput[]
    createMany?: TransactionCreateManyProductInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<TransactionCreateWithoutProductInput, TransactionUncheckedCreateWithoutProductInput> | TransactionCreateWithoutProductInput[] | TransactionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutProductInput | TransactionCreateOrConnectWithoutProductInput[]
    createMany?: TransactionCreateManyProductInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type SubCategoryUpdateOneWithoutProductsNestedInput = {
    create?: XOR<SubCategoryCreateWithoutProductsInput, SubCategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SubCategoryCreateOrConnectWithoutProductsInput
    upsert?: SubCategoryUpsertWithoutProductsInput
    disconnect?: SubCategoryWhereInput | boolean
    delete?: SubCategoryWhereInput | boolean
    connect?: SubCategoryWhereUniqueInput
    update?: XOR<XOR<SubCategoryUpdateToOneWithWhereWithoutProductsInput, SubCategoryUpdateWithoutProductsInput>, SubCategoryUncheckedUpdateWithoutProductsInput>
  }

  export type EntrepriseUpdateOneWithoutProductsNestedInput = {
    create?: XOR<EntrepriseCreateWithoutProductsInput, EntrepriseUncheckedCreateWithoutProductsInput>
    connectOrCreate?: EntrepriseCreateOrConnectWithoutProductsInput
    upsert?: EntrepriseUpsertWithoutProductsInput
    disconnect?: EntrepriseWhereInput | boolean
    delete?: EntrepriseWhereInput | boolean
    connect?: EntrepriseWhereUniqueInput
    update?: XOR<XOR<EntrepriseUpdateToOneWithWhereWithoutProductsInput, EntrepriseUpdateWithoutProductsInput>, EntrepriseUncheckedUpdateWithoutProductsInput>
  }

  export type TransactionUpdateManyWithoutProductNestedInput = {
    create?: XOR<TransactionCreateWithoutProductInput, TransactionUncheckedCreateWithoutProductInput> | TransactionCreateWithoutProductInput[] | TransactionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutProductInput | TransactionCreateOrConnectWithoutProductInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutProductInput | TransactionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: TransactionCreateManyProductInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutProductInput | TransactionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutProductInput | TransactionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<TransactionCreateWithoutProductInput, TransactionUncheckedCreateWithoutProductInput> | TransactionCreateWithoutProductInput[] | TransactionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutProductInput | TransactionCreateOrConnectWithoutProductInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutProductInput | TransactionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: TransactionCreateManyProductInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutProductInput | TransactionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutProductInput | TransactionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type EntrepriseCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<EntrepriseCreateWithoutCategoriesInput, EntrepriseUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: EntrepriseCreateOrConnectWithoutCategoriesInput
    connect?: EntrepriseWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type SubCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput> | SubCategoryCreateWithoutCategoryInput[] | SubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutCategoryInput | SubCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: SubCategoryCreateManyCategoryInputEnvelope
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type SubCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput> | SubCategoryCreateWithoutCategoryInput[] | SubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutCategoryInput | SubCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: SubCategoryCreateManyCategoryInputEnvelope
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type EntrepriseUpdateOneWithoutCategoriesNestedInput = {
    create?: XOR<EntrepriseCreateWithoutCategoriesInput, EntrepriseUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: EntrepriseCreateOrConnectWithoutCategoriesInput
    upsert?: EntrepriseUpsertWithoutCategoriesInput
    disconnect?: EntrepriseWhereInput | boolean
    delete?: EntrepriseWhereInput | boolean
    connect?: EntrepriseWhereUniqueInput
    update?: XOR<XOR<EntrepriseUpdateToOneWithWhereWithoutCategoriesInput, EntrepriseUpdateWithoutCategoriesInput>, EntrepriseUncheckedUpdateWithoutCategoriesInput>
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type SubCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput> | SubCategoryCreateWithoutCategoryInput[] | SubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutCategoryInput | SubCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutCategoryInput | SubCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SubCategoryCreateManyCategoryInputEnvelope
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutCategoryInput | SubCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutCategoryInput | SubCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type SubCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput> | SubCategoryCreateWithoutCategoryInput[] | SubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutCategoryInput | SubCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutCategoryInput | SubCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SubCategoryCreateManyCategoryInputEnvelope
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutCategoryInput | SubCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutCategoryInput | SubCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutSubCategoriesInput = {
    create?: XOR<CategoryCreateWithoutSubCategoriesInput, CategoryUncheckedCreateWithoutSubCategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubCategoriesInput
    connect?: CategoryWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutSubCategoryInput = {
    create?: XOR<ProductCreateWithoutSubCategoryInput, ProductUncheckedCreateWithoutSubCategoryInput> | ProductCreateWithoutSubCategoryInput[] | ProductUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSubCategoryInput | ProductCreateOrConnectWithoutSubCategoryInput[]
    createMany?: ProductCreateManySubCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type EntrepriseCreateNestedOneWithoutSubCategoriesInput = {
    create?: XOR<EntrepriseCreateWithoutSubCategoriesInput, EntrepriseUncheckedCreateWithoutSubCategoriesInput>
    connectOrCreate?: EntrepriseCreateOrConnectWithoutSubCategoriesInput
    connect?: EntrepriseWhereUniqueInput
  }

  export type ProductUncheckedCreateNestedManyWithoutSubCategoryInput = {
    create?: XOR<ProductCreateWithoutSubCategoryInput, ProductUncheckedCreateWithoutSubCategoryInput> | ProductCreateWithoutSubCategoryInput[] | ProductUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSubCategoryInput | ProductCreateOrConnectWithoutSubCategoryInput[]
    createMany?: ProductCreateManySubCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput = {
    create?: XOR<CategoryCreateWithoutSubCategoriesInput, CategoryUncheckedCreateWithoutSubCategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubCategoriesInput
    upsert?: CategoryUpsertWithoutSubCategoriesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutSubCategoriesInput, CategoryUpdateWithoutSubCategoriesInput>, CategoryUncheckedUpdateWithoutSubCategoriesInput>
  }

  export type ProductUpdateManyWithoutSubCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutSubCategoryInput, ProductUncheckedCreateWithoutSubCategoryInput> | ProductCreateWithoutSubCategoryInput[] | ProductUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSubCategoryInput | ProductCreateOrConnectWithoutSubCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutSubCategoryInput | ProductUpsertWithWhereUniqueWithoutSubCategoryInput[]
    createMany?: ProductCreateManySubCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutSubCategoryInput | ProductUpdateWithWhereUniqueWithoutSubCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutSubCategoryInput | ProductUpdateManyWithWhereWithoutSubCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type EntrepriseUpdateOneWithoutSubCategoriesNestedInput = {
    create?: XOR<EntrepriseCreateWithoutSubCategoriesInput, EntrepriseUncheckedCreateWithoutSubCategoriesInput>
    connectOrCreate?: EntrepriseCreateOrConnectWithoutSubCategoriesInput
    upsert?: EntrepriseUpsertWithoutSubCategoriesInput
    disconnect?: EntrepriseWhereInput | boolean
    delete?: EntrepriseWhereInput | boolean
    connect?: EntrepriseWhereUniqueInput
    update?: XOR<XOR<EntrepriseUpdateToOneWithWhereWithoutSubCategoriesInput, EntrepriseUpdateWithoutSubCategoriesInput>, EntrepriseUncheckedUpdateWithoutSubCategoriesInput>
  }

  export type ProductUncheckedUpdateManyWithoutSubCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutSubCategoryInput, ProductUncheckedCreateWithoutSubCategoryInput> | ProductCreateWithoutSubCategoryInput[] | ProductUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSubCategoryInput | ProductCreateOrConnectWithoutSubCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutSubCategoryInput | ProductUpsertWithWhereUniqueWithoutSubCategoryInput[]
    createMany?: ProductCreateManySubCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutSubCategoryInput | ProductUpdateWithWhereUniqueWithoutSubCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutSubCategoryInput | ProductUpdateManyWithWhereWithoutSubCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type EntrepriseCreateNestedOneWithoutDestinationsInput = {
    create?: XOR<EntrepriseCreateWithoutDestinationsInput, EntrepriseUncheckedCreateWithoutDestinationsInput>
    connectOrCreate?: EntrepriseCreateOrConnectWithoutDestinationsInput
    connect?: EntrepriseWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutDestinationInput = {
    create?: XOR<TransactionCreateWithoutDestinationInput, TransactionUncheckedCreateWithoutDestinationInput> | TransactionCreateWithoutDestinationInput[] | TransactionUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutDestinationInput | TransactionCreateOrConnectWithoutDestinationInput[]
    createMany?: TransactionCreateManyDestinationInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutDestinationInput = {
    create?: XOR<TransactionCreateWithoutDestinationInput, TransactionUncheckedCreateWithoutDestinationInput> | TransactionCreateWithoutDestinationInput[] | TransactionUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutDestinationInput | TransactionCreateOrConnectWithoutDestinationInput[]
    createMany?: TransactionCreateManyDestinationInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type EntrepriseUpdateOneWithoutDestinationsNestedInput = {
    create?: XOR<EntrepriseCreateWithoutDestinationsInput, EntrepriseUncheckedCreateWithoutDestinationsInput>
    connectOrCreate?: EntrepriseCreateOrConnectWithoutDestinationsInput
    upsert?: EntrepriseUpsertWithoutDestinationsInput
    disconnect?: EntrepriseWhereInput | boolean
    delete?: EntrepriseWhereInput | boolean
    connect?: EntrepriseWhereUniqueInput
    update?: XOR<XOR<EntrepriseUpdateToOneWithWhereWithoutDestinationsInput, EntrepriseUpdateWithoutDestinationsInput>, EntrepriseUncheckedUpdateWithoutDestinationsInput>
  }

  export type TransactionUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<TransactionCreateWithoutDestinationInput, TransactionUncheckedCreateWithoutDestinationInput> | TransactionCreateWithoutDestinationInput[] | TransactionUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutDestinationInput | TransactionCreateOrConnectWithoutDestinationInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutDestinationInput | TransactionUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: TransactionCreateManyDestinationInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutDestinationInput | TransactionUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutDestinationInput | TransactionUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<TransactionCreateWithoutDestinationInput, TransactionUncheckedCreateWithoutDestinationInput> | TransactionCreateWithoutDestinationInput[] | TransactionUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutDestinationInput | TransactionCreateOrConnectWithoutDestinationInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutDestinationInput | TransactionUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: TransactionCreateManyDestinationInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutDestinationInput | TransactionUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutDestinationInput | TransactionUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<ProductCreateWithoutTransactionsInput, ProductUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutTransactionsInput
    connect?: ProductWhereUniqueInput
  }

  export type EntrepriseCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<EntrepriseCreateWithoutTransactionsInput, EntrepriseUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: EntrepriseCreateOrConnectWithoutTransactionsInput
    connect?: EntrepriseWhereUniqueInput
  }

  export type DestinationCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<DestinationCreateWithoutTransactionsInput, DestinationUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutTransactionsInput
    connect?: DestinationWhereUniqueInput
  }

  export type InvoiceCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<InvoiceCreateWithoutTransactionsInput, InvoiceUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutTransactionsInput
    connect?: InvoiceWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type ProductUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<ProductCreateWithoutTransactionsInput, ProductUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutTransactionsInput
    upsert?: ProductUpsertWithoutTransactionsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutTransactionsInput, ProductUpdateWithoutTransactionsInput>, ProductUncheckedUpdateWithoutTransactionsInput>
  }

  export type EntrepriseUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<EntrepriseCreateWithoutTransactionsInput, EntrepriseUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: EntrepriseCreateOrConnectWithoutTransactionsInput
    upsert?: EntrepriseUpsertWithoutTransactionsInput
    disconnect?: EntrepriseWhereInput | boolean
    delete?: EntrepriseWhereInput | boolean
    connect?: EntrepriseWhereUniqueInput
    update?: XOR<XOR<EntrepriseUpdateToOneWithWhereWithoutTransactionsInput, EntrepriseUpdateWithoutTransactionsInput>, EntrepriseUncheckedUpdateWithoutTransactionsInput>
  }

  export type DestinationUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<DestinationCreateWithoutTransactionsInput, DestinationUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutTransactionsInput
    upsert?: DestinationUpsertWithoutTransactionsInput
    disconnect?: DestinationWhereInput | boolean
    delete?: DestinationWhereInput | boolean
    connect?: DestinationWhereUniqueInput
    update?: XOR<XOR<DestinationUpdateToOneWithWhereWithoutTransactionsInput, DestinationUpdateWithoutTransactionsInput>, DestinationUncheckedUpdateWithoutTransactionsInput>
  }

  export type InvoiceUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<InvoiceCreateWithoutTransactionsInput, InvoiceUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutTransactionsInput
    upsert?: InvoiceUpsertWithoutTransactionsInput
    disconnect?: InvoiceWhereInput | boolean
    delete?: InvoiceWhereInput | boolean
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutTransactionsInput, InvoiceUpdateWithoutTransactionsInput>, InvoiceUncheckedUpdateWithoutTransactionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
  }

  export type NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type ClientCreateWithoutEntrepriseInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutEntrepriseInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutEntrepriseInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutEntrepriseInput, ClientUncheckedCreateWithoutEntrepriseInput>
  }

  export type ClientCreateManyEntrepriseInputEnvelope = {
    data: ClientCreateManyEntrepriseInput | ClientCreateManyEntrepriseInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceCreateWithoutEntrepriseInput = {
    id?: string
    invoiceNumber: string
    date?: Date | string
    status?: $Enums.InvoiceStatus
    subtotal: number
    tva?: number
    totalAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutInvoicesInput
    transactions?: TransactionCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutEntrepriseInput = {
    id?: string
    invoiceNumber: string
    date?: Date | string
    status?: $Enums.InvoiceStatus
    subtotal: number
    tva?: number
    totalAmount: number
    clientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutEntrepriseInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutEntrepriseInput, InvoiceUncheckedCreateWithoutEntrepriseInput>
  }

  export type InvoiceCreateManyEntrepriseInputEnvelope = {
    data: InvoiceCreateManyEntrepriseInput | InvoiceCreateManyEntrepriseInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutEntrepriseInput = {
    id?: string
    reference?: string | null
    name: string
    description: string
    quantity?: number
    unit: string
    price: number
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    subCategory?: SubCategoryCreateNestedOneWithoutProductsInput
    transactions?: TransactionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutEntrepriseInput = {
    id?: string
    reference?: string | null
    name: string
    description: string
    quantity?: number
    unit: string
    price: number
    imageUrl: string
    categoryId: string
    subCategoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutEntrepriseInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutEntrepriseInput, ProductUncheckedCreateWithoutEntrepriseInput>
  }

  export type ProductCreateManyEntrepriseInputEnvelope = {
    data: ProductCreateManyEntrepriseInput | ProductCreateManyEntrepriseInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutEntrepriseInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutCategoryInput
    subCategories?: SubCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutEntrepriseInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
    subCategories?: SubCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutEntrepriseInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutEntrepriseInput, CategoryUncheckedCreateWithoutEntrepriseInput>
  }

  export type CategoryCreateManyEntrepriseInputEnvelope = {
    data: CategoryCreateManyEntrepriseInput | CategoryCreateManyEntrepriseInput[]
    skipDuplicates?: boolean
  }

  export type SubCategoryCreateWithoutEntrepriseInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutSubCategoriesInput
    products?: ProductCreateNestedManyWithoutSubCategoryInput
  }

  export type SubCategoryUncheckedCreateWithoutEntrepriseInput = {
    id?: string
    name: string
    description?: string | null
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutSubCategoryInput
  }

  export type SubCategoryCreateOrConnectWithoutEntrepriseInput = {
    where: SubCategoryWhereUniqueInput
    create: XOR<SubCategoryCreateWithoutEntrepriseInput, SubCategoryUncheckedCreateWithoutEntrepriseInput>
  }

  export type SubCategoryCreateManyEntrepriseInputEnvelope = {
    data: SubCategoryCreateManyEntrepriseInput | SubCategoryCreateManyEntrepriseInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutEntrepriseInput = {
    id?: string
    type: $Enums.TransactionType
    quantity: number
    price: number
    subtotal: number
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutTransactionsInput
    destination?: DestinationCreateNestedOneWithoutTransactionsInput
    invoice?: InvoiceCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutEntrepriseInput = {
    id?: string
    type: $Enums.TransactionType
    quantity: number
    price: number
    subtotal: number
    productId: string
    destinationId?: string | null
    invoiceId?: string | null
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutEntrepriseInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutEntrepriseInput, TransactionUncheckedCreateWithoutEntrepriseInput>
  }

  export type TransactionCreateManyEntrepriseInputEnvelope = {
    data: TransactionCreateManyEntrepriseInput | TransactionCreateManyEntrepriseInput[]
    skipDuplicates?: boolean
  }

  export type DestinationCreateWithoutEntrepriseInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUncheckedCreateWithoutEntrepriseInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationCreateOrConnectWithoutEntrepriseInput = {
    where: DestinationWhereUniqueInput
    create: XOR<DestinationCreateWithoutEntrepriseInput, DestinationUncheckedCreateWithoutEntrepriseInput>
  }

  export type DestinationCreateManyEntrepriseInputEnvelope = {
    data: DestinationCreateManyEntrepriseInput | DestinationCreateManyEntrepriseInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithWhereUniqueWithoutEntrepriseInput = {
    where: ClientWhereUniqueInput
    update: XOR<ClientUpdateWithoutEntrepriseInput, ClientUncheckedUpdateWithoutEntrepriseInput>
    create: XOR<ClientCreateWithoutEntrepriseInput, ClientUncheckedCreateWithoutEntrepriseInput>
  }

  export type ClientUpdateWithWhereUniqueWithoutEntrepriseInput = {
    where: ClientWhereUniqueInput
    data: XOR<ClientUpdateWithoutEntrepriseInput, ClientUncheckedUpdateWithoutEntrepriseInput>
  }

  export type ClientUpdateManyWithWhereWithoutEntrepriseInput = {
    where: ClientScalarWhereInput
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyWithoutEntrepriseInput>
  }

  export type ClientScalarWhereInput = {
    AND?: ClientScalarWhereInput | ClientScalarWhereInput[]
    OR?: ClientScalarWhereInput[]
    NOT?: ClientScalarWhereInput | ClientScalarWhereInput[]
    id?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    email?: StringNullableFilter<"Client"> | string | null
    phone?: StringNullableFilter<"Client"> | string | null
    address?: StringFilter<"Client"> | string
    entrepriseId?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
  }

  export type InvoiceUpsertWithWhereUniqueWithoutEntrepriseInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutEntrepriseInput, InvoiceUncheckedUpdateWithoutEntrepriseInput>
    create: XOR<InvoiceCreateWithoutEntrepriseInput, InvoiceUncheckedCreateWithoutEntrepriseInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutEntrepriseInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutEntrepriseInput, InvoiceUncheckedUpdateWithoutEntrepriseInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutEntrepriseInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutEntrepriseInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    id?: StringFilter<"Invoice"> | string
    invoiceNumber?: StringFilter<"Invoice"> | string
    date?: DateTimeFilter<"Invoice"> | Date | string
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    subtotal?: FloatFilter<"Invoice"> | number
    tva?: FloatFilter<"Invoice"> | number
    totalAmount?: FloatFilter<"Invoice"> | number
    clientId?: StringFilter<"Invoice"> | string
    entrepriseId?: StringNullableFilter<"Invoice"> | string | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
  }

  export type ProductUpsertWithWhereUniqueWithoutEntrepriseInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutEntrepriseInput, ProductUncheckedUpdateWithoutEntrepriseInput>
    create: XOR<ProductCreateWithoutEntrepriseInput, ProductUncheckedCreateWithoutEntrepriseInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutEntrepriseInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutEntrepriseInput, ProductUncheckedUpdateWithoutEntrepriseInput>
  }

  export type ProductUpdateManyWithWhereWithoutEntrepriseInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutEntrepriseInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    reference?: StringNullableFilter<"Product"> | string | null
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    quantity?: IntFilter<"Product"> | number
    unit?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    imageUrl?: StringFilter<"Product"> | string
    categoryId?: StringFilter<"Product"> | string
    subCategoryId?: StringNullableFilter<"Product"> | string | null
    entrepriseId?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type CategoryUpsertWithWhereUniqueWithoutEntrepriseInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutEntrepriseInput, CategoryUncheckedUpdateWithoutEntrepriseInput>
    create: XOR<CategoryCreateWithoutEntrepriseInput, CategoryUncheckedCreateWithoutEntrepriseInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutEntrepriseInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutEntrepriseInput, CategoryUncheckedUpdateWithoutEntrepriseInput>
  }

  export type CategoryUpdateManyWithWhereWithoutEntrepriseInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutEntrepriseInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    entrepriseId?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
  }

  export type SubCategoryUpsertWithWhereUniqueWithoutEntrepriseInput = {
    where: SubCategoryWhereUniqueInput
    update: XOR<SubCategoryUpdateWithoutEntrepriseInput, SubCategoryUncheckedUpdateWithoutEntrepriseInput>
    create: XOR<SubCategoryCreateWithoutEntrepriseInput, SubCategoryUncheckedCreateWithoutEntrepriseInput>
  }

  export type SubCategoryUpdateWithWhereUniqueWithoutEntrepriseInput = {
    where: SubCategoryWhereUniqueInput
    data: XOR<SubCategoryUpdateWithoutEntrepriseInput, SubCategoryUncheckedUpdateWithoutEntrepriseInput>
  }

  export type SubCategoryUpdateManyWithWhereWithoutEntrepriseInput = {
    where: SubCategoryScalarWhereInput
    data: XOR<SubCategoryUpdateManyMutationInput, SubCategoryUncheckedUpdateManyWithoutEntrepriseInput>
  }

  export type SubCategoryScalarWhereInput = {
    AND?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
    OR?: SubCategoryScalarWhereInput[]
    NOT?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
    id?: StringFilter<"SubCategory"> | string
    name?: StringFilter<"SubCategory"> | string
    description?: StringNullableFilter<"SubCategory"> | string | null
    categoryId?: StringFilter<"SubCategory"> | string
    entrepriseId?: StringNullableFilter<"SubCategory"> | string | null
    createdAt?: DateTimeFilter<"SubCategory"> | Date | string
    updatedAt?: DateTimeFilter<"SubCategory"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutEntrepriseInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutEntrepriseInput, TransactionUncheckedUpdateWithoutEntrepriseInput>
    create: XOR<TransactionCreateWithoutEntrepriseInput, TransactionUncheckedCreateWithoutEntrepriseInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutEntrepriseInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutEntrepriseInput, TransactionUncheckedUpdateWithoutEntrepriseInput>
  }

  export type TransactionUpdateManyWithWhereWithoutEntrepriseInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutEntrepriseInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    quantity?: IntFilter<"Transaction"> | number
    price?: FloatFilter<"Transaction"> | number
    subtotal?: FloatFilter<"Transaction"> | number
    productId?: StringFilter<"Transaction"> | string
    entrepriseId?: StringNullableFilter<"Transaction"> | string | null
    destinationId?: StringNullableFilter<"Transaction"> | string | null
    invoiceId?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type DestinationUpsertWithWhereUniqueWithoutEntrepriseInput = {
    where: DestinationWhereUniqueInput
    update: XOR<DestinationUpdateWithoutEntrepriseInput, DestinationUncheckedUpdateWithoutEntrepriseInput>
    create: XOR<DestinationCreateWithoutEntrepriseInput, DestinationUncheckedCreateWithoutEntrepriseInput>
  }

  export type DestinationUpdateWithWhereUniqueWithoutEntrepriseInput = {
    where: DestinationWhereUniqueInput
    data: XOR<DestinationUpdateWithoutEntrepriseInput, DestinationUncheckedUpdateWithoutEntrepriseInput>
  }

  export type DestinationUpdateManyWithWhereWithoutEntrepriseInput = {
    where: DestinationScalarWhereInput
    data: XOR<DestinationUpdateManyMutationInput, DestinationUncheckedUpdateManyWithoutEntrepriseInput>
  }

  export type DestinationScalarWhereInput = {
    AND?: DestinationScalarWhereInput | DestinationScalarWhereInput[]
    OR?: DestinationScalarWhereInput[]
    NOT?: DestinationScalarWhereInput | DestinationScalarWhereInput[]
    id?: StringFilter<"Destination"> | string
    name?: StringFilter<"Destination"> | string
    description?: StringNullableFilter<"Destination"> | string | null
    entrepriseId?: StringNullableFilter<"Destination"> | string | null
    createdAt?: DateTimeFilter<"Destination"> | Date | string
    updatedAt?: DateTimeFilter<"Destination"> | Date | string
  }

  export type InvoiceCreateWithoutClientInput = {
    id?: string
    invoiceNumber: string
    date?: Date | string
    status?: $Enums.InvoiceStatus
    subtotal: number
    tva?: number
    totalAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    entreprise?: EntrepriseCreateNestedOneWithoutInvoicesInput
    transactions?: TransactionCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutClientInput = {
    id?: string
    invoiceNumber: string
    date?: Date | string
    status?: $Enums.InvoiceStatus
    subtotal: number
    tva?: number
    totalAmount: number
    entrepriseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutClientInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutClientInput, InvoiceUncheckedCreateWithoutClientInput>
  }

  export type InvoiceCreateManyClientInputEnvelope = {
    data: InvoiceCreateManyClientInput | InvoiceCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type EntrepriseCreateWithoutClientsInput = {
    id?: string
    name: string
    email?: string | null
    address?: string | null
    tvaRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceCreateNestedManyWithoutEntrepriseInput
    products?: ProductCreateNestedManyWithoutEntrepriseInput
    categories?: CategoryCreateNestedManyWithoutEntrepriseInput
    subCategories?: SubCategoryCreateNestedManyWithoutEntrepriseInput
    transactions?: TransactionCreateNestedManyWithoutEntrepriseInput
    destinations?: DestinationCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseUncheckedCreateWithoutClientsInput = {
    id?: string
    name: string
    email?: string | null
    address?: string | null
    tvaRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutEntrepriseInput
    products?: ProductUncheckedCreateNestedManyWithoutEntrepriseInput
    categories?: CategoryUncheckedCreateNestedManyWithoutEntrepriseInput
    subCategories?: SubCategoryUncheckedCreateNestedManyWithoutEntrepriseInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutEntrepriseInput
    destinations?: DestinationUncheckedCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseCreateOrConnectWithoutClientsInput = {
    where: EntrepriseWhereUniqueInput
    create: XOR<EntrepriseCreateWithoutClientsInput, EntrepriseUncheckedCreateWithoutClientsInput>
  }

  export type InvoiceUpsertWithWhereUniqueWithoutClientInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutClientInput, InvoiceUncheckedUpdateWithoutClientInput>
    create: XOR<InvoiceCreateWithoutClientInput, InvoiceUncheckedCreateWithoutClientInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutClientInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutClientInput, InvoiceUncheckedUpdateWithoutClientInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutClientInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutClientInput>
  }

  export type EntrepriseUpsertWithoutClientsInput = {
    update: XOR<EntrepriseUpdateWithoutClientsInput, EntrepriseUncheckedUpdateWithoutClientsInput>
    create: XOR<EntrepriseCreateWithoutClientsInput, EntrepriseUncheckedCreateWithoutClientsInput>
    where?: EntrepriseWhereInput
  }

  export type EntrepriseUpdateToOneWithWhereWithoutClientsInput = {
    where?: EntrepriseWhereInput
    data: XOR<EntrepriseUpdateWithoutClientsInput, EntrepriseUncheckedUpdateWithoutClientsInput>
  }

  export type EntrepriseUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    tvaRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUpdateManyWithoutEntrepriseNestedInput
    products?: ProductUpdateManyWithoutEntrepriseNestedInput
    categories?: CategoryUpdateManyWithoutEntrepriseNestedInput
    subCategories?: SubCategoryUpdateManyWithoutEntrepriseNestedInput
    transactions?: TransactionUpdateManyWithoutEntrepriseNestedInput
    destinations?: DestinationUpdateManyWithoutEntrepriseNestedInput
  }

  export type EntrepriseUncheckedUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    tvaRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutEntrepriseNestedInput
    products?: ProductUncheckedUpdateManyWithoutEntrepriseNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutEntrepriseNestedInput
    subCategories?: SubCategoryUncheckedUpdateManyWithoutEntrepriseNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutEntrepriseNestedInput
    destinations?: DestinationUncheckedUpdateManyWithoutEntrepriseNestedInput
  }

  export type ClientCreateWithoutInvoicesInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    entreprise?: EntrepriseCreateNestedOneWithoutClientsInput
  }

  export type ClientUncheckedCreateWithoutInvoicesInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    address: string
    entrepriseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientCreateOrConnectWithoutInvoicesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutInvoicesInput, ClientUncheckedCreateWithoutInvoicesInput>
  }

  export type EntrepriseCreateWithoutInvoicesInput = {
    id?: string
    name: string
    email?: string | null
    address?: string | null
    tvaRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientCreateNestedManyWithoutEntrepriseInput
    products?: ProductCreateNestedManyWithoutEntrepriseInput
    categories?: CategoryCreateNestedManyWithoutEntrepriseInput
    subCategories?: SubCategoryCreateNestedManyWithoutEntrepriseInput
    transactions?: TransactionCreateNestedManyWithoutEntrepriseInput
    destinations?: DestinationCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseUncheckedCreateWithoutInvoicesInput = {
    id?: string
    name: string
    email?: string | null
    address?: string | null
    tvaRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientUncheckedCreateNestedManyWithoutEntrepriseInput
    products?: ProductUncheckedCreateNestedManyWithoutEntrepriseInput
    categories?: CategoryUncheckedCreateNestedManyWithoutEntrepriseInput
    subCategories?: SubCategoryUncheckedCreateNestedManyWithoutEntrepriseInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutEntrepriseInput
    destinations?: DestinationUncheckedCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseCreateOrConnectWithoutInvoicesInput = {
    where: EntrepriseWhereUniqueInput
    create: XOR<EntrepriseCreateWithoutInvoicesInput, EntrepriseUncheckedCreateWithoutInvoicesInput>
  }

  export type TransactionCreateWithoutInvoiceInput = {
    id?: string
    type: $Enums.TransactionType
    quantity: number
    price: number
    subtotal: number
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutTransactionsInput
    entreprise?: EntrepriseCreateNestedOneWithoutTransactionsInput
    destination?: DestinationCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutInvoiceInput = {
    id?: string
    type: $Enums.TransactionType
    quantity: number
    price: number
    subtotal: number
    productId: string
    entrepriseId?: string | null
    destinationId?: string | null
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutInvoiceInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutInvoiceInput, TransactionUncheckedCreateWithoutInvoiceInput>
  }

  export type TransactionCreateManyInvoiceInputEnvelope = {
    data: TransactionCreateManyInvoiceInput | TransactionCreateManyInvoiceInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithoutInvoicesInput = {
    update: XOR<ClientUpdateWithoutInvoicesInput, ClientUncheckedUpdateWithoutInvoicesInput>
    create: XOR<ClientCreateWithoutInvoicesInput, ClientUncheckedCreateWithoutInvoicesInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutInvoicesInput, ClientUncheckedUpdateWithoutInvoicesInput>
  }

  export type ClientUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entreprise?: EntrepriseUpdateOneWithoutClientsNestedInput
  }

  export type ClientUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntrepriseUpsertWithoutInvoicesInput = {
    update: XOR<EntrepriseUpdateWithoutInvoicesInput, EntrepriseUncheckedUpdateWithoutInvoicesInput>
    create: XOR<EntrepriseCreateWithoutInvoicesInput, EntrepriseUncheckedCreateWithoutInvoicesInput>
    where?: EntrepriseWhereInput
  }

  export type EntrepriseUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: EntrepriseWhereInput
    data: XOR<EntrepriseUpdateWithoutInvoicesInput, EntrepriseUncheckedUpdateWithoutInvoicesInput>
  }

  export type EntrepriseUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    tvaRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUpdateManyWithoutEntrepriseNestedInput
    products?: ProductUpdateManyWithoutEntrepriseNestedInput
    categories?: CategoryUpdateManyWithoutEntrepriseNestedInput
    subCategories?: SubCategoryUpdateManyWithoutEntrepriseNestedInput
    transactions?: TransactionUpdateManyWithoutEntrepriseNestedInput
    destinations?: DestinationUpdateManyWithoutEntrepriseNestedInput
  }

  export type EntrepriseUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    tvaRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUncheckedUpdateManyWithoutEntrepriseNestedInput
    products?: ProductUncheckedUpdateManyWithoutEntrepriseNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutEntrepriseNestedInput
    subCategories?: SubCategoryUncheckedUpdateManyWithoutEntrepriseNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutEntrepriseNestedInput
    destinations?: DestinationUncheckedUpdateManyWithoutEntrepriseNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutInvoiceInput, TransactionUncheckedUpdateWithoutInvoiceInput>
    create: XOR<TransactionCreateWithoutInvoiceInput, TransactionUncheckedCreateWithoutInvoiceInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutInvoiceInput, TransactionUncheckedUpdateWithoutInvoiceInput>
  }

  export type TransactionUpdateManyWithWhereWithoutInvoiceInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type CategoryCreateWithoutProductsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entreprise?: EntrepriseCreateNestedOneWithoutCategoriesInput
    subCategories?: SubCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    description?: string | null
    entrepriseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategories?: SubCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type SubCategoryCreateWithoutProductsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutSubCategoriesInput
    entreprise?: EntrepriseCreateNestedOneWithoutSubCategoriesInput
  }

  export type SubCategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    description?: string | null
    categoryId: string
    entrepriseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubCategoryCreateOrConnectWithoutProductsInput = {
    where: SubCategoryWhereUniqueInput
    create: XOR<SubCategoryCreateWithoutProductsInput, SubCategoryUncheckedCreateWithoutProductsInput>
  }

  export type EntrepriseCreateWithoutProductsInput = {
    id?: string
    name: string
    email?: string | null
    address?: string | null
    tvaRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientCreateNestedManyWithoutEntrepriseInput
    invoices?: InvoiceCreateNestedManyWithoutEntrepriseInput
    categories?: CategoryCreateNestedManyWithoutEntrepriseInput
    subCategories?: SubCategoryCreateNestedManyWithoutEntrepriseInput
    transactions?: TransactionCreateNestedManyWithoutEntrepriseInput
    destinations?: DestinationCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    email?: string | null
    address?: string | null
    tvaRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientUncheckedCreateNestedManyWithoutEntrepriseInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutEntrepriseInput
    categories?: CategoryUncheckedCreateNestedManyWithoutEntrepriseInput
    subCategories?: SubCategoryUncheckedCreateNestedManyWithoutEntrepriseInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutEntrepriseInput
    destinations?: DestinationUncheckedCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseCreateOrConnectWithoutProductsInput = {
    where: EntrepriseWhereUniqueInput
    create: XOR<EntrepriseCreateWithoutProductsInput, EntrepriseUncheckedCreateWithoutProductsInput>
  }

  export type TransactionCreateWithoutProductInput = {
    id?: string
    type: $Enums.TransactionType
    quantity: number
    price: number
    subtotal: number
    createdAt?: Date | string
    entreprise?: EntrepriseCreateNestedOneWithoutTransactionsInput
    destination?: DestinationCreateNestedOneWithoutTransactionsInput
    invoice?: InvoiceCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutProductInput = {
    id?: string
    type: $Enums.TransactionType
    quantity: number
    price: number
    subtotal: number
    entrepriseId?: string | null
    destinationId?: string | null
    invoiceId?: string | null
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutProductInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutProductInput, TransactionUncheckedCreateWithoutProductInput>
  }

  export type TransactionCreateManyProductInputEnvelope = {
    data: TransactionCreateManyProductInput | TransactionCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entreprise?: EntrepriseUpdateOneWithoutCategoriesNestedInput
    subCategories?: SubCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategories?: SubCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type SubCategoryUpsertWithoutProductsInput = {
    update: XOR<SubCategoryUpdateWithoutProductsInput, SubCategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<SubCategoryCreateWithoutProductsInput, SubCategoryUncheckedCreateWithoutProductsInput>
    where?: SubCategoryWhereInput
  }

  export type SubCategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: SubCategoryWhereInput
    data: XOR<SubCategoryUpdateWithoutProductsInput, SubCategoryUncheckedUpdateWithoutProductsInput>
  }

  export type SubCategoryUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput
    entreprise?: EntrepriseUpdateOneWithoutSubCategoriesNestedInput
  }

  export type SubCategoryUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntrepriseUpsertWithoutProductsInput = {
    update: XOR<EntrepriseUpdateWithoutProductsInput, EntrepriseUncheckedUpdateWithoutProductsInput>
    create: XOR<EntrepriseCreateWithoutProductsInput, EntrepriseUncheckedCreateWithoutProductsInput>
    where?: EntrepriseWhereInput
  }

  export type EntrepriseUpdateToOneWithWhereWithoutProductsInput = {
    where?: EntrepriseWhereInput
    data: XOR<EntrepriseUpdateWithoutProductsInput, EntrepriseUncheckedUpdateWithoutProductsInput>
  }

  export type EntrepriseUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    tvaRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUpdateManyWithoutEntrepriseNestedInput
    invoices?: InvoiceUpdateManyWithoutEntrepriseNestedInput
    categories?: CategoryUpdateManyWithoutEntrepriseNestedInput
    subCategories?: SubCategoryUpdateManyWithoutEntrepriseNestedInput
    transactions?: TransactionUpdateManyWithoutEntrepriseNestedInput
    destinations?: DestinationUpdateManyWithoutEntrepriseNestedInput
  }

  export type EntrepriseUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    tvaRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUncheckedUpdateManyWithoutEntrepriseNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutEntrepriseNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutEntrepriseNestedInput
    subCategories?: SubCategoryUncheckedUpdateManyWithoutEntrepriseNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutEntrepriseNestedInput
    destinations?: DestinationUncheckedUpdateManyWithoutEntrepriseNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutProductInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutProductInput, TransactionUncheckedUpdateWithoutProductInput>
    create: XOR<TransactionCreateWithoutProductInput, TransactionUncheckedCreateWithoutProductInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutProductInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutProductInput, TransactionUncheckedUpdateWithoutProductInput>
  }

  export type TransactionUpdateManyWithWhereWithoutProductInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutProductInput>
  }

  export type EntrepriseCreateWithoutCategoriesInput = {
    id?: string
    name: string
    email?: string | null
    address?: string | null
    tvaRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientCreateNestedManyWithoutEntrepriseInput
    invoices?: InvoiceCreateNestedManyWithoutEntrepriseInput
    products?: ProductCreateNestedManyWithoutEntrepriseInput
    subCategories?: SubCategoryCreateNestedManyWithoutEntrepriseInput
    transactions?: TransactionCreateNestedManyWithoutEntrepriseInput
    destinations?: DestinationCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseUncheckedCreateWithoutCategoriesInput = {
    id?: string
    name: string
    email?: string | null
    address?: string | null
    tvaRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientUncheckedCreateNestedManyWithoutEntrepriseInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutEntrepriseInput
    products?: ProductUncheckedCreateNestedManyWithoutEntrepriseInput
    subCategories?: SubCategoryUncheckedCreateNestedManyWithoutEntrepriseInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutEntrepriseInput
    destinations?: DestinationUncheckedCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseCreateOrConnectWithoutCategoriesInput = {
    where: EntrepriseWhereUniqueInput
    create: XOR<EntrepriseCreateWithoutCategoriesInput, EntrepriseUncheckedCreateWithoutCategoriesInput>
  }

  export type ProductCreateWithoutCategoryInput = {
    id?: string
    reference?: string | null
    name: string
    description: string
    quantity?: number
    unit: string
    price: number
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategory?: SubCategoryCreateNestedOneWithoutProductsInput
    entreprise?: EntrepriseCreateNestedOneWithoutProductsInput
    transactions?: TransactionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    reference?: string | null
    name: string
    description: string
    quantity?: number
    unit: string
    price: number
    imageUrl: string
    subCategoryId?: string | null
    entrepriseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type SubCategoryCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutSubCategoryInput
    entreprise?: EntrepriseCreateNestedOneWithoutSubCategoriesInput
  }

  export type SubCategoryUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    entrepriseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutSubCategoryInput
  }

  export type SubCategoryCreateOrConnectWithoutCategoryInput = {
    where: SubCategoryWhereUniqueInput
    create: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type SubCategoryCreateManyCategoryInputEnvelope = {
    data: SubCategoryCreateManyCategoryInput | SubCategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type EntrepriseUpsertWithoutCategoriesInput = {
    update: XOR<EntrepriseUpdateWithoutCategoriesInput, EntrepriseUncheckedUpdateWithoutCategoriesInput>
    create: XOR<EntrepriseCreateWithoutCategoriesInput, EntrepriseUncheckedCreateWithoutCategoriesInput>
    where?: EntrepriseWhereInput
  }

  export type EntrepriseUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: EntrepriseWhereInput
    data: XOR<EntrepriseUpdateWithoutCategoriesInput, EntrepriseUncheckedUpdateWithoutCategoriesInput>
  }

  export type EntrepriseUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    tvaRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUpdateManyWithoutEntrepriseNestedInput
    invoices?: InvoiceUpdateManyWithoutEntrepriseNestedInput
    products?: ProductUpdateManyWithoutEntrepriseNestedInput
    subCategories?: SubCategoryUpdateManyWithoutEntrepriseNestedInput
    transactions?: TransactionUpdateManyWithoutEntrepriseNestedInput
    destinations?: DestinationUpdateManyWithoutEntrepriseNestedInput
  }

  export type EntrepriseUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    tvaRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUncheckedUpdateManyWithoutEntrepriseNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutEntrepriseNestedInput
    products?: ProductUncheckedUpdateManyWithoutEntrepriseNestedInput
    subCategories?: SubCategoryUncheckedUpdateManyWithoutEntrepriseNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutEntrepriseNestedInput
    destinations?: DestinationUncheckedUpdateManyWithoutEntrepriseNestedInput
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type SubCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: SubCategoryWhereUniqueInput
    update: XOR<SubCategoryUpdateWithoutCategoryInput, SubCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type SubCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SubCategoryWhereUniqueInput
    data: XOR<SubCategoryUpdateWithoutCategoryInput, SubCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type SubCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: SubCategoryScalarWhereInput
    data: XOR<SubCategoryUpdateManyMutationInput, SubCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryCreateWithoutSubCategoriesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entreprise?: EntrepriseCreateNestedOneWithoutCategoriesInput
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutSubCategoriesInput = {
    id?: string
    name: string
    description?: string | null
    entrepriseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutSubCategoriesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutSubCategoriesInput, CategoryUncheckedCreateWithoutSubCategoriesInput>
  }

  export type ProductCreateWithoutSubCategoryInput = {
    id?: string
    reference?: string | null
    name: string
    description: string
    quantity?: number
    unit: string
    price: number
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    entreprise?: EntrepriseCreateNestedOneWithoutProductsInput
    transactions?: TransactionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSubCategoryInput = {
    id?: string
    reference?: string | null
    name: string
    description: string
    quantity?: number
    unit: string
    price: number
    imageUrl: string
    categoryId: string
    entrepriseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutSubCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSubCategoryInput, ProductUncheckedCreateWithoutSubCategoryInput>
  }

  export type ProductCreateManySubCategoryInputEnvelope = {
    data: ProductCreateManySubCategoryInput | ProductCreateManySubCategoryInput[]
    skipDuplicates?: boolean
  }

  export type EntrepriseCreateWithoutSubCategoriesInput = {
    id?: string
    name: string
    email?: string | null
    address?: string | null
    tvaRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientCreateNestedManyWithoutEntrepriseInput
    invoices?: InvoiceCreateNestedManyWithoutEntrepriseInput
    products?: ProductCreateNestedManyWithoutEntrepriseInput
    categories?: CategoryCreateNestedManyWithoutEntrepriseInput
    transactions?: TransactionCreateNestedManyWithoutEntrepriseInput
    destinations?: DestinationCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseUncheckedCreateWithoutSubCategoriesInput = {
    id?: string
    name: string
    email?: string | null
    address?: string | null
    tvaRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientUncheckedCreateNestedManyWithoutEntrepriseInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutEntrepriseInput
    products?: ProductUncheckedCreateNestedManyWithoutEntrepriseInput
    categories?: CategoryUncheckedCreateNestedManyWithoutEntrepriseInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutEntrepriseInput
    destinations?: DestinationUncheckedCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseCreateOrConnectWithoutSubCategoriesInput = {
    where: EntrepriseWhereUniqueInput
    create: XOR<EntrepriseCreateWithoutSubCategoriesInput, EntrepriseUncheckedCreateWithoutSubCategoriesInput>
  }

  export type CategoryUpsertWithoutSubCategoriesInput = {
    update: XOR<CategoryUpdateWithoutSubCategoriesInput, CategoryUncheckedUpdateWithoutSubCategoriesInput>
    create: XOR<CategoryCreateWithoutSubCategoriesInput, CategoryUncheckedCreateWithoutSubCategoriesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutSubCategoriesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutSubCategoriesInput, CategoryUncheckedUpdateWithoutSubCategoriesInput>
  }

  export type CategoryUpdateWithoutSubCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entreprise?: EntrepriseUpdateOneWithoutCategoriesNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutSubCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ProductUpsertWithWhereUniqueWithoutSubCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutSubCategoryInput, ProductUncheckedUpdateWithoutSubCategoryInput>
    create: XOR<ProductCreateWithoutSubCategoryInput, ProductUncheckedCreateWithoutSubCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutSubCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutSubCategoryInput, ProductUncheckedUpdateWithoutSubCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutSubCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutSubCategoryInput>
  }

  export type EntrepriseUpsertWithoutSubCategoriesInput = {
    update: XOR<EntrepriseUpdateWithoutSubCategoriesInput, EntrepriseUncheckedUpdateWithoutSubCategoriesInput>
    create: XOR<EntrepriseCreateWithoutSubCategoriesInput, EntrepriseUncheckedCreateWithoutSubCategoriesInput>
    where?: EntrepriseWhereInput
  }

  export type EntrepriseUpdateToOneWithWhereWithoutSubCategoriesInput = {
    where?: EntrepriseWhereInput
    data: XOR<EntrepriseUpdateWithoutSubCategoriesInput, EntrepriseUncheckedUpdateWithoutSubCategoriesInput>
  }

  export type EntrepriseUpdateWithoutSubCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    tvaRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUpdateManyWithoutEntrepriseNestedInput
    invoices?: InvoiceUpdateManyWithoutEntrepriseNestedInput
    products?: ProductUpdateManyWithoutEntrepriseNestedInput
    categories?: CategoryUpdateManyWithoutEntrepriseNestedInput
    transactions?: TransactionUpdateManyWithoutEntrepriseNestedInput
    destinations?: DestinationUpdateManyWithoutEntrepriseNestedInput
  }

  export type EntrepriseUncheckedUpdateWithoutSubCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    tvaRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUncheckedUpdateManyWithoutEntrepriseNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutEntrepriseNestedInput
    products?: ProductUncheckedUpdateManyWithoutEntrepriseNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutEntrepriseNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutEntrepriseNestedInput
    destinations?: DestinationUncheckedUpdateManyWithoutEntrepriseNestedInput
  }

  export type EntrepriseCreateWithoutDestinationsInput = {
    id?: string
    name: string
    email?: string | null
    address?: string | null
    tvaRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientCreateNestedManyWithoutEntrepriseInput
    invoices?: InvoiceCreateNestedManyWithoutEntrepriseInput
    products?: ProductCreateNestedManyWithoutEntrepriseInput
    categories?: CategoryCreateNestedManyWithoutEntrepriseInput
    subCategories?: SubCategoryCreateNestedManyWithoutEntrepriseInput
    transactions?: TransactionCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseUncheckedCreateWithoutDestinationsInput = {
    id?: string
    name: string
    email?: string | null
    address?: string | null
    tvaRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientUncheckedCreateNestedManyWithoutEntrepriseInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutEntrepriseInput
    products?: ProductUncheckedCreateNestedManyWithoutEntrepriseInput
    categories?: CategoryUncheckedCreateNestedManyWithoutEntrepriseInput
    subCategories?: SubCategoryUncheckedCreateNestedManyWithoutEntrepriseInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseCreateOrConnectWithoutDestinationsInput = {
    where: EntrepriseWhereUniqueInput
    create: XOR<EntrepriseCreateWithoutDestinationsInput, EntrepriseUncheckedCreateWithoutDestinationsInput>
  }

  export type TransactionCreateWithoutDestinationInput = {
    id?: string
    type: $Enums.TransactionType
    quantity: number
    price: number
    subtotal: number
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutTransactionsInput
    entreprise?: EntrepriseCreateNestedOneWithoutTransactionsInput
    invoice?: InvoiceCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutDestinationInput = {
    id?: string
    type: $Enums.TransactionType
    quantity: number
    price: number
    subtotal: number
    productId: string
    entrepriseId?: string | null
    invoiceId?: string | null
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutDestinationInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutDestinationInput, TransactionUncheckedCreateWithoutDestinationInput>
  }

  export type TransactionCreateManyDestinationInputEnvelope = {
    data: TransactionCreateManyDestinationInput | TransactionCreateManyDestinationInput[]
    skipDuplicates?: boolean
  }

  export type EntrepriseUpsertWithoutDestinationsInput = {
    update: XOR<EntrepriseUpdateWithoutDestinationsInput, EntrepriseUncheckedUpdateWithoutDestinationsInput>
    create: XOR<EntrepriseCreateWithoutDestinationsInput, EntrepriseUncheckedCreateWithoutDestinationsInput>
    where?: EntrepriseWhereInput
  }

  export type EntrepriseUpdateToOneWithWhereWithoutDestinationsInput = {
    where?: EntrepriseWhereInput
    data: XOR<EntrepriseUpdateWithoutDestinationsInput, EntrepriseUncheckedUpdateWithoutDestinationsInput>
  }

  export type EntrepriseUpdateWithoutDestinationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    tvaRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUpdateManyWithoutEntrepriseNestedInput
    invoices?: InvoiceUpdateManyWithoutEntrepriseNestedInput
    products?: ProductUpdateManyWithoutEntrepriseNestedInput
    categories?: CategoryUpdateManyWithoutEntrepriseNestedInput
    subCategories?: SubCategoryUpdateManyWithoutEntrepriseNestedInput
    transactions?: TransactionUpdateManyWithoutEntrepriseNestedInput
  }

  export type EntrepriseUncheckedUpdateWithoutDestinationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    tvaRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUncheckedUpdateManyWithoutEntrepriseNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutEntrepriseNestedInput
    products?: ProductUncheckedUpdateManyWithoutEntrepriseNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutEntrepriseNestedInput
    subCategories?: SubCategoryUncheckedUpdateManyWithoutEntrepriseNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutEntrepriseNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutDestinationInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutDestinationInput, TransactionUncheckedUpdateWithoutDestinationInput>
    create: XOR<TransactionCreateWithoutDestinationInput, TransactionUncheckedCreateWithoutDestinationInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutDestinationInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutDestinationInput, TransactionUncheckedUpdateWithoutDestinationInput>
  }

  export type TransactionUpdateManyWithWhereWithoutDestinationInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutDestinationInput>
  }

  export type ProductCreateWithoutTransactionsInput = {
    id?: string
    reference?: string | null
    name: string
    description: string
    quantity?: number
    unit: string
    price: number
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    subCategory?: SubCategoryCreateNestedOneWithoutProductsInput
    entreprise?: EntrepriseCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutTransactionsInput = {
    id?: string
    reference?: string | null
    name: string
    description: string
    quantity?: number
    unit: string
    price: number
    imageUrl: string
    categoryId: string
    subCategoryId?: string | null
    entrepriseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutTransactionsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutTransactionsInput, ProductUncheckedCreateWithoutTransactionsInput>
  }

  export type EntrepriseCreateWithoutTransactionsInput = {
    id?: string
    name: string
    email?: string | null
    address?: string | null
    tvaRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientCreateNestedManyWithoutEntrepriseInput
    invoices?: InvoiceCreateNestedManyWithoutEntrepriseInput
    products?: ProductCreateNestedManyWithoutEntrepriseInput
    categories?: CategoryCreateNestedManyWithoutEntrepriseInput
    subCategories?: SubCategoryCreateNestedManyWithoutEntrepriseInput
    destinations?: DestinationCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    email?: string | null
    address?: string | null
    tvaRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientUncheckedCreateNestedManyWithoutEntrepriseInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutEntrepriseInput
    products?: ProductUncheckedCreateNestedManyWithoutEntrepriseInput
    categories?: CategoryUncheckedCreateNestedManyWithoutEntrepriseInput
    subCategories?: SubCategoryUncheckedCreateNestedManyWithoutEntrepriseInput
    destinations?: DestinationUncheckedCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseCreateOrConnectWithoutTransactionsInput = {
    where: EntrepriseWhereUniqueInput
    create: XOR<EntrepriseCreateWithoutTransactionsInput, EntrepriseUncheckedCreateWithoutTransactionsInput>
  }

  export type DestinationCreateWithoutTransactionsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entreprise?: EntrepriseCreateNestedOneWithoutDestinationsInput
  }

  export type DestinationUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    description?: string | null
    entrepriseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DestinationCreateOrConnectWithoutTransactionsInput = {
    where: DestinationWhereUniqueInput
    create: XOR<DestinationCreateWithoutTransactionsInput, DestinationUncheckedCreateWithoutTransactionsInput>
  }

  export type InvoiceCreateWithoutTransactionsInput = {
    id?: string
    invoiceNumber: string
    date?: Date | string
    status?: $Enums.InvoiceStatus
    subtotal: number
    tva?: number
    totalAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutInvoicesInput
    entreprise?: EntrepriseCreateNestedOneWithoutInvoicesInput
  }

  export type InvoiceUncheckedCreateWithoutTransactionsInput = {
    id?: string
    invoiceNumber: string
    date?: Date | string
    status?: $Enums.InvoiceStatus
    subtotal: number
    tva?: number
    totalAmount: number
    clientId: string
    entrepriseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceCreateOrConnectWithoutTransactionsInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutTransactionsInput, InvoiceUncheckedCreateWithoutTransactionsInput>
  }

  export type ProductUpsertWithoutTransactionsInput = {
    update: XOR<ProductUpdateWithoutTransactionsInput, ProductUncheckedUpdateWithoutTransactionsInput>
    create: XOR<ProductCreateWithoutTransactionsInput, ProductUncheckedCreateWithoutTransactionsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutTransactionsInput, ProductUncheckedUpdateWithoutTransactionsInput>
  }

  export type ProductUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    subCategory?: SubCategoryUpdateOneWithoutProductsNestedInput
    entreprise?: EntrepriseUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    subCategoryId?: NullableStringFieldUpdateOperationsInput | string | null
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntrepriseUpsertWithoutTransactionsInput = {
    update: XOR<EntrepriseUpdateWithoutTransactionsInput, EntrepriseUncheckedUpdateWithoutTransactionsInput>
    create: XOR<EntrepriseCreateWithoutTransactionsInput, EntrepriseUncheckedCreateWithoutTransactionsInput>
    where?: EntrepriseWhereInput
  }

  export type EntrepriseUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: EntrepriseWhereInput
    data: XOR<EntrepriseUpdateWithoutTransactionsInput, EntrepriseUncheckedUpdateWithoutTransactionsInput>
  }

  export type EntrepriseUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    tvaRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUpdateManyWithoutEntrepriseNestedInput
    invoices?: InvoiceUpdateManyWithoutEntrepriseNestedInput
    products?: ProductUpdateManyWithoutEntrepriseNestedInput
    categories?: CategoryUpdateManyWithoutEntrepriseNestedInput
    subCategories?: SubCategoryUpdateManyWithoutEntrepriseNestedInput
    destinations?: DestinationUpdateManyWithoutEntrepriseNestedInput
  }

  export type EntrepriseUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    tvaRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUncheckedUpdateManyWithoutEntrepriseNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutEntrepriseNestedInput
    products?: ProductUncheckedUpdateManyWithoutEntrepriseNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutEntrepriseNestedInput
    subCategories?: SubCategoryUncheckedUpdateManyWithoutEntrepriseNestedInput
    destinations?: DestinationUncheckedUpdateManyWithoutEntrepriseNestedInput
  }

  export type DestinationUpsertWithoutTransactionsInput = {
    update: XOR<DestinationUpdateWithoutTransactionsInput, DestinationUncheckedUpdateWithoutTransactionsInput>
    create: XOR<DestinationCreateWithoutTransactionsInput, DestinationUncheckedCreateWithoutTransactionsInput>
    where?: DestinationWhereInput
  }

  export type DestinationUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: DestinationWhereInput
    data: XOR<DestinationUpdateWithoutTransactionsInput, DestinationUncheckedUpdateWithoutTransactionsInput>
  }

  export type DestinationUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entreprise?: EntrepriseUpdateOneWithoutDestinationsNestedInput
  }

  export type DestinationUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUpsertWithoutTransactionsInput = {
    update: XOR<InvoiceUpdateWithoutTransactionsInput, InvoiceUncheckedUpdateWithoutTransactionsInput>
    create: XOR<InvoiceCreateWithoutTransactionsInput, InvoiceUncheckedCreateWithoutTransactionsInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutTransactionsInput, InvoiceUncheckedUpdateWithoutTransactionsInput>
  }

  export type InvoiceUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    tva?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutInvoicesNestedInput
    entreprise?: EntrepriseUpdateOneWithoutInvoicesNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    tva?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateManyEntrepriseInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceCreateManyEntrepriseInput = {
    id?: string
    invoiceNumber: string
    date?: Date | string
    status?: $Enums.InvoiceStatus
    subtotal: number
    tva?: number
    totalAmount: number
    clientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateManyEntrepriseInput = {
    id?: string
    reference?: string | null
    name: string
    description: string
    quantity?: number
    unit: string
    price: number
    imageUrl: string
    categoryId: string
    subCategoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateManyEntrepriseInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubCategoryCreateManyEntrepriseInput = {
    id?: string
    name: string
    description?: string | null
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateManyEntrepriseInput = {
    id?: string
    type: $Enums.TransactionType
    quantity: number
    price: number
    subtotal: number
    productId: string
    destinationId?: string | null
    invoiceId?: string | null
    createdAt?: Date | string
  }

  export type DestinationCreateManyEntrepriseInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateWithoutEntrepriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutEntrepriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateManyWithoutEntrepriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUpdateWithoutEntrepriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    tva?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutInvoicesNestedInput
    transactions?: TransactionUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutEntrepriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    tva?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateManyWithoutEntrepriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    tva?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpdateWithoutEntrepriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    subCategory?: SubCategoryUpdateOneWithoutProductsNestedInput
    transactions?: TransactionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutEntrepriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    subCategoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutEntrepriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    subCategoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpdateWithoutEntrepriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
    subCategories?: SubCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutEntrepriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
    subCategories?: SubCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutEntrepriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoryUpdateWithoutEntrepriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput
    products?: ProductUpdateManyWithoutSubCategoryNestedInput
  }

  export type SubCategoryUncheckedUpdateWithoutEntrepriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutSubCategoryNestedInput
  }

  export type SubCategoryUncheckedUpdateManyWithoutEntrepriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutEntrepriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutTransactionsNestedInput
    destination?: DestinationUpdateOneWithoutTransactionsNestedInput
    invoice?: InvoiceUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutEntrepriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    destinationId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutEntrepriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    destinationId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationUpdateWithoutEntrepriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateWithoutEntrepriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateManyWithoutEntrepriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateManyClientInput = {
    id?: string
    invoiceNumber: string
    date?: Date | string
    status?: $Enums.InvoiceStatus
    subtotal: number
    tva?: number
    totalAmount: number
    entrepriseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    tva?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entreprise?: EntrepriseUpdateOneWithoutInvoicesNestedInput
    transactions?: TransactionUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    tva?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    tva?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInvoiceInput = {
    id?: string
    type: $Enums.TransactionType
    quantity: number
    price: number
    subtotal: number
    productId: string
    entrepriseId?: string | null
    destinationId?: string | null
    createdAt?: Date | string
  }

  export type TransactionUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutTransactionsNestedInput
    entreprise?: EntrepriseUpdateOneWithoutTransactionsNestedInput
    destination?: DestinationUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    destinationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    destinationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyProductInput = {
    id?: string
    type: $Enums.TransactionType
    quantity: number
    price: number
    subtotal: number
    entrepriseId?: string | null
    destinationId?: string | null
    invoiceId?: string | null
    createdAt?: Date | string
  }

  export type TransactionUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entreprise?: EntrepriseUpdateOneWithoutTransactionsNestedInput
    destination?: DestinationUpdateOneWithoutTransactionsNestedInput
    invoice?: InvoiceUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    destinationId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    destinationId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: string
    reference?: string | null
    name: string
    description: string
    quantity?: number
    unit: string
    price: number
    imageUrl: string
    subCategoryId?: string | null
    entrepriseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubCategoryCreateManyCategoryInput = {
    id?: string
    name: string
    description?: string | null
    entrepriseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategory?: SubCategoryUpdateOneWithoutProductsNestedInput
    entreprise?: EntrepriseUpdateOneWithoutProductsNestedInput
    transactions?: TransactionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    subCategoryId?: NullableStringFieldUpdateOperationsInput | string | null
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    subCategoryId?: NullableStringFieldUpdateOperationsInput | string | null
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoryUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutSubCategoryNestedInput
    entreprise?: EntrepriseUpdateOneWithoutSubCategoriesNestedInput
  }

  export type SubCategoryUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutSubCategoryNestedInput
  }

  export type SubCategoryUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManySubCategoryInput = {
    id?: string
    reference?: string | null
    name: string
    description: string
    quantity?: number
    unit: string
    price: number
    imageUrl: string
    categoryId: string
    entrepriseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutSubCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    entreprise?: EntrepriseUpdateOneWithoutProductsNestedInput
    transactions?: TransactionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSubCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutSubCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyDestinationInput = {
    id?: string
    type: $Enums.TransactionType
    quantity: number
    price: number
    subtotal: number
    productId: string
    entrepriseId?: string | null
    invoiceId?: string | null
    createdAt?: Date | string
  }

  export type TransactionUpdateWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutTransactionsNestedInput
    entreprise?: EntrepriseUpdateOneWithoutTransactionsNestedInput
    invoice?: InvoiceUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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