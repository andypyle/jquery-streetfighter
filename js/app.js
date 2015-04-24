$(document).ready(function(){
	var ryu = {
		main : $('.ryu'),
		still : $('.ryu-still'),
		ready : $('.ryu-ready'),
		throwing : $('.ryu-throwing'),
		hadouken : $('.hadouken')
	}
	ryu.main.mouseenter(function(){
		ryu.still.hide();
		ryu.ready.show();
	})
	.mouseleave(function(){
		ryu.ready.hide();
		ryu.still.show();
	})
	.mousedown(function(){
		ryu.ready.hide();
		ryu.throwing.show();
		ryu.hadouken.show();
	})
	.mouseup(function(){
		ryu.ready.show();
		ryu.throwing.hide();
	});
});