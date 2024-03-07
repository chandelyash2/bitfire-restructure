import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
};

export type AuthInput = {
  password: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  error?: Maybe<ErrorType>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type ErrorType = {
  __typename?: 'ErrorType';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type Event = {
  __typename?: 'Event';
  id: Scalars['String']['output'];
  market?: Maybe<Array<Maybe<MarketType>>>;
  name: Scalars['String']['output'];
  openDate: Scalars['DateTime']['output'];
};

export type EventListsType = {
  __typename?: 'EventListsType';
  event: Array<Maybe<Event>>;
  eventType?: Maybe<EventType>;
};

export type EventType = {
  __typename?: 'EventType';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type ExData = {
  __typename?: 'ExData';
  availableToBack: Array<Maybe<PriceSize>>;
  availableToLay: Array<Maybe<PriceSize>>;
};

export type MarketRunners = {
  __typename?: 'MarketRunners';
  ex: ExData;
  selectionId: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type MarketType = {
  __typename?: 'MarketType';
  marketId: Scalars['String']['output'];
  marketName: Scalars['String']['output'];
  runners?: Maybe<Array<Maybe<MarketRunners>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  authLogin?: Maybe<AuthPayload>;
};


export type MutationAuthLoginArgs = {
  input?: InputMaybe<AuthInput>;
};

export type PriceSize = {
  __typename?: 'PriceSize';
  price: Scalars['Float']['output'];
  size: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  inPlay: Array<Maybe<EventListsType>>;
  me?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  availableCredit?: Maybe<Scalars['Int']['output']>;
  bettingStatus?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  creditLimit?: Maybe<Scalars['Int']['output']>;
  loginStep?: Maybe<Scalars['Boolean']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  transferStatus?: Maybe<Scalars['Boolean']['output']>;
  userName: Scalars['String']['output'];
};

export type AuthLoginMutationVariables = Exact<{
  input?: InputMaybe<AuthInput>;
}>;


export type AuthLoginMutation = { __typename?: 'Mutation', authLogin?: { __typename?: 'AuthPayload', token?: string | null, user?: { __typename?: 'User', _id: string, userName: string, status?: string | null, role?: string | null, availableCredit?: number | null, creditLimit?: number | null, transferStatus?: boolean | null, bettingStatus?: boolean | null, loginStep?: boolean | null, createdAt?: any | null } | null, error?: { __typename?: 'ErrorType', message: string, code: string } | null } | null };

export type InPlayQueryVariables = Exact<{ [key: string]: never; }>;


export type InPlayQuery = { __typename?: 'Query', inPlay: Array<{ __typename?: 'EventListsType', eventType?: { __typename?: 'EventType', id: string, name: string } | null, event: Array<{ __typename?: 'Event', id: string, name: string, market?: Array<{ __typename?: 'MarketType', marketId: string, marketName: string, runners?: Array<{ __typename?: 'MarketRunners', selectionId: string, status: string, ex: { __typename?: 'ExData', availableToBack: Array<{ __typename?: 'PriceSize', price: number, size: number } | null>, availableToLay: Array<{ __typename?: 'PriceSize', price: number, size: number } | null> } } | null> | null } | null> | null } | null> } | null> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', _id: string, userName: string, status?: string | null, role?: string | null, availableCredit?: number | null, creditLimit?: number | null, transferStatus?: boolean | null, bettingStatus?: boolean | null, loginStep?: boolean | null, createdAt?: any | null } | null };


export const AuthLoginDocument = gql`
    mutation AuthLogin($input: AuthInput) {
  authLogin(input: $input) {
    token
    user {
      _id
      userName
      status
      role
      availableCredit
      creditLimit
      transferStatus
      bettingStatus
      loginStep
      createdAt
    }
    error {
      message
      code
    }
  }
}
    `;
export type AuthLoginMutationFn = Apollo.MutationFunction<AuthLoginMutation, AuthLoginMutationVariables>;

/**
 * __useAuthLoginMutation__
 *
 * To run a mutation, you first call `useAuthLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authLoginMutation, { data, loading, error }] = useAuthLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthLoginMutation(baseOptions?: Apollo.MutationHookOptions<AuthLoginMutation, AuthLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthLoginMutation, AuthLoginMutationVariables>(AuthLoginDocument, options);
      }
export type AuthLoginMutationHookResult = ReturnType<typeof useAuthLoginMutation>;
export type AuthLoginMutationResult = Apollo.MutationResult<AuthLoginMutation>;
export type AuthLoginMutationOptions = Apollo.BaseMutationOptions<AuthLoginMutation, AuthLoginMutationVariables>;
export const InPlayDocument = gql`
    query InPlay {
  inPlay {
    eventType {
      id
      name
    }
    event {
      id
      name
      market {
        marketId
        marketName
        runners {
          selectionId
          status
          ex {
            availableToBack {
              price
              size
            }
            availableToLay {
              price
              size
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useInPlayQuery__
 *
 * To run a query within a React component, call `useInPlayQuery` and pass it any options that fit your needs.
 * When your component renders, `useInPlayQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInPlayQuery({
 *   variables: {
 *   },
 * });
 */
export function useInPlayQuery(baseOptions?: Apollo.QueryHookOptions<InPlayQuery, InPlayQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InPlayQuery, InPlayQueryVariables>(InPlayDocument, options);
      }
export function useInPlayLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InPlayQuery, InPlayQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InPlayQuery, InPlayQueryVariables>(InPlayDocument, options);
        }
export function useInPlaySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<InPlayQuery, InPlayQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<InPlayQuery, InPlayQueryVariables>(InPlayDocument, options);
        }
export type InPlayQueryHookResult = ReturnType<typeof useInPlayQuery>;
export type InPlayLazyQueryHookResult = ReturnType<typeof useInPlayLazyQuery>;
export type InPlaySuspenseQueryHookResult = ReturnType<typeof useInPlaySuspenseQuery>;
export type InPlayQueryResult = Apollo.QueryResult<InPlayQuery, InPlayQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    _id
    userName
    status
    role
    availableCredit
    creditLimit
    transferStatus
    bettingStatus
    loginStep
    createdAt
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export function useMeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;