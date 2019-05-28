module.exports = function main(str) {
    var r=["","",""];
	for(var i=0;i<str.length;i++){
		if(str.charAt(i)=='0'){
			r[0]+="._.";
			r[1]+="|.|";
			r[2]+="|_|";
		}
		else if(str.charAt(i)=='1'){
			r[0]+="...";
			r[1]+="..|";
			r[2]+="..|";
		}
		else if(str.charAt(i)=='2'){
			r[0]+="._.";
			r[1]+="._|";
			r[2]+="|_.";
		}
		else if(str.charAt(i)=='3'){
			r[0]+="._.";
			r[1]+="._|";
			r[2]+="._|";
		}
		else if(str.charAt(i)=='4'){
			r[0]+="...";
			r[1]+="|_|";
			r[2]+="..|";
		}
		else if(str.charAt(i)=='5'){
			r[0]+="._.";
			r[1]+="|_.";
			r[2]+="._|";
		}
		else if(str.charAt(i)=='6'){
			r[0]+="._.";
			r[1]+="|_.";
			r[2]+="|_|";
		}
		else if(str.charAt(i)=='7'){
			r[0]+="._.";
			r[1]+="..|";
			r[2]+="..|";
		}
		else if(str.charAt(i)=='8'){
			r[0]+="._.";
			r[1]+="|_|";
			r[2]+="|_|";
		}
		else if(str.charAt(i)=='9'){
			r[0]+="._.";
			r[1]+="|_|";
			r[2]+="..|";
		}
		if(i!=str.length-1){
			r[0]+=" ";
			r[1]+=" ";
			r[2]+=" ";
		}
	}
	r[0]+="\n";
	r[1]+="\n";
	r[2]+="\n";
	console.log(r[0]+r[1]+r[2]);
    return r[0]+r[1]+r[2];
};