function gerarQRCode()		
{
  let conteudoInput = document.getElementById('conteudoQRCode').value;
  let GoogleCharts = 'https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=';
  let imagemQRCode = GoogleCharts + conteudoInput;
  document.getElementById('imageQRCode').src = imagemQRCode;
   
}