function generateQRCode() {
      const input = document.getElementById("text").value.trim();
      const downloadBtn = document.getElementById("downloadBtn");
      const downloadLink = document.getElementById("downloadLink");
      const qrText=document.getElementById("qrText");
      const qrImage = document.getElementById("qrImage");
      const qrcodeContainer=document.getElementById("qrcode");

      if (input === "") {
        alert("Please enter text or URL!");
        qrImage.style.display="none";
        downloadBtn.style.display="none";
        qrText.textContent="Your QR Code will display here"
        return;
      }
      qrImage.style.display="none";
      downloadBtn.style.display="none";
      qrText.style.display="block";
      qrText.textContent="Generating QR Code..";

      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(input)}&size=200x200`;
      //handle qr generating time
qrImage.onload=()=>{
      qrImage.src = qrUrl;
      qrImage.style.display = "block";
      downloadBtn.style.display = "inline-block";
      downloadLink.href = qrUrl;
      qrText.style.display="none";
     };
     //handle qr generation error
     qrImage.onerror=()=>{
          alert("Failed to load QR Code.Please try again later.");
          qrImage.style.display="none";
          downloadBtn.style.display="none";
          qrText.style.display="block";
          qrText.textContent="Error generating QR Code. Please try again later.";
         
     };

     qrImage.src=qrUrl;
    }

  
