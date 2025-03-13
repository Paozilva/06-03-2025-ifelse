function contador(){ //declara a funação"contador" os paréntesis vazias significa que não tem parámetro para ser enviado ou "coletado"
    const tempo = new Date(); //declara a variável
    clearTimeout();
    while (document.getElementById("cbxMarcarTempo").checked){

        let hora = tempo.getHours();
        let minuto = tempo.getMinutes();
        let segundo = tempo.getSeconds(); // declração da variável"segundo" temporária, a qual receberá o retorno no mètodo"get"
        console.log("hora;",hora, "minuto", minuto, "segundo", segundo)

        if(document.getElementById("cbxMarcarTempo").checked == true){ // e cuando esta por ejecutar, as proximas linhas (validador)
            document.getElementById("div_hora").innerText = hora; //colocar un texto de la hora 
            document.getElementById("div_minuto").innerText = minuto; //  colocar un texto de la hora 
            document.getElementById("div_segundo).innerText = segundo;  
        }
        setInterval(contador, 1000); // essa linha apenas conta 1 segundo
        if(document.getElementById("cbxMarcarTempo").checked == false){ // ele vai a validar que Não este verificado 
            document.getElementById("div_hora").innerText = ""; // ele vai a limpar"hora"
            document.getElementById("div_minuto").innerText = ""; // ele vai a limpar"minuto"
            document.getElementById("div_segundo").innerText = ""; // ele vai a limpar"segundo"
            clearInterval();

        } // encerrar o bloque de true
    } // encerra o bloque 
    
    document.getElementById("cbxMarcarTempo").addEventListener('click',() => {
        contador();  // esta adicionando una lista    
    }); // ela encierra o código bloqos