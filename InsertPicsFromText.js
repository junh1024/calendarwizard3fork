var file1 = File.openDialog("select text file");
file1.open("r");

mypath=file1.readln () ; //1st line is path
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
// if (imageList[i] instanceof File) {
	var fileName = mypath+lines[i];

	if( firstImageLayer ) 
	{
		newLayer = document.layers[0];
		firstImageLayer = false;
	} else 
	{
		newLayer = document.layers.add();
	}
	// Give the layer the name of the image file
	newLayer.name = lines[i].substring(0, fileName.indexOf(".") );

	// Place the image on the artboard
	var thisfile = File(fileName);
	// alert(fileName);
	// alert(thisfile);
	// var thisfile = File("\~\Pictures\KC\AL Ships2\marker\AL Atago.png");
	newGroup = newLayer.groupItems.createFromFile( thisfile );
	newGroup.position = [ posX , posY ];
	// }
// }
	posX += newGroup.width;
	if(posX > (newGroup.width*16)) 
	{
		posX = 0;
		posY -= newGroup.height;
	}
}
