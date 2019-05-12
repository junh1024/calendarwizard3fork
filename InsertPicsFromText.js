var file1 = File.openDialog("select text file","*.txt");
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
var spacing=0;

// var horizontal = true;
var horizontal = false;
var toplace;
function resetline()
{
	if(horizontal)
	{
		posX=0;
		posY=-spacing;
	}
	else
	{
		posY=0;
		posX=+spacing;
	}
}

function CheckSetSpacing(input)
{
	if(input>spacing)
	{
		spacing=input;
	}
}

for (var i = 0; i < lines.length; i++)
{
	line=lines[i];

	if(line.search("[:/\\\\]")>0) //it's a path
	{
		mypath=line;
		resetline()
	}
	else if(line.indexOf(".")>0)  //it's a file
	{
		var fileName = mypath+line;
		var picture = File(fileName);

		// Place the image on the artboard
		try
		{
		// newGroup = newLayer.groupItems.createFromFile( picture ); //embed file
		// newLayer.name = line.substring(0, line.indexOf(".") );
			toplace = document.placedItems.add() //reference file
			toplace.name=line;
			toplace.file=picture;
			toplace.position=[posX , posY];
			
			if(horizontal)
			{
				posX += toplace.width;
				CheckSetSpacing(toplace.height);
			}	
			else
			{
				posY -= toplace.height;
				CheckSetSpacing(toplace.width);
			}
		}
		catch(e)
		{
			//alert("error on " + line);
		}
	// if(i%10==0)
	// {resetline();}

	}
	else   //it's a text
	{
		// alert("text"+line);
		// resetline();
		// var aTF = document.textFrames.add();
		// aTF.contents = line;
		// aTF.position = [posX,posY];
	}
}
