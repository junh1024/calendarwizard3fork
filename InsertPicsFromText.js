var file1 = File.openDialog("select text file");
file1.open("r");

// mypath=file1.readln () ; //1st line is path
lines=file1.read().split('\n');

var document=app.activeDocument;  ;
var mm = 2.83464567; // Metric MM converter…	
// Set the script to work with artboard rulers	
app.coordinateSystem = CoordinateSystem.ARTBOARDCOORDINATESYSTEM;	

var firstImageLayer = true;
var newLayer;
var thisPlacedItem;
var posX=0;
var posY=0;
var count=0;

// var imageList = lines.getFiles();

for (var i = 0; i < lines.length; i++)
{
	line=lines[i]	;
	
	if(line.search("[:/\\\\]")>0) //it's a path
	{
		mypath=line;
	}
	else if(line.indexOf(".")>0)  //it's a file
	{
		var fileName = mypath+line;
		var picture = File(fileName);

		if( firstImageLayer ) 
		{	newLayer = document.layers[0]; 	firstImageLayer = false; }
		else 
		{	newLayer = document.layers.add();	}

		
		newLayer.name = line.substring(0, line.indexOf(".") );

		// Place the image on the artboard

		newGroup = newLayer.groupItems.createFromFile( picture );
		newGroup.position = [ posX , posY ];

		// }
		posX += newGroup.width;
		if(posX > (newGroup.width*16)) 
		{
			posX = 0;
			posY -= newGroup.height;
		}
		
	}
	else   //it's a text
	{
		alert("text"+line);
	}

}
