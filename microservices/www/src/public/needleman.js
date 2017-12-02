function needlemandata(sequences){


			//alert('hi');
			$.post('https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=sequences&id='+sequences+'&rettype=fasta&retmode=text',function(data){   
		     needleman(data);
			});
		}
function needleman(data){
		alert(data);
	    data=data.split('>');
		data=data.slice(1,data.length);
		n=data.length;
		alert(data.length);
		seq1=data[0];
		pos=data[0].indexOf('\n');
		seq1=data[0].slice(pos,data[0].length);
		pos=data[1].indexOf('\n');
		seq2=data[1].slice(pos,data[1].length);;

}