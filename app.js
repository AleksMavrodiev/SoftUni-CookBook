import {default as page} from './node_modules/page/page.mjs'
import {render} from './node_modules/lit-html/lit-html.js'
import { showHome } from './home.js';
import { showDetailsView } from './detailsView.js';

const main = document.querySelector('main');
main.innerHTML = "";

page(decorateContext);
page("/", () => showHome);
page("/details/:id", showDetailsView);
page("/index.html", showHome);
page.start();

function decorateContext(ctx, next){
    ctx.render = renderMain;

    next();
}

function renderMain(content){
    render(content, main);
}