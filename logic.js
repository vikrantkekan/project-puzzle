
function movepawn(x,p){

let source = document.getElementById(p);

const parentElement = source.parentNode.id;

if(rollback==p){
var newpos=parseInt(parentElement)-x;
if(x==6 || x==1){
rollback='';
}
}else{
var newpos=x+parseInt(parentElement);
}

if(newpos<71){


let mytemp=parseInt(parentElement)+1;
document.getElementById("mytemp").value=mytemp;

myInterval = setInterval(function(){
		singlestep(source,newpos);
}, 300);

	//for 6 number double chance
if(x==6){
	if(newpos!=10 && newpos!=30 && newpos!=55){
		if(counter==0){counter=1;}else{counter=0;}
	}
}

	
	check_conditions(newpos,p);
	score_update(newpos,p);

}
else{

if(counter==0){
	document.getElementById('msg').innerHTML=document.getElementById('savedname').value;+"'s Turn";
	blinkpawn('pawn');
}
else{
	document.getElementById('msg').innerHTML='Company Turn';
	blinkpawn('computer');
}

}



//resetting cube
setTimeout(function(){
	cube.classList.remove('cube_transition');
cube.style.transform = 'rotateX(0deg) rotateY(0deg)';
if(counter==0){
document.getElementById('playbtn').style.display='block';	
}else{
	auto_rotate();
}
},2500);


}
//end above function


function singlestep(sourc,npos){
	let mytemp=document.getElementById("mytemp").value;
	if(mytemp<=npos){
		pop.play();
		document.getElementById(mytemp).appendChild(sourc);
		document.getElementById("mytemp").value=parseInt(mytemp)+1;
	}else{
		clearmyInterval();
	}

}

function clearmyInterval(){
	clearInterval(myInterval); 
}


function singlesteptwo(sourc,npos){
	let mytemp2=document.getElementById("mytemp2").value;
	if(mytemp2<=npos){
		pop.play();
		document.getElementById(mytemp2).appendChild(sourc);
		document.getElementById("mytemp2").value=parseInt(mytemp2)+1;
	}else{
		clearmyIntervaltwo();
	}

}

function clearmyIntervaltwo(){
	clearInterval(myIntervaltwo); 
}

function auto_rotate(){
	setTimeout(function(){
		select_player();
	},2000)
}


function jumpmove(a,p){

let source = document.getElementById(p);
const parelem = source.parentNode.id;
document.getElementById(a).appendChild(source);

/*
let mytemp2=parseInt(parelem)+1;
document.getElementById("mytemp2").value=mytemp2;

//document.getElementById(a).appendChild(source);

myIntervaltwo = setInterval(function(){
		singlesteptwo(source,a);
}, 300);
*/

if(p=='pawn')
	{
	document.getElementById('playeronescore').innerHTML=a;
	}
else{
	document.getElementById('computerscore').innerHTML=a;
}

}


function score_update(newpos,p){
	if(p=='pawn')
	{document.getElementById('playeronescore').innerHTML=newpos;}
else{document.getElementById('computerscore').innerHTML=newpos;}

if(counter==0){
	document.getElementById('msg').innerHTML=document.getElementById('savedname').value+"'s Turn";
	blinkpawn('pawn');
}
if(counter==1){
	document.getElementById('msg').innerHTML='Company Turn';
	blinkpawn('computer');
}
}

