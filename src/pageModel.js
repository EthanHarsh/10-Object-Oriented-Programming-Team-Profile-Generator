const htmlTemplate = {
    start: `<!DOCTYPE html><html><head><!--Import Google Icon Font--><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"><!-- Compiled and minified CSS --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"><link rel="stylesheet" href="/src/vitamins.css"><!--Let browser know website is optimized for mobile--><meta name="viewport" content="width=device-width, initial-scale=1.0"/></head><body><header><nav><div class="nav-wrapper"><a href="#" class="brand-logo center">My Team</a></div></nav></header><main class="container m-5-top flex-row justify-space-between">`,
    cardStart: `<div class="row"><div class="col s12 m6"><div class="card w-25vw"><div class="card-content black-text">`,
    cardEnd: `</div></div></div></div>`
}

module.exports = htmlTemplate;