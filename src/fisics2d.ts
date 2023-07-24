export class Physics2D{
    static Rectcolision2D(y1:number,x1:number,y2:number,x2:number,sizex:number,sizey:number){
        return !(x1>x2+sizex || x1+sizex<x2 || y1>y2+sizey || y1+sizey<y2)
    }   
}