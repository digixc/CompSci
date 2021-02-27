var Features = ["Organisation", 'Ideas', 'Voice', 'Sentence Fluency', 'Word Choice', 'Conventions'];
      var images = ["img/pencil.png", "img/idea.png", "img/ruler.png", "img/note.png","img/pencil.png","img/idea.png"];

        // $("#btnPrint").live("click", function () 

       function updateSticker() {

        var x = document.getElementById("form1");
        var date = x.elements[0].value;
        var Objective = x.elements[1].value;

        var table = '<table style="border-collapse: collapse;">';

        table +='<tr><td style="border: 1px solid black;padding: 0.5rem;text-align: left;" colspan="1"> Date:' + date + '</td><td colspan=3 style="border: 1px solid black;padding: 0.5rem;text-align: left;">Learning Objective:<br> '+ Objective + '</td></tr>';

        table += '<tr><td style="border: 1px solid black;padding: 0.5rem;text-align: center;" rowspan="2">Features</td><td style="border: 1px solid black;padding: 0.5rem;text-align: center;" rowspan="2" class="long">Success Criteria</td><td style="border: 1px solid black;padding: 0.5rem;text-align: center;" colspan="2">Self/Peer Assessment</td></tr>';

        table += '<tr><td style="border: 1px solid black;padding: 0.5rem;text-align: center;"><img src="img/YES.png" style="width: 25px;"></td><td style="border: 1px solid black;padding: 0.5rem;text-align: center;"><img src="img/NO.png" style="width: 25px;"></td></tr>';
         
           
  for (var i = 2; i < 8; i++) {

    table += "<tr><td  style='border: 1px solid black;padding: 0.5rem;text-align: left;'>" + Features[i-2] + "<img src='"+ images[i-2] + "' style='width: 40px;'>" 
     + "</td><td style='border: 1px solid black;padding: 0.5rem;text-align: left;'>" + x.elements[i].value
   
     + "</td><td style='border: 1px solid black;padding: 0.5rem;text-align: left;'>" +
        
        "</td>" + "<td style='border: 1px solid black;padding: 0.5rem;text-align: left;'></td></tr>";
    };
      

            var toPrint = "<button class='btn btn-primary' onclick='printPDF()'>Print Sticker</button> ";
            document.getElementById("dvContainer").innerHTML = table + '</table><br>';

            document.getElementById("print").innerHTML = toPrint;
            // document.getElementById("save").innerHTML = toSave;

        };

      function printPDF() {
          var divContents = $("#dvContainer").html();
          var printWindow = window.open('', '', 'height=400,width=800');
          printWindow.document.write('<html><head><link rel="stylesheet" href="css/myStyle.css"></head><title>DIV Contents</title>');
          printWindow.document.write('</head><body><div class="content">');
          printWindow.document.write(divContents);
          printWindow.document.write('</div></body></html>');
          printWindow.document.close();
          printWindow.print();

      };

      function savePDF() {
        var doc = new jsPDF();
        var elementHTML = $('#dvContainer').html();
        var specialElementHandlers = {
            '#elementH': function (element, renderer) {
                return true;
            }
        };
        doc.fromHTML(elementHTML, 15, 15, {
            'width': 170,
            'elementHandlers': specialElementHandlers
        });

        // Save the PDF
        doc.save('sample-document.pdf');
      };