

interface ISnakeCoord{
    x:number;
    y:number;
}

export interface IGlobalState{
    snake: ISnakeCoord[] | [];
    disallowedDirection: string;
}

const globalState: IGlobalState{
    snake:[
        { x: 580, y: 300 },
        { x: 560, y: 300 },
        { x: 540, y: 300 },
        { x: 520, y: 300 },
        { x: 500, y: 300 },
    ], disallowedDirection:""
};