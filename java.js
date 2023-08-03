function table() {
    let input = parseInt(document.getElementById('draw').value)
    demo = ' ';
    for (let i = 1; i<=input; i++){
        let row = '  ';
        for(let j = 1; j<=input; j++){
        row+=" * ";
    }
        demo += row +'<br>'
    }
        document.getElementById('demo').innerHTML=demo;
}