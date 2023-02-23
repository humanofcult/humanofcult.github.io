document.getElementById("folder").style.display = "none";
document.getElementById("files").style.display = "block";
document.getElementById("aboutMe").style.display = "none";
document.getElementById("lowerPart").style.display = "flex";


function filesOpen()
{
    document.getElementById("files").style.display = "none";
    document.getElementById("folder").style.display = "block";
}

function filesClose()
{
    document.getElementById("files").style.display = "block";
    document.getElementById("folder").style.display = "none";
    document.getElementById("aboutMe").style.display = "none";
    document.getElementById("lowerPart").style.display = "flex";
}

function back()
{
    if(document.getElementById("lowerPart").style.display == "none")
    {
        document.getElementById("aboutMe").style.display = "none";
        document.getElementById("lowerPart").style.display = "flex";
    }
    else
    {
        document.getElementById("files").style.display = "block";
        document.getElementById("folder").style.display = "none";
    }
}

function aboutMe()
{
    document.getElementById("aboutMe").style.display = "block";
    document.getElementById("lowerPart").style.display = "none";
}





var datetime = new Date().toLocaleTimeString();
document.getElementById("time").textContent = datetime;