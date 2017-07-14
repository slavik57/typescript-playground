export declare type Node<T> = {
    data: T;
    next: Node<T>;
};
export declare type DataNode<T> = T & {
    next: DataNode<T>;
};
