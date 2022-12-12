export const clearBoard = (context: CanvasRenderingContext2D | null)=>{
    if (context){
        context.clearRect(0,0,1000,600);
    }
}
export interface IObjectBody {
    x: number;
    y: number;
  }
  
  export const drawObject = (
    context: CanvasRenderingContext2D | null,
    objectBody: IObjectBody[],
    fillColor: string,
    strokeStyle = "#146356"
  ) => {
    if (context) {
      objectBody.forEach((object: IObjectBody) => {
        context.fillStyle = fillColor;
        context.strokeStyle = strokeStyle;
        context?.fillRect(object.x, object.y, 20, 20);
        context?.strokeRect(object.x, object.y, 20, 20);
      });
    }
  };

  interface ISnakeCoord {
    x: number;
    y: number;
  }
  
  export interface IGlobalState {
    snake: ISnakeCoord[] | [];
  }
  
  const globalState: IGlobalState = {
    //Postion of the entire snake
    snake: [
      { x: 580, y: 300 },
      { x: 560, y: 300 },
      { x: 540, y: 300 },
      { x: 520, y: 300 },
      { x: 500, y: 300 },
    ],
  };