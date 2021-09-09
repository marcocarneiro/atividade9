function eventos()
{         
	//biblioteca de objetos
	var main = exportRoot;
	// habilita interações touch
	createjs.Touch.enable(stage);
	// habilita eventos de mouse over/out
	stage.enableMouseOver(20);
	// acompanha o mouse mesmo quando sair do stage
	stage.mouseMoveOutside = true;

	//interações dos objetos
    function moveObj(obj, obj2, check)
    {        
        var posXinicial, posYinicial, obj2PosX, obj2PosY;
        obj2PosX = obj2.x;
        obj2PosY = obj2.y;

        obj.addEventListener("mousedown", function(event) {
            posXinicial = obj.x;
            posYinicial = obj.y;
            //traz o objeto para frente (re-adiciona ao stage)
            event.currentTarget.parent.addChild(event.currentTarget);
            //
            var sX = Math.floor(event.stageX);
            var sY = Math.floor(event.stageY);
            obj.dX = sX - obj.x;
            obj.dY = sY - obj.y;
        });
        obj.addEventListener("pressmove", function(event) {
            var sX = Math.floor(event.stageX);
            var sY = Math.floor(event.stageY);
            obj.x = sX - obj.dX;
            obj.y = sY - obj.dY;
            stage.update();
        });
        obj.addEventListener("pressup", function(event) {
            var sX = Math.floor(event.stageX);
            var sY = Math.floor(event.stageY);
            
            var pt = obj.localToLocal(0,0,obj2);
			if (obj2.hitTest(pt.x, pt.y)) 
            { 
                obj.alpha = 0;
                obj2.alpha = 0;
                check.x = obj2PosX;
                check.y = obj2PosY;
                check.gotoAndPlay(1); 
            }else{
                obj.x = posXinicial;
                obj.y = posYinicial;
            }

        });
    }

    moveObj(main.iglu_mc, main.i_mc, main.icheck_mc);
    moveObj(main.estrela_mc, main.e_mc, main.echeck_mc);
    moveObj(main.abacaxi_mc, main.a_mc, main.acheck_mc);
    moveObj(main.ovo_mc, main.o_mc, main.ocheck_mc);
    moveObj(main.uva_mc, main.u_mc, main.ucheck_mc);
	
}