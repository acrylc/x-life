var width = 800;
var height = 800;

// initialize size of canvas
el = $("#gol-container");
el.css({"width":width, "height":height});

var cellSize = 2;
var cellsW = Math.floor(width/cellSize);
var cellsH = Math.floor(height/cellSize);
var cells=[];
var cells2 = [];

// initalize empty matrix
var initMat = function(mat,w,h){
	for (var i=0;i<w;i++){
		mat[i]=[];
		for (var j=0;j<h;j++){
			mat[i][j]=0;
		}
	}
};
initMat(cells,cellsW,cellsH);
initMat(cells2,cellsW,cellsH);

var c=document.getElementById("gol-container");
c.style.width  = width+'px';
c.style.height = height+'px';
c.width = width;
c.height = height;
var ctx=c.getContext("2d");


// Set random initali configuration
var initNumCells = 10000;
for (var i=0;i<initNumCells;i++){
	var x = Math.floor( Math.random()*cellsW );
	var y =  Math.floor( Math.random()*cellsH );
	cells[ x ][ y ] = 1;
	ctx.fillRect(x*cellSize,y*cellSize,cellSize,cellSize);
}

aliveMapping = [0,0,1,1,0,0,0,0,0];
deadMapping = [0,0,0,1,0,0,0,0,0];
var colorMapping = ['#FaFaFa','rgba(30,30,34,255)'];

myMod = function(m,n) {
	return ((m%n)+n)%n;
};

sumNeighbors = function(i,j){
	var sum = 0;
	for (var k=-1;k<=1;k++){
		for (var m=-1;m<=1;m++){
			if (m!==0 || k!==0){
				sum+= cells[ myMod( (i+k), cellsW) ][ myMod( (j+m), cellsH ) ];
			}
		}
	}
	//console.log(sum);
	return sum;
};

var lifeIt = function(){
	for (var i=0;i<cellsW;i++){
		for (var j=0;j<cellsH;j++){
			if (cells[i][j]==1){
				cells2[i][j] = aliveMapping[ sumNeighbors(i,j) ];
				//console.log(aliveMapping[ sumNeighbors(i,j) ]);
			} else {
				cells2[i][j] = deadMapping[ sumNeighbors(i,j) ];
				//console.log(deadMapping[ sumNeighbors(i,j) ]);
			}
		}
	}
	for (var i=0;i<cellsW;i++){
		for (var j=0;j<cellsH;j++){
			cells[i][j]=cells2[i][j];
			////console.log(cells[i][j]);
			////console.log(ctx);
			ctx.fillStyle=( colorMapping[cells[i][j]]);
			ctx.fillRect(i*cellSize,j*cellSize,cellSize,cellSize);
		}
	}
};

window.setInterval(function(){
  /// call your function here
  lifeIt();
}, 150);

