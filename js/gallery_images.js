var imgurl1 = "https://gitee.com/spjsjg/images-2020/raw/master/"
var imgurl2 = "https://raw.githubusercontent.com/spjsjg/images-2020/master/"
var imgurl3 = "https://coding.net/u/c2726139513/p/images-2020/git/raw/master/"
var imgurl4_1 = "https://dev.azure.com/chengsanping123/6a5f0f3a-b511-4496-97c1-5225a1f263c2/_apis/git/repositories/73e4682c-679f-49eb-998a-379a678c4c2d/items?path=%2F"
var imgurl4_2 = "&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0"
var imgurl5 = "images/"
var str = new Array();
var str1 = new Array();
var str2 = new Array();
var mon = new Array();
var nm = new Array();
var str3 = 
	'<div class="zoom-container">'
	+	'<div class="zoom-caption">'
	+		'<div class="caption-inner">'
	+			'<div class="caption-inner1">'
	+				'<i class="fa fa-eye"></i>'
	+			'</div>'
	+		'</div>'
	+	'</div>';

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		deal_with(this);
	}
};
xhttp.open("GET", "images-2020.txt", true);
xhttp.send();

function deal_with(xml) {
	contents = xml.responseText;
	var line = contents.split("\n");
	for (var i=0; i<line.length; i++)
	{
		var data = line[i].split(" ")
		mon[i] = data[0]
		nm[i] = data[2]
		str1[i]='<a class="example-image-link" href="'+imgurl4_1+'images%2F'+nm[i]+imgurl4_2+'" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">'
		str2[i]='<img class="example-image" src="'+imgurl4_1+'images%2Fthumb%2F'+nm[i]+imgurl4_2+'" alt=""/>'
//		str1[i]='<a class="example-image-link" href="'+imgurl5+'index/'+name[i]+'" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">'
//		str2[i]='<img class="example-image" src="'+imgurl5+'index/thumb/'+name[i]+'" alt=""/>'
		str[i]=	
			'<div class="col-1-6">'
		+		'<div class="wrap-col">'
		+			'<div class="item">'
		+	str1[i]+str3+str2[i]
		+				'</div>'
		+			'</a>'
		+		'</div>'
		+	'</div>';
		document.write(str[i]);
	};
}
