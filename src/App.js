import './App.css';
import pix from './data/Data.js';
import {useState} from 'react';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import pixLogo from "./img/pix_logo.png"
import qrCode from "./img/qrcode.jpg"
import Divider from '@mui/material/Divider';


function App() {

  const [copyText, setCopyText] = useState("Copiar código (PIX Copia e cola)");

  function Copy() {
    navigator.clipboard.writeText(pix.código)
    setCopyText('Código copiado!!!');
    setTimeout(() => {
      setCopyText("Copiar código (PIX Copia e cola)");
    }, 3000);

  }

  return (
    <div className="App">
      <Grid container direction="column" alignItems="center" sx={{padding: "30px"}}>
        <Grid item xs={12}>
          <span style={{marginBottom:3}} >Valor: </span>
          <b style={{color: "#2EBDAF", paddingRight: 5}}>{pix.valor}</b>
          <span style={{padding:6, borderStyle: "solid", borderWidth:1}}>
            <img src={pixLogo} alt='pix logo' style={{ width: 60, height: 20}}></img>
          </span>
          
        </Grid>
      </Grid>
      <Divider />
      <Grid container direction="column" alignItems="left">
        <Grid item xs={12}>
          <ol>
            <li>Copie o código abaixo</li>
            <li>Cole no seu banco na função</li>
          </ol>
        </Grid>
        <Grid item xs={12} sx={{paddingLeft: 3}}>
          <b>PIX Copia e Cola</b>
        </Grid>
        <Grid item xs={12} sx={{
          bgcolor: "#edf2f4", 
          paddingTop: 1, 
          paddingBottom: 1, 
          marginLeft: 3, 
          marginRight: 3,
          marginTop: 3,
          borderStyle: "solid",
          borderWidth: 1
          }}>
          <div style={{userSelect: "none", marginLeft: 3, textAlign:'center ',textJustify: 'none'}}>
            {pix.código}
          </div>
        </Grid>
        <Grid container direction="column" alignItems="center" sx={{marginTop: 3, marginBottom: 3}}>
          <Grid item xs={12}>
            <Button 
            variant="contained" 
            sx={{
              color: "white",
              backgroundColor: "green",
              '&:hover': {
                backgroundColor: '#2a9d8f'},
              '&:active': {
                backgroundColor: '#2a9d8f'},
            }}
            onClick={Copy}
    
            >
              {copyText}
              
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Divider/>
      
      <Grid container direction="column" alignItems="left">
        <Grid item xs={12} sx={{paddingLeft: 3, marginTop: 3,}}>
          <b style={{fontWeight: "bold"}}>Você também pode tentar lendo nosso QRCode?</b>
        </Grid> 
        <Grid item xs={12}>
          <ol>
            <li>Abra o aplicativo do seu banco no celular</li>
            <li>Selecione a opção de pagar com Pix / escanear QR code</li>
            <li>Após o pagamento, você receberá por email os dados de acesso à sua compra (verifique a caixa de SPAM)</li>
          </ol>
        </Grid>
      </Grid>
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <img src={qrCode} alt='pix qrcode'  style={{ width: 300, height: "auto"}}></img>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" href={pix.site} sx={{
              color: "white", 
              backgroundColor: "red", 
              '&:hover': {
                backgroundColor: '#e63946'},
              '&:active': {
                backgroundColor: '#e63946'},
              marginTop: 3, 
              marginBottom: 3}}>
              Já realizei o Pagamento
            </Button>
          </Grid>
        </Grid>
      
    </div>
  );
}

export default App;
