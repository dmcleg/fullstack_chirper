export interface TUsers {
    id?: number;
    username?: string;
    password?: string;
    email?: string;
    created_at?: Date;
}

export interface TChirps {
    id?: number;
    userid?: number;
    content?: string;
    _created?: Date;
}