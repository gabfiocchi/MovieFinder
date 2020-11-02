export interface Store {
    movies: MoviesState
}
export interface MoviesState {
    isLoading: boolean;
    items: any[];
}