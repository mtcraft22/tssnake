

export class food{
    private _cords:number[]
    private _listcords:Array<number[]>=[]
    private ctx:CanvasRenderingContext2D
    constructor (ctx:CanvasRenderingContext2D){
        this.ctx=ctx
        this._cords=[0,0]
    }
    public spawn(){
        this._cords=[Math.random()*800,Math.random()*800]
        this._listcords.unshift(this._cords)
    }
    public draw(){
        for(let i of this._listcords){
            this.ctx.beginPath()
            this.ctx.moveTo(i[0],i[1])
            this.ctx.fillStyle = "red";
            this.ctx.rect(i[0],i[1],20,20)
            this.ctx.fill();
            this.ctx.closePath()
        }
    }
    set cords(arcord:number[]){
        if (arcord.length==2 && arcord[0]>=0 && arcord[1]>=0){
            this._cords=[arcord[0], arcord[1]]
        }
    }
    get cords(){
        return this._cords
    }
    get listcords(){
        return this._listcords
    }
}
