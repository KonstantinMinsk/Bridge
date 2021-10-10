interface TPairCard<T> {
    image: T;
    value: T;
}

type TDataPairCard = Record<string, unknown> & {
    cards: TPairCard[],
    remaining: number | null
}

type TDataDeskID = Record<string, unknown> & {
    // eslint-disable-next-line camelcase
    deck_id: string
}
