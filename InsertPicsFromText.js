var file1 = File.openDialog("select text file");
file1.open("r");

lines=file1.read().split('\n');

var document=app.activeDocument;  ;
var mm = 2.83464567; // Metric MM converter…	
// Set the script to work with artboard rulers	
app.coordinateSystem = CoordinateSystem.ARTBOARDCOORDINATESYSTEM;	

var firstImageLayer = true;
var newLayer;
// var thisPlacedItem;
var posX=0;
var posY=0;
var newlineheight=0;
var newlinewidth=0;
// var horizontal = true;
var horizontal = false;
// var textleading=72;

function resetline()
{
	// if(horizontal)
	// {
		// posX=0;
		// posY=-newlineheight;
	// }
	// else
	// {
		// posY=0;
		// posX=+newlinewidth;

	// }
}

for (var i = 0; i < lines.length; i++)
{
	line=lines[i]	;
	
	if(line.search("[:/\\\\]")>0) //it's a path
	{
		mypath=line;
		resetline()
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
		// try
		// {
		// newGroup = newLayer.groupItems.createFromFile( picture );
			var toplace = document.placedItems.add()
			toplace.file=picture;
			toplace.position=[posX , posY];
			// img = document.place(picture);
			// imgFrame = img[0].parent;
			// imgFrame.move([posX , posY]);
			
			// newGroup.position = [ posX , posY ];
			// if(horizontal)
			// {
				// posX += newGroup.width;
				// newlineheight=newGroup.height;
			// }	
			// else		
			// {
				// posY -= newGroup.height;
				// newlinewidth=newGroup.width;
			// }
		// }
		// catch(e)
		// {
			// alert("error on " + line);
		// }


	}
	else   //it's a text
	{
		// alert("text"+line);
		// newlineheight
		// if(horizontal)
		// {
			// newlineheight=textleading;
		// }
		// else
		// {
			// newlinewidth=textleading;

		// }
		// resetline();
		// var aTF = document.textFrames.add();
		// aTF.contents = line;
		// aTF.position = [posX,posY];
	}

}
