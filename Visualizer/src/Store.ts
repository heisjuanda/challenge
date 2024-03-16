import { reactive } from "vue";

import { Hit } from "./types/emailTypes";

interface Store {
  fetchedEmails: Hit[] | undefined | null;
  setFetchedEmails(newEmails: Hit[] | undefined | null): void;
  searchedValue: string;
  setSearchedValue(newSearch: string): void;
  isSearching: boolean;
  setIsSearching(isSearching: boolean): void;
  pagination: number;
  setPagination(pagination: number): void;
  hasMoreResults: boolean;
  setHasMoreResults(hasMoreResults: boolean): void;
  isEmailResponseForPagination: boolean;
  setIsEmailResponseForPagination(isEmailResponseForPagination: boolean): void;
  order: boolean;
  setOrder(order: boolean): void;
}

const store: Store = reactive({
  fetchedEmails: [],
  setFetchedEmails(newEmails: Hit[] | undefined | null) {
    store.fetchedEmails = newEmails;
  },
  searchedValue: "",
  setSearchedValue(newSearch: string) {
    store.searchedValue = newSearch;
  },
  isSearching: false,
  setIsSearching(isSearching: boolean) {
    store.isSearching = isSearching;
  },
  pagination: 0,
  setPagination(pagination: number) {
    store.pagination += pagination;
  },
  hasMoreResults: true,
  setHasMoreResults(hasMoreResults: boolean) {
    store.hasMoreResults = hasMoreResults;
  },
  isEmailResponseForPagination: true,
  setIsEmailResponseForPagination(isEmailResponseForPagination: boolean) {
    store.isEmailResponseForPagination = isEmailResponseForPagination;
  },
  order: false,
  setOrder(order: boolean) {
    store.order = order;
  },
});

export default store;
