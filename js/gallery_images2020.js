var imgurl2020_1 = "https://gitee.com/spjsjg/images-2020/raw/master/"
var imgurl2020_2 = "https://raw.githubusercontent.com/spjsjg/images-2020/master/"
var imgurl2020_3 = "https://coding.net/u/c2726139513/p/images-2020/git/raw/master/"
var imgurl2020_4_1 = "https://dev.azure.com/chengsanping123/6a5f0f3a-b511-4496-97c1-5225a1f263c2/_apis/git/repositories/73e4682c-679f-49eb-998a-379a678c4c2d/items?path=%2F"
var imgurl2020_4_2 = "&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0"
var imgurl2020_5 = "images/"
var imgurl2020_6 = "https://cdn.jsdelivr.net/gh/spjsjg/images-2020@master/"
var str2020 = new Array();
var str2020_1 = new Array();
var str2020_2 = new Array();
var mon2020 = new Array();
var monzh2020 = new Array();
var nm2020 = new Array();
var year2020 = "2020年"
var str2020_3 = 
	'<div class="zoom-container">'
	+	'<div class="zoom-caption">'
	+		'<div class="caption-inner">'
	+			'<div class="caption-inner1">'
	+				'<i class="fa fa-eye"></i>'
	+			'</div>'
	+		'</div>'
	+	'</div>';

var xhttp2020 = new XMLHttpRequest();
xhttp2020.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		deal_with2020(this);
	}
};
xhttp2020.open("GET", "/images-2020.txt", true);
xhttp2020.send();

function deal_with2020(xml) {
	contents = xml.responseText;
	var line = contents.split("\n");
	var gl2020 = '<p>'+year2020+'</p>'
	for (var i=0; i<line.length-1; i++)
	{
		var data = line[i].split(" ")
		mon2020[i] = data[0]
		nm2020[i] = data[2]
//		str2020_1[i]='<a class="example-image-link" href="'+imgurl2020_4_1+'images%2F'+nm2020[i]+imgurl2020_4_2+'" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">'
//		str2020_2[i]='<img class="example-image" src="'+imgurl2020_4_1+'images%2Fthumb%2F'+nm2020[i]+imgurl2020_4_2+'" alt=""/>'
		str2020_1[i]='<a class="example-image-link" href="'+imgurl2020_6+'images/'+nm2020[i]+'" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">'
		str2020_2[i]='<img class="example-image" src="'+imgurl2020_6+'images/thumb/'+nm2020[i]+'" alt=""/>'
//		str2020_1[i]='<a class="example-image-link" href="'+imgurl2020_5+'index/'+nm2020[i]+'" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">'
//		str2020_2[i]='<img class="example-image" src="'+imgurl2020_5+'index/thumb/'+nm2020[i]+'" alt=""/>'
		str2020[i]=	
			'<div class="col-1-6">'
		+		'<div class="wrap-col">'
		+			'<div class="item">'
		+	str2020_1[i]+str2020_3+str2020_2[i]
		+					'</div>'
		+				'</a>'
		+			'</div>'
		+		'</div>'
		+	'</div>';
		gl2020 += str2020[i];
	};
	document.getElementById("gallery2020").innerHTML = gl2020
}