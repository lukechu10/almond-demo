use yew::prelude::*;
use yew_functional::*;

#[function_component(App)]
pub fn app() -> Html {
    log::info!("rendered");

    let (source, set_source) = use_state(|| "".to_string());
    let (ast_json, set_ast_json) = use_state(|| "".to_string());

    use_effect_with_deps(
        move |deps| {
            let ast = almond::parse_program(deps.as_str().into());
            match ast {
                Ok(ast) => set_ast_json(serde_json::to_string_pretty(&ast.1).unwrap()),
                Err(_err) => set_ast_json("Syntax Error".into())
            }
            || ()
        },
        source,
    );

    html! {
        <>
            <h1>{ "Almond demo" }</h1>
            <main class="content">
                <textarea class="input" placeholder="Source code here..." oninput=Callback::from(move |ev: InputData| set_source(ev.value)) />
                <textarea class="output" readonly=true value=&ast_json />
            </main>
        </>
    }
}
