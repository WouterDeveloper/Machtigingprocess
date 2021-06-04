import { imgData } from '../js/pdf_img'

$( document ).ready(function() {
    $('#button').click(function() {
        if ($("#machtiging-soort").val()=="" || $("#machtiging-naam").val()=="" || $("#machtiging-startDatum").val()=="" || $("#machtiging-eindDatum").val()=="") {
            alert ("Vul alstublieft alle velden in.")
        }
        else{
            var doc = new jsPDF();
  
            doc.addImage(imgData, 'JPEG',0,0,210,297);
            
            var d = new Date();
            var month = d.getMonth()+1;
            var day = d.getDate();
    
            var datum = d.getFullYear() + '/' +
                (month<10 ? '0' : '') + month + '/' +
                (day<10 ? '0' : '') + day;
    
            var machtigingSoort = $('#machtiging-soort').val();
            var machtigingNaam = $('#machtiging-naam').val();
            var machtigingStartDatum = $('#machtiging-startDatum').val();
            var machtigingEindDatum = $('#machtiging-eindDatum').val();
            
            doc.addFont('rijksoverheidsansheading-bold');
            // doc.setFont('rijksoverheidsansheading-bold');
            // doc.setFontType('bold');
            doc.setFontSize(18);
            doc.setTextColor(0, 26, 39);
            
            doc.text(105, 250, datum);
            doc.text(105, 164, machtigingSoort);
            doc.text(105, 177, machtigingNaam);
            doc.text(105, 189, machtigingStartDatum);
            doc.text(105, 202, machtigingEindDatum);
            doc.save('Machtigingprocess-resultaat.pdf');
        }

    });        

  });

