import { html } from "./node_modules/lit-html/lit-html.js";

export async function showDetailsView(ctx){
    let id = ctx.params.id;
    const data = await fetch(`http://localhost:3030/jsonstore/cookbook/details/${id}`);
    const responce = await data.json();
    const content = createTemplate(responce);
    ctx.render(content);
}

function createTemplate(data){
    return html`
        <article>
            <h2>${data.name}</h2>
            <div class="band">
                <div class="thumb">
                    <img src="/${data.img}">
                </div>
                <div class="ingredients">
                    <h3>Ingredients:</h3>
                    <ul>
                        ${data.ingredients.map(x => ingredientsTemplate(x))}
                    </ul>
                </div>
            </div>
            <div class="description">
                <h3>Preparation:</h3>
                ${data.steps.map(x => preparationTemplate(x))}
            </div>
        </article>
    `
}

function ingredientsTemplate(ingredient){
    return html`<li>${ingredient}</li>`
}

function preparationTemplate(instruction){
    return html`<p>${instruction}</p>`
}