	let posicion=0;
	function siguiente(){
		if(posicion<4){
			posicion=posicion+1;			
			document.getElementById("foto").src=`img/foto${posicion}.jpg`;		
			setTimeout("siguiente()",3000)
		}
		else{document.getElementById("foto").src=`img/foto1.jpg`;
			posicion=0;
			siguiente()	}
	}