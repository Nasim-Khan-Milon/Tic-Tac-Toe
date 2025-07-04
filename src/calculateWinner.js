import Square from "./Square";

export function calculateWinner(Squares){
    const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for(let i=0; i<lines.length-1;i++)
  {
    const [a,b,c] = lines[i];
    if(Squares[a] && Squares[a]==Squares[b] && Squares[a]==Squares[c])
    {
        return Squares[a];
    }
  }
  return null;
}