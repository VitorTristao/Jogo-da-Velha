var jog1 = 'imagemx';
var jog2 = 'imagemo';
var flag = 1;
var v=[0,0,0,0,0,0,0,0,0];
var pontox = 0;
var pontoo = 0;
var i;

function verificar(){
	if (v[0]==1 && v[1]==1 && v[2]==1){
		alert('vitóriaaaaaa X :D');
		pontox = pontox + 1;
		restart();
	}
	else if (v[3]==1 && v[4]==1 && v[5]==1){
		alert('vitóriaaaaaa X :D');
		pontox = pontox + 1;
		restart();
	}
	else if (v[6]==1 && v[7]==1 && v[8]==1){
		alert('vitóriaaaaaa X :D');
		pontox = pontox + 1;
		restart();
	}
	else if (v[0]==1 && v[3]==1 && v[6]==1){
		alert('vitóriaaaaaa X :D');
		pontox = pontox + 1;
		restart();
	}
	else if (v[1]==1 && v[4]==1 && v[7]==1){
		alert('vitóriaaaaaa X :D');
		pontox = pontox + 1;
		restart();
	}
	else if (v[2]==1 && v[5]==1 && v[8]==1){
		alert('vitóriaaaaaa X :D');
		pontox = pontox + 1;
		restart();
	}
	else if (v[0]==1 && v[4]==1 && v[8]==1){
		alert('vitóriaaaaaa X :D');
		pontox = pontox + 1;
		restart();
	}
	else if (v[2]==1 && v[4]==1 && v[6]==1){
		alert('vitóriaaaaaa X :D');
		pontox = pontox + 1;
		restart();
	}
	else if (v[0]==2 && v[1]==2 && v[2]==2){
		alert('vitóriaaaaaa O :D');
		pontoo = pontoo + 1;
		restart();
	}
	else if (v[3]==2 && v[4]==2 && v[5]==2){
		alert('vitóriaaaaaa O :D');
		pontoo = pontoo + 1;
		restart();
	}
	else if (v[6]==2 && v[7]==2 && v[8]==2){
		alert('vitóriaaaaaa O :D');
		pontoo = pontoo + 1;
		restart();
	}
	else if (v[0]==2 && v[3]==2 && v[6]==2){
		alert('vitóriaaaaaa O :D');
		pontoo = pontoo + 1;
		restart();
	}
	else if (v[1]==2 && v[4]==2 && v[7]==2){
		alert('vitóriaaaaaa O :D');
		pontoo = pontoo + 1;
		restart();
	}
	else if (v[2]==2 && v[5]==2 && v[8]==2){
		alert('vitóriaaaaaa O :D');
		pontoo = pontoo + 1;
		restart();
	}
	else if (v[0]==2 && v[4]==2 && v[8]==2){
		alert('vitóriaaaaaa O :D');
		pontoo = pontoo + 1;
		restart();
	}
	else if (v[2]==2 && v[4]==2 && v[6]==2){
		alert('vitóriaaaaaa O :D');
		pontoo = pontoo + 1;
		restart();
	}
	document.getElementById('pontosx').innerHTML = pontox;
	document.getElementById('pontoso').innerHTML = pontoo;
}

function restart(){
	for(i = 0; i < 9; i++){
		v[i] = 0;
	}
	for(i = 1; i <= 9; i++){
		document.getElementById('espaco'+ i).src ="imagens/fundobranco.jpg" 
	}
	flag = 1;
}







function espaco1(){
	if(flag == 1){                                                                     
		if (v[0] == 0){
			document.getElementById('espaco1').src="imagens/imagemx.jpg";
			flag = 2; 
			v[0] = 1;
		} else{
			alert('espaço já foi escolhido');

		}
	}else if (flag == 2) {
		
		if (v[0] == 0){
			document.getElementById('espaco1').src="imagens/imagemo.jpg";
			flag = 1;
			v[0] = 2;
	}   else{
		alert('espaço já foi escolhido')
	}
	}
	verificar();
}
function espaco2(){
	if(flag == 1){                                                                     
		if (v[1] == 0){
			document.getElementById('espaco2').src="imagens/imagemx.jpg";
			flag = 2; 
			v[1] = 1;
		} else{
			alert('espaço já foi escolhido');

		}
	}else if (flag == 2) {
		
		if (v[1] == 0){
			document.getElementById('espaco2').src="imagens/imagemo.jpg";
			flag = 1;
			v[1] = 2;
	}   else{
		alert('espaço já foi escolhido')
	}
	}
	verificar();
}
function espaco3(){
	if(flag == 1){                                                                     
		if (v[2] == 0){
			document.getElementById('espaco3').src="imagens/imagemx.jpg";
			flag = 2; 
			v[2] = 1;
		} else{
			alert('espaço já foi escolhido');

		}
	}else if (flag == 2) {
		
		if (v[2] == 0){
			document.getElementById('espaco3').src="imagens/imagemo.jpg";
			flag = 1;
			v[2] = 2;
	}   else{
		alert('espaço já foi escolhido')
	}
	}
	verificar();
}
function espaco4(){
	if(flag == 1){                                                                     
		if (v[3] == 0){
			document.getElementById('espaco4').src="imagens/imagemx.jpg";
			flag = 2; 
			v[3] = 1;
		} else{
			alert('espaço já foi escolhido');

		}
	}else if (flag == 2) {
		
		if (v[3] == 0){
			document.getElementById('espaco4').src="imagens/imagemo.jpg";
			flag = 1;
			v[3] = 2;
	}   else{
		alert('espaço já foi escolhido')
	}
	}
	verificar();
}
function espaco5(){
	if(flag == 1){                                                                     
		if (v[4] == 0){
			document.getElementById('espaco5').src="imagens/imagemx.jpg";
			flag = 2; 
			v[4] = 1;
		} else{
			alert('espaço já foi escolhido');

		}
	}else if (flag == 2) {
		
		if (v[4] == 0){
			document.getElementById('espaco5').src="imagens/imagemo.jpg";
			flag = 1;
			v[4] = 2;
	}   else{
		alert('espaço já foi escolhido')
	}
	}
	verificar();
}
function espaco6(){
	if(flag == 1){                                                                     
		if (v[5] == 0){
			document.getElementById('espaco6').src="imagens/imagemx.jpg";
			flag = 2; 
			v[5] = 1;
		} else{
			alert('espaço já foi escolhido');

		}
	}else if (flag == 2) {
		
		if (v[5] == 0){
			document.getElementById('espaco6').src="imagens/imagemo.jpg";
			flag = 1;
			v[5] = 2;
	}   else{
		alert('espaço já foi escolhido')
	}
	}
	verificar();
}
function espaco7(){
	if(flag == 1){                                                                     
		if (v[6] == 0){
			document.getElementById('espaco7').src="imagens/imagemx.jpg";
			flag = 2; 
			v[6] = 1;
		} else{
			alert('espaço já foi escolhido');

		}
	}else if (flag == 2) {
		
		if (v[6] == 0){
			document.getElementById('espaco7').src="imagens/imagemo.jpg";
			flag = 1;
			v[6] = 2;
	}   else{
		alert('espaço já foi escolhido')
	}
	}
	verificar();
}
function espaco8(){
	if(flag == 1){                                                                     
		if (v[7] == 0){
			document.getElementById('espaco8').src="imagens/imagemx.jpg";
			flag = 2; 
			v[7] = 1;
		} else{
			alert('espaço já foi escolhido');

		}
	}else if (flag == 2) {
		
		if (v[7] == 0){
			document.getElementById('espaco8').src="imagens/imagemo.jpg";
			flag = 1;
			v[7] = 2;
	}   else{
		alert('espaço já foi escolhido')
	}
	}
	verificar();
}
function espaco9(){
	if(flag == 1){                                                                     
		if (v[8] == 0){
			document.getElementById('espaco9').src="imagens/imagemx.jpg";
			flag = 2; 
			v[8] = 1;
		} else{
			alert('espaço já foi escolhido');

		}
	}else if (flag == 2) {
		
		if (v[8] == 0){
			document.getElementById('espaco9').src="imagens/imagemo.jpg";
			flag = 1;
			v[8] = 2;
	}   else{
		alert('espaço já foi escolhido')
	}
	}
	verificar();
}
