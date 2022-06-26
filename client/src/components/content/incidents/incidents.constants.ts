interface Pagination {
    pageSize: number;
    hideOnSinglePage: boolean;
}

export const pagination: Pagination = {
    pageSize: 10,
    hideOnSinglePage: true
};

export const key = (record: { id: string }): string => record.id;
