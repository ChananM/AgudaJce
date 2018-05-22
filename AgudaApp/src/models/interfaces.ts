export interface Token {
    token: string
}

export interface Albums {
    data: Album[],
    paging: {
        next?: string,
        previous?: string;
    },
}
  
export interface Album {
    created_time?: string,
    id: string,
    name?: string,
    cover_photo?: Photo,
    count?: number;
}

export interface Photos {
    data: Photo[],
    paging: {
        next?: string,
        previous?: string;
    }
}

export interface Photo {
    id: string,
    images?: Image[];
}

export interface Image {
    height: number,
    width: number,
    source: string,
}