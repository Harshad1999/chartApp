import * as actions from './actions/Types';

interface InsightSummary {
  total_queries: number;
  successful_queries: number;
  failed_queries: number;
  average_response_time: number;
}

interface CategoryDistribution {
  small_talk: number;
  technical_support: number;
  sales_inquiries: number;
  customer_service: number;
}

interface ResponseTime {
  date: string;
  average_time: number;
}

interface UserSatisfactionRating {
  rating: number;
  count: number;
}

interface UsageStatistics {
  by_platform: Record<string, number>;
  by_country: Record<string, number>;
}

export interface AuthData {
  insight_summary: InsightSummary;
  category_distribution: CategoryDistribution;
  response_times: {
    day_wise: ResponseTime[];
    week_wise: ResponseTime[];
  };
  user_satisfaction: {
    ratings: UserSatisfactionRating[];
  };
  usage_statistics: UsageStatistics;
}
// Define types for action types and payloads
export type ActionType = typeof actions.SET_AUTH_DATA;
export type ActionPayload = any;

// Define interface for auth state
export interface AuthState {
  name: string;
  token?: string; // Optional token property
  data: AuthData;
}

const initialState: AuthState = {
  name: 'react',
  data: {
    insight_summary: {
      total_queries: 0,
      successful_queries: 0,
      failed_queries: 0,
      average_response_time: 0,
    },
    category_distribution: {
      small_talk: 0,
      technical_support: 0,
      sales_inquiries: 0,
      customer_service: 0,
    },
    response_times: {
      day_wise: [],
      week_wise: [],
    },
    user_satisfaction: {
      ratings: [],
    },
    usage_statistics: {
      by_platform: {},
      by_country: {},
    },
  },
};

export interface AuthAction {
  type: ActionType;
  payload: ActionPayload;
}

export const authReducer = (
  state: AuthState = initialState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case actions.SET_AUTH_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
