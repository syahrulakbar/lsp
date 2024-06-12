<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Convert JSON Array to Excel</title>
  <style>
    #downloadExcel {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      border: none;
      background-color: #4CAF50;
      color: white;
      border-radius: 5px;
    }

    #downloadExcel:hover {
      background-color: #45a049;
    }
  </style>
</head>
<body>
  <button id="downloadExcel">Download Excel</button>

  <script>
    // Function to load the xlsx library
    function loadXLSXLibrary(callback) {
      const script = document.createElement('script');
      script.src = "https://cdn.jsdelivr.net/npm/xlsx@0.17.0/dist/xlsx.full.min.js";
      script.onload = callback;
      document.head.appendChild(script);
    }

    // Function to create a workbook with formatted data
    function createWorkbook(data) {
      // Create a new workbook
      const wb = XLSX.utils.book_new();

      // Add a worksheet with the data
      const ws = XLSX.utils.aoa_to_sheet(data);

      // Apply styles to headers
      const headerStyle = {
        font: { bold: true },
        fill: {
          fgColor: { rgb: "FFFF00" }
        },
        alignment: { horizontal: "center" }
      };



      ws['!cols'] = data[0].map(() => ({ wch: 15 }));

      XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

      return wb;
    }

    // Function to trigger the download of the Excel file
    function downloadExcelFile() {
      const data = [
        ["User ID", "Home Location", "First Name", "Last Name"],
        ["0471258442", "Kantor Pusat", "SUYANTO", "SUYANTO"],
        ["0473251841", "Kantor Pusat", "HENDRIANTO", "SETIAWAN"],
        ["0477262141", "Kantor Pusat", "LISWANTO", "UTOMO W."]
      ];

      const wb = createWorkbook(data);
      XLSX.writeFile(wb, "data.xlsx");
    }

    document.getElementById("downloadExcel").addEventListener("click", downloadExcelFile);

    // Load the xlsx library
    loadXLSXLibrary(() => {
      console.log("XLSX library loaded");
    });
  </script>
</body>
</html>
