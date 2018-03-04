/*

# Event.ts

Copyright(C) xxx. All rights reserved.

## 概要

- 検討中。main.tsからイベント制御分けたい。
- UIとmainがバラバラにこいつにaddEventListenerするのかなぁ。
- addEventListenerできるオブジェクトの最小単位って何だっけ。

*/
export default class UIEvent{

	uiElement: HTMLElement

	// updateRequired = false

	pressed = {}
	isTouched = false
	lastTouchPos = {x: -1, y: -1}



	constructor(uiElement:HTMLElement){

		this.uiElement = uiElement //とりあえずevent受けるために置いてみたやつ。。

		window.addEventListener('resize',()=>{
			this.uiElement.dispatchEvent(new Event("window.resize")) //TODO: イベント名は一箇所にまとめる
			// console.log("window resize.");
		})

		window.addEventListener('keydown',(event)=>{
			// console.log(event.keyCode+" down")
			this.pressed[event.keyCode]=true

		})
		window.addEventListener('keyup',(event)=>{
			// console.log(event.keyCode+" up")
			this.pressed[event.keyCode]=false
		})

		//タッチイベント
		window.addEventListener("touchstart", (event)=>{this.TouchStart(event)}, false);
		window.addEventListener("touchend", (event)=>{this.TouchEnd(event)}, false);
		window.addEventListener("touchcancel", (event)=>{this.TouchEnd(event)}, false);
		window.addEventListener("touchmove", (event)=>{this.TouchMove(event)}, false);

		//マウスイベント
		window.addEventListener('mousedown',(event)=>{this.TouchStart(event)})
		window.addEventListener('mouseup',(event)=>{this.TouchEnd(event)})
		window.addEventListener('mousemove',(event)=>{this.TouchMove(event)})
	}

	TouchStart(event){
		console.log("touch start");
		this.isTouched = true;
		this.lastTouchPos = {
			x: event.clientX,
			y: event.clientY
		}
	}
	TouchEnd(event){
		console.log("touch end");
		this.isTouched = false;
	}

	// IsTouchEvent(event:MouseEvent | TouchEvent):bool{
	// 	if(event as TouchEvent) return false;
	// 	return true;
	// }

	GetClientEventPoints(event:MouseEvent | TouchEvent):{x:number,y:number}{
		if((<TouchEvent>event).touches){
			return {
				x:(<TouchEvent>event).touches[0].clientX,
				y:(<TouchEvent>event).touches[0].clientY
			}
		}
		return {
			x: (<MouseEvent>event).clientX,
			y: (<MouseEvent>event).clientY
		}

	}

	TouchMove(event:MouseEvent | TouchEvent){
		if(!this.isTouched) return;

		var clientPoints=this.GetClientEventPoints(event)

		const delta={
			x: this.lastTouchPos.x - clientPoints.x,
			y: this.lastTouchPos.y - clientPoints.y
		}
		this.lastTouchPos = {
			x: clientPoints.x,
			y: clientPoints.y
		}
		// console.log("touch move",clientPoints);
		
		console.log("dragged.", delta, clientPoints);

		if(isNaN(delta.x)){
			console.log("NaN")
			return
		}
		
		let eventDetail:any = {detail: { delta: delta }}
		this.uiElement.dispatchEvent(new CustomEvent("window.mousemove",eventDetail));
	}
}