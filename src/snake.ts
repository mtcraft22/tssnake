export class snake{
    private _children:number
    private _lastcords:number[][]=[]
    private _cords:number[]
    private ctx:CanvasRenderingContext2D
    constructor (ctx:CanvasRenderingContext2D){
        this.ctx=ctx
        this._children=0
        this._lastcords.unshift([0,0])
        this._cords=[0,0]
    }
    set children(nch:number){
        if (nch>0){
            this._children=nch
        }
    }
    get children(){
        return this._children
    }
    set cords(arcord:number[]){
        if (arcord.length==2 && arcord[0]>=0 && arcord[1]>=0){
            this._cords=[arcord[0], arcord[1]]
        }
    }
    get cords(){
        return this._cords
    }
    get lastcords(){
        return this._lastcords
    }
    public draw(){
        
        this.ctx.moveTo(this._cords[0],this._cords[1])
        this.ctx.fillStyle="green"
        this.ctx.rect(this._cords[0],this._cords[1],20,20)
        
        this.ctx.fill();
        this.ctx.closePath()
        
        for (let i=0 ; i<this._lastcords.length;i++){
            this.ctx.moveTo(this._lastcords[i][0],this._lastcords[i][1])
            this.ctx.fillStyle="green"
            this.ctx.rect(this._lastcords[i][0],this._lastcords[i][1],20,20)
            
            this.ctx.fill();
            this.ctx.closePath()
        }
    }
}