function check_conditions(newpos,p){

if(newpos==5){
	stepup.play();
	$("#five").modal('show');
	setTimeout(function(){jumpmove(35,p)},2500);
	//alert('Concept approved in one go!, [Go up to 35]');
}
if(newpos==10){
	stepdown.play();
	$("#ten").modal('show');
	//alert('Client put project on hold [wait 2 turns]');
	skipper=2;
}
if(newpos==13){
	stepup.play();
	$("#thirteen").modal('show');
	setTimeout(function(){jumpmove(28,p)},2500);
	//alert('Won a new client pitch. Go up to 28');
}
if(newpos==17){
	stepup.play();
	$("#seventeen").modal('show');
	setTimeout(function(){jumpmove(25,p)},2500);
	//alert('Campaigns wins an award !, go up to 25');
}
if(newpos==21){
	stepdown.play();
	$("#twentyone").modal('show');
	setTimeout(function(){jumpmove(7,p)},2500);
	//alert('Working weekends !, go down to 07');
}
if(newpos==23){ 
	stepdown.play();
	$("#twentythree").modal('show');
	rollback=p;
	//alert('Client asked to switch to the original idea, [Move backwards until you roll 6 or 1]');
}
if(newpos==27){
	stepup.play();
	$("#twentyseven").modal('show');
	setTimeout(function(){jumpmove(29,p)},2500);
	//alert('Retainer extended for another year!, [move ahead 2 steps]');
}

if(newpos==30){ 
	stepdown.play();
	$("#thirty").modal('show');
	//alert('Client on leave- No feedback for a week, [skip one turn]');
	skipper=1;
}
if(newpos==32){ 
	stepup.play();
	$("#thirtytwo").modal('show');
	setTimeout(function(){jumpmove(40,p)},2500);
	//alert('Content goes viral on social media!, Go up to 40');
}
if(newpos==37){ 
	stepdown.play();
	$("#thirtyseven").modal('show');
	setTimeout(function(){jumpmove(14,p)},2500);
	//alert('Last minute changes!, Go down to 14');
}
if(newpos==41){ 
	stepup.play();
	$("#fortyone").modal('show'); 
	setTimeout(function(){jumpmove(44,p)},2500);
	//alert('Agency wins four new accounts in a month!, [move ahead 3 steps]');
}
if(newpos==45){ //
	stepup.play();
	$("#fortyfive").modal('show'); 
	setTimeout(function(){jumpmove(49,p)},2500);
	//alert("Team's campaign is an instant hit!, [jump to any square of your choice in the row]");
}
if(newpos==47){ 
	stepdown.play();
	$("#fortyseven").modal('show'); 
	setTimeout(function(){jumpmove(22,p)},2500);
	//alert("3 Days to go, Launch is preponed [go down to 22]");
}
if(newpos==51){ 
	stepup.play();
	$("#fiftyone").modal('show'); 
	setTimeout(function(){jumpmove(64,p)},2500);
	//alert("Client gives a glowing testimonial! [Go up to 64]");
}
if(newpos==55){ 
	stepdown.play();
	$("#fiftyfive").modal('show'); 
	//setTimeout(function(){jumpmove(64,p)},2000);
	//alert("Creative posted with the old logo [Skip one turn]");
	skipper=1;
}
if(newpos==60){ 
	stepdown.play();
	$("#sixty").modal('show'); 
	setTimeout(function(){jumpmove(33,p)},2500);
	//alert("Can you give me some more options? [go down to 33]");
}
if(newpos==63){ 
	stepdown.play();
	$("#sixtythree").modal('show'); 
	setTimeout(function(){jumpmove(33,p)},2500);
	//alert("Can you give me one more option? [go down to 33]");
}
if(newpos==65){ 
	stepdown.play();
	$("#sixtyfive").modal('show'); 
	setTimeout(function(){jumpmove(34,p)},2500);
	//alert("The 'quick edit' becomes a full rework. [go down to 34]");
}
if(newpos==69){ 
	stepdown.play();
	$("#sixtynine").modal('show'); 
	setTimeout(function(){jumpmove(1,p)},2500);
	//alert("Client changed the brief. [go to starting point]");
}
if(newpos==70){ 
	counter=2;
	winner.play();
	document.body.style.backgroundColor = "#23211f";
	document.getElementById('confetti').style.display='block';
	document.getElementById('rightcube').style.display='none';
	document.getElementById('trophysec').style.display='block';
	document.getElementById('msg').style.display='none';
	
	//alert("Winner!");
	if(p=='pawn')
	{	
		document.getElementById('msg').innerHTML=document.getElementById('savedname').value+" is Winner! Congratulations";
		blinkpawn('pawn');

	}
	else{
		document.getElementById('msg').innerHTML='Company is Winner! Better Luck Next Time';
		blinkpawn('computer');
	}
}

}


function blinkpawn(p){

if(p=='pawn'){
	var elementpawn = document.getElementById("pawn");
 		 elementpawn.classList.add("blink");
 		 var elementcomputer = document.getElementById("computer");
  		elementcomputer.classList.remove("blink");
}else{
	var elementpawn = document.getElementById("pawn");
 		 elementpawn.classList.remove("blink");
 		 var elementcomputer = document.getElementById("computer");
  		elementcomputer.classList.add("blink");
}

}


