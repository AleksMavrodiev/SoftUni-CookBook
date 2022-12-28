import { html } from "./node_modules/lit-html/lit-html.js";

let context = null;


export async function showHome(ctx){
    context = ctx;
    const responce =  await fetch("http://localhost:3030/jsonstore/cookbook/recipes");
    const data = await responce.json();

    const reformedData = Object.values(data);
    const content =  reformedData.map(recipe => createTemplate(recipe));
    ctx.render(content);
    
}

function createTemplate(recipe){
    return html`
        <article @click=${clickHandler} class="preview" recipeId="${recipe._id}">
            <div class="title">
                <h2>${recipe.name}</h2>
            </div>
            <div class="small">
                <img src="${recipe.img}">
            </div>
        </article>
    `
}

function clickHandler(e){
    let id = e.target.attributes[1].value;
    context.page.redirect(`/details/${id}`);
}
