var Features = ["Organisation", 'Ideas', 'Voice', 'Sentence Fluency', 'Word Choice', 'Conventions'];
      var images = ["img/org-1.png", "img/idea-1.png", "img/voice-1.png", "img/fluency-1.png","img/wordchoice-1.png","img/convention-1.png"];

        // $("#btnPrint").live("click", function () 

       function updateSticker() {

        var x = document.getElementById("form1");
        var date = x.elements[0].value;
        var Objective = x.elements[1].value;
        Objective= Objective.replace(/\n/g,"<br>").replace(/\r/g,"<br>");


        var table = '<table style="border-collapse: collapse; background-color: white;">';

        table +='<tr><td style="border: 1px solid black;padding: 0.5rem;text-align: left;font-weight: bold;" colspan="1"> Date: ' + date + '</td><td colspan=2 style="border: 1px solid black;padding: 0.5rem;text-align: left; font-weight: bold;">Learning Objective:<br> '+ Objective + '</td></tr>';

        table += '<tr><td style="border: 1px solid black;padding: 0.5rem;text-align: center; font-weight: bold;">Features</td><td style="border: 1px solid black;padding: 0.5rem;text-align: center;font-weight: bold;" class="long" >Success Criteria</td><td style="border: 1px solid black;padding: 0.5rem;text-align: center;font-weight: bold;">Self/Peer Assessment</td></tr>';

         
           
  for (var i = 2; i < 8; i++) {

    table += "<tr><td  style='border: 1px solid black;padding: 0.5rem;text-align: left;font-weight: bold;'>" + Features[i-2] + "<img src='"+ images[i-2] + "' style='width: 40px;'>" 
     + "</td><td style='border: 1px solid black;padding: 0.5rem;text-align: left;'>" + x.elements[i].value.replace(/\n/g,"<br>").replace(/\r/g,"<br>")
   
     + "</td><td style='border: 1px solid black;padding: 0.5rem;text-align: left;'>" +
        
        "</td></tr>";
    };
      

            var toPrint = "<button class='btn btn-primary' onclick='printPDF()'>Print Sticker</button> ";
            document.getElementById("dvContainer").innerHTML = table + '</table><br>';

            document.getElementById("print").innerHTML = toPrint;
            // document.getElementById("save").innerHTML = toSave;

        };

      function printPDF() {
          var divContents = $("#dvContainer").html();
          var printWindow = window.open('', '', 'height=1200,width=800');
          printWindow.document.write('<html><head><link rel="stylesheet" href="css/printSticker.css"></head><title>Learning Stickers</title>');
          printWindow.document.write('</head><body><div class="content">');
          printWindow.document.write(divContents);
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