var imgurl2021 = "https://cdn.jsdelivr.net/gh/spjsjg/images-2021@master/"
var str2021 = new Array();
var str2021_1 = new Array();
var str2021_2 = new Array();
var mon2021 = new Array();
var monzh2021 = new Array();
var nm2021 = new Array();
var year2021 = "2021年"
var str2021_3 = 
	'<div class="zoom-container">'
	+	'<div class="zoom-caption">'
	+		'<div class="caption-inner">'
	+			'<div class="caption-inner1">'
	+				'<i class="fa fa-eye"></i>'
	+			'</div>'
	+		'</div>'
	+	'</div>';

var xhttp2021 = new XMLHttpRequest();
xhttp2021.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		deal_with2021(this);
	}
};
xhttp2021.open("GET", "images-2021.txt", true);
xhttp2021.send();

function deal_with2021(xml) {
	contents = xml.responseText;
	var line = contents.split("\n");
	var gl2021 = ""
	for (var i=0; i<line.length-1; i++)
	{
		var data = line[i].split(" ")
		mon2021[i] = data[0]
		nm2021[i] = data[2]
		str2021_1[i]='<a class="example-image-link" href="'+imgurl2021+'images/'+nm2021[i]+'" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">'
		str2021_2[i]='<img class="example-image" src="'+imgurl2021+'images/thumb/'+nm2021[i]+'" alt=""/>'
		str2021[i]=	
			'<div class="col-1-6">'
		+		'<div class="wrap-col">'
		+			'<div class="item">'
		+	str2021_1[i]+str2021_3+str2021_2[i]
		+					'</div>'
		+				'</a>'
		+			'</div>'
		+		'</div>'
		+	'</div>';
		switch(mon2021[i])
		{
			case "Jan":
				monzh2021[i]="1月";
				break;
			case "Feb":
				monzh2021[i]="2月";
				break;
			case "Mar":
				monzh2021[i]="3月";
				break;
			case "Apr":
				monzh2021[i]="4月";
				break;
			case "May":
				monzh2021[i]="5月";
				break;
			case "Jun":
				monzh2021[i]="6月";
				break;
			case "Jul":
				monzh2021[i]="7月";
				break;
			case "Aug":
				monzh2021[i]="8月";
				break;
			case "Sept":
				monzh2021[i]="9月";
				break;
			case "Oct":
				monzh2021[i]="10月";
				break;
			case "Nov":
				monzh2021[i]="11月";
				break;
			case "Dec":
				monzh2021[i]="12月";
				break;
		}
		if (mon2021[i] != mon2021[i-1])
		{
			gl2021 += '<p>'+year2021+monzh2021[i]+'</p>'
		}	
		gl2021 += str2021[i];
	};
	document.getElementById("gallery2021").innerHTML = gl2021
}